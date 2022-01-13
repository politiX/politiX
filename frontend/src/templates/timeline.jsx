import React from "react";
import Layout from "../components/Layout";
import { graphql, navigate } from "gatsby";
import { Link } from "gatsby";
import * as styles from "../styles/timeline.module.css";

export default function Timeline({ data }) {
  // console.log(data.allStrapiTimeline.edges[0].node.articles)

  const timelineTitle = data.allStrapiTimeline.edges[0].node.title;

  let str = "active";

  const articlePreviews = data.allStrapiTimeline.edges[0].node.articles.map(
    (article) => (
      <Link
        to={"/timelines/" + timelineTitle + "/articles/" + article.title}
        key={article.id}
        state={{ category: data.allStrapiTimeline.distinct[0] }}
      >
        <div
          className={"article_preview_w " + str}
          key={article.id}
          sign={article.id}
        >
          <div className={"dot " + str} sign={article.id}>
            {(str = "")}
          </div>
          <h2>{article.title}</h2>
          <p>{article.preview}</p>
          <p className="pub">{article.date}</p>
        </div>
      </Link>
    )
  );

  // console.log(articlePreviews)

  const loadData = (category) => {
    setTimeout(() => {
      navigate("/", {
        state: { category },
      });
    }, 300);
  };

  if (typeof window !== undefined) {
    window.onscroll = function () {
      triggerScroll();
    };
  }

  function triggerScroll() {
    let timelinePreview = document.querySelectorAll(".article_preview_w");
    for (let i = 0; i < timelinePreview.length; i++) {
      let triggerPoint;
      let sign = timelinePreview[i].getAttribute("sign");
      let dot = document.querySelector('.dot[sign="' + sign + '"]');
      let prevSign;
      let preDot;
      if (i === 0) {
        triggerPoint = timelinePreview[i].offsetTop - window.scrollY;
        prevSign = sign;
        preDot = dot;
      } else {
        triggerPoint = timelinePreview[i - 1].offsetTop - window.scrollY;
        prevSign = timelinePreview[i - 1].getAttribute("sign");
        preDot = document.querySelector('.dot[sign="' + prevSign + '"]');
      }

      let scroll;
      if (typeof window !== undefined) {
        scroll = window.pageYOffset;
      }

      if (triggerPoint < 120) {
        if (i !== 0) {
          preDot.classList.remove("active");
        }
        dot.classList.add("active");
      } else if (dot.classList.contains("active") && i !== 0) {
        dot.classList.remove("active");
      }

      timelinePreview[i].classList.remove("active");

      if (scroll < 15) {
        let sign = timelinePreview[0].getAttribute("sign");
        let dot = document.querySelector('.dot[sign="' + sign + '"]');
        dot.classList.add("active");
      }
    }

    let els = document.querySelectorAll(".dot.active");
    if (els.length > 0) {
      if (els.length > 1) {
        els[1].parentElement.classList.add("active");
      } else {
        els[0].parentElement.classList.add("active");
      }
    }
  }

  let height;
  if (document.readyStat) {
    height =
      document.body.clientHeight -
      document.querySelector(".header").clientHeight -
      document.querySelector("footer").clientHeight -
      10 +
      "px";
  } else {
    height = 600 + "px";
  }
  let windowHeight = {
    height: height,
    display: "block",
  };

  return (
    <div className={styles.timeline}>
      <Layout loadData={loadData} category={data.allStrapiTimeline.distinct[0]}>
        <div className={styles.topBar}>
          <h1>{timelineTitle}</h1>
          <div className={styles.closeArticle}></div>
        </div>
        <div className={styles.timelineBody}>
          <div className={styles.scrollbar}></div>
          {/* <div className={styles.scrollball}></div> */}
          {articlePreviews}
        </div>
      </Layout>

      <div style={windowHeight}></div>
    </div>
  );
}

export const query = graphql`
  query MyQuery($timeline: String) {
    allStrapiTimeline(filter: { title: { eq: $timeline } }) {
      edges {
        node {
          title
          articles {
            id
            title
            preview
            date(fromNow: false, formatString: "DD.MM.YYYY")
          }
        }
      }
      distinct(field: category___title)
    }
  }
`;

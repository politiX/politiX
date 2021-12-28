import React from "react";
import Layout from "../components/Layout";
import { graphql, navigate } from "gatsby";
import { Link } from "gatsby";
import * as styles from "../styles/timeline.module.css";

export default function Timeline({ data }) {
  // console.log(data.allStrapiTimeline.edges[0].node.articles)

  const timelineTitle = data.allStrapiTimeline.edges[0].node.title;

  const articlePreviews = data.allStrapiTimeline.edges[0].node.articles.map(
    (article) => (
      <Link to={"/timelines/" + article.title} key={article.id}>
      <div className={styles.article_preview_w} key={article.id}>
        <h2>{article.title}</h2>
        <p>{article.preview}</p>
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

  window.onscroll = function () {
    triggerScroll();
  };

  return (
    <div className={styles.timeline}>
      <Layout loadData={loadData} category={data.allStrapiTimeline.distinct[0]}>
        <h1>{timelineTitle}</h1>
        <div className={styles.scrollbar}></div>
        {/* <div className={styles.scrollball}></div> */}
        {articlePreviews}
      </Layout>
    </div>
  );
}

function triggerScroll() {
  let timelinePreview = document.getElementsByClassName(
    "timeline-module--article_preview_w--9k4FG"
  );
  let minScroll = 20;
  for (let i = 0; i < timelinePreview.length; i++) {
    let articlepreviewHeight = timelinePreview[i].clientHeight
    console.log(window.scrollY);
    if (window.scrollY > 20) {
      console.log("jetzt");
    }
  }
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
          }
        }
      }
      distinct(field: category___title)
    }
  }
`;

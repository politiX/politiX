import React from "react";
import Layout from "../components/Layout";
import { graphql, navigate } from "gatsby";
import { Link } from "gatsby";
import * as styles from "../styles/article.module.css";
import { isConstValueNode } from "graphql";

export default function Article({ data, location, pageContext }) {
  // console.log(data.allStrapiArticle.edges[0].node.micro_article_container);
  // console.log(location.state.category);

  const articleTitle = data.allStrapiArticle.edges[0].node.title;
  const articleDate = data.allStrapiArticle.edges[0].node.date;
  const nextArticle = pageContext.next.title;
  const prevArticle = pageContext.prev.title;
  const route = pageContext.route;
  const back = pageContext.routeBack;

  let direction = "right";
  let bottomEnd;
  let topEnd;

  const indicator = function (i) {
    if (i % 3 === 0) {
      if (direction === "right") {
        direction = "left";
      } else {
        direction = "right";
      }
    }

    if (i === 0 || i % 3 === 0) {
      topEnd = "end";
    } else {
      topEnd = "";
    }

    if (((i + 1) % 3 === 0) || (i === data.allStrapiArticle.edges[0].node.micro_article_container.length - 1)) {
      bottomEnd = "end";
    } else {
      bottomEnd = "";
    }

    return direction;
  };

  const articleDetail =
    data.allStrapiArticle.edges[0].node.micro_article_container.map(
      (article, index) => (
        <div className={"micro_w " + indicator(index)} key={article.id}>
          <div className={"topStick " + topEnd}></div>
          <div className="img_w">
            <img src={article.image ? article.image.url : ""} alt="" />
          </div>
          <p>{article.text}</p>
          <div className={"imgStick " + bottomEnd}></div>
        </div>
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

  return (
      <Layout loadData={loadData} category={location.state.category}>
        <div className={styles.topBar}>
          <h1>{articleTitle}</h1>
          <img
            src="/up.svg"
            alt=""
            onClick={() => {
              navigate(route + prevArticle, {
                state: { category: location.state.category },
              });
            }}
          />
          <img
            src="/down.svg"
            alt=""
            onClick={() => {
              navigate(route + nextArticle, {
                state: { category: location.state.category },
              });
            }}
          />
          <img
            src="/close_.svg"
            alt=""
            onClick={() => {
              navigate(back);
            }}
          />
          {/* </Link>  */}
        </div>
        <div className={styles.sideBar}></div>
        <div className={styles.art_w}>
          {articleDetail}
          <div className={styles.bottom}>
            <p className={styles.date}>{articleDate}</p>
            <div className={styles.next_w}>
              <p>Nächster Artikel</p>
              <img
                src="/down_round.svg"
                alt=""
                onClick={() => {
                  navigate(route + nextArticle, {
                    state: { category: location.state.category },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
  );
}

export const query = graphql`
  query MyQuery2($article: String) {
    allStrapiArticle(filter: { title: { eq: $article } }) {
      edges {
        node {
          id
          micro_article_container
          date(fromNow: false, formatString: "DD.MM.YYYY")
          title
        }
        next {
          title
        }
      }
    }
  }
`;

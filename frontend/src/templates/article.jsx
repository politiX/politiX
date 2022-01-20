import React from "react";
import Layout from "../components/Layout";
import {graphql, navigate} from "gatsby";
import {Link} from "gatsby";
import * as styles from "../styles/article.module.css";
import {isConstValueNode} from "graphql";

export default function Article({data, location, pageContext}) {
    // console.log(data.allStrapiArticle.edges[0].node.micro_article_container);
    // console.log(location.state.category);

    const articleTitle = data.allStrapiArticle.edges[0].node.title;
    const articleDate = data.allStrapiArticle.edges[0].node.date;
    const nextArticle = pageContext.next.title
    const prevArticle = pageContext.prev.title
    const route = pageContext.route
    const back = pageContext.routeBack

    let direction = "right";
    let end;
    const indicator = function (i) {
        if (i % 3 === 0) {
            if (direction === "right") {
                direction = "left";
            } else {
                direction = "right";
            }
        }

        if ((i + 1) % 3 === 0) {
            end = "end";
        } else {
            end = "";
        }

        return direction;
    };

    const articleDetail =
        data.allStrapiArticle.edges[0].node.micro_article_container.map(
            (article, index) => (
                <div className={"micro_w " + indicator(index)} key={article.id}>
                    <div className="img_w">
                        <img src={article.image ? article.image.url : ""} alt=""/>
                    </div>
                    <div className={"imgStick " + end}></div>
                    <p>{article.text}</p>
                </div>
            )
        );

    // console.log(articlePreviews)

    const loadData = (category) => {
        setTimeout(() => {
            navigate("/", {
                state: {category},
            });
        }, 300);
    };

    if (typeof window !== undefined) {
        window.onscroll = function () {
            fitImgStick();
        };
    }

    function fitImgStick() {
        let articleELements = document.querySelectorAll(".micro_w");
        let imgSticks = document.querySelectorAll(".imgStick");
        // let iconDots = document.querySelectorAll(".img_w");
        // for (let i = 0; i < articleELements.length - 1; i++) {
        //   let stickLength =
        //     iconDots[i + 1].offsetTop + iconDots[i].offsetTop;
        //     // imgSticks[i].setAttribute("style", "top:" + stickLength / 2 + "px");
        //     imgSticks[i].setAttribute("style", "height:" + stickLength + "px;");
        //   console.log(iconDots[i + 1].offsetTop);
        //   console.log(iconDots[i].offsetTop);
        //   console.log(iconDots[i]);
        // }
        let lastELement = articleELements[articleELements.length - 1];
        let lastImgStick = lastELement.children[1];
        //  = lastIcon.children[1];
        if (!lastImgStick.classList.contains("end")) {
            lastImgStick.classList.add("end");
        }
    }

    return (
        <div className={styles.timeline}>
            <Layout loadData={loadData} category={location.state.category}>
                <div className={styles.topBar}>
                    <h1>{articleTitle}</h1>
                    {/* Hier muss noch der Link gebaut werden um zurück zur betreffenden Timeline zu kommen */}
                    {/* <Link to={navigate(-1)}> */}
                    <img src="/up.svg" alt="" onClick={()=>{navigate(route+prevArticle, {state: {category: location.state.category}})}}/>
                    <img src="/down.svg" alt="" onClick={()=>{navigate(route+nextArticle, {state: {category: location.state.category}})}}/>
                    <img src="/close_.svg" alt="" onClick={() => {
                        navigate(back)
                    }}/>
                    {/* </Link>  */}
                </div>
                <div className={styles.sideBar}></div>
                <div className={styles.art_w}>
                    {articleDetail}
                    <div className={styles.bottom}>
                        <p className={styles.date}>{articleDate}</p>
                        <div className={styles.next_w}>
                            <p>Nächster Artikel</p>
                            <img src="/down_round.svg" alt="" onClick={()=>{navigate(route+nextArticle, {state: {category: location.state.category}})}}/>
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
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
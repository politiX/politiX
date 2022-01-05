import React from "react";
import Layout from "../components/Layout";
import {graphql, navigate} from "gatsby";
import {Link} from "gatsby";
import * as styles from "../styles/article.module.css";

export default function Article({data, location}) {
    console.log(data.allStrapiArticle.edges[0].node.micro_article_container)
    console.log(location.state.category)

    const articleTitle = data.allStrapiArticle.edges[0].node.title;
    const articleDate = data.allStrapiArticle.edges[0].node.published_at;

    let direction = 'right'
    let end
    const indicator = function (i) {
        if ((i % 3) === 0) {
            if (direction === 'right') {
                direction = 'left'
            } else {
                direction = 'right'
            }
        }

        if ((i+1)%3 === 0) {
            end = 'end'
        } else {
            end = ''
        }

        return direction
    }

    const articleDetail = data.allStrapiArticle.edges[0].node.micro_article_container.map(
        (article, index) => (
            <div className={'micro_w ' + indicator(index)} key={article.id}>
                <div className='img_w'>
                    <img src={
                        article.image
                            ? article.image.url
                            : ""
                    }
                         alt=""/>
                    <div className={'imgStick ' + end}></div>
                </div>
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

    return (
        <div className={styles.timeline}>
            <Layout loadData={loadData} category={location.state.category}>
                <h1 className={styles.topBar}>{articleTitle}</h1>
                <div className={styles.art_w}>
                    {articleDetail}
                    <p className={styles.date}>{articleDate}</p>
                </div>
            </Layout>
        </div>
    );
}


export const query = graphql`
query MyQuery2($article: String) {
    allStrapiArticle(filter: {title: {eq: $article}}) {
        edges {
            node {
                id
                micro_article_container
                published_at(fromNow: false, formatString: "DD.MMMM.YYYY")
                title
            }
        }
    }
}
`;
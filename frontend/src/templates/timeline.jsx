import React from "react";
import Layout from "../components/Layout";
import {graphql, navigate} from "gatsby";
import * as styles from '../styles/timeline.module.css'

export default function Timeline({ data }) {

    // console.log(data.allStrapiTimeline.edges[0].node.articles)

    const timelineTitle = data.allStrapiTimeline.edges[0].node.titel

    const articlePreviews = data.allStrapiTimeline.edges[0].node.articles.map((article) =>
        <div className={styles.article_preview_w} key={article.id}>
            <h2>{article.titel}</h2>
            <p>{article.preview}</p>
        </div>
    )

    // console.log(articlePreviews)

    const loadData = (category) => {
        setTimeout(() => {
            navigate(
                "/",
                {
                    state: { category }
                }
            )
        }, 300)

    }

    return (
        <div className={styles.timeline}>
        <Layout loadData={loadData} category={data.allStrapiTimeline.distinct[0]}>

            <h1>
                {timelineTitle}
            </h1>
            {articlePreviews}
        </Layout>
        </div>
    )
}

export const query = graphql `
    query MyQuery($timeline: String) {
        allStrapiTimeline(filter: {titel: {eq: $timeline}}) {
            edges {
                node {
                    titel
                    articles {
                        id
                        titel
                        preview
                    }
                }
            }
            distinct(field: category___titel)
        }
    }
`
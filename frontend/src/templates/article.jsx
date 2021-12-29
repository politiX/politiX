import React from "react";
import Layout from "../components/Layout";
import {graphql, navigate} from "gatsby";
import {Link} from "gatsby";
import * as styles from "../styles/timeline.module.css";

export default function Article({data}) {
    console.log(data)

    // const timelineTitle = data.allStrapiTimeline.edges[0].node.title;

    // const articlePreviews = data.allStrapiTimeline.edges[0].node.articles.map(
    //     (article) => (
    //         <Link to={"/timelines/" + article.title} key={article.id}>
    //             <div className={styles.article_preview_w} key={article.id} sign={article.id}>
    //                 <div className='dot' sign={article.id}>
    //
    //                 </div>
    //                 <h2>{article.title}</h2>
    //                 <p>{article.preview}</p>
    //             </div>
    //
    //         </Link>
    //     )
    // );

    // console.log(articlePreviews)

    const loadData = (category) => {
        setTimeout(() => {
            navigate("/", {
                state: {category},
            });
        }, 300);
    };

    // window.onscroll = function () {
    //     triggerScroll();
    // };

    // function triggerScroll() {
    //     let timelinePreview = document.querySelectorAll(
    //         ".timeline-module--article_preview_w--9k4FG"
    //     );
    //     for (let i = 0; i < timelinePreview.length; i++) {
    //         let triggerPoint = timelinePreview[i].offsetTop - window.scrollY
    //         let sign = timelinePreview[i].getAttribute('sign')
    //         let dot = document.querySelector('.dot[sign="'+sign+'"]')
    //         if (triggerPoint < 160 ) {
    //             dot.classList.add('active')
    //         } else if (dot.classList.contains('active')) {
    //             dot.classList.remove('active')
    //         }
    //     }
    // }

    return (
        <div className={styles.timeline}>
            <Layout loadData={loadData} category=''>
                <h1>Article Placeholder</h1>
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
                published_at
                title
                micro_article_container
            }
        }
    }
}
`;
import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/swipe.css";

import {graphql} from 'gatsby';

export default function Home({data}) {

    const loadData = (category) => {
        console.log(category)

        //    query data for specific category
        //    how to use query variables in static queries?
        //    is there a workaround using page queries?
        //    see:      https://www.qed42.com/insights/coe/javascript/querying-static-vs-dynamic-data-gatsby

        //    some think like:
        // const query = graphql`
        //     query MyQuery {
        //         allStrapiTimeline(filter: {category: {titel: {eq: "     >>>>>>> VARIABLE CATEGORY <<<<<<<    "}}}) {
        //             edges {
        //                 node {
        //                     preview
        //                     id
        //                     titel
        //                 }
        //             }
        //         }
        //     }
        // `
    }

    const edges = data.allStrapiTimeline.edges;
    const timelineItems = edges.map((edges, index) =>
        <div key={index}>
            <h1>{edges.node.titel}</h1>
            <p>{edges.node.preview}</p>
        </div>
    )

    return (
        <div>
            <Layout loadData={loadData}>
                <h1>Timelines</h1>
                {timelineItems}
            </Layout>
        </div>
    );
}

export const query = graphql`
query Timeline{
    allStrapiTimeline{
        edges {
            node {
                id
                titel
                preview
            }
        }
    }
}`;

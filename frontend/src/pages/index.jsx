import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/swipe.css";

import {graphql} from 'gatsby';

export default function Home({data}) {
  const edges = data.allStrapiTimeline.edges;
  const timelineItems = edges.map((edges, index) =>
      <div key={index}>
          <h1>{edges.node.titel}</h1>
          <p>{edges.node.preview}</p>
      </div>
  )
    
  return (
    <div>
      <Layout>
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

import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/swipe.css";
import {
    useQuery,
    gql
} from "@apollo/client";

const GET_ALL_TIMELINES = gql`
  query Timelines($categoryTimelines: String!) {
    timelines(where: { category:{ titel: $categoryTimelines }}) {
          preview
          id
          titel
          category {
             id,
             titel
          }
    }
  }
  `;

export default function Home() {

    let categoryTimelines = "Bildung";

    const { loading, error, data, refetch } = useQuery(GET_ALL_TIMELINES, {
        variables: { categoryTimelines: categoryTimelines }
    });

    if (loading) return null;
    if (error) console.log(error);
    if (data) console.log(data);

    const loadData = (category) => {
        console.log(category)

        categoryTimelines = category

        refetch({categoryTimelines: category})
    }

    return (
        <div>
            <Layout loadData={loadData}>
                <h1>Timelines</h1>
                <p>{data.timelines[0].preview}</p>
            </Layout>
        </div>
    );
}



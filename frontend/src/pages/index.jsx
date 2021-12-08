import React from "react";
import Layout from "../components/Layout";
import Preview from "../components/Preview";
import "../styles/global.css";
import "../styles/swipe.css";
import "../styles/font.css";
import {
    useQuery,
    gql
} from "@apollo/client";

const GET_ALL_TIMELINES = gql`
  query Timelines($categoryTimelines: String!) {
    timelines(where: { category:{ titel: $categoryTimelines }}) {
          id
          titel
          preview_picture {
            formats
          }
          articles(limit: 1, sort:"date:desc"){
            titel
            preview
            date
          }
    }
  }
  `;

export default function Home({location}) {
    let categoryTimelines = "Bildung";

    if (location.state.category !== null) {
        categoryTimelines = location.state.category
    }

    
    const { loading, error, data, refetch } = useQuery(GET_ALL_TIMELINES, {
        variables: { categoryTimelines: categoryTimelines }
    });

    if (loading) return null;
    if (error) console.log(error);
    /* if (data) console.log(data) */

    const loadData = (category) => {

        categoryTimelines = category

        refetch({categoryTimelines: category})

        // console.log('here i am', data.timelines[0].titel)
    }



    return (
        <div>
            <Layout loadData={loadData} category={categoryTimelines}>
                <h1>Timelines</h1>
                <Preview timelines={data.timelines} />
            </Layout>
        </div>
    );
}



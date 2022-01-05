import React from "react";
import { forceUpdate } from "react";
import Layout from "../components/Layout";
import Preview from "../components/Preview";
import "../styles/global.css";
import "../styles/swipe.css";
import "../styles/font.css";
import {
    useQuery,
    gql
} from "@apollo/client";

const GET_ALL_TIMELINES_WITH_CATEGORY = gql`
  query Timelines($categoryTimelines: String!) {
    timelines(where: { category:{ title: $categoryTimelines }}) {
        id
        title
        preview_picture {
          formats
        }
        articles(limit: 1, sort:"date:desc"){
          title
          preview
          date
        }
    }
  }`;

const GET_ALL_TIMELINES = gql`
  query Timelines{
    timelines{
        id
        title
        preview_picture {
          formats
        }
        articles(limit: 1, sort:"date:desc"){
          title
          preview
          date
        }
    }
  }`;


export default function Home({location}) {
    let categoryTimelines = "Bildung";

    if (location.state) {
        categoryTimelines = location.state.category
    }

    
    let { loading, error, data, refetch } = useQuery(GET_ALL_TIMELINES_WITH_CATEGORY, {
        variables: { categoryTimelines: categoryTimelines }
    });
    let { loading2, error2, data: dataW} = useQuery(GET_ALL_TIMELINES);
    if (loading) return null;
    if (error) console.log(error);
    

    const loadData = (category) => {
        if(category == "Neuste"){
          categoryTimelines = category;
        } else {
          refetch({categoryTimelines: category})
        }
    }



    return (
        <div>
            <Layout loadData={loadData} category={categoryTimelines}>
                <h1>Timelines</h1>
                <Preview timelines={categoryTimelines == "Neuste" ? dataW.timelines : data.timelines} />
            </Layout>
        </div>
    );
}



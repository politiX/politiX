import React from "react";
import {useState} from "react"
import Swipe from "./Swipe";
import {graphql, useStaticQuery} from "gatsby";

export default function Nav({ loadData }) {

    // query category data
    const data = useStaticQuery(graphql`
        query Categories {
        allStrapiCategories {
            edges {
                node {
                    titel
                }
            }
        }
    }
    `)

    // destructure category data
    let tempAct
    const categoryData = [];
    const edges = data.allStrapiCategories.edges

    for (let i = 0; i < edges.length; i++) {
        if (i === 0) {
            tempAct = edges[i].node.titel

        } else {
            categoryData.push(edges[i].node.titel)
        }
    }

    // set hooks for active and inactive categories
    const [active, setActive] = useState(tempAct)
    const [categories, setCategories] = useState(categoryData)

    // handle category change
    const handleSwiperClick = (e) => {

        // switch active category
        let target = e.target.innerText
        let tempCats = categories
        for (let i = 0; i < tempCats.length; i++) {
            if (target === tempCats[i]) {
                tempCats.splice(i, 1)
            }
        }
        tempCats.push(active)
        setCategories(tempCats)
        setActive(target)

        // trigger function in index page to load content...
        loadData(target)


        //    set dynamic nested rout (URL):
        //    ---> https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
    }


    return (
        <div className='navWrap'>
            <div className='activeCategory'>
                <p>{active}</p>
            </div>
            {/*pass categories and handle function so swipe component*/}
            <Swipe categories={categories} handleSwiperClick={handleSwiperClick}/>
        </div>
    );
}
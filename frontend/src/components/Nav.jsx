import React from "react";
import {useState} from "react"
import Swipe from "./Swipe";
import {graphql, useStaticQuery} from "gatsby";

export default function Nav({ loadData, category }) {

    // query category data
    const data = useStaticQuery(graphql`
        query Categories {
        allStrapiCategories {
            edges {
                node {
                    title
                }
            }
        }
    }
    `)

    // destructure category data
    let tempAct
    const categoryData = ["Neuste"];
    const edges = data.allStrapiCategories.edges

    for (let edge of edges) {
        // console.log(edge.node.title, category)
        if (edge.node.title === category) {
            tempAct = edge.node.title

        } else {
            categoryData.push(edge.node.title)
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
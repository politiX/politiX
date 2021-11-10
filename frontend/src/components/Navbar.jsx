import React from "react"
import {useState} from "react"
// import Slider from "infinite-react-carousel"
// import '../styles/top-slyder.css'

export default function Navbar() {

    const [categories, setCategories] = useState([
        {name: 'Bildung', id: 0},
        {name: 'Umwelt', id: 1},
        {name: 'Gesundheit', id: 2},
        {name: 'Wirtschaft', id: 3}
    ]);

    const Menu = (e) => {

        // animate nav bar
        // trigger function to load contentgit pou
        // Matej stinkt

        console.log(e.target.id)
    }

    return (
        <nav>
            <div className='links'>
                {categories.map((category) => (
                    <div key={ category.id } onClick={Menu} id={ category.id }>
                        { category.name }
                    </div>
                ))}
            </div>

        </nav>
    )
}
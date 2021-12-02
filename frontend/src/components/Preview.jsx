import React from "react";
import {Link} from "gatsby";
export default function Preview({timelines}) {
    console.log(timelines)
    const timelinesRender = timelines.map((timeline) =>
        <Link to={"/timelines/" + timeline.titel}>
            <div key={timeline.id}>
                <h2>{timeline.titel}</h2>
                <div>
                    <h3>{timeline.articles[0].titel}</h3> 
                    <p>{timeline.articles[0].preview}</p>
                    <img src={timeline.preview_picture ? timeline.preview_picture.formats.thumbnail.url : ""} alt="" />
                </div>
            </div>
        </Link>
    )
    return (
        <div className="preview">
            {timelinesRender}
        </div>
    );
}

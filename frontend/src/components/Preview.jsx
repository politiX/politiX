import React from "react";
import {Link} from "gatsby";
export default function Preview({timelines}) {
    console.log(timelines)
    const timelinesRender = timelines.map((timeline) =>
        <Link to={"/timelines/" + timeline.titel}>
            <div key={timeline.id}>
                <div class="preview-text">
                <h3>{timeline.titel}</h3>
                    <h2>{timeline.articles[0].titel}</h2> 
                    <p>{timeline.articles[0].preview}</p>
                </div>
                    <img class="preview-img" src={timeline.preview_picture ? timeline.preview_picture.formats.thumbnail.url : ""} alt="" />
            </div>
        </Link>
    )
    return (
        <div className="preview">
            {timelinesRender}
        </div>
    );
}

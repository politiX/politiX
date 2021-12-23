import React from "react";
import { Link } from "gatsby";
import * as styles from '../styles/timelinePreview.module.css';

export default function Preview({timelines}) {
    console.log(timelines)
    const timelinesRender = timelines.map((timeline) =>
        <Link to={"/timelines/" + timeline.title}
              key={timeline.id}
        >
            <div className={styles.preview}>
                <h3>{timeline.title}</h3>
                <div>
                    <h2>{timeline.articles[0].title}</h2> 
                    <p>{timeline.articles[0].preview}</p>
                    <img src={timeline.preview_picture ? timeline.preview_picture.formats.medium.url : ""} alt="" />
                </div>
            </div>
        </Link>
    )
    return (
        <div>
            {timelinesRender}
        </div>
    );
}
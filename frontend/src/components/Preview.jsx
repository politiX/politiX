import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/timelinePreview.module.css";

export default function Preview({ timelines }) {

  window.onscroll = function () {
    triggerScroll();
  };

  const timelinesRender = timelines.map((timeline) => (
    <Link to={"/timelines/" + timeline.title} key={timeline.id}>
      <div className={styles.preview}>
        <div className="preview-scrollbar" sign={timeline.id}></div>
        <div className="preview-scrollball" sign={timeline.id}></div>
        <h3>{timeline.title}</h3>
        <h2>{timeline.articles[0].title}</h2>
        <p>{timeline.articles[0].preview}</p>
        <img
          src={
            timeline.preview_picture
              ? timeline.preview_picture.formats.medium.url
              : ""
          }
          alt=""
        />
      </div>
    </Link>
  ));

  function triggerScroll() {
    let timelinePreview = document.querySelectorAll(
      ".timelinePreview-module--preview--a-Zml"
    );
    for (let i = 0; i < timelinePreview.length; i++) {
      let triggerPoint = timelinePreview[i].offsetTop - window.scrollY;
      console.log(triggerPoint);
      let scrollbar = document.querySelectorAll(".preview-scrollbar");
      let scrollball = document.querySelectorAll(".preview-scrollball");
      console.log(scrollball[i]);
      console.log(scrollbar[i]);
      if (triggerPoint < 160) {
        scrollball[i].classList.add("active");
        scrollball[i].setAttribute("width", "50px");
        scrollball[i].setAttribute("height", "50px");
        scrollbar[i].classList.add("active");
      }
        else if (scrollball[i].classList.contains("active")) {
        scrollbar[i].classList.remove("active");
        scrollball[i].classList.remove("active");
      }
    }
  }

  return <div>{timelinesRender}</div>;
}

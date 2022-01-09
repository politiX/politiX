import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/timelinePreview.module.css";

export default function Preview({ timelines }) {
  if (typeof window !== `undefined`) {
    window.onscroll = function () {
      triggerScroll();
    };
  }

  let str = "active";
  const timelinesRender = timelines.map((timeline) => (
    <Link to={"/timelines/" + timeline.title} key={timeline.id}>
      <div className={styles.preview}>
        <div className={"preview-scrollbar " + str} sign={timeline.id}></div>
        <div className={"preview-scrollball " + str} sign={timeline.id}></div>
        {(str = "")}
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
      // console.log('trigger', triggerPoint);
      // console.log('height', timelinePreview[i].clientHeight);
      let scrollbar = document.querySelectorAll(".preview-scrollbar");
      let scrollball = document.querySelectorAll(".preview-scrollball");
      // console.log(scrollball[i]);
      // console.log(scrollbar[i]);
      if (triggerPoint < timelinePreview[i].clientHeight - 120) {
        scrollball[i].classList.add("active");
        scrollbar[i].classList.add("active");
        if (i !== 0) {
          scrollbar[i - 1].classList.remove("active");
          scrollball[i - 1].classList.remove("active");
        }
      } else if (scrollball[i].classList.contains("active")) {
        scrollbar[i].classList.remove("active");
        scrollball[i].classList.remove("active");
      }
    }
  }

  return (
    <div className={styles.previewContainer}>
      <div>{timelinesRender}</div>;
    </div>
  );
}

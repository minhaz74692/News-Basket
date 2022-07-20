import React from "react";
import image from "./news.jpg";
import "./NewsItem.css";
const NewsItem = (props) => {
  let { title, imageUrl, newsUrl, author, date, source } = props;
  let a = new Date(date);
  let dateTime = a.getDate() + "th " + a.toGMTString().slice(8, 11) + " at " + a.toGMTString().slice(18, 22) + ".";
  // let dateTime = a.toGMTString().slice(6,11);
  // document.getElementsByClassName("cardTitle").style.color="red";

  return (
    <div>
      <div className={`card mb-3 text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode}`} style={{ height: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolutet",
            right: 0,
          }}
        >
          <span
            className="badge rounded-pill"
            style={{ position: "absolute", backgroundColor: "#232123" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <a href={newsUrl} target="_blank" rel="noreferrer">
          <img
            src={!imageUrl ? image : imageUrl}
            style={{ height: "150px" }}
            className="card-img-top"
            alt="..."
          />
        </a>
        <div className={`card-body text-${props.mode === "light" ? "dark" : "light"}`}>
          <h5 className="card-title">
            <a
              className="text-decoration-none"
              target="_blank" 
              rel="noreferrer"
              href={newsUrl}
              style={props.mode === "light" ? { color: "black" } : { color: "#b9eb2b" }}
            >
              {title}
            </a>
          </h5>

          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} On {dateTime}
            </small>
          </p>

          <a
            id="readMore"
            href={newsUrl}
            target="_blank" 
            rel="noreferrer"
            style={{ width: "100%", marginTop: "auto" }}
            className={`btn btn-sm text-light bg-${props.mode === "light" ? "buttonBg" : "buttonBg"}`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}


export default NewsItem;

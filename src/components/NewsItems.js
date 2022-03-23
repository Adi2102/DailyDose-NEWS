import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger p-2"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !urlToImage
                ? "https://1.bp.blogspot.com/-AP7mJpZIec8/YPVWAjOPIoI/AAAAAAAACYk/H21Y2DYMov4azO0TIJ6QbuRKE1vruljDgCLcBGAsYHQ/download%2B%252821%2529.jpeg"
                : urlToImage
            }
            className="card-img-top"
            alt="articleImage"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-outline-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;

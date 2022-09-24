import React, { Component } from "react";

export class newsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div>
        <div className="card p-3 mb-2 my-3 bg-dark text-white">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'80%'}}>
                {source}
              </span>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                Author: {author ? author : "unknown"} | Date:{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsURL}  rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default newsItem;

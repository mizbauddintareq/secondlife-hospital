import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Blogs = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1
        className="text-center text-uppercase fw-bold"
        style={{ color: "#0077B6" }}
      >
        read our latest blogs
      </h1>
      <hr className="w-25 mx-auto text-info" />
      {newses.map((news) => (
        <div key={news.id} className="container my-5">
          <div className="card">
            <div className="row">
              <div className="col-md-3 text-center">
                <img src={news.thumb} alt="" className="img-fluid" />
              </div>
              <div
                className="col-md-9"
                style={{ backgroundColor: "#0077B6", color: "white" }}
              >
                <h3 className="card-tittle mt-2">{news.tittle}</h3>
                <small className="" style={{ color: "#ced4da" }}>
                  {" "}
                  Published
                  {news.publish}, By {news.author}
                </small>
                <p>{news.text}</p>
                <Button variant="light" className="text-info">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

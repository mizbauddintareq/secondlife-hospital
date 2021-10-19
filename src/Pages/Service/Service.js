import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Service = () => {
  const { detailId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const serviceDetail = details.filter((info) => info.id == detailId);

  return (
    <div className="row text-center my-5">
      <div className="col-md-5 mx-auto">
        <Row xs={1} md={1} className="g-4">
          <Col>
            <div
              className="card mb-3"
              style={{ maxWidth: "540px" }}
              style={{ backgroundColor: "#0077B6", color: "white" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={serviceDetail[0]?.thumb}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">
                      {serviceDetail[0]?.name}
                    </h5>
                    <p className="card-text">{serviceDetail[0]?.text}</p>
                    <Button
                      as={Link}
                      to="/"
                      variant="light"
                      className="text-info"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;

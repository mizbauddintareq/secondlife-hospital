import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);
  return (
    <div id="service">
      <div
        className="text-center"
        style={{ marginTop: "75px", color: "#0c4c91" }}
      >
        <h1 className="text-uppercase">our services</h1>
        <hr className="w-25 mx-auto" />
        <p>
          Hospital management system is a computer system that helps manage the
          information related to health care and aids in the job completion of
          health care providers effectively. They manage the data related to all
          departments of healthcare such as, Clinical.Hospital services is a
          term that refers to medical and surgical services and the supporting
          laboratories, equipment and personnel that make up the medical and
          surgical mission of a hospital or hospital system.
        </p>
      </div>
      <Row xs={1} md={2} lg={4} className="g-4">
        {facilities.map((service) => (
          <Col key={service.id}>
            <Card className="h-100 shadow bg-body rounded">
              <Card.Img variant="top" src={service.thumb} />
              <Card.Body style={{ color: "#0c4c91" }}>
                <Card.Title className="text-uppercase">
                  {service.name}
                </Card.Title>
                <Card.Text>
                  {" "}
                  <small>{service.text.slice(0, 140)}</small>{" "}
                </Card.Text>
                <Button
                  as={Link}
                  to={`/service/${service.id}`}
                  className="service-btn"
                  style={{ backgroundColor: "#0c4c91" }}
                >
                  See More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;

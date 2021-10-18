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
    <div className="row text-center">
      <div className="col-md-4 mx-auto">
        <Row xs={1} md={1} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={serviceDetail[0]?.thumb}
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title>{serviceDetail[0]?.name}</Card.Title>
                <Card.Text>{serviceDetail[0]?.text}</Card.Text>
                <Button as={Link} to="/">
                  Continue
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;

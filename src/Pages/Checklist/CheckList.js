import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";

const CheckList = () => {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <p className="bold-heading">
            <IoMdCheckboxOutline size={50} />{" "}
            <span style={{ color: "green" }}>CheckList</span> Ternium
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ textAlign: "center" }}>
            Checklists disponíveis para inspeção
          </p>
        </Col>
      </Row>

      <Row>
        <Button
          variant="warning"
          size="lg"
          onClick={() => handleNavigation("./pier")}
        >
          Píer
        </Button>
      </Row>

      <Row>
        <Button
          variant="warning"
          size="lg"
        >
          Navio
        </Button>
      </Row>

      <Row>
        <Button
          variant="warning"
          size="lg"
        >
          Guindaste
        </Button>
      </Row>
    </Container>
  );
};

export default CheckList;

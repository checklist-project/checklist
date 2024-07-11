import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IoMdCheckboxOutline } from "react-icons/io";
import { getTurnosPassados } from "../../Utils/Utils"; // Importe a função do arquivo auxiliar
import { IoWarningOutline } from "react-icons/io5";

const Pendente = () => {

  const turnosPassados = getTurnosPassados()

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
            Abaixo a lista de todos os checklist com alguma pendencia para
            resoluçao:
          </p>
        </Col>
      </Row>
  
      {turnosPassados.map((turno, index) => (
        <Row key={index}>
          <Button variant="warning" size="lg">
            Checklists pendentes {turno.inicio}h - {turno.fim}h
            <IoWarningOutline
              size={30}
              style={{ marginLeft: "10px", float: "right" }}
            />
          </Button>
        </Row>
      ))}
    </Container>
  );
};

export default Pendente;

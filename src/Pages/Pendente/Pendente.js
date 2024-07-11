import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IoMdCheckboxOutline } from "react-icons/io";
import { getTurnosPassados, getTurnoAtual } from "../../Utils/Utils";
import { IoWarningOutline } from "react-icons/io5";

const ultimoTurnoFeito = {
  turno: "madrugada",
  data: new Date(2024, 6, 9, 1, 30, 0, 0),
  inicio: 0,
  fim: 1,
};

const Pendente = () => {

  const formatarDataHora = (data) => {
    return `${data.toLocaleDateString()} - ${data.toLocaleTimeString()}`;
  };

  const formatarData = (data) => {
    return `${data.toLocaleDateString()}`;
  };


  const turnoAtual = getTurnoAtual();
  const turnosPassados = getTurnosPassados(ultimoTurnoFeito, turnoAtual);


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
      <Row>
        <Col>
          <p style={{ textAlign: "center" }}>
            Ultimo checklist completo: {formatarDataHora(ultimoTurnoFeito.data)}
          </p>
        </Col>
      </Row>

      {turnosPassados.map((turno, index) => (
        <Row key={index}>
          <Button variant="warning" size="lg">
            Checklists pendentes {turno.inicio}h - {turno.fim}h{" "}
            {formatarData(turno.data)}
            <IoWarningOutline
              size={30}
              style={{ marginLeft: "-30px", float: "right" }}
            />
          </Button>
        </Row>
      ))}
    </Container>
  );
};

export default Pendente;

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { getTurnoAtual, verificarAtraso } from "../../Utils/utils"; // Importe a função do arquivo auxiliar
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

const Pendente = () => {
  const navigate = useNavigate();
  const { state, pierPendenteState } = useContext(AppContext);
  const turnoAtual = getTurnoAtual();

  let atrasadoInfo = verificarAtraso(turnoAtual.turno, state.turnoPassado);

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

      {atrasadoInfo.atrasado === true && (
        <Row>
          <Col>
            <span style={{ fontSize: "0.8rem" }}>
              Turno Atual: {turnoAtual}
            </span>
            <br />
            <span
              style={{ color: "red", fontStyle: "italic", fontSize: "0.8rem" }}
            >
              Checklist em atrasado: {atrasadoInfo.turnoAtrasado}
            </span>
            <br />
            <span
              style={{ color: "red", fontStyle: "italic", fontSize: "0.8rem" }}
            >
              Ultimo checklist concluido: {state.turnoPassado}
            </span>
          </Col>
        </Row>
      )}
      <Row>
        <Button
          variant="warning"
          size="lg"
          onClick={() => handleNavigation("./pier")}
        >
          Píer
          {atrasadoInfo.atrasado === true &&
            pierPendenteState.pier.concluido === false && (
              <FaExclamationTriangle
                size={30}
                style={{ marginLeft: "10px", float: "right" }}
              />
            )}
        </Button>
      </Row>
    </Container>
  );
};

export default Pendente;

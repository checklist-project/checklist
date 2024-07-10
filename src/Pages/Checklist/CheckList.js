import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { getTurnoAtual, verificarAtraso } from "../../Utils/utils"; // Importe a função do arquivo auxiliar
import { FaExclamationTriangle } from "react-icons/fa";

const CheckList = () => {
  const navigate = useNavigate();
  const { state, pierState } = useContext(AppContext);
  const turnoAtual = getTurnoAtual();

  let atrasadoInfo = verificarAtraso(turnoAtual, state.turnoPassado);

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <p className="bold-heading">CheckList Ternium</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: "orange" }}>CheckList</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontWeight: "bold" }}>
            Checklists disponíveis para inspeção
          </p>
        </Col>
      </Row>

      {atrasadoInfo.atrasado === true && (
        <Row>
          <Col>
            <p style={{ fontWeight: "bold", color: "red" }}>
              Turno concluído por último: {state.turnoPassado}
            </p>
            <p style={{ fontWeight: "bold", color: "red" }}>
              Turno em atraso: {atrasadoInfo.turnoAtrasado}
            </p>
            <p style={{ fontWeight: "bold", color: "red" }}>
              Turno Atual: {turnoAtual}
            </p>
          </Col>
        </Row>
      )}
      <Row>
        <Button
          variant="primary"
          size="lg"
          onClick={() => handleNavigation("./pier")}
        >
          Píer
          {atrasadoInfo.atrasado === true && pierState.pier.concluido === false &&  (
            <FaExclamationTriangle
              style={{ marginLeft: "10px", float: "right" }}
            />
          )}
        </Button>
      </Row>
    </Container>
  );
};

export default CheckList;

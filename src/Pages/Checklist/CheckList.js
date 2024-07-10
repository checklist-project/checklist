import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";
import { getTurnoAtual } from "../../Utils/utils"; // Importe a função do arquivo auxiliar
import { AppContext } from "../../Context/AppContext";
import { FaExclamationTriangle } from "react-icons/fa";

const CheckList = () => {
  const turnoAtual = getTurnoAtual();
  const { pierState } = useContext(AppContext);

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

      {pierState.pier.concluido === false && (
        <Row>
          <Button
            variant="warning"
            size="lg"
            onClick={() => handleNavigation("./pier")}
          >
            Píer
            {turnoAtual.atrasado === true && (
              <FaExclamationTriangle
                size={30}
                style={{ marginLeft: "10px", float: "right" }}
              />
            )}
          </Button>
        </Row>
      )}
      {turnoAtual.atrasado === true && pierState.pier.concluido === false && (
        <Row>
          <span
            style={{
              color: "red",
              fontSize: "1rem",
              marginTop: "-0.8rem",
            }}
          >
            Atenção: Checklist em atrasado !
          </span>
        </Row>
      )}

      <Row style={{ marginTop: "2.5rem" }}>
        <Button
          variant="warning"
          size="lg"
          onClick={() => handleNavigation("./exemple1")}
        >
          Navio
          {turnoAtual.atrasado === true && (
              <FaExclamationTriangle
                size={30}
                style={{ marginLeft: "10px", float: "right" }}
              />
            )}
        </Button>
      </Row>
      {turnoAtual.atrasado === true && pierState.pier.concluido === false && (
        <Row>
          <span
            style={{
              color: "red",
              fontSize: "1rem",
              marginTop: "-0.8rem",
            }}
          >
            Atenção: Checklist em atrasado !
          </span>
        </Row>
      )}

      <Row style={{ marginTop: "2.5rem" }}>
        <Button
          variant="warning"
          size="lg"
          onClick={() => handleNavigation("./exemple2")}
        >
          Guindaste
          {turnoAtual.atrasado === true && (
              <FaExclamationTriangle
                size={30}
                style={{ marginLeft: "10px", float: "right" }}
              />
            )}
        </Button>
      </Row>
      {turnoAtual.atrasado === true && pierState.pier.concluido === false && (
        <Row>
          <span
            style={{
              color: "red",
              fontSize: "1rem",
              marginTop: "-0.8rem",
            }}
          >
            Atenção: Checklist em atrasado !
          </span>
        </Row>
      )}
    </Container>
  );
};

export default CheckList;

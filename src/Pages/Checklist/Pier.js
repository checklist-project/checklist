import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { IoArrowBack } from "react-icons/io5";
import {
  calcularTurno,
  checkAllTrue,
  getTurnoAtual,
  verificarAtraso,
} from "../../Utils/utils"; // Importe a função do arquivo auxiliar
import { FaRegComment } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";

const Pier = () => {
  const navigate = useNavigate();
  const { state, pierState, setAppStateField } = useContext(AppContext);

  const turnoAtual = getTurnoAtual();
  let atrasadoInfo = verificarAtraso(turnoAtual, state.turnoPassado);
  let infoTurno;

  if (atrasadoInfo.atrasado === true) {
    infoTurno = calcularTurno(atrasadoInfo.turnoAtrasado);
  } else {
    infoTurno = calcularTurno(turnoAtual);
  }

  function handleBackClick() {
    navigate(-1);
  }

  function handleStatusClick(index, statusNew) {
    pierState.pier.list[index].status = statusNew;
    if (checkAllTrue(pierState.pier.list) === true) {
      pierState.pier.concluido = true;

      setAppStateField("turnoPassado", atrasadoInfo.turnoAtrasado);
      alert("tudo foi conluido com sucesso");
      navigate(-1);
    }
  }

  const BttRow = (props) => {
    return (
      <Row style={{ border: '2px solid black', marginTop: "20px"}} >
        <Col xs={6}>
          <p>{props.title}</p>
        </Col>
        <Col>
          <span onClick={() => handleStatusClick(props.index, true)}>Ok</span> |{" "}
          <span onClick={() => handleStatusClick(props.index, false)}>Nok</span>
        </Col>
        <Col>
          <FaRegComment size={24} /> | <CiCamera size={24} />
        </Col>
      </Row>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <p className="bold-heading">CheckList Ternium</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ textAlign: "center" }}>
            Checklists disponível para área
          </p>
        </Col>
      </Row>
      <Row>
        <Button variant="primary" size="lg">
          Píer
        </Button>
      </Row>
      <Row>
        <Col>
          <p style={{ fontWeight: "bold" }}>Checklist {infoTurno.data}</p>
          <p>
            Inicio ás {infoTurno.horaInicio} - Previsão de conclusão{" "}
            {infoTurno.previsaoTermino}
          </p>
        </Col>
      </Row>
      {pierState.pier.list.map((item, index) => (
        <BttRow key={index} index={item.index} title={item.title} />
      ))}

      <Row style={{ paddingTop: "5rem" }} className="justify-content-center">
        <IoArrowBack onClick={() => handleBackClick()} size={48} />
      </Row>
    </Container>
  );
};

export default Pier;

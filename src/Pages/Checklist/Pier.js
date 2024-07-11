import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { IoArrowBack } from "react-icons/io5";
import CameraCapture from "../../Components/CameraCapture"; // Substitua pelo caminho correto do seu componente
import { IoMdCheckboxOutline } from "react-icons/io";

import {
  calcularTurno,
  checkAllTrue,
  getTurnoAtual,
} from "../../Utils/Utils"; // Importe a função do arquivo auxiliar
import { FaRegComment } from "react-icons/fa";

const Pier = () => {
  const navigate = useNavigate();
  const { pierState, updatePierStatus } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => {
    navigate(-1);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const turnoAtual = getTurnoAtual();
  const infoTurno = calcularTurno(turnoAtual.turno);

  function handleBackClick() {
    navigate(-1);
  }

  function handleStatusClick(index, statusNew) {
    updatePierStatus(index, statusNew);
  }

  useEffect(() => {
    if (checkAllTrue(pierState.pier.list) === true) {
      pierState.pier.concluido = true;
      handleShow(true);
    } else { 
      pierState.pier.concluido = false;
    }
  }, [pierState]);

  const BttRow = (props) => {
    return (
      <Row style={{ border: "2px solid black", marginTop: "20px" }}>
        <Col xs={6}>
          <p>{props.title}</p>
        </Col>
        <Col>
          <span
            className={
              pierState.pier.list[props.index].status ? "rounded-circle" : ""
            }
            style={{ color: "green" }}
            onClick={() => handleStatusClick(props.index, true)}
          >
            Ok
          </span>
          |
          <span
            className={
              pierState.pier.list[props.index].status === false
                ? "rounded-circle"
                : ""
            }
            style={{ color: "red" }}
            onClick={() => handleStatusClick(props.index, false)}
          >
            Nok
          </span>
        </Col>
        <Col>
          <FaRegComment onClick={() => handleShow2()} size={24} /> |{" "}
          <CameraCapture index={props.index} size={24} />
        </Col>
      </Row>
    );
  };

  const ModalInfo = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CheckList concluido</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ola voce concluiu o checklist</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const ModalInput = () => {
    return (
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Add um comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup>
              <InputGroup.Text>Text</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <Container>
      <ModalInfo />
      <ModalInput />
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
          <p style={{ textAlign: "center" }}>Checklists disponível para área</p>
        </Col>
      </Row>
      <Row>
        <Button variant="warning" size="lg">
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

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { GrLinkNext } from "react-icons/gr";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { IoMdCheckboxOutline } from "react-icons/io";

const Home = () => {
  const navigate = useNavigate();

  const { state, setAppStateField } = useContext(AppContext);

  function handleClick() {
    setAppStateField("inicio", Date.now());
    navigate("/checklist/new");
    return;
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
          <p style={{ color: "orange" }}>Inicio</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontWeight: "bold" }}>
            Faça a seleção abaixo para dar início ao CheckList
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Equipe</Form.Label>
              <Form.Control
                placeholder="Amarela"
                type="input"
                value={state.equipe}
                onChange={(e) => setAppStateField("equipe", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                placeholder="John Doe"
                type="input"
                value={state.responsavel}
                onChange={(e) =>
                  setAppStateField("responsavel", e.target.value)
                }
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Material</Form.Label>
              <Form.Control
                placeholder="Limpeza"
                type="input"
                value={state.material}
                onChange={(e) => setAppStateField("material", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Umidade %</Form.Label>
              <Form.Control
                placeholder="Amarela"
                type="input"
                value={state.umidade}
                onChange={(e) => setAppStateField("umidade", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Porto de origem</Form.Label>
              <Form.Control
                placeholder="Brasil"
                type="input"
                value={state.country}
                onChange={(e) => setAppStateField("country", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row style={{ paddingTop: "5rem" }} className="justify-content-center">
        <GrLinkNext onClick={handleClick} size={48} />
      </Row>
    </Container>
  );
};

export default Home;

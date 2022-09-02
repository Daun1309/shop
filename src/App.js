import { useState } from "react";
import data from "./data";
import './App.css';
import { Container,Navbar,Nav,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/bg.jpg';

function App() {

 const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 문자중간 변수 넣기 '+ +' */}
      <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')'}}></div>

      <Container>
        <Row>
          {
            shoes.map((a, i) => {
              return (
                <Card shoes={shoes[i]}/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      {/* 이미지 개수가 많아지면 src보다 public에 두는것이 더 좋다.(사용은 ↓(권장방식)이렇게해야 오류가 적음)
      <img src={process.env.PUBLIC_URL + '/img/logo.png'} */}
      <img src={props.shoes.img} width="80%"/> 
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
      <p>{props.shoes.content}</p>
    </Col>
  )
}

export default App;

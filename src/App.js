import { useState } from "react";
import data from "./data";
import Detail from "./pages/Detail";
import './App.css';
import { Container,Navbar,Nav,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/bg.jpg';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

 const [shoes] = useState(data);
 const navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <>
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
        </>
      }/>
        <Route path="/detail" element={<Detail/>} />
        <Route path="*" element={<div>404</div>} />

        {/* nested routes - 여러 유사한 페이지 필요할 때 (부분만 조금 바뀌는,모달)*/}
        <Route path="about" element={<About/>}>
          <Route path="member" element={<div>멤머</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>

        <Route path="event" element={<Event/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>
      
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

function About() {
  return (
    <div>
      <h4>회사소개</h4>
      <Outlet></Outlet>
    </div>  
  )
}

function Event() {
  return (
    <>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </>
  )
}

export default App;

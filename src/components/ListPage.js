import styled from "styled-components";
import "./app.css";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

import IndexBtn from "./IndexBtn";

const Wrapper = styled.div`
  background-color: #a8d0eb;
  height: 100vh;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
  color: #ffc236;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


function Todo() {
  return (
    <Wrapper>
      <Title>Todolist</Title>
      <AddTask />
      <TaskList />
      <IndexBtn />
    </Wrapper>
  );
}


export default Todo;
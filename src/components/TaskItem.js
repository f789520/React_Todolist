import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";
import React from "react";
 

const Input = styled.input`
  background-color: white;
  width: 40%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 0 20px;
`;

const Container = styled.div`
  background-color: white;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 0 20px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const TaskName = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: min-content;
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer;
  margin-right:10px;

  &:hover {
    background-color: #F5727E;
  }
`;


const UpdateButton = styled.div`
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: min-content;
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer; 
  &:hover {
    background-color: #F5727E;
  }
`;





function TaskItem(props) {
  const dispatch = useDispatch();


  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");


  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");


  // 影片todo.text =props.task.taskName
  // 影片props.task.idx = todo.id
  function submitEdits() {
    props.task.taskName = editingText; //Input 框= 
    dispatch(actions.editTask(props.task.idx, props.task.taskName))
    setTodoEditing(null);
    setEditingText("")
  }





  return (

    <Container>
      <CheckBox
        type="checkbox"
        checked={props.task.isCompleted}
        onChange={() => dispatch(actions.toggleTask(props.task.idx))}
      />



      {/* JS 3元運算子  條件?():()  如果條件=true*/}
      {todoEditing === props.task.idx ? (
        <Input
           
          name="edittask"
          type="text"
          placeholder={"edit todo ..."}
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
        />
      ) : (
        <TaskName>{props.task.taskName}</TaskName>
      )}

      {todoEditing === props.task.idx ? (<UpdateButton onClick={() => submitEdits(props.task.idx)}>
        UpdateEdit
      </UpdateButton>

      ) : (<Button onClick={() => setTodoEditing(props.task.idx)}>
        Edit
      </Button>

      )}






      <Button onClick={() => dispatch(actions.deleteTask(props.task.idx))}>
        Delete
      </Button>
    </Container>
  );
}

export default TaskItem;





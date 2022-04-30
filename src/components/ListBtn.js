
import styled from "styled-components";
 
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin:20px
`;


const Button = styled.div`
background-color: ${(props) => (props.active ? "#ffc236" : "#bebebe")};
border: none;
border-bottom: 2px solid #3c5d95;
border-radius: 3px 3px 0 0;
padding: 5px;
color: black;
 
letter-spacing: 0.1em;
text-align: center;
cursor: pointer;
width:90px;
`;





function ListBtn() {
    return (

            <ButtonContainer>
                <Button>


                    <Link to='/list'>Todolist</Link>


                </Button>


            </ButtonContainer>

          
 
    );
}

export default ListBtn;
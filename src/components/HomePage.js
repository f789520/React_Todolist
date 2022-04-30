
import styled from "styled-components";
import ListBtn from "./ListBtn";


const Head = styled.div`
  background-color: #1d82c7;
  height: 30vh ;
  padding-top: 70px;
  text-align: center;
`;

const Main = styled.div`
  background-color: #91d2ff;
  height: 20vh ;
  padding-top: 70px;
  text-align: center;
`;



function Home() {
  return (


    <div>
      <Head>
        <h1>React 練習專案</h1>
      </Head>
      <Main>
        <h1>歡迎光臨我的頁面</h1>
      </Main>
      
      <ListBtn />

    </div>
  );
}

export default Home;
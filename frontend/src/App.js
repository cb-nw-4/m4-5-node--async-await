
import styled from 'styled-components';

function App() {
  return (
    <Container >
      <Header>
        <h1>The jokes page</h1>
      </Header>
      <section>
        <p>Choose what kind of joke you want between dad, geek and tronald jokes</p>
        <input type="text"/>
      </section>
    </Container>
  );
}
const Header = styled.header`
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
`;
const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

`;

export default App;

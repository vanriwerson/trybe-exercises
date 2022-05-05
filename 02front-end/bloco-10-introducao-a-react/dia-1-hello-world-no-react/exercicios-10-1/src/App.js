import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css'
// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }
// const compromises = ['Estudar React', 'Colaborar com a turma', 'Reestruturar meu portfólio com React', 'Preparar-me para as provas da faculdade', 'Fazer o almoço/jantar das crianças'];

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      {/* {compromises.map((task) => Task(task))} */}
    </>
  );
}

export default App;

import './App.css';
import TicTacToe from './components/TicTacToe';
import Timer from './components/Timer';
import Todo from './components/Todo';

function App() {
  return (
    <div style={{display: "flex", justifyContent: 'center'}}>
      {/* <Todo /> */}
      {/* <Timer /> */}
      <TicTacToe />
    </div>
  );
}

export default App;

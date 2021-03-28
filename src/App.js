import './App.css';
import Sidebar from './Components/Sidebar';
import Board from './Components/Board';
import {StateProvider} from './Context.js';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Sidebar/>
        <Board/>
      </StateProvider>
    </div>
  );
}

export default App;

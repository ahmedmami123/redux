
import './App.css';
import Navv from './component/Navv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
<Navv/>
<TodoList/>
    </div>
  );
}

export default App;

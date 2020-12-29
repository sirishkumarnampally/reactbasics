import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      {/* <FunctionClick />
      <ClassClick /> */}
        
        {/* <EventBind /> */}

        <ParentComponent />
    </div>
  );
}

export default App;

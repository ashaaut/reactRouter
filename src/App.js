import React from 'react';
import { Route} from 'react-router-dom'  
import Home from './home';
import About from'./about'
function App() {
  return (
    <div className="App">
      <h2>Router</h2>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;
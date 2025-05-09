
import './App.css';

import { useState } from 'react';

function App() {
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);



  return (
    <div className="App">
     <h1> Counter App</h1>
     
     <p> Counter:{count} </p>


     <button onClick={increment} className='button'> Increment</button>  
     <button onClick={decrement} className='button'> Decrement</button>


    </div>
  );
}

export default App;

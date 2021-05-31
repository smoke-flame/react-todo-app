import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
     <div className="container">
       <div className="app__inner">
       <Sidebar/>
         <Main/>
       </div>
     </div>
    </div>
  );
}

export default App;

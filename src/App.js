import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark Mode is Enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light Mode is Enabled','success');
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({msg:message,
      type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500
)
}
  return (
    <>
    <Navbar toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
   < Router>
  <div>
  <Routes>
          <Route path="/about"element={<About />}>
          </Route>
          <Route path="/"element={ <Textform title={'Text Counter'} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;

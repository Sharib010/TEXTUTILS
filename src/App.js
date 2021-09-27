import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode has been enabled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#e2e9f4';
      showAlert("light Mode has been enabled", "Success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="Learn react" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Router exact path="/about">
              <About />
            </Router>
            <Router exact path="/"> */}
              <TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} />
            {/* </Router> */}

          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

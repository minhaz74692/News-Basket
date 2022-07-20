import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  // const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState("light")
  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#303540";
    }
  }
  return (
    <div>
      <Router>
        <NavBar mode={mode} changeMode={changeMode} />
        {/* <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        /> */}
        <Routes>
          <Route exact path="/" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />}></Route>

          <Route exact path="/business" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />}></Route>

          <Route exact path="/entertainment" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />}></Route>

          <Route exact path="/general" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />}></Route>

          <Route exact path="/health" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />}></Route>

          <Route exact path="/science" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />}></Route>

          <Route exact path="/sports" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />}></Route>

          <Route exact path="/technology" element={<News mode={mode} changeMode={changeMode} /*setProgress={setProgress} */ apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />}></Route>
        </Routes>
      </Router>

    </div>
  )

}

export default App;
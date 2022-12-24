import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div >
    </>
  );
}

export default App;

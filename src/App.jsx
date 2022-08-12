import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import About from "./components/About";
function App(){
  return(
    <BrowserRouter>
    <div>
      <Routes>
          <Route path="/" element={<ListUser />}></Route>
          <Route path="/create" element={< CreateUser/>}></Route>
          <Route path="/user/updated/:id" element={< CreateUser/>}></Route>
          <Route path="/about" element={< About/>}></Route>

      </Routes>
    </div>
  </BrowserRouter>
  ) 
}

export default App;
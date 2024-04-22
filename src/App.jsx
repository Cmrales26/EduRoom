import { Route, Routes } from "react-router-dom";
import Home from "./screens/index";
import Sidebar from "./components/SideBar/";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { CoursesProvider } from "./context/CoursesContext";
import Courses from "./screens/Courses";

function App() {
  const [selected, setSelected] = useState("Inicio");
  return (
    <div className="app">
      <Sidebar selected={selected} setSelected={setSelected} />
      <main className="content">
        <NavBar selected={selected} />
        <div className="insideContent">
          <CoursesProvider>
            <Routes>
              <Route
                path="/"
                element={<Home setSelected={setSelected} />}
              ></Route>
              <Route
                path="/courses"
                element={<Courses setSelected={setSelected} />}
              ></Route>
            </Routes>
          </CoursesProvider>
        </div>
      </main>
    </div>
  );
}

export default App;

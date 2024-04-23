import { Route, Routes } from "react-router-dom";
import Home from "./screens/index";
import Sidebar from "./components/SideBar/";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { CoursesProvider } from "./context/CoursesContext";
import Courses from "./screens/Courses";
import CourseDetails from "./screens/CourseDetails";
import Favorites from "./screens/Favorites";
import Profile from "./screens/Profile";
import TopBar from "./components/TopBar";

function App() {
  const [selected, setSelected] = useState("Inicio");
  return (
    <div className="app">
      <Sidebar selected={selected} setSelected={setSelected} />
      <main className="content">
        <div className="NavigationBars">
          <NavBar selected={selected} />
          <div className="topbar">
            <TopBar selected={selected} />
          </div>
        </div>
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
              <Route
                path="/course/:id"
                element={<CourseDetails setSelected={setSelected} />}
              ></Route>
              <Route
                path="/favorites"
                element={<Favorites setSelected={setSelected} />}
              ></Route>
              <Route
                path="/profile"
                element={<Profile setSelected={setSelected} />}
              ></Route>
            </Routes>
          </CoursesProvider>
        </div>
      </main>
    </div>
  );
}

export default App;

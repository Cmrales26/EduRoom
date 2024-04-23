/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCourses } from "../context/CoursesContext";
import CourseCards from "../components/CourseCards";
import { Link } from "react-router-dom";

const Favorites = ({ setSelected }) => {
  let Favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const { courses } = useCourses();
  const [fCourse, setFCourse] = useState(null);
  useEffect(() => {
    setSelected("Favoritos");
    const favoriteCourses = courses.filter((course) =>
      Favorites.includes(course.id.toString())
    );

    if (favoriteCourses.length > 0) {
      setFCourse(favoriteCourses);
    }
  }, [setSelected]);
  return (
    <Box p={5}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Favoritos
      </Typography>
      {/* Cursos */}
      {fCourse !== null ? (
        <Box className="Courses">
          {fCourse.map((courses) => (
            <CourseCards
              key={courses.id}
              id={courses.id}
              img={courses.img}
              title={courses.titulo}
              author={courses.autor}
              content={courses.contenido}
              grade={courses.calificacion}
              price={courses.precio}
            ></CourseCards>
          ))}
        </Box>
      ) : (
        <Box
          width={"100%"}
          height={"80vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Box>
            <Typography>No hay Cursos Favoritos</Typography>
            <Link to={"/courses"}>Cursos</Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Favorites;

/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCourses } from "../context/CoursesContext";
import CourseCards from "../components/CourseCards";
import TopicsCards from "../components/TopicsCards";

const Courses = ({ setSelected }) => {
  const [numCourse, setNumCourse] = useState(6);
  const [canLoadMore, setCanLoadMore] = useState(true);
  useEffect(() => {
    setSelected("Cursos");
  }, [setSelected]);

  const { popular, courses } = useCourses();

  const loadMore = () => {
    let NumOfCourses = courses.length;
    if (NumOfCourses > numCourse) {
      setNumCourse(numCourse + 3);
    } else {
      setCanLoadMore(false);
    }
    setNumCourse(numCourse + 3);
  };
  const hide = () => {
    setNumCourse(6);
    setCanLoadMore(true);
  };
  return (
    <Box>
      <Box p={5}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Populares de esta semana
        </Typography>
        <TopicsCards data={popular} />
      </Box>
      <Box p={5}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {" "}
          Todos nuestros cursos
        </Typography>
        <Box className="Courses">
          {courses.slice(0, numCourse).map((courses) => (
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
        <Box display={"flex"} justifyContent={"center"} mt={4}>
          {canLoadMore ? (
            <Button
              onClick={() => loadMore()}
              sx={{ backgroundColor: "#8e96f4" }}
              variant="contained"
            >
              Ver Mas cursos
            </Button>
          ) : (
            <Button
              onClick={() => hide()}
              variant="contained"
              sx={{ backgroundColor: "#8e96f4" }}
            >
              ocultar
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;

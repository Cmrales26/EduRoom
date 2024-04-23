/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import Learn from "../assets/Learn.png";
import { useCourses } from "../context/CoursesContext";
import CourseCards from "../components/CourseCards";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TopicsCards from "../components/TopicsCards";

const Home = ({ setSelected }) => {
  useEffect(() => {
    setSelected("Inicio");
  }, [setSelected]);
  const { courses, categories } = useCourses();
  return (
    <Box>
      {/* Header */}
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={"1rem"}
      >
        <Typography variant="h4" width={"40%"}>
          La mejor Forma de <span style={{ fontWeight: "bold" }}>Aprender</span>{" "}
          es con <span style={{ fontWeight: "bold" }}>EduRoom</span>
        </Typography>
        <Box width={"25%"}>
          <img src={Learn} alt="ImageEdu" width={"100%"} />
        </Box>
      </Box>

      {/* Companies Trust in us */}

      <Box padding={"2rem"}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Avalado por estas compañías
        </Typography>

        <Box
          display={"flex"}
          justifyContent={"space-around"}
          gap={"2rem"}
          alignItems={"center"}
          padding={"1rem"}
          width={"100%"}
          marginTop={"1rem"}
        >
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
            alt="Att"
            width={"10%"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
            alt="Cisco"
            width={"10%"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
            alt="Ericsson"
            width={"5%"}
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
            alt="Volkswagen"
            width={"6%"}
          />
        </Box>
      </Box>

      {/* Cursos */}
      <Box padding={"2rem"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Cursos
          </Typography>

          <Box display={"flex"} alignItems={"center"} color={"#8e96f4"} gap={1}>
            <Link to={"/courses"} style={{ textDecoration: "none" }}>
              <Typography variant="p">Ver todos</Typography>
            </Link>
            <ArrowForwardIcon />
          </Box>
        </Box>

        <Box className="Courses">
          {courses.slice(0, 3).map((courses) => (
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
      </Box>

      {/* Categorias */}

      <Box>
        <Box padding={"2rem"}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Categorias
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              color={"#8e96f4"}
              gap={1}
            ></Box>
          </Box>
          <TopicsCards data={categories} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../context/CoursesContext";
import {
  Box,
  IconButton,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CourseDetails = ({ setSelected }) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const navigate = useNavigate();
  const { courses } = useCourses();
  const [course, setCourse] = useState(null);
  const [clases, setClases] = useState(null);
  const [favorite, setFavorite] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      navigate("/courses");
      return;
    }
    setCourse(courses.find((course) => course.id == id));
    setClases(courses.find((course) => course.id == id).clases);
    setSelected("Cursos");
  }, [id, courses]);

  // Detectar Si es favorito
  useEffect(() => {
    let isFavorite = favorites.find((c) => c == id);
    if (isFavorite !== undefined) {
      setFavorite(true);
    }
  }, []);

  if (!course) {
    return <h1>Loading</h1>;
  }

  const handleFavorite = () => {
    if (!favorite) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      favorites = favorites.filter((f) => f !== id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setFavorite(!favorite);
  };

  return (
    <Box id="DetailsCourse">
      <Box>
        <Box position={"relative"} style={{ marginBottom: "1rem" }}>
          <img
            src={course.img}
            alt={course.tema}
            width={"100%"}
            height={"350px"}
            style={{
              objectFit: "cover",
              filter: "brightness(35%)",
            }}
          />
          <Box
            position="absolute"
            top="45%"
            left="3%"
            transform="translate(-50%, -50%)"
            width="100%"
            color="white"
          >
            <Typography variant="h5">{course.titulo}</Typography>
            <Box display={"flex"} gap={3}>
              <Typography variant="p">{course.autor}</Typography>
              <Box
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <StarIcon sx={{ color: "#e6b80b" }} />
                <Typography variant="body1">{course.calificacion}</Typography>
              </Box>
            </Box>
            <Box display={"flex"} gap={3} mt={2}>
              {course.categorias.map((cat) => {
                return (
                  <Box
                    key={cat}
                    sx={{ backgroundColor: "#8e96f4", borderRadius: "20px" }}
                  >
                    <Typography px={2} py={1} variant="body1">
                      {cat}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box
            className="Favorite"
            position="absolute"
            top="10%"
            left="93%"
            color="white"
            sx={{
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.3)",
              },
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {favorite ? (
              <IconButton
                style={{ color: "#ff3b30" }}
                onClick={() => handleFavorite()}
              >
                <FavoriteIcon
                  fontSize="large"
                  titleAccess="Eliminar de Favoritos"
                />
              </IconButton>
            ) : (
              <IconButton
                style={{ color: "white" }}
                onClick={() => handleFavorite()}
              >
                <FavoriteBorderIcon
                  fontSize="large"
                  titleAccess="Agregar a Favoritos"
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      {/* Tabla de contenido */}
      <Box p={3} className="classes">
        <Typography variant="h5">Contenido del curso</Typography>
        <Box p={5}>
          <Stepper orientation="vertical">
            {clases.map((clases) => (
              <Step active={true} key={clases.id}>
                <StepLabel>
                  <Typography>{clases.titulo}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="caption">
                    {clases.descripcion}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;

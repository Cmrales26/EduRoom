/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useCourses } from "../context/CoursesContext";

const Courses = ({ setSelected }) => {
  useEffect(() => {
    setSelected("Cursos");
  }, [setSelected]);

  const { popular } = useCourses();
  return (
    <Box>
      <Box p={5}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Populares de esta semana
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          {popular.map((popular, idx) => (
            <Box
              mt={5}
              key={idx}
              display={"flex"}
              sx={{ backgroundColor: "#fff" }}
              alignItems={"center"}
              gap={6}
              padding={2}
              borderRadius={"20px"}
              width={"330px"}
            >
              <img
                src={popular.image}
                alt={popular.tema}
                style={{ width: "50px", height: "50px" }}
              />
              <Box>
                <Typography variant="p">{popular.tema}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;

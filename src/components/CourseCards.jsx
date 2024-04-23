import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const CourseCards = ({ id, img, title, price, author, content, grade }) => {
  return (
    <Box sx={{ backgroundColor: "#fff" }} borderRadius={"10px"} mt={"1rem"}>
      <Box p={"1rem"}>
        <img
          src={img}
          alt={title}
          width={"100%"}
          style={{ borderRadius: "10px" }}
        />
      </Box>

      {/* BODY */}
      <Box height={140}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"1rem 1rem 0rem 1rem"}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            <span>$</span>
            {price}
          </Typography>
        </Box>

        <Box display={"flex"} gap={"20px"} alignItems={"center"} p={"1rem"}>
          <Typography color={"gray"} mt={0} p={0}>
            {author}
          </Typography>
          <Box display={"flex"} gap={"5px"}>
            <StarIcon sx={{ color: "#e6b80b" }} />
            <Typography variant="button">{grade}</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        mt={2}
        pb={"2rem"}
        px={"1rem"}
      >
        <Typography variant="button">{content}</Typography>
        <Link
          to={`/course/${id}`}
          style={{ textDecoration: "none", color: "#8e96f4" }}
        >
          <Box display={"flex"} justifyContent={"center"} gap={1}>
            Ver detalles
            <ChevronRightIcon />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

CourseCards.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
};

export default CourseCards;

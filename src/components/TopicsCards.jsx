/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const TopicsCards = ({ data }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} gap={2}>
      {data.slice(0, 4).map((category, idx) => (
        <Box
          className={"Topic"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          key={idx}
          style={{
            backgroundColor: "#fff",
            padding: "1.5rem 3rem",
            borderRadius: "20px",
            marginTop: "20px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img src={category.image} width={50}></img>

          <Typography variant="p">{category.cat}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TopicsCards;

/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import ProfilePicture from "../assets/Avatar.png";
import { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Profile = ({ setSelected }) => {
  useEffect(() => {
    setSelected("Perfil");
  }, [setSelected]);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"90vh"}
    >
      <Box>
        <img
          src={ProfilePicture}
          alt={"Avatar"}
          width={300}
          height={300}
          style={{ borderRadius: "50%" }}
        />
        <Box
          mt={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography variant="h5">Nelson Camilo Morales</Typography>
          <Typography variant="p">Desarrollador FullStack</Typography>

          <a
            href="https://github.com/Cmrales26"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box display={"flex"} gap={1}>
              <GitHubIcon />
              <Typography variant="body2">@Cmrales26</Typography>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

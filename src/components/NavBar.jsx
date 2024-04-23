import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Badge,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ProfilePicture from "../assets/Avatar.png";
import { Link } from "react-router-dom";
import logo from "../assets/EduRoom.svg";
const NavBar = () => {
  return (
    <Box
      width={"100%"}
      p={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ backgroundColor: "white" }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "25px", fontWeight: "600", color: "gray" }}
      >
        <figure style={{ padding: "2rem", display: "none" }} id="NavLogo">
          <Link to={"/"}>
            <img src={logo} alt="Logo EduRoom" width={130} />
          </Link>
          <Box>
            <Typography variant={"caption"}>
              by{" "}
              <a
                href="https://github.com/Cmrales26"
                target="_blank"
                style={{ color: "black" }}
              >
                @Cmrales26
              </a>
            </Typography>
          </Box>
        </figure>
      </Typography>

      <Box className={"search"} width={650}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Buscar Curso"
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
        />
      </Box>

      <Box display={"flex"} gap={"25px"} alignItems={"center"} color={"gray"}>
        <SearchIcon sx={{ cursor: "pointer" }} className="searchMobile" />
        <CommentIcon sx={{ cursor: "pointer" }} />

        <Badge color="secondary" variant="dot">
          <NotificationsActiveIcon sx={{ cursor: "pointer" }} />
        </Badge>

        {/* MenuItem */}

        <Box borderRadius={"50%"} sx={{ cursor: "pointer" }}>
          <img
            src={ProfilePicture}
            style={{ borderRadius: "50%" }}
            width={30}
            height={30}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;

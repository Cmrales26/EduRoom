import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Badge,
} from "@mui/material";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfilePicture from "../assets/Avatar.png";
const NavBar = ({ selected }) => {
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
        {selected}
      </Typography>

      <Box>
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
          sx={{ width: "650px" }}
        />
      </Box>

      <Box display={"flex"} gap={"25px"} alignItems={"center"} color={"gray"}>
        <CommentIcon sx={{ cursor: "pointer" }} />

        <Badge color="secondary" variant="dot">
          <NotificationsActiveIcon sx={{ cursor: "pointer" }} />
        </Badge>

        <SettingsIcon sx={{ cursor: "pointer" }} />

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
NavBar.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default NavBar;

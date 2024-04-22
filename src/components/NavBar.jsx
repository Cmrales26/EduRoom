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
import { Link } from "react-router-dom";
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

      <Box display={"flex"} gap={"25px"}>
        <Link
          to={"/Comments"}
          style={{
            textDecoration: "none",
            color: "gray",
            margin: "0",
            padding: "0",
          }}
        >
          <CommentIcon />
        </Link>
        <Link
          to={"/Notification"}
          style={{
            textDecoration: "none",
            color: "gray",
            margin: "0",
            padding: "0",
          }}
        >
          <Badge color="secondary" variant="dot">
            <NotificationsActiveIcon />
          </Badge>
        </Link>
        <Link
          to={"/Settings"}
          style={{
            textDecoration: "none",
            color: "gray",
            margin: "0",
            padding: "0",
          }}
        >
          <SettingsIcon />
        </Link>

        {/* MenuItem */}

        <Box borderRadius={"100px"}>
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

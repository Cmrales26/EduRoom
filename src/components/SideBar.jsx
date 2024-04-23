import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/EduRoom.svg";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";

const Item = ({ title, to, icon, selected }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        padding={".5rem 2rem"}
        margin={"1rem"}
        color={"gray"}
        borderRadius={"20px"}
        sx={{
          backgroundColor: title === selected ? "#8E96F4" : "",
        }}
      >
        <Box color={{ color: title === selected ? "white" : "" }}>{icon}</Box>
        <Typography
          variant="caption"
          color={{ color: title === selected ? "white" : "" }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

const SideBar = ({ selected }) => {
  return (
    <Box
      sx={{
        // width: 300,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      className="Sidebar"
    >
      {/* LOGO */}
      <figure style={{ padding: "2rem" }}>
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

      {/* Items */}

      <Box marginTop={"50px"}>
        <Item
          title={"Inicio"}
          to={"/"}
          icon={<HomeIcon />}
          selected={selected}
        ></Item>
        <Item
          title={"Cursos"}
          to={"/courses"}
          icon={<MenuBookIcon />}
          selected={selected}
        ></Item>
        <Item
          title={"Favoritos"}
          to={"/favorites"}
          icon={<FavoriteIcon />}
          selected={selected}
        ></Item>
        <Item
          title={"Perfil"}
          to={"/profile"}
          icon={<PersonIcon />}
          selected={selected}
        ></Item>
      </Box>

      {/* Cerrar Sesión */}
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        padding={"1rem 2rem"}
        color={"red"}
        onClick={() => alert("Cerró sesión")}
      >
        <LogoutIcon />
        <Typography>Cerrar Sesión</Typography>
      </Box>
    </Box>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  selected: PropTypes.string.isRequired,
};

SideBar.propTypes = {
  selected: PropTypes.string.isRequired,
};
export default SideBar;

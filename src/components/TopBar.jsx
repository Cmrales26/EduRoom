/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Item } from "./SideBar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TopBar = ({ selected }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        backgroundColor: "white",
      }}
    >
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
  );
};

export default TopBar;

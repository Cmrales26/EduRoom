import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const CoursesContext = createContext();

export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) throw new Error("There is no Icon Context");
  return context;
};

export const CoursesProvider = ({ children }) => {
  const categories = [
    "Desarrollo web",
    "Inteligencia Artificial",
    "Ciencia de datos",
    "Habilidades Blandas",
    "Desarrollo Movil",
  ];
  const popular = [
    {
      id: 1,
      tema: "Desarrollo web",
      image: "https://cdn-icons-png.flaticon.com/512/6188/6188044.png",
    },
    {
      id: 2,
      tema: "Inteligencia Artificial",
      image: "https://cdn-icons-png.flaticon.com/512/6612/6612153.png",
    },
    {
      id: 3,
      tema: "Diseño Gráfico",
      image: "https://cdn-icons-png.freepik.com/512/8361/8361102.png",
    },
    {
      id: 4,
      tema: "Habilidades blandas ",
      image: "https://cdn-icons-png.flaticon.com/512/6171/6171939.png",
    },
  ];
  const courses = [
    {
      img: "https://dinahosting.com/blog/upload/2023/10/Imagen-principal-blog-15-1.jpg",
      titulo: "Desarrollo web completo con JavaScript",
      precio: 49.99,
      autor: "Juan Pérez",
      contenido: "+120 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones web completas utilizando JavaScript.",
      categorias: ["Desarrollo web", "JavaScript"],
      calificacion: "5",
    },
    {
      img: "https://cursin.net/wp-content/uploads/2023/11/curso-python-universidad-colombiana.jpg.webp",
      titulo: "Introducción a Python para principiantes",
      precio: 29.99,
      autor: "María Rodríguez",
      contenido: "+20 clases",
      descripcion: "Aprende los fundamentos de la programación con Python.",
      categorias: ["Python", "Programación"],
      calificacion: "4",
    },
    {
      img: "https://art.basiliscoderoko.com/wp-content/uploads/2022/10/como-aprender-inteligencia-artificial-con-tensorflow-basilisco-de-roko.jpg",
      titulo: "Machine Learning con TensorFlow",
      precio: 79.99,
      autor: "Carlos Sánchez",
      contenido: "+140 clases",
      descripcion: "Domina el machine learning utilizando TensorFlow.",
      categorias: ["Machine Learning", "TensorFlow"],
      calificacion: "4.5",
    },
    {
      img: "https://ejemplo.com/curso4.jpg",
      titulo: "Desarrollo de aplicaciones móviles con React Native",
      precio: 59.99,
      autor: "Ana García",
      contenido: "150 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones móviles multiplataforma con React Native.",
      categorias: ["Desarrollo móvil", "React Native"],
    },
    {
      img: "https://ejemplo.com/curso5.jpg",
      titulo: "Fundamentos de SQL y bases de datos relacionales",
      precio: 39.99,
      autor: "Pedro Martínez",
      contenido: "+20 clases",
      descripcion:
        "Aprende los fundamentos de SQL y cómo trabajar con bases de datos relacionales.",
      categorias: ["Bases de datos", "SQL"],
    },
    {
      img: "https://ejemplo.com/curso6.jpg",
      titulo: "Desarrollo de aplicaciones web con Angular",
      precio: 69.99,
      autor: "Luisa Fernández",
      contenido: "+599 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones web dinámicas con el framework Angular.",
      categorias: ["Desarrollo web", "Angular"],
    },
    {
      img: "https://ejemplo.com/curso7.jpg",
      titulo: "Programación orientada a objetos con Java",
      precio: 49.99,
      autor: "Javier López",
      contenido: "+40 clases",
      descripcion:
        "Aprende los conceptos fundamentales de la programación orientada a objetos utilizando Java.",
      categorias: ["Java", "Programación"],
    },
    {
      img: "https://ejemplo.com/curso8.jpg",
      titulo: "Diseño de interfaces de usuario con Figma",
      precio: 34.99,
      autor: "Marcela Ruiz",
      contenido: "+50 clases",
      descripcion:
        "Aprende a diseñar interfaces de usuario atractivas y funcionales utilizando Figma.",
      categorias: ["Diseño", "Figma"],
    },
    {
      img: "https://ejemplo.com/curso9.jpg",
      titulo: "Desarrollo de videojuegos con Unity",
      precio: 79.99,
      autor: "Andrés Gómez",
      contenido: "+45 clases",
      descripcion:
        "Aprende a desarrollar videojuegos profesionales con el motor Unity.",
      categorias: ["Desarrollo de videojuegos", "Unity"],
    },
    {
      img: "https://ejemplo.com/curso10.jpg",
      titulo: "Automatización de pruebas con Selenium",
      precio: 44.99,
      autor: "Laura Díaz",
      contenido: "+20 clases",
      descripcion:
        "Aprende a automatizar pruebas de software utilizando Selenium WebDriver.",
      categorias: ["Pruebas de software", "Selenium"],
    },
    {
      img: "https://ejemplo.com/curso11.jpg",
      titulo: "Desarrollo de aplicaciones móviles con Swift",
      precio: 59.99,
      autor: "Diego Torres",
      contenido: "150 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones móviles para iOS utilizando Swift.",
      categorias: ["Desarrollo móvil", "Swift"],
    },
    {
      img: "https://ejemplo.com/curso12.jpg",
      titulo: "Introducción a la ciberseguridad",
      precio: 24.99,
      autor: "Elena Navarro",
      contenido: "+80 clases",
      descripcion:
        "Obtén una introducción completa al mundo de la ciberseguridad y aprende a proteger sistemas y datos.",
      categorias: ["Ciberseguridad"],
    },
  ];

  CoursesProvider.propTypes = {
    children: PropTypes.object.isRequired,
  };

  return (
    <CoursesContext.Provider value={{ courses, categories, popular }}>
      {children}
    </CoursesContext.Provider>
  );
};

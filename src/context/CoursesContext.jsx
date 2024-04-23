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
    {
      id: 1,
      cat: "Desarrollo web",
      image: "https://cdn-icons-png.flaticon.com/512/6188/6188044.png",
    },
    {
      id: 2,
      cat: "Inteligencia Artificial",
      image: "https://cdn-icons-png.flaticon.com/512/6612/6612153.png",
    },
    {
      id: 3,
      cat: "Ciencia de datos",
      image: "https://cdn-icons-png.freepik.com/512/8649/8649621.png",
    },
    {
      id: 4,
      cat: "Habilidades Blandas",
      image: "https://cdn-icons-png.flaticon.com/512/6171/6171939.png",
    },
    {
      id: 5,
      cat: "Desarrollo Movil",
      image: "https://cdn-icons-png.flaticon.com/512/6612/6612153.png",
    },
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
      id: 1,
      img: "https://dinahosting.com/blog/upload/2023/10/Imagen-principal-blog-15-1.jpg",
      titulo: "Desarrollo web completo con JavaScript",
      precio: 49.99,
      autor: "Nelson Morales",
      contenido: "+120 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones web completas utilizando JavaScript.",
      categorias: ["Desarrollo web", "JavaScript"],
      calificacion: "5",
      clases: [
        {
          id: 1,
          titulo: "Introducción a JavaScript",
          descripcion: "Aprende los conceptos básicos de JavaScript.",
        },
        {
          id: 2,
          titulo: "Manipulación del DOM",
          descripcion: "Domina la manipulación del DOM con JavaScript.",
        },
        {
          id: 3,
          titulo: "Introducción a la programación orientada a objetos",
          descripcion:
            "Aprende los conceptos fundamentales de la programación orientada a objetos utilizando JavaScript.",
        },
        {
          id: 4,
          titulo: "Introducción a la programación funcional",
          descripcion:
            "Aprende los conceptos fundamentales de la programación funcional utilizando JavaScript.",
        },
      ],
    },
    {
      id: 2,
      img: "https://cursin.net/wp-content/uploads/2023/11/curso-python-universidad-colombiana.jpg.webp",
      titulo: "Introducción a Python para principiantes",
      precio: 29.99,
      autor: "Diana Vidal",
      contenido: "+20 clases",
      descripcion: "Aprende los fundamentos de la programación con Python.",
      categorias: ["Python", "Programación"],
      calificacion: "4",
      clases: [
        {
          id: 1,
          titulo: "Sintaxis básica de Python",
          descripcion: "Aprende la sintaxis básica de Python.",
        },
        {
          id: 2,
          titulo: "Estructuras de datos en Python",
          descripcion: "Explora las diferentes estructuras de datos en Python.",
        },
        {
          id: 3,
          titulo: "Introducción a la programación orientada a objetos",
          descripcion:
            "Aprende los conceptos fundamentales de la programación orientada a objetos utilizando Python.",
        },
        {
          id: 4,
          titulo: "Introducción a la programación funcional",
          descripcion:
            "Aprende los conceptos fundamentales de la programación funcional utilizando Python.",
        },
        {
          id: 5,
          titulo: "Introducción a la programación lógica",
          descripcion: "Aprende los conceptos Grupo de la programación lógica",
        },
      ],
    },
    {
      id: 3,
      img: "https://art.basiliscoderoko.com/wp-content/uploads/2022/10/como-aprender-inteligencia-artificial-con-tensorflow-basilisco-de-roko.jpg",
      titulo: "Machine Learning con TensorFlow",
      precio: 79.99,
      autor: "Sharith Blanco",
      contenido: "+140 clases",
      descripcion: "Domina el machine learning utilizando TensorFlow.",
      categorias: ["Machine Learning", "TensorFlow"],
      calificacion: "4.5",
      clases: [
        {
          id: 1,
          titulo: "Introducción al Machine Learning",
          descripcion: "Aprende los conceptos básicos del Machine Learning.",
        },
        {
          id: 2,
          titulo: "Preprocesamiento de datos",
          descripcion:
            "Aprende a preprocesar datos para su uso en modelos de Machine Learning.",
        },
        {
          id: 3,
          titulo:
            "Introducción a la programación orientada a objetos con Python",
          descripcion:
            "Aprende los conceptos fundamentales de la programación orientada a objetos utilizando Python.",
        },
        {
          id: 4,
          titulo: "Uso avanzado de Python en Data Science",
          descripcion:
            "Explora técnicas avanzadas de Python para aplicaciones en Data Science.",
        },
        {
          id: 5,
          titulo: "Desarrollo web con Django",
          descripcion:
            "Aprende a crear aplicaciones web utilizando el framework Django de Python.",
        },
        {
          id: 6,
          titulo: "Análisis de datos con pandas",
          descripcion:
            "Domina la manipulación y análisis de datos con la biblioteca pandas de Python.",
        },
      ],
    },
    {
      id: 4,
      img: "https://facialix.com/wp-content/uploads/2023/07/image-19-1024x603.png",
      titulo: "Aplicaciones móviles con React Native",
      precio: 59.99,
      autor: "Andrea Valderrama",
      contenido: "150 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones móviles multiplataforma con React Native.",
      categorias: ["Desarrollo móvil", "React Native"],
      calificacion: "4.5",
      clases: [
        {
          id: 1,
          titulo: "Configuración del entorno de desarrollo",
          descripcion:
            "Configura tu entorno de desarrollo para trabajar con React Native.",
        },
        {
          id: 2,
          titulo: "Creación de componentes",
          descripcion:
            "Aprende a crear componentes reutilizables en React Native.",
        },
        {
          id: 3,
          titulo: "Gestión de estado con Redux",
          descripcion:
            "Implementa la gestión de estado en aplicaciones React Native utilizando Redux.",
        },
        {
          id: 4,
          titulo: "Navegación en React Native",
          descripcion:
            "Explora las diferentes opciones de navegación disponibles en React Native.",
        },
        {
          id: 5,
          titulo: "Acceso a datos con Axios",
          descripcion:
            "Aprende a realizar solicitudes HTTP y acceder a datos utilizando Axios en React Native.",
        },
      ],
    },
    {
      id: 5,
      img: "https://i.ytimg.com/vi/-rBRxib3SwQ/maxresdefault.jpg",
      titulo: "Fundamentos de SQL",
      precio: 39.99,
      autor: "Kenneth Rosales",
      contenido: "+20 clases",
      descripcion:
        "Aprende los fundamentos de SQL y cómo trabajar con bases de datos relacionales.",
      categorias: ["Bases de datos", "SQL"],
      calificacion: "3.2",
      clases: [
        {
          id: 1,
          titulo: "Introducción a SQL",
          descripcion: "Aprende los conceptos básicos de SQL.",
        },
        {
          id: 2,
          titulo: "Consultas SELECT",
          descripcion: "Domina las consultas SELECT en SQL.",
        },
        {
          id: 3,
          titulo: "Manipulación de datos con SQL",
          descripcion:
            "Aprende a insertar, actualizar y eliminar datos en una base de datos utilizando SQL.",
        },
        {
          id: 4,
          titulo: "Funciones y procedimientos almacenados",
          descripcion:
            "Descubre cómo crear y utilizar funciones y procedimientos almacenados en SQL.",
        },
        {
          id: 5,
          titulo: "Modelado de datos relacional",
          descripcion:
            "Comprende los conceptos de modelado de datos relacional y cómo aplicarlos en SQL.",
        },
      ],
    },
    {
      id: 6,
      img: "https://ucenfotec.ac.cr/ecommerce/wp-content/uploads/sites/13/2022/06/FRO-04.jpg",
      titulo: "Aplicaciones web con Angular",
      precio: 69.99,
      autor: "Luisa Fernanda",
      contenido: "+599 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones web dinámicas con el framework Angular.",
      categorias: ["Desarrollo web", "Angular"],
      calificacion: "5",
      clases: [
        {
          id: 1,
          titulo: "Conceptos básicos de Angular",
          descripcion: "Aprende los conceptos fundamentales de Angular.",
        },
        {
          id: 2,
          titulo: "Componentes y servicios",
          descripcion:
            "Aprende a trabajar con componentes y servicios en Angular.",
        },
        {
          id: 3,
          titulo: "Enrutamiento en Angular",
          descripcion:
            "Explora cómo implementar enrutamiento en una aplicación Angular para navegar entre diferentes vistas.",
        },
        {
          id: 4,
          titulo: "Formularios en Angular",
          descripcion:
            "Domina la creación y validación de formularios en Angular, incluyendo plantillas y formularios reactivos.",
        },
        {
          id: 5,
          titulo: "Consumo de APIs REST en Angular",
          descripcion:
            "Aprende a realizar solicitudes HTTP y consumir datos de APIs REST en una aplicación Angular.",
        },
      ],
    },
    {
      id: 7,
      img: "https://i.ytimg.com/vi/OAfH0KHqvKs/maxresdefault.jpg",
      titulo: "Programación orientada a objetos con Java",
      precio: 49.99,
      autor: "Javier Pallares",
      contenido: "+40 clases",
      descripcion:
        "Aprende los conceptos fundamentales de la programación orientada a objetos utilizando Java.",
      categorias: ["Java", "Programación"],
      calificacion: "3",
      clases: [
        {
          id: 1,
          titulo: "Introducción a la programación orientada a objetos",
          descripcion:
            "Aprende los principios básicos de la programación orientada a objetos.",
        },
        {
          id: 2,
          titulo: "Clases y objetos en Java",
          descripcion: "Domina el concepto de clases y objetos en Java.",
        },
        {
          id: 3,
          titulo: "Herencia en Java",
          descripcion:
            "Comprende el concepto de herencia y cómo implementarlo en Java para reutilizar código y establecer relaciones entre clases.",
        },
        {
          id: 4,
          titulo: "Polimorfismo en Java",
          descripcion:
            "Explora el polimorfismo en Java y cómo permite a los objetos de diferentes clases responder al mismo mensaje de manera distinta.",
        },
        {
          id: 5,
          titulo: "Interfaces y abstracción en Java",
          descripcion:
            "Aprende sobre interfaces y abstracciones en Java y cómo pueden utilizarse para definir contratos y establecer un nivel de abstracción en tu código.",
        },
      ],
    },
    {
      id: 8,
      img: "https://i.ytimg.com/vi/l2pjEc0p78A/maxresdefault.jpg",
      titulo: "Diseño de interfaces de usuario con Figma",
      precio: 34.99,
      autor: "Marcela Ruiz",
      contenido: "+50 clases",
      descripcion:
        "Aprende a diseñar interfaces de usuario atractivas y funcionales utilizando Figma.",
      categorias: ["Diseño", "Figma"],
      calificacion: "2.4",
      clases: [
        {
          id: 1,
          titulo: "Introducción a Figma",
          descripcion: "Conoce las herramientas y funciones básicas de Figma.",
        },
        {
          id: 2,
          titulo: "Diseño de interfaces responsivas",
          descripcion:
            "Aprende a diseñar interfaces que se adapten a diferentes dispositivos.",
        },
        {
          id: 3,
          titulo: "Prototipado en Figma",
          descripcion:
            "Descubre cómo utilizar Figma para crear prototipos interactivos y simular la experiencia de usuario de tus diseños.",
        },
        {
          id: 4,
          titulo: "Colaboración en equipo con Figma",
          descripcion:
            "Explora las características de colaboración en tiempo real de Figma y aprende a trabajar de forma eficiente en equipo en tus proyectos de diseño.",
        },
        {
          id: 5,
          titulo: "Animaciones en Figma",
          descripcion:
            "Domina las técnicas para crear animaciones y microinteracciones en tus diseños utilizando las capacidades de animación de Figma.",
        },
      ],
    },
    {
      id: 9,
      img: "https://i.ytimg.com/vi/5sapd1rsGbs/maxresdefault.jpg",
      titulo: "Desarrollo de videojuegos con Unity",
      precio: 79.99,
      autor: "Andrés Gómez",
      contenido: "+45 clases",
      descripcion:
        "Aprende a desarrollar videojuegos profesionales con el motor Unity.",
      categorias: ["Desarrollo de videojuegos", "Unity"],
      calificacion: "5",
      clases: [
        {
          id: 1,
          titulo: "Introducción a Unity",
          descripcion:
            "Conoce el entorno de desarrollo de Unity y sus herramientas.",
        },
        {
          id: 2,
          titulo: "Creación de escenas y assets",
          descripcion:
            "Aprende a crear escenas y assets para tu juego en Unity.",
        },
        {
          id: 3,
          titulo: "Programación en C# para Unity",
          descripcion:
            "Domina la programación en C# y aprende a utilizarla en el desarrollo de juegos con Unity.",
        },
        {
          id: 4,
          titulo: "Físicas y colisiones en Unity",
          descripcion:
            "Explora las características de físicas y colisiones en Unity y aprende a implementarlas en tu juego para lograr interacciones realistas.",
        },
        {
          id: 5,
          titulo: "Animaciones en Unity",
          descripcion:
            "Aprende a crear y controlar animaciones de personajes y objetos en Unity para dar vida a tu juego.",
        },
      ],
    },
    {
      id: 10,
      img: "https://3af2bd36ef.clvaw-cdnwnd.com/29a2d1a1bd29077db170af833302d83d/200002040-6c7156c717/curso-automatizacion-pruebas-web-selenium-java.png?ph=3af2bd36ef",
      titulo: "Automatización de pruebas con Selenium",
      precio: 44.99,
      autor: "Laura Díaz",
      contenido: "+20 clases",
      descripcion:
        "Aprende a automatizar pruebas de software utilizando Selenium WebDriver.",
      categorias: ["Pruebas de software", "Selenium"],
      calificacion: "3.8",
      clases: [
        {
          id: 1,
          titulo: "Configuración de entorno con Selenium",
          descripcion:
            "Configura tu entorno de desarrollo para trabajar con Selenium.",
        },
        {
          id: 2,
          titulo: "Automatización de pruebas web",
          descripcion:
            "Aprende a automatizar pruebas en páginas web utilizando Selenium.",
        },
        {
          id: 3,
          titulo: "Interacción avanzada con elementos web en Selenium",
          descripcion:
            "Domina técnicas avanzadas para interactuar con elementos web, como manejo de ventanas emergentes, frames y acciones avanzadas de mouse y teclado, en Selenium.",
        },
        {
          id: 4,
          titulo: "Estrategias de selección de elementos en Selenium",
          descripcion:
            "Aprende a seleccionar elementos de manera eficiente utilizando selectores CSS, XPath y otras estrategias en Selenium para escribir pruebas web robustas y mantenibles.",
        },
        {
          id: 5,
          titulo: "Integración de Selenium con frameworks de pruebas",
          descripcion:
            "Descubre cómo integrar Selenium con frameworks de pruebas populares como TestNG, JUnit o NUnit para estructurar y ejecutar tus pruebas de forma organizada y escalable.",
        },
      ],
    },
    {
      id: 11,
      img: "https://i.blogs.es/b72c12/hero/1366_2000.jpeg",
      titulo: "Desarrollo de aplicaciones móviles con Swift",
      precio: 59.99,
      autor: "Diego Torres",
      contenido: "150 clases",
      descripcion:
        "Aprende a desarrollar aplicaciones móviles para iOS utilizando Swift.",
      categorias: ["Desarrollo móvil", "Swift"],
      calificacion: "4.2",
      clases: [
        {
          id: 1,
          titulo: "Fundamentos de Swift",
          descripcion:
            "Aprende los fundamentos del lenguaje de programación Swift.",
        },
        {
          id: 2,
          titulo: "Interfaz de usuario en iOS",
          descripcion:
            "Domina la creación de interfaces de usuario para aplicaciones iOS.",
        },
        {
          id: 3,
          titulo: "Gestión de datos en iOS con CoreData",
          descripcion:
            "Aprende a utilizar CoreData para gestionar datos en aplicaciones iOS y mejorar la persistencia de datos.",
        },
        {
          id: 4,
          titulo: "Integración de APIs REST en aplicaciones iOS",
          descripcion:
            "Descubre cómo integrar servicios web y consumir datos de APIs REST en aplicaciones iOS utilizando URLSession o bibliotecas de terceros como Alamofire.",
        },
        {
          id: 5,
          titulo: "Desarrollo de aplicaciones multiplataforma con SwiftUI",
          descripcion:
            "Explora SwiftUI, el framework declarativo de Apple, y aprende a desarrollar aplicaciones que funcionen en múltiples plataformas, incluyendo iOS, macOS y watchOS.",
        },
      ],
    },
    {
      id: 12,
      img: "https://edteam-media.s3.amazonaws.com/courses/original/2ff3a7e6-965b-4898-b75a-48450580edaf.png",
      titulo: "Introducción a la ciberseguridad",
      precio: 24.99,
      autor: "Elena Navarro",
      contenido: "+80 clases",
      descripcion:
        "Obtén una introducción completa al mundo de la ciberseguridad y aprende a proteger sistemas y datos.",
      categorias: ["Ciberseguridad"],
      calificacion: "5",
      clases: [
        {
          id: 1,
          titulo: "Conceptos básicos de ciberseguridad",
          descripcion:
            "Aprende los conceptos fundamentales de la ciberseguridad.",
        },
        {
          id: 2,
          titulo: "Gestión de riesgos",
          descripcion:
            "Aprende a gestionar los riesgos de seguridad en sistemas informáticos.",
        },
        {
          id: 3,
          titulo: "Criptografía y seguridad de la información",
          descripcion:
            "Explora los principios de la criptografía y su aplicación en la seguridad de la información, incluyendo algoritmos de cifrado, firma digital y gestión de claves.",
        },
        {
          id: 4,
          titulo: "Seguridad en redes",
          descripcion:
            "Aprende sobre las amenazas comunes en redes informáticas y las medidas para protegerlas, incluyendo firewalls, detección de intrusiones y seguridad en protocolos de comunicación.",
        },
        {
          id: 5,
          titulo: "Hacking ético",
          descripcion:
            "Descubre los principios del hacking ético y aprende a utilizar técnicas de penetración para identificar vulnerabilidades y fortalecer la seguridad de sistemas informáticos.",
        },
      ],
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

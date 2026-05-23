import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Emanuel",
  lastName: "Barboza",
  name: `Emanuel Barboza`,
  role: "Project Manager | Scrum Master",
  avatar: "/images/perfil.png",
  email: "emanuelbarboza5@gmail.com"
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/emanuel-22",
    essential: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/emabarboza/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/argis_lab/",
    essential: true,
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: `https://wa.me/5493874659911`,
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Descargar CV",
    icon: "document",
    link: "/files/CV_Barboza_PM.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name} | Project Manager & Scrum Master`,
  description: `Portfolio profesional de ${person.name}, Project Manager y Scrum Master con base técnica en desarrollo de software.`,
  headline: <>Impulsando equipos y productos digitales con enfoque ágil</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Ayudo a equipos de desarrollo a entregar valor de forma continua,
      combinando metodologías ágiles con una sólida base técnica.
      <br />
      Trabajo como Scrum Master y Project Manager facilitando procesos,
      eliminando impedimentos y alineando negocio, tecnología y producto.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/EMFxNAtNLd6uLWD5A",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy Licenciado en Análisis de Sistemas y actualmente me especializo
        en la gestión de proyectos tecnológicos y metodologías ágiles. Me desempeño como Scrum Master y Project Manager, facilitando equipos
        multidisciplinarios y promoviendo prácticas ágiles como Scrum y Kanban,
        con foco en la entrega continua de valor.

        <br /><br />

        Tengo experiencia trabajando con desarrolladores, UX/UI y QA,
        alineando objetivos de negocio con soluciones técnicas. Cuento con una combinación de visión técnica y estratégica,
        lo que me permite tomar decisiones informadas y acompañar al equipo
        de manera efectiva.

        <br /><br />

        Me enfoco en:
        <br />
        • Mejora continua de procesos
        <br />
        • Gestión de backlog y priorización
        <br />
        • Definición de métricas agiles
        <br />
        • Facilitación y coaching ágil
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Proyecto DAR IT",
        timeframe: "Junio 2025 - Noviembre 2025",
        role: "Scrum Master",
        achievements: [
          <>
            Acompañamiento ágil en el desarrollo de una página web para el refugio
            Red4Patas, orientada a impulsar la adopción de animales.
          </>,
          <>
            Facilitación del trabajo entre desarrollo, diseño UX/UI y QA,
            promoviendo autoorganización, mejora continua y comunicación efectiva.
          </>,
          <>
            Participación en reuniones con Product Owner, Project Manager y cliente
            para alinear expectativas, objetivos y entregables.
          </>,
        ],
        images: [],
      },
      {
        company: "UPATecO",
        timeframe: "Julio 2025 - Octubre 2025",
        role: "Docente Universitario (Gestión de Proyectos Ágiles)",
        achievements: [
          <>
            Dictado del curso universitario “Gestión de Proyectos Tecnológicos mediante
            Enfoque Ágil”, aprobado por Resolución Rectoral N° 496/25.
          </>,
          <>
            Formación en metodologías ágiles como Scrum, Kanban y Lean Thinking,
            aplicadas a la gestión de proyectos tecnológicos.
          </>,
          <>
            Desarrollo de competencias en planificación colaborativa, gestión iterativa
            e implementación de enfoques ágiles en contextos reales.
          </>,
          <>
            Fomento del trabajo en equipo, la comunicación efectiva y la mejora continua
            en iniciativas tecnológicas.
          </>,
        ],
        images: [],
      },
      {
        company: "MakisanTech IT",
        timeframe: "Octubre 2024 - Marzo 2025",
        role: "Scrum Master",
        achievements: [
          <>
            Optimización del flujo de trabajo para el desarrollo de una plataforma
            web de publicación de eventos culturales en Salta.
          </>,
          <>
            Coordinación con el cliente para priorizar el Product Backlog y alinear
            los entregables con las necesidades del producto.
          </>,
          <>
            Colaboración con equipo multidisciplinario de diseño UX/UI, frontend y
            backend, incorporando buenas prácticas ágiles.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educación",
    institutions: [
      {
        name: "Universidad Nacional de La Plata",
        description: 
        <>
          <strong>Maestría y Especialización en Ingeniería de Software </strong><br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            Facultad de Informática · En curso
          </span>
        </>,
      },
      {
        name: "Universidad Tecnológica Nacional",
        description: 
        <>
          <strong>Diplomatura en Testing de Software </strong><br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            Facultad Regional Resistencia · En curso
          </span>
        </>,
      },
      {
        name: "Universidad Tecnológica Nacional",
        description: 
        <>
          <strong>Diplomatura en Metodologías y Marcos de Trabajo Ágiles </strong><br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            Facultad Regional Buenos Aires · Finalizado
          </span>
        </>,
      },
      {
        name: "Universidad Nacional de Salta",
        description: 
        <>
          <strong>Licenciatura en Análisis de Sistemas </strong><br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            Facultad de Ciencias Exactas · Finalizado
          </span>
        </>,
      },
    ],
  },

  
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades",
    skills: [
      {
        title: "Gestión Ágil y Producto",
        tags: [
          {
            name: "Scrum",
            icon: "rocket",
          },
          {
            name: "Kanban",
            icon: "grid",
          },
          {
            name: "Product Backlog",
            icon: "book",
          },
          {
            name: "KPIs / OKRs",
            icon: "document",
          },
          {
            name: "Design Thinking",
            icon: "figma",
          },
          {
            name: "Facilitación",
            icon: "person",
          },
        ],
      },
      {
        title: "Herramientas",
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "Azure",
            icon: "azure",
          },
          {
            name: "Jira",
            icon: "jira",
          },
          {
            name: "Trello",
            icon: "trello",
          },    
        ],
        
      },
      
    ],
  },
};

const blog: Blog = {
  path: "/about",
  label: "About",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Diseño y proyectos desarrollados por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

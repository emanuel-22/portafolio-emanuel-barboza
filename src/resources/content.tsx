import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Emanuel",
  lastName: "Barboza",
  name: `Emanuel Barboza`,
  role: "Software Engineer",
  avatar: "/images/perfil.png",
  email: "emanuelbarboza5@gmail.com"
};

const newsletter: Newsletter = {
  display: true,
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
    essential: true,
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
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
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
        Soy Licenciado en Análisis de Sistemas y me encuentro finalizando una Maestría en Ingeniería de Software. 
        A lo largo de mi trayectoria he participado en proyectos académicos y de la industria. 
        Cuento con experiencia en diseño, desarrollo e implementación de sistemas. 
        Estoy interesado en construir soluciones robustas, escalables y mantenibles, poniendo foco en la calidad del código y la mejora continua.

        Además, tengo una fuerte base trabajo en equipo, colaboración activa y adaptación a entornos dinámicos. 
        Disfruto aprender nuevas tecnologías, explorar herramientas y 
        enfrentar desafíos técnicos que aporten valor real a los proyectos en los que participo.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Kozaca",
        timeframe: "2025 - Actualidad",
        role: "Ssr Software Developer",
        achievements: [
          <>
            Desarrollo y mantenimiento de plataformas web Red-i  para gestión de clínicas y Convenia Salud para financiadores de salud.
          </>,
          <>
            Implementación de nuevas funcionalidades y mejora continua de módulos críticos del sistema: historia clínica, turnos, 
            portal del profesional y administrativo, lógica de precios,  llamador de paciente, reglas de negocio para convenios y 
            aranceles por prestador, liquidaciones, entre otras.
          </>,
          <>
            Tecnologias: CakePHP, Laravel, Python, JavaScript, Bootstrap, MySQL, MongoDB, Docker, GitLab, Visual Studio Code, Trello
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/kozaca.png",
            alt: "Once UI Project",
            width: 35,
            height: 20,
          },
        ],
      },
      {
        company: "Nuntius IT",
        timeframe: "2021 - 2025",
        role: "Software Developer",
        achievements: [
          <>
            Desarrollo y mantenimiento de un sistema integral de gestión para importadora internacional Luxus 
            que cubre las áreas claves del negocio como  operaciones, comercial, importación, administración, finanzas y facturación.
          </>,
          <>
            Desarrollo y mantenimiento de sistema de gestión y página bingos del norte en Salta.
          </>,
          <>
            Tecnologias: Ruby on Rails, Turbo Rails, Stimulus, Python, Nodejs, HTML, Bootstrap, Tailwind, JavaScript, Typescript, 
            CSS, Docker, Azure, Gitlab, Visual Studio Code, Miro y Jira
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/nuntius.png",
            alt: "Once UI Project",
            width: 35,
            height: 20,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educación",
    institutions: [
      {
        name: "Universidad Nacional de La Plata (UNLP) - Facultad de Informática",
        description: 
        <>
          Maestría y Especialización en Ingeniería de Software <br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            En curso
          </span>
        </>,
      },
      {
        name: "Universidad Tecnológica Nacional (UTN) - Facultad Regional Resistencia Chaco",
        description: 
        <>
          Diplomatura en Testing de Software <br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            En curso
          </span>
        </>,
      },
      {
        name: "Universidad Nacional de Salta (UNSa) - Facultad de Ciencias Exactas",
        description: 
        <>
          Licenciatura en Análisis de Sistemas <br />
          <span style={{ color: "#888", fontSize: "0.9em" }}>
            Finalizado
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
        title: "Lenguajes de Programación",
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Php",
            icon: "php",
          },
          {
            name: "Ruby",
            icon: "ruby",
          },
          
        ],
        
      },
      {
        title: "Frameworks",
        tags: [
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "CakePHP",
            icon: "cakephp",
          },
          {
            name: "Ruby on Rails",
            icon: "rubyonrails",
          },
          {
            name: "Node JS",
            icon: "node",
          },
          {
            name: "Flask",
            icon: "flask",
          },
          {
            name: "React",
            icon: "react",
          },
          
          {
            name: "TailwindCSS",
            icon: "tailwindcss",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
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
            name: "VSCode",
            icon: "vscode",
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
      {
        title: "Bases de Datos",
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Mongo",
            icon: "mongo",
          },
          {
            name: "Redis",
            icon: "redis",
          },  
        ],
        
      },
      
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
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

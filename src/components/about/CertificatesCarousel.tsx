"use client";

import { useRef, useState } from "react";

const certificates = [
  {
    title: "Google Project Managment",
    institution: "Google - Coursera",
    image: "/images/certificates/project_manager.png",
    link: "https://drive.google.com/file/d/11VUTRNXmlOCylwNrFUfB3WcTGUowN3ZN/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Project Managment",
    institution: "Cámara Argentina de Comercio y Servicios - Desarrollo Profesional (DEP)",
    image: "/images/certificates/project_managment.png",
    link: "https://drive.google.com/file/d/1MYmcSnKEPuUwCvb1IcQdcV_-DSMJcCIu/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Sé el manager que nadie quiere dejar",
    institution: "LinkedIn Learning - Project Management Institute (PMI)",
    image: "/images/certificates/se_manager.png",
    link: "https://drive.google.com/file/d/1Wlc19urYX_Y-6wvxDAHE2X5Y2AlYt_lA/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Gestión de deuda técnica",
    institution: "LinkedIn Learning - Project Management Institute (PMI)",
    image: "/images/certificates/deuda_tecnica.png",
    link: "https://drive.google.com/file/d/1S2VnYqD9ejupUtBwb4HM44PGvCPxBTaH/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Liderazgo para el desarrollo de proyectos de software",
    institution: "LinkedIn Learning - Project Management Institute (PMI)",
    image: "/images/certificates/liderazgo_software.png",
    link: "https://drive.google.com/file/d/1Id-Ka3o10ZuXYTFQe_9Y0bkLKBuhatbx/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Mejora tu competencia en conflictos",
    institution: "LinkedIn Learning ",
    image: "/images/certificates/conflictos.png",
    link: "https://drive.google.com/file/d/1tI4ygQKFfyMHUzx2-zfcgiggzIzo926E/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Engineering Management",
    institution: "Plataforma Platzi",
    image: "/images/certificates/engineering_management.png",
    link: "https://platzi.com/p/emanuelbarboza5/curso/1732-course/diploma/detalle/",
    category: "Gestión de Proyectos",
  },
  {
    title: "Motivación para equipos de trabajo",
    institution: "Plataforma Platzi",
    image: "/images/certificates/motivacion.png",
    link: "https://platzi.com/p/emanuelbarboza5/curso/1896-course/diploma/detalle/",
    category: "Gestión de Proyectos",
  },
  {
    title: "Curso de Diseño UX | UI",
    institution: "Accenture",
    image: "/images/certificates/ux.png",
    link: "https://drive.google.com/file/d/1r4SgQ9omvLgB9GOMPH6QRCOBhukbasNL/view?usp=sharing",
    category: "Gestión de Proyectos",
  },
  {
    title: "Diplomatura en Metodologías y Marcos de Trabajo Ágiles",
    institution: "Universidad Tecnológica Nacional (UTN)",
    image: "/images/certificates/metodologias_agiles.png",
    link: "https://validator.centrodeelearning.com/validator/6daa6343-381f-42ab-8db6-9be96a28f491",
    category: "Agilidad",
  },
  {
    title: "Introducción al Pensamiento y la Cultura Ágil",
    institution: "Congreso Argentino de Ciencias de la Computación (CACIC) 2021 - Universidad Nacional de Salta (UNSa)",
    image: "/images/certificates/cacic_agilidad.png",
    link: "https://drive.google.com/file/d/15sA39GOVkn_6vXIlXDUD8AfFHYqyOY1o/view?usp=sharing",
    category: "Agilidad",
  },
  {
    title: "Curso de Lean Inception",
    institution: "Plataforma Udemy",
    image: "/images/certificates/lean_inception.png",
    link: "https://drive.google.com/file/d/1YTmRvS_dxTIz7h7XfY3RFVLY2XYwGF-e/view?usp=sharing",
    category: "Agilidad",
  },
  {
    title: "Curso de Product Management para Developers",
    institution: "Plataforma Platzi",
    image: "/images/certificates/product_management.png",
    link: "https://drive.google.com/file/d/1YTmRvS_dxTIz7h7XfY3RFVLY2XYwGF-e/view?usp=sharing",
    category: "Agilidad",
  },
  {
    title: "Taller de Estructuras Liberadoras",
    institution: "Bara Creativa",
    image: "/images/certificates/estructura_liberadora.png",
    link: "https://drive.google.com/file/d/1kRf4E_aWhqXp8uZNWX4lZBpWkizBGQSj/view?usp=sharing",
    category: "Agilidad",
  },
  {
    title: "Registered Scrum Master (RSM)",
    institution: "Scrum.Inc - Agile Education",
    image: "/images/certificates/scrum_master.png",
    link: "https://drive.google.com/file/d/1QJ8zR0lQ3MLS2g6fLprq378AKZHkReOb/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Registered Product Owner (RPO)",
    institution: "Scrum.Inc - Agile Education",
    image: "/images/certificates/product_owner.png",
    link: "https://drive.google.com/file/d/1UJK-D5XHOR_cKrY-c1VuCBH1BoV-Q41s/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    institution: "CertiProf Professional Knowledge",
    image: "/images/certificates/scrum_foundation.png",
    link: "https://drive.google.com/file/d/1j-zLcKpeTa6vjOm_YA8lY8mkPyFnpvKo/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Official Scrum Foundation Certification (OFfC)",
    institution: "AIBES",
    image: "/images/certificates/official_scrum.png",
    link: "https://drive.google.com/file/d/1gSNkaactxANGDg8o4y1Kr1UBbJ5AAcmF/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Taller de Scrum y Equipos Ágiles",
    institution: "Scrum Latam Comunidad",
    image: "/images/certificates/taller_scrum_agil.png",
    link: "https://drive.google.com/file/d/11_vCm6RqvQbrrhCkXgjH8j2NExDLStcA/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Pasantía Scrum Master",
    institution: "Makisan Tech",
    image: "/images/certificates/makisan_tech.png",
    link: "https://drive.google.com/file/d/1OsmQD6EuP4oUKAwOpik5Aq18Xo7NhMdy/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Curso de Scrum Master",
    institution: "Mindset Soft",
    image: "/images/certificates/scrum_master_mindset.png",
    link: "https://drive.google.com/file/d/174sn5amf_DkW2oPkHgHzdefWS-DFC89-/view?usp=sharing",
    category: "Scrum",
  },
  {
    title: "Kanban Essentials Professional Certificate (KEPC)",
    institution: "CertiProf Professional Knowledge",
    image: "/images/certificates/kanban_essential.png",
    link: "https://drive.google.com/file/d/1IQ2IRncpv-P3D7T35u1L0pJvvMXic-bd/view?usp=sharing",
    category: "Kanban",
  },
  {
    title: "Fundamentos de Kanban para desarrollo de software",
    institution: "LinkedIn Learning - Project Management Institute (PMI)",
    image: "/images/certificates/fundamentos_kanban.png",
    link: "https://drive.google.com/file/d/1ngA5QPjPNccR30BR439eFNe1nqZhr9pK/view?usp=sharing",
    category: "Kanban",
  },
  {
    title: "Curso de Kanban Essentials",
    institution: "Accademio",
    image: "/images/certificates/kanban_accademio.png",
    link: "https://drive.google.com/file/d/1FWtxczctmIy6Bs14mK9ANFJCbWd9lzYY/view?usp=sharing",
    category: "Kanban",
  },
  {
    title: "Aplicación de la inteligencia artificial en tu negocio",
    institution: "Santander X",
    image: "/images/certificates/ia_negocios.png",
    link: "https://drive.google.com/file/d/1gZeTW0XDM0scQl0DVJ6iruSdP51vOSzP/view",
    category: "Inteligencia Artificial",
  },
  {
    title: "Prompt Engineering",
    institution: "Plataforma Platzi",
    image: "/images/certificates/prompt.png",
    link: "https://platzi.com/p/emanuelbarboza5/curso/12323-course/diploma/detalle/",
    category: "Inteligencia Artificial",
  },
  {
    title: "Inteligencia artificial para startups",
    institution: "LinkedIn Learning - Project Management Institute (PMI)",
    image: "/images/certificates/ia_startups.png",
    link: "https://drive.google.com/file/d/1W3WRfNh57l9gXyZGrJ1WpX5E3UUezcuG/view?usp=sharing",
    category: "Inteligencia Artificial",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    institution: "IBM",
    image: "/images/certificates/ia_fundamentals.png",
    link: "Artificial Intelligence Fundamentals",
    category: "Inteligencia Artificial",
  },
  {
    title: "Introducción a la Inteligencia Artificial Generativa de AWS",
    institution: "AWS Argentina",
    image: "/images/certificates/ia_generativa.png",
    link: "https://drive.google.com/file/d/1xKQh5Nhia9VvJfFpvO2RMZZBMMlfkyVi/view?usp=sharing",
    category: "Inteligencia Artificial",
  },
  {
    title: "Gestión de proyectos con Jira",
    institution: "LinkedIn Learning - Project Management Institute (PMI)",
    image: "/images/certificates/proyectos_jira.png",
    link: "https://drive.google.com/file/d/1R0239vYQkdV9-TdZMXqPPNC4HLwK_FOC/view?usp=sharing",
    category: "Herramientas",
  },
  {
    title: "Taller Práctico de Jira para equipos ágiles",
    institution: "KPA Solution - Scrum Latam Comunidad",
    image: "/images/certificates/jira_agil.png",
    link: "https://drive.google.com/file/d/1fGG3WNnnhCT0SAM7_57s_A08tB-g2eeu/view?usp=sharing",
    category: "Herramientas",
  },
  {
    title: "Power BI",
    institution: "Fundación YPF",
    image: "/images/certificates/power_bi.png",
    link: "https://drive.google.com/file/d/1BwfnojoqI9knR4YOOE6A4ICRwbigXffa/view?usp=sharing",
    category: "Herramientas",
  },
  {
    title: "Curso de Software Tester - QA",
    institution: "Universidad Tecnologica Nacional (UTN)",
    image: "/images/certificates/tester_qa.png",
    link: "https://drive.google.com/file/d/1auJbjRwr8SraLFjM49nwRqieKq1iVuN5/view?usp=sharing",
    category: "Testing",
  },
  {
    title: "Curso de Testing de Calidad de Desarrollo de Software QA",
    institution: "Instituto Web",
    image: "/images/certificates/testing.png",
    link: "https://drive.google.com/file/d/1RyqtNFb6PRD6FQQY0nuMSNvrbg5lO7jH/view?usp=sharing",
    category: "Testing",
  },
  {
    title: "Concurso Provincial Prendete Salta",
    institution: "UPATecO | UNICEN",
    image: "/images/certificates/prendete.png",
    link: "https://drive.google.com/file/d/17FijsodLWlQNC0YeyIu4Tve6TdQ3epA0/view?usp=sharing",
    category: "Reconocimientos",
  },
  {
    title: "Artículo Razones de Fracaso de Proyectos de Software: un Mapeo Sistemático",
    institution: "Congreso Argentino de Ciencias de la Computación (CACIC) 2024 - Universidad de la Plata (UNLP)",
    image: "/images/certificates/participacion_cacic.png",
    link: "https://drive.google.com/file/d/1wpK0cjo2kXCF9d2lL55EBRit1JeRWjqW/view?usp=sharing",
    category: "Reconocimientos",
  },
  {
    title: "Artículo Aplicación de Scrum a IEDyH de Salta",
    institution: "Congreso Nacional de Ingeniería Informática / Sistemas de Información (CoNaIISI) 2020 - Universidad Tecnológica Nacional (UTN) Facultad Regional San Francisco",
    image: "/images/certificates/scrum_congreso.png",
    link: "https://drive.google.com/file/d/16SwzZBl3k44yFC6k85xcvLFcQxB21KVK/view?usp=sharing",
    category: "Reconocimientos",
  },
  {
    title: "Artículo Reconocimiento de Emociones usando MLP",
    institution: "Congreso Nacional de Ingeniería Informática / Sistemas de Información (CoNaIISI) 2020 - Universidad Tecnológica Nacional (UTN) Facultad Regional San Francisco",
    image: "/images/certificates/scrum_congreso.png",
    link: "https://drive.google.com/file/d/1LOxLTj2Ge-eouhjCeLqV9Ec_yHX6MMVn/view?usp=sharing",
    category: "Reconocimientos",
  },
  {
    title: "Participante",
    institution: "IV Congreso Internacional de Ciencias de la Computación y Sistemas de Información (CICCSI) 2020",
    image: "/images/certificates/participacion_cicsi.png",
    link: "https://drive.google.com/file/d/12S9oesB233zXSG52DCKKVt-o8z0g1prL/view?usp=sharing",
    category: "Reconocimientos",
  },
  {
    title: "Expositor en Simposio Argentino de Imagen y Visión 2019",
    institution: "Jornada Argentina de Informática (JAIIO) 2019 - Universidad Nacional de Salta",
    image: "/images/certificates/jaiio.png",
    link: "https://drive.google.com/file/d/18gM3BlSHVccjZzy6KM0vk0R3pRv3P7LM/view?usp=sharing",
    category: "Reconocimientos",
  },
 
];

const categories = ["Todos", ...Array.from(new Set(certificates.map((c) => c.category)))];

export default function CertificatesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const filteredCertificates =
    activeCategory === "Todos"
      ? certificates
      : certificates.filter((certificate) => certificate.category === activeCategory);

  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -800 : 800,
      behavior: "smooth",
    });
  };

  return (
    <section className="certificates-section">
      <div className="certificates-header">
        <h2>Certificaciones</h2>
        <p>
          Formación complementaria orientada a gestión ágil, liderazgo de equipos,
          producto, inteligencia artificial, testing y mejora continua.
        </p>
      </div>

      <div className="certificate-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`certificate-filter ${
              activeCategory === category ? "is-active" : ""
            }`}
            onClick={() => {
              setActiveCategory(category);
              carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="certificates-wrapper">
        <button
          type="button"
          className="cert-arrow cert-arrow-left"
          onClick={() => scroll("left")}
        >
          ‹
        </button>

        <button
          type="button"
          className="cert-arrow cert-arrow-right"
          onClick={() => scroll("right")}
        >
          ›
        </button>

        <div
          ref={carouselRef}
          className={`certificates-carousel ${isDragging ? "dragging" : ""}`}
          onMouseDown={(event) => {
            if (!carouselRef.current) return;
            setIsDragging(true);
            setStartX(event.pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
          }}
          onMouseLeave={() => setIsDragging(false)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={(event) => {
            if (!isDragging || !carouselRef.current) return;
            event.preventDefault();

            const x = event.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1.4;
            carouselRef.current.scrollLeft = scrollLeft - walk;
          }}
        >
          {filteredCertificates.map((certificate) => (
            <a
              className="certificate-card"
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={certificate.image} alt={certificate.title} />

              <div className="certificate-info">
                <span>{certificate.category}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.institution}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
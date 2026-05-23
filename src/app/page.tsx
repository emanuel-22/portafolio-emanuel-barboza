import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import CertificatesCarousel from "@/components/about/CertificatesCarousel";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Column fillWidth horizontal="center" gap="32">
        {about.avatar.display && (
          <Column
            className="profile-hero"
            fillWidth
            horizontal="center"
            gap="16"
            paddingY="40"
          >
            <Avatar src={person.avatar} size="xl" />

            <Heading as="h1" variant="display-strong-l" align="center">
              {person.name}
            </Heading>

            <Text
              variant="heading-default-m"
              onBackground="neutral-weak"
              align="center"
            >
              {person.role}
            </Text>

            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                vertical="center"
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Trabajemos juntos</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}

            {social.length > 0 && (
              <Row
                paddingTop="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <Button
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      ),
                  )}
              </Row>
            )}
          </Column>
        )}

        <Column className={styles.blockAlign} fillWidth maxWidth="m">
          {about.intro.display && (
            <section className="about-intro-section">
              <div className="section-heading">
                <span>Sobre mí</span>

                <Heading
                  as="h2"
                  id={about.intro.title}
                  variant="display-strong-s"
                >
                  Transformando equipos y proyectos digitales
                </Heading>
              </div>

              <div className="about-intro-card">
                <Text variant="body-default-l">
                  Soy Licenciado en Análisis de Sistemas y me especializo en
                  gestión de proyectos tecnológicos y metodologías ágiles,
                  combinando visión técnica con liderazgo colaborativo.
                </Text>

                <Text variant="body-default-l">
                  Trabajo facilitando equipos multidisciplinarios, alineando
                  objetivos de negocio, producto y tecnología para impulsar
                  entregas continuas de valor.
                </Text>
              </div>

              <div className="about-highlights">
                <div className="about-highlight-card">
                  <h3>⚡ Agile Leadership</h3>
                  <p>
                    Facilitación de equipos Scrum y mejora continua de procesos.
                  </p>
                </div>

                <div className="about-highlight-card">
                  <h3>📊 Product & Delivery</h3>
                  <p>
                    Gestión de backlog, métricas ágiles y coordinación de entregas.
                  </p>
                </div>

                <div className="about-highlight-card">
                  <h3>🤝 Colaboración en Equipo</h3>
                  <p>
                    Comunicación efectiva entre negocio, UX/UI, QA y desarrollo.
                  </p>
                </div>

                <div className="about-highlight-card">
                  <h3>💡 Background Técnico</h3>
                  <p>
                    Base sólida en desarrollo de software.
                  </p>
                </div>
              </div>
            </section>
          )}

          {about.work.display && (
            <section className="portfolio-section">
              <div className="section-heading">
                <span>Trayectoria</span>
                <Heading as="h2" id={about.work.title} variant="display-strong-s">
                  {about.work.title}
                </Heading>
              </div>

              <Column fillWidth gap="24" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <article
                    key={`${experience.company}-${experience.role}-${index}`}
                    className="experience-card"
                  >
                    <div className="experience-card-header">
                      <div>
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <br/>
                        <Text variant="body-default-m" onBackground="brand-weak">
                          {experience.role}
                        </Text>
                      </div>

                      <span className="experience-date">{experience.timeframe}</span>
                    </div>

                    <ul className="experience-list">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <li key={`${experience.company}-${index}`}>
                            {achievement}
                          </li>
                        ),
                      )}
                    </ul>
                  </article>
                ))}
              </Column>
            </section>
          )}

          {about.studies.display && (
            <section className="portfolio-section">
              <div className="section-heading">
                <span>Formación académica</span>
                <Heading as="h2" id={about.studies.title} variant="display-strong-s">
                  {about.studies.title}
                </Heading>
              </div>

              <div className="education-grid">
                {about.studies.institutions.map((institution, index) => (
                  <article key={`${institution.name}-${index}`} className="education-card">
                    <div className="education-icon">
                      🎓
                    </div>

                    <div>
                      <Text
                        id={institution.name}
                        variant="heading-strong-m"
                        style={{ marginBottom: "6px" }}
                      >
                        {institution.name}
                      </Text>
                      <br/>
                      <Text variant="body-default-m" onBackground="neutral-medium">
                        {institution.description}
                      </Text>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <CertificatesCarousel />

          <br />

          {about.technical.display && (
            <section className="portfolio-section">
              <div className="section-heading">
                <span>Expertise</span>

                <Heading
                  as="h2"
                  id={about.technical.title}
                  variant="display-strong-s"
                >
                  {about.technical.title}
                </Heading>
              </div>

              <div className="skills-grid">
                {about.technical.skills.map((skill, index) => (
                  <article
                    key={`${skill.title}-${index}`}
                    className="skill-card"
                  >
                    <div className="skill-card-header">
                      <Text id={skill.title} variant="heading-strong-l">
                        {skill.title}
                      </Text>
                    </div>

                    {skill.description && (
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                        className="skill-description"
                      >
                        {skill.description}
                      </Text>
                    )}

                    {skill.tags && skill.tags.length > 0 && (
                      <div className="skills-tags">
                        {skill.tags.map((tag, tagIndex) => (
                          <div
                            key={`${skill.title}-${tagIndex}`}
                            className="skill-tag"
                          >
                            {tag.icon && (
                              <span className="skill-tag-icon">
                                {tag.icon}
                              </span>
                            )}

                            <span>{tag.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}
        </Column>
      </Column>
    </Column>
  );
}
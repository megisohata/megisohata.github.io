"use client";

import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  experiences,
  involvements,
  projects,
  type ProjectEntry,
} from "../data/portfolioEntries";

function tagClass(tag: string) {
  return ["animation", "interaction", "responsive"].includes(tag)
    ? "tag tag-blue"
    : "tag";
}

export default function PortfolioSite() {
  const [moonFill, setMoonFill] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(
    null,
  );
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalTransform, setModalTransform] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const sourceRectRef = useRef<DOMRect | null>(null);

  const ambientStars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, id) => ({
        id,
        char: ["*", ".", "✦", "✧", "·"][id % 5],
        left: `${(id * 37) % 100}%`,
        top: `${(id * 53) % 100}%`,
        fontSize: `${8 + ((id * 7) % 10)}px`,
        animationDuration: `${3 + ((id * 11) % 5)}s`,
        animationDelay: `${(id * 13) % 5}s`,
      })),
    [],
  );

  useEffect(() => {
    const updateMoonPhase = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct =
        max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
      setMoonFill(pct);
    };

    updateMoonPhase();
    window.addEventListener("scroll", updateMoonPhase, { passive: true });
    window.addEventListener("resize", updateMoonPhase);

    return () => {
      window.removeEventListener("scroll", updateMoonPhase);
      window.removeEventListener("resize", updateMoonPhase);
    };
  }, []);

  const closeModal = useCallback(() => {
    setIsModalShown(false);
    window.setTimeout(() => {
      setSelectedProject(null);
      setModalTransform("");
      sourceRectRef.current = null;
    }, 320);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let timeout = 0;
    const schedule = () => {
      timeout = window.setTimeout(
        () => {
          const star = document.createElement("div");
          star.className = "shooting-star";
          star.style.top = `${Math.random() * 40}%`;
          star.style.left = `${5 + Math.random() * 45}%`;
          document.getElementById("starfield")?.appendChild(star);
          requestAnimationFrame(() => star.classList.add("fly"));
          window.setTimeout(() => star.remove(), 2500);
          schedule();
        },
        18000 + Math.random() * 25000,
      );
    };

    schedule();
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.classList.add("modal-lock");
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-lock");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject, closeModal]);

  useEffect(() => {
    if (!selectedProject || !modalRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const sourceRect = sourceRectRef.current;

    if (!sourceRect || reduceMotion) {
      requestAnimationFrame(() => setIsModalShown(true));
      return;
    }

    const last = modalRef.current.getBoundingClientRect();
    const scaleX = sourceRect.width / last.width;
    const scaleY = sourceRect.height / last.height;
    const translateX = sourceRect.left - last.left;
    const translateY = sourceRect.top - last.top;

    setModalTransform(
      `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
    );
    requestAnimationFrame(() => {
      setIsModalShown(true);
      setModalTransform("translate(0, 0) scale(1, 1)");
    });
  }, [selectedProject]);

  function openModal(
    project: ProjectEntry,
    event: MouseEvent<HTMLButtonElement>,
  ) {
    sourceRectRef.current = event.currentTarget.getBoundingClientRect();
    setSelectedProject(project);
    setIsModalShown(false);
  }

  return (
    <main className="portfolio-shell">
      <div id="starfield" aria-hidden="true">
        {ambientStars.map((star) => (
          <span
            className="bg-star"
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              fontSize: star.fontSize,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          >
            {star.char}
          </span>
        ))}
      </div>

      <nav className="site-nav">
        <div className="wrap">
          <a className="nav-mark" href="#top" aria-label="Back to top">
            * meg isohata | portfolio
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#experience">experience</a>
              </li>
              <li>
                <a href="#involvements">involvements</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
            </ul>
            <div
              className="moon-phase"
              title="Scroll progress"
              aria-hidden="true"
              style={{ "--moon-fill": `${moonFill}%` } as React.CSSProperties}
            />
          </div>
        </div>
      </nav>

      <div className="wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="hero-name">
            Meg Isohata
          </h1>
          <div className="hero-credentials">
            Computer Science & AI @ Cornell University
          </div>
          <div className="hero-text">
            <p>
              I am a software engineer focused on user-facing full-stack work,
              building products that make everyday just a bit better.
            </p>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              see my work →
            </a>
            <a href="#about" className="btn">
              about me
            </a>
          </div>
        </section>

        <section id="about">
          <div className="section-head">
            <div className="section-tag">section 01</div>
            <h2>about</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I grew up in the Seattle suburbs and found an interest in tech
                through <span className="hl">FIRST robotics</span>. Now,
                I&apos;m a senior at Cornell studying CS and AI, building things
                that are{" "}
                <a
                  className="hl hl-link"
                  href="https://www.reddit.com/r/FRC/comments/12fxsli/2522_smoking_twice_in_playoffs_sad/"
                  rel="noreferrer"
                  target="_blank"
                >
                  a little less likely to catch on fire
                </a>
                .
              </p>
              <p>
                My technical approach is driven by a commitment to thoughtful
                design, clean code, and the{" "}
                <span className="hl">small details</span> that make a{" "}
                <span className="hl">huge impact</span> on user experience.
              </p>
              <p>
                When I&apos;m not coding, you can find me crocheting,
                reorganizing my Notion, or maxxing out my Beli.
              </p>
            </div>
            <aside className="now-card" aria-label="Right now">
              <div className="now-card-head">
                <span className="now-dot" />
                <span>A FEW OF MY FAVORITE THINGS</span>
              </div>
              <ul className="now-list">
                <li>
                  <span className="now-label">favorite book</span>the house in
                  the cerulean sea by t.j. klune
                </li>
                <li>
                  <span className="now-label">binge-watched</span>
                  grey&apos;s anatomy, gilmore girls, reign, outlander
                </li>
                <li>
                  <span className="now-label">on repeat</span>speak now, in
                  between dreams, hamilton soundtrack
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="experience">
          <div className="section-head">
            <div className="section-tag">section 02</div>
            <h2>experience</h2>
          </div>
          <div className="exp-list">
            {experiences.map((experience) => (
              <article className="exp-item" key={experience.org}>
                <span className="exp-star">*</span>
                <div className="exp-date">{experience.date}</div>
                <div className="exp-body">
                  <h3>{experience.org}</h3>
                  <div className="exp-role">{experience.role}</div>
                  <p className="exp-desc">{experience.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="involvements">
          <div className="section-head">
            <div className="section-tag">section 03</div>
            <h2>involvements</h2>
          </div>
          <div className="inv-list">
            {involvements.map((involvement) => (
              <article
                className="inv-item"
                key={`${involvement.org}-${involvement.role}`}
              >
                <div className="inv-item-top">
                  <h3 className="inv-org">{involvement.org}</h3>
                  <span className={`inv-type ${involvement.type}`}>
                    {involvement.type === "club" ? "club" : "part-time"}
                  </span>
                </div>
                <div className="inv-role">{involvement.role}</div>
                {involvement.desc ? (
                  <p className="inv-desc">{involvement.desc}</p>
                ) : null}
                <div className="inv-date">{involvement.date}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="section-head">
            <div className="section-tag">section 04</div>
            <h2>projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <button
                className="proj-card"
                key={project.no}
                type="button"
                onClick={(event) => openModal(project, event)}
              >
                <span className="proj-card-top">
                  <span className="proj-no">No. {project.no}</span>
                  <span className="proj-tags">
                    {project.tags.map((tag) => (
                      <span className={tagClass(tag)} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="proj-title">{project.title}</span>
                <span className="proj-desc">{project.desc}</span>
                <span className="proj-card-foot">
                  <span>{project.logged}</span>
                  <span className="proj-expand">Expand →</span>
                </span>
              </button>
            ))}
            <div className="proj-card proj-card-add">+ More Soon</div>
          </div>
        </section>

        <footer>
          <div className="sig">. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.</div>
          <p className="footer-note">made with care, curiosity, and caffeine</p>

          <div className="links">
            <a href="mailto:megisohata@gmail.com" target="_blank">
              email
            </a>
            <a href="https://github.com/megisohata" target="_blank">
              github
            </a>
            <a href="https://www.linkedin.com/in/meg-isohata/" target="_blank">
              linkedin
            </a>
          </div>
        </footer>
      </div>

      {selectedProject ? (
        <div
          className={`modal-overlay open ${isModalShown ? "show" : ""}`}
          onMouseDown={(event) =>
            event.target === event.currentTarget && closeModal()
          }
        >
          <div
            className="modal-card"
            ref={modalRef}
            style={{ transform: modalTransform }}
          >
            <div className="card-fade">
              <div className="proj-card-top">
                <span className="proj-no">No. {selectedProject.no}</span>
              </div>
              <h3>{selectedProject.title}</h3>
              <p className="proj-desc">{selectedProject.desc}</p>
            </div>
            <div className="modal-fade">
              <button
                className="modal-close"
                type="button"
                onClick={closeModal}
                aria-label="Close project details"
              >
                x
              </button>
              <div className="modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span className={tagClass(tag)} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2>{selectedProject.title}</h2>
              <div className="modal-meta">
                {selectedProject.logged} · {selectedProject.stack}
              </div>
              <p>{selectedProject.full}</p>
              <div className="modal-links">
                {selectedProject.links.live ? (
                  <a
                    href={selectedProject.links.live}
                    className="btn btn-primary"
                  >
                    View Live →
                  </a>
                ) : null}
                {selectedProject.links.code ? (
                  <a href={selectedProject.links.code} className="btn">
                    Source Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

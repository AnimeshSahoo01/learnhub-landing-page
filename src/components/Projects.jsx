
const PROJECTS = [
  {
    id: 1,
    icon: "🛒",
    g1: "#6366f1",
    g2: "#ec4899",
    title: "E-commerce Store",
    desc: "Product listing, cart and checkout flow.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    icon: "🌦",
    g1: "#14b8a6",
    g2: "#3b82f6",
    title: "Weather App",
    desc: "Live weather data using a public API.",
    tags: ["JS", "API"],
  },
  {
    id: 3,
    icon: "✅",
    g1: "#f59e0b",
    g2: "#ef4444",
    title: "Task Manager",
    desc: "To-do app with local storage and filters.",
    tags: ["JS", "LocalStorage"],
  },
  {
    id: 4,
    icon: "💼",
    g1: "#8b5cf6",
    g2: "#06b6d4",
    title: "Portfolio Website",
    desc: "Your personal site to showcase your work.",
    tags: ["HTML", "CSS"],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Projects</p>
          <h2>What you'll build</h2>
        </div>
        <div className="grid project-grid">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="project">
              <div
                className="project-thumb"
                style={{ "--g1": proj.g1, "--g2": proj.g2 }}
              >
                {proj.icon}
              </div>
              <div className="project-body">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tags">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
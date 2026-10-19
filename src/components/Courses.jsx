import { useState } from "react";
import { COURSES } from "../data/courses";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Programming", value: "programming" },
  { label: "Design", value: "design" },
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCourses =
    activeFilter === "all"
      ? COURSES
      : COURSES.filter((c) => c.category === activeFilter);

  return (
    <section className="section alt" id="courses">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Courses</p>
          <h2>Free courses to get you started</h2>
        </div>

        <div className="filter-buttons">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid course-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="card course">
              <div className="course-icon" style={{ "--c": course.color }}>
                {course.icon}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="meta">
                <span>⏱ {course.duration}</span>
                <span>📚 {course.lessons}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
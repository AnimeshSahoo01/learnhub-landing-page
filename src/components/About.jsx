
export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-inner">
        <div className="about-img">
          <div className="about-badge">
            5+ Years
            <br />
            <small>of teaching</small>
          </div>
        </div>

        <div className="about-text">
          <p className="section-tag">About Us</p>
          <h2>We make learning to code simple &amp; practical</h2>
          <p>
            LearnHub started with one goal: help beginners become confident developers without drowning in theory. Every course is built around projects you can put on your portfolio.
          </p>
          <ul className="features">
            <li>✅ Project-based curriculum</li>
            <li>✅ Lifetime access to course material</li>
            <li>✅ Community &amp; mentor support</li>
            <li>✅ Certificate of completion</li>
          </ul>
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
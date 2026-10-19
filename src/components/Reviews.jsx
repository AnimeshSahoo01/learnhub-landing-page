import { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: 1,
    stars: "★★★★★",
    text: '"The projects made everything click. I landed my first frontend job 4 months after starting!"',
    avatar: "PS",
    name: "Priya S.",
    role: "Frontend Developer",
  },
  {
    id: 2,
    stars: "★★★★★",
    text: '"Clear explanations and super helpful mentors. Best investment I\'ve made in my career."',
    avatar: "RK",
    name: "Rahul K.",
    role: "Student",
  },
  {
    id: 3,
    stars: "★★★★☆",
    text: '"Loved the JavaScript course. Bite-sized lessons that fit around my full-time job."',
    avatar: "AM",
    name: "Anjali M.",
    role: "Career Switcher",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setCurrent((index + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="section alt" id="reviews">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Reviews</p>
          <h2>What our students say</h2>
        </div>
        <div className="slider">
          <div
            className="slides"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="review">
                <div className="stars">{rev.stars}</div>
                <p>{rev.text}</p>
                <div className="reviewer">
                  <div className="avatar">{rev.avatar}</div>
                  <div>
                    <h4>{rev.name}</h4>
                    <span>{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button onClick={() => goTo(current - 1)} aria-label="Previous review">
              ‹
            </button>
            <div className="dots-nav">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  className={idx === current ? "active" : ""}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={() => goTo(current + 1)} aria-label="Next review">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
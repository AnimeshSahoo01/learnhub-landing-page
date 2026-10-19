import { useState } from "react";

const PLANS = [
  {
    id: 1,
    title: "Frontend Mastery",
    desc: "HTML, CSS, JavaScript & React",
    oncePrice: 1999,
    monthPrice: 499,
    features: [
      { text: "✔ 60+ hours of video", included: true },
      { text: "✔ 10 real projects", included: true },
      { text: "✔ Certificate", included: true },
      { text: "✖ 1:1 mentorship", included: false },
    ],
    featured: false,
  },
  {
    id: 2,
    title: "Full Stack Bootcamp",
    desc: "Frontend + Node.js, Express & MongoDB",
    oncePrice: 4999,
    monthPrice: 999,
    features: [
      { text: "✔ 120+ hours of video", included: true },
      { text: "✔ 20 real projects", included: true },
      { text: "✔ Certificate", included: true },
      { text: "✔ Weekly 1:1 mentorship", included: true },
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Python & Data Science",
    desc: "Python, Pandas, ML basics",
    oncePrice: 3499,
    monthPrice: 799,
    features: [
      { text: "✔ 80+ hours of video", included: true },
      { text: "✔ 12 real projects", included: true },
      { text: "✔ Certificate", included: true },
      { text: "✖ 1:1 mentorship", included: false },
    ],
    featured: false,
  },
];

export default function Pricing({ onEnroll }) {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <p className="section-tag">Paid Courses</p>
          <h2>Go further with premium courses</h2>
          <div className="billing-toggle">
            <span>One-time</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isMonthly}
                onChange={(e) => setIsMonthly(e.target.checked)}
              />
              <span className="slider-round"></span>
            </label>
            <span>Monthly</span>
          </div>
        </div>
        <div className="grid pricing-grid">
          {PLANS.map((plan) => {
            const priceVal = isMonthly ? plan.monthPrice : plan.oncePrice;
            return (
              <div
                key={plan.id}
                className={`card price-card ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && <div className="ribbon">Most Popular</div>}
                <h3>{plan.title}</h3>
                <p className="desc">{plan.desc}</p>
                <div className="price">
                  <span className="amount">
                    ₹{priceVal.toLocaleString("en-IN")}
                  </span>
                  <small className="per">{isMonthly ? " /month" : ""}</small>
                </div>
                <ul>
                  {plan.features.map((f, idx) => (
                    <li key={idx} className={!f.included ? "no" : ""}>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${!plan.featured ? "btn-outline" : ""}`}
                  onClick={() =>
                    onEnroll({
                      title: plan.title,
                      amount: priceVal * 100, // Converts rupees to paise for Razorpay
                    })
                  }
                >
                  Enroll Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
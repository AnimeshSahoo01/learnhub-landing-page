import { useState, useEffect } from "react";

const WORDS = ["build careers", "pay the bills", "change your life", "get you hired"];

function Counter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <h3 className="counter">
      {count.toLocaleString()}
      {target > 1000 ? "+" : "%"}
    </h3>
  );
}

export default function Hero() {
  const [typedText, setTypedText] = useState(WORDS[0]);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = WORDS[0].length;
    let deleting = true;
    let timeoutId;

    const typeLoop = () => {
      const word = WORDS[wordIndex];

      if (deleting) {
        charIndex--;
        setTypedText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % WORDS.length;
        }
      } else {
        charIndex++;
        setTypedText(WORDS[wordIndex].slice(0, charIndex));
        if (charIndex === WORDS[wordIndex].length) {
          deleting = true;
          timeoutId = setTimeout(typeLoop, 1800);
          return;
        }
      }

      timeoutId = setTimeout(typeLoop, deleting ? 50 : 100);
    };

    timeoutId = setTimeout(typeLoop, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="tag">🚀 Start your coding journey today</p>
          <h1>
            Learn skills that <span className="highlight">{typedText}</span>
          </h1>
          <p className="subtitle">
            Hands-on courses in Web Development, JavaScript, Python and more — taught through real projects, by mentors who ship code every day.
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="btn">
              Explore Courses
            </a>
            <a href="#pricing" className="btn btn-outline">
              View Plans
            </a>
          </div>
          <div className="stats">
            <div>
              <Counter target={12000} />
              <p>Students</p>
            </div>
            <div>
              <Counter target={45} />
              <p>Courses</p>
            </div>
            <div>
              <Counter target={98} />
              <p>Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>
              <code>
                <span className="k">const</span> you = &#123;{"\n"}
                {"  "}skills: [<span className="s">"HTML"</span>, <span className="s">"CSS"</span>, <span className="s">"JS"</span>],{"\n"}
                {"  "}status: <span className="s">"learning"</span>,{"\n"}
                &#125;;{"\n\n"}
                <span className="k">function</span> <span className="f">levelUp</span>(dev) &#123;{"\n"}
                {"  "}
                <span className="k">return</span> &#123; ...dev, status: <span className="s">"hired 🎉"</span> &#125;;{"\n"}
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
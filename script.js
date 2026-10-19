
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 50);
  backToTop.classList.toggle("show", y > 500);

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const link = navLinks.querySelector(`a[href="#${section.id}"]`);
    if (!link) return;
    if (y >= top && y < top + section.offsetHeight) {
      navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


const typed = document.getElementById("typed");
const words = ["build careers", "pay the bills", "change your life", "get you hired"];
let wordIndex = 0;
let charIndex = words[0].length;
let deleting = true;

function typeLoop() {
  const word = words[wordIndex];
  typed.textContent = word.slice(0, charIndex);

  if (deleting) {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    charIndex++;
    if (charIndex === words[wordIndex].length + 1) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  }
  setTimeout(typeLoop, deleting ? 50 : 100);
}
setTimeout(typeLoop, 2000);


function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target).toLocaleString() + (progress === 1 && target > 1000 ? "+" : "");
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(".counter").forEach(animateCounter);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));


const filters = document.querySelectorAll(".filter");
const courses = document.querySelectorAll(".course");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.filter;
    courses.forEach((course) => {
      const match = category === "all" || course.dataset.category === category;
      course.classList.toggle("hide", !match);
    });
  });
});


const slides = document.getElementById("slides");
const slideCount = slides.children.length;
const dotsNav = document.getElementById("dotsNav");
let current = 0;
let autoSlide;

for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goTo(i));
  dotsNav.appendChild(dot);
}

function goTo(index) {
  current = (index + slideCount) % slideCount;
  slides.style.transform = `translateX(-${current * 100}%)`;
  dotsNav.querySelectorAll("span").forEach((d, i) => d.classList.toggle("active", i === current));
  restartAuto();
}

function restartAuto() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => goTo(current + 1), 5000);
}

document.getElementById("prev").addEventListener("click", () => goTo(current - 1));
document.getElementById("next").addEventListener("click", () => goTo(current + 1));
goTo(0);


const billingSwitch = document.getElementById("billingSwitch");

billingSwitch.addEventListener("change", () => {
  const monthly = billingSwitch.checked;
  document.querySelectorAll(".price").forEach((price) => {
    const value = monthly ? price.dataset.month : price.dataset.once;
    price.querySelector(".amount").textContent = "₹" + Number(value).toLocaleString("en-IN");
    price.querySelector(".per").textContent = monthly ? " /month" : "";
  });
});


const modal = document.getElementById("modal");
const modalCourse = document.getElementById("modalCourse");
const closeModal = () => modal.classList.remove("show");

document.querySelectorAll(".enroll").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalCourse.textContent = btn.dataset.course;
    modal.classList.add("show");
  });
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOk").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.target === modal && closeModal());
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());


const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.className = "form-msg error";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.className = "form-msg error";
    return;
  }
  formMsg.textContent = `Thanks, ${name}! We'll get back to you soon.`;
  formMsg.className = "form-msg success";
  form.reset();
});


document.getElementById("year").textContent = new Date().getFullYear();

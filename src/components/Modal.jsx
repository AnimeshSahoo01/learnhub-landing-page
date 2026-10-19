import { useEffect } from "react";

export default function Modal({ course, onClose }) {
  useEffect(() => {
    if (!course) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [course, onClose]);

  if (!course) return null;

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_Tph5zHZWBKYFCh", // Replace with your Test API Key (Key ID)
      amount: course.amount, // Selected course price in paise
      currency: "INR",
      name: "LearnHub",
      description: `Enrollment for ${course.title}`,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        onClose();
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="modal show" onClick={onClose}>
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3>🎉 Complete Enrollment</h3>
        <p>
          You are enrolling in <strong>{course.title}</strong> for{" "}
          <strong>₹{(course.amount / 100).toLocaleString("en-IN")}</strong>.
        </p>
        <p className="muted">Click below to proceed to secure checkout.</p>
        <button className="btn" onClick={handlePayment}>
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
}
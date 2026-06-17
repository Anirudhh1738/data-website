import React, { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg,#0f2660,#1a3c8f)",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>Tell Us About Your Company</h1>
        <p>Fill in the details below and we’ll build your website.</p>
      </header>

      {/* Form Section */}
      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              style={inputStyle}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              style={inputStyle}
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
              style={inputStyle}
            />

            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your details..."
              style={{ ...inputStyle, minHeight: "120px" }}
            />

            <button
              type="submit"
              style={{
                background: "#1a3c8f",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Submit
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>🎉 Submitted Successfully!</h2>
            <p>Thank you, {formData.companyName}.</p>
            <p>We will contact you at {formData.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  margin: "8px 0 18px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

export default App;
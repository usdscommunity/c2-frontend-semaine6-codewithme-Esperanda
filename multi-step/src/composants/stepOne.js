import React, { useState } from "react";
export default function StepOne({ onNext }) { // <-- Récupérer la prop
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "This field is required";
    if (!email.trim()) newErrors.email = "This field is required";
    if (!phone.trim()) newErrors.phone = "This field is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onNext(); // ✅ Passe à l’étape suivante
    }
  };

  return (
    <div>
      <h1 className="form-title">Personal info</h1>
      <p className="form-description">
        Please provide your name, email address, and phone number.
      </p>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={errors.phone ? "error-input" : ""}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      <div className="btn-container">
        <button className="next-btn" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

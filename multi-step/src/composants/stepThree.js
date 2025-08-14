
import React, { useState } from "react";

export default function StepThree({ billing, selectedAddOns=[], setSelectedAddOns, onNext, onBack }) {
  const addOns = [
    { name: "Online service", desc: "Access to multiplayer games", priceMonthly: 1, priceYearly: 10 },
    { name: "Larger storage", desc: "Extra 1TB of cloud save", priceMonthly: 2, priceYearly: 20 },
    { name: "Customizable Profile", desc: "Custom theme on your profile", priceMonthly: 2, priceYearly: 20 },
  ];
  selectedAddOns = selectedAddOns || []; // sécurité supplémentaire

  const toggleAddOn = (name) => {
    setSelectedAddOns((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  return (
    <div className="step-container">
      <h1 className="form-title">Pick add-ons</h1>
      <p className="form-description">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="addons-list">
        {addOns.map((addon) => {
          const price =
            billing === "monthly"
              ? `+$${addon.priceMonthly}/mo`
              : `+$${addon.priceYearly}/yr`;

          return (
            <label
              key={addon.name}
              className={`addon-item ${selectedAddOns.includes(addon.name) ? "active" : ""}`}
            >
              <div className="addon-content">
                <div className="option">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.name)}
                    onChange={() => toggleAddOn(addon.name)}
                  />
                </div>
                <div className="text">
                  <h2>{addon.name}</h2>
                  <p>{addon.desc}</p>
                </div>
                <span className="price">{price}</span>
              </div>
            </label>
          );
        })}
      </div>

      <div className="nav-buttons">
        <button className="back-btn" onClick={onBack}>
          Go Back
        </button>
        <button className="next-btn" onClick={onNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

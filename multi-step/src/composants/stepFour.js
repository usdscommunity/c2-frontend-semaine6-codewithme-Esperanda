import React from "react";

export default function StepFour({ selectedPlan, billing, selectedAddOns, onChangePlan, onBack, onConfirm }) {
  if (!selectedPlan) return null;

  const plans = [
    { name: "Arcade", priceMonthly: 9, priceYearly: 90 },
    { name: "Advanced", priceMonthly: 12, priceYearly: 120 },
    { name: "Pro", priceMonthly: 15, priceYearly: 150 },
  ];

  const plan = plans.find(p => p.name === selectedPlan);

  const total =
    (billing === "monthly" ? plan.priceMonthly : plan.priceYearly) +
    selectedAddOns.reduce((sum, addon) =>
      sum + (billing === "monthly" ? addon.priceMonthly : addon.priceYearly), 0
    );

  return (
    <div className="step-container">
      <h1 className="form-title">Finishing up</h1>
      <p className="form-description">Double-check everything looks OK before confirming.</p>

      <div className="summary-box">
        <div className="summary-plan">
          <div>
            <span className="plan-name">
              {plan.name} ({billing === "monthly" ? "Monthly" : "Yearly"})
            </span>
            <button className="change-btn" onClick={onChangePlan}>Change</button>
          </div>
          <span className="plan-price">
            ${billing === "monthly" ? plan.priceMonthly : plan.priceYearly}/{billing === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        {selectedAddOns.length > 0 && (
          <div className="summary-addons">
            {selectedAddOns.map((addon) => (
              <div key={addon.name} className="addon-summary">
                <span>{addon.name}</span>
                <span className="addon-price">
                  +${billing === "monthly" ? addon.priceMonthly : addon.priceYearly}/{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="summary-total">
        <span>Total (per {billing === "monthly" ? "month" : "year"})</span>
        <span className="total-price">
          ${total}/{billing === "monthly" ? "mo" : "yr"}
        </span>
      </div>

      <div className="nav-buttons">
        <button className="back-btn" onClick={onBack}>Go Back</button>
        <button className="next-btn" onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}

import React from "react";

export default function StepTwo({ billing, setBilling, selectedPlan, setSelectedPlan, onNext, onBack }) {
  const plans = [
    { name: "Arcade", priceMonthly: 9, priceYearly: 90, option: "2 months free" },
    { name: "Advanced", priceMonthly: 12, priceYearly: 120, option: "2 months free" },
    { name: "Pro", priceMonthly: 15, priceYearly: 150, option: "2 months free" },
  ];

  return (
    <div className="step-container">
      <h1 className="form-title">Select your plan</h1>
      <p className="form-description">You have the option of monthly or yearly billing.</p>

      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${selectedPlan === plan.name ? "active" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <div className={`plan-icon icon-${plan.name.toLowerCase()}`}></div>
            <div>
              <h3>{plan.name}</h3>
              <p>
                {billing === "monthly"
                  ? `$${plan.priceMonthly}/mo`
                  : (
                    <>
                      ${plan.priceYearly}/yr
                      <br />
                      <span className="plan-option">{plan.option}</span>
                    </>
                  )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="billing-toggle">
        <span className={billing === "monthly" ? "active" : ""}>Monthly</span>
        <div className="toggle-switch" onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}>
          <div className={`toggle-circle ${billing}`}></div>
        </div>
        <span className={billing === "yearly" ? "active" : ""}>Yearly</span>
      </div>

      <div className="nav-buttons">
        <button className="back-btn" onClick={onBack}>Go Back</button>
        <button className="next-btn" onClick={onNext}>Next Step</button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import StepOne from "./composants/stepOne";
import StepTwo from "./composants/stepTwo";
import StepThree from "./composants/stepThree";
import StepFour from "./composants/stepFour";
import StepFive from "./composants/stepFive";
import "./index.css";


export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [billing, setBilling] = useState("monthly"); // état global
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // Fonction qui affiche l'étape actuelle
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={() => setCurrentStep(2)} />;

      case 2:
        return (
          <StepTwo
            billing={billing}
            setBilling={setBilling}            // ✅ on transmet au StepTwo
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(2)}
          />
        );

      case 3:
        return (
          <StepThree
            billing={billing}                  // ✅ on transmet au StepThree
            selectedAddOns={selectedAddOns}
            setSelectedAddOns={setSelectedAddOns}
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        );

      case 4:
        return (
          <StepFour
            billing={billing}
            selectedPlan={selectedPlan}
            selectedAddOns={selectedAddOns.map((name) => {
              const allAddOns = [
                { name: "Online service", desc: "Access to multiplayer games", priceMonthly: 1, priceYearly: 10 },
                { name: "Larger storage", desc: "Extra 1TB of cloud save", priceMonthly: 2, priceYearly: 20 },
                { name: "Customizable Profile", desc: "Custom theme on your profile", priceMonthly: 2, priceYearly: 20 },
              ];
              return allAddOns.find((a) => a.name === name);
            })}
            onBack={() => setCurrentStep(3)}
            onConfirm={() => setCurrentStep(5)}
          />
        );
        case 5:
  return <StepFive onBack={() => setCurrentStep(4)} />;

      default:
        return <StepOne onNext={() => setCurrentStep(2)} />;
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        {/* Sidebar des étapes */}
        <aside className="sidebar">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`step ${currentStep === step ? "active" : ""}`}
              onClick={() => setCurrentStep(step)}
              style={{ cursor: "pointer" }}
            >
              <span className="step-number">{step}</span>
              <div>
                <p className="step-title">STEP {step}</p>
                <p className="step-subtitle">
                  {step === 1 && "YOUR INFO"}
                  {step === 2 && "SELECT PLAN"}
                  {step === 3 && "ADD-ONS"}
                  {step === 4 && "SUMMARY"}
                </p>
              </div>
            </div>
          ))}
        </aside>

        {/* Section principale */}
        <main className="form-section">{renderStep()}</main>
      </div>
    </div>
  );
}

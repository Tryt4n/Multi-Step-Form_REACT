export default function StepsNavigation({ currentStep, setCurrentStep }) {
  function nextStep() {
    setCurrentStep(currentStep + 1);
  }
  function previousStep() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <>
      {currentStep > 4 ? (
        ""
      ) : (
        <nav
          className="steps-navigation"
          style={currentStep === 1 ? { justifyContent: "flex-end" } : undefined}
        >
          {currentStep !== 1 && (
            <button
              className="steps-navigation__btn steps-navigation__btn--back"
              onClick={() => previousStep()}
            >
              Go Back
            </button>
          )}
          <button
            className={
              currentStep === 4
                ? "steps-navigation__btn steps-navigation__btn--next steps-navigation__btn--confirm"
                : "steps-navigation__btn steps-navigation__btn--next"
            }
            onClick={() => nextStep()}
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </nav>
      )}
    </>
  );
}

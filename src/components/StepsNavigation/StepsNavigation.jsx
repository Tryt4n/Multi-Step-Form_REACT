import { useEffect } from "react";

export default function StepsNavigation({
  currentStep,
  setCurrentStep,
  name,
  email,
  phone,
  isNameValid,
  isEmailValid,
  isPhoneValid,
  setIsNameValid,
  setIsEmailValid,
  setIsPhoneValid,
  setIsValid,
}) {
  function nextStep() {
    setCurrentStep(currentStep + 1);
  }
  function previousStep() {
    setCurrentStep(currentStep - 1);
  }

  useEffect(() => {
    //* Handle name validation
    const nameRegex = /[a-z]/i;
    if (
      name.length > 3 &&
      (name.includes(" ") || name.includes("-")) &&
      nameRegex.test(name.match(/[\s|-](.*)/)[1])
    ) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }

    //* Handle email validation
    if (email.length > 5 && email.includes("@") && email.indexOf("@") < email.length - 1) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    //* Handle phone validation
    if (phone.length >= 8) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }, [name, email, phone]);

  function handleValidationOnNextStep() {
    if (isNameValid && isEmailValid && isPhoneValid) {
      nextStep();
    } else {
      setIsValid(false);
    }
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
            onClick={() => {
              if (currentStep === 1) {
                handleValidationOnNextStep();
              }
              if (currentStep !== 1) {
                nextStep();
              }
            }}
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </nav>
      )}
    </>
  );
}

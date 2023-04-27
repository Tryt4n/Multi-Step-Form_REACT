import StepComponent from "../StepComponent/StepComponent";

export default function StepSection({ width, currentStep }) {
  return (
    <article>
      <ol className="steps-list">
        <StepComponent
          width={width}
          stepNumber="1"
          stepName="your info"
          isActive={currentStep === 1}
        />
        <StepComponent
          width={width}
          stepNumber="2"
          stepName="select plan"
          isActive={currentStep === 2}
        />
        <StepComponent
          width={width}
          stepNumber="3"
          stepName="add-ons"
          isActive={currentStep === 3}
        />
        <StepComponent
          width={width}
          stepNumber="4"
          stepName="summary"
          isActive={currentStep > 3}
        />
      </ol>
    </article>
  );
}

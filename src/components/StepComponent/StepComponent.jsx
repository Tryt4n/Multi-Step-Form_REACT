export default function StepComponent({ width, stepNumber, stepName, isActive }) {
  return (
    <li className="steps-list__item">
      <span className={`steps-list__counter ${isActive ? "active" : ""}`}>{stepNumber}</span>
      <div className={width <= 768 ? "visually-hidden" : undefined}>
        <p className="steps-list__step-text">step {stepNumber}</p>
        <h2 className="steps-list__step-header">{stepName}</h2>
      </div>
    </li>
  );
}

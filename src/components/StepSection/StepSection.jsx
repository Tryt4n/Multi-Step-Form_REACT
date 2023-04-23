export default function StepSection({ width }) {
  return (
    <article>
      <ol className="steps-list">
        <li className="steps-list__item">
          <span className="steps-list__counter active">1</span>
          <div className={width <= 768 ? "visually-hidden" : undefined}>
            <p className="steps-list__step-text">step 1</p>
            <h2 className="steps-list__step-header">your info</h2>
          </div>
        </li>

        <li className="steps-list__item">
          <span className="steps-list__counter">2</span>
          <div className={width <= 768 ? "visually-hidden" : undefined}>
            <p className="steps-list__step-text">step 2</p>
            <h2 className="steps-list__step-header">select plan</h2>
          </div>
        </li>

        <li className="steps-list__item">
          <span className="steps-list__counter">3</span>
          <div className={width <= 768 ? "visually-hidden" : undefined}>
            <p className="steps-list__step-text">step 3</p>
            <h2 className="steps-list__step-header">add-ons</h2>
          </div>
        </li>

        <li className="steps-list__item">
          <span className="steps-list__counter">4</span>
          <div className={width <= 768 ? "visually-hidden" : undefined}>
            <p className="steps-list__step-text">step 4</p>
            <h2 className="steps-list__step-header">summary</h2>
          </div>
        </li>
      </ol>
    </article>
  );
}

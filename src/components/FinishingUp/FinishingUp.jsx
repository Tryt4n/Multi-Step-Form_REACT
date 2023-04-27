export default function FinishingUp({
  activePlanCard,
  isMonthlyChecked,
  addOnsProps,
  plans,
  addOns,
}) {
  const selectedPlan = Object.values(plans).find((plan) => plan.id === activePlanCard);
  const planPrice = isMonthlyChecked ? selectedPlan?.monthly_price : selectedPlan?.yearly_price;

  let totalPrice = planPrice;
  if (isMonthlyChecked) {
    if (addOnsProps.onlineService) {
      totalPrice += addOns.ONLINE_SERVICES.monthly_price;
    }
    if (addOnsProps.largerStorage) {
      totalPrice += addOns.LARGER_STORAGE.monthly_price;
    }
    if (addOnsProps.customizableProfile) {
      totalPrice += addOns.CUSTOMIZABLE_PROFILE.monthly_price;
    }
  } else {
    if (addOnsProps.onlineService) {
      totalPrice += addOns.ONLINE_SERVICES.yearly_price;
    }
    if (addOnsProps.largerStorage) {
      totalPrice += addOns.LARGER_STORAGE.yearly_price;
    }
    if (addOnsProps.customizableProfile) {
      totalPrice += addOns.CUSTOMIZABLE_PROFILE.yearly_price;
    }
  }

  return (
    <>
      <section className="summary-container">
        <header className="summary-container__header">
          <div>
            <h2 className="plan__name">
              {activePlanCard} ({isMonthlyChecked ? "Monthly" : "Yearly"})
            </h2>
            {/* //! TODO LINK */}
            <a
              href="#"
              className="plan__change"
            >
              Change
            </a>
          </div>
          <p>
            ${planPrice}/{isMonthlyChecked ? "mo" : "yr"}
          </p>
        </header>

        {addOnsProps.onlineService ||
        addOnsProps.largerStorage ||
        addOnsProps.customizableProfile ? (
          <hr className="summary-container__break" />
        ) : (
          ""
        )}

        <ul className="add-ons-list">
          {addOnsProps.onlineService && (
            <li className="add-ons-list__list-item">
              <p className="add-ons-list__add-on-name">Online service</p>
              <em className="add-ons-list__price">+${isMonthlyChecked ? "1/mo" : "10/yr"}</em>
            </li>
          )}
          {addOnsProps.largerStorage && (
            <li className="add-ons-list__list-item">
              <p className="add-ons-list__add-on-name">Larger storage</p>
              <em className="add-ons-list__price">+${isMonthlyChecked ? "2/mo" : "20/yr"}</em>
            </li>
          )}
          {addOnsProps.customizableProfile && (
            <li className="add-ons-list__list-item">
              <p className="add-ons-list__add-on-name">Customizable profile</p>
              <em className="add-ons-list__price">+${isMonthlyChecked ? "2/mo" : "20/yr"}</em>
            </li>
          )}
        </ul>
      </section>

      <div className="summary">
        <p className="summary__text">Total (per {isMonthlyChecked ? "month" : "year"})</p>
        <strong className="summary__total-price">
          +${totalPrice}/{isMonthlyChecked ? "mo" : "yr"}
        </strong>
      </div>
    </>
  );
}

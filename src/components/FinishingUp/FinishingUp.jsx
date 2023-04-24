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
      <div>
        <div>
          <div>
            <h2>
              {activePlanCard} ({isMonthlyChecked ? "Monthly" : "Yearly"})
            </h2>
            {/* //! TODO LINK */}
            <a href="#">Change</a>
          </div>
          <p>
            ${planPrice}/{isMonthlyChecked ? "mo" : "yr"}
          </p>
        </div>

        {addOnsProps.onlineService ||
        addOnsProps.largerStorage ||
        addOnsProps.customizableProfile ? (
          <hr />
        ) : (
          ""
        )}

        {addOnsProps.onlineService && (
          <div>
            <p>Online service</p>
            <em>+${isMonthlyChecked ? "1/mo" : "10/yr"}</em>
          </div>
        )}
        {addOnsProps.largerStorage && (
          <div>
            <p>Larger storage</p>
            <em>+${isMonthlyChecked ? "2/mo" : "20/yr"}</em>
          </div>
        )}
        {addOnsProps.customizableProfile && (
          <div>
            <p>Customizable profile</p>
            <em>+${isMonthlyChecked ? "2/mo" : "20/yr"}</em>
          </div>
        )}
      </div>

      <div>
        <p>Total (per {isMonthlyChecked ? "month" : "year"})</p>
        <strong>
          +${totalPrice}/{isMonthlyChecked ? "mo" : "yr"}
        </strong>
      </div>
    </>
  );
}

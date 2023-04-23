export default function PersonalInfo() {
  return (
    <>
      <form
        className="personal-info-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="personal-info-container__input-wrapper">
          <div>
            <div className="personal-info-container__label-wrapper">
              <label
                htmlFor="name"
                className="personal-info-container__label"
              >
                Name
              </label>
              <em className="personal-info-container__label-warning-info">
                This filed is required
              </em>
            </div>
            <input
              className="personal-info-container__input"
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g. Stephen King"
            />
          </div>

          <div>
            <div className="personal-info-container__label-wrapper">
              <label
                htmlFor="email"
                className="personal-info-container__label"
              >
                Email Address
              </label>
              <em className="personal-info-container__label-warning-info">
                This filed is required
              </em>
            </div>
            <input
              className="personal-info-container__input"
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div>
            <div className="personal-info-container__label-wrapper">
              <label
                htmlFor="phone"
                className="personal-info-container__label"
              >
                Phone
              </label>
              <em className="personal-info-container__label-warning-info">
                This filed is required
              </em>
            </div>
            <input
              className="personal-info-container__input"
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
      </form>
    </>
  );
}

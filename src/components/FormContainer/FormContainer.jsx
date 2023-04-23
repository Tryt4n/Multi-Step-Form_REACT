export default function FormContainer() {
  return (
    <>
      <form
        className="form-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-container__input-wrapper">
          <div>
            <div className="form-container__label-wrapper">
              <label
                htmlFor="name"
                className="form-container__label"
              >
                Name
              </label>
              <em className="form-container__label-warning-info">This filed is required</em>
            </div>
            <input
              className="form-container__input"
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g. Stephen King"
            />
          </div>

          <div>
            <div className="form-container__label-wrapper">
              <label
                htmlFor="email"
                className="form-container__label"
              >
                Email Address
              </label>
              <em className="form-container__label-warning-info">This filed is required</em>
            </div>
            <input
              className="form-container__input"
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div>
            <div className="form-container__label-wrapper">
              <label
                htmlFor="phone"
                className="form-container__label"
              >
                Phone
              </label>
              <em className="form-container__label-warning-info">This filed is required</em>
            </div>
            <input
              className="form-container__input"
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

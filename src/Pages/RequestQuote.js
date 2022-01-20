const RequestQuote = () => {
  return (
    <div className="container">
      <form className="form-group col-xl-5 col-md-8">
        <h4 className="text-center">
          {' '}
          We Offer the best deals, just ask for it!{' '}
        </h4>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" />
        </div>
        <br />
        <div className="mb-3">
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-sm example"
          >
            <option selected> Events type</option>
            <option value="1"> Personal Shoot</option>
            <option value="2"> Weddings</option>
            <option value="3"> Graduations</option>
            <option value="4"> Baby Showers</option>
          </select>
        </div>
        <button type="submit" className="btn text-center">
          {' '}
          Quotation{' '}
        </button>
      </form>
    </div>
  );
};

export default RequestQuote;

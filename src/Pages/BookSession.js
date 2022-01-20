const BookSession = () => {
  return (
    <>
      <div className="container">
        <form className="form-group col-xl-5 col-md-8">
          <h4 className="text-center">
            {' '}
            Book time with us today and enjoy convinience!{' '}
          </h4>
          <div className="mb-3">
            <label className="form-label"> Full Names </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="fullname"
            />
            <div id="Help" className="form-text text-info">
              We'll never share your data with anyone else!
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" />
          </div>
          <div className="mb-3">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected> Events Types</option>
              <option value="1"> Personal Shoot</option>
              <option value="2"> Weddings</option>
              <option value="3"> Graduations</option>
              <option value="4"> Baby Showers</option>
            </select>
          </div>
          <button type="submit" className="btn" id="liveToastBtn">
            {' '}
            Book Session{' '}
          </button>
          <div className="position-fixed bottom-0 end-0 p-3">
            <div
              id="liveToast"
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..." />
                <strong className="me-auto">Mesh-Photography</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div className="toast-body">
                Feel free to tell others about us.
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookSession;

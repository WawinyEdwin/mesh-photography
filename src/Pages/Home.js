const Home = () => {
  return (
    <div
      id="carouselBasicExample"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/image1.jpg" class="d-lg-block w-100 image" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5> Jovial Birthdays </h5>
            <p>Celebrate each year and archive every step in images.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/image2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5> Beautiful weddings </h5>
            <p>Manifest on your big day success.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/image3.jpg"
            className="d-block w-100  shadow-1-strong "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5> Baby Photos </h5>
            <p>Reflect on every moment of your childs development.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;

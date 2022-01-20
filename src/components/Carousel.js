
const Carousel = () => {
    return(
        <div>
        <div id="carouselCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../../baby%20shower.jpg" className="d-block w-100" alt="Baby Shower" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5> Brilliant Baby Showers</h5>
                            <p> Celebrate your wife today as she nears motherhood</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="../../graduation.jpg" className="d-block w-100" alt=" Graduation" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5> Having a graduation? </h5>
                            <p> Capture your happy moments as you celebrate your hardwork.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="../../wedding1.jpg" className="d-block w-100" alt="Wedding " />
                        <div className="carousel-caption d-none d-md-block">
                            <h5> You deserve a happy Marriage! </h5>
                            <p> Keep record of every step you made in making holy celebration </p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br/>
        </div>
    );
}

export  default  Carousel;
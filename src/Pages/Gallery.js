
const Gallery = () => {
    return(
        <>
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="/now.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/image3.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/image5.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="/image4.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="/huawei3.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    {/* <img
      src="image1.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    /> */}
  </div>
</div>
        </>
    );

}

export default Gallery;
const PlaceholderCard = ({isRender = false}) => {
  // console.log("isRender", isRender)
  return (
    <div className={`${isRender && "col-lg-6 col-xl-4"} py-3`}>
      <div className="card border-0" aria-hidden="true">
        <svg aria-label="Placeholder" className="bd-placeholder-img card-img-top" height="290" preserveAspectRatio="xMidYMid slice" role="img" width="100%"     xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-12"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-10"></span>
            <span className="placeholder col-12"></span>
            <span className="placeholder col-12"></span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default PlaceholderCard
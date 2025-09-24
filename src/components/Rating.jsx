const Rating = ({ rating }) => {
  console.log("rating", rating)
  const stars = Math.floor(rating)
  const isHalfStar = stars < rating
  return (
    <>
      <div className="d-flex gap-1 mb-4">
        {rating}
        {/* {Array.from({ length: stars }).map((_, index) => <i key={index} className="bi bi-star-fill text-warning"></i>)} */}
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-fill text-warning"></i>
        <i className="bi bi-star-half text-warning"></i>
        {/* {isHalfStar && <i className="bi bi-star text-warning"></i>} */}
      </div>
    </>
  )
}
export default Rating
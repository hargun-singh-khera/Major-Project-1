import React from 'react'

const PlaceholderCart = () => {
    return (
        <main className="container my-4">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    {Array.from({ length: 2}).map((_, index) => (<div key={index} className="card mb-3 border-0 " >
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <svg aria-label="Placeholder" className="bd-placeholder-img card-img-top" height="350" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
                            </div>
                            <div className="col-lg-6 py-xl-5 py-lg-4 py-md-3">
                                <div className="card-body placeholder-glow">
                                    <h5 className="card-title">
                                        <span className="placeholder col-12"></span>
                                    </h5>
                                    <div className="mb-4">
                                        <span className="placeholder col-12"></span>
                                        <span className="placeholder col-12"></span>
                                    </div>
                                    <div>
                                        <h5 className="mb-2">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                        </h5>
                                        <h5>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 rounded p-3 sticky-top placeholder-glow">
                        <div className="card-body">
                            <h3><span className="placeholder col-12"></span></h3>
                            <hr />
                            <div>
                                <p className="fs-4"><span className="placeholder col-12"></span></p>
                                <p className="fs-4"><span className="placeholder col-12"></span></p>
                                <p className="fs-4"><span className="placeholder col-12"></span></p>
                            </div>
                            <hr className="m-0" />
                            <p className="fs-4">
                                <span className="placeholder col-12"></span>
                            </p>
                            <hr className="m-0" />
                            <p className="fs-4 mb-3"><span className="placeholder col-12"></span></p>
                            <p className="fs-4"><span className="placeholder col-12"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PlaceholderCart
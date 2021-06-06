import React from 'react';

const Blog = () => {
    return (
        <div className="text-center" id="blog">
            <h1 className="pt-5">DESIGN BLOG</h1>
            <div className="container pt-5 ">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://i.pinimg.com/originals/c3/cd/9e/c3cd9eae9cf931de347d3f7832683cd2.jpg" alt="" />
                        <h5 className="pt-3">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h5>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis!</p>
                        <button className="btn-blog">READ MORE</button>
                    </div>
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://media.monsterindia.com/cmsimages/1566908941.jpg" alt="" />
                        <h5 className="pt-3">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h5>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis!</p>
                        <button className="btn-blog">READ MORE</button>
                    </div>
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://images.prismic.io/bn-au/0952806e-02c8-493d-adb9-3a501f4dfc5d_ProductFlatlay_LowRes.jpg?auto=format&rect=67%2C0%2C1465%2C1067&w=2033&h=1481&ixlib=react-9.1.1" alt="" />
                        <h5 className="pt-3">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h5>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis!</p>
                        <button className="btn-blog">READ MORE</button>
                    </div>
                </div>

                <div className="video-area embed-responsive embed-responsive-1by1 mt-5">
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/hb9gGIKrUs4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../images/banner1.png'
import DisplayServices from '../DisplayServices/DisplayServices';
import pateient1 from '../../images/Patient/patient1.png';
import pateient2 from '../../images/Patient/patient2.png';
import { Link } from 'react-router-dom';
import blog from '../../images/Blog/blog.jpg'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])



    return (

        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-4 col-md-12">
                    <h2><span className="text-danger">MediNova</span> Health Center</h2>
                    <p style={{ textAlign: "justify" }}>Medi Nova  Is the best health center at your area. We Ensure high services to our Customers</p>

                </div>
                <div className="col-md-12 col-lg-8">
                    <img className="w-100" src={img} alt="" />
                </div>
            </div>
            <h3 className="my-5">Our <span className="text-danger">Services</span> </h3>

            <div className="row row-cols-1 row-cols-lg-3 g-4">
                {
                    services.map(service => <DisplayServices key={service.id} service={service}></DisplayServices>)
                }

            </div>
            {/*----------------- extra section 1 start------------------- */}

            <div className="row my-5">
                <div className="col-lg-6 col-sm-12 text-start">
                    <h1 className="">Our Healthcare Blog
                    </h1>
                    <img className="img-fluid my-2" src={blog} alt="" />
                    <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                        |
                        by
                        cmsmasters</span>
                    <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                    </h3>
                    <Link className="text-danger" to="">Read More</Link>
                </div>
                <div className="col-lg-6 col-sm-12 ">
                    <div className="border-start text-start ps-5 border-bottom">

                        <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                        </h3>
                        <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                            |
                            by
                            cmsmasters</span> <br />
                        <Link className="text-danger" to="">Read More</Link>
                    </div>
                    <div className="border-start text-start ps-5 border-bottom">

                        <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                        </h3>
                        <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                            |
                            by
                            cmsmasters</span> <br />
                        <Link className="text-danger" to="">Read More</Link>
                    </div>
                    <div className="border-start text-start ps-5 border-bottom">

                        <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                        </h3>
                        <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                            |
                            by
                            cmsmasters</span> <br />
                        <Link className="text-danger" to="">Read More</Link>
                    </div>
                    <div className="border-start text-start ps-5 border-bottom">

                        <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                        </h3>
                        <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                            |
                            by
                            cmsmasters</span> <br />
                        <Link className="text-danger" to="">Read More</Link>
                    </div>
                    <button type="button" className="btn btn-outline-danger mt-2">View More</button>
                </div>
            </div>




            {/*----------------- extra section 1 end------------------- */}


            {/*----------------- extra section 2 start------------------- */}
            <div>
                <h3 className="text-start mt-5">A Good Word Means a Lot</h3>
                <h1 className="text-start text-success">Patient testimonials
                </h1>
                <p className="text-start">It’s always the word of mouth that’s the best advice. Here are some of our…
                </p>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={pateient1} style={{ width: "120px", height: "120px" }} className="card-img-top mx-auto p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Snider</h5>
                                <p className="card-text">They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and my children.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pateient2} className="card-img-top mx-auto p-2" alt="..." style={{ width: "120px", height: "120px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Linda</h5>
                                <p className="card-text">They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and my children.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pateient2} className="card-img-top mx-auto p-2" alt="..." style={{ width: "120px", height: "120px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Anna</h5>
                                <p className="card-text">They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and my children.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pateient1} className="card-img-top mx-auto p-2" alt="..." style={{ width: "120px", height: "120px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Fred</h5>
                                <p className="card-text">They gave me much more than health – they gave me my life back. One that I can still enjoy with my family and my children.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*----------------- extra section 2 end------------------- */}


            <div className="row my-4">
                <h4 className="my-4"><span className="border-bottom border-3 pb-1 text-danger">Make An Appoinment</span></h4>
                <div className="col-lg-4 border col-sm-12">
                    <i className="far fa-clock mb-3"></i>  <span className="fs-5 fw-bold" >Woring Time</span> <br />
                    <p className="border-bottom"><span>Monday-Friday </span> - <span>8.00-17.00</span> </p>
                    <p className="border-bottom"><span>Saturday </span> - <span>9.00-17.30</span> </p>
                    <p className="border-bottom"><span>Sunday </span> - <span>9.30-15.30</span> </p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <i className="far fa-calendar-alt"></i> <span className="fs-5 fw-bold" >Doctor's TimeTable</span> <br />
                    <p>Click the below link to see the doctor's time table</p>
                    <button type="button" className="btn btn-info text-light">See Time Table <i className="fas fa-long-arrow-alt-right"></i></button>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <i className="far fa-calendar-check"></i> <span className="fs-5 fw-bold" >Booking a Visit</span> <br />
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Service
                        </button>
                        <ul className="dropdown-menu dropDown" aria-labelledby="dropdownMenuButton1">
                            <li><Link>Chiro</Link></li>
                            <li><Link>Dental</Link></li>
                            <li><Link>Xray</Link></li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>



    );
};

export default Home;
import laptop from '../../assets/laptop.jfif'
import camera from '../../assets/Camera.jfif'
import television from '../../assets/Television.jfif'
import airconditioner from '../../assets/Airconditioner.jfif'
import microwave from '../../assets/microwave.jfif'
import Shaver from '../../assets/Shaver.jfif'
import tablet from '../../assets/Tablet.jfif'
import Headphone from '../../assets/Headphone.jfif'
import Accessories from '../../assets/Accessories.jfif'
import { Link } from 'react-router-dom'

export default function Slider() {


    return <>

        <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="w-100 bg-white p-5 d-flex justify-content-center align-items-center text-center">
                        <div className="container">
                            <h3>Hello,</h3>
                            <Link to={'/login'}>
                                <button>Get Started</button>

                            </Link>
                        </div>

                    </div>
                </div>
                <div class="carousel-item active">
                    <div className="w-100 bg-white p-5 d-flex justify-content-center align-items-center">
                        <div className="container">
                            <div className="row ">
                                <div className="col-6 align-self-center You will find it here">
                                    <h3>Welcome</h3>
                                    <h3>The Best Price You will find it here</h3>
                                </div>
                                <div className="col-6 ">
                                    <img className='w-50 ' src={laptop} alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-info" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-info" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </>
}
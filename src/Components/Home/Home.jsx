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
import { Helmet } from 'react-helmet';
import style from './Home.module.css'
import backgroundImage from "../../assets/background.jpg"
export default function Home() {

    return <>

        <Helmet>
            <title>Home Page - eMarket </title>
        </Helmet>
        <header style={{ backgroundImage: `url("${backgroundImage}")` }} className='w-100 vh-100 '>
            <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center  text-center`}>
                <div>
                    <h3 className='text-white'>Welcome</h3>
                    <h3 className={`text-white mb-5 mt-3 ${style.mainHead}`}>
                        Buy All Product From One Store
                    </h3>
                    <a href='#category' >
    
                        <button className={`${style.btnStyle}`}>Shop Now</button>

                    </a>
                </div>
            </div>

        </header>

        <div className='container'>




            <div id='category'>
                <h3 className='py-5'>Categories</h3>
                <div className="row g-3">
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='laptop'>
                                <img className='w-100' src={laptop} alt="" />

                                <h3 className="text-center h6">Laptops</h3>

                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='cameras'>
                                <img className='w-100' src={camera} alt="" />
                                <h3 className="text-center h6">Cameras</h3>

                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='televisions'>
                                <img className='w-100' src={television} alt="" />
                                <h3 className="text-center h6">Televisions</h3>

                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='microwave'>
                                <img className='w-100' src={microwave} alt="" />
                                <h3 className="text-center h6">Microwaves</h3>

                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='airconditioner'>

                                <img className='w-100' src={airconditioner} alt="" />
                                <h3 className="text-center h6">Airconditioners</h3>
                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='shaver'>
                                <img className='w-100' src={Shaver} alt="" />
                                <h3 className="text-center h6">Shavers</h3>

                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='tablets'>
                                <img className='w-100' src={tablet} alt="" />
                                <h3 className="text-center h6">Tablets</h3>

                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='headphones'>
                                <img className='w-100' src={Headphone} alt="" />
                                <h3 className="text-center h6">Headphones</h3>

                            </Link>

                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to='accessories'>
                                <img className='w-100' src={Accessories} alt="" />
                                <h3 className="text-center h6">Accessories</h3>

                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}



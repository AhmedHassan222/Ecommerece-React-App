
import style from './Footer.module.css'
import logoFooter from '../../assets/logo-footer.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    function goToUp() {
        window.scroll(0, 0)
    }
    return <>
        <div>
            <p onClick={goToUp} className={`text-center ${style.bgTop} fw-bold p-4 mb-0`}>Back To Top</p>
        </div>
        <footer className={`text-center text-lg-start ${style.bg} text-muted `}>

            <section className="d-flex justify-content-center justify-content-lg-between p-4 mt-0 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row g-4 mt-3">
                        <div className="col-sm-12 col-md-6 col-lg-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logoFooter} alt="" />
                            </h6>
                            <p>
                                you can buy all products that you search in eMarket
                            </p>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>

                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="laptop">Laptop</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="Cameras">Cameras</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="televisions">Televisions</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="tablets">Tablets</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="shaver">Shaver</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="microwave">Microwave</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="headphones">Headphones</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="airconditioner">AirConditioner</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="accessories">Accessories</Link>
                            </span>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="cart">Cart</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="favarite">Favarite</Link>
                            </span>
                            <span className={`${style.item}`}>
                                <Link className={`nav-link     ${style.link}`} to="asidebar">Search</Link>
                            </span>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3 text-secondary"></i> Alexandria, Egypt</p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                ahmedhassan.2472@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3 text-secondary"></i> 01123686114</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                © 2023 Copyright:Ahme Hassan
            </div>
        </footer>



    </>
}
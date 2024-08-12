import { Link, useNavigate } from "react-router-dom"
import style from "./Nav.module.css"
import { useContext, useEffect } from "react";
import { favariteContext } from "../../Context/Favaritestore";
import loginNav from '../../assets/logo-footer.png'
export default function Nav() {
    let { setCountCart, countCart, count, setCount, setFavariteArr, setItemsInCart , setTotalPrice } = useContext(favariteContext)
    let navigate = useNavigate()
    function logout() {
        localStorage.removeItem('user')
        setCount(0)
        setFavariteArr([])
        setItemsInCart([])
        setTotalPrice(0)
        setCountCart(0)
        localStorage.clear()
        navigate('/login')
    }

    // funciton here

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (this.window.scrollY >= 100) {
                this.document.querySelector('#nav2').classList.add('fixed-top')
            } else {
                this.document.querySelector('#nav2').classList.remove('fixed-top')
            }
        })
    }, [window.scrollY])
    return <>
        <div className="d-flex justify-content-between pt-4 px-1 bg-white">
            <Link to={''} >
                <img className="w-75" src={loginNav} alt="" />
            </Link>
            <div >
                <div className=" d-flex  align-items-center ">
                    <span className="nav-item">
                        <Link to={'asidebar'} className={`nav-link    d-flex       mx-1 ${style.linkStyle} `}>
                            <i className={`fa-solid  fa-magnifying-glass  mx-1  ${style.linkStyle}   `}></i>
                        </Link>
                    </span>
                    <span className="nav-item ">
                        <Link to='favarite' className={`nav-link ${style.linkStyle}      mx-2  `}>
                            <i className={`fa-regular fa-heart    aling-self-center  `}></i>{count}
                        </Link>
                    </span>
                    <span className="nav-item position-relative">
                        <Link to='cart' className={`nav-link        ${style.linkStyle}   mx-1`}>
                            <i className={`fa-solid fa-bag-shopping      `}></i>{countCart}
                        </Link>
                    </span>
                    {
                        localStorage.getItem('user') === null ? <div className="d-flex">
                            <span className="nav-item">
                                <Link className={`nav-link ${style.linkStyle}    p-1   mx-1 `} to="login"><i className="fa-solid fa-user"></i> Login</Link>
                            </span>
                        </div> : <li onClick={logout} className={`nav-link ${style.linkStyle}     p-1     mx-1 `} ><i className="fa-solid fa-arrow-right-from-bracket"></i></li>
                    }
                </div>
            </div>
        </div>
        <nav id="nav2" className="bg-white">
            <div className={`  d-flex justify-content-between `}>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="">Home</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/laptop">Laptop</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/Cameras">Cameras</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/televisions">Televisions</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/tablets">Tablets</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/shaver">Shaver</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/microwave">Microwave</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/headphones">Headphones</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/airconditioner">AirConditioner</Link>
                </span>
                <span className="nav-item">
                    <Link className={`p-3 nav-link       ${style.link}`} to="products/accessories">Accessories</Link>
                </span>
            </div>
        </nav >
    </>
}







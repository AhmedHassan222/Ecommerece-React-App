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
    const Categories = [
        { img: laptop, name: "laptop", link: 'products/laptop' },
        { img: camera, name: "camera", link: 'products/Cameras' },
        { img: television, name: "television", link: 'products/televisions' },
        { img: airconditioner, name: "airconditioner", link: 'products/airconditioner' },
        { img: microwave, name: "microwave", link: 'products/microwave' },
        { img: Shaver, name: "Shaver", link: 'products/shaver' },
        { img: tablet, name: "tablet", link: 'products/tablets' },
        { img: Headphone, name: "Headphone", link: 'products/headphones' },
        { img: Accessories, name: "Accessories", link: 'products/accessories' },
    ]
    return <>
        <Helmet>
            <title>Home Page - eMarket </title>
        </Helmet>
        <header style={{ backgroundImage: `url("${backgroundImage}")` }} className='w-100 vh-100 '>
            <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center  text-center`}>
                <div>
                    <h3 className={`text-white ${style.mainHead}`}>Welcome</h3>
                    <h3 className={`text-white mb-5 mt-3 ${style.mainHead}`}>
                        Buy All Product From One Store
                    </h3>
                    <Link to={'/laptop'} >
                        <button className={`${style.btnStyle}`}>Shop Now</button>
                    </Link>
                </div>
            </div>
        </header>
        <div className='container'>
            <div >
                <h3 className='py-5'>Categories</h3>
                <div className="row g-3">
                    {Categories.map((category, index) => <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className={`${style.box}  `}>
                            <Link className={`${style.linkStyle}`} to={category.link}>
                                <img className='w-100' src={category.img} alt="" />
                                <h3 className="text-center h6">{category.name}</h3>
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </>
}
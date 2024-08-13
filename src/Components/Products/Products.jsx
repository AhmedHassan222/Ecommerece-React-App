
import style from './Produts.module.css'
import { useContext, useEffect, useState } from "react"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { GetDataContext } from '../../Context/Getdatastore'
import { CartContext } from '../../Context/Cartstore'
import fakeImage from "../../assets/fakeImage.png"
export default function Products() {
    let { addToFavarite, favariteArr, clearItem } = useContext(favariteContext)
    let { addToCart, itemsInCart } = useContext(CartContext)
    let { items, getProducts } = useContext(GetDataContext)
    const [type, setType] = useState(null)
    let { category } = useParams();
    let arr = [1, 2, 3, 4,5,6,7,8]
    useEffect(() => {
        switch (category) {
            case 'laptop':
                getProducts('computers')
                setType('computers')
                break;
            case 'Cameras':
                getProducts('cameras')
                setType('cameras')
                break;
            case 'televisions':
                getProducts('televisions')
                setType('televisions')
                break;
            case 'tablets':
                getProducts('mobilesandtablets')
                setType('mobilesandtablets')
                break;
            case 'shaver':
                getProducts('personalcare')
                setType('personalcare')
                break;
            case 'microwave':
                getProducts('kitchen')
                setType('kitchen')
                break;
            case 'headphones':
                getProducts('headphones')
                setType('headphones')
                break;
            case 'airconditioner':
                getProducts('homeappliances')
                setType('homeappliances')
                break;
            case 'accessories':
                getProducts('accessories')
                setType('accessories')
                break;
            default:
                break;
        }
    }, [category])
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return <>
        <Helmet>
            <title>{category} - eMarket  </title>
        </Helmet>
        {items.length <= 0 ? <div className='container py-3'>
            <div className="row g-3">
                {arr.map((item, index) => <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                    <div className="card" aria-hidden="true">
                        <img src={fakeImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <div className="btn btn-primary w-100 rounded-0 disabled placeholder col-6" aria-disabled="true"></div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div> : <div className="container py-3">
                <div className="row g-3">
                    {items.map((item, index) => <div key={index} className={` col-sm-12 col-md-4 col-lg-3`}>
                        <div className={`bg-white p-3 ${style.content}`}>
                            <img className="w-100" src={item.img} alt="" />
                            <div className={`${style.caption}`}>
                                <Link to={`/productdetails/${type}/${item.id}`} className={`${style.box} p-3`}>
                                    <p className={`${style.textNameContent}`}>{item.name}</p>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>
                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i onClick={() => { clearItem(item) }} className={`fa-solid text-danger fa-heart fs-5 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i>}
                                    </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}
                                </div>
                                {localStorage.getItem('user') !== null ? <div>
                                    {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i className="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`btn btn-primary w-100 rounded-0`}>Add To Cart</button>}
                                </div> : <Link to={'/login'}><button className={`btn btn-primary w-100 rounded-0`}>Add To Cart</button></Link>}
                            </div>
                        </div>
                    </div>)}
                </div>
        </div>}
    </>
}
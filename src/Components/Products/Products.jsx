
import style from './Produts.module.css'
import { useContext, useEffect, useState } from "react"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { GetDataContext } from '../../Context/Getdatastore'

export default function Products() {
    let { addToCart, addToFavarite, itemsInCart, favariteArr, clearItem } = useContext(favariteContext)
    let { items, getProducts } = useContext(GetDataContext)
    const [type, setType] = useState(null)
    let { category } = useParams();
    const [isLoad, setIsLoad] = useState(false)
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
        {items.length <= 0 ? <div className='vh-100 d-flex justify-content-center  p-5 w-100 align-self-center'>
            <div className="spinner-border mt-5 text-black" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> : <div className="container py-3">
            {isLoad === false ? <div>
                <div className="row g-3">
                    {items.slice(0, 8).map((item, index) => <div key={index} className={`  col-sm-12 col-md-4 col-lg-3`}>
                        <div className={`bg-white p-3 ${style.content}`}>
                            <img className="w-100" src={item.img} alt="" />
                            <div className={`${style.caption}`}>
                                <Link to={`/productdetails/${type}/${item.id}`} className={`${style.box} p-3`}>

                                    <p className={`${style.textNameContent}`}>{item.name}</p>
                                </Link>
                                <div className="d-flex justify-content-between">
                                    <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>
                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i onClick={() => { clearItem(item) }} className={`fa-solid fa-heart fs-5 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i>}
                                    </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}
                                </div>

                                {localStorage.getItem('user') !== null ? <div>
                                    {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i className="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}

                            </div>
                        </div>


                    </div>)}
                </div>
                <div className="d-flex justify-content-center my-3 ">
                    <button onClick={() => { setIsLoad(true) }} className={`${style.btnLoadStyle} p-3 `}>See More</button>

                </div>
            </div> : <div>
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
                                        {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i className={`fa-solid fa-heart fs-5 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i>}
                                    </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}

                                </div>

                                {localStorage.getItem('user') !== null ? <div>
                                    {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i className="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}


                            </div>

                        </div>

                    </div>)}
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button onClick={() => { setIsLoad(false) }} className={`${style.btnLoadStyle} p-3 `}>See Less</button>

                </div>
            </div>}


        </div>}


    </>
}



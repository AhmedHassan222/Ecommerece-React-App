


import style from './Shaver.module.css'
import { useContext, useEffect, useState } from "react"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function Shaver() {
    let { personalcare, addToCart, addToFavarite, getProducts, itemsInCart , favariteArr } = useContext(favariteContext)
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        getProducts('personalcare')
    }, [itemsInCart.length])


    return <>
        <Helmet>
            <title>Shaver - eMarket  </title>
        </Helmet>
        {personalcare.length <= 0 ? <div className='vh-100 d-flex justify-content-center  p-5 w-100 align-self-center'>

            <div class="spinner-border mt-5 text-black" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div> : <div className="container-fluid py-3">
            {isLoad == false ? <div>
                <div className="row g-3">
                    {personalcare.slice(0, 8).map((item, index) => <div key={index} className={` col-xsm-6 col-sm-12 col-md-4 col-lg-3`}>
                        <div className={`${style.content} bg-white p-3`}>
                            <img className="w-100" src={item.img} alt="" />
                            <div className={`${style.caption}`}>
                                <Link to={'/productdetails/' + 'personalcare/' + item.id} className={`${style.box} p-3`}>

                                    <p className={`${style.textNameContent}`}>{item.name}</p>
                                </Link>                                <div className="d-flex justify-content-between">
                                    <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>
                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i className={`fa-solid fa-heart fs-5 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i>}
                                    </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}                                </div>
                                {localStorage.getItem('user') !== null ? <div>
                                    {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i class="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}                            </div>

                        </div>
                    </div>)}
                </div>
                <div className="d-flex justify-content-center my-3 ">
                    <button onClick={() => { setIsLoad(true) }} className={`${style.btnLoadStyle} p-3 `}>Load More</button>

                </div>
            </div> : <div>
                <div className="row g-3">
                    {personalcare.map((item, index) => <div key={index} className={` col-sm-12 col-md-4 col-lg-3`}>
                        <div className={`${style.content} bg-white p-3`}>
                            <img className="w-100" src={item.img} alt="" />
                            <div className={`${style.caption}`}>
                                <p className={`${style.textNameContent}`}>{item.name}</p>
                                <div className="d-flex justify-content-between">
                                    <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>
                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i className={`fa-solid fa-heart fs-5 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i>}
                                    </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}                                </div>
                                {localStorage.getItem('user') !== null ? <div>
                                    {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i class="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}                            </div>

                        </div>
                    </div>)}
                </div>
                <div className="d-flex justify-content-center my-3">
                    <button onClick={() => { setIsLoad(false) }} className={`${style.btnLoadStyle} p-3 `}>Load Less</button>

                </div>
            </div>}


        </div>}


    </>
}



import { Helmet } from "react-helmet"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { favariteContext } from "../../Context/Favaritestore"
export default function Productdetails() {
    let { addToFavarite, addToCart, itemsInCart, favariteArr, clearItem } = useContext(favariteContext)
    let params = useParams()
    const [itemdetails, setItemdetails] = useState({})
    async function getItem(type, id) {
        let { data } = await axios.get(`https://rus-digital-televisions.onrender.com/${type}/${id}`)
        setItemdetails(data)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getItem(params.type, params.id)
    }, [])
    return <>
        <Helmet>
            <title>{itemdetails.name}</title>
        </Helmet>
        <div className="container ">
            {itemdetails.img !== undefined ? <div className="row  py-5 ">
                <div className="col-sm-12 col-md-5 col-lg-5 ">
                    <div>
                        <img className="w-100 " src={itemdetails.img} alt="" />
                    </div>
                </div>
                <div className={` col-sm-12 col-md-7 col-lg-7 p-5 `}>
                    <div className="text-white ">
                        <h1 className="fs-4 mb-4"><span className="fw-bold fs-4 text-black ">Product Name :</span>  <span className={` text-black`}>{itemdetails.name}</span></h1>
                        <p className="mb-4"> <span className="fw-bold fs-4 text-black ">Price :</span> <span className={` text-black`}>{parseFloat(itemdetails.price) * 1000} E£</span></p>
                        {localStorage.getItem('user') !== null ? <div className="text-black d-flex justify-content-start">
                            {Array.from(new Set(favariteArr.map((element) => element.name))).includes(itemdetails.name) ? <i onClick={() => { clearItem(itemdetails) }} className={`fa-solid fa-heart fs-5  me-3 `}></i> : <i onClick={() => { addToFavarite(itemdetails) }} className={`fa-regular fa-heart fs-5  me-3 `}></i>}
                            {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(itemdetails.name) ? <p><i className="fa-regular fa-circle-check"></i> Item added to cart</p> : <i onClick={() => { addToCart(itemdetails) }} className={`fa fa-shopping-cart fs-5`}></i>}

                        </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5  `}></i></Link>}
                    </div>
                </div>
            </div> : <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <img className="w-100 card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpPUeTvF_pPqrSmkYd3cJlM32f6Axh0tCwg&usqp=CAU" alt="..." />
                </div>
                <div className={`col-sm-12 col-md-5 col-lg-5 p-5`}>
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
                        </p>                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                    </div>
                </div>
            </div>}
        </div>
    </>
}
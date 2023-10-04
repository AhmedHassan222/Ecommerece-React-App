import { Helmet } from "react-helmet"
import { Link, useParams } from "react-router-dom"
import style from "./Productdetails.module.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { favariteContext } from "../../Context/Favaritestore"

export default function Productdetails() {
    let { addToFavarite, addToCart, itemsInCart } = useContext(favariteContext)

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
            <title>{itemdetails.title}</title>
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
                        <p className="mb-4"> <span className="fw-bold fs-4 text-black ">Discount :</span> <span className={` text-black`}>{itemdetails.discount}</span></p>
                        <div className="d-flex justify-content-start flex-nowrap py-3">
                            <button onClick={() => addToFavarite(itemdetails)} className={`mb-4 btn btn-info px-3 py-2  me-3 fw-bold text-white`}>
                                Add To Favarites
                            </button>

                            {localStorage.getItem('user') !== null ? <div>
                                {Array.from(new Set(itemsInCart.map((element) => element.id))).includes(itemdetails.id) ? <button className={`mb-4 btn btn-info px-3 py-2  me-3 fw-bold text-white`}>Add To Cart</button> : <button onClick={() => { addToCart(itemdetails) }} className={`mb-4 btn btn-info px-3 py-2  me-3 fw-bold text-white`}>Add To Cart</button>}
                            </div> : <Link to={'/login'}><button className={`mb-4 btn btn-info px-3 py-2  me-3 fw-bold text-white`}>Add To Cart</button></Link>}

                        </div>





                    </div>
                </div>
            </div> : <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpPUeTvF_pPqrSmkYd3cJlM32f6Axh0tCwg&usqp=CAU" class="card-img-top" alt="..." />

                </div>
                <div className={`col-sm-12 col-md-5 col-lg-5 p-5`}>
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>

                    </div>
                </div>
            </div>}
        </div>


    </>

}
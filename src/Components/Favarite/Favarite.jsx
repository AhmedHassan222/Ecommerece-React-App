
import { useContext, useEffect } from "react"
import style from "./Favarite.module.css"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
export default function Favarite() {
    let { favariteArr, clearAll, clearItem, addToCart, itemsInCart , addToFavarite } = useContext(favariteContext)
    useEffect(() => {
        console.log(favariteArr)
    }, [])
    return <>
        <Helmet>
            <title>Favarites Page </title>
        </Helmet>
        <div className={`container  ${style.favarite} py-4`}>
            <div className="row g-2">
                <div className="d-flex my-3 justify-content-between ">
                    <h6 className={`   ${style.title}`}>The Items that you added in Favorites List</h6>
                    {localStorage.getItem('favariteArr') !== null ? <button onClick={clearAll} className={`btn btn-danger px-2 text-white `}>ClearAll</button> : ''}
                </div>
                {localStorage.getItem('favariteArr') === null ? <p className="text-danger">*No Item added yet</p> : '  '}
                {Array.from(new Set(favariteArr)).map((item, index) => (
                    <div key={index} className=" col-sm-12 col-md-4 col-lg-3 py-4">
                        <div className={`bg-white p-3 ${style.content}`}>
                            <img className="w-100" src={item.img} alt="" />
                            <div className={`${style.caption}`}>
                                <p className={`${style.textNameContent}`}>{item.name}</p>
                                <div className="d-flex justify-content-between">
                                    <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>
                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i onClick={()=>{clearItem(item)}} className={`fa-solid fa-heart fs-5 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i>}
                                    </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}
                                </div>

                                {localStorage.getItem('user') !== null ? <div>
                                    {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i className="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}
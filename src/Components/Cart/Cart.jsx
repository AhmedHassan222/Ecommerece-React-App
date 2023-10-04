
import { useContext } from "react"
import style from "./Cart.module.css"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function Cart() {
    let { itemsInCart, clearAllItemsFromCart, removeItemFromCart, totalPrice } = useContext(favariteContext)

    return <>

        <Helmet>
            <title>Cart Page </title>
        </Helmet>
        <div className={`container  ${style.favarite} py-4`}>
            <div className="row g-2">
                <div className="d-flex ">
                    <p className={`my-3  h6 ${style.title}`}>The Items that you added in Shopping Cart</p>
                    {localStorage.getItem('itemsInCart') !== null ? <button onClick={clearAllItemsFromCart} className={`${style.btnAllStyle} ms-5 p-2`}>Clear All</button> : ''}
                </div>
                {localStorage.getItem('itemsInCart') === null ? <p className="text-danger">*No Item added yet</p> : '  '}


                {Array.from(new Set(itemsInCart)).map((item, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 ">
                        <div className="position-relative bg-white  p-3">
                            <img className="w-100 " src={item.img} alt="" />
                            <p className={`${style.textNameContent}`}>{item.name}</p>

                            <div className="d-flex justify-content-between">
                                <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>

                            </div>

                            <button onClick={() => { removeItemFromCart(item) }} className={`${style.btnStyle}`}>Remove From Cart</button>
                        </div>
                    </div>
                ))}
                <div >

                    {localStorage.getItem('itemsInCart') !== null ? <div className="d-flex justify-content-between my-5 w-100 ">
                        <h3>Total : {totalPrice} E£</h3>
                        <Link to="/checkout">
                            <button className={`btn btn-success`}>Chekout</button>

                        </Link>
                    </div> : ''}


                </div>
            </div>
        </div>




    </>
}

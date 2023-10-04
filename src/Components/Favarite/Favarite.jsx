
import { useContext, useEffect } from "react"
import style from "./Favarite.module.css"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

export default function Favarite() {
    let { favariteArr, clearAll, clearItem, addToCart, itemsInCart } = useContext(favariteContext)
    useEffect(() => {
        console.log(favariteArr)
    }, [])
    return <>

        <Helmet>
            <title>Favarites Page </title>
        </Helmet>
        <div className={`container  ${style.favarite} py-4`}>
            <div className="row g-2">
                <div className="d-flex ">
                    <p className={`my-3  h6 ${style.title}`}>The Items that you added in Favorites List</p>
                    {localStorage.getItem('favariteArr') !== null ? <button onClick={clearAll} className={`${style.btnAllStyle} ms-5 px-3`}>Clear All</button> : ''}
                </div>
                {localStorage.getItem('favariteArr') === null ? <p className="text-danger">*No Item added yet</p> : '  '}


                {Array.from(new Set(favariteArr)).map((item, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 py-4">
                        <div className="position-relative">
                            <div className='box bg-white p-2
                            '>
                                <img className="w-100" src={item.img} alt="" />
                                <div className={`${style.caption}`}>
                                    <p className={`${style.textNameContent}`}>{item.name}</p>
                                    <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>

                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(itemsInCart.map((element) => element.id))).includes(item.id) ? <p className={`${style.positionCart}`}><i class="fa-regular fa-circle-check"></i> Item added to cart</p>
                                            : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                    </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}

                                </div>

                            </div>

                            <div onClick={() => { clearItem(item) }} className={`position-absolute m-2 fs-2 ${style.xStyle} rounded-circle top-0 end-0  `}>
                                <i class="fa-solid fa-x" ></i>                </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>




    </>
}


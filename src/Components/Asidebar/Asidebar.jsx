
import style from "./Asidebar.module.css"
import { useContext, useEffect } from "react"
import { wordContext } from "../../Context/Searchstore"
import { Link, useNavigate } from "react-router-dom"
import { favariteContext } from './../../Context/Favaritestore';
import { GetDataContext } from "../../Context/Getdatastore";
export default function Asidebar() {
    let { addToCart, addToFavarite, itemsInCart, favariteArr , clearItem } = useContext(favariteContext)
    let { getProducts } = useContext(GetDataContext)
    let { search, itemsArray, wordSearch } = useContext(wordContext)
    let navigate = useNavigate()
    function goToHome() {
        navigate('/')
        document.querySelector('body').classList.remove('overflow-hidden')
    }
    useEffect(() => {
        getProducts('allproduct')
        document.querySelector('body').classList.add('overflow-hidden')
    }, [])
    return <>
        <aside >
            <div className={`   ${style.box}`}>
                <div className={`container align-self-center  d-flex justify-content-between px-3 py-3`}>
                    <div className=" w-100">
                        <input id="search" onChange={search} type="text" placeholder='Search For All Products' className={` ${style.searchBar}`} />
                    </div>
                    <i onClick={goToHome} className={`fa-solid fa-x fs-4 align-self-center ${style.iconStyle}`}></i>
                </div>
            </div>
            <div className={`w-100 vh-100 py-5 ${style.box}`}>
                <div className="container">
                    {wordSearch !== '' ? <div className="row">
                        {itemsArray.map((item, index) => <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className='bg-white p-3'>
                                <img className="w-100" src={item.img} alt="" />
                                <div className={`${style.caption}`}>
                                    <Link to={'/productdetails/' + 'allproduct/' + item.id} className={`${style.box} p-3`}>
                                        <p className={`${style.textNameContent}`}>{item.name}</p>
                                    </Link>
                                    <div className="d-flex justify-content-between">
                                        <p className={`${style.priceStyle} fs-5`}>{parseFloat(item.price) * 1000} E£</p>
                                        {localStorage.getItem('user') !== null ? <div>
                                            {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i onClick={() => { clearItem(item) }} className={`fa-solid fa-heart fs-5 m-3 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 m-3 `}></i>}
                                        </div> : <Link to={'/login'}><i className={`fa-regular fa-heart fs-5 ${style.favarite}`}></i></Link>}                                    </div>
                                    {localStorage.getItem('user') !== null ? <div>
                                        {Array.from(new Set(itemsInCart.map((element) => element.name))).includes(item.name) ? <p><i className="fa-regular fa-circle-check"></i> Item added to cart</p> : <button onClick={() => { addToCart(item) }} className={`${style.btnStyle}`}>Add To Cart</button>}
                                    </div> : <Link to={'/login'}><button className={`${style.btnStyle}`}>Add To Cart</button></Link>}
                                </div>
                            </div>
                        </div>)}
                    </div> : ``}
                </div>
            </div>
        </aside>
    </>
}
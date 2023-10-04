import style from './Checkout.module.css'
import visa from '../../assets/visa.jpg'
import paypal from '../../assets/paypal.jpg'
import { useContext, useState } from 'react'
import { favariteContext } from './../../Context/Favaritestore';
import { useNavigate } from 'react-router-dom';

export default function () {
    let { setItemsInCart, setCountCart } = useContext(favariteContext)
    let navigate = useNavigate()
    const [buyDoneWord, setBuyDoneWord] = useState('')
    function Checkout() {
        setItemsInCart([])
        setCountCart(0)
        localStorage.removeItem('itemsInCart')
        localStorage.removeItem('totalPrice')
        setBuyDoneWord('Buy Done Successfully')
    }
    return <>
        <div className='py-5'>
            {localStorage.getItem('itemsInCart') != null ? <form onSubmit={Checkout} className={` ${style.form} mx-auto`}>
                <h2 className="text-danger">Payment Method</h2>
                <div classNam="d-flex justify-content-between my-3 bg-info w-100">
                    <img className=" w-50" src={visa} />
                    <img className=" w-50" src={paypal} />
                </div>
                <div className="my-3">
                    <label >Name on Card</label>
                    <input required className={`w-100 ${style.special}`} type="text" name="holdername" placeholder="John Smith" />
                </div>
                <div className="my-3">
                    <label >Card Number</label>
                    <input required className={`w-100 ${style.special}`} type="text" name="cardno" id="cr_no"
                        placeholder="0000-0000-0000-0000" minlength="16"
                        maxlength="16" />
                </div>
                <div className="my-3">
                    <label >CVV</label>
                    <input required className={`w-100 ${style.special}`} type="password" name="cvcpwd"
                        placeholder="&#9679;&#9679;&#9679;"
                        minlength="3" maxlength="3" />
                </div>
                <div className="my-3">
                    <label >Expiration Date</label>
                    <input required className={`w-100 ${style.special}`} type="text" name="exp" id="exp" placeholder="MM/YY"
                        minlength="4" maxlength="4" />
                </div>
                <button type='submit' className={`${style.button} my-3`}>MAKE A PAYMENT</button>
                {buyDoneWord != '' ? <p className='text-success'>{buyDoneWord}</p> : ''}
            </form> : <div className='vh-100 w-75 mx-auto'>
                <p className='text-success'>{buyDoneWord}</p>
                </div>}
        </div>
    </>
}
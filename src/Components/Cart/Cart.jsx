import { useContext, useMemo, useState } from "react"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
export default function Cart() {
    let { itemsInCart, removeItemFromCart, totalPrice, favariteArr, clearItem, addToFavarite , setItemsInCart } = useContext(favariteContext)
    // const [count, setCount] = useState(1)
    const [discount, setDiscount] = useState(0)
    const [input, setInput] = useState(0)
    // useMemo(()=>{
    //     // document.querySelector('select').value
    //     return count
    // },[])
    // function updateCount(count, index) {
    //     setNewPrice([parseFloat(Array.from(new Set(itemsInCart))[index].price) * 1000 * count, index])
    // }
    function apply() {
        if (input === 'Z100') {
            setDiscount(totalPrice * 25 / 100)
        } else {
            setDiscount(0)
        }
    }
    return <>
        <Helmet>
            <title>Cart Page </title>
        </Helmet>
        <section className="bg-light my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="card border shadow-0">
                            <div className="m-4">
                                <h4 className="card-title mb-4">Your shopping cart</h4>
                                {localStorage.getItem('itemsInCart') === null ? <p className="text-danger">*No Item added yet</p> : '  '}
                                {Array.from(new Set(itemsInCart)).map((item, index) => <div key={index} className="row ">
                                    <div className="col-lg-5">
                                        <div className="me-lg-5">
                                            <div className="d-flex">
                                                <img src={item.img} className="border rounded me-3 " style={{ width: `50px`, height: `50px` }} />
                                                <p className="nav-link">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                        <div className=" me-4 ">
                                            {/* <select onChange={(e) => { updateCount(e.target.value, index) }} className="form-select me-4">
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                            </select> */}
                                            {/* <button className=" btn btn-success fs-6 py-1 px-2 rounded-0" onClick={()=>{setCount(count - 1)}}>-</button>
                                            <span className="mx-2">{count}</span>
                                            <button  className=" btn btn-success fs-6 py-1 px-2 rounded-0"onClick={() => {setCount(count + 1)}}>+</button> */}
                                        </div>
                                        <div className="">
                                            <text className="h6">E£ { parseFloat(item.price) * 1000 } </text> <br />
                                        </div>
                                    </div>
                                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                        <div className="float-md-end">
                                            {Array.from(new Set(favariteArr.map((element) => element.name))).includes(item.name) ? <i onClick={() => { clearItem(item) }} className={`fa-solid fa-heart fs-5 m-3 `}></i> : <i onClick={() => { addToFavarite(item) }} className={`fa-regular fa-heart fs-5 m-3 `}></i>}
                                            <button onClick={() => { removeItemFromCart(item) }} className="btn btn-light border text-danger icon-hover-danger"> Remove</button>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                            <div className="border-top pt-4 mx-4 mb-4">
                                <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card mb-3 border shadow-0">
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Have coupon?</label>
                                    <p className="text-success small">
                                        You win Cupont Code "Z100"
                                    </p>
                                    <div className="input-group">
                                        <input onChange={(e) => { setInput(e.target.value) }} type="text" className="form-control border" name="" placeholder="Coupon code" />
                                        <button onClick={apply} className="btn btn-light border">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-0 border">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Total price:</p>
                                    <p className="mb-2"> E£ {totalPrice} </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Discount:</p>
                                    <p className="mb-2 text-success">-E£ {discount}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">TAX:</p>
                                    <p className="mb-2">E£ {totalPrice * 14 / 100}</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p className="mb-2">Total price:</p>
                                    <p className="mb-2 fw-bold">E£ {totalPrice - discount + totalPrice * (14 / 100)}</p>
                                </div>
                                <div className="mt-3">
                                    <Link to={'/checkout'} className="btn btn-success w-100 shadow-0 mb-2"> Checkout </Link>
                                    <Link to={'/'} className="btn btn-light w-100 border mt-2"> Back to shop </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}


// import React, { useState } from 'react';

// const Cart = () => {
//     // Initial state of the cart
//     const [cart, setCart] = useState([
//         { id: 1, name: 'Product 1', quantity: 1, price: 10 },
//         { id: 2, name: 'Product 2', quantity: 1, price: 20 },
//     ]);

//     // Function to handle quantity change
//     const handleQuantityChange = (productId, amount) => {
//         setCart(cart.map(item =>
//             item.id === productId
//                 ? { ...item, quantity: item.quantity + amount }
//                 : item
//         ));
//     };

//     return (
//         <div>
//             <h2>Shopping Cart</h2>
//             <ul>
//                 {cart.map(item => (
//                     <li key={item.id}>
//                         {item.name} - Quantity: {item.quantity}
//                         <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
//                         <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
//                     </li>
//                 ))}
//             </ul>
//             <div>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
//         </div>
//     );
// };

// export default Cart;

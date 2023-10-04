import { createContext, useState, useEffect } from "react"

export let CartContext = createContext(0)
function CartContextProvide(props) {
    const [signInNow, setSignInNow] = useState('')

    let price = 0;





    useEffect(() => {

        if (localStorage.getItem('itemsInCart') != null) {
            const newCartArray = Array.from(new Set(JSON.parse(localStorage.getItem('itemsInCart')).map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
            // setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')) + total)
            setItemsInCart(newCartArray)
            for (let i = 0; i < newCartArray.length; i++) {
                price += parseFloat(newCartArray[i].price) * 1000;

            }
            setTotalPrice(price / 2)
            setCountCart(localStorage.getItem('countCart'))
        } else {
            setItemsInCart([])
        }
    }, [])



    // functions of cart shopping >>>>>>>>>>
    //....................
    const [itemsInCart, setItemsInCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [warningCart, setWarningCart] = useState('')
    const [countCart, setCountCart] = useState(0)

    //add to cart

    function addToCart(item) {
        if (localStorage.getItem('user') !== null) {
            if (itemsInCart == []) {
                setItemsInCart(item)
                setCountCart(1)
                localStorage.setItem('countCart', 1)
                setTotalPrice(parseFloat(item.price) * 1000)
            } else {
                itemsInCart.push(item)
                localStorage.setItem('countCart', Array.from(new Set(itemsInCart)).length)
                setCountCart(Array.from(new Set(itemsInCart)).length)
                setTotalPrice(parseFloat(item.price) * 1000 + totalPrice)
                console.log(totalPrice)
            }
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))


        } else {
            setWarningCart('You must Sign In before you can add item to favarite')
            setSignInNow(' Sign In Now')
        }
    }
    // delete all items from cart
    function clearAllItemsFromCart() {
        localStorage.removeItem('itemsInCart')
        setItemsInCart([])
        setCountCart(0)
        setTotalPrice(0)


    }
    //delet item from cart
    function removeItemFromCart(item) {


        if (itemsInCart.length == 1) {
            clearAllItemsFromCart()
        } else {
            setItemsInCart(itemsInCart.filter(function (z) {
                return z !== item;
            }))
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart.filter(function (z) {
                return z !== item;
            })))

            let arr = itemsInCart.filter(function (z) {
                return z !== item;
            })
            for (let i = 0; i < arr.length; i++) {
                price += parseFloat(arr[i].price) * 1000;

            }
            setTotalPrice(price)
            localStorage.setItem('totalPrice', price)
            setCountCart(countCart - 1)

        }
    }

    return <createContext.Provider value={{ setCountCart, totalPrice, removeItemFromCart, clearAllItemsFromCart, warningCart, countCart, itemsInCart, setItemsInCart, addToCart, signInNow, setSignInNow }}>
        {props.children}
    </createContext.Provider>
}
export default CartContextProvide;
import { createContext, useState, useEffect } from "react"
export let CartContext = createContext(0)
function CartContextProvide(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [countCart, setCountCart] = useState(0);
    useEffect(() => {
        if (localStorage.getItem('itemsInCart')) {
            const newCartArray = Array.from(new Set(JSON.parse(localStorage.getItem('itemsInCart')).map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
            setItemsInCart(newCartArray)
            setCountCart(localStorage.getItem('countCart'))
        } else {
            setItemsInCart([])
        }
    }, [])
    //add to cart
    function addToCart(item) {
        if (localStorage.getItem('user') !== null) {
            item['Quantity'] = 1;
            setIsLogin(true)
            if (!itemsInCart) {
                setItemsInCart(item)
                setCountCart(1)
                localStorage.setItem('countCart', 1)
            } else {
                itemsInCart.push(item)
                localStorage.setItem('countCart', Array.from(new Set(itemsInCart)).length)
                setCountCart(Array.from(new Set(itemsInCart)).length)
            }
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart))
            console.log(JSON.parse(localStorage.getItem('itemsInCart')))
        } else {
            setIsLogin(false)
        }
    }

    //delet item from cart
    function removeItemFromCart(item) {
        if (itemsInCart.length === 1) {
            clearAllItemsFromCart()
        } else {
            setItemsInCart(itemsInCart.filter(function (z) {
                return z !== item;
            }))
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart.filter(function (z) {
                return z !== item;
            })))
            setCountCart(countCart - 1)
            localStorage.setItem('countCart', countCart - 1)
        }
    }
    // delete all items from cart
    function clearAllItemsFromCart() {
        localStorage.removeItem('itemsInCart')
        setItemsInCart([])
        setCountCart(0)
    }
    return <CartContext.Provider value={{ isLogin, setCountCart, removeItemFromCart, countCart, itemsInCart, setItemsInCart, addToCart }}>
        {props.children}
    </CartContext.Provider>
}
export default CartContextProvide;
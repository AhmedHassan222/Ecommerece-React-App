import { createContext, useState, useEffect } from "react"
export let favariteContext = createContext(0)
function FavariteContextProvide(props) {
    let price = 0;
    const [isLogin, setIsLogin] = useState(false)
    // function add to favarite >>>>>>>>>>>>>>>>>>>>>>>>>>
    const [favariteArr, setFavariteArr] = useState([])
    const [count, setCount] = useState(0)
    function addToFavarite(item) {
        if (localStorage.getItem('user') !== null) {
            setIsLogin(true)
            if (!favariteArr) {
                setFavariteArr(item)
                setCount(1)
                localStorage.setItem('count', 1)
            } else {
                favariteArr.push(item)
                localStorage.setItem('count', Array.from(new Set(favariteArr)).length)
                setCount(Array.from(new Set(favariteArr)).length)
            }
            localStorage.setItem('favariteArr', JSON.stringify(favariteArr))
        } else {
            setIsLogin(false)
        }
    }
    //function clear all
    function clearAll() {
        localStorage.removeItem('favariteArr')
        setFavariteArr([])
        setCount(0)
    }
    function clearItem(item) {
        if (favariteArr.length === 1) {
            clearAll()
        } else {
            setFavariteArr(favariteArr.filter(function (x) {
                return x !== item;
            }))
            localStorage.setItem('favariteArr', JSON.stringify(favariteArr.filter(function (x) {
                return x !== item;
            })))
            setCount(count - 1)
            localStorage.setItem('count', count - 1)

        }
    }
    useEffect(() => {
        if (localStorage.getItem('favariteArr') != null) {
            const newArray = Array.from(new Set(JSON.parse(localStorage.getItem('favariteArr')).map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
            setFavariteArr(newArray)
            setCount(localStorage.getItem('count'))

        } else {
            setFavariteArr([])
        }
        if (localStorage.getItem('itemsInCart') != null) {
            const newCartArray = Array.from(new Set(JSON.parse(localStorage.getItem('itemsInCart')).map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
            setItemsInCart(newCartArray)
            for (let i = 0; i < newCartArray.length; i++) {
                price += parseFloat(newCartArray[i].price) * newCartArray[i].Quantity * 1000;

            }
            setTotalPrice(price)
            setCountCart(localStorage.getItem('countCart'))
        } else {
            setItemsInCart([])
        }
    }, [])


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    // functions of cart shopping >>>>>>>>>>
    //....................
    const [itemsInCart, setItemsInCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [countCart, setCountCart] = useState(0)

    //add to cart

    function addToCart(item) {
        if (localStorage.getItem('user') !== null) {
            item['Quantity'] = 1;
            setIsLogin(true)
            if (!itemsInCart) {
                setItemsInCart(item)
                setCountCart(1)
                localStorage.setItem('countCart', 1)
                setTotalPrice(parseFloat(item.price) * item.Quantity * 1000)
            } else {
                itemsInCart.push(item)
                localStorage.setItem('countCart', Array.from(new Set(itemsInCart)).length)
                setCountCart(Array.from(new Set(itemsInCart)).length)
                setTotalPrice(parseFloat(item.price) * item.Quantity * 1000 + totalPrice)
            }
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
            console.log(JSON.parse(localStorage.getItem('itemsInCart')))
        } else {
            setIsLogin(false)
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


        if (itemsInCart.length === 1) {
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
                price += parseFloat(arr[i].price) * arr[i].Quantity * 1000;

            }
            setTotalPrice(price)
            localStorage.setItem('totalPrice', price)
            setCountCart(countCart - 1)
            localStorage.setItem('countCart', countCart - 1)

        }
    }
    
  

    return <favariteContext.Provider value={{ favariteArr, isLogin, setCountCart, totalPrice, removeItemFromCart, clearAllItemsFromCart, countCart, itemsInCart, setItemsInCart, addToCart, setCount, setFavariteArr, count, addToFavarite, clearAll, clearItem, setTotalPrice }}>
        {props.children}
    </favariteContext.Provider>
}
export default FavariteContextProvide;
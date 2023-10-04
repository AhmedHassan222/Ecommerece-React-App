import { createContext, useState, useEffect } from "react"
import axios from "axios"

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
            if (favariteArr == []) {
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
        if (favariteArr.length == 1) {
            clearAll()
        } else {
            setFavariteArr(favariteArr.filter(function (x) {
                return x !== item;
            }))
            localStorage.setItem('favariteArr', JSON.stringify(favariteArr.filter(function (x) {
                return x !== item;
            })))
            setCount(count - 1)
        }
    }
    // functions get from Api .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const [allProducts, setAllProduct] = useState([])
    const [accessories, setAccessories] = useState([])
    const [homeappliances, setHomeappliances] = useState([])
    const [cameras, setCameras] = useState([])
    const [headphones, setHeadphones] = useState([])
    const [kitchen, setKitchen] = useState([])
    const [personalcare, setPersonalcare] = useState([])
    const [mobilesandtablets, setMobilesandtablets] = useState([])
    const [televisions, setTelevisions] = useState([])
    const [computers, setComputers] = useState([])
    async function getProducts(type) {
        let { data } = await axios.get(`https://rus-digital-televisions.onrender.com/${type}`)
        switch (type) {
            case 'allProducts':
                setAllProduct(data)
                break;
            case 'accessories':
                setAccessories(data)
                break;
            case 'homeappliances':
                setHomeappliances(data)
                break;
            case 'cameras':
                setCameras(data)
                break;
            case 'headphones':
                setHeadphones(data)
                break;
            case 'kitchen':
                setKitchen(data)
                break;
            case 'personalcare':
                setPersonalcare(data)
                break;
            case 'mobilesandtablets':
                setMobilesandtablets(data)
                break;
            case 'televisions':
                setTelevisions(data)
                break;
            case 'computers':
                setComputers(data)
                break;
            default:
                break;
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
            setIsLogin(true)
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
            }
            localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart))
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
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

    return <favariteContext.Provider value={{ favariteArr, isLogin, setCountCart, allProducts, getProducts, totalPrice, removeItemFromCart, clearAllItemsFromCart, countCart, itemsInCart, setItemsInCart, addToCart, accessories, homeappliances, cameras, headphones, kitchen, personalcare, mobilesandtablets, televisions, computers, setCount, setFavariteArr, count, addToFavarite, favariteArr, clearAll, clearItem, setTotalPrice }}>
        {props.children}
    </favariteContext.Provider>
}
export default FavariteContextProvide;
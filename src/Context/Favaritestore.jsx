import { createContext, useState, useEffect } from "react"
export let favariteContext = createContext(0)
function FavariteContextProvide(props) {
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
        localStorage.removeItem('count')
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
    }, [])
    return <favariteContext.Provider value={{ favariteArr, isLogin, setCount, setFavariteArr, count, addToFavarite, clearAll, clearItem }}>
        {props.children}
    </favariteContext.Provider>
}
export default FavariteContextProvide;
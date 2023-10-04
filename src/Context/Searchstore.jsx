import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let wordContext = createContext('')

export default function SearchContextProvide(props) {
    const [wordSearch, setWordSearch] = useState('')
    const [allProducts, setAllProducts] = useState([])
    const [itemsArray, setItemsArray] = useState([])
    let items = []
    async function getProducts(type) {
        let { data } = await axios.get(`https://rus-digital-televisions.onrender.com/${type}`)
        setAllProducts(data)

    }
    function search(e) {
        setWordSearch(e.target.value)
        for (let i = 0; i < allProducts.length; i++) {
            if (allProducts[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                items.push(allProducts[i])
            }
        }
        setItemsArray(items)
    }
    useEffect(() => {
        getProducts('allproduct')
    }, [])
    return <wordContext.Provider value={{ search, wordSearch, itemsArray }}>
        {props.children}
    </wordContext.Provider>
}


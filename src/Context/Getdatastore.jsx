import axios from "axios";
import { createContext, useState } from "react"
export let GetDataContext = createContext(0)
function GetDataContextProvide(props) {
    const [items, setItems] = useState([])
    async function getProducts(type) {
        setItems([])
        let { data } = await axios.get(`https://rus-digital-televisions.onrender.com/${type}`)
        setItems(data)
    }
    return <GetDataContext.Provider value={{ getProducts, items }}>
        {props.children}
    </GetDataContext.Provider>
}
export default GetDataContextProvide;
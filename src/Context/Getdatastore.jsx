import axios from "axios";
import { createContext, useState } from "react"
export let GetDataContext = createContext(0)
function GetDataContextProvide(props) {
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
    return <GetDataContext.Provider value={{ allProducts, getProducts, accessories, homeappliances, cameras, headphones, kitchen, personalcare, mobilesandtablets, televisions, computers }}>
        {props.children}
    </GetDataContext.Provider>
}
export default GetDataContextProvide;
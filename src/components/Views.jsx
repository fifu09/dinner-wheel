import { useEffect, useState } from "react"
import { Categories } from "./Categories"
import { Transport } from "./Transport"
import { Rulet } from "./Rulet"

export const Views = () => {
    const [views, setViews] = useState("Categories")
    const [categories, setCategories] = useState([])
    const [transport, setTransport] = useState("")

    const RenderViews = () => {
        switch(views){
            case "Categories":
                return <Categories setCategories={setCategories} />
            case "Transport":
                return <Transport setTransport={setTransport} />
            case "Rulet":
                return <Rulet categories={categories} transport={transport} />
            default:
                return null
        }
    }
    
    useEffect(()=>{
        if (categories.length >0) setViews("Transport")
    }, [categories])

    useEffect(()=>{
        if (transport) setViews("Rulet")
    }, [transport])

    return (
        <RenderViews />
    )
}
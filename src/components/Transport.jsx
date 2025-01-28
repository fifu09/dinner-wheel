import { Checkbox, Label } from "flowbite-react"
import { useState } from "react";
import { FaCarRear } from "react-icons/fa6";
import { FaPersonWalking } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export const Transport = ({ setTransport }) => {
    const [errorMsg, setErrorMsg] = useState("")

    const handleCaseSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = ["Centro", "Coche"].map((opcion) => ({
            value: opcion,
            checked: formData.get(opcion) === "on",
        })).filter(it => it.checked).map(it => it.value);

        if (!data || data.length === 0) {
            setErrorMsg("Seleccione minimo una forma de moverte")
        } else {
            setTransport(data);
        }
    };

    return (
        <form onSubmit={handleCaseSubmit} className="flex flex-col justify-center h-full gap-20 text-xl">
            <h3>Seleccione si vas caminando o en coche (o ambas)</h3>
            <div className="flex items-center justify-center gap-4 w-full">
                <Checkbox className="size-8" id={"Centro"} name={"Centro"} />
                <div className="flex flex-col items-center">

                    <Label htmlFor={"Centro"}><FaPersonWalking className="text-7xl" />{"Centro"}</Label>
                </div>
            </div>
            <div key={""} className="flex items-center justify-center gap-4 w-full">
                <Checkbox className="size-8" id={"Coche"} name={"Coche"} />
                <div className="flex flex-col items-center">

                    <Label htmlFor={"Coche"}><FaCarRear className="text-7xl" />{"Coche"}</Label>
                </div>
            </div>
            <p className="text-red-400 italic text-center h-4">{errorMsg}</p>
            <div className="w-full flex justify-end">
                <button type="submit" className="text-6xl"><GrFormNextLink /></button>
            </div>
        </form>
    )
}
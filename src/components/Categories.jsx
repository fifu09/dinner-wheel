import { Opciones1 } from "src/constant";
import { Checkbox, Label } from "flowbite-react";
import { GrFormNextLink } from "react-icons/gr";
import { useState } from "react";

export const Categories = ({ setCategories }) => {
    const [errorMsg, setErrorMsg] = useState("")

    const handleCaseSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Opciones1.map((opcion) => ({
            value: opcion,
            checked: formData.get(opcion) === "on",
        })).filter(it => it.checked).map(it => it.value);


        if (!data || data.length === 0) {
            setErrorMsg("Seleccione minimo una categoria")
        } else {
            setCategories(data);
        }
    };
    console.log(errorMsg)
    return (
        <form className="flex flex-col items-center justify-between h-full w-full p-6 " onSubmit={handleCaseSubmit}>
            <h2 className="italic text-xl">Elige que tipo de comida quieres</h2>
            <ul className="flex flex-col gap-6">
                {Opciones1.map((opcion) => (
                    <div key={opcion} className="flex items-center gap-4 w-full">
                        <Checkbox className="size-5" id={opcion} name={opcion} />
                        <Label className="text-2xl" htmlFor={opcion}>{opcion}</Label>
                    </div>
                ))}
            </ul>
            <p className="text-red-400 italic h-4">{errorMsg}</p>
            <div className="w-full flex justify-end">

                <button type="submit" className="text-6xl"><GrFormNextLink /></button>
            </div>
        </form>
    );
};

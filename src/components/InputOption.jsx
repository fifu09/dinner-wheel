import { Checkbox, Label } from "flowbite-react"

export const InputOption = ({title}) =>{
    return (
        <div className="flex items-center gap-2">
            <Checkbox id={title} />
            <Label htmlFor={title}>{title}</Label>
        </div>
    )
}
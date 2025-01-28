import { Cities } from "src/constant"

export const InputSearchCity = () => {
    return (
        <section className="w-full">
            <ul className="flex flex-col w-full h-full gap-6 items-center justify-between py-8 transition-all">
                {Cities.filter(city => city.toLocaleLowerCase().includes(city.toLowerCase()))
                    .map(city =>
                        <a className="border px-10 py-1 rounded-full" href={`/${city}`} key={city}>{city}</a>)}
            </ul>
        </section>
    )
}
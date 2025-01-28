import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { VitoriaRestaurante } from "src/constant"

export const Rulet = ({ categories, transport }) => {
    const restaurants = VitoriaRestaurante.filter(it => 
        it.tags.some(tag => categories.includes(tag)) 
    ).map(it => ({ option: it.name }));
    
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);


    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * restaurants.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }
    return (
        <section className='flex flex-col h-full justify-center items-center gap-10'>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={restaurants}

                onStopSpinning={() => {
                setMustSpin(false);
                }}
            />
            <button className='rounded-md border w-40 py-2' onClick={handleSpinClick}>¡A girar!</button>

        </section>
    )
}
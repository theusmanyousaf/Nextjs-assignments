"use client"

import { useState } from "react"

export default function NamesUI() {
    const names: string[] = ["Usman is a Programmer", "Hamza is in Armed Forces", "Mazhar is Police Officer", "Osaf in Texttile Marketing", "Basit is Merchendiser", "Qasim is a Freelancer."]
    let [nextName, setNextName] = useState(0);
    function nextClick() {
        setNextName(nextName + 1);
    }
    function prevClick() {
        setNextName(nextName - 1);
        if(nextName <= 0){
            setNextName(0);
        }
    }
    return (
        <div className="inline-flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={prevClick}>
                Prev
            </button>
            <p className="font-bold text-2xl p-2">{names[nextName % names.length]}</p>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={nextClick}>
                Next
            </button>
        </div>
    )
}

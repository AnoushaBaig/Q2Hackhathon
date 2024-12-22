import React from "react"
import Image from "next/image"


const Bottombar = () => {
    return (
        <div className="flex justify-evenly items-center m-auto w-full flex-wrap py-20 gap-3">
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/Delivery.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-light pt-5">Next day as standard</h2>
                <span className="text-sm">Order before 3pm and get your order <br />
                the next day as standard</span>
            </div>
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/check.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-light pt-5">Made by true artisans</h2>
                <span className="text-sm">Handmade crafted goods made with <br />
                real passion and craftmanship</span>
            </div>
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/Purchase.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-light pt-5">Unbeatable prices</h2>
                <span className="text-sm">For our materials and quality you  <br />won’t find better prices anywhere</span>
            </div>
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/Sprout.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-light pt-5">Recycled packaging</h2>
                <span className="text-sm">We use 100% recycled packaging to  <br />ensure our footprint is manageable</span>
            </div>
            
        </div>
    )
}

export default Bottombar
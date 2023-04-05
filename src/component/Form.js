import React, { useState } from 'react'
import { MdOutlineFileCopy } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
// import './form.css'
const Form = () => {
    const [trailSLFlag, setTrailSLFlag] = useState(false)
    const [simpleMomentumFlag, setSimpleMomentumFlag] = useState(false)
    const [formData, setFormData] = useState({
        totalLot: "",
        position: "",
        optionType: "",
        Expiry: "",
        criteria: "",
        simpleMomentum: simpleMomentumFlag,
        TrailSL: trailSLFlag
    })
    const handleCancel = () => {
        // Handle search functionality here
        setFormData({
            totalLot: "",
            position: "",
            optionType: "",
            Expiry: "",
            criteria: "",
            simpleMomentum: "",
            TrailSL: ""
        });
    };
    const handleLeg = () => {
        console.log(formData)
    };
    const handleSubmit = () => {
        // Handle search functionality here
    };
    const copyFormData = () => {
        // Handle search functionality here
        navigator.clipboard.writeText(JSON.stringify(formData))
    };

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    }


    return (
        <>
            {/* <form >
        //     <div className='flex-container'>
        //         <div>
        //             <label for="quantity">Total lot</label><br />
        //             <input type="number" id="quantity" name="quantity" min="1" max="5" />
        //         </div>


        //         <div>
        //             <label >Position</label><br />
        //             <select >
        //                 <option value="volvo">Buy</option>
        //                 <option value="saab">Sell</option>
        //             </select>
        //         </div>
        //         <div>
        //             <label >Option Type</label><br />
        //             <select name="cars">
        //                 <option >Put</option>
        //                 <option >call</option>
        //             </select>
        //         </div>
        //         <div>
        //             <label >Expiray</label><br />
        //             <select >
        //                 <option value="weekly">Weekly</option>
        //                 <option value="monthly">Monthly</option>

        //             </select>
        //         </div>
        //         <div>
        //             <label >select strike criteria</label><br />
        //             <select >
        //                 <option value="volvo">strike type</option>

        //             </select>
        //         </div>


        //     </div>
        //     <br />

            </form> */}
            <div className="bg-white rounded-2xl p-4 md:shadow-xl mx-auto w-2/3 md:right-60 left-14 md:left-56">
                <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  item-center">
                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Total Lot
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <input
                                    type="number"
                                    className="bg-blue-100 block w-full h-12 px-5 py-2 border rounded-lg  shadow-lg placeholder-black text-black focus:ring focus:outline-none"
                                    onChange={handleChange} name='totalLot' value={formData.totalLot}
                                />
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Position
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} name='position' value={formData.position}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Option Type
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} name='optionType' value={formData.optionType}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Expiry
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} name='Expiry' value={formData.Expiry}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Select Criteria
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} name='criteria' value={formData.criteria}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="md:w-1/3 mx-auto flex space-x-3">
                    <button
                        className="md:flex w-full justify-center items-center text-lg mx-auto  bg-blue-600 text-white px-4 py-2 mt-4 rounded-full  hover:bg-blue-700 transition duration-300"
                        onClick={handleLeg}
                    >
                        Add Leg
                    </button>
                    <button
                        className="md:flex w-full justify-center items-center text-lg mx-auto bg-gray-200 text-black px-4 py-2 mt-4 rounded-full hover:scale-105 transition duration-300"
                        onClick={handleCancel}
                    >
                        Cancel                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-4 md:shadow-xl mx-auto w-2/3 md:right-60 left-14 md:left-56 mt-10 ">
                <div className='flex flex-col items-end'>
                    <div className='space-y-2'>

                        <MdOutlineFileCopy className='text-2xl hover:scale-105  cursor-pointer' onClick={copyFormData} />
                        <BsTrash className='text-2xl text-red-500 hover:text-red-700 cursor-pointer' />
                    </div>
                </div>
                <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  item-center">
                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Total Lot
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <input
                                    type="number"
                                    className="bg-blue-100 block w-full h-12 px-5 py-2 border rounded-lg  shadow-lg placeholder-black text-black focus:ring focus:outline-none"
                                    onChange={handleChange}
                                    value={formData.totalLot}
                                    name='totalLot'
                                />
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Position
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} value={formData.position}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Option Type
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} value={formData.optionType}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Expiry
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} value={formData.Expiry}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="mt-4 p-2">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Criteria
                        </h1>
                        <div className="">
                            <div className="my-1">
                                <div className="relative w-full lg:max-w-sm">
                                    <select className="w-full p-2.5  shadow-lg outline-none appearance-none focus:border-indigo-600 bg-blue-100 block  h-12 px-5 py-2 border rounded-lg placeholder-black text-black focus:ring focus:outline-none" onChange={handleChange} value={formData.criteria}>
                                        <option className='p-2'>ReactJS Dropdown</option>
                                        <option className='p-2'>Laravel 9 with React</option>
                                        <option className='p-2'>React with Tailwind CSS</option>
                                        <option className='p-2'>React With Headless UI</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>



                <div className='flex'>
                    <div className="my-4 ml-24">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " onClick={() => setSimpleMomentumFlag(!simpleMomentumFlag)} value={simpleMomentumFlag} />
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Simple Momentum</label>
                        <div className="my-1">
                            <div className="relative w-full lg:max-w-sm flex">
                                <select className="p-2.5  disabled:bg-slate-300   rounded-md outline-none appearance-none focus:border-indigo-600 bg-blue-100 block w-52 h-12 px-5 py-2 border  shadow-lg placeholder-black text-black focus:ring focus:outline-none" disabled={!simpleMomentumFlag}>
                                    <option className='p-2'>ReactJS Dropdown</option>
                                    <option className='p-2'>Laravel 9 with React</option>
                                    <option className='p-2'>React with Tailwind CSS</option>
                                    <option className='p-2'>React With Headless UI</option>
                                </select>
                                <input
                                    type="number"
                                    className="bg-blue-100  disabled:bg-slate-300  block w-36 mx-2 h-12 px-5 py-2 border rounded-lg  shadow-lg placeholder-black text-black focus:ring focus:outline-none"
                                    disabled={!simpleMomentumFlag} value={target.simpleMomentumFlag}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="my-4 ml-24">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " onClick={() => setTrailSLFlag(!trailSLFlag)} value={trailSLFlag} />
                        <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trail SL</label>
                        <div className="my-1">
                            <div className="relative w-full lg:max-w-sm flex">
                                <select className="p-2.5 disabled:bg-slate-300  rounded-md outline-none appearance-none focus:border-indigo-600 bg-blue-100 block w-52 h-12 px-5 py-2 border  shadow-lg placeholder-black text-black focus:ring focus:outline-none" disabled={!trailSLFlag}>
                                    <option className='p-2'>ReactJS Dropdown</option>
                                    <option className='p-2'>Laravel 9 with React</option>
                                    <option className='p-2'>React with Tailwind CSS</option>
                                    <option className='p-2'>React With Headless UI</option>
                                </select>
                                <input
                                    type="number"
                                    className="disabled:bg-slate-300 bg-blue-100 block w-36 mx-2 h-12 px-5 py-2 border rounded-lg  shadow-lg placeholder-black text-black focus:ring focus:outline-none"
                                    disabled={!trailSLFlag}
                                />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="md:w-1/3 mx-auto">
                    <button
                        className="md:flex w-full justify-center items-center text-lg mx-auto  bg-blue-600 text-white px-4 py-2 mt-4 rounded-full  hover:bg-blue-700 transition duration-300"
                        onClick={handleSubmit}
                    >
                        Final Submit
                    </button>
                </div>
            </div>
        </>
    )
}
export default Form
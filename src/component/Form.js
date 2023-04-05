import React from 'react'
import './form.css'
const Form = () => {
    return (
        <form >
            <div className='flex-container'>
                <div>
                    <label for="quantity">Total lot</label><br />
                    <input type="number" id="quantity" name="quantity" min="1" max="5" />
                </div>


                <div>
                    <label >Position</label><br />
                    <select >
                        <option value="volvo">Buy</option>
                        <option value="saab">Sell</option>
                    </select>
                </div>
                <div>
                    <label >Option Type</label><br />
                    <select  name="cars">
                        <option >Put</option>
                        <option >call</option>
                    </select>
                </div>
                <div>
                    <label >Expiray</label><br />
                    <select >
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>

                    </select>
                </div>
                <div>
                    <label >select strike criteria</label><br />
                    <select >
                        <option value="volvo">strike type</option>

                    </select>
                </div>


            </div>
            <br />
           
        </form>
    )
}

export default Form
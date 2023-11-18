import { useState } from 'react'


export default function DisplayInput(){

    return(
        <div>
            <form>
                <input type = "text" placeholder='Example: outfit for sum'/>
                <button type = "submit">
                    Ask!
                </button>

            </form>
        </div>


    );

}
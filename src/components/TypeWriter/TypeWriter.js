import React from 'react'
import Typewriter from 'typewriter-effect';
import * as style from "./styles";


const TypeWriter = () => {
    return(
        <style.content>
         <Typewriter
         options={{autoStart: true, loop: true}}
            onInit={(typewriter) => {
            typewriter.typeString('One and only place for you')
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
                console.log('All strings were deleted');
            })
            .start();
        }}
        />
        </style.content>
       
    )
}

export default TypeWriter;
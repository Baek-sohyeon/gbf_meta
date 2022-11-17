import React, { useState, useEffect, useContext } from "react";
import PortBox from "./PortBox";
import * as style from "./styles";
import minecraft from '../../image/minecraft.png';
import sandbox from '../../image/n_41@2x.png';
import Minecraft from "./Minecraft";
import Sandbox from "./Sandbox";
function Portfo() {

    const [mine, setMine] = useState(false);
    const [sand, setSand] = useState(false);

    const clickSand = () => {
        console.log(1)
        setMine(!mine)
    }

    const clickMine = () => {
        console.log(1)
        setMine(!mine)
    }
    
  useEffect(() => {
    }, []);
  

  return (
    <style.Content>
        <style.column style={{marginTop: '30px', marginLeft: '30px'}}>
            <style.row>
                <style.text1>GBF</style.text1>
                <style.text2>Portfolio</style.text2>
            </style.row>
        </style.column>
        <style.column style={{marginLeft: '30px'}}>
            <style.row>
                <div onClick={clickMine}>
                    <PortBox title={'Minecraft'} content={'MineCraft Map, MinCraft Dev'} image={minecraft}/>
                </div>
                <div onClick={clickSand}>
                    <PortBox title={'The Sandbox'} content={'NFT Assets, Metaverse XP Build'} image={sandbox}/>
                </div>
            </style.row>

        </style.column>
        {mine && <Minecraft  data={mine} setData={setMine}/>}
        {sand && <Sandbox   data={sand} setData={setSand}/>}

    </style.Content>
    
  );
}

export default Portfo;
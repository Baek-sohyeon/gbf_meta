import React, { useState, useEffect, useContext } from "react";
import Box from "./Box";
import * as style from "./styles";
import image1 from '../../components/assets/image/n_31@2x.png';
import image2 from '../../components/assets/image/n_32@2x.png';
import image3 from '../../components/assets/image/n_33@2x.png';
import image4 from '../../components/assets/image/n_34@2x.png';
import image5 from '../../components/assets/image/n_35@2x.png';
import image6 from '../../components/assets/image/n_36@2x.png';
import image7 from '../../components/assets/image/n_37@2x.png';
import image8 from '../../components/assets/image/na.png';
import image9 from '../../components/assets/image/n_39@2x.png';
import image10 from '../../components/assets/image/n_40@2x.png';
import image11 from '../../components/assets/image/n_41@2x.png';
import image12 from '../../components/assets/image/n_42_dx@2x.png';
import image13 from '../../components/assets/image/n_43@2x.png';
import image14 from '../../components/assets/image/n_44@2x.png';
import image15 from '../../components/assets/image/n_45@2x.png';
import image16 from '../../components/assets/image/n_46@2x.png';
import image17 from '../../components/assets/image/n_47@2x.png';
import image18 from '../../components/assets/image/hanmapo.png';
import Team from "../Team/Team";
import YoutubeSlider from "../YoutubeSlider/YoutubeSlider";



function ClientPartners() {
  

  return (
     <style.Content>
        <YoutubeSlider/>

        <style.column>
            <style.column>
                <style.row>
                    <style.text1>GBF META </style.text1>
                    <style.text2>TEAM</style.text2>
                </style.row>
                <Team/>
            </style.column>
        </style.column>
        <style.client>
            <style.row>
                <style.text1>GBF META </style.text1>
                <style.text2>Client</style.text2>
            </style.row>
            <style.enter>
                <style.row>
                    <Box name={image1}/>
                    <Box name={image2}/>
                    <Box name={image3}/>
                    <Box name={image4}/>
                </style.row>
                <style.row>
                    <Box name={image5}/>
                    <Box name={image6}/>
                    <Box name={image7}/>
                    <Box name={image8}/>
                </style.row>
            </style.enter>
            <style.enter>
                <style.row>
                    <Box name={image9}/>
                    <Box name={image10}/>
                </style.row>
            </style.enter>
        </style.client>

        <style.column  style={{marginTop:'60px', marginBottom:'80px'}}>
            <style.row>
                <style.text1>GBF META </style.text1>
                <style.text2>Partners</style.text2>
            </style.row>
            <style.enter>
                <style.row>
                    <Box name={image11}/>
                    <Box name={image12}/>
                    <Box name={image13}/>
                    <Box name={image14}/>
                </style.row>
                <style.row>
                    <Box name={image15}/>
                    <Box name={image16}/>
                    <Box name={image17}/>
                    <Box name={image18}/>
                </style.row>
            </style.enter>
        </style.column>
        
    </style.Content>
    
  );
}

export default ClientPartners;
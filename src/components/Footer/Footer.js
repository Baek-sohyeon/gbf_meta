import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SnsGroup from "../snsGroupButton/snsGroup";
import * as style from "./styles";


function Footer() {
  
  useEffect(() => {
    }, []);
  

  return (
    <style.Content>
        <style.Container>

            <style.company>
                <style.row>
                    <style.companyName>GBF Studio</style.companyName>
                    <style.companyName>GBF META</style.companyName>
                </style.row>
                <style.companyLoc>대한민국 서울특별시 강남구 소재<br/>E-mail.symsym99@naver.com</style.companyLoc>
            </style.company>
            <style.company>
                <style.row>
                    <style.companyName>주식회사 GBF</style.companyName>
                </style.row>
                <style.companyLoc>대한민국 서울특별시 강남구 소재<br/>E-mail.symsym99@naver.com</style.companyLoc>
            </style.company>

        </style.Container>
        <style.Logo>GBF</style.Logo>
        <SnsGroup/>
        <style.copyright>copyright 2022 GBF META.All Rights Reserved.</style.copyright>
    </style.Content>
    
  );
}

export default Footer;
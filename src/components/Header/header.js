import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../components/assets/image/n__16@2x.png'
import SnsGroup from "../snsGroupButton/snsGroup";
import * as style from "./styles";
import Button from "../Button/Button";
import homeImg from '../../components/assets/image/homeImg.png'
import centerImg from '../../components/assets/image/n__16@2x.png';
import TypeWriter from "../../components/TypeWriter/TypeWriter";

function Header() {

const [click, setClick] = useState(false)
  const navigator = useNavigate();
  
  useEffect(() => {
    }, []);
  

  return (
    <>
        <style.Header>

        <style.menuLeft>
            <style.LogoContainer>
                <style.Logo
                    src={logo}
                    onClick={() => navigator("/")}
                />
                <style.LogoTxt>
                    GBF META
                </style.LogoTxt>
            </style.LogoContainer>
        </style.menuLeft>
        <style.HamburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
        </style.HamburgerMenu>
            
        
        <style.Menu click={click}>

            <style.MenuBtn onClick={() =>{
                navigator("/")
                setClick(!click)
                }
            }>
                Home
            </style.MenuBtn>
            <style.MenuBtn onClick={() => {
                navigator("/portfolio")
                setClick(!click)
                }
            }>
                Portfolio
            </style.MenuBtn>
            <style.MenuBtn onClick={() => {
                navigator("/shop")
                setClick(!click)
                }
            }>
                Shop
            </style.MenuBtn>
            <style.MenuBtn onClick={() => {
                navigator("/education")
                setClick(!click)
                }
            }>
                Education
            </style.MenuBtn>
            <style.MenuBtn onClick={() => {
                navigator("/faqs")
                setClick(!click)
                }
            }>
                FAQs
            </style.MenuBtn>
            <SnsGroup/>
        </style.Menu>

        <style.menuRight>
            
            <Button
                name={'CONTACT US'}
                color={'rgba(255,153,0,1)'}
                background={'transparent'}
                onClick={() => {
                    navigator("/contact")
                }}
            />
        </style.menuRight>
        
        </style.Header>
        <style.Container>
            <style.mainContainer>
                <style.mainImg src={homeImg} />
                <style.centerImg src={centerImg}/>
                <style.textContainer>
                <style.text1>METAVERSE</style.text1>
                <style.text2>BUILDER STUDIO</style.text2>
                <TypeWriter/>
                </style.textContainer>
            </style.mainContainer>
        </style.Container>
      </>
  );
}

export default Header;
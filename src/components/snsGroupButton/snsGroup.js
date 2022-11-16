import React, { useState } from "react";
import * as style from "./styles";
import discord from '../../image/n_27_em@2x.png';
import instagram from '../../image/n_28_en@2x.png';
import link from '../../image/n_29_eo@2x.png';
import youtube from '../../image/n_30_ep@2x.png'

const SnsGroup = () => {
  return (
    <style.group>
        <style.snsButton src={discord}/>
        <style.snsButton src={instagram}/>
        <style.snsButton src={link}/>
        <style.snsButton src={youtube}/>
    </style.group>
  );
}

export default SnsGroup;

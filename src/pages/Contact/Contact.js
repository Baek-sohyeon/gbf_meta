import React, { useState, useEffect } from "react";
import * as style from "./styles";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import Button from "../../components/Button/Button";
import TextArea from "./TextArea";

function Contact() {
        
    const TextField = {
        borderColor: '#B9B9B9',
        borderRadius: '4px',
        resize: 'none',
        width: '100%',
        height: '300px',
        outlineColor: 'rgba(255,153,0,1)',
        boxSizing: 'border-box',
        padding: '10px'

    }


  return (
    <>
            <style.column style={{boxSizing:' border-box', padding: '30px'}}>
                    <style.row>
                    <style.text1>메타버스</style.text1>
                    <style.text2>컨텐츠 제작 문의</style.text2>
                </style.row>
                {/* <style.explain>메타버스(마인크래프트)에 대한 풍성한 도메인 널리지를 바탕으로 구성된 50여명의 메타버스 디자이너와 개발자가 10년간 수천여건 프로젝트를 진행하여 쌓은 노하우로 프로젝트를 수행해드립니다. 행사, 프로모션, 영상, 공간제작 등을 기획부터 견적, 마무리까지 모두 수행해드립니다. 이메일로 문의를 남겨주시면 더욱 빠르게 답변 드릴 수 있습니다. 답변이 늦어진다면 꼭 이메일로 문의 부탁드립니다!</style.explain> */}
                
                <style.row>
                    <style.column>
                        <style.enter>
                            <TextArea title={'업체명*'}/>
                            <TextArea title={'문의사항*'}/>
                            <TextArea title={'E-mail*'}/>

                        </style.enter>
                        <textarea required style={TextField} placeholder={'문의내용'}></textarea>
                        <style.button>문의하기</style.button>                

                    </style.column>
                </style.row>
            </style.column>

    </>
    

  );
}
export default Contact;
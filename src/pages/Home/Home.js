import React, { useState, useEffect } from "react";
import Main from '../../components/Main/Main'
import Detail from "../../components/Detail/Detail";
import Service from "../../components/Service/Service";
import Detail2 from "../../components/Detail2/Detail2";
import ClientPartners from "../../components/ClientPartners/ClientPartners";

function Home() {

  return (
    <>
      <Main/>
      <Detail/>
      <Service/>
      <Detail2/>
      <ClientPartners/>
    </>
    

  );
}
export default Home;
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { theme } from "../chakra/theme";
import '../styles/material-kit.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Header from "../components/LandingPage/Landing"
import "../firebase/clientApp";
import App from "./landing";
import dynamic from "next/dynamic";
const ChatBot = dynamic(import('../components/chatbot'), { ssr: false });

 function MyApp({ Component, pageProps }: AppProps) {
  
 
  return (
    <RecoilRoot>
    
      
         

         <ChakraProvider theme={theme}>
           
         <Layout>
           <ChatBot></ChatBot>
             <Component {...pageProps} />
           
           </Layout>
         </ChakraProvider>
         
       
      
    </RecoilRoot>
    // <RecoilRoot>
         

    //      <ChakraProvider theme={theme}>
    //        <Layout>
            
    //          <Component {...pageProps} />
    //        </Layout>
    //      </ChakraProvider>
         
    //    </RecoilRoot>
    
  );
}

export default MyApp;


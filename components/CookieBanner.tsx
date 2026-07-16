"use client";
import {useEffect,useState} from "react";
export default function CookieBanner(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{setVisible(localStorage.getItem('cwg-cookie-ok')!=='yes')},[]);
 if(!visible) return null;
 return <div className="cookie-banner"><p>We use essential cookies to improve your browsing experience.</p><div><button onClick={()=>{localStorage.setItem('cwg-cookie-ok','yes');setVisible(false)}} className="button button-gold">Accept</button><a href="/cookies">Cookie Policy</a></div></div>
}

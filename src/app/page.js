import Image from "next/image";
import styles from "./page.module.css";
import { data } from "./data";
import "./page.module.css"

export default function Home() {

  const puter = data.map(gas =>
    <li key={data.id}>
     <p className="text" style={{ fontFamily: "var(--font-geist-abi)", fontWeight:  900 }}> {gas.text}</p>
       <p>{gas.translation_id}</p>
    </li>
   
  )
  return (
    <>
    <h1>hello world</h1>
    <div className="main"><ul>{puter}</ul></div>
    </>
     );
}

import { useState } from "react"

function App() {
  const [color, setColor] = useState("")

  return (
   <div className="w-full h-screen duration-200 "
   style={{background : color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <h1>Pleas Select any color and change the background color</h1>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button
      onClick={() => setColor ("red")}
       className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "red"}}>Red</button>
      <button 
      onClick={() => setColor ("blue")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "blue"}}>Blue</button>
      <button
      onClick={() => setColor ("LightSalmon")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "LightSalmon"}}>LightSalmon</button>
      <button 
      onClick={() => setColor ("Pink")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "Pink"}}>Pink</button>
      <button
      onClick={() => setColor ("OrangeRed")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "OrangeRed"}}>OrangeRed</button>
      <button
      onClick={() => setColor ("Yellow")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "Yellow"}}>Yellow</button>
      <button
      onClick={() => setColor ("Aqua")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "Aqua"}}>Aqua</button>
      <button
      onClick={() => setColor ("Maroon")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "Maroon"}}>Maroon</button>
      <button
      onClick={() => setColor ("Lime")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "Lime"}}>Lime</button>
      <button
      onClick={() => setColor ("PaleVioletRed")}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{backgroundColor : "PaleVioletRed"}}>PaleVioletRed</button>
    </div>
    </div>
   </div> 
  )
}

export default App

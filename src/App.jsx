import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Accordian from './components/Accordian'
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [selectedColor, setselectedColor] = useState("#4f6174");

  const showAlert = (msg,type)=>{
    setAlert({
      msg : msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const handleColorchange = ()=>{
    let color = document.getElementById("favcolor")
    let colorValue = color.value
    // document.body.style.backgroundColor = colorValue
    setselectedColor(colorValue);
    
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor= selectedColor
      showAlert("Dark Mode has been enabled","success")
      }
      else{
        setMode("light")
        document.body.style.backgroundColor="#fff"
        showAlert("Light Mode has been enabled","success")
        }
  }


  return (
    <div>
      <Navbar heading="Ruturaj" about="About Page" mode={mode} handleColorchange={handleColorchange} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Content mode={mode} showAlert={showAlert} />
      <Accordian mode={mode} selectedColor={selectedColor}/>
    </div>
  )
}

export default App

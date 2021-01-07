import React from "react"
import "./style.css"
import Img from "../images/webpack.png"

const App = () => {
  return (
    <div className="title-box">
      <h1 className="title">Hello Webpack</h1>
      <div className="image-container">
        <img src={Img} />
      </div>
    </div>
  )
}

export default App

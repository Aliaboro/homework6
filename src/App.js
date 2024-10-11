import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {

    const [places, setPlaces] = useState(data);
    const [showText, setShowText] = useState(false);
    const removePlace = (id) => {
      let newPlaces = places.filter((place) => place.id !== id);
      setPlaces(newPlaces)
    }
    const showTextClick = (item) => {
       item.showMore = !item.showMore
       setShowText(!showText)
    }
  
    return(<div>
      <div className="container">
        <h1> Топ {places.length} мест для посещения в Ереване</h1>
      </div>
     {places.map((item => {
      const {id, placeName, description, image, showMore } = item;
      return(
      <div key={id}>
        <div className="container">
          <h2>{id} - {placeName} </h2>
          <p> {showMore ? description : description.substring(0,190) + "..."}
          <button onClick ={() => showTextClick(item)}>{showMore ? "Свернуть текст" : "Развернуть текст"}</button></p>
          <img src={image} alt="Place in Erevan" width="300px"/>
        </div>
  
        <div className="container">
          <button className="btn" onClick={() => removePlace(id)}>Удалить из списка</button>
        </div>
  
      </div>
      )
    }))}
    {places.length > 0 && (
    <div className="container">
    <button className="btn2" onClick={() => setPlaces([])}>Удалить все</button>
    </div>
    )}
    </div>
    )
  }
  
  export default App;
  
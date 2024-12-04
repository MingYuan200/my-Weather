import "./App.css";
import ShowCity from "./ShowCity";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  //非同步讀取json資料
  const [weatherlist, setWeatherlist] = useState([]);

  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');

      // json連結要是公開的才可以
      const data = await axios.get('https://mingyuan200.github.io/my-Weather/json/F-C0032-001.json');

      const { location } = data.data.cwaopendata.dataset;
      // 解構出來才給下面能使用
      setWeatherlist(location);
      console.log(location);


      // locationName =>縣市名稱
      // elementName => Wx =>天氣概況
      // elementName => PoP =>降雨機率
    })()
  }, [])

  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="container">
          {
            weatherlist.map((city) => {
              return (
                <div className="item" key={city.locationName}>
                  <h3>{city.locationName}</h3>
                  <ShowCity city={city} />

                </div>
              )
            })
          }

        </div>
      </div>


    </>
  )
}
export default App
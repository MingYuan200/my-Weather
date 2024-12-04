import { useEffect, useState } from "react"
import axios from "axios";
import "./App.css";
import { IoUmbrella } from "react-icons/io5";
import ShowCity from "./ShowCity";


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
                  <div className="content">
                    {
                      city.weatherElement[0].time.map((time, index) => {
                        return (
                          <div className="item2" key={index}>
                            <p>
                              {
                                new Date(time.startTime).toLocaleString(undefined, { day: "numeric" })
                              }
                            </p>
                            <p>
                              {
                                new Date(time.startTime).toLocaleString(undefined, {
                                  hour: "numeric",
                                  minute: "numeric"
                                })
                              }
                              <br />~<br />
                              {
                                new Date(time.endTime).toLocaleString(undefined, {
                                  hour: "numeric",
                                  minute: "numeric"
                                })
                              }
                            </p>
                            <figure>
                              <img src={`weathericon/${time.parameter.parameterName}.svg`} alt="" />
                            </figure>
                            <p>
                              {time.parameter.parameterName}
                            </p>

                            <p>
                              <IoUmbrella />
                              {city.weatherElement[4].time[index].parameter.parameterName}%
                              </p>
                          </div>
                        )

                      })
                    }

                  </div>
                </div>
              )
            })
          }
        </div>





        <div className="row">
          {/* <ShowCity /> */}

          {/* {
            location.map((city) => {
              return (
                <div className="col">
                  <div className="card">
                    <div className="card-title">{city.locationName}</div>
                    <div className="card-body">
                      <div className="row2">

                        <div className="col2">
                          <p className="p1">2日</p>
                          <p>上午6:00<br />~<br />下午6:00</p>
                          <figure>
                            <img src="weathericon/陰有雨.svg" alt="" /></figure>
                          <p>晴時多雲</p>
                          <p><IoUmbrella />10%</p>
                        </div>

                        <div className="col2">
                          <p className="p1">2日</p>
                          <p>上午6:00<br />~<br />下午6:00</p>
                          <figure>
                            <img src="weathericon/多雲.svg" alt="" /></figure>
                          <p>晴時多雲</p>
                          <p><IoUmbrella />10%</p>
                        </div>

                        <div className="col2">
                          <p className="p1">2日</p>
                          <p>上午6:00<br />~<br />下午6:00</p>
                          <figure>
                            <img src="weathericon/多雲時陰.svg" alt="" /></figure>
                          <p>晴時多雲</p>
                          <p><IoUmbrella />10%</p>
                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              )
            })
          } */}

          {/* <div className="col">
            <div className="card">
              <div className="card-title">台北市</div>
              <div className="card-body">
                <div className="row2">

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="weathericon/陰有雨.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="weathericon/多雲時陰.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                </div>
              </div>


            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-title">新北市</div>
              <div className="card-body">
                <div className="row2">

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="weathericon/多雲時晴.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                </div>
              </div>


            </div>
          </div> */}

        </div>

      </div>

    </>
  )
}
export default App
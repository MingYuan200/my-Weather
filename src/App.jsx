import { useEffect } from "react"
import axios from "axios";
import "./App.css";
import { IoUmbrella } from "react-icons/io5";


function App() {

  //非同步讀取json資料
  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');
      const data = await axios.get('https://github.com/MingYuan200/myReact/blob/main/my-react-app1/src/F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;
      console.log(location);
    })
  }, [])


  return (
    <>
      <div className="wrap">

        <h2>36小時天氣預報</h2>


        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-title">台北市</div>
              <div className="card-body">
                <div className="row2">

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="../weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="../weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="../weathericon/多雲.svg" alt="" /></figure>
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
                  <img src="../weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="../weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                <div className="col2">
                <p className="p1">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <figure>
                  <img src="../weathericon/多雲.svg" alt="" /></figure>
                <p>晴時多雲</p>
                <p><IoUmbrella />10%</p>
                </div>

                </div>
              </div>


            </div>
          </div>

        </div>

      </div>

    </>
  )
}
export default App
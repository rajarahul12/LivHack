import React, { Component } from 'react'
import listReactFiles from 'list-react-files'
import "./Report.css";
export default class Recommendations extends Component {


  render() {
    const {lastValue} = this.props;
    const locations = [
        [
            "../../Components/1/703.363.82.jpg",
            "../../Components/1/001.024.52.jpg",
            "../../Components/1/390.416.60.jpg",
            "../../Components/1/790.226.93.jpg",
            "../../Components/1/003.188.81.jpg",
            "../../Components/1/302.332.44.jpg",
            "../../Components/1/402.753.42.jpg",
            "../../Components/1/601.963.58.jpg",
            "../../Components/1/103.203.41.jpg"
        ],
        [
            "../../Components/2/203.063.87.jpg",
            "../../Components/2/703.057.00.jpg",
            "../../Components/2/202.743.48.jpg",
            "../../Components/2/002.500.46.jpg",
            "../../Components/2/690.698.98.jpg",
            "../../Components/2/090.319.12.jpg",
            "../../Components/2/902.290.17.jpg",
            "../../Components/2/802.396.82.jpg",
            "../../Components/2/",
            "../../Components/2/",
            "../../Components/2/",
            "../../Components/2/",
            "../../Components/2/"
            
        ],
        [
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/",
            "../../Components/3/"
        ],
        [
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/",
            "../../Components/4/"
        ],
        [
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/",
            "../../Components/5/"
        ],
        [
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/",
            "../../Components/6/"
        ],
        [
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/",
            "../../Components/7/"
        ],
        [
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/",
            "../../Components/8/"
        ],
        [
            "./690_272_95.jpg",
            "./390.024.18.jpg",
            "./602.611.22.jpg",
            "./903.347.30.jpg",
            "./001.652.13.jpg",
            "./501.784.11.jpg",
            "./991.278.11.jpg",
            "./991.278.06.jpg",
            "./191.197.25.jpg",
            "./302.397.12.jpg",
            "./402.675.68.jpg",
            "./503.069.89.jpg",
            "./002.451.30.jpg",
            "./302.868.45.jpg",
            "./402.612.55.jpg",
            "./690.106.19.jpg",
            "./190.526.21.jpg",
            "./091.302.38.jpg",
            "./903.007.25.jpg"
        ],
        [
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/",
            "../../Components/10/"
        ]
    ]

    return (
      <div>
            <img src={require("./690_272_95.jpg")} alt=""  />
            <img src={require("./390.024.18.jpg")} alt=""  />
            <img src={require("./602.611.22.jpg")} alt=""  />
            <img src={require("./903.347.30.jpg")} alt=""  />
            <img src={require("./001.652.13.jpg")} alt=""  />
            <img src={require("./501.784.11.jpg")} alt=""  />
            <img src={require("./991.278.11.jpg")} alt=""  />
            <img src={require("./991.278.06.jpg")} alt=""  />
            <img src={require("./191.197.25.jpg")} alt=""  />
            <img src={require("./302.397.12.jpg")} alt=""  />
            <img src={require("./402.675.68.jpg")} alt=""  />
            <img src={require("./503.069.89.jpg")} alt=""  />
            <img src={require("./002.451.30.jpg")} alt=""  />
            <img src={require("./302.868.45.jpg")} alt=""  />
            <img src={require("./402.612.55.jpg")} alt=""  />
            <img src={require("./690.106.19.jpg")} alt=""  />
      </div>
    )
  }
}

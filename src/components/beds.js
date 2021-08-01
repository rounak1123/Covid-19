import React, { useEffect, useState } from "react";
import "./beds.css";
import State from "./bedscomp1";
function Beds() {
  const [data, setData] = useState([null]);
  useEffect(() => {
    fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1.data.regional);

        setData(res1.data.regional);
      });
  }, []);

  // console.log(data);
  return (
    <div>
      <h1 className="headBeds">Number of Beds and Hospitals available</h1>
      <div className="tableHead">
        <div className="statename">State</div>
        <div className="stateBeds">Total Beds</div>{" "}
        <div className="stateBeds">Total Hospitals</div>
      </div>
      <div className="tble">
        <State dat={data} id={0} />
        <State dat={data} id={1} />
        <State dat={data} id={2} />
        <State dat={data} id={3} />
        <State dat={data} id={4} />
        <State dat={data} id={5} />
        <State dat={data} id={6} />
        <State dat={data} id={7} />
        <State dat={data} id={8} />
        <State dat={data} id={9} />
        <State dat={data} id={10} />
        <State dat={data} id={11} />
        <State dat={data} id={12} />
        <State dat={data} id={13} />
        <State dat={data} id={14} />
        <State dat={data} id={15} />
        <State dat={data} id={16} />
        <State dat={data} id={17} />
        <State dat={data} id={18} />
        <State dat={data} id={19} />
        <State dat={data} id={20} />
        <State dat={data} id={21} />
        <State dat={data} id={22} />
        <State dat={data} id={23} />
        <State dat={data} id={24} />
        <State dat={data} id={25} />
        <State dat={data} id={26} />
        <State dat={data} id={27} />
        <State dat={data} id={28} />

        <State dat={data} id={36} />
      </div>
    </div>
  );
}

export default Beds;

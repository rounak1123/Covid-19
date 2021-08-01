import React, { useState, useEffect } from "react";

function State(props) {
  //console.log(props);

  const arr = [...props.dat];
  const [dataa, setDataa] = useState(arr);
  const [obj, setObj] = useState({});

  useEffect(() => {
    setObj({ ...props.dat[props.id] });
  }, [props.dat]);
  console.log(obj);
  return (
    <div>
      <div className="dta11">
        <div className="statename">{obj.state}</div>
        <div className="stateBeds">{obj.totalBeds}</div>
        <div className="stateBeds">{obj.totalHospitals}</div>
      </div>
    </div>
  );
}

export default State;

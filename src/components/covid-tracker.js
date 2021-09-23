import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./covid-tracker.css";
const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      console.log(res);
      const actualData = await res.json();
      //console.log(actualData.statewise[15]);
      setData(actualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      {/* <h1>INDIA COVID-19 Dashboard</h1> */}
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5">🔴 LIVE</h1>
          <h1 className="mb-5">
            <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
          </h1>
          <div className="table-responsive">
            <table className="table-hover table">
              <thead className="thead-dark">
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Active</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {data.map((curElem, index) => {
                  return (
                    <tr key={index}>
                      <th>{curElem.state}</th>
                      <td>{curElem.confirmed}</td>
                      <td>{curElem.recovered}</td>
                      <td>{curElem.deaths}</td>
                      <td>{curElem.active}</td>
                      <td>{curElem.lastupdatedtime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;

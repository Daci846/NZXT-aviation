import "./App.css";
import RadialGauge from "./components/RadialGauge";
import BarGauge from "./components/BarGauge";
import ColumnGauge from "./components/ColumnGauge";

import useMonitoring from "./hooks/useMonitoring";
import SplineAreaChart from "./components/SplineAreaChart";

{
  /* <h2>CPU Temp: {cpu?.temperature}</h2>
<h2>Liquid Temp: {kraken?.temperature}</h2>
<h2>GPU Temp: {gpu?.temperature}</h2>
<h2>AIO Pump: {cpu?.fan}</h2>
<h2>GPU Fan: {gpu?.fan}</h2>
<h2>CPU Freq: {cpu?.frequency}</h2>
<h2>GPU Freq: {gpu?.frequency}</h2>
<h2>RAM total: {ram?.totalSize}</h2>
<h2>CPU Load: {cpu?.load}</h2>
<h2>GPU Load: {gpu?.load}</h2>
<h2>RAM Load: {ram?.inUsePercent}</h2>
<h2>CPU Watt: {cpu?.watts}</h2>
<h2>GPU Watt: {gpu?.watts}</h2> */
}

const App = () => {
  const { cpu, gpu, ram, kraken, cpuWatts, gpuWatts } = useMonitoring();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          left: "41%",
        }}
      >
        <p className="indicator-label">LIQUID</p>
        <p>{kraken?.temperature}°C</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <RadialGauge data={cpu?.temperature} label={"CPU"} />
        <RadialGauge data={gpu?.temperature} label={"GPU"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            height: "250px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: "3rem",
          }}
        >
          {/* <div className="label-data-container">
            <p className="indicator-label">PUMP RPM</p>
            <p>{cpu?.fan || `--`}</p>
          </div>
          <div className="label-data-container">
            <p className="indicator-label">GPU RPM</p>
            <p>{gpu?.fan || `--`}</p>
          </div>
          <div className="label-data-container">
            <p className="indicator-label">CPU FREQ</p>
            <p>{cpu?.frequency || `--`}</p>
          </div>
          <div className="label-data-container">
            <p className="indicator-label">GPU FREQ</p>
            <p>{gpu?.frequency || `--`}</p>
          </div> */}
          <SplineAreaChart cpuWatts={cpuWatts} gpuWatts={gpuWatts} />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingRight: "3rem",
          }}
        >
          <BarGauge data={cpu?.load} />
          <h3>CPU Load</h3>
          <BarGauge data={gpu?.load} />
          <h3>GPU Load</h3>
          <BarGauge data={ram?.inUsePercent} />
          <h3>RAM Load</h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ColumnGauge data={ram?.inUsePercent} />
      </div>
    </>
  );
};

export default App;

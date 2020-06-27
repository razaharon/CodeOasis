import React from "react";
import { Chart } from "react-google-charts";
import "./VolatilityChart.css";
import { Paper } from "@material-ui/core";

export default function VolatilityChart() {
  return (
    <React.Fragment>
      <Paper className="chart-container">
        <div className="chart-header">
          <h1>D</h1>
          <h3>Enter Volatility</h3>
        </div>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div style={{ textAlign: "center" }}>Loading Chart</div>}
          data={[
            ["x", "Peer #1", "Peer #2"],
            [0, 7, 5],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]}
          options={{
            hAxis: {
              title: "Volatility (%)",
              titleTextStyle: { italic: false, bold: true },
            },
            vAxis: {
              title: "Common share fair value ($)",
              titleTextStyle: { italic: false, bold: true },
            },
            series: {
                0: { color: 'rgb(15,109,73)' }
            },
            curveType: "function",
          }}
        />
      </Paper>
    </React.Fragment>
  );
}

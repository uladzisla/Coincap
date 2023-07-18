import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../../redux/historyCurrentStore";
const Grafick = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchHistory());
  // }, [dispatch]);
  const data = useSelector((store) => store.historyStore.data);
  // console.log(data);
  const newData = data.filter((item) => (item.priceUsd ? item.priceUsd : ""));
  // console.log(newData);
  const lineChartData = {
    labels: [
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "1",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
    ],
    datasets: [
      {
        data: data.map((item) => item.priceUsd),
        label: "Dinamics",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0,
      },
    ],
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "one year",
          fontSize: 20,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top", //Position of the legend.
        },
      }}
      data={lineChartData}
    />
  );
};
export default Grafick;

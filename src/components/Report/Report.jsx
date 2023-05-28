import React from "react";
import Report_Section from "../Sections/Report_Section";
import BarChart from "../Charts/BarChart";
import ZoomableChart from "../Charts/ZoomableChart";
import PolarChart from "../Charts/PolarChart";
import {
  hourly_bar_chart_data,
  monthly_bar_chart_data,
  weekly_bar_chart_data,
} from "../../pages/data";

const Report = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Report_Section
        title=""
        chart={<BarChart data={weekly_bar_chart_data} color="#0289f7" />}
      />{" "}
      <Report_Section
        title=""
        chart={<BarChart data={hourly_bar_chart_data} color="#7a33de" />}
      />{" "}
      <Report_Section title="" chart={<ZoomableChart />} />{" "}
      <Report_Section
        title=""
        chart={<BarChart data={monthly_bar_chart_data} color="#57dbde" />}
      />{" "}
      <Report_Section title="" chart={<PolarChart />} /> 
    </div>
  );
};

export default Report;

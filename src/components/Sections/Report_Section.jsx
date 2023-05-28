import React from "react";

const Report_Section = ({ title, chart, grid }) => {
  return (
    <div className={`border-4 rounded-xl p-3 ${grid}`}>
      <div className="text-right px-3 mb-4">
        <span>{title}</span>
      </div>
      <div>
        {/* <div className="w-10"> */}
        {chart}
        {/* </div> */}
        {/* <CircleChart /> */}
      </div>
    </div>
  );
};

export default Report_Section;

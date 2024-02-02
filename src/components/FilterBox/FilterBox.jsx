import { useState, useEffect } from "react";
import { dataOption, months, years } from "../../utlis/DataOptions";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setSelectMonth] = useState("January");
  const [selectedYear, setSelectYear] = useState(2024);

  const monthsOption = () => dataOption(months);
  const yearOption = () => dataOption(years);

  const handleChangeMonth = (e) => {
    return setSelectMonth(e.target.value);
  };
  const handleChangeYear = (e) => {
    return setSelectYear(Number(e.target.value));
  };

  useEffect(() => {
    const updateParent = () => {
      getMonthYear(selectedMonth, selectedYear);
    };

    updateParent();
  }, [selectedMonth, selectedYear, getMonthYear]);

  return (
    <div>
      <form className="filter-card">
        <div className="wrapper">
          <div className="date">
            <label htmlFor="month">Month :</label>
            <select value={selectedMonth} onChange={handleChangeMonth}>
              {monthsOption()}
            </select>
          </div>
          <div className="date">
            <label htmlFor="year">Year :</label>
            <select value={selectedYear} onChange={handleChangeYear}>
              {yearOption()}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;

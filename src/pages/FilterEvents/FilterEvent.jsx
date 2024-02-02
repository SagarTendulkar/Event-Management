import SearchEventList from "../../components/SearchEventList/SearchEventList";
import FilterBox from "../../components/FilterBox/FilterBox";
import { useCallback, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./FilterEvent.css";
const FilterEvent = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    selectedYear: null,
  });

  const getMonthYear = useCallback((selectedMonth, selectedYear) => {
    setMonthYear({ selectedMonth, selectedYear });
  }, []);
  return (
    <>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear} />
        <SearchEventList monthYear={monthYear} />
      </div>
    </>
  );
};

export default FilterEvent;

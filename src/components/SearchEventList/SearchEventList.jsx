import EventCard from "../EventCard/EventCard";
import { eventList } from "../../utlis/EventDataBase";
import "./SearchEventList.css";

const SearchEventList = ({ monthYear }) => {
  const { selectedMonth, selectedYear } = monthYear;
  const filterEvents = eventList.filter((eventDetail) => {
    return (
      eventDetail.date.year === selectedYear &&
      eventDetail.date.month === selectedMonth
    );
  });
  const renderEvents = () => {
    return filterEvents.map(
      ({ id, heading, date, location, description, img }) => {
        return (
          <EventCard
            key={id}
            id={id}
            date={date}
            heading={heading}
            location={location}
            description={description}
            img={img}
          />
        );
      }
    );
  };
  return (
    <div className="event-search">
      {filterEvents.length > 0 ? renderEvents() : <h2>No events found</h2>}
    </div>
  );
};

export default SearchEventList;

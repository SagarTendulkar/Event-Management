import EventCard from "../../components/EventCard/EventCard";
import Navigation from "../../components/Navigation/Navigation";
import { eventList } from "../../utlis/EventDataBase";
import "./EventList.css";

const renderEvents = () => {
  return eventList.map(({ id, heading, date, location, description, img }) => {
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
  });
};
const EventList = () => {
  return (
    <div>
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? renderEvents() : <h2>No Events Found</h2>}
        </div>
      </div>
    </div>
  );
};

export default EventList;

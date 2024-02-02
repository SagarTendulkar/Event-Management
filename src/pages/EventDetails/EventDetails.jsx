import { useParams } from "react-router-dom";
import { eventList } from "../../utlis/EventDataBase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);

  const findEvent = eventList.find((eventData) => eventData.id === numId);
  console.log(findEvent);
  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={findEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {findEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">{findEvent.date.month}</span>
              <span className="font-weight-med">{findEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {findEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {findEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

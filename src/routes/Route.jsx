import EventDetails from "../pages/EventDetails/EventDetails";
import EventList from "../pages/EventList/EventList";
import FilterEvent from "../pages/FilterEvents/FilterEvent";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvent /> },
  { path: "/events/:id", element: <EventDetails /> },
];

import EventItem from "./event-item";

function EventList(props) {
  return (
    <div>
      <ul>
        {items.map((event) => (
          <EventItem />
        ))}
      </ul>
    </div>
  );
}

export default EventList;

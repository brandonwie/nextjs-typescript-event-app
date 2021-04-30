import EventItem, { EventItemProps } from './event-item';

export interface EventListProps {
  data: EventItemProps[];
}

const EventList: React.FC<EventListProps> = (
  props: EventListProps
): JSX.Element => {
  const { data } = props;

  return (
    <>
      {data.map((event) => {
        return <EventItem key={event.id} {...event} />;
      })}
    </>
  );
};

export default EventList;

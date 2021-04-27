import { Fragment } from 'react';
import EventItem, { EventItemProps } from './event-item';

export interface EventListProps {
  data: EventItemProps[];
}

const EventList: React.FC<EventListProps> = (
  props: EventListProps
): JSX.Element => {
  const { data } = props;

  return (
    <Fragment>
      {data.map((event) => {
        return <EventItem key={event.id} {...event} />;
      })}
    </Fragment>
  );
};

export default EventList;

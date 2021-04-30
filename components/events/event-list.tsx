import { FC } from 'react';
import EventItem, { EventItemProps } from './event-item';

export interface EventListProps {
  data: EventItemProps[];
}

const EventList: FC<EventListProps> = (props: EventListProps): JSX.Element => {
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

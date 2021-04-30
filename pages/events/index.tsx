import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';

const AllEventsPage: React.FC = (): JSX.Element => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    console.log(fullPath);

    router.push(fullPath);
  };

  return (
    <Container
      maxWidth="md"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <EventsSearch onSearch={findEventsHandler} />
      <EventList data={events} />
    </Container>
  );
};

export default AllEventsPage;

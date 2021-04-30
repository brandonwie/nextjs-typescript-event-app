import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { Container } from '@material-ui/core';

const AllEventsPage: React.FC = (): JSX.Element => {
  const events = getAllEvents();

  return (
    <Container
      maxWidth="md"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <EventsSearch />
      <EventList data={events} />
    </Container>
  );
};

export default AllEventsPage;

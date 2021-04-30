import { getAllEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { EventItemProps } from '../components/events/event-item';
import { Container } from '@material-ui/core';

const HomePage: React.FC = (): JSX.Element => {
  const allEvents: Array<EventItemProps> = getAllEvents();

  return (
    <Container maxWidth="md" className="home-container">
      <EventList data={allEvents} />
    </Container>
  );
};

export default HomePage;

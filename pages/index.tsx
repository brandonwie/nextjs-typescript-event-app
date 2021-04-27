import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { EventItemProps } from '../components/events/event-item';
import { Container } from '@material-ui/core';

const HomePage: React.FC = (): JSX.Element => {
  const featuredEvents: Array<EventItemProps> = getFeaturedEvents();

  return (
    <Container maxWidth='md' className='home-container'>
      <EventList data={featuredEvents} />
    </Container>
  );
};

export default HomePage;

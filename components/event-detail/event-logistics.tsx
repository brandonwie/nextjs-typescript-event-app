import LogisticsItem from './logistics-item';

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<EventLogisticsProps> = (
  props: EventLogisticsProps
): JSX.Element => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section>
      <div>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul>
        <LogisticsItem>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;

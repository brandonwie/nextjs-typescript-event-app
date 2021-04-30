import classes from './event-logistics.module.css';
import LogisticsItem from './logistics-item';
import { FC } from 'react';
import {
  Event as EventIcon,
  LocationOnOutlined as LocationIcon,
} from '@material-ui/icons';

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: FC<EventLogisticsProps> = ({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps): JSX.Element => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<EventIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<LocationIcon />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;

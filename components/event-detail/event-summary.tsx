import classes from './event-summary.module.css';
import { FC } from 'react';
interface EventSummaryProps {
  title: string;
}

const EventSummary: FC<EventSummaryProps> = (
  props: EventSummaryProps
): JSX.Element => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;

import { FC } from 'react';
import ButtonIcon from '../../layout/ButtonIcon';
import classes from './results-title.module.css';

interface ResultsTitleProps {
  date: Date;
}

const ResultsTitle: FC<ResultsTitleProps> = ({
  date,
}: ResultsTitleProps): JSX.Element => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonIcon link="/events">Show all events</ButtonIcon>
    </section>
  );
};

export default ResultsTitle;

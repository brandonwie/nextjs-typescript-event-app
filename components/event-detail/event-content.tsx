import classes from './event-content.module.css';
import { FC } from 'react';

const EventContent: FC = (props): JSX.Element => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import {
  Event as EventIcon,
  LocationOnOutlined as LocationIcon,
} from '@material-ui/icons';
import ButtonIcon from '../../layout/ButtonIcon';

export interface EventItemProps {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginBottom: 10,
    borderRadius: 15,
  },
  media: {
    height: 200,
    width: 400,
    marginBottom: 10,
  },
});

const EventItem: React.FC<EventItemProps> = (
  props: EventItemProps
): JSX.Element => {
  const classes = useStyles();
  const { id, title, description, location, date, image, isFeatured } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={title} />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            color="textSecondary"
          >
            <EventIcon
              style={{
                verticalAlign: 'top',
                marginRight: 5,
                width: 20,
              }}
            />
            {humanReadableDate}
          </Typography>
          <div style={{ display: 'flex' }}>
            <LocationIcon
              style={{
                marginTop: -2,
                marginRight: 5,
                width: 20,
              }}
              color="action"
            />
            <Typography
              gutterBottom
              variant="subtitle1"
              component="span"
              color="textSecondary"
              style={{
                verticalAlign: 'top',
                whiteSpace: 'pre-line',
                lineHeight: 1.2,
              }}
            >
              {formattedAddress}
            </Typography>
          </div>
        </CardActionArea>
        <CardActions className="event-item-button">
          <ButtonIcon link={exploreLink}>Explore</ButtonIcon>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default EventItem;

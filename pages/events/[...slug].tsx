import { FC, useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { Container } from '@material-ui/core';
import ResultsTitle from '../../components/events/results-title';
import ButtonIcon from '../../layout/ButtonIcon';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FilteredEventsPage: FC = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, []);

  const filterData = router.query.slug;
  // slug is an array of param items
  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Container style={{ marginTop: 80 }}>
        {open && (
          <Alert severity="error" style={{ width: '50%', marginBottom: 10 }}>
            Invalid date value!
          </Alert>
        )}

        <div className="center">
          <ButtonIcon link="/events">Show All Events</ButtonIcon>
        </div>
      </Container>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Container style={{ marginTop: 80 }}>
        {open && (
          <Alert severity="error" style={{ width: '50%', marginBottom: 10 }}>
            No events found for the chosen filter!
          </Alert>
        )}

        <div className="center">
          <ButtonIcon link="/events">Show All Events</ButtonIcon>
        </div>
      </Container>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Container maxWidth="md" className="home-container">
      <ResultsTitle date={date} />
      <EventList data={filteredEvents} />
    </Container>
  );
};

export default FilteredEventsPage;

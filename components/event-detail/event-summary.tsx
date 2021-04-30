interface EventSummaryProps {
  title: string;
}

const EventSummary: React.FC<EventSummaryProps> = (
  props: EventSummaryProps
): JSX.Element => {
  const { title } = props;

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;

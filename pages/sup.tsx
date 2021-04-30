import { Button } from '@material-ui/core';
import { FC, Fragment } from 'react';

interface SupProps {
  message: string;
}

const Sup: FC<SupProps> = ({ message }: SupProps) => {
  return (
    <Fragment>
      <div style={{ marginTop: '65px' }}>
        <button type="button">I am boring as f</button>
        <Button color="primary" variant="contained">
          {message}
        </Button>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      message: 'C u',
    },
  };
};

export default Sup;

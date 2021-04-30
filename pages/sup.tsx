import { Button } from '@material-ui/core';
import { FC, Fragment } from 'react';

const Sup: FC = () => {
  return (
    <Fragment>
      <div style={{ marginTop: '65px' }}>
        <button type="button">I am boring as f</button>
        <Button color="primary" variant="contained">
          I am super cool
        </Button>
      </div>
    </Fragment>
  );
};

export default Sup;

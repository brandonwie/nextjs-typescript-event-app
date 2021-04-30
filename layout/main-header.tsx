import { FC } from 'react';
import { AppBar, Theme, Toolbar, Typography, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 64,
    },
    title: {
      marginLeft: 15,
      marginRight: 20,
      fontWeight: 'bold',
    },
  })
);

const MainHeader: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link href="/" color="inherit">
                Next Events
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link href="/events" color="inherit">
                Browse All Events
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

export default MainHeader;

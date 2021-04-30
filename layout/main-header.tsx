import { FC } from 'react';
import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 80,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0.1,
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
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="inherit">
                Next
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link href="/" color="inherit">
                Browse All Events
              </Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

export default MainHeader;

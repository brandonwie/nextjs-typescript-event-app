import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const MainHeader: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              News
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

export default MainHeader;

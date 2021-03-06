import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem } from '@material-ui/core';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <List disablePadding>
          <ListItem disableGutters className={classes.logoContainerItem}>
            <div className={classes.logoContainer}>
              {/* <a href="/" title="thefront">
                <Image
                  className={classes.logoImage}
                  src="/images/logos/terra-luna.svg"
                  alt="Doge Kwon Inu"
                  lazy={false}
                />
              </a> */}
            </div>
          </ListItem>
          <ListItem disableGutters>
            <IconButton className={classes.socialIcon}>              
              <Image
                  className={classes.socialIcon}
                  src="/images/logos/poo.svg"
                  alt="Poo Coin"
                />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <Image
                  className={classes.socialIcon}
                  src="/images/logos/bsc.svg"
                  alt="BSC"
                />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <Image
                  className={classes.socialIcon}
                  src="/images/logos/pancake.svg"
                  alt="Pancake"
                />
            </IconButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

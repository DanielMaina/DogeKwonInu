import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  lastGrid: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '40%',
    },
  },
}));

const Customization = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        label=""
        title="Tokenomics"
        subtitle="0.5% Max Wallet"
        align="center"
        // ctaGroup={[
        //   <Button variant="contained" color="primary" size="large">
        //     Start now
        //   </Button>,
        //   <Button variant="outlined" color="primary" size="large">
        //     Learn more
        //   </Button>,
        // ]}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6}>
          <Grid container justif="center" alignItems="center">
            <Image
              src="/images/illustrations/IMG_6597.png"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
            <SectionHeader
            subtitle="2% auto-liquidity (burned forever)"
            subtitle2="1% reflections (native token)"
            align="left"
            disableGutter
            titleVariant="h3"
          />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            justif="center"
            alignItems="center"
            className={classes.lastGrid}
          >
            <Image
              src="/images/illustrations/IMG_6598.jpg"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
            <SectionHeader
            subtitle="99% circulatory supply"
            subtitle2="1% dev fee"
            align="left"
            disableGutter
            titleVariant="h3"
          />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Customization.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Customization;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Icon } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Roadmap"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 2 : 2}>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            withShadow
            liftUp
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.fontWeight900}
                >
                  Step 1
                </Typography>
              </div>
            }
            features={[
              'Whitepaper',
              'Meme Comp',
              'Stealth Launch',
              'CMC & CG Listings',
              'Start Community',
              'Coinsniper Ads',
              'Buy backs',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            liftUp
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.fontWeight900}
                >
                  Step 2
                </Typography>
              </div>
            }
            features={[
              'Partnerships',
              'Luna Charity',
              'Dextool Trending',
              'CMC Trending',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            liftUp
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.fontWeight900}
                >
                  Step 3
                </Typography>
              </div>
            }
            features={[
              'Influencers',
              'Billboard ads',
              'NFT launch',
              'DEX launch',
              'To be continued...'
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Pricings;

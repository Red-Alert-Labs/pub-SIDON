import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { LOADING } from '../../utils/constants';

const Loader = ({ phase }) => {
  if (phase === LOADING) {
    return (
      <LinearProgress style={{ zIndex: 999 }} />
    );
  }
  return null;
};

Loader.propTypes = {
  phase: PropTypes.string,
};

const mapStateToProps = ({ botsListStore }) => botsListStore;

export default connect(mapStateToProps)(Loader);

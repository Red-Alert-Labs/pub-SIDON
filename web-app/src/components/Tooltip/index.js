import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/tooltip';

class GETooltip extends React.Component {
    static propTypes = {
      children: PropTypes.node,
      classes: PropTypes.object,
      placement: PropTypes.string,
      active: PropTypes.bool,
      title: PropTypes.string,
    }

    state = {
      arrowRef: null,
    };

      handleArrowRef = (node) => {
        this.setState({
          arrowRef: node,
        });
      };

      render() {
        const {
          children, classes, placement, active, title,
        } = this.props;
        const { arrowRef } = this.state;
        return (
          <Tooltip
            title={!active ? (
              <React.Fragment>
                {title}
                <span className={classes.arrowArrow} ref={this.handleArrowRef} />
              </React.Fragment>
            ) : ''}
            classes={{ popper: classes.arrowPopper, tooltip: classes.lightTooltip }}
            PopperProps={{
              popperOptions: {
                modifiers: {
                  arrow: {
                    enabled: Boolean(arrowRef),
                    element: arrowRef,
                  },
                },
              },
            }}
            placement={placement}
          >
            {children}
          </Tooltip>
        );
      }
}

export default withStyles(styles)(GETooltip);

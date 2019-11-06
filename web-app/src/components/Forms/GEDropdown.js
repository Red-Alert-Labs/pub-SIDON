import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class GEDropdown extends React.Component {
    static propTypes = {
      values: PropTypes.array,
      selected: PropTypes.any,
      onChange: PropTypes.func,
      defaultName: PropTypes.string
    }

    static defaultProps = {
      onChange: () => {},
      values: [],
    }

  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (value) => {
    const { onChange } = this.props;
    onChange(value);
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { values, selected, defaultName } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className="dropdown-button btn"
        >
          {typeof values[selected] !== 'undefined' ? values[selected].name : defaultName}
          <i className="material-icons dp48">arrow_drop_down</i>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.setState({ anchorEl: null })}
        >
          {values.map((value, i) => (
            <MenuItem onClick={() => this.handleClose(value)} key={i}>{value.name}</MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default GEDropdown;

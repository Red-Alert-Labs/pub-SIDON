import React from 'react';
import PropTypes from 'prop-types';
import GETooltip from '../Tooltip';

class LeftHeading extends React.Component {
  render() {
    const {
      img, onHoverImg, title, onClick, active,
    } = this.props;

    return (
      <div className="data-heading">
        <GETooltip placement="right" active={active} title="Coming Soon">
          <a href="" onClick={onClick}>
            <figure>
              <span className="icon">
                <img src={img} alt="site-img" />
              </span>
              <span className="icon-hover">
                <img src={onHoverImg} alt="site-img" />
              </span>
            </figure>
            <figcaption>{title}</figcaption>
          </a>
        </GETooltip>
      </div>
    );
  }
}
LeftHeading.propTypes = {
  img: PropTypes.any,
  onHoverImg: PropTypes.any,
  title: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

LeftHeading.defaultProps = {
  onClick: (e) => { e.preventDefault(); },
  active: true,
};

export default LeftHeading;

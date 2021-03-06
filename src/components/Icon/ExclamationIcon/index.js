import React from 'react';

/* eslint-disable max-len */
const ExclamationIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/exclamation-16.svg');
const ExclamationIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/exclamation-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExclamationIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 16:
      Svg = ExclamationIcon16;
      sizeclass = 'oui-icon--16';
      break;
    case 24:
      Svg = ExclamationIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
      Svg = ExclamationIcon16;
      sizeclass = `oui-icon--${ props.size }`;
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

ExclamationIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([12, 16, 24]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExclamationIcon;

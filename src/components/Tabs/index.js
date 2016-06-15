import React from 'react';
import classNames from 'classnames';

const Tabs = React.createClass({
  propTypes: {
    children: React.PropTypes.array.isRequired,
    testSection: React.PropTypes.string,
    style: React.PropTypes.arrayOf(React.PropTypes.oneOf([
      'small',
      'center',
      'sub',
    ])),
    tabActive: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      tabActive: 0,
    };
  },

  getInitialState() {
    return {
      tabActive: this.props.tabActive,
    };
  },

  setTabActive(index, e) {
    e.preventDefault();

    let clickedTab = this.props.children[index];
    if (clickedTab.props.isDisabled) {
      return;
    }

    this.setState({
      tabActive: index,
    });
  },

  _getMenuItems() {
    let menuItems = this.props.children.map((panel, index) => {
      let dataTestSection = this.props.testSection ? this.props.testSection + '-' + index : null;
      let title = panel.props.title;
      let classes = classNames('tabs-nav__item', panel.props.isDisabled && 'tab-disabled', this.state.tabActive === index && 'is-active');
      return (
        <li data-test-section={dataTestSection} key={index} className={classes} onClick={this.setTabActive.bind(this, index)} disabled={ panel.props.isDisabled ? 'disabled' : false }>
          {title}
        </li>
      );
    });

    return (
      <ul className="tabs-nav">{menuItems}</ul>
    );
  },

  _getPanels() {
    let panels = this.props.children.map((panel, index) => {
      let classes = classNames('tabs-pane__item', this.state.tabActive === index && 'is-active');
      return (
        <div className={classes} key={index}>{panel}</div>
      );
    });
    return (
      <div className="tabs-pane">{panels}</div>
    );
  },

  render() {
    let tabStyleClasses = this.props.style ? this.props.style.map((style) => {
      return 'tabs--' + style;
    }) : '';
    let classes = classNames(tabStyleClasses, 'tabs');
    return (
      <div className={classes}>
        {this._getMenuItems()}
        {this._getPanels()}
      </div>
    );
  },
});

Tabs.Panel = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired,
    isDisabled: React.PropTypes.bool,
  },

  render() {
    return (
      <div>{this.props.children}</div>
    );
  },
});

export default Tabs;

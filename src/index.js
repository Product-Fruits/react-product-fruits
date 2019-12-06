import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isDOMReady = window && window.document && window.document.createElement;

export default class ProductFruits extends Component {
  static propTypes = {
    projectCode: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    const {
      projectCode,
      language
    } = props;

    if (!projectCode || !language || !isDOMReady) {
      return;
    }

    if (!window.productFruits) {
      this.setUserConfig(props);

      (function (w, d, u, c) {
        var a = d.getElementsByTagName('head')[0];
        var r = d.createElement('script'); r.async = 1;
        r.src = u + '?c=' + c;
        a.appendChild(r);
      })(window, document, 'https://app.productfruits.com/static/script.js', projectCode);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isDOMReady) return;

    this.setUserConfig(nextProps);
  }

  setUserConfig(props) {
    const {
      projectCode,
      language,
      username,
      email,
      firstname,
      lastname,
      signUpAt
    } = props;

    window.productFruitsUser = { username: username, email: email, firstname: firstname, lastname: lastname, signUpAt: signUpAt };

    window.productFruits = window.productFruits || {};

    window.productFruits.language = language;
    window.productFruits.code = projectCode;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (!isDOMReady || !window.productFruits) return false;

    delete window.productFruits;
    delete window.productFruitsUser;
  }

  render() {
    return false;
  }
}

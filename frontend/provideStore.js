/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

var React = require('react');

module.exports = function(name: string): Object {
  class Wrapper extends React.Component {
    props: {
      children: () => ReactElement,
      store: Object,
    };
    getChildContext() {
      // $FlowFixMe computed property
      return {[name]: this.props.store};
    }
    render() {
      return this.props.children();
    }
  }
  Wrapper.childContextTypes = {
    // $FlowFixMe computed property
    [name]: React.PropTypes.object,
  };
  Wrapper.displayName = 'StoreProvider(' + name + ')';
  return Wrapper;
};


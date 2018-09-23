
import React, { Component, PropTypes } from 'react';
import CommentBox from './components/comment-box';


export default class App extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <CommentBox apiUrl="./comments.json" />
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box';

const app = (
  <CommentBox apiUrl="./comments.json" />
);

export default app;

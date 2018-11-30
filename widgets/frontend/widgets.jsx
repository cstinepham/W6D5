import React from 'react';
import ReactDOM from 'react-dom';

import Clock from "./clock";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});

const Root = (prop) => {
  return (
    <Clock />
  );
};

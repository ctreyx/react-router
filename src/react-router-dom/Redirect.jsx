import React from 'react';
import { Consumer } from './context';
export default function Redirect(props) {
  return (
    <Consumer>
      {state => {
        const { history } = state;
        const { to } = props;
        history.push(to);
        return null;
      }}
    </Consumer>
  );
}

import React, { useEffect } from 'react';
import { Consumer } from './context';

export default function Link(props) {
  return (
    <Consumer>
      {state => {
        const { history } = state;
        const { to, children } = props;
        return (
          <a
            onClick={() => {
              history.push(to);
            }}
          >
            {children}
          </a>
        );
      }}
    </Consumer>
  );
}

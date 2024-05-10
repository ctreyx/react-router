import React from 'react';
import { Consumer } from './context';
import { pathToRegexp } from 'path-to-regexp';
/* 
 Routes相对应拦截器，Router会返回所有子组件，在这里进行拦截children子元素，然后判断当前路径再返回。
*/
export default function Routes(props) {
  return (
    <Consumer>
      {state => {
        const { children } = props;
        const { pathname } = state.location;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          const path = child.props.path || ''; //Redirect没有 path
          const reg = pathToRegexp(path, [], { end: false });
          if (pathname.match(reg)) {
            return child;
          }
        }

        return children[children.length - 1]; //返回重定向
      }}
    </Consumer>
  );
}

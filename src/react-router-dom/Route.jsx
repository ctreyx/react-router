/*
 * @Author: tianxun@https://gitee.com/fummmi
 * @Date: 2022-05-17 16:52:21
 * @Description: Do not edit
 * @LastEditors: fumi 330696896@qq.com
 * @LastEditTime: 2024-05-10 14:41:27
 * @FilePath: \my_router\src\react-router-dom\Route.jsx
 */
import React, { useEffect } from "react";
import { Consumer } from "./context";
import { pathToRegexp } from "path-to-regexp";
/* 
 1.props是根组件传入的path与element
 2.state是hashRouter传入的location，判断当前页面路径
 3.pathToRegexp第一个参数传匹配路径，第三个true为严格模式,false非严格模式
 path是每个组件路由，pathname是当前页面路径，用pathToRegexp判断
*/

export default function Route(props) {
  console.log("消费", props);
  return (
    <Consumer>
      {(state) => {
        const { path, element, exact } = props;
        const { pathname } = state.location;
        const reg = pathToRegexp(path, [], { end: exact ? true : false });

        if (pathname.match(reg)) {
          return element;
        }
        return null;
      }}
    </Consumer>
  );
}

/*
 * @Author: tianxun@https://gitee.com/fummmi
 * @Date: 2022-05-17 16:52:21
 * @Description: Do not edit
 * @LastEditors: fumi 330696896@qq.com
 * @LastEditTime: 2024-05-10 14:39:44
 * @FilePath: \my_router\src\react-router-dom\HashRouter.jsx
 */
import React, { useEffect, useState } from "react";
import { Provider } from "./context";

export default function HashRouter(props) {
  const [state, setState] = useState({
    location: {
      pathname: window.location.hash.slice(1) || "/", //获取当前路径
    },
  });

  console.log(props);

  useEffect(() => {
    //   使用户第一次进来进入主页面或者之前页面
    window.location.hash = window.location.hash || "/";

    // 更新最新路径
    window.addEventListener("hashchange", () => {
      const newlocation = {
        ...state,
        location: {
          ...state.location,
          pathname: window.location.hash.slice(1) || "/",
        },
      };
      setState(newlocation);
    });
  }, []);
  // 传给Link组件的值
  const changeRoute = (path) => {
    window.location.hash = path;
  };
  return (
    <Provider
      value={{ location: state.location, history: { push: changeRoute } }}
    >
      {props.children}
    </Provider>
  );
}

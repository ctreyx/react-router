# 手写 router

<!-- 1.hash模式 -->

是 a 标签通过 href 改变路由，原理是使用了 location.hash、location.replace，核心能通过 hashchange 监听路由变化.

<!-- 1.1 HashRouter -->

手写: 1.手写 HashRouter,通过 props.children 可以渲染包裹的子组件，需要解决根据路径渲染不同页面的问题。
解决:通过 React.createContext()创建上下文获取 Provider, Consumer 。通过 hashchange 监听页面路径变化，
传给 Route 当前路径，Route 通过 props 传入的路径与 Consumer 中接受的当前路径判断渲染正确组件。

<!-- 1.2 -->

Route 通过 Consumer 获取父组件 hash 的当前路径值，然后 props 接受 path 与 element,通过 path-to-regexp 插件判断当前路径与每个 props.path，渲染子组件。
问题:即使匹配成功，还会继续匹配往下，需要通过 switch 组件解决。

<!-- 1.3 Link -->

通过父级 HashRouter 传递改变 window.lcocation.hash 的函数到 Link 组件。

<!-- 1.4 Redirect -->

和 link 类似，都是获取 props 中 to，通过上下文改变 hash 路由。
问题:每次都会跳转到 Redirect 中，因为即使路由匹配成功，也没有暂停，需要 switch 组件解决。

<!-- 1.5 switch -->

Routes 相对应拦截器，Router 会返回所有子组件，在这里进行拦截 children 子元素，然后判断当前路径再返回。

<!-- 2.brower模式 -->

通过触发浏览器 H5 的 history api:history.pushState({ p: path }, null, path)，页面跳转原理是使用了 HTML5 为浏览器全局的 history 对象新增了两个 API，包括 history.pushState、history.replaceState

会创建虚拟路径，但是敲回车会显示 404,因为并不是真实路径。
通过 popstate 监听浏览器前进后台。

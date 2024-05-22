// ==UserScript==
// @name         知乎去登录
// @namespace    http://tampermonkey.net/
// @version      2024-03-19
// @description  try to take over the world!
// @author       You
// @match        https://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log("执行脚本");
  let id = setInterval(() => {
    const dom = document.getElementsByClassName("Button Modal-closeButton Button--plain");
    if (dom != null && dom.length > 0) {
      dom[0].click();
      // 2024.5.23更新，部分知乎答案展开需要登陆
      // clearInterval(id);
    }
  }, 100);

})();
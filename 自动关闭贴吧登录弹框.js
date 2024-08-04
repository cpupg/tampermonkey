// ==UserScript==
// @name         自动关闭贴吧登录弹框
// @namespace    http://tampermonkey.net/
// @version      2024-08-04
// @description  try to take over the world!
// @author       You
// @match        https://tieba.baidu.com/p/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log("执行脚本");
  let id = setInterval(() => {
    const dom = document.getElementsByClassName("close-btn");
    if (dom != null && dom.length > 0) {
      dom[0].click();
    }
  }, 100);

})();

// ==UserScript==
// @name         B站个人主页自动关闭登录弹框
// @namespace    http://tampermonkey.net/
// @version      2024-03-20
// @description  try to take over the world!
// @author       You
// @match        https://space.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
// --------------
console.log("执行脚本")

let id = setInterval(() => {
  const dom = document.getElementsByClassName("bili-mini-close-icon");
  if (dom != null && dom.length > 0) {
    dom[0].click();
    console.log("登录弹框关闭完成")
  }
}, 100);
})();
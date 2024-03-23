// ==UserScript==
// @name         自动关闭B站登录弹框
// @namespace    http://tampermonkey.net/
// @version      2024-03-19
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//---------------------
console.log("执行脚本");
let id1;
let id2;
let id3;
id1 = setInterval(() => {
  // 全屏遮罩+屏幕中央登录弹框
  const dom = document.getElementsByClassName("bili-mini-mask");
  if (dom != null && dom.length > 0) {
    dom[0].remove();
    //clearInterval(id1);
    document.getElementsByClassName("bpx-player-video-wrap")[0].click();
    console.log("已移除登录弹框");
  }
}, 500)

id2 = setInterval(() => {
  // 进度条上方登录提示
  const dom2 = document.getElementsByClassName("bpx-player-toast-wrap");
  if (dom2 != null && dom2.length > 0) {
    dom2[0].remove();
    //clearInterval(id2);
    console.log("已移除进度条上方登录提示");
  }
}, 500);

id3 = setInterval(() => {
  const dom3 = document.getElementsByClassName("bili-circle");
  if (dom3 != null && dom3.length > 0) {
    dom3[0].click();
    //clearInterval(id3);
    console.log("已移除投票弹框");
  }
}, 500);

})();
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

// 注意：当浏览器切换到其他标签页后，原来的播放页会无限弹出登陆窗口，此脚本也会无限关闭窗口。
// 这个过程原来的标签页会在播放-暂停之间反复横跳。

(function () {
  'use strict';
  //---------------------

  console.log("执行脚本");

  let id1;
  let id2;
  let id3;
  id1 = setInterval(() => {
    // 全屏遮罩+屏幕中央登录弹框
    const dom = document.getElementsByClassName("bili-mini-close-icon");
    if (dom != null && dom.length > 0) {
      dom[0].click();
      // clearInterval(id1);
      document.getElementsByClassName("bpx-player-video-wrap")[0].click();
      console.log("已移除登录弹框");
    }
  }, 500)

  id2 = setInterval(() => {
    // 进度条上方登录提示
    const dom2 = document.getElementsByClassName("bpx-player-toast-wrap");
    if (dom2 != null && dom2.length > 0) {
      dom2[0].remove();
      // clearInterval(id2);
      console.log("已移除进度条上方登录提示");
    }
  }, 500);

  id3 = setInterval(() => {
    const dom3 = document.getElementsByClassName("bili-circle");
    if (dom3 != null && dom3.length > 0) {
      dom3[0].click();
      // clearInterval(id3);
      console.log("已移除投票弹框");
    }
  }, 500);

})();

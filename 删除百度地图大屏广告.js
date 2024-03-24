// ==UserScript==
// @name         删除百度地图大屏广告
// @namespace    http://tampermonkey.net/
// @version      2024-03-19
// @description  try to take over the world!
// @author       You
// @match        https://ditu.baidu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  // -------------------------
  const dom = document.getElementById("message-panel");
  if (dom != null) {
    console.log("已移除广告")
    dom.remove();
  }

})();
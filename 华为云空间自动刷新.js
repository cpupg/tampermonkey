// ==UserScript==
// @name         华为云空间自动刷新
// @namespace    http://tampermonkey.net/
// @version      2024-03-16
// @description  try to take over the world!
// @author       You
// @match        https://cloud.huawei.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// 华为云空间超时时间过短，此脚本通过循环操作来保活。
// 如果你要操作云盘页面，你需要暂时禁用此脚本
(function() {
'use strict';

// ----------------
const interval = 60000;
const timeout = 55000;

let url = location.href;
if (url.indexOf("collection/v2") > -1) {
  document.title = '等待刷新云盘'
  console.log("当前在云盘页面")
  // 0全部1删除
  const dom = document.getElementsByClassName("clc-menu-text");
  setInterval(() => {
    console.log("current:" + url);
    if (location.href.indexOf("collection/v2/all") > -1) {
      document.title = 'all'
      setTimeout(() => {
        document.title = 'all -> deleted'
        dom[1].click();
      }, timeout);
    } else if (location.href.indexOf('collection/v2/deleted')) {
      document.title = 'deleted'
      setTimeout(() => {
        document.title = 'deleted -> all'
        dom[0].click();
      }, timeout);
    } else {
      console.warn("路径不匹配")
    }
  }, interval);
}

})();
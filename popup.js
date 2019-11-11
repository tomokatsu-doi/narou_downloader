// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let dl = document.getElementById('dl');
//let dl_all = document.getElementById('dl_all');


dl.onclick = function(element) {
	
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
		{file: 'jquery-3.4.1.min.js'},
		function() {chrome.tabs.executeScript(null, { file: "download.js" })});
  });
};

// dl_all.onclick = function(element) {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	  chrome.tabs.executeScript(
// 		  tabs[0].id,
// 		  {code: 'document.body.style.backgroundColor = "' + color + '";'});
// 	});
//   };
  
// ==UserScript==
// @name         traQ enter to submit first aid
// @namespace    https://github.com/tqkoh/traQ-enter-to-submit-first-aid
// @version      0.0.2
// @description  edge, chrome v105+ で traQ の enter でメッセージを送信できないバグの応急処置
// @author       tqk
// @match        https://q.trap.jp/channels/*
// @match        https://q.trap.jp/users/*
// @license      MIT
// ==/UserScript==

(function() {
	'use strict';
	document.addEventListener('keydown', function (event) {
		if (event.key=='Enter'){
			document.querySelectorAll('[data-testid="message-send-button"]')[0].click();
		}
	}, false);
})();

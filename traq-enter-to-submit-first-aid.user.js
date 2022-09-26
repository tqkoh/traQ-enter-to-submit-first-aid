// ==UserScript==
// @name         traQ enter to submit first aid
// @namespace    https://github.com/tqkoh/traQ-enter-to-submit-first-aid
// @version      0.0.5
// @description  edge, chrome v105+ で traQ の enter でメッセージを送信できないバグの応急処置
// @author       tqk
// @match        https://q.trap.jp
// @match        https://q.trap.jp/*
// @license      MIT
// ==/UserScript==

(function() {
	'use strict';
	document.addEventListener('keydown', function (event) {
		if (event.key=='Enter' && !event.ctrlKey && !event.altKey && !event.shiftKey){
			document.querySelectorAll('[data-testid="message-send-button"]')[0].click();
		}
	}, false);
})();

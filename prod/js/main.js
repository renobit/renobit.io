(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function (window, document, undefined)
{ 'use strict';

	// Polyfill (basic) addEventListener for IE
	if (typeof window.addEventListener === 'undefined' && typeof window.Element !== 'undefined')
	{
		console.log('Doing a basic polyfill for addEventListener...');

		window.Element.prototype.addEventListener = document.addEventListener = window.addEventListener = function (on, fn)
		{
			this.attachEvent('on' + on, fn);
		};
	}

	window.addEventListener('load', function ()
	{
		var toggle = document.getElementById('nav-toggle');

		toggle.addEventListener('click', function ()
		{
			if (document.body.classList.contains('nav-active'))
			{
				document.body.classList.remove('nav-active');
			}
			else
			{
				document.body.classList.add('nav-active');
			}
		}, false);

		var navLinks = document.getElementById('nav').querySelectorAll('a');
		var hideNav = function ()
		{
			document.body.classList.remove('nav-active');
		};

		for (var i = 0; i < navLinks.length; ++i)
		{
			navLinks[i].addEventListener('click', hideNav, false);
		}
	}, false);
})(window, document);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvd3d3L3Jlbm9iaXQuaW8vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvdmFncmFudC93d3cvcmVub2JpdC5pby9hcHAvanMvZmFrZV84ODZlZGM0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKVxueyAndXNlIHN0cmljdCc7XG5cblx0Ly8gUG9seWZpbGwgKGJhc2ljKSBhZGRFdmVudExpc3RlbmVyIGZvciBJRVxuXHRpZiAodHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkVsZW1lbnQgIT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0Y29uc29sZS5sb2coJ0RvaW5nIGEgYmFzaWMgcG9seWZpbGwgZm9yIGFkZEV2ZW50TGlzdGVuZXIuLi4nKTtcblxuXHRcdHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA9IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKG9uLCBmbilcblx0XHR7XG5cdFx0XHR0aGlzLmF0dGFjaEV2ZW50KCdvbicgKyBvbiwgZm4pO1xuXHRcdH07XG5cdH1cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpXG5cdHtcblx0XHR2YXIgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi10b2dnbGUnKTtcblxuXHRcdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0aWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtYWN0aXZlJykpXG5cdFx0XHR7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25hdi1hY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cblx0XHR2YXIgbmF2TGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2JykucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXHRcdHZhciBoaWRlTmF2ID0gZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1hY3RpdmUnKTtcblx0XHR9O1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7ICsraSlcblx0XHR7XG5cdFx0XHRuYXZMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVOYXYsIGZhbHNlKTtcblx0XHR9XG5cdH0sIGZhbHNlKTtcbn0pKHdpbmRvdywgZG9jdW1lbnQpO1xuIl19

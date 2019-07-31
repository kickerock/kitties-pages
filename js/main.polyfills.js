/*!
 * Andrew's test v0.0.1
 * Feel the power of Andrew's might
 * (c) 2019 Andrei Narolskii
 * MIT License
 * https://github.com/kickerock/avantajtest
 */

// Cards Listener
document.querySelectorAll('.card').forEach((function(target) {
  target.addEventListener('click', (function() {
    if (!target.classList.contains('is-disabled')) {
      target.classList.toggle("is-selected");
    }
  }))
}))

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
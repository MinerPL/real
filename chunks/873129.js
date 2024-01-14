"use strict";
e.exports = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  20: "capslock",
  27: "esc",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "ins",
  46: "del",
  91: "meta",
  93: "meta",
  187: "plus",
  189: "minus",
  224: "meta"
};
for (var r = 1; r < 20; ++r) e.exports[111 + r] = "f" + r;
for (r = 0; r <= 9; ++r) e.exports[r + 96] = r
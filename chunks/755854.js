"use strict";
n.r(t), n.d(t, {
  isThemeLight: function() {
    return r
  },
  isThemeDark: function() {
    return o
  }
});
var i = n("843455");

function r(e) {
  return e === i.ThemeTypes.LIGHT
}

function o(e) {
  switch (e) {
    case i.ThemeTypes.DARK:
    case i.ThemeTypes.MIDNIGHT:
    case i.ThemeTypes.DARKER:
      return !0;
    default:
      return !1
  }
}
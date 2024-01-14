"use strict";
a.r(t), a.d(t, {
  useFocusInside: function() {
    return s
  }
}), a("222007");
var l = a("884691");

function s(e, t) {
  let [a, s] = (0, l.useState)(!1), n = (0, l.useCallback)(t => {
    (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && s(!0), null != e && e(t)
  }, [e]), i = (0, l.useCallback)(e => {
    (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && s(!1), null != t && t(e)
  }, [t]);
  return {
    handleFocus: n,
    handleBlur: i,
    isFocused: a
  }
}
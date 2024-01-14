"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("884691"),
  i = n("383018"),
  r = n("939563"),
  o = n("467123"),
  s = n("93640"),
  a = n("49111");

function u(e) {
  let {
    editor: t,
    channel: n,
    disableEnterToSubmit: u,
    onKeyDown: d,
    onKeyUp: c,
    onTab: f,
    onEnter: p,
    allowNewLines: m,
    submit: h,
    hideAutocomplete: E,
    moveSelection: S
  } = e, g = l.useCallback(e => {
    var l;
    switch (e.which) {
      case a.KeyboardKeys.ARROW_UP:
        if (S(-1)) {
          e.preventDefault();
          return
        }
        break;
      case a.KeyboardKeys.ARROW_DOWN:
        if (S(1)) {
          e.preventDefault();
          return
        }
        break;
      case a.KeyboardKeys.P:
        if ((0, s.checkModifiers)(e, {
            ctrl: !0
          }) && S(-1)) {
          e.preventDefault();
          return
        }
        break;
      case a.KeyboardKeys.N:
        if ((0, s.checkModifiers)(e, {
            ctrl: !0
          }) && S(1)) {
          e.preventDefault();
          return
        }
        break;
      case a.KeyboardKeys.ESCAPE:
        null == E || E();
        break;
      case a.KeyboardKeys.TAB:
        if ((0, s.checkModifiers)(e, {}) && (null == f ? void 0 : f())) {
          e.preventDefault(), e.stopPropagation();
          return
        }
        let c = i.default.getActiveCommand(n.id);
        if (null != c) {
          e.preventDefault(), e.stopPropagation(), e.shiftKey ? r.SlateTransforms.selectPreviousCommandOption(t) : r.SlateTransforms.selectNextCommandOption(t);
          return
        }
        break;
      case a.KeyboardKeys.ENTER:
        if ((0, s.checkModifiers)(e, {}) && (null == p ? void 0 : p(e))) {
          e.preventDefault(), e.stopPropagation();
          return
        }
    }
    if ((null === (l = t.onKeyDown) || void 0 === l ? void 0 : l.call(t, e)) === !0) {
      e.preventDefault(), e.stopPropagation();
      return
    }
    e.which === a.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, o.hasOpenPlainTextCodeBlock)(t) || !m) && (e.preventDefault(), e.stopPropagation(), h()), null == d || d(e)
  }, [m, n.id, u, t, E, S, p, d, f, h]), C = l.useCallback(e => {
    null == c || c(e)
  }, [c]);
  return {
    handleKeyDown: g,
    handleKeyUp: C
  }
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("884691"),
  r = n("446674"),
  s = n("551042"),
  i = n("77078"),
  l = n("485328"),
  u = n("180748"),
  o = n("206230"),
  d = n("951212"),
  c = n("227602"),
  f = n("791776"),
  E = n("13798"),
  h = n("49111"),
  p = n("894282");

function S(e) {
  let t = e.ctrlKey || e.altKey || e.metaKey;
  e.key === p.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, s.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
}

function _() {
  (0, u.disableKeyboardMode)()
}
var C = function(e, t) {
  let n = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled);
  (0, i.useFocusJumpSectionManager)(n);
  let s = (0, a.useCallback)(e => {
    ! function(e, t) {
      var n, a;
      let r = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
      if (r && e.key !== p.KeyboardEventKey.Tab) return;
      let s = e.ctrlKey || e.altKey || e.metaKey || e.key !== p.KeyboardEventKey.Tab && e.shiftKey;
      if (s) return;
      let i = function(e) {
        let t = E.keyToCode("shift"),
          n = E.keyToCode("tab");
        if (e.key === p.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
          [h.KeyboardDeviceTypes.KEYBOARD_KEY, t],
          [h.KeyboardDeviceTypes.KEYBOARD_KEY, n]
        ];
        let a = p.NavigationKeyShortcutMap.get(e.key);
        if (null != a) {
          let e = E.keyToCode(a);
          if (null != e) return [
            [h.KeyboardDeviceTypes.KEYBOARD_KEY, e]
          ]
        }
        return null
      }(e);
      null != i && !c.default.hasExactKeybind(i) && !l.default.hasBind(null !== (a = E.codeToKey(i[0])) && void 0 !== a ? a : "") && ((0, u.enableKeyboardMode)(), r && !t && e.preventDefault())
    }(e, t)
  }, [t]);
  return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", _), e.addEventListener("keydown", S)) : e.addEventListener("keydown", s), () => {
    n ? (e.removeEventListener("mousedown", _), e.removeEventListener("keydown", S)) : e.removeEventListener("keydown", s)
  }), [e, s, n]), n
}
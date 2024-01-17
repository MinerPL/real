"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("884691"),
  r = n("446674"),
  s = n("551042"),
  l = n("77078"),
  i = n("485328"),
  u = n("180748"),
  o = n("206230"),
  d = n("951212"),
  c = n("227602"),
  f = n("791776"),
  h = n("13798"),
  p = n("49111"),
  E = n("894282");

function C(e) {
  let t = e.ctrlKey || e.altKey || e.metaKey;
  e.key === E.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, s.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
}

function m() {
  (0, u.disableKeyboardMode)()
}
var S = function(e, t) {
  let n = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled);
  (0, l.useFocusJumpSectionManager)(n);
  let s = (0, a.useCallback)(e => {
    ! function(e, t) {
      var n, a;
      let r = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
      if (r && e.key !== E.KeyboardEventKey.Tab) return;
      let s = e.ctrlKey || e.altKey || e.metaKey || e.key !== E.KeyboardEventKey.Tab && e.shiftKey;
      if (s) return;
      let l = function(e) {
        let t = h.keyToCode("shift"),
          n = h.keyToCode("tab");
        if (e.key === E.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
          [p.KeyboardDeviceTypes.KEYBOARD_KEY, t],
          [p.KeyboardDeviceTypes.KEYBOARD_KEY, n]
        ];
        let a = E.NavigationKeyShortcutMap.get(e.key);
        if (null != a) {
          let e = h.keyToCode(a);
          if (null != e) return [
            [p.KeyboardDeviceTypes.KEYBOARD_KEY, e]
          ]
        }
        return null
      }(e);
      null != l && !c.default.hasExactKeybind(l) && !i.default.hasBind(null !== (a = h.codeToKey(l[0])) && void 0 !== a ? a : "") && ((0, u.enableKeyboardMode)(), r && !t && e.preventDefault())
    }(e, t)
  }, [t]);
  return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", m), e.addEventListener("keydown", C)) : e.addEventListener("keydown", s), () => {
    n ? (e.removeEventListener("mousedown", m), e.removeEventListener("keydown", C)) : e.removeEventListener("keydown", s)
  }), [e, s, n]), n
}
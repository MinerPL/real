"use strict";
n.r(t), n.d(t, {
  useFocus: function() {
    return R
  },
  isFocusVisible: function() {
    return U
  },
  getInteractionModality: function() {
    return H
  },
  setInteractionModality: function() {
    return G
  },
  useInteractionModality: function() {
    return W
  },
  useFocusVisibleListener: function() {
    return q
  },
  useFocusWithin: function() {
    return Z
  },
  useHover: function() {
    return ee
  },
  useInteractOutside: function() {
    return et
  },
  useKeyboard: function() {
    return eo
  },
  useMove: function() {
    return ea
  },
  usePress: function() {
    return v
  },
  useScrollWheel: function() {
    return ei
  },
  useLongPress: function() {
    return es
  }
}), n("222007");
var r = n("290895"),
  o = n("884691"),
  a = n("79458"),
  i = n("599514"),
  s = n("686047"),
  c = n("46397");
let l = "default",
  u = "",
  d = new WeakMap;

function p(e) {
  (0, r.isIOS)() ? ("default" === l && (u = document.documentElement.style.webkitUserSelect, document.documentElement.style.webkitUserSelect = "none"), l = "disabled") : (e instanceof HTMLElement || e instanceof SVGElement) && (d.set(e, e.style.userSelect), e.style.userSelect = "none")
}

function f(e) {
  if ((0, r.isIOS)()) "disabled" === l && (l = "restoring", setTimeout(() => {
    (0, r.runAfterTransition)(() => {
      "restoring" === l && ("none" === document.documentElement.style.webkitUserSelect && (document.documentElement.style.webkitUserSelect = u || ""), u = "", l = "default")
    })
  }, 300));
  else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && d.has(e)) {
    let t = d.get(e);
    "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), d.delete(e)
  }
}
let m = o.createContext(null);
m.displayName = "PressResponderContext";
var h = new WeakMap;
class g {
  continuePropagation() {
    (0, s._)(this, h, !1)
  }
  get shouldStopPropagation() {
    return (0, a._)(this, h)
  }
  constructor(e, t, n) {
    (0, i._)(this, h, {
      writable: !0,
      value: void 0
    }), (0, s._)(this, h, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
  }
}

function v(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: a,
    onPressEnd: i,
    onPressUp: s,
    isDisabled: c,
    isPressed: l,
    preventFocusOnPress: u,
    shouldCancelOnPointerExit: d,
    allowTextSelectionOnPress: h,
    ref: v,
    ...P
  } = function(e) {
    let t = (0, o.useContext)(m);
    if (t) {
      let {
        register: n,
        ...o
      } = t;
      e = (0, r.mergeProps)(o, e), n()
    }
    return (0, r.useSyncRef)(t, e.ref), e
  }(e), [k, E] = (0, o.useState)(!1), T = (0, o.useRef)({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), {
    addGlobalListener: R,
    removeAllGlobalListeners: M
  } = (0, r.useGlobalListeners)(), O = (0, r.useEffectEvent)((e, t) => {
    let r = T.current;
    if (c || r.didFirePressStart) return;
    let o = !0;
    if (a) {
      let n = new g("pressstart", t, e);
      a(n), o = n.shouldStopPropagation
    }
    return n && n(!0), r.didFirePressStart = !0, E(!0), o
  }), I = (0, r.useEffectEvent)(function(e, r) {
    let o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      a = T.current;
    if (!a.didFirePressStart) return;
    a.ignoreClickAfterPress = !0, a.didFirePressStart = !1;
    let s = !0;
    if (i) {
      let t = new g("pressend", r, e);
      i(t), s = t.shouldStopPropagation
    }
    if (n && n(!1), E(!1), t && o && !c) {
      let n = new g("press", r, e);
      t(n), s && (s = n.shouldStopPropagation)
    }
    return s
  }), A = (0, r.useEffectEvent)((e, t) => {
    if (!c) {
      if (s) {
        let n = new g("pressup", t, e);
        return s(n), n.shouldStopPropagation
      }
      return !0
    }
  }), N = (0, r.useEffectEvent)(e => {
    let t = T.current;
    t.isPressed && (t.isOverTarget && I(S(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, M(), !h && f(t.target))
  }), L = (0, r.useEffectEvent)(e => {
    d && N(e)
  }), j = (0, o.useMemo)(() => {
    let e = T.current,
      t = {
        onKeyDown(t) {
          if (b(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
            C(t.target, t.key) && t.preventDefault();
            let r = !0;
            !e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, r = O(t, "keyboard"), R(document, "keyup", n, !1)), r && t.stopPropagation()
          } else "Enter" === t.key && y(t.currentTarget) && t.stopPropagation()
        },
        onKeyUp(t) {
          b(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && A(S(e.target, t), "keyboard")
        },
        onClick(t) {
          if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button) {
            let n = !0;
            if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && ("virtual" === e.pointerType || (0, r.isVirtualClick)(t.nativeEvent))) {
              !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget);
              let e = O(t, "virtual"),
                o = A(t, "virtual"),
                a = I(t, "virtual");
              n = e && o && a
            }
            e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        if (e.isPressed && b(t, e.target)) {
          C(t.target, t.key) && t.preventDefault(), e.isPressed = !1;
          let n = t.target,
            r = I(S(e.target, t), "keyboard", e.target.contains(n));
          M(), r && t.stopPropagation(), e.target instanceof HTMLElement && e.target.contains(n) && (y(e.target) || "link" === e.target.getAttribute("role")) && e.target.click()
        }
      };
    if ("undefined" != typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
        if ((0, r.isVirtualPointerEvent)(t.nativeEvent)) {
          e.pointerType = "virtual";
          return
        }
        D(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
        let i = !0;
        !e.isPressed && (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), !h && p(e.target), i = O(t, e.pointerType), R(document, "pointermove", n, !1), R(document, "pointerup", o, !1), R(document, "pointercancel", a, !1)), i && t.stopPropagation()
      }, t.onMouseDown = e => {
        e.currentTarget.contains(e.target) && 0 === e.button && (D(e.currentTarget) && e.preventDefault(), e.stopPropagation())
      }, t.onPointerUp = t => {
        t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && w(t, t.currentTarget) && A(t, e.pointerType || t.pointerType)
      };
      let n = t => {
          t.pointerId === e.activePointerId && (w(t, e.target) ? !e.isOverTarget && (e.isOverTarget = !0, O(S(e.target, t), e.pointerType)) : e.isOverTarget && (e.isOverTarget = !1, I(S(e.target, t), e.pointerType, !1), L(t)))
        },
        o = t => {
          t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && (w(t, e.target) ? I(S(e.target, t), e.pointerType) : e.isOverTarget && I(S(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, M(), !h && f(e.target))
        },
        a = e => {
          N(e)
        };
      t.onDragStart = e => {
        e.currentTarget.contains(e.target) && N(e)
      }
    } else {
      t.onMouseDown = t => {
        if (0 === t.button && !!t.currentTarget.contains(t.target)) {
          if (D(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
            t.stopPropagation();
            return
          }
          e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, r.isVirtualClick)(t.nativeEvent) ? "virtual" : "mouse", !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), O(t, e.pointerType) && t.stopPropagation(), R(document, "mouseup", n, !1)
        }
      }, t.onMouseEnter = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = !0;
        e.isPressed && !e.ignoreEmulatedMouseEvents && (e.isOverTarget = !0, n = O(t, e.pointerType)), n && t.stopPropagation()
      }, t.onMouseLeave = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = !0;
        e.isPressed && !e.ignoreEmulatedMouseEvents && (e.isOverTarget = !1, n = I(t, e.pointerType, !1), L(t)), n && t.stopPropagation()
      }, t.onMouseUp = t => {
        t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && A(t, e.pointerType)
      };
      let n = t => {
        if (0 === t.button) {
          if (e.isPressed = !1, M(), e.ignoreEmulatedMouseEvents) {
            e.ignoreEmulatedMouseEvents = !1;
            return
          }
          w(t, e.target) ? I(S(e.target, t), e.pointerType) : e.isOverTarget && I(S(e.target, t), e.pointerType, !1), e.isOverTarget = !1
        }
      };
      t.onTouchStart = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = function(e) {
          let {
            targetTouches: t
          } = e;
          return t.length > 0 ? t[0] : null
        }(t.nativeEvent);
        if (!!n) e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), !h && p(e.target), O(t, e.pointerType) && t.stopPropagation(), R(window, "scroll", o, !0)
      }, t.onTouchMove = t => {
        if (!t.currentTarget.contains(t.target)) return;
        if (!e.isPressed) {
          t.stopPropagation();
          return
        }
        let n = x(t.nativeEvent, e.activePointerId),
          r = !0;
        n && w(n, t.currentTarget) ? !e.isOverTarget && (e.isOverTarget = !0, r = O(t, e.pointerType)) : e.isOverTarget && (e.isOverTarget = !1, r = I(t, e.pointerType, !1), L(t)), r && t.stopPropagation()
      }, t.onTouchEnd = t => {
        if (!t.currentTarget.contains(t.target)) return;
        if (!e.isPressed) {
          t.stopPropagation();
          return
        }
        let n = x(t.nativeEvent, e.activePointerId),
          r = !0;
        n && w(n, t.currentTarget) ? (A(t, e.pointerType), r = I(t, e.pointerType)) : e.isOverTarget && (r = I(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, !h && f(e.target), M()
      }, t.onTouchCancel = t => {
        t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && N(t))
      };
      let o = t => {
        e.isPressed && t.target.contains(e.target) && N({
          currentTarget: e.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        })
      };
      t.onDragStart = e => {
        e.currentTarget.contains(e.target) && N(e)
      }
    }
    return t
  }, [R, c, u, M, h, N, L, I, O, A]);
  return (0, o.useEffect)(() => () => {
    !h && f(T.current.target)
  }, [h]), {
    isPressed: l || k,
    pressProps: (0, r.mergeProps)(P, j)
  }
}

function y(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function b(e, t) {
  let {
    key: n,
    code: r
  } = e, o = t.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(t instanceof HTMLInputElement && !k(t, n) || t instanceof HTMLTextAreaElement || t.isContentEditable) && (!y(t) || "button" === o && "Enter" !== n) && !("link" === o && "Enter" !== n)
}

function x(e, t) {
  let n = e.changedTouches;
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    if (r.identifier === t) return r
  }
  return null
}

function S(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  }
}

function w(e, t) {
  var n, r, o;
  let a, i, s = t.getBoundingClientRect();
  let c = (a = (n = e).width / 2 || n.radiusX || 0, i = n.height / 2 || n.radiusY || 0, {
    top: n.clientY - i,
    right: n.clientX + a,
    bottom: n.clientY + i,
    left: n.clientX - a
  });
  return r = s, o = c, !(r.left > o.right) && !(o.left > r.right) && !(r.top > o.bottom) && !(o.top > r.bottom) && !0
}

function D(e) {
  return !(e instanceof HTMLElement) || !e.draggable
}

function C(e, t) {
  return e instanceof HTMLInputElement ? !k(e, t) : !(e instanceof HTMLButtonElement) || "submit" !== e.type && "reset" !== e.type
}
let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function k(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : P.has(e.type)
}
class E {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
  }
  isPropagationStopped() {
    return !1
  }
  persist() {}
  constructor(e, t) {
    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
  }
}

function T(e) {
  let t = (0, o.useRef)({
    isFocused: !1,
    observer: null
  });
  (0, r.useLayoutEffect)(() => {
    let e = t.current;
    return () => {
      e.observer && (e.observer.disconnect(), e.observer = null)
    }
  }, []);
  let n = (0, r.useEffectEvent)(t => {
    null == e || e(t)
  });
  return (0, o.useCallback)(e => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let r = e.target;
      r.addEventListener("focusout", e => {
        t.current.isFocused = !1, r.disabled && n(new E("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
      }, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && r.disabled) {
          t.current.observer.disconnect();
          let e = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: e
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: e
          }))
        }
      }), t.current.observer.observe(r, {
        attributes: !0,
        attributeFilter: ["disabled"]
      })
    }
  }, [n])
}

function R(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: r,
    onFocusChange: a
  } = e, i = (0, o.useCallback)(e => {
    if (e.target === e.currentTarget) return r && r(e), a && a(!1), !0
  }, [r, a]), s = T(i), c = (0, o.useCallback)(e => {
    e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), a && a(!0), s(e))
  }, [a, n, s]);
  return {
    focusProps: {
      onFocus: !t && (n || a || r) ? c : void 0,
      onBlur: !t && (r || a) ? i : void 0
    }
  }
}
let M = null,
  O = new Set,
  I = !1,
  A = !1,
  N = !1,
  L = {
    Tab: !0,
    Escape: !0
  };

function j(e, t) {
  for (let n of O) n(e, t)
}

function F(e) {
  var t;
  if (A = !0, !((t = e).metaKey || !(0, r.isMac)() && t.altKey || t.ctrlKey || "Control" === t.key || "Shift" === t.key || "Meta" === t.key)) M = "keyboard", j("keyboard", e)
}

function K(e) {
  M = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (A = !0, j("pointer", e))
}

function _(e) {
  (0, r.isVirtualClick)(e) && (A = !0, M = "virtual")
}

function z(e) {
  e.target !== window && e.target !== document && (!A && !N && (M = "virtual", j("virtual", e)), A = !1, N = !1)
}

function V() {
  A = !1, N = !0
}

function B() {
  if ("undefined" == typeof window || I) return;
  let e = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    A = !0, e.apply(this, arguments)
  }, document.addEventListener("keydown", F, !0), document.addEventListener("keyup", F, !0), document.addEventListener("click", _, !0), window.addEventListener("focus", z, !0), window.addEventListener("blur", V, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", K, !0), document.addEventListener("pointermove", K, !0), document.addEventListener("pointerup", K, !0)) : (document.addEventListener("mousedown", K, !0), document.addEventListener("mousemove", K, !0), document.addEventListener("mouseup", K, !0)), I = !0
}

function U() {
  return "pointer" !== M
}

function H() {
  return M
}

function G(e) {
  M = e, j(e, null)
}

function W() {
  B();
  let [e, t] = (0, o.useState)(M);
  return (0, o.useEffect)(() => {
    let e = () => {
      t(M)
    };
    return O.add(e), () => {
      O.delete(e)
    }
  }, []), (0, c.useIsSSR)() ? null : e
}
"undefined" != typeof document && ("loading" !== document.readyState ? B() : document.addEventListener("DOMContentLoaded", B));

function q(e, t, n) {
  B(), (0, o.useEffect)(() => {
    let t = (t, r) => {
      var o, a, i;
      if (o = null == n ? void 0 : n.isTextInput, a = t, i = r, !(o && "keyboard" === a && i instanceof KeyboardEvent) || L[i.key]) e(U())
    };
    return O.add(t), () => {
      O.delete(t)
    }
  }, t)
}

function Z(e) {
  let {
    isDisabled: t,
    onBlurWithin: n,
    onFocusWithin: r,
    onFocusWithinChange: a
  } = e, i = (0, o.useRef)({
    isFocusWithin: !1
  }), s = (0, o.useCallback)(e => {
    i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), a && a(!1))
  }, [n, a, i]), c = T(s), l = (0, o.useCallback)(e => {
    !i.current.isFocusWithin && document.activeElement === e.target && (r && r(e), a && a(!0), i.current.isFocusWithin = !0, c(e))
  }, [r, a, c]);
  return t ? {
    focusWithinProps: {
      onFocus: null,
      onBlur: null
    }
  } : {
    focusWithinProps: {
      onFocus: l,
      onBlur: s
    }
  }
}
let Y = !1,
  X = 0;

function J() {
  Y = !0, setTimeout(() => {
    Y = !1
  }, 50)
}

function $(e) {
  "touch" === e.pointerType && J()
}

function Q() {
  if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", $) : document.addEventListener("touchend", J), X++, () => {
    !(--X > 0) && ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", $) : document.removeEventListener("touchend", J))
  }
}

function ee(e) {
  let {
    onHoverStart: t,
    onHoverChange: n,
    onHoverEnd: r,
    isDisabled: a
  } = e, [i, s] = (0, o.useState)(!1), c = (0, o.useRef)({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  (0, o.useEffect)(Q, []);
  let {
    hoverProps: l,
    triggerHoverEnd: u
  } = (0, o.useMemo)(() => {
    let e = (e, r) => {
        if (c.pointerType = r, a || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
        c.isHovered = !0;
        let o = e.currentTarget;
        c.target = o, t && t({
          type: "hoverstart",
          target: o,
          pointerType: r
        }), n && n(!0), s(!0)
      },
      o = (e, t) => {
        if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
        c.isHovered = !1;
        let o = e.currentTarget;
        r && r({
          type: "hoverend",
          target: o,
          pointerType: t
        }), n && n(!1), s(!1)
      },
      i = {};
    return "undefined" != typeof PointerEvent ? (i.onPointerEnter = t => {
      (!Y || "mouse" !== t.pointerType) && e(t, t.pointerType)
    }, i.onPointerLeave = e => {
      !a && e.currentTarget.contains(e.target) && o(e, e.pointerType)
    }) : (i.onTouchStart = () => {
      c.ignoreEmulatedMouseEvents = !0
    }, i.onMouseEnter = t => {
      !c.ignoreEmulatedMouseEvents && !Y && e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
    }, i.onMouseLeave = e => {
      !a && e.currentTarget.contains(e.target) && o(e, "mouse")
    }), {
      hoverProps: i,
      triggerHoverEnd: o
    }
  }, [t, n, r, a, c]);
  return (0, o.useEffect)(() => {
    a && u({
      currentTarget: c.target
    }, c.pointerType)
  }, [a]), {
    hoverProps: l,
    isHovered: i
  }
}

function et(e) {
  let {
    ref: t,
    onInteractOutside: n,
    isDisabled: a,
    onInteractOutsideStart: i
  } = e, s = (0, o.useRef)({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), c = (0, r.useEffectEvent)(e => {
    n && en(e, t) && (i && i(e), s.current.isPointerDown = !0)
  }), l = (0, r.useEffectEvent)(e => {
    n && n(e)
  });
  (0, o.useEffect)(() => {
    let e = s.current;
    if (!a) {
      if ("undefined" != typeof PointerEvent) {
        let n = n => {
          e.isPointerDown && en(n, t) && l(n), e.isPointerDown = !1
        };
        return document.addEventListener("pointerdown", c, !0), document.addEventListener("pointerup", n, !0), () => {
          document.removeEventListener("pointerdown", c, !0), document.removeEventListener("pointerup", n, !0)
        }
      } else {
        let n = n => {
            e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && en(n, t) && l(n), e.isPointerDown = !1
          },
          r = n => {
            e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && en(n, t) && l(n), e.isPointerDown = !1
          };
        return document.addEventListener("mousedown", c, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("touchend", r, !0), () => {
          document.removeEventListener("mousedown", c, !0), document.removeEventListener("mouseup", n, !0), document.removeEventListener("touchstart", c, !0), document.removeEventListener("touchend", r, !0)
        }
      }
    }
  }, [t, a, c, l])
}

function en(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    let t = e.target.ownerDocument;
    if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
  }
  return t.current && !t.current.contains(e.target)
}

function er(e) {
  if (!e) return;
  let t = !0;
  return n => {
    e({
      ...n,
      preventDefault() {
        n.preventDefault()
      },
      isDefaultPrevented: () => n.isDefaultPrevented(),
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
      },
      continuePropagation() {
        t = !1
      }
    }), t && n.stopPropagation()
  }
}

function eo(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: er(e.onKeyDown),
      onKeyUp: er(e.onKeyUp)
    }
  }
}

function ea(e) {
  let {
    onMoveStart: t,
    onMove: n,
    onMoveEnd: a
  } = e, i = (0, o.useRef)({
    didMove: !1,
    lastPosition: null,
    id: null
  }), {
    addGlobalListener: s,
    removeGlobalListener: c
  } = (0, r.useGlobalListeners)(), l = (0, r.useEffectEvent)((e, r, o, a) => {
    (0 !== o || 0 !== a) && (!i.current.didMove && (i.current.didMove = !0, null == t || t({
      type: "movestart",
      pointerType: r,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    })), n({
      type: "move",
      pointerType: r,
      deltaX: o,
      deltaY: a,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    }))
  }), u = (0, r.useEffectEvent)((e, t) => {
    f(), i.current.didMove && (null == a || a({
      type: "moveend",
      pointerType: t,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    }))
  });
  return {
    moveProps: (0, o.useMemo)(() => {
      let e = {},
        t = () => {
          p(), i.current.didMove = !1
        };
      if ("undefined" == typeof PointerEvent) {
        let n = e => {
            0 === e.button && (l(e, "mouse", e.pageX - i.current.lastPosition.pageX, e.pageY - i.current.lastPosition.pageY), i.current.lastPosition = {
              pageX: e.pageX,
              pageY: e.pageY
            })
          },
          r = e => {
            0 === e.button && (u(e, "mouse"), c(window, "mousemove", n, !1), c(window, "mouseup", r, !1))
          };
        e.onMouseDown = e => {
          0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          }, s(window, "mousemove", n, !1), s(window, "mouseup", r, !1))
        };
        let o = e => {
            let t = [...e.changedTouches].findIndex(e => {
              let {
                identifier: t
              } = e;
              return t === i.current.id
            });
            if (t >= 0) {
              let {
                pageX: n,
                pageY: r
              } = e.changedTouches[t];
              l(e, "touch", n - i.current.lastPosition.pageX, r - i.current.lastPosition.pageY), i.current.lastPosition = {
                pageX: n,
                pageY: r
              }
            }
          },
          a = e => {
            [...e.changedTouches].findIndex(e => {
              let {
                identifier: t
              } = e;
              return t === i.current.id
            }) >= 0 && (u(e, "touch"), i.current.id = null, c(window, "touchmove", o), c(window, "touchend", a), c(window, "touchcancel", a))
          };
        e.onTouchStart = e => {
          if (0 === e.changedTouches.length || null != i.current.id) return;
          let {
            pageX: n,
            pageY: r,
            identifier: c
          } = e.changedTouches[0];
          t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
            pageX: n,
            pageY: r
          }, i.current.id = c, s(window, "touchmove", o, !1), s(window, "touchend", a, !1), s(window, "touchcancel", a, !1)
        }
      } else {
        let n = e => {
            if (e.pointerId === i.current.id) {
              let t = e.pointerType || "mouse";
              l(e, t, e.pageX - i.current.lastPosition.pageX, e.pageY - i.current.lastPosition.pageY), i.current.lastPosition = {
                pageX: e.pageX,
                pageY: e.pageY
              }
            }
          },
          r = e => {
            if (e.pointerId === i.current.id) {
              let t = e.pointerType || "mouse";
              u(e, t), i.current.id = null, c(window, "pointermove", n, !1), c(window, "pointerup", r, !1), c(window, "pointercancel", r, !1)
            }
          };
        e.onPointerDown = e => {
          0 === e.button && null == i.current.id && (t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          }, i.current.id = e.pointerId, s(window, "pointermove", n, !1), s(window, "pointerup", r, !1), s(window, "pointercancel", r, !1))
        }
      }
      let n = (e, n, r) => {
        t(), l(e, "keyboard", n, r), u(e, "keyboard")
      };
      return e.onKeyDown = e => {
        switch (e.key) {
          case "Left":
          case "ArrowLeft":
            e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            e.preventDefault(), e.stopPropagation(), n(e, 0, 1)
        }
      }, e
    }, [i, s, c, l, u])
  }
}

function ei(e, t) {
  let {
    onScroll: n,
    isDisabled: a
  } = e, i = (0, o.useCallback)(e => {
    !e.ctrlKey && (e.preventDefault(), e.stopPropagation(), n && n({
      deltaX: e.deltaX,
      deltaY: e.deltaY
    }))
  }, [n]);
  (0, r.useEvent)(t, "wheel", a ? null : i)
}

function es(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: a,
    onLongPress: i,
    threshold: s = 500,
    accessibilityDescription: c
  } = e, l = (0, o.useRef)(null), {
    addGlobalListener: u,
    removeGlobalListener: d
  } = (0, r.useGlobalListeners)(), {
    pressProps: p
  } = v({
    isDisabled: t,
    onPressStart(e) {
      if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
          ...e,
          type: "longpressstart"
        }), l.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: !0
          })), i && i({
            ...e,
            type: "longpress"
          }), l.current = null
        }, s), "touch" === e.pointerType)) {
        let t = e => {
          e.preventDefault()
        };
        u(e.target, "contextmenu", t, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            d(e.target, "contextmenu", t)
          }, 30)
        }, {
          once: !0
        })
      }
    },
    onPressEnd(e) {
      l.current && clearTimeout(l.current), a && ("mouse" === e.pointerType || "touch" === e.pointerType) && a({
        ...e,
        type: "longpressend"
      })
    }
  }), f = (0, r.useDescription)(i && !t ? c : null);
  return {
    longPressProps: (0, r.mergeProps)(p, f)
  }
}
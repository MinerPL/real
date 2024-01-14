"use strict";
s.r(t), s.d(t, {
  useChipletState: function() {
    return o
  },
  useChipletStateHandlers: function() {
    return d
  }
}), s("222007"), s("424973"), s("860677");
var a = s("884691"),
  n = s("714617"),
  l = s.n(n),
  i = s("817736"),
  r = s("673122");

function o(e) {
  let [t, s] = a.useState([e]), [n, i] = a.useState(0), r = a.useMemo(() => t[n], [t, n]), o = a.useCallback(e => {
    let a = e(r);
    if (l(r, a)) return;
    let o = t.slice(0, n + 1);
    o.push(a), s(o), i(o.length - 1)
  }, [n, r, t]), d = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      s = Math.max(0, n - e);
    return i(s), t[s]
  }, [n, t]), u = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
      s = Math.min(t.length - 1, n + e);
    return i(s), t[s]
  }, [n, t]);
  return {
    state: r,
    setState: o,
    goBack: d,
    goForward: u
  }
}

function d(e, t) {
  let {
    scrollerRef: s,
    mainInputRef: n,
    mainContainerRef: l
  } = t, {
    state: {
      value: o,
      tags: d,
      selections: u
    },
    setState: c,
    goBack: E,
    goForward: _
  } = e;
  a.useLayoutEffect(() => {
    let e = e => t => {
        let s = "Meta" === t.key || "Control" === t.key;
        s && c(t => ({
          ...t,
          isSelecting: e
        }))
      },
      t = e(!0),
      s = e(!1);
    return document.addEventListener("keydown", t), document.addEventListener("keyup", s), () => {
      document.removeEventListener("keydown", t), document.removeEventListener("keyup", s)
    }
  }, [c]);
  let T = a.useCallback(e => {
      var t, a;
      let n = null !== (a = e.clipboardData.getData("text")) && void 0 !== a ? a : "",
        l = n.split(r.CHIPLET_PASTE_SEPERATOR).map(e => e.trim()).filter(e => e.length > 0);
      !(l.length <= 1) && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t,
            value: s
          } = e;
          return {
            value: s,
            tags: [...t, ...l],
            selections: [],
            isSelecting: !1
          }
        })
      }), e.preventDefault(), e.stopPropagation(), null === (t = s.current) || void 0 === t || t.scrollToBottom())
    }, [c, s]),
    I = a.useCallback(e => {
      c(t => {
        let {
          tags: s,
          value: a
        } = t;
        return {
          value: a,
          tags: [...s.filter((t, s) => s !== e)],
          selections: [],
          isSelecting: !1
        }
      })
    }, [c]),
    S = a.useCallback(e => t => {
      c(s => {
        let {
          tags: a,
          value: n
        } = s, l = [...a];
        return l[e] = t, {
          value: n,
          tags: l,
          selections: [],
          isSelecting: !1
        }
      })
    }, [c]),
    N = a.useCallback(e => {
      c(t => {
        let {
          tags: s,
          value: a,
          selections: n,
          isSelecting: l
        } = t;
        return {
          value: a,
          tags: s,
          selections: [...n, s[e]],
          isSelecting: l
        }
      })
    }, [c]),
    g = a.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      c(s => {
        let {
          tags: a,
          value: n,
          selections: l,
          isSelecting: i
        } = s;
        return {
          value: n,
          tags: a,
          selections: t ? [] : l.filter(t => t !== a[e]),
          isSelecting: i
        }
      })
    }, [c]),
    f = a.useCallback(e => {
      var t;
      c(e => {
        let {
          tags: t,
          value: s
        } = e;
        return {
          value: s,
          tags: t,
          selections: [],
          isSelecting: !1
        }
      }), null != e && (e.preventDefault(), e.stopPropagation()), null === (t = n.current) || void 0 === t || t.focus()
    }, [n, c]),
    A = a.useCallback(e => {
      c(t => {
        let {
          tags: s
        } = t;
        return {
          value: e.target.value,
          tags: s,
          selections: [],
          isSelecting: !1
        }
      })
    }, [c]),
    L = a.useCallback(function(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        n = o.trim().length <= 0;
      !n && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t
          } = e;
          return {
            value: "",
            tags: [...t, o],
            selections: [],
            isSelecting: !1
          }
        })
      }), a && null != s.current && s.current.scrollToBottom(), t && (e.preventDefault(), e.stopPropagation()))
    }, [s, c, o]),
    m = a.useCallback(e => {
      let t = o.trim().length <= 0;
      if (u.length > 0) {
        var s;
        (0, i.flushSync)(() => {
          c(e => {
            let {
              tags: t,
              value: s,
              selections: a
            } = e;
            return {
              value: s,
              tags: t.filter(e => !a.includes(e)),
              selections: [],
              isSelecting: !1
            }
          })
        }), null === (s = n.current) || void 0 === s || s.focus(), e.preventDefault(), e.stopPropagation()
      } else t && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t
          } = e, s = [...t], a = s.pop();
          return {
            value: null != a ? a : "",
            tags: [...s],
            selections: [],
            isSelecting: !1
          }
        })
      }), e.preventDefault(), e.stopPropagation())
    }, [n, u.length, c, o]),
    C = a.useCallback(e => {
      var t, s, a, l;
      let i = e.metaKey || e.ctrlKey;
      if ("z" === e.key && i) {
        let a = E();
        a.selections.length > 0 ? null === (t = n.current) || void 0 === t || t.blur() : null === (s = n.current) || void 0 === s || s.focus(), e.preventDefault(), e.stopPropagation()
      } else if ("y" === e.key && i) {
        let t = _();
        t.selections.length > 0 ? null === (a = n.current) || void 0 === a || a.blur() : null === (l = n.current) || void 0 === l || l.focus(), e.preventDefault(), e.stopPropagation()
      }
    }, [E, _, n]),
    O = a.useCallback(e => {
      var t;
      let s = o.trim().length > 0,
        {
          selectionStart: a = 0,
          selectionEnd: r = 0
        } = null !== (t = n.current) && void 0 !== t ? t : {};
      0 !== d.length && (!s || a !== r) && ((0, i.flushSync)(() => {
        c(e => {
          let {
            tags: t,
            value: s
          } = e;
          return {
            value: s,
            tags: t,
            selections: [...t],
            isSelecting: !1
          }
        })
      }), setImmediate(() => {
        var e;
        null === (e = n.current) || void 0 === e || e.blur(), setTimeout(() => {
          var e;
          null === (e = l.current) || void 0 === e || e.focus()
        }, 16)
      }), e.preventDefault(), e.stopPropagation())
    }, [l, n, c, d.length, o]),
    h = a.useCallback(e => {
      e.relatedTarget !== e.currentTarget && L(e, !1, !1)
    }, [L]),
    R = a.useCallback(e => {
      let t = e.metaKey || e.ctrlKey;
      "Meta" !== e.key && (r.NEXT_CHIP_INPUT_KEY.has(e.key) ? L(e) : "Backspace" === e.key ? m(e) : "Escape" === e.key ? f(e) : "a" === e.key && t ? O(e) : r.CHIPLET_STATE_HISTORY_KEYS.has(e.key) && t && C(e))
    }, [L, m, f, O, C]),
    D = a.useCallback(e => {
      if (document.activeElement !== l.current) return;
      let t = e.metaKey || e.ctrlKey;
      "Backspace" === e.key ? m(e) : "a" === e.key && t ? O(e) : "Escape" === e.key ? f(e) : r.CHIPLET_STATE_HISTORY_KEYS.has(e.key) && t ? C(e) : "Meta" !== e.key && f(e)
    }, [C, m, O, f, l]);
  return {
    handlePasteEvent: T,
    handleInputChange: A,
    handleKeyDown: R,
    handleContainerKeyUp: D,
    handleRemoveTag: I,
    handleTagChangeEvent: S,
    handleSelectTag: N,
    handleUnselectTag: g,
    handleResetTagSelections: f,
    handleInputBlurEvent: h
  }
}
"use strict";
n.r(t), n.d(t, {
  hasDomParent: function() {
    return r
  },
  normalizeDOMPoint: function() {
    return o
  }
}), n("70102"), n("222007");
var l = n("371621");
let i = !1;
{
  l.ReactEditor.toSlateRange = (e, t, n) => {
    let i, r, o, s, a, {
      exactMatch: u,
      suppressThrow: c
    } = n;
    if (function(e) {
        let t = e && e.anchorNode && d(e.anchorNode);
        return null != t && e instanceof t.Selection
      }(t) ? (i = t.anchorNode, r = t.anchorOffset, o = t.focusNode, s = t.focusOffset, a = t.isCollapsed) : (i = t.startContainer, r = t.startOffset, o = t.endContainer, s = t.endOffset, a = t.collapsed), null == i || null == o || null == r || null == s) {
      if (c) return null;
      throw Error("Cannot resolve a Slate range from DOM range")
    }
    let f = l.ReactEditor.toSlatePoint(e, [i, r], {
        exactMatch: u,
        suppressThrow: c
      }),
      p = a ? f : l.ReactEditor.toSlatePoint(e, [o, s], {
        exactMatch: u,
        suppressThrow: c
      });
    return null != f && null != p ? {
      anchor: f,
      focus: p
    } : null
  };
  let e = l.ReactEditor.toSlatePoint;
  l.ReactEditor.toSlatePoint = (t, n, l) => {
    let {
      exactMatch: i,
      suppressThrow: r,
      direction: s = "forward"
    } = l;
    !i && (n = o(n, s));
    try {
      return e(t, n, {
        exactMatch: !0,
        suppressThrow: r
      })
    } catch (e) {
      if (r) return null;
      throw e
    }
  }, i = !0
}

function r(e, t) {
  if (null == t) return !1;
  for (; null != e;) {
    if (e === t) return !0;
    e = e.parentNode
  }
  return !1
}

function o(e, t) {
  let n, [l, i] = e;
  if (!a(l) || 0 === l.childNodes.length) return e;
  for ("forward" === t && i === l.childNodes.length && (t = "backward"), "backward" === t && i--, [l, n] = s(l, i, t), "forward" === t && n < i ? t = "backward" : "backward" === t && n > i && (t = "forward"), i = n; a(l) && l.childNodes.length > 0;) {
    let e = "backward" === t ? l.childNodes.length - 1 : 0;
    l = s(l, e, t)[0]
  }
  let r = "backward" === t && null != l.textContent ? l.textContent.length : 0;
  return [l, r]
}

function s(e, t, n) {
  let {
    childNodes: l
  } = e, i = l[t], r = t, o = !1, s = !1;
  for (;
    (function(e) {
      return u(e) && 8 === e.nodeType
    }(i) || a(i) && 0 === i.childNodes.length || a(i) && "false" === i.getAttribute("contenteditable")) && (!o || !s);) {
    ;
    if (r >= l.length) {
      o = !0, r = t - 1, n = "backward";
      continue
    }
    if (r < 0) {
      s = !0, r = t + 1, n = "forward";
      continue
    }
    i = l[r], t = r, r += "forward" === n ? 1 : -1
  }
  return [i, t]
}

function a(e) {
  return u(e) && 1 === e.nodeType
}

function u(e) {
  let t = d(e);
  return null != t && e instanceof t.Node
}

function d(e) {
  return e && e.ownerDocument && e.ownerDocument.defaultView || null
}
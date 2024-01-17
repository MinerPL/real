"use strict";
n.r(t), n.d(t, {
  getDefaultKeyBinding: function() {
    return a
  },
  updateContent: function() {
    return y
  },
  deleteContent: function() {
    return b
  },
  miscCommand: function() {
    return F
  },
  getFirstTextBlock: function() {
    return I
  },
  applyTokensAsEntities: function() {
    return N
  },
  createEmptyEditorState: function() {
    return L
  },
  clearContent: function() {
    return _
  },
  replaceAllContent: function() {
    return j
  },
  setCollapsedSelection: function() {
    return O
  },
  setCollapsedEndSelection: function() {
    return R
  },
  setCollapsedStartSelection: function() {
    return k
  },
  setToStartSelection: function() {
    return w
  },
  setToEndSelection: function() {
    return P
  },
  truncateContent: function() {
    return H
  },
  scrollCursorIntoView: function() {
    return B
  },
  isEmpty: function() {
    return D
  }
}), n("222007"), n("424973");
var l = n("98159"),
  r = n("952352"),
  a = n.n(r),
  i = n("401816"),
  s = n.n(i),
  u = n("958551"),
  o = n.n(u),
  c = n("661183"),
  d = n.n(c),
  f = n("823821"),
  m = n.n(f),
  g = n("928429"),
  E = n.n(g),
  h = n("234553"),
  C = n.n(h),
  p = n("65994"),
  S = n.n(p),
  T = n("718144"),
  A = n.n(T),
  v = n("640330"),
  x = n.n(v);

function M(e, t, n, r) {
  let a = r.getCurrentContent(),
    i = null;
  null != e && (i = (a = a.createEntity(...e)).getLastCreatedEntityKey());
  let s = a.getFirstBlock(),
    u = new l.SelectionState({
      anchorKey: s.getKey(),
      anchorOffset: t,
      focusKey: s.getKey(),
      focusOffset: n
    });
  return a = l.Modifier.applyEntity(a, u, i), l.EditorState.set(r, {
    currentContent: a
  })
}

function y(e, t, n, r) {
  let a, i;
  let u = t.getCurrentContent(),
    o = u.getFirstBlock(),
    c = o.getText();
  "number" == typeof n ? (n > c.length && (n = c.length), null != r && r > c.length && (r = c.length), a = new l.SelectionState({
    anchorKey: o.getKey(),
    anchorOffset: n,
    focusKey: o.getKey(),
    focusOffset: null != r && 0 !== r ? r : n
  })) : a = t.getSelection();
  let d = t.getCurrentInlineStyle(),
    f = s(u, a);
  return a.isCollapsed() ? (u = l.Modifier.insertText(u, a, e, d, f), i = "insert-characters") : (u = l.Modifier.replaceText(u, a, e, d, f), i = "replace-characters"), l.EditorState.push(t, u, i)
}

function b(e, t) {
  switch (e) {
    case "delete":
      return A(t);
    case "delete-word":
      return m(t);
    case "backspace":
      return S(t);
    case "backspace-word":
      return d(t);
    case "backspace-to-start-of-line":
      return o(t);
    default:
      return t
  }
}

function F(e, t) {
  switch (e) {
    case "transpose-characters":
      return x(t);
    case "move-selection-to-start-of-block":
      return C(t);
    case "move-selection-to-end-of-block":
      return E(t);
    default:
      return t
  }
}

function I(e) {
  return e.getCurrentContent().getFirstBlock().getText()
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    l = t.getCurrentContent(),
    r = l.getFirstBlock(),
    a = r.getText(),
    i = [];
  return r.findEntityRanges(e => null !== e.getEntity(), (e, t) => {
    let n = l.getEntity(r.getEntityAt(e)).getType(),
      s = a.substring(e, t);
    i.push({
      processed: !1,
      type: n,
      start: e,
      end: t,
      text: s
    })
  }), e.forEach(e => {
    let l = !1;
    if (i.forEach(n => {
        let {
          type: r,
          start: a,
          end: i
        } = e, s = e.getFullMatch();
        !n.processed && (n.type === r && n.start === a && n.text === s ? (n.processed = !0, l = !0) : (a >= n.start && a < n.end || i > n.start && i <= n.end) && (n.processed = !0, t = M(null, n.start, n.end, t)))
      }), l) return;
    let r = n[e.type];
    t = M([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", {
      token: e
    }], e.start, e.end, t)
  }), i.forEach(e => {
    !e.processed && (t = M(null, e.start, e.end, t))
  }), t
}

function L(e) {
  return l.EditorState.createEmpty(new l.CompositeDecorator(e))
}

function _(e) {
  let t = l.EditorState.push(e, l.ContentState.createFromText("")),
    n = e.getSelection();
  return null != n && n.hasFocus && (t = l.EditorState.moveFocusToEnd(t)), t
}

function j(e, t) {
  let n = I(t);
  return y(e, t, 0, n.length)
}

function O(e, t) {
  let n = t.getSelection();
  return n = (n = n.set("focusOffset", e)).set("anchorOffset", e), l.EditorState.forceSelection(t, n)
}

function R(e) {
  let t = e.getCurrentContent().getFirstBlock().getText();
  return O(t.length, e)
}

function k(e) {
  return O(0, e)
}

function w(e) {
  let t = e.getSelection();
  return t = (t = t.set("focusOffset", 0)).set("isBackward", !0), l.EditorState.forceSelection(e, t)
}

function P(e) {
  let t = I(e),
    n = e.getSelection();
  return n = (n = n.set("focusOffset", t.length)).set("isBackward", !1), l.EditorState.forceSelection(e, n)
}

function H(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
    n = I(e);
  if (n.length > t) {
    let r = e.getSelection();
    e = y("", e, t, n.length), r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)), r.getFocusOffset() > t && (r = r.set("focusOffset", t)), e = l.EditorState.forceSelection(e, r)
  }
  return e
}

function B(e) {
  let t = window.getSelection();
  if (null == t || "Caret" !== t.type || null == e) return;
  let n = t.getRangeAt(0);
  if (! function(e, t) {
      for (; null != e;) {
        if (e === t) return !0;
        e = e.parentNode
      }
      return !1
    }(n.commonAncestorContainer, e)) return;
  let l = n.getClientRects()[0],
    r = e.getClientRects()[0];
  if (null == l || null == r) return;
  let a = l.left - r.left,
    i = a + e.scrollLeft;
  i < e.scrollLeft ? e.scrollLeft = i - 10 : i > e.scrollLeft + e.offsetWidth && (e.scrollLeft = i - e.offsetWidth + 3)
}

function D(e) {
  return 0 === I(e).length
}
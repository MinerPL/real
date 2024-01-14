"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("83800"),
  i = n("385887");

function r(e, t) {
  let {
    apply: n,
    deleteBackward: r,
    deleteForward: s,
    deleteFragment: a,
    insertData: u,
    insertText: d,
    onChange: c
  } = e;

  function f(n) {
    let i = l.HistoryUtils.currentEntry(e);
    if (null != i && (i.mergeable = !1), n >= e.history.stack.length) return;
    e.history.index = n;
    let r = l.HistoryUtils.currentEntry(e);
    t({
      newValue: r.value,
      newSelection: r.selection
    })
  }
  e.history = {
    index: 0,
    stack: []
  }, e.onChange = () => {
    let {
      history: t
    } = e;
    0 === t.stack.length && (t.stack = [o(e)], t.index = 0), null != e.selection && (l.HistoryUtils.currentEntry(e).selection = e.selection), m = null, c()
  }, e.undo = () => {
    e.history.index > 0 && f(e.history.index - 1)
  }, e.redo = () => {
    e.history.index < e.history.stack.length - 1 && f(e.history.index + 1)
  };
  let p = null,
    m = null,
    h = null;
  return e.apply = t => {
    let {
      history: r
    } = e;
    n(t);
    let s = i.EditorUtils.richValue(e);
    s !== h && (0 === r.stack.length && (r.stack = [o(e)], r.index = 0), l.HistoryUtils.isSaving(e) && (function(e, t, n) {
      let i;
      let {
        selection: r
      } = e, o = l.HistoryUtils.currentEntry(e), s = !0, a = !0;
      if ("insert_text" === t.type && 1 === t.text.length ? (i = "insert", a = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", s = !1, a = !1), "set_selection" === t.type && null != o) {
        o.selection = r;
        return
      }
      s && function(e, t) {
        return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
      }(o, i) ? l.HistoryUtils.insertOrMergeEntry(e, i, a) : l.HistoryUtils.insertEntry(e, i, a)
    }(e, t, p), p = t), m = t, h = s)
  }, e.deleteBackward = t => {
    l.HistoryUtils.withSingleEntry(e, () => r(t))
  }, e.deleteForward = t => {
    l.HistoryUtils.withSingleEntry(e, () => s(t))
  }, e.deleteFragment = t => {
    l.HistoryUtils.withSingleEntry(e, () => a(t))
  }, e.insertText = t => {
    1 === t.length && (null == m ? void 0 : m.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => d(t)) : null != e.selection && i.RangeUtils.isExpanded(e.selection) ? l.HistoryUtils.withSingleEntry(e, () => d(t)) : d(t)
  }, e.insertData = t => {
    (null == m ? void 0 : m.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => u(t)): l.HistoryUtils.withSingleEntry(e, () => u(t))
  }, e
}

function o(e) {
  return {
    type: "other",
    mergeable: !1,
    createdAt: Date.now(),
    value: i.EditorUtils.richValue(e),
    selection: e.selection
  }
}
"use strict";
n.r(t), n.d(t, {
  withReact: function() {
    return o
  }
});
var l = n("371621"),
  i = n("939563"),
  r = n("385887");
let o = (e, t) => {
  let {
    addMark: n,
    removeMark: o,
    deleteBackward: s,
    deleteForward: a,
    setFragmentData: u,
    insertData: d,
    insertFragmentData: c,
    insertTextData: f
  } = e;
  return (e = (0, l.withReact)(e)).addMark = n, e.removeMark = o, e.setFragmentData = u, e.insertData = d, e.insertFragmentData = c, e.insertTextData = f, e.deleteBackward = n => {
    if ("line" !== n || t) s(n);
    else {
      let t = r.DOMUtils.getLineActionRange(e, !0);
      null != t && i.SlateTransforms.delete(e, {
        at: t
      })
    }
  }, e.deleteForward = n => {
    if ("line" !== n || t) a(n);
    else {
      let t = r.DOMUtils.getLineActionRange(e, !1);
      null != t && i.SlateTransforms.delete(e, {
        at: t
      })
    }
  }, e
}
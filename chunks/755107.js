"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var l = n("939563"),
  i = n("385887"),
  r = n("566819");

function o(e) {
  let {
    apply: t,
    onChange: n
  } = e;
  return e.apply = n => {
    t(n), i.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
  }, e.onChange = () => {
    if (!i.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
        let t;
        if (i.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
        else {
          let n = i.EditorUtils.end(e, []);
          t = {
            anchor: n,
            focus: n
          }
        }
        return t
      }(e)), null != e.selection) {
      let t, n, [o, s] = i.RangeUtils.edges(e.selection),
        a = !1;
      for (; null != o && null != (t = i.EditorUtils.getParentVoid(e, o)) && !r.SELECTABLE_VOIDS.includes(t[0].type);) o = i.EditorUtils.before(e, o, {
        unit: "offset"
      }), a = !0;
      for (; null != s && null != (n = i.EditorUtils.getParentVoid(e, s)) && !r.SELECTABLE_VOIDS.includes(n[0].type);) s = i.EditorUtils.after(e, s, {
        unit: "offset"
      }), a = !0;
      a && null != o && null != s && (i.RangeUtils.isForward(e.selection) ? l.SlateTransforms.select(e, {
        anchor: o,
        focus: s
      }) : l.SlateTransforms.select(e, {
        anchor: s,
        focus: o
      }))
    }
    n()
  }, e
}
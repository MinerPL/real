"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007"), n("424973");
var l = n("135038"),
  i = n("385887");

function r(e, t) {
  if (i.EditorUtils.areStylesDisabled(e)) return [];
  let [n, r] = t, o = [];
  if (!i.NodeUtils.isType(n, "line") || null == n.codeBlockState) return o;
  let {
    hljsTypes: s,
    isStyledCodeBlockLine: a
  } = n.codeBlockState;
  if (null == s || 0 === s.length || !a) return [];
  for (let t of s) {
    let s = n.children.map(e => i.TextUtils.isText(e) ? e.text : null);
    o.push({
      hljsTypes: t.types,
      anchor: (0, l.getPointFromPosition)(e, r, s, t.start),
      focus: (0, l.getPointFromPosition)(e, r, s, t.end)
    })
  }
  return o
}
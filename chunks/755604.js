"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007"), n("424973");
var l = n("385887");

function i(e, t) {
  if (l.EditorUtils.areStylesDisabled(e)) return [];
  let [n, i] = t, r = [];
  if (!l.TextUtils.isText(n)) return r;
  let [o] = l.EditorUtils.node(e, l.PathUtils.parent(i));
  return l.NodeUtils.isType(o, "applicationCommand") ? (n === o.children[0] && r.push({
    anchor: {
      path: i,
      offset: 0
    },
    focus: {
      path: i,
      offset: 0 + o.command.displayName.length + 1
    },
    commandName: !0
  }), r) : r
}
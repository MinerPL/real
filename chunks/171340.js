"use strict";
var n = r("881854"),
  i = r("791478"),
  o = r("816008"),
  a = r("289919"),
  u = r("844126"),
  s = r("198846"),
  c = r("761558"),
  l = r("95597"),
  f = r("150740"),
  p = r("168242"),
  h = r("174580"),
  d = r("997932"),
  g = r("813324"),
  y = n.isBrowser("Chrome") ? g : function(t) {};
t.exports = {
  onBeforeInput: i,
  onBlur: o,
  onCompositionStart: a,
  onCopy: u,
  onCut: s,
  onDragOver: c,
  onDragStart: l,
  onFocus: f,
  onInput: p,
  onKeyDown: h,
  onPaste: d,
  onSelect: g,
  onMouseUp: y,
  onKeyUp: y
}
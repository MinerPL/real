"use strict";
n.r(t), n.d(t, {
  generateDecorators: function() {
    return r
  },
  getSelectionScope: function() {
    return o
  }
}), n("424973");
var l = n("954172");
n("76385");
var a = n("955513");
n("202752");
var s = n("751520");
n("49111");
let i = {
  [a.ComponentTypes.FILTER]: l.Filter,
  [a.ComponentTypes.ANSWER]: l.Answer
};

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(e).forEach(n => {
    let l = e[n];
    t.push({
      strategy: (e, t, l) => (function(e, t, n, l) {
        t.findEntityRanges(t => {
          let n = t.getEntity();
          return null !== n && e.getEntity(n).getType() === l
        }, n)
      })(l, e, t, n),
      component: i[l.componentType]
    })
  }), t
}

function o(e, t) {
  let {
    focusOffset: n,
    anchorOffset: l
  } = t.getSelection();
  return (0, s.getSelectionScope)(e, n, l)
}
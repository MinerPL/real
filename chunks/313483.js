"use strict";
n.r(t), n.d(t, {
  generateDecorators: function() {
    return r
  },
  getSelectionScope: function() {
    return o
  }
}), n("424973");
var a = n("954172");
n("76385");
var l = n("955513");
n("202752");
var s = n("751520");
n("49111");
let i = {
  [l.ComponentTypes.FILTER]: a.Filter,
  [l.ComponentTypes.ANSWER]: a.Answer
};

function r() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = [];
  return Object.keys(e).forEach(n => {
    let a = e[n];
    t.push({
      strategy: (e, t, a) => (function(e, t, n, a) {
        t.findEntityRanges(t => {
          let n = t.getEntity();
          return null !== n && e.getEntity(n).getType() === a
        }, n)
      })(a, e, t, n),
      component: i[a.componentType]
    })
  }), t
}

function o(e, t) {
  let {
    focusOffset: n,
    anchorOffset: a
  } = t.getSelection();
  return (0, s.getSelectionScope)(e, n, a)
}
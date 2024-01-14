"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("917351"),
  i = a.n(s),
  d = a("339274"),
  r = a("605143"),
  u = a("88243"),
  o = a("67602"),
  c = a("318675");

function f() {
  let e = n.useMemo(() => {
    if (!(.5 > i.random(1))) return {
      ...(0, u.generateAttachmentSpec)(),
      last: !0
    }
  }, []);
  return (0, l.jsxs)(d.default, {
    "aria-hidden": !0,
    ariaLabel: "",
    children: [(0, l.jsx)(r.default, {
      children: (0, l.jsx)(o.ContentBlob, {
        className: c.channelName,
        opacity: .3,
        width: 80
      })
    }), (0, l.jsx)("div", {
      className: c.body,
      children: (0, l.jsx)(o.default, {
        messages: 5,
        attachmentSpecs: e,
        className: c.withoutCustomBackground
      })
    })]
  })
}
var m = n.memo(function(e) {
  let {
    count: t
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: i.times(null != t ? t : 5, e => (0, l.jsx)(f, {}, e))
  })
})
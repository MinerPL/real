"use strict";
n.r(t), n.d(t, {
  OperatingSystemSection: function() {
    return T
  }
}), n("70102");
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("84084"),
  o = n("260162"),
  u = n("415844"),
  d = n("49111"),
  c = n("782340"),
  f = n("50536");
let E = {
  [d.OperatingSystems.WINDOWS]: {
    icon: u.default,
    getLabel: () => c.default.Messages.WINDOWS
  },
  [d.OperatingSystems.MACOS]: {
    icon: o.default,
    getLabel: () => c.default.Messages.MACOS
  },
  [d.OperatingSystems.LINUX]: {
    icon: r.default,
    getLabel: () => c.default.Messages.LINUX
  }
};

function _(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, l = E[t];
  if (null == l) throw Error("Unexpected operating system: ".concat(t));
  let a = l.icon;
  return (0, s.jsx)(i.Tooltip, {
    text: l.getLabel(),
    children: e => (0, s.jsx)(a, {
      ...e,
      className: n
    })
  })
}
let T = e => {
  let {
    systems: t,
    className: n,
    iconClassName: l
  } = e;
  return (0, s.jsx)("div", {
    className: a(f.OSSection, n),
    children: t.map(e => (0, s.jsx)(_, {
      operatingSystem: e,
      className: a(f.purchaseUnitOperatingSystem, l)
    }, e))
  })
}
"use strict";
n.r(t), n.d(t, {
  TimeInput: function() {
    return l
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("774811"),
  a = n("859973"),
  o = n("407774");

function l(e) {
  let {
    value: t,
    onChange: n,
    hideValue: l,
    disabled: u = !1
  } = e, c = r.useRef(null), d = r.useMemo(() => new a.TimeOptions, []), [f, E] = r.useState("");

  function h(e) {
    null != t && n((0, a.timeAtSpecificDay)(t, d.selectValue(e)))
  }
  return (0, i.jsx)(s.SearchableSelect, {
    ref: c,
    className: o.select,
    options: d.getOptions(f),
    value: l ? void 0 : d.lookupByValue(t),
    onChange: h,
    isDisabled: u,
    onSearchChange: E,
    onKeyDown: function(e) {
      if ("Enter" === e.key) {
        let e = (0, a.convertToTimeOfADay)(t, f);
        if (null != e) {
          var n;
          h(e), null === (n = c.current) || void 0 === n || n.close()
        }
      }
    }
  })
}
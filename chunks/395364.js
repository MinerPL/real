"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("781738"), n("222007");
var l = n("37983");
n("884691");
var i = n("77078"),
  r = n("646630"),
  o = n("433417");

function s(e, t) {
  if (!("type" in e)) return null;
  if ("timestamp" === e.type) return (0, l.jsx)(a, {
    ...t,
    timestamp: e.parsed
  });
  return null
}

function a(e) {
  var t;
  let {
    timestamp: n,
    replace: s
  } = e, a = e => {
    let {
      timestamp: t,
      format: l
    } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, o = null != l ? l : n.format, a = (0, r.unparseTimestamp)(i, o);
    s(a)
  };
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [(0, l.jsx)(i.DateInput, {
      value: n.parsed,
      onSelect: e => {
        a({
          timestamp: e.toDate()
        })
      }
    }), (0, l.jsx)(i.TimeInput, {
      value: n.parsed,
      onChange: e => {
        a({
          timestamp: e.toDate()
        })
      }
    }), (0, l.jsx)(i.RadioGroup, {
      options: Object.entries(r.TIMESTAMP_FORMATS).map(e => {
        let [t, l] = e;
        return {
          name: l(n.parsed),
          value: t
        }
      }),
      value: null !== (t = n.format) && void 0 !== t ? t : r.DEFAULT_TIMESTAMP_FORMAT,
      size: i.RadioGroup.Sizes.SMALL,
      onChange: e => {
        let {
          value: t
        } = e;
        a({
          format: t
        })
      }
    })]
  })
}
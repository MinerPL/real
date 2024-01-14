"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var u = n("37983"),
  r = n("884691"),
  a = n("714617"),
  s = n.n(a),
  l = n("448105"),
  i = n.n(l),
  o = n("446674"),
  d = n("77078"),
  c = n("211470"),
  f = n("789563"),
  S = n("760190"),
  E = n("228220"),
  M = n("843039"),
  m = n("782340");

function p(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: r
  } = e;
  return (0, u.jsxs)(d.MenuItem, {
    id: t,
    label: n.title,
    action: () => (0, c.overrideBucket)(t, null),
    children: [n.buckets.map(e => (0, u.jsx)(d.MenuCheckboxItem, {
      id: "".concat(e),
      label: M.default.getExperimentBucketName(e),
      checked: e === r,
      action: () => (0, c.overrideBucket)(t, e)
    }, "".concat(e))), (0, u.jsx)(d.MenuGroup, {
      children: -1 !== r && (0, u.jsx)(d.MenuItem, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: E.default,
        action: () => (0, c.overrideBucket)(t, null)
      })
    })]
  }, t)
}

function T() {
  let e = (0, o.useStateFromStores)([f.default, S.default], () => {
      let e = S.default.getRegisteredExperiments();
      return Object.keys(e).map(t => {
        let n = e[t],
          u = f.default.getExperimentOverrideDescriptor(t);
        return {
          id: t,
          experiment: n,
          currentBucket: null != u ? u.bucket : -1
        }
      })
    }, [], s),
    [t, n] = r.useState(""),
    [a, l] = r.useState([]);
  r.useEffect(() => {
    if (0 === t.trim().length) {
      l(e);
      return
    }
    l(e.filter(e => i(t, e.experiment.title.toLowerCase())))
  }, [e, t]);
  let c = r.useMemo(() => a.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 !== t
    }), [a]),
    E = r.useMemo(() => a.filter(e => {
      let {
        currentBucket: t
      } = e;
      return -1 === t
    }), [a]),
    M = r.useMemo(() => c.map(p), [c]),
    T = r.useMemo(() => E.map(p), [E]),
    I = (0, u.jsx)(d.MenuControlItem, {
      id: "experiments-search",
      control: (e, r) => (0, u.jsx)(d.MenuSearchControl, {
        ...e,
        query: t,
        onChange: n,
        ref: r,
        placeholder: m.default.Messages.SEARCH
      })
    }, "experiments-search");
  return [I, (0, u.jsx)(d.MenuSeparator, {}, "separator"), ...M, M.length > 0 ? (0, u.jsx)(d.MenuSeparator, {}, "separator-2") : null, ...T]
}
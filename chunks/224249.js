"use strict";
r.r(t), r.d(t, {
  default: function() {
    return A
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("866227"),
  s = r.n(o),
  c = r("446674"),
  d = r("77078"),
  u = r("145079"),
  h = r("697218"),
  p = r("756609"),
  f = r("228220"),
  m = r("664336"),
  g = r("888400"),
  y = r("398570"),
  b = r("370492"),
  x = r("332814"),
  k = r("928063"),
  v = r("637171"),
  C = r("724209"),
  S = r("782340"),
  j = r("185187"),
  T = r("694735");
let w = [{
  key: "event",
  cellClassName: j.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: j.locationColumn,
  render(e) {
    let {
      properties: t
    } = e;
    return t.location
  }
}];

function N(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(d.ScrollerThin, {
    className: j.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: t
    })
  })
}

function E(e) {
  let {
    name: t,
    children: r
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: j.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      className: j.customPropertiesValue,
      children: r
    })]
  })
}
let L = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: r,
          timestamp: n,
          fingerprint: i
        }
      } = e, o = h.default.getUser(i), c = s(n);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(m.default, {
          className: l(T.headerBar, j.subPanelHeaderBar),
          children: [(0, a.jsx)(m.default.Icon, {
            icon: p.default,
            tooltip: t
          }), (0, a.jsx)(m.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: j.commonProperties,
          children: [(0, a.jsx)(x.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: n.toISOString(),
              title: (0, g.dateFormat)(c, "LLLL"),
              children: (0, g.calendarFormat)(c)
            })
          }), null != o && (0, a.jsx)(x.Property, {
            name: "User",
            children: (0, a.jsx)(u.default, {
              user: o
            })
          }), (0, a.jsx)(x.Property, {
            name: "Fingerprint",
            children: (0, a.jsx)("code", {
              children: i
            })
          })]
        }), (0, a.jsx)(N, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(E, {
              name: "".concat(t, ":"),
              children: null != r ? (0, a.jsx)("code", {
                children: JSON.stringify(r)
              }) : (0, a.jsx)("code", {
                className: j.emptyProperty,
                children: "null"
              })
            }, t)
          })
        })]
      })
    }
  }],
  _ = {
    events: {
      label: "Events",
      filter: e => Object.entries(_).filter(e => {
        let [t] = e;
        return "events" !== t
      }).map(t => {
        let [r, {
          filter: a
        }] = t;
        return !a(e)
      }).every(e => e)
    },
    experiments: {
      label: "Experiments",
      filter: e => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event)
    },
    impressions: {
      label: "Impressions",
      filter: e => e.event.startsWith("impression_")
    },
    networkActions: {
      label: "Network",
      filter: e => e.event.startsWith("network_action")
    }
  };

function A() {
  let e = n.useRef(null),
    t = (0, c.useStateFromStores)([y.default], () => y.default.loggedEvents),
    [r, i] = n.useState(Object.keys(_)),
    o = t.filter(e => {
      for (let t of r)
        if (_[t].filter(e)) return !0;
      return !1
    }),
    [s, u] = n.useState(void 0),
    h = o.find(e => e.key === s),
    {
      TabBar: p,
      renderSelectedTab: m
    } = (0, C.default)({
      tabs: L
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l(T.panel, j.panel),
    children: [(0, a.jsxs)("div", {
      className: j.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: j.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: b.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(f.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsx)("div", {
        className: j.filters,
        children: Object.entries(_).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(d.Clickable, {
            className: l(j.filter, r.includes(t) && j.activeFilter),
            onClick: () => {
              var e;
              return e = t, void i(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: j.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: w,
        data: o,
        selectedRowKey: s,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: j.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), m({
        loggedEvent: h
      })]
    })]
  })
}
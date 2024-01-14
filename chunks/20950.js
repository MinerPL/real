"use strict";
r.r(t), r.d(t, {
  default: function() {
    return _
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("448105"),
  s = r.n(o),
  c = r("866227"),
  d = r.n(c),
  u = r("446674"),
  h = r("77078"),
  p = r("913144"),
  f = r("810567"),
  m = r("756609"),
  g = r("228220"),
  y = r("664336"),
  b = r("888400"),
  x = r("398570"),
  k = r("370492"),
  v = r("332814"),
  C = r("928063"),
  S = r("637171"),
  j = r("724209"),
  T = r("782340"),
  w = r("185187"),
  N = r("694735");
let E = [{
    key: "id",
    cellClassName: w.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: w.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: w.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  L = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: r,
          exposureType: n,
          excluded: i,
          timestamp: o,
          location: s,
          previouslyTracked: c
        }
      } = e, u = d(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(y.default, {
          className: l(N.headerBar, w.subPanelHeaderBar),
          children: [(0, a.jsx)(y.default.Icon, {
            icon: m.default,
            tooltip: t
          }), (0, a.jsx)(y.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.Properties, {
          className: w.commonProperties,
          children: [(0, a.jsx)(v.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, b.dateFormat)(u, "LLLL"),
              children: (0, b.calendarFormat)(u)
            })
          }), "guild" === r.type && (0, a.jsx)(v.Property, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: r.guildId
            })
          }), (0, a.jsx)(v.Property, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: r.bucket
            })
          }), (0, a.jsx)(v.Property, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: r.revision
            })
          }), (0, a.jsx)(v.Property, {
            name: "Override",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: r.override
            })
          }), (0, a.jsx)(v.Property, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: n
            })
          }), (0, a.jsx)(v.Property, {
            name: "Excluded",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: i
            })
          }), (0, a.jsx)(v.Property, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: c
            })
          }), (0, a.jsx)(v.Property, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: s
            })
          })]
        })]
      })
    }
  }];

function _() {
  let [e, t] = n.useState(""), r = n.useRef(null), i = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = n.useMemo(() => i.filter(t => 0 === e.length || s(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [c, d] = n.useState(void 0), m = o.find(e => e.key === c), {
    TabBar: y,
    renderSelectedTab: b
  } = (0, j.default)({
    tabs: L
  }, []), v = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), _ = n.useCallback(e => {
    p.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: r,
    className: l(N.panel, w.panel),
    children: [(0, a.jsxs)("div", {
      className: w.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: w.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: v,
          onChange: _,
          className: w.toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: w.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: k.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: T.default.Messages.CLEAR,
          children: (0, a.jsx)(g.default, {
            "aria-label": T.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(f.default, {
        className: w.searchBar,
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: w.tableContainer,
      children: (0, a.jsx)(S.default, {
        columns: E,
        data: o,
        selectedRowKey: c,
        onClickRow: d
      })
    }), null != m && (0, a.jsxs)(C.default, {
      className: w.subPanel,
      minHeight: 100,
      initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(y, {}), b({
        loggedTrigger: m
      })]
    })]
  })
}
"use strict";
l.r(t), l.d(t, {
  roleToPendingAddition: function() {
    return V
  },
  channelToPendingAddition: function() {
    return B
  },
  default: function() {
    return Z
  }
}), l("222007");
var a, n, s, i, o, d, C = l("37983"),
  r = l("884691"),
  u = l("414456"),
  c = l.n(u),
  f = l("448105"),
  m = l.n(f),
  E = l("446674"),
  M = l("77078"),
  h = l("137223"),
  T = l("679653"),
  x = l("419830"),
  H = l("405645"),
  _ = l("19766"),
  A = l("42203"),
  L = l("305961"),
  g = l("27618"),
  N = l("697218"),
  p = l("476765"),
  S = l("483093"),
  v = l("782340"),
  R = l("159260");
let I = (0, p.uid)(),
  j = (0, p.uid)(),
  b = "text-sm/medium";

function D(e) {
  return 1 === e.type
}

function O(e) {
  return 0 === e.type
}

function V(e) {
  let t = "".concat(e.name.includes(_.EVERYONE_ID) ? "" : "@").concat(e.name);
  return {
    tag: {
      type: h.RichTagTypes.ROLE,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 1,
      record: e
    }
  }
}

function B(e) {
  let t = (0, T.computeChannelName)(e, N.default, g.default);
  return {
    tag: {
      type: h.RichTagTypes.CHANNEL,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 0,
      record: e
    }
  }
}(i = a || (a = {}))[i.CHANNEL = 0] = "CHANNEL", i[i.ROLE = 1] = "ROLE";
let F = r.memo(function(e) {
  var t;
  let {
    row: l,
    guildId: a,
    className: n
  } = e, {
    id: s,
    name: i
  } = l.record, o = (0, H.useRoleIcon)({
    guildId: a,
    roleId: s,
    size: 16
  }), d = (0, E.useStateFromStores)([L.default], () => {
    let e = L.default.getGuild(a);
    return null == e ? null : e.roles[s]
  }, [s, a]), r = i.includes(_.EVERYONE_ID) ? "" : "@", u = (0, M.useToken)(M.tokens.unsafe_rawColors.PRIMARY_300).hsl(), f = null !== (t = null == d ? void 0 : d.colorString) && void 0 !== t ? t : u;
  return (0, C.jsxs)("div", {
    className: c(R.rowLabel, R.roleTagContainer, n),
    children: [(0, C.jsx)(M.RoleDot, {
      className: R.roleDot,
      color: f,
      background: !1,
      tooltip: !1
    }), null != o ? (0, C.jsx)(S.default, {
      className: R.roleTagIcon,
      ...o,
      enableTooltip: !1
    }) : r, (0, C.jsx)(M.Text, {
      variant: b,
      className: R.roleTagLabel,
      children: i
    })]
  })
});

function U(e) {
  let {
    channel: t,
    row: l,
    className: a
  } = e, n = null != t.parent_id, s = (0, x.getChannelIconComponent)(t);
  return (0, C.jsxs)("div", {
    className: c(R.rowLabel, R.channelLabel, {
      [R.hasParent]: n
    }, a),
    children: [null != s && (0, C.jsx)(s, {
      width: 16,
      height: 16,
      className: R.channelIcon
    }), (0, C.jsx)(M.Text, {
      variant: t.isCategory() ? "eyebrow" : b,
      children: l.display
    })]
  })
}

function w(e, t, l) {
  return D(e) ? (0, C.jsx)(F, {
    row: e,
    guildId: t,
    className: l
  }, e.record.id) : O(e) ? (0, C.jsx)(U, {
    row: e,
    channel: e.record,
    className: l
  }, e.record.id) : null
}

function Z(e) {
  let {
    guildId: t,
    roleRows: l = [],
    channelRows: a = [],
    selectedChannelIds: n = new Set,
    selectedRoleIds: s = new Set,
    onChange: i,
    placeholder: o,
    helperText: d,
    className: u
  } = e, f = (0, E.useStateFromStores)([L.default], () => {
    var e, l;
    return null !== (l = null === (e = L.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== l ? l : {}
  }, [t]), T = r.useMemo(() => (function(e, t, l) {
    if (null == e) return {};
    let a = {};
    return e.forEach(e => {
      let t = A.default.getChannel(e);
      null != t && (a[e] = B(t))
    }), t.forEach(e => {
      e in l && (a[e] = V(l[e]))
    }), a
  })(n, s, f), [n, s, f]), x = r.useMemo(() => Object.keys(T), [T]), [H, _] = r.useState(""), [g, N] = r.useState(!1), [p, S] = r.useState(!1), [b, F] = r.useState(!1), U = r.useRef(null), {
    sections: Z,
    sectionCounts: k
  } = r.useMemo(() => {
    let e = "" !== H ? a.filter(e => m(H, e.display.toLocaleLowerCase())) : a,
      t = "" !== H ? l.filter(e => m(H, e.display.toLocaleLowerCase())) : l,
      n = [],
      s = [];
    return n[0] = e, s[0] = e.length, n[1] = t, s[1] = t.length, {
      sections: n,
      sectionCounts: s
    }
  }, [H, a, l]), y = r.useCallback(e => {
    let t = Object.values(e),
      l = t.filter(e => {
        let {
          row: t
        } = e;
        return O(t)
      }).map(e => e.row.record.id),
      a = t.filter(e => {
        let {
          row: t
        } = e;
        return D(t)
      }).map(e => e.row.record.id);
    i(new Set(l), new Set(a))
  }, [i]), P = () => {
    N(!1), S(!1)
  };
  r.useEffect(() => {
    let e = setTimeout(() => {
      F(g || p)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [g, p]);
  let Y = (e, t, l) => {
      l.stopPropagation(), l.preventDefault(), 2 === t ? N(e) : (1 === t || N(e), S(e))
    },
    G = r.useCallback(e => {
      let t = {
        ...T
      };
      O(e) ? t[e.id] = B(e.record) : D(e) && (t[e.id] = V(e.record)), y(t), _(""), P(), setTimeout(() => {
        var e;
        let t = null === (e = U.current) || void 0 === e ? void 0 : e.containerRef.current,
          l = null == t ? void 0 : t.firstChild;
        null != l && l.scrollTo({
          top: l.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [y, T]),
    q = r.useCallback(e => {
      let {
        section: l,
        row: a
      } = e, n = Z[l][a];
      return (0, C.jsx)(M.Clickable, {
        className: c(R.selectableSearchRow, R.rowHeight),
        onClick: e => {
          e.stopPropagation(), G(n)
        },
        children: (0, C.jsx)("div", {
          className: R.rowContainer,
          children: w(n, t, R.searchRowLabel)
        })
      }, n.id)
    }, [t, G, Z]),
    K = r.useMemo(() => x.map(e => {
      var l, a;
      return l = T[e], a = t, {
        ...l.tag,
        label: w(l.row, a, R.noIndent)
      }
    }), [T, x, t]);
  return (0, C.jsxs)("div", {
    className: c(R.searchContainer, u),
    children: [(0, C.jsxs)("div", {
      className: R.searchBox,
      children: [(0, C.jsx)(h.default, {
        tags: K,
        maxHeight: 98,
        size: h.default.Sizes.MEDIUM,
        query: H,
        ref: U,
        onRemoveTag: e => {
          let t = x[e],
            {
              [t]: l,
              ...a
            } = T;
          y(a), _(""), P()
        },
        onQueryChange: e => {
          _(e.trim().toLocaleLowerCase())
        },
        placeholder: null != o ? o : v.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
        sections: [x.length],
        inputProps: {
          "aria-labelledby": I,
          "aria-controls": j,
          "aria-expanded": b,
          onFocus: e => Y(!0, 2, e),
          onBlur: e => Y(!1, 2, e)
        }
      }), b && (0, C.jsx)("div", {
        className: R.resultsListParent,
        onFocus: e => Y(!0, 1, e),
        onBlur: e => Y(!1, 1, e),
        tabIndex: -1,
        children: (0, C.jsx)(M.ListAuto, {
          className: R.resultsListContainer,
          innerClassName: R.resultsList,
          sections: k,
          renderRow: q,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: t
            } = e;
            return 0 === t ? (0, C.jsx)(M.FormTitle, {
              tag: "h5",
              className: c(R.sectionTitle, R.sectionHeight),
              children: v.default.Messages.CHANNELS
            }, v.default.Messages.CHANNELS) : 1 === t ? (0, C.jsx)(M.FormTitle, {
              tag: "h5",
              className: c(R.sectionTitle, R.sectionHeight),
              children: v.default.Messages.ROLES
            }, v.default.Messages.ROLES) : null
          },
          renderFooter: e => {
            let {
              section: t
            } = e;
            if (0 === t) return 0 === k[1] && k[0] > 0 ? null : (0, C.jsx)("div", {
              className: R.sectionFooter,
              children: (0, C.jsx)(M.FormDivider, {})
            });
            return null
          },
          sectionHeight: 24,
          footerHeight: e => {
            if (0 === e) return 0 === k[1] && k[0] > 0 ? 0 : 32;
            return 0
          },
          role: void 0,
          innerRole: "listbox",
          innerId: j,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != d && (0, C.jsx)(M.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: R.helperText,
      children: d
    })]
  })
}(o = n || (n = {}))[o.CHANNELS = 0] = "CHANNELS", o[o.ROLES = 1] = "ROLES", (d = s || (s = {}))[d.NONE = 0] = "NONE", d[d.LIST = 1] = "LIST", d[d.INPUT = 2] = "INPUT"
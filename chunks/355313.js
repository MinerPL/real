"use strict";
l.r(t), l.d(t, {
  getFullRowId: function() {
    return p
  },
  default: function() {
    return b
  }
}), l("222007"), l("808653");
var s = l("37983"),
  n = l("884691"),
  a = l("414456"),
  i = l.n(a),
  r = l("974667"),
  o = l("77078"),
  d = l("507453"),
  c = l("79798"),
  u = l("145131"),
  S = l("476263"),
  h = l("476765"),
  m = l("682344"),
  E = l("454273"),
  R = l("191458"),
  f = l("606762"),
  x = l("782340"),
  T = l("265821");
let g = (0, h.uid)(),
  y = (0, h.uid)();

function p(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}

function A(e) {
  return (0, s.jsx)(o.FormTitle, {
    tag: "h5",
    className: i(T.sectionTitle, T.rowHeight),
    children: e
  }, e)
}

function M(e) {
  let {
    id: t,
    children: l,
    rowLabel: n,
    checked: a,
    onSelect: d,
    disabled: c,
    showCheckbox: S,
    selected: h,
    onMouseEnter: m,
    "aria-posinset": E,
    "aria-setsize": R
  } = e, f = (0, r.useListItem)(t);
  return (0, s.jsx)(o.Clickable, {
    ...f,
    id: t,
    className: i(T.addMemberRow, {
      [T.selectedRow]: h
    }),
    onClick: e => {
      !c && (e.preventDefault(), d())
    },
    onMouseEnter: m,
    role: "option",
    "aria-disabled": c,
    "aria-selected": a,
    "aria-setsize": R,
    "aria-posinset": E,
    children: (0, s.jsxs)(u.default, {
      justify: u.default.Justify.BETWEEN,
      align: u.default.Align.CENTER,
      children: [S ? (0, s.jsx)(o.Checkbox, {
        displayOnly: !0,
        size: 18,
        value: a,
        type: o.Checkbox.Types.INVERTED,
        disabled: c,
        children: (0, s.jsx)("div", {
          className: T.checkboxLabel,
          children: l
        })
      }) : l, null != n ? (0, s.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: n
      }) : null]
    })
  })
}

function b(e) {
  let {
    listClassName: t,
    pendingAdditions: l,
    query: a,
    onQueryChange: r,
    onClickRow: h,
    onRemovePendingAddition: b,
    roles: w = [],
    members: L = [],
    users: v = [],
    guilds: N = [],
    placeholderText: j,
    disabledText: C,
    hintText: _,
    searchTitleText: I,
    renderEmptyText: O,
    focusSearchAfterReady: k,
    isReady: B,
    maxCount: D,
    hideRowLabel: P = !1
  } = e, z = n.useRef(null), H = n.useRef(null), U = [w.length, L.length, v.length, N.length], [F, V] = n.useState(!1), [G, Y] = n.useState(0), [q, Q] = n.useState(-1);
  n.useEffect(() => {
    var e;
    null === (e = z.current) || void 0 === e || e.focus()
  }, []);
  let W = n.useCallback(function(e, t) {
      let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (Y(e), Q(t), l) {
        var s;
        null === (s = H.current) || void 0 === s || s.scrollToIndex({
          section: null != e ? e : 0,
          row: null != t ? t : 0,
          padding: 8
        })
      }
    }, []),
    J = n.useCallback((e, t) => {
      if (null == t) return;
      r("");
      let l = e === f.AudienceSelectorSections.ROLES ? w : [],
        s = l[t];
      s.rowType !== f.RowType.EMPTY_STATE && h(s)
    }, [w, h, r]),
    K = n.useCallback(e => {
      var t;
      null != e && e.rowType !== f.RowType.EMPTY_STATE && (h(e), r(""), null === (t = z.current) || void 0 === t || t.focus())
    }, [h, r]),
    Z = n.useMemo(() => Object.keys(l), [l]),
    X = n.useMemo(() => L.some(e => !e.disabled) || w.some(e => !e.disabled) || v.some(e => !e.disabled) || N.some(e => !e.disabled), [L, w, v, N]),
    $ = X || "" === a.trim();

  function ee() {
    var e;
    V(!(null === (e = H.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && $)
  }
  return n.useEffect(() => {
    ee()
  }), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: i(T.searchBox, {
        [T.scrollSeparator]: F
      }),
      children: [null != I && (0, s.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: I
      }), (0, s.jsx)(R.default, {
        ref: z,
        query: a,
        onQueryChange: r,
        selectedSection: G,
        selectedRow: q,
        onSelectionChange: W,
        onSelect: J,
        tags: Z.map(e => l[e].display),
        sections: U,
        onRemoveTag: function(e) {
          b(Z[e])
        },
        placeholder: j,
        focusAfterReady: k,
        isReady: B,
        "aria-labelledby": g,
        "aria-controls": y
      }), null != _ ? (0, s.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: _
      }) : null]
    }), $ ? (0, s.jsx)(o.List, {
      ref: H,
      className: i(T.roleMemberList, t),
      sections: U,
      renderRow: e => {
        let t, n, {
            section: a,
            row: r
          } = e,
          d = null,
          u = !1,
          h = !1,
          R = !1,
          x = !u && null != D && Object.keys(l).length >= D;
        switch (a) {
          case f.AudienceSelectorSections.ROLES:
            u = (n = p(d = w[r])) in l || d.disabled, h = d.disabled || x, R = G === f.AudienceSelectorSections.ROLES && q === r, t = (0, s.jsxs)("div", {
              className: T.rowBody,
              children: [(0, s.jsx)("div", {
                className: i(T.rowHeight, T.alignCenter),
                children: (0, s.jsx)(m.default, {
                  color: d.colorString,
                  height: 20
                })
              }), (0, s.jsxs)("div", {
                className: T.rowLabel,
                children: [(0, s.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  className: T.rowTitle,
                  color: d.rowType === f.RowType.EMPTY_STATE ? "text-muted" : "text-normal",
                  children: d.name
                }), d.disabled && null != C ? (0, s.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: C
                }) : null]
              })]
            });
            break;
          case f.AudienceSelectorSections.MEMBERS:
            u = (n = p(d = L[r])) in l || d.disabled, h = d.disabled || x, R = G === f.AudienceSelectorSections.MEMBERS && q === r, t = (0, s.jsxs)("div", {
              className: T.rowBody,
              children: [(0, s.jsx)(o.Avatar, {
                src: d.avatarURL,
                size: o.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, s.jsx)(o.Text, {
                className: T.rowLabel,
                variant: "text-sm/normal",
                children: d.name
              }), null != d.nickname ? (0, s.jsx)(o.Text, {
                color: "text-muted",
                className: T.rowLabelSubText,
                variant: "text-sm/normal",
                "aria-hidden": !0,
                children: d.username
              }) : null, d.bot && (0, s.jsx)(c.default, {
                verified: d.verifiedBot
              })]
            });
            break;
          case f.AudienceSelectorSections.USERS:
            u = (n = p(d = v[r])) in l || d.disabled, h = d.disabled || x, R = G === f.AudienceSelectorSections.USERS && q === r, t = (0, s.jsxs)("div", {
              className: T.rowBody,
              children: [(0, s.jsx)(o.Avatar, {
                src: d.avatarURL,
                size: o.AvatarSizes.SIZE_24,
                "aria-label": ""
              }), (0, s.jsxs)("div", {
                className: T.rowLabel,
                children: [(0, s.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  children: d.name
                }), d.disabled && null != C ? (0, s.jsx)(o.Text, {
                  color: "header-secondary",
                  variant: "text-xs/normal",
                  children: C
                }) : null]
              })]
            });
            break;
          case f.AudienceSelectorSections.GUILDS:
            u = (n = p(d = N[r])) in l || d.disabled, h = d.disabled || x, R = G === f.AudienceSelectorSections.GUILDS && q === r, t = (0, s.jsxs)("div", {
              className: T.rowBody,
              children: [(0, s.jsx)(S.default, {
                guild: d.guild,
                active: !0,
                size: S.default.Sizes.SMALLER
              }), (0, s.jsx)("div", {
                className: T.rowLabel,
                children: (0, s.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-normal",
                  children: d.name
                })
              })]
            })
        }
        return null == d ? null : (0, s.jsx)(M, {
          id: "user-row-".concat(r),
          rowLabel: P ? null : E.getRowTypeLabel(d.rowType),
          checked: u,
          disabled: h,
          onSelect: () => K(d),
          showCheckbox: d.rowType !== f.RowType.EMPTY_STATE,
          onMouseEnter: () => W(a, r, !1),
          selected: R,
          "aria-posinset": r + 1,
          "aria-setsize": U.reduce((e, t) => e + t, 0),
          children: t
        }, n)
      },
      rowHeight: 40,
      renderSection: e => {
        let {
          section: t
        } = e;
        switch (t) {
          case f.AudienceSelectorSections.ROLES:
            return A(x.default.Messages.ROLES);
          case f.AudienceSelectorSections.MEMBERS:
            return A(x.default.Messages.MEMBERS);
          case f.AudienceSelectorSections.USERS:
            return A(x.default.Messages.USERS);
          case f.AudienceSelectorSections.GUILDS:
            return A(x.default.Messages.SERVERS)
        }
      },
      sectionHeight: 32,
      onScroll: ee,
      role: void 0,
      innerRole: "listbox",
      innerId: y,
      innerAriaMultiselectable: !0,
      innerAriaOrientation: "vertical"
    }) : (0, s.jsxs)(u.default, {
      className: t,
      align: u.default.Align.CENTER,
      justify: u.default.Justify.CENTER,
      direction: u.default.Direction.VERTICAL,
      children: [(0, s.jsx)(d.default, {
        className: T.noResultIcon
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: O(a)
      })]
    })]
  })
}
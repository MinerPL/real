"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("627445"),
  o = n.n(r),
  u = n("394846"),
  d = n("446674"),
  c = n("77078"),
  E = n("327037"),
  f = n("997289"),
  _ = n("731898"),
  h = n("252744"),
  C = n("502651"),
  T = n("812204"),
  I = n("685665"),
  S = n("106803"),
  N = n("861370"),
  A = n("217513"),
  p = n("430312"),
  m = n("763866"),
  g = n("10532"),
  R = n("935409"),
  O = n("373469"),
  L = n("52028"),
  v = n("824563"),
  M = n("697218"),
  P = n("304121"),
  D = n("599110"),
  y = n("158998"),
  x = n("583232"),
  b = n("644091"),
  U = n("891964"),
  G = n("49111"),
  j = n("590456"),
  k = n("782340"),
  w = n("135231");

function F(e, t, n, s) {
  return (0, a.jsx)(c.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: w.statusItem,
        children: [(0, a.jsx)(c.Status, {
          status: e,
          className: w.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: w.status,
          children: (0, y.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: w.description,
          children: s
        })]
      })
    },
    action: () => (0, x.default)(e, t, n)
  })
}

function B(e) {
  var t, n;
  let {
    user: i,
    customStatus: r,
    guildId: o,
    isApplicationStreaming: E,
    onClose: O,
    onSelect: L,
    closePopout: M
  } = e, x = (0, f.useAnalyticsContext)(), {
    AnalyticsLocationProvider: B
  } = (0, I.default)(T.default.ACCOUNT_PROFILE_POPOUT), H = (0, A.default)(i.id, o), [V, Y, W, K] = (0, d.useStateFromStoresArray)([v.default], () => {
    var e;
    let t = i.id;
    return "string" != typeof t ? [void 0, void 0, G.StatusTypes.UNKNOWN, !1] : [null !== (e = v.default.findActivity(t, e => e.type !== G.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, v.default.findActivity(i.id, e => e.type === G.ActivityTypes.CUSTOM_STATUS), v.default.getStatus(t), v.default.isMobileOnline(t)]
  });
  let z = (t = W, n = x, (0, a.jsxs)(a.Fragment, {
      children: [F(G.StatusTypes.ONLINE, t, n), (0, a.jsx)(c.MenuSeparator, {}, "menu-separator-statuses"), F(G.StatusTypes.IDLE, t, n), F(G.StatusTypes.DND, t, n, k.default.Messages.STATUS_DND_HELP), F(G.StatusTypes.INVISIBLE, t, n, k.default.Messages.STATUS_INVISIBLE_HELPER)]
    })),
    {
      ref: q
    } = (0, _.default)(),
    Q = (0, h.default)(q);
  s.useEffect(() => {
    D.default.track(G.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != r,
      other_user_id: i.id,
      application_id: null != V ? V.application_id : void 0,
      is_streaming: E,
      application_name: null != V ? V.name : void 0,
      profile_has_nitro_customization: (null == H ? void 0 : H.banner) != null,
      location: x.location,
      has_profile_effect: (null == H ? void 0 : H.profileEffectId) != null
    })
  }, []);
  let Z = (0, b.useMultiAccountMenuItems)(),
    X = (0, S.useCustomStatusMenuItem)(null != r ? r : void 0, w.menuItemFocused),
    J = (0, N.default)({
      id: i.id,
      label: k.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, a.jsx)(B, {
    children: (0, a.jsx)("div", {
      className: w.popoutContainer,
      children: (0, a.jsx)("div", {
        ref: q,
        children: (0, a.jsxs)(p.default, {
          user: i,
          profileType: j.UserProfileTypes.POPOUT,
          children: [(0, a.jsx)(R.default, {
            user: i,
            displayProfile: H,
            onClose: () => null == M ? void 0 : M(),
            isMobile: K,
            isStreaming: (0, C.default)(V),
            status: W,
            disableUserProfileLink: __OVERLAY__,
            isHovering: Q,
            showPremiumBadgeUpsell: !1
          }), (0, a.jsxs)(p.default.Inner, {
            children: [(0, a.jsx)(m.default, {
              activity: V,
              customStatusActivity: Y,
              displayProfile: H,
              user: i,
              onClose: O,
              setNote: !1,
              canDM: !1,
              hideNote: !0,
              showCopiableUsername: !0
            }), (0, a.jsx)(g.default, {
              className: w.divider
            }), (0, a.jsxs)(c.Menu, {
              navId: "account",
              "aria-label": k.default.Messages.SET_STATUS,
              hideScroller: !0,
              className: w.menu,
              onClose: O,
              onSelect: L,
              children: [(0, a.jsxs)(c.MenuGroup, {
                children: [(0, a.jsx)(c.MenuItem, {
                  id: "status-picker",
                  label: (0, y.humanizeStatus)(W),
                  focusedClassName: w.menuItemFocused,
                  subMenuIconClassName: w.subMenuIcon,
                  action: u.isMobile ? function() {
                    (0, c.openModalLazy)(() => new Promise(e => {
                      e(e => (0, a.jsx)(c.ModalRoot, {
                        ...e,
                        size: c.ModalSize.SMALL,
                        className: w.modal,
                        "aria-label": k.default.Messages.SET_STATUS,
                        children: (0, a.jsx)(c.Menu, {
                          navId: "account",
                          variant: "fixed",
                          "aria-label": k.default.Messages.SET_STATUS,
                          hideScroller: !0,
                          className: w.statusPickerModalMenu,
                          onClose: e.onClose,
                          onSelect: e.onClose,
                          children: z
                        })
                      }))
                    }))
                  } : void 0,
                  showIconFirst: !0,
                  icon: e => {
                    let {
                      className: t,
                      isFocused: n
                    } = e;
                    return (0, a.jsx)(c.Status, {
                      status: W,
                      size: 12,
                      className: l(t, w.mainStatusIcon),
                      color: n ? "currentColor" : void 0
                    })
                  },
                  children: u.isMobile ? void 0 : z
                }, "status-picker"), X]
              }), (0, a.jsx)(c.MenuGroup, {
                children: (0, a.jsx)(c.MenuItem, {
                  id: "switch-account",
                  focusedClassName: w.menuItemFocused,
                  subMenuIconClassName: w.subMenuIcon,
                  label: k.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                  icon: P.default,
                  showIconFirst: !0,
                  action: U.default,
                  children: Z
                }, "switch-account")
              }), (0, a.jsx)(c.MenuGroup, {
                children: J
              })]
            })]
          })]
        })
      })
    })
  })
}

function H(e) {
  let {
    userId: t,
    user: n,
    guildId: i,
    onClose: l,
    onSelect: r
  } = e, u = (0, d.useStateFromStores)([M.default], () => M.default.getUser(t), [t]), c = (0, d.useStateFromStores)([L.default], () => L.default.getCustomStatusActivity()), [f, _] = s.useState(!1), h = null != u ? u : n, C = (0, d.useStateFromStores)([O.default], () => null != h && null != O.default.getAnyStreamForUser(h.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, E.getUser)(t), _(!0))
    }
  }, [u, t]), null == h) ? (f && o(null != h, "Unexpected missing user"), null) : (0, a.jsx)(B, {
    closePopout: l,
    user: h,
    customStatus: c,
    guildId: i,
    isApplicationStreaming: C,
    onClose: l,
    onSelect: r
  })
}
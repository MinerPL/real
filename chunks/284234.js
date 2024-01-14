"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("65597"),
  o = s("77078"),
  d = s("812204"),
  u = s("685665"),
  c = s("592407"),
  E = s("401642"),
  _ = s("305961"),
  T = s("178406"),
  I = s("645266"),
  S = s("914985"),
  N = s("308073"),
  g = s("565556"),
  f = s("553275"),
  A = s("691307"),
  L = s("314143"),
  m = s("721302"),
  C = s("948512"),
  O = s("49111"),
  h = s("782340"),
  R = s("117102");

function D(e) {
  let {
    guildId: t
  } = e, s = (0, r.default)([_.default], () => _.default.getGuild(t)), {
    AnalyticsLocationProvider: l
  } = (0, u.default)(d.default.GUILD_SETTINGS_MEMBERS_PAGE), D = !1 == !!(null == s ? void 0 : s.hasFeature(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), M = (0, r.default)([T.default], () => T.default.getEstimatedMemberSearchCountByGuildId(t), [t]), G = n.useCallback(e => {
    null != e && (0, E.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      analyticsLocation: {
        section: O.AnalyticsSections.GUILD_SETTINGS_MEMBERS
      }
    })
  }, []), x = n.useRef(null), p = n.useCallback(() => {
    var e;
    null === (e = x.current) || void 0 === e || e.resetSearchText()
  }, []);
  if (null == s) return null;
  let U = (0, f.getSearchState)(!1, !1, M);
  return (0, a.jsx)(l, {
    children: (0, a.jsx)("div", {
      className: R.settingsColumn,
      children: (0, a.jsx)("div", {
        className: R.settingsContainer,
        children: (0, a.jsx)(o.ScrollerAuto, {
          className: R.settingsScroller,
          orientation: "auto",
          children: (0, a.jsxs)("main", {
            className: R.settingsContent,
            children: [(0, a.jsx)(o.FormSection, {
              className: i(R.header),
              children: (0, a.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H1,
                children: h.default.Messages.GUILD_SETTINGS_MEMBERS_SERVER_MEMBERS
              })
            }, "header"), (0, a.jsx)(o.FormSection, {
              children: (0, a.jsxs)("div", {
                className: i(R.tableContainer),
                children: [(0, a.jsx)(N.default, {
                  guild: s
                }), (0, a.jsx)(S.default, {
                  guild: s
                }), D ? (0, a.jsxs)("div", {
                  className: i(R.mainTableContainer),
                  children: [(0, a.jsx)(m.default, {
                    guild: s,
                    ref: x
                  }), (0, a.jsx)(A.default, {
                    guild: s,
                    searchState: U,
                    compact: !0,
                    onSelectRow: G,
                    onResetForNewMembers: p
                  }), U !== f.SearchState.SUCCESS_STILL_INDEXING && (0, a.jsx)(L.default, {
                    guildId: s.id
                  })]
                }) : (0, a.jsx)("div", {
                  className: i(R.movedTable),
                  children: (0, a.jsxs)("div", {
                    className: i(R.noResultsContainer),
                    children: [(0, a.jsx)("div", {
                      className: i(R.noResultsIconContainer),
                      children: (0, a.jsx)(C.default, {})
                    }), (0, a.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: h.default.Messages.GUILD_SETTINGS_SAFETY_MODERATION_EXPERIENCE_ENABLED.format({
                        onClick: e => {
                          null != s && (e.preventDefault(), c.default.close(), (0, I.goToMemberSafetyDashboard)(s.id))
                        }
                      })
                    })]
                  })
                })]
              })
            }, "body"), (0, a.jsx)(g.default, {
              guildId: s.id
            })]
          })
        })
      })
    })
  })
}
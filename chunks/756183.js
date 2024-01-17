"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("77078"),
  u = n("630086"),
  d = n("736964"),
  c = n("901582"),
  f = n("206230"),
  E = n("347272"),
  _ = n("27618"),
  h = n("545429"),
  C = n("471671"),
  I = n("810567"),
  T = n("791878"),
  S = n("637824"),
  m = n("146378"),
  p = n("709410"),
  A = n("411676"),
  g = n("86959"),
  N = n("748753"),
  R = n("144521"),
  O = n("59678"),
  L = n("49111"),
  v = n("782340"),
  M = n("112082"),
  P = function(e) {
    let {
      sectionFilter: t,
      titleId: n
    } = e, {
      rows: i,
      section: P
    } = (0, r.useStateFromStoresObject)([h.default], () => h.default.getState()), D = (0, r.useStateFromStores)([C.default], () => C.default.isFocused()), y = (0, r.useStateFromStores)([_.default], () => _.default.getRelationshipCount()), x = (0, T.useIsClearIncomingFriendRequestsEnabled)(), [b, U] = s.useState(() => {
      let e = {};
      for (let t of Object.values(L.FriendsSections)) e[t] = "";
      return e
    }), G = s.useCallback(e => {
      U({
        ...b,
        [t]: e
      })
    }, [b, t]), j = s.useCallback(() => {
      U({
        ...b,
        [t]: ""
      })
    }, [b, t]), w = i.filter(t, b[t]);
    if (0 === w.length && "" === b[t]) return (0, a.jsxs)("div", {
      className: M.emptyStateContainer,
      children: [t === L.FriendsSections.ONLINE && (0, a.jsx)(E.default, {}), (0, a.jsx)(p.default, {
        type: t,
        onClick: () => {
          u.default.setSection(L.FriendsSections.ADD_FRIEND)
        }
      }, P)]
    });
    let k = 0 === w.length && "" !== b[t],
      F = w.filter(e => e.type === L.RelationshipTypes.PENDING_INCOMING).length,
      H = t === L.FriendsSections.PENDING && F > 0,
      B = H && x && F >= O.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
    return (0, a.jsxs)(c.default, {
      section: L.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(I.default, {
        className: l(M.searchBar, k ? M.searchEmptyState : null),
        query: b[t],
        onChange: G,
        onClear: j,
        size: I.default.Sizes.MEDIUM
      }), t === L.FriendsSections.ONLINE && "" === b[t] && (0, a.jsx)(E.default, {}), (0, a.jsxs)("div", {
        className: M.sectionTitle,
        children: [(0, a.jsx)(N.default, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case L.FriendsSections.ONLINE:
                return v.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case L.FriendsSections.PENDING:
                return v.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case L.FriendsSections.SUGGESTIONS:
                return v.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case L.FriendsSections.BLOCKED:
                return v.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return v.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, w.length)
        }), B && (0, a.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: M.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(F)
          },
          "aria-label": v.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: v.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), k ? (0, a.jsx)("div", {
        className: M.emptyStateContainer,
        children: (0, a.jsx)(p.default, {
          type: p.FriendsSearchStatus.SECTION_NO_RESULTS
        }, P)
      }) : (0, a.jsx)(g.default, {
        relationshipCount: y,
        statusSections: [w],
        renderRow: function(e) {
          switch (t) {
            case L.FriendsSections.BLOCKED:
              return (0, a.jsx)(S.default, {
                ...e,
                isFocused: D
              });
            case L.FriendsSections.PENDING:
              return (0, a.jsx)(A.default, {
                ...e,
                isFocused: D
              });
            case L.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(R.default, {
                ...e,
                isFocused: D
              });
            case L.FriendsSections.ONLINE:
            case L.FriendsSections.ALL:
            default:
              return (0, a.jsx)(m.default, {
                ...e,
                isFocused: D
              })
          }
        },
        sectionFilter: t,
        searchQuery: b[t],
        useReducedMotion: f.default.useReducedMotion
      })]
    })
  }
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("669491"),
  l = n("736964"),
  r = n("401642"),
  o = n("697218"),
  u = n("36694"),
  d = n("945330"),
  c = n("956089"),
  f = n("599110"),
  E = n("371449"),
  _ = n("224978"),
  h = n("559541"),
  C = n("49111"),
  I = n("782340"),
  T = n("819745");

function S(e) {
  let {
    user: t,
    type: n,
    status: S,
    isFocused: m
  } = e, p = s.useContext(f.AnalyticsContext), A = e => {
    e.stopPropagation(), l.default.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, g = e => {
    e.stopPropagation(), l.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, N = S === C.StatusTypes.OFFLINE ? C.StatusTypes.UNKNOWN : S, R = n === C.RelationshipTypes.PENDING_INCOMING ? I.default.Messages.INCOMING_FRIEND_REQUEST : I.default.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, a.jsx)(_.default, {
    isFocused: m,
    user: t,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      analyticsLocation: p.location
    }),
    children: e => {
      var s;
      let l = n === C.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)(a.Fragment, {
        children: [(null === (s = o.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, a.jsx)("div", {
          className: T.staffIndicator,
          children: (0, a.jsx)(c.TextBadge, {
            color: i.default.unsafe_rawColors.BRAND_500.css,
            text: I.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, a.jsx)(E.default, {
          icon: u.default,
          actionType: E.default.ActionTypes.ACCEPT,
          tooltip: I.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: g,
          shouldHighlight: e
        }), (0, a.jsx)(E.default, {
          icon: d.default,
          actionType: E.default.ActionTypes.DENY,
          tooltip: I.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: A,
          shouldHighlight: e
        })]
      }) : (0, a.jsx)(E.default, {
        icon: d.default,
        actionType: E.default.ActionTypes.DENY,
        tooltip: I.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: A,
        shouldHighlight: e
      });
      return (0, a.jsxs)("div", {
        className: T.listItemContents,
        children: [(0, a.jsx)(h.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: N,
          subText: R,
          className: T.userInfo
        }), (0, a.jsx)("div", {
          className: T.actions,
          children: l
        })]
      })
    }
  })
}
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
  E = n("599110"),
  f = n("371449"),
  _ = n("224978"),
  h = n("559541"),
  C = n("49111"),
  T = n("782340"),
  I = n("819745");

function S(e) {
  let {
    user: t,
    type: n,
    status: S,
    isFocused: N
  } = e, A = s.useContext(E.AnalyticsContext), p = e => {
    e.stopPropagation(), l.default.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, m = e => {
    e.stopPropagation(), l.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, g = S === C.StatusTypes.OFFLINE ? C.StatusTypes.UNKNOWN : S, R = n === C.RelationshipTypes.PENDING_INCOMING ? T.default.Messages.INCOMING_FRIEND_REQUEST : T.default.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, a.jsx)(_.default, {
    isFocused: N,
    user: t,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      analyticsLocation: A.location
    }),
    children: e => {
      var s;
      let l = n === C.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)(a.Fragment, {
        children: [(null === (s = o.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, a.jsx)("div", {
          className: I.staffIndicator,
          children: (0, a.jsx)(c.TextBadge, {
            color: i.default.unsafe_rawColors.BRAND_500.css,
            text: T.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, a.jsx)(f.default, {
          icon: u.default,
          actionType: f.default.ActionTypes.ACCEPT,
          tooltip: T.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: m,
          shouldHighlight: e
        }), (0, a.jsx)(f.default, {
          icon: d.default,
          actionType: f.default.ActionTypes.DENY,
          tooltip: T.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: p,
          shouldHighlight: e
        })]
      }) : (0, a.jsx)(f.default, {
        icon: d.default,
        actionType: f.default.ActionTypes.DENY,
        tooltip: T.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: p,
        shouldHighlight: e
      });
      return (0, a.jsxs)("div", {
        className: I.listItemContents,
        children: [(0, a.jsx)(h.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: g,
          subText: R,
          className: I.userInfo
        }), (0, a.jsx)("div", {
          className: I.actions,
          children: l
        })]
      })
    }
  })
}
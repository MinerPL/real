"use strict";
n.r(t), n.d(t, {
  ForYouItems: function() {
    return y
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("249654"),
  i = n("77078"),
  r = n("308289"),
  o = n("537325"),
  u = n("367376"),
  d = n("401642"),
  c = n("845579"),
  f = n("766274"),
  h = n("697218"),
  E = n("599110"),
  m = n("253981"),
  p = n("352273"),
  S = n("360191"),
  g = n("342176"),
  N = n("183030"),
  _ = n("899779"),
  T = n("778597"),
  I = n("960082"),
  C = n("49111"),
  A = n("782340"),
  M = n("183419"),
  v = n("786948"),
  x = n("780810");

function R(e) {
  var t, n, l;
  let {
    item: s
  } = e, o = null === (t = s.message) || void 0 === t ? void 0 : t.content;
  if (null == o) return (0, a.jsx)("div", {
    children: " "
  });
  let d = null !== (l = h.default.getUser(null === (n = s.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== l ? l : new f.default(s.other_user),
    c = u.default.parse(o);
  return (0, a.jsxs)("div", {
    className: M.messagePreviewContainer,
    children: [(0, a.jsx)(r.default, {
      user: d,
      size: i.AvatarSizes.SIZE_24
    }), (0, a.jsx)(i.Text, {
      className: M.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: c
    })]
  })
}

function L(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = u.default.parse(t);
  return (0, a.jsx)("div", {
    className: M.calloutContainer,
    children: (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function O(e) {
  let {
    item: t
  } = e, n = x, l = A.default.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = v, l = A.default.Messages.NOTIFICATION_CENTER_DONE), (0, a.jsxs)("div", {
    className: M.lifecycleContainer,
    children: [(0, a.jsx)("img", {
      className: M.checkbox,
      alt: "",
      src: n
    }), (0, a.jsx)(i.Text, {
      className: M.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: l
    })]
  })
}
let b = l.memo(function(e) {
    var t;
    let {
      item: r,
      ackedBeforeId: c
    } = e, f = (0, N.useNotificationCenterItemAcked)(r, c), h = l.useCallback(async () => {
      if (!f && (0, p.markNotificationCenterItemAcked)(r), null != r.item_enum && r.item_enum === S.ItemEnum.FIND_FRIENDS) {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("927960").then(n.bind(n, "927960"));
          return t => (0, a.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != r.deeplink) {
        let e = m.default.safeParseWithQuery(r.deeplink);
        if (null == e) return;
        let t = e.hostname,
          n = e.path;
        if (null == t || null == n) return;
        if (m.default.isDiscordHostname(t)) {
          let e = n.match("^/users/(\\d+)");
          null != e && 2 === e.length ? (0, d.openUserProfileModal)({
            userId: e[1],
            analyticsLocation: {
              section: C.AnalyticsSections.NOTIFICATION_CENTER
            }
          }) : await (0, o.default)(n)
        }
        E.default.track(C.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: S.NotificationCenterActionTypes.CLICKED,
          notification_center_id: r.id,
          item_type: r.type,
          acked: f
        })
      }
    }, [r, f]), A = null;
    r.type === S.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != r.other_user && (A = (0, a.jsx)(T.default, {
      userId: r.other_user.id
    }));
    let v = null != r.local_id;
    return (0, a.jsxs)("div", {
      className: M.row,
      children: [(0, a.jsxs)(i.ClickableContainer, {
        className: M.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": r.body,
        onClick: h,
        children: [f ? null : (0, a.jsx)("div", {
          className: M.unread
        }), (0, a.jsx)(_.ForYouItemImage, {
          item: r
        }), (0, a.jsxs)("div", {
          className: M.body,
          children: ["lifecycle_item" === r.type && null != r.item_enum && (0, a.jsx)(O, {
            item: r
          }), (0, a.jsx)(i.Text, {
            variant: "text-md/normal",
            color: f ? "text-muted" : "text-normal",
            children: u.default.parse(r.body)
          }), (null === (t = r.message) || void 0 === t ? void 0 : t.content) != null ? (0, a.jsx)(R, {
            item: r
          }) : null, null != r.callout ? (0, a.jsx)(L, {
            item: r
          }) : null, (0, a.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: f ? "text-muted" : "header-secondary",
            children: (0, g.getRelativeTimestamp)(s.default.extractTimestamp(r.id))
          }), A]
        })]
      }), v ? null : (0, a.jsx)(I.MoreButton, {
        item: r
      })]
    })
  }),
  y = l.memo(function(e) {
    let {
      items: t
    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(b, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })
"use strict";
n.r(t), n.d(t, {
  ForYouItems: function() {
    return x
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("249654"),
  i = n("77078"),
  r = n("308289"),
  o = n("537325"),
  u = n("367376"),
  d = n("401642"),
  c = n("845579"),
  f = n("766274"),
  E = n("697218"),
  h = n("599110"),
  _ = n("253981"),
  S = n("352273"),
  T = n("360191"),
  p = n("342176"),
  N = n("183030"),
  I = n("899779"),
  m = n("778597"),
  A = n("960082"),
  g = n("49111"),
  C = n("782340"),
  R = n("183419"),
  M = n("786948"),
  O = n("780810");

function L(e) {
  var t, n, a;
  let {
    item: s
  } = e, o = null === (t = s.message) || void 0 === t ? void 0 : t.content;
  if (null == o) return (0, l.jsx)("div", {
    children: " "
  });
  let d = null !== (a = E.default.getUser(null === (n = s.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : new f.default(s.other_user),
    c = u.default.parse(o);
  return (0, l.jsxs)("div", {
    className: R.messagePreviewContainer,
    children: [(0, l.jsx)(r.default, {
      user: d,
      size: i.AvatarSizes.SIZE_24
    }), (0, l.jsx)(i.Text, {
      className: R.messagePreviewText,
      variant: "text-sm/normal",
      lineClamp: 2,
      children: c
    })]
  })
}

function v(e) {
  let {
    item: {
      callout: t
    }
  } = e;
  if (null == t) return null;
  let n = u.default.parse(t);
  return (0, l.jsx)("div", {
    className: R.calloutContainer,
    children: (0, l.jsx)(i.Text, {
      variant: "text-sm/normal",
      lineClamp: 2,
      children: n
    })
  })
}

function D(e) {
  let {
    item: t
  } = e, n = O, a = C.default.Messages.NOTIFICATION_CENTER_TODO;
  return t.completed && (n = M, a = C.default.Messages.NOTIFICATION_CENTER_DONE), (0, l.jsxs)("div", {
    className: R.lifecycleContainer,
    children: [(0, l.jsx)("img", {
      className: R.checkbox,
      alt: "",
      src: n
    }), (0, l.jsx)(i.Text, {
      className: R.lifecycleText,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: a
    })]
  })
}
let y = a.memo(function(e) {
    var t;
    let {
      item: r,
      ackedBeforeId: c
    } = e, f = (0, N.useNotificationCenterItemAcked)(r, c), E = a.useCallback(async () => {
      if (!f && (0, S.markNotificationCenterItemAcked)(r), null != r.item_enum && r.item_enum === T.ItemEnum.FIND_FRIENDS) {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("927960").then(n.bind(n, "927960"));
          return t => (0, l.jsx)(e, {
            source: "Notification Center",
            ...t
          })
        });
        return
      }
      if (null != r.deeplink) {
        let e = _.default.safeParseWithQuery(r.deeplink);
        if (null == e) return;
        let t = e.hostname,
          n = e.path;
        if (null == t || null == n) return;
        if (_.default.isDiscordHostname(t)) {
          let e = n.match("^/users/(\\d+)");
          null != e && 2 === e.length ? (0, d.openUserProfileModal)({
            userId: e[1],
            analyticsLocation: {
              section: g.AnalyticsSections.NOTIFICATION_CENTER
            }
          }) : await (0, o.default)(n)
        }
        h.default.track(g.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: T.NotificationCenterActionTypes.CLICKED,
          notification_center_id: r.id,
          item_type: r.type,
          acked: f
        })
      }
    }, [r, f]), C = null;
    r.type === T.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != r.other_user && (C = (0, l.jsx)(m.default, {
      userId: r.other_user.id
    }));
    let M = null != r.local_id;
    return (0, l.jsxs)("div", {
      className: R.row,
      children: [(0, l.jsxs)(i.ClickableContainer, {
        className: R.rowContent,
        focusProps: {
          offset: 4
        },
        "aria-label": r.body,
        onClick: E,
        children: [f ? null : (0, l.jsx)("div", {
          className: R.unread
        }), (0, l.jsx)(I.ForYouItemImage, {
          item: r
        }), (0, l.jsxs)("div", {
          className: R.body,
          children: ["lifecycle_item" === r.type && null != r.item_enum && (0, l.jsx)(D, {
            item: r
          }), (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: f ? "text-muted" : "text-normal",
            children: u.default.parse(r.body)
          }), (null === (t = r.message) || void 0 === t ? void 0 : t.content) != null ? (0, l.jsx)(L, {
            item: r
          }) : null, null != r.callout ? (0, l.jsx)(v, {
            item: r
          }) : null, (0, l.jsx)(i.Text, {
            variant: "text-xs/medium",
            color: f ? "text-muted" : "header-secondary",
            children: (0, p.getRelativeTimestamp)(s.default.extractTimestamp(r.id))
          }), C]
        })]
      }), M ? null : (0, l.jsx)(A.MoreButton, {
        item: r
      })]
    })
  }),
  x = a.memo(function(e) {
    let {
      items: t
    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
    return (0, l.jsx)(l.Fragment, {
      children: t.map(e => (0, l.jsx)(y, {
        item: e,
        ackedBeforeId: n
      }, e.id))
    })
  })
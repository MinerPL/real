"use strict";
n.r(t), n.d(t, {
  setNotificationCenterActive: function() {
    return f
  },
  resetNotificationCenter: function() {
    return h
  },
  fetchNotificationCenterItems: function() {
    return E
  },
  markNotificationCenterItemAcked: function() {
    return m
  },
  deleteNotificationCenterItem: function() {
    return g
  }
});
var a = n("759843"),
  l = n("872717"),
  s = n("627929"),
  i = n("913144"),
  r = n("845579"),
  o = n("840707"),
  u = n("136511"),
  d = n("342176"),
  c = n("49111");

function f(e) {
  i.default.dispatch({
    type: "NOTIFICATION_CENTER_SET_ACTIVE",
    active: e
  })
}

function h() {
  i.default.dispatch({
    type: "RESET_NOTIFICATION_CENTER"
  })
}
async function E(e, t) {
  if (u.default.loading) return;
  await i.default.dispatch({
    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
  });
  let n = Math.ceil(u.default.items.length / e.limit);
  try {
    let l = await o.default.get({
      url: c.Endpoints.NOTIF_CENTER_ITEMS(),
      trackedActionData: {
        event: a.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
        properties: e => {
          var t;
          let a = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map(e => e.type);
          return (0, s.exact)({
            page: n,
            items: a,
            item_count: a.length
          })
        }
      },
      query: {
        ...e
      }
    });
    null == t || t(), await i.default.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
      items: l.body.items,
      cursor: l.body.cursor,
      hasMore: l.body.has_more
    })
  } catch (e) {
    null == t || t(), await i.default.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
    })
  }
}

function m(e) {
  null != e.local_id ? function(e) {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
      localIds: e
    })
  }([e.local_id]) : (0, d.isMentionItem)(e) ? function(e) {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: !0,
      ids: [e]
    })
  }(e.id) : p(e.id)
}
async function p(e) {
  try {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: !0,
      ids: [e]
    }), await l.default.post({
      url: c.Endpoints.NOTIF_CENTER_ITEMS_ACK(e)
    })
  } catch (t) {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
      ids: [e]
    })
  }
}
async function g(e) {
  let t = r.NotificationCenterAckedBeforeId.getSetting();
  try {
    i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE",
      id: e.id
    }), await o.default.delete({
      url: c.Endpoints.NOTIF_CENTER_ITEMS(e.id),
      body: {
        item_type: (0, d.isMentionItem)(e) ? "mention" : "regular"
      },
      trackedActionData: {
        event: a.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
        properties: {
          notification_center_id: e.id,
          acked: (0, d.isRemoteAcked)(e, t),
          item_type: e.type
        }
      }
    })
  } catch (t) {
    throw i.default.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
      item: e
    }), t
  }
}
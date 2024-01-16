"use strict";
n.r(t), n.d(t, {
  UnfeatureItemConfirmationModal: function() {
    return m
  },
  FeatureItemConfirmationModal: function() {
    return p
  },
  FeatureMessageConfirmationModal: function() {
    return I
  },
  FeatureForumPostConfirmationModal: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  s = n("884691"),
  l = n("866227"),
  r = n.n(l),
  a = n("611221"),
  u = n("77078"),
  o = n("599417"),
  d = n("699473"),
  c = n("713810"),
  h = n("782340"),
  f = n("690187");

function m(e) {
  let {
    featureableItem: t,
    header: n,
    body: l,
    ...r
  } = e, [a, d] = s.useState(null), [f, m] = s.useState(!1);
  return (0, i.jsxs)(u.ConfirmModal, {
    header: n,
    confirmText: h.default.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
    confirmButtonColor: u.Button.Colors.RED,
    cancelText: h.default.Messages.CANCEL,
    loading: f,
    onConfirm: async () => {
      try {
        m(!0), await (0, c.unfeatureGuildFeedItem)(t), m(!1)
      } catch (e) {
        throw d(new o.default(e)), m(!1), e
      }
    },
    ...r,
    children: [(0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      children: l
    }), null != a && (0, i.jsx)(u.Text, {
      color: "text-danger",
      variant: "text-xs/normal",
      children: a.message
    })]
  })
}

function p(e) {
  let {
    featureableItem: t,
    expiresSeconds: n,
    header: l,
    children: a,
    options: d,
    ...m
  } = e, [p, I] = s.useState(null), [E, v] = s.useState(!1);
  return (0, i.jsxs)(u.ConfirmModal, {
    header: l,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: u.Button.Colors.BRAND,
    loading: E,
    onConfirm: async () => {
      try {
        let e = r().add(n, "second").toDate();
        v(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw I(new o.default(e)), e
      } finally {
        v(!1)
      }
    },
    ...m,
    children: [null != p && (0, i.jsx)(u.Text, {
      className: f.featureModalError,
      color: "text-danger",
      variant: "text-xs/normal",
      children: p.message
    }), a]
  })
}

function I(e) {
  let {
    message: t,
    guildId: n,
    channel: s,
    expiresSeconds: l,
    timePeriod: r,
    options: o,
    ...c
  } = e;
  return (0, i.jsxs)(p, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: a.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: l,
    options: o,
    children: [(0, i.jsx)(u.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: r
      })
    }), (0, i.jsx)("div", {
      className: f.featureModalMessage,
      children: (0, i.jsx)(d.default, {
        channel: s,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function E(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: s,
    timePeriod: l,
    options: r,
    ...o
  } = e;
  return (0, i.jsx)(p, {
    ...o,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: a.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: s,
    options: r,
    children: (0, i.jsx)(u.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: l
      })
    })
  })
}
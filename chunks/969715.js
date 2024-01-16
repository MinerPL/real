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
    return v
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("866227"),
  l = n.n(r),
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
    body: r,
    ...l
  } = e, [a, d] = i.useState(null), [f, m] = i.useState(!1);
  return (0, s.jsxs)(u.ConfirmModal, {
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
    ...l,
    children: [(0, s.jsx)(u.Text, {
      variant: "text-md/normal",
      children: r
    }), null != a && (0, s.jsx)(u.Text, {
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
    header: r,
    children: a,
    options: d,
    ...m
  } = e, [p, I] = i.useState(null), [v, E] = i.useState(!1);
  return (0, s.jsxs)(u.ConfirmModal, {
    header: r,
    confirmText: h.default.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
    cancelText: h.default.Messages.CANCEL,
    confirmButtonColor: u.Button.Colors.BRAND,
    loading: v,
    onConfirm: async () => {
      try {
        let e = l().add(n, "second").toDate();
        E(!0), await (0, c.featureGuildFeedItem)(t, e, d)
      } catch (e) {
        throw I(new o.default(e)), e
      } finally {
        E(!1)
      }
    },
    ...m,
    children: [null != p && (0, s.jsx)(u.Text, {
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
    channel: i,
    expiresSeconds: r,
    timePeriod: l,
    options: o,
    ...c
  } = e;
  return (0, s.jsxs)(p, {
    ...c,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: a.GuildFeedItemTypes.MESSAGE
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
    expiresSeconds: r,
    options: o,
    children: [(0, s.jsx)(u.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
        timePeriod: l
      })
    }), (0, s.jsx)("div", {
      className: f.featureModalMessage,
      children: (0, s.jsx)(d.default, {
        channel: i,
        message: t,
        disableInteraction: !0
      })
    })]
  })
}

function v(e) {
  let {
    thread: t,
    guildId: n,
    expiresSeconds: i,
    timePeriod: r,
    options: l,
    ...o
  } = e;
  return (0, s.jsx)(p, {
    ...o,
    featureableItem: {
      guildId: n,
      entity: t,
      entityType: a.GuildFeedItemTypes.FORUM_POST
    },
    header: h.default.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
    expiresSeconds: i,
    options: l,
    children: (0, s.jsx)(u.Text, {
      className: f.featureModalText,
      variant: "text-md/normal",
      children: h.default.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
        threadName: t.name,
        timePeriod: r
      })
    })
  })
}
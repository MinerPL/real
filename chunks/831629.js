"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("65597"),
  i = a("77078"),
  d = a("819689"),
  r = a("791234"),
  u = a("503021"),
  o = a("757414"),
  c = a("208021"),
  f = a("42203"),
  m = a("377253"),
  h = a("957255"),
  E = a("16865"),
  g = a("315102"),
  I = a("347895"),
  _ = a("99384"),
  x = a("49111"),
  v = a("782340"),
  S = a("139238");
let C = n.memo(function(e) {
    let {
      guild: t
    } = e, a = (0, s.default)([o.default], () => o.default.getGuild(t.id), [t]);
    return n.useEffect(() => {
      null == a && (0, u.fetchGuildForPopout)(t.id)
    }, [t.id, a]), (0, l.jsx)("div", {
      className: S.sidebarCardWrapper,
      children: (0, l.jsxs)("div", {
        className: S.sidebarCard,
        children: [(0, l.jsx)(i.Heading, {
          className: S.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: v.default.Messages.GUILD_HOME_ABOUT
        }), (0, l.jsx)(i.Text, {
          className: S.guildDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: t.description
        }), (0, l.jsx)("div", {
          className: S.guildInfo,
          children: (null == a ? void 0 : a.memberCount) != null && (null == a ? void 0 : a.presenceCount) != null && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: S.dotOnline
            }), (0, l.jsx)(i.Text, {
              className: S.guildInfoText,
              variant: "text-xs/normal",
              color: "text-muted",
              children: v.default.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
                online: null == a ? void 0 : a.presenceCount,
                total: null == a ? void 0 : a.memberCount
              })
            })]
          })
        })]
      })
    })
  }),
  N = e => {
    let {
      channelId: t,
      title: a,
      icon: u
    } = e, o = (0, s.default)([f.default], () => f.default.getChannel(t)), _ = (0, s.default)([m.default], () => m.default.getMessages(t)), v = (0, s.default)([h.default], () => h.default.can(x.Permissions.VIEW_CHANNEL, o)), C = _.first(), N = (0, r.useForumPostMediaProperties)(C, !1), p = (null == N ? void 0 : N.length) > 0 ? N[0] : null, T = null != o && null == C && !_.loadingMore && !_.ready && !_.hasFetched && v;
    n.useEffect(() => {
      T && d.default.fetchMessages({
        channelId: t,
        after: t,
        limit: 5
      })
    }, [t, T]);
    let A = e => {
      null != o && (e.shiftKey ? (0, I.selectHomeResourceChannel)(o.guild_id, o.id) : c.default.openResourceChannelAsSidebar({
        guildId: o.guild_id,
        channelId: o.id
      }))
    };
    return (0, l.jsx)(i.Clickable, {
      className: S.resourceChannel,
      onClick: e => A(e),
      children: (0, l.jsxs)(l.Fragment, {
        children: [(() => {
          let e = g.default.getResourceChannelIconURL({
            channelId: t,
            icon: u
          });
          return null != u && null != e ? (0, l.jsx)("img", {
            src: e,
            className: S.resourceImage,
            alt: "",
            "aria-hidden": !0
          }) : null != p ? (0, l.jsx)("img", {
            className: S.resourceImage,
            src: p.src,
            alt: p.alt
          }) : (0, l.jsx)("div", {
            className: S.placeholderImage,
            children: (0, l.jsx)(E.default, {})
          })
        })(), (0, l.jsx)(i.Text, {
          className: S.guildInfoText,
          variant: "text-sm/semibold",
          color: "none",
          children: a
        })]
      })
    }, t)
  },
  p = n.memo(function(e) {
    let {
      guild: t
    } = e, a = (0, _.default)(t.id);
    return 0 === a.length ? null : (0, l.jsx)("div", {
      className: S.sidebarCardWrapper,
      children: (0, l.jsxs)("div", {
        className: S.sidebarCard,
        children: [(0, l.jsx)(i.Heading, {
          className: S.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: v.default.Messages.GUILD_HOME_RESOURCES
        }), (0, l.jsx)("div", {
          className: S.resourceChannelsList,
          children: a.map(e => (0, l.jsx)(N, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  T = n.memo(function(e) {
    let {
      guild: t,
      isNewMember: a
    } = e;
    return (0, l.jsxs)("aside", {
      className: S.sidebar,
      children: [(0, l.jsx)(C, {
        guild: t
      }), a && (0, l.jsx)(p, {
        guild: t
      })]
    })
  });
var A = T
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("669491"),
  i = n("77078"),
  r = n("888237"),
  o = n("18517"),
  u = n("109526"),
  d = n("487984"),
  c = n("817963"),
  f = n("957255"),
  h = n("228427"),
  p = n("811305"),
  m = n("923510"),
  E = n("759718"),
  C = n("58763"),
  g = n("119184"),
  S = n("782340"),
  _ = n("563040");

function I(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsx)(r.default, {
    iconContainerClassName: _.continueIconContainer,
    icon: (0, a.jsx)(h.default, {
      className: _.continueIcon,
      height: 20,
      width: 20
    }),
    color: s.default.unsafe_rawColors.PRIMARY_700.css,
    title: S.default.Messages.STAGE_CONTINUE_PROMPT_TITLE,
    description: S.default.Messages.STAGE_CONTINUE_PROMPT_SUBTITLE,
    onClick: t
  })
}

function T(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: l
  } = (0, E.default)(t.id);
  return (0, a.jsxs)("div", {
    className: _.audienceSummary,
    children: [(0, a.jsx)(p.default, {
      className: _.summaryItem,
      guildId: t.guild_id,
      users: l,
      size: p.Sizes.SIZE_16
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return S.default.Messages.STAGE_AUDIENCE_WAITING_ONE.format({
          first: e[0].userNick
        });
        if (2 === e.length) return S.default.Messages.STAGE_AUDIENCE_WAITING_TWO.format({
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return S.default.Messages.STAGE_AUDIENCE_WAITING_MANY.format({
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)
    })]
  })
}

function v(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, s = (0, l.useStateFromStores)([f.default], () => f.default.can(m.MODERATE_STAGE_CHANNEL_PERMISSIONS, t), [t]), r = t.guild_id, {
    canCreateGuildEvent: p
  } = (0, c.useManageResourcePermissions)(t), v = (0, C.default)(t.id), {
    usersInSummary: x
  } = (0, E.default)(t.id);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(g.default, {
      children: (0, a.jsx)("div", {
        className: _.iconBackground,
        children: (0, a.jsx)(h.default, {
          width: 40,
          height: 40,
          className: _.icon
        })
      })
    }), (0, a.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, a.jsx)(i.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.STAGE_START_PROMPT_TITLE_MODERATOR
      }), (0, a.jsx)(i.Text, {
        className: _.subtitle,
        variant: "text-sm/normal",
        children: S.default.Messages.STAGE_START_PROMPT_SUBTITLE
      })]
    }), v ? null : (0, a.jsx)(u.default, {
      channelId: t.id
    }), s ? (0, a.jsx)(d.default, {
      className: _.eventPrompt,
      channel: t
    }) : null, p ? (0, a.jsx)(o.default, {
      className: _.eventPrompt,
      guildId: r
    }) : null, (s || x.length > 0) && (0, a.jsx)("hr", {
      className: _.separator
    }), s ? (0, a.jsx)(I, {
      onClick: n
    }) : null, (0, a.jsx)(T, {
      channel: t
    })]
  })
}
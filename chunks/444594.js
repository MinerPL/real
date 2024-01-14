"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("424973");
var l = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  s = n("697218"),
  i = n("627490"),
  u = n("987772"),
  o = n("564875"),
  c = n("625687"),
  d = n("701909"),
  f = n("387111"),
  E = n("567469"),
  h = n("998716"),
  g = n("911457"),
  _ = n("49111"),
  S = n("745049"),
  v = n("782340"),
  R = n("600329");

function m(e) {
  let {
    icon: t
  } = e;
  return (0, l.jsx)("div", {
    className: R.iconContainer,
    children: (0, l.jsx)(t, {
      width: 24,
      height: 24
    })
  })
}

function C(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, l.jsxs)("div", {
    className: R.listItemContainer,
    children: [(0, l.jsx)("div", {
      className: R.listItemIconContainer,
      children: t
    }), (0, l.jsx)(r.Text, {
      className: R.listItemText,
      variant: "text-md/normal",
      color: "header-secondary",
      children: n
    })]
  })
}

function N(e) {
  var t;
  let {
    guild: n,
    channel: r,
    stageData: i
  } = e, u = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []), o = {
    id: "1337",
    guild_id: n.id,
    channel_id: r.id,
    topic: i.topic,
    description: i.description,
    privacy_level: null !== (t = i.privacyLevel) && void 0 !== t ? t : S.GuildScheduledEventPrivacyLevel.PUBLIC
  }, c = (0, E.useStageParticipants)(r.id, h.StageChannelParticipantNamedIndex.SPEAKER), d = (0, E.useStageParticipantsCount)(r.id, h.StageChannelParticipantNamedIndex.AUDIENCE), _ = c.slice(0, 5);
  return null == _.find(e => {
    var t;
    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == u ? void 0 : u.id)
  }) && _.push({
    user: u,
    userNick: f.default.getName(n.id, r.id, u)
  }), (0, l.jsx)("div", {
    className: R.previewCardContainer,
    children: (0, l.jsx)("div", {
      className: R.previewCard,
      children: (0, l.jsx)(g.default, {
        guild: n,
        stageInstance: o,
        showGuildPopout: !1,
        setShowGuildPopout: () => {},
        source: g.StageDiscoveryRecommendationSource.UNSPECIFIED,
        speakers: _,
        speakerCount: c.length,
        audienceCount: Math.max(1337, d),
        channelName: r.name
      })
    })
  })
}

function T(e) {
  let {
    guild: t,
    channel: n,
    stageData: a,
    headerId: s,
    loading: f,
    onNext: E,
    onCancel: h,
    onBack: g
  } = e;
  return null == t || null == n || null == a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(N, {
      guild: t,
      channel: n,
      stageData: a
    }), (0, l.jsxs)(r.ModalContent, {
      className: R.container,
      children: [(0, l.jsxs)("div", {
        className: R.header,
        children: [(0, l.jsx)(r.Heading, {
          id: s,
          className: R.title,
          variant: "heading-xl/semibold",
          children: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
        }), (0, l.jsx)(r.Text, {
          className: R.subtitle,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
        })]
      }), (0, l.jsxs)("div", {
        className: R.list,
        children: [(0, l.jsx)(C, {
          icon: (0, l.jsx)(m, {
            icon: i.default
          }),
          text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
        }), (0, l.jsx)(C, {
          icon: (0, l.jsx)(m, {
            icon: o.default
          }),
          text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
        }), (0, l.jsx)(C, {
          icon: (0, l.jsx)(m, {
            icon: u.default
          }),
          text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
        }), (0, l.jsx)(C, {
          icon: (0, l.jsx)(c.default, {
            className: R.badgeIconBackground,
            foreground: R.badgeIconForeground,
            width: 40,
            height: 40
          }),
          text: v.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
            articleURL: d.default.getArticleURL(_.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
          })
        })]
      })]
    }), (0, l.jsxs)(r.ModalFooter, {
      children: [(0, l.jsx)(r.Button, {
        color: r.Button.Colors.GREEN,
        onClick: E,
        submitting: f,
        children: v.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
      }), (0, l.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        className: R.cancelButton,
        onClick: h,
        children: v.default.Messages.CANCEL
      }), (0, l.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        color: r.Button.Colors.LINK,
        className: R.backButton,
        onClick: g,
        size: r.Button.Sizes.MIN,
        children: v.default.Messages.BACK
      })]
    })]
  })
}
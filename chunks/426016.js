"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("305961"),
  r = s("957255"),
  o = s("462392"),
  d = s("143460"),
  u = s("49111"),
  c = s("903639"),
  E = s("782340"),
  _ = s("245225");

function T(e) {
  var t;
  let {
    action: s,
    triggerType: T,
    guildId: I,
    toggled: S,
    onToggleAction: N
  } = e, g = e => () => N(e), f = (0, o.getActionInfo)(s.type, s, T), A = null === (t = s.metadata) || void 0 === t ? void 0 : t.durationSeconds, L = null != A ? (0, c.getFriendlyDurationString)(A) : null, m = (0, n.useStateFromStores)([r.default, i.default], () => r.default.can(u.Permissions.MODERATE_MEMBERS, i.default.getGuild(I)), [I]);
  if (null == f) return null;
  let {
    headerText: C,
    descriptionText: O,
    icon: h
  } = f;
  return (0, a.jsxs)("div", {
    className: _.actionContainer,
    children: [(0, a.jsx)("div", {
      className: _.actionIconContainer,
      children: (0, a.jsx)(h, {
        width: 24,
        height: 24,
        className: _.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: _.actionTextContainer,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: C
      }), (0, a.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: O
      }), S && (0, a.jsxs)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [function(e, t) {
          if (null === t) return null;
          if (e === d.AutomodTriggerType.MENTION_SPAM) return E.default.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER_MENTION_SPAM.format({
            friendlyDurationString: t
          });
          return E.default.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER.format({
            friendlyDurationString: t
          })
        }(T, L), m && (0, a.jsx)(l.Clickable, {
          onClick: g(!0),
          className: _.editChannel,
          tag: "span",
          role: "link",
          children: E.default.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_UPDATE_DURATION
        })]
      })]
    }), (0, a.jsx)(l.Tooltip, {
      text: E.default.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.format(),
      "aria-label": E.default.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.plainFormat(),
      shouldShow: !m,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(l.Checkbox, {
          type: l.Checkbox.Types.INVERTED,
          value: S,
          onChange: g(!1),
          disabled: !m,
          className: _.actionCheckbox
        })
      })
    })]
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("191814"),
  i = s("757715"),
  r = s("406876"),
  o = s("167109"),
  d = s("561205"),
  u = s("246506"),
  c = s("301289"),
  E = s("341778"),
  _ = s("782340"),
  T = s("332227"),
  I = s("780425");

function S() {
  let {
    editStateId: e,
    guildId: t
  } = (0, r.useEditStateContext)(), [, S] = o.useRoleIcon(e, t), [N, g] = o.useRoleColor(e, t), f = o.useRole(e, t);

  function A() {
    (0, n.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("64567").then(s.bind(s, "64567"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onUploadIcon: e => S({
          icon: e,
          unicodeEmoji: null
        }),
        onSelectUnicodeEmoji: e => S({
          icon: null,
          unicodeEmoji: e
        })
      })
    })
  }
  let L = (0, i.useRoleSubscriptionSettingsDisabled)();
  return (0, a.jsxs)(d.default, {
    title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_TITLE,
    description: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_FLAIR_HEADER_SUBTITLE,
    children: [(0, a.jsx)(n.FormSection, {
      title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_COLOR_TITLE,
      disabled: L,
      children: (0, a.jsx)(c.default, {
        value: N,
        onChange: g,
        disabled: L
      })
    }), (0, a.jsx)(l.default, {
      size: 24
    }), (0, a.jsx)("div", {
      className: T.iconSection,
      children: (0, a.jsxs)(n.FormSection, {
        title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_TITLE,
        disabled: L,
        children: [(0, a.jsx)(n.FormText, {
          type: n.FormText.Types.DESCRIPTION,
          className: T.formDescription,
          disabled: L,
          children: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_BADGE_DESCRIPTION
        }), (0, a.jsxs)("div", {
          className: I.iconUploaderContainer,
          children: [(0, a.jsx)(E.default, {
            role: f,
            "aria-label": _.default.Messages.ROLE_ICON_CHOOSE_IMAGE,
            onClick: A,
            disabled: L
          }), (0, a.jsx)(n.Button, {
            look: n.Button.Looks.OUTLINED,
            color: n.Button.Colors.PRIMARY,
            className: T.imageUploadButtonCTA,
            onClick: A,
            disabled: L,
            children: _.default.Messages.ROLE_ICON_CHOOSE_IMAGE
          })]
        })]
      })
    }), (0, a.jsx)(l.default, {
      size: 24
    }), (0, a.jsx)(n.FocusBlock, {
      children: (0, a.jsxs)("div", {
        className: I.previewContainer,
        "aria-hidden": !0,
        children: [(0, a.jsx)(u.default, {
          guildId: t,
          role: f,
          className: I.messageContainer,
          theme: "light"
        }), (0, a.jsx)(u.default, {
          guildId: t,
          role: f,
          className: I.messageContainer,
          theme: "dark"
        })]
      })
    })]
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("446674"),
  o = s("77078"),
  d = s("913144"),
  u = s("430568"),
  c = s("223170"),
  E = s("449008"),
  _ = s("900938"),
  T = s("999905"),
  I = s("782340"),
  S = s("812735"),
  N = s("756058");
(n = a || (a = {}))[n.LOADING = 0] = "LOADING", n[n.INTRO = 1] = "INTRO", n[n.SETTINGS = 2] = "SETTINGS";
let g = e => {
  let {
    setWelcomeView: t,
    setShowCreateModal: a
  } = e, n = [{
    emoji: "\uD83D\uDCAC",
    description: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_1,
    name: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_1
  }, {
    emoji: "\uD83C\uDFF9",
    description: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_2,
    name: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_2
  }, {
    emoji: "\uD83D\uDDDE",
    description: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_3,
    name: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_3
  }];
  return (0, l.jsxs)(o.FormSection, {
    title: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    tag: "h1",
    children: [(0, l.jsxs)("div", {
      className: S.welcomeDescription,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_TEXT.format()
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          a(!0), t(2)
        },
        children: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_BUTTON
      })]
    }), (0, l.jsxs)("div", {
      className: S.exampleContainer,
      children: [(0, l.jsxs)("div", {
        className: S.exampleWumpus,
        children: [(0, l.jsx)("img", {
          className: S.wumpus,
          alt: "",
          src: s("517226")
        }), (0, l.jsx)("div", {
          className: S.tooltipPointer
        }), (0, l.jsx)("div", {
          className: S.tooltip,
          children: I.default.Messages.GUILD_SETTINGS_EXAMPLE_TOOLTIP
        })]
      }), (0, l.jsxs)("div", {
        className: S.exampleModal,
        children: [(0, l.jsx)("img", {
          alt: "",
          className: N.guildIcon,
          src: s("822460"),
          width: 64,
          height: 64
        }), (0, l.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: S.header,
          children: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_TITLE.format()
        }), (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: N.guildDescription,
          children: I.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_DESCRIPTION
        }), (0, l.jsx)(o.FormTitle, {
          className: N.choiceHeader,
          children: I.default.Messages.WELCOME_SCREEN_CHOICE_HEADER
        }), (0, l.jsx)("div", {
          className: N.options,
          children: n.map(e => (0, l.jsxs)("div", {
            className: S.optionContainer,
            children: [(0, l.jsx)(u.default, {
              emojiName: e.emoji,
              className: N.optionEmoji
            }), (0, l.jsxs)("div", {
              className: N.optionTextContainer,
              children: [(0, l.jsx)(o.Text, {
                variant: "text-md/semibold",
                className: N.channelDescription,
                children: e.description
              }), (0, l.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: "#".concat(e.name)
              })]
            })]
          }, e.name))
        })]
      })]
    })]
  })
};
var f = () => {
  let {
    guild: e
  } = (0, r.useStateFromStores)([_.default], () => _.default.getProps()), [t, s] = i.useState(0), [a, n] = i.useState(!1);
  switch (i.useEffect(() => {
      null != e && d.default.wait(() => {
        (0, c.fetchWelcomeScreen)(e.id).then(e => {
          s(null == e ? 1 : 2)
        })
      })
    }, [e]), t) {
    case 0:
      return (0, l.jsx)(o.Spinner, {
        type: o.Spinner.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, l.jsx)(g, {
        setWelcomeView: s,
        setShowCreateModal: n
      });
    case 2:
      return (0, l.jsx)(T.default, {
        guild: e,
        showCreateModal: a
      });
    default:
      return (0, E.assertNever)(t)
  }
}
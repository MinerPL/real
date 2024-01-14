"use strict";
n.r(t), n.d(t, {
  Title: function() {
    return T
  },
  SubTitle: function() {
    return E
  },
  Image: function() {
    return Image
  },
  Button: function() {
    return b
  },
  Avatar: function() {
    return _
  },
  GuildIcon: function() {
    return I
  },
  ChannelIcon: function() {
    return S
  },
  Input: function() {
    return v
  },
  Block: function() {
    return A
  },
  SubText: function() {
    return O
  },
  AuthSpinner: function() {
    return R
  },
  ActivityCount: function() {
    return j
  },
  JoiningAs: function() {
    return D
  },
  IncompatibleBrowser: function() {
    return C
  },
  default: function() {
    return L
  }
}), n("834022");
var s = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  r = n("77078"),
  l = n("843962"),
  u = n("145131"),
  o = n("476263"),
  d = n("476765"),
  c = n("637888"),
  f = n("98013"),
  p = n("701909"),
  m = n("439932"),
  g = n("49111"),
  h = n("782340"),
  x = n("79902");
let N = r.Avatar;
null == N && (N = () => null);
let T = e => {
    let {
      className: t,
      id: n,
      children: a
    } = e;
    return (0, s.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: i(x.title, t),
      id: n,
      children: a
    })
  },
  E = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: t,
      children: n
    })
  },
  Image = e => {
    let {
      className: t,
      src: n
    } = e;
    return (0, s.jsx)("img", {
      alt: "",
      src: n,
      className: i(x.image, t)
    })
  },
  b = e => {
    let {
      className: t,
      ...n
    } = e, a = n.look === r.Button.Looks.LINK;
    return (0, s.jsx)(r.Button, {
      size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
      fullWidth: !a,
      className: i(t, {
        [x.button]: !a,
        [x.linkButton]: a
      }),
      ...n
    })
  };
b.Looks = r.Button.Looks, b.Colors = r.Button.Colors, b.Sizes = r.Button.Sizes;
let _ = e => {
    let {
      className: t,
      src: n,
      size: a
    } = e;
    return (0, s.jsx)(N, {
      src: n,
      size: a,
      className: i(x.inviteLargeIcon, t),
      "aria-hidden": !0
    })
  },
  I = e => {
    let {
      guild: t,
      size: n,
      animate: a = !1,
      className: i
    } = e;
    return (0, s.jsx)(o.default, {
      active: !0,
      guild: t,
      size: n,
      animate: a,
      className: i
    })
  };
I.Sizes = o.default.Sizes;
let S = e => {
  let {
    className: t,
    channel: n,
    size: a
  } = e;
  return (0, s.jsx)(N, {
    src: (0, l.getChannelIconURL)(n),
    size: a,
    className: i(x.inviteIcon, t),
    "aria-hidden": !0
  })
};
S.Sizes = r.AvatarSizes;
let v = e => {
    let {
      label: t,
      error: n,
      placeholder: a,
      value: l,
      className: u,
      inputClassName: o,
      setRef: c,
      type: f = "text",
      onChange: p,
      autoComplete: m,
      autoFocus: g,
      maxLength: h,
      spellCheck: N,
      name: T,
      description: E,
      required: b,
      onFocus: _,
      onBlur: I
    } = e, S = (0, d.useUID)();
    return (0, s.jsxs)(r.FormItem, {
      title: t,
      error: n,
      className: u,
      required: b,
      tag: "label",
      htmlFor: S,
      children: [(0, s.jsx)(r.TextInput, {
        name: T,
        type: f,
        value: l,
        inputRef: c,
        placeholder: a,
        inputClassName: i(o, {
          [x.inputError]: null != n
        }),
        "aria-label": t,
        onChange: p,
        autoComplete: m,
        autoFocus: g,
        maxLength: h,
        spellCheck: N,
        id: S,
        onFocus: _,
        onBlur: I
      }), null != E ? (0, s.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: x.description,
        children: E
      }) : null]
    })
  },
  A = e => {
    let {
      className: t,
      children: n
    } = e;
    return (0, s.jsx)("div", {
      className: i(x.block, t),
      children: n
    })
  },
  O = e => {
    let {
      className: t,
      children: n,
      isProminent: a
    } = e;
    return (0, s.jsx)(r.Text, {
      variant: a ? "text-sm/normal" : "text-xs/normal",
      className: i(x.subText, t),
      children: n
    })
  },
  R = e => {
    let {
      className: t
    } = e;
    return (0, s.jsx)(u.default, {
      direction: u.default.Direction.VERTICAL,
      align: u.default.Align.CENTER,
      className: t,
      children: (0, s.jsx)(c.default, {
        className: x.spinnerVideo
      })
    })
  },
  j = e => {
    let t, {
      online: n,
      total: a,
      className: l,
      flat: o,
      textClassName: d
    } = e;
    return null == a ? null : (null != n && n > 0 && (t = (0, s.jsxs)("div", {
      className: i(x.pill, x.pillOnline, o && x.pillFlat),
      children: [(0, s.jsx)("i", {
        className: x.pillIconOnline
      }), (0, s.jsx)(r.Text, {
        tag: "span",
        className: i(x.pillMessage, d),
        variant: "text-sm/normal",
        children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: n
        })
      })]
    })), (0, s.jsxs)(u.default, {
      justify: u.default.Justify.CENTER,
      className: l,
      children: [t, (0, s.jsxs)("div", {
        className: i(x.pill, o && x.pillFlat),
        children: [(0, s.jsx)("i", {
          className: x.pillIconTotal
        }), (0, s.jsx)(r.Text, {
          tag: "span",
          className: i(x.pillMessage, d),
          variant: "text-sm/normal",
          children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
            count: a
          })
        })]
      })]
    }))
  },
  D = e => {
    let {
      user: t
    } = e;
    return null == t ? null : (0, s.jsxs)("div", {
      className: x.joiningAs,
      children: [(0, s.jsx)(r.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
        children: h.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
      }), (0, s.jsx)(_, {
        className: x.joiningAsAvatar,
        src: t.getAvatarURL(void 0, 24),
        size: r.AvatarSizes.SIZE_24,
        "aria-label": t.username
      }), (0, s.jsx)(r.Text, {
        className: x.joiningAsUsername,
        tag: "span",
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.username
      })]
    })
  },
  C = e => {
    let {
      className: t
    } = e;
    return (0, s.jsxs)(A, {
      className: t,
      children: [(0, s.jsx)(b, {
        onClick: () => window.open((0, f.getCurrentPlatformDownloadURL)()),
        children: h.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
          platform: (0, f.getPlatformReadableName)()
        })
      }), (0, s.jsx)(O, {
        className: x.downloadButtonSubtext,
        children: h.default.Messages.INCOMPATIBLE_BROWSER.format({
          supportedBrowserURL: p.default.getArticleURL(g.HelpdeskArticles.SUPPORTED_BROWSERS)
        })
      })]
    })
  };
var L = e => {
  let {
    className: t,
    contentClassName: n,
    tag: a = "section",
    onSubmit: r,
    children: l,
    expanded: u = !1,
    theme: o = g.ThemeTypes.DARK,
    style: d
  } = e;
  return (0, s.jsxs)(a, {
    "data-theme": o,
    onSubmit: r,
    style: d,
    className: i(u ? x.authBoxExpanded : x.authBox, (0, m.getThemeClass)(o), t),
    children: [(0, s.jsx)("div", {
      className: x.discordLogo
    }), (0, s.jsx)("div", {
      className: i(x.centeringWrapper, n),
      children: l
    })]
  })
}
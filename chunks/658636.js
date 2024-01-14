"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("142833"),
  c = n("448993"),
  d = n("42203"),
  u = n("476765"),
  _ = n("238055"),
  N = n("49111"),
  E = n("782340"),
  m = n("912945");
let f = (0, u.uid)();
var I = e => {
  let {
    setStep: t,
    setGuildsInfo: n,
    email: l,
    setEmail: u,
    setGuildId: I,
    invite: C,
    onClose: T,
    isNUXFlow: S
  } = e, [h, g] = s.useState(null), [p, x] = s.useState(!1), v = async e => {
    e.preventDefault(), g(null), x(!0);
    try {
      var a, s, i, r, u;
      let e = null !== (u = null !== (r = null == C ? void 0 : null === (a = C.guild) || void 0 === a ? void 0 : a.id) && void 0 !== r ? r : null === (s = d.default.getChannel(null == C ? void 0 : null === (i = C.channel) || void 0 === i ? void 0 : i.id)) || void 0 === s ? void 0 : s.getGuildId()) && void 0 !== u ? u : void 0;
      e === _.INVITE_ROUTING_HUB_GUILD_ID && (e = void 0);
      let c = await o.default.sendVerificationEmail(l, !0, e),
        N = c.guilds_info,
        E = c.has_matching_guild;
      E ? (I(e), t(_.HubEmailConnectionSteps.VERIFY_PIN)) : 0 === N.length ? t(_.HubEmailConnectionSteps.SUBMIT_SCHOOL) : 1 === N.length ? (I(N[0].id), await o.default.sendVerificationEmail(l, !0, N[0].id), t(_.HubEmailConnectionSteps.VERIFY_PIN)) : (n(N), t(_.HubEmailConnectionSteps.SELECT_SCHOOL))
    } catch (e) {
      g(new c.APIError(e))
    } finally {
      x(!1)
    }
  }, A = E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER, O = E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
  if (S) A = E.default.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER, O = E.default.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION;
  else if ((null == C ? void 0 : C.guild) != null && C.guild.id !== _.INVITE_ROUTING_HUB_GUILD_ID && (null == C ? void 0 : C.approximate_member_count) != null) {
    let {
      name: e
    } = C.guild;
    A = E.default.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
      guildName: e,
      count: C.approximate_member_count
    })
  }
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)("div", {
      className: m.topImage
    }), (0, a.jsx)(r.Heading, {
      className: i(m.centerText, m.header),
      variant: "heading-xl/semibold",
      children: A
    }), (0, a.jsx)("div", {
      className: m.descriptionWidth,
      children: (0, a.jsx)(r.Text, {
        className: m.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: O
      })
    }), (0, a.jsxs)("form", {
      className: m.formContent,
      onSubmit: v,
      children: [(0, a.jsxs)(r.FormItem, {
        children: [(0, a.jsx)(r.FormTitle, {
          id: f,
          children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER
        }), (0, a.jsx)(r.TextInput, {
          placeholder: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
          onChange: e => {
            u(e)
          },
          error: null == h ? void 0 : h.getAnyErrorMessage(),
          "aria-labelledby": f
        })]
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        className: m.formDescription,
        variant: "text-sm/normal",
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION
      }), (0, a.jsx)(r.Button, {
        type: "submit",
        size: r.Button.Sizes.LARGE,
        color: r.Button.Colors.BRAND,
        className: m.submitButton,
        submitting: p,
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON
      }), (0, a.jsx)(r.Text, {
        className: m.termsPhrase,
        color: "header-secondary",
        variant: "text-xs/normal",
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format({
          termsURL: N.MarketingURLs.TERMS,
          privacyURL: N.MarketingURLs.PRIVACY
        })
      }), S && (0, a.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: T,
        className: m.cancelButton,
        children: E.default.Messages.HUB_EMAIL_CONNECTION_CANCEL
      })]
    })]
  })
}
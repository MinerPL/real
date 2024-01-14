"use strict";
n.r(t), n.d(t, {
  RawInviteCopyInputConnected: function() {
    return S
  },
  InviteCopyInput: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("498574"),
  o = n("446674"),
  u = n("862337"),
  d = n("77078"),
  c = n("162771"),
  f = n("102985"),
  p = n("599110"),
  E = n("306160"),
  I = n("568734"),
  h = n("354023"),
  m = n("865699"),
  A = n("91366"),
  C = n("49111"),
  _ = n("782340"),
  T = n("435808"),
  g = n("905518"),
  v = n("173791"),
  N = n("926622");
let S = o.default.connectStores([f.default], () => ({
    hideValue: f.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: s,
      onCopy: r,
      disabled: o
    } = e, [c, f] = a.useState(!1), [p, I] = a.useState(!1), h = a.useMemo(() => new u.DelayedCall(1e3, () => I(!1)), [I]);
    return a.useEffect(() => () => {
      h.cancel()
    }, [h]), (0, l.jsxs)("div", {
      className: i(g.input, v.flexJustifyBetween, v.flexCenter, {
        [g.success]: p,
        [g.focused]: c
      }),
      children: [(0, l.jsx)(d.TextInput, {
        className: T.copyInput,
        name: "invite",
        value: s ? _.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: T.noBorder,
        autoFocus: n,
        onFocus: () => n ? f(!0) : null,
        onBlur: () => n ? f(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": _.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: o
      }), E.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: p ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
        className: T.copyButton,
        onClick: () => {
          I(!0), h.delay(), r(t)
        },
        disabled: o,
        children: p ? _.default.Messages.INVITE_COPIED : _.default.Messages.COPY
      }) : null]
    })
  }),
  y = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: s,
      onClose: o,
      modalState: u,
      isGuestInviteCreationToggleEnabled: f,
      inviteFlags: g,
      setInviteFlags: v,
      showGuestInviteToggleForCurrentVoiceChannel: y,
      copyValue: P,
      changePage: M,
      inviteChannel: x,
      source: b,
      code: O,
      guildScheduledEvent: L,
      disabled: F
    } = e, {
      maxAge: R,
      maxUses: U,
      networkError: D,
      showVanityURL: j
    } = u, V = a.useCallback(() => {
      (0, E.copy)(P), p.default.track(C.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == x ? void 0 : x.id,
        channel_type: null == x ? void 0 : x.type,
        location: b,
        code: O,
        guild_scheduled_event_id: null == L ? void 0 : L.id
      })
    }, [P, x, b, O, L]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S, {
        value: P,
        autoFocus: s,
        onCopy: V,
        disabled: F
      }), f ? (0, l.jsx)("div", {
        className: T.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(d.FormSwitch, {
          className: T.temporaryMembershipContainer,
          value: (0, I.hasFlag)(g, r.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => v((0, I.setFlag)(g, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: _.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: F,
          hideBorder: !0,
          children: y ? _.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : _.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || j ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(N.marginTop8, T.footerText),
        children: [(0, h.maxAgeString)(R, U), " ", s ? (0, l.jsx)(d.Anchor, {
          onClick: () => M(A.InstantInviteModalPages.SETTINGS),
          children: _.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && s && j ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(N.marginTop8, T.footerText),
        children: [_.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
          onClick: () => M(A.InstantInviteModalPages.SETTINGS),
          children: _.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != D ? (0, l.jsx)(m.InviteErrorMessage, {
        guild: t,
        error: D,
        onClose: o
      }) : null]
    })
  }
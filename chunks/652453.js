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
  h = n("568734"),
  I = n("354023"),
  C = n("865699"),
  m = n("91366"),
  A = n("49111"),
  T = n("782340"),
  _ = n("435808"),
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
    } = e, [c, f] = a.useState(!1), [p, h] = a.useState(!1), I = a.useMemo(() => new u.DelayedCall(1e3, () => h(!1)), [h]);
    return a.useEffect(() => () => {
      I.cancel()
    }, [I]), (0, l.jsxs)("div", {
      className: i(g.input, v.flexJustifyBetween, v.flexCenter, {
        [g.success]: p,
        [g.focused]: c
      }),
      children: [(0, l.jsx)(d.TextInput, {
        className: _.copyInput,
        name: "invite",
        value: s ? T.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: _.noBorder,
        autoFocus: n,
        onFocus: () => n ? f(!0) : null,
        onBlur: () => n ? f(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": T.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: o
      }), E.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: p ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
        className: _.copyButton,
        onClick: () => {
          h(!0), I.delay(), r(t)
        },
        disabled: o,
        children: p ? T.default.Messages.INVITE_COPIED : T.default.Messages.COPY
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
      changePage: b,
      inviteChannel: x,
      source: M,
      code: O,
      guildScheduledEvent: L,
      disabled: F
    } = e, {
      maxAge: R,
      maxUses: U,
      networkError: D,
      showVanityURL: j
    } = u, k = a.useCallback(() => {
      (0, E.copy)(P), p.default.track(A.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == x ? void 0 : x.id,
        channel_type: null == x ? void 0 : x.type,
        location: M,
        code: O,
        guild_scheduled_event_id: null == L ? void 0 : L.id
      })
    }, [P, x, M, O, L]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S, {
        value: P,
        autoFocus: s,
        onCopy: k,
        disabled: F
      }), f ? (0, l.jsx)("div", {
        className: _.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(d.FormSwitch, {
          className: _.temporaryMembershipContainer,
          value: (0, h.hasFlag)(g, r.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => v((0, h.setFlag)(g, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: T.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: F,
          hideBorder: !0,
          children: y ? T.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || j ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(N.marginTop8, _.footerText),
        children: [(0, I.maxAgeString)(R, U), " ", s ? (0, l.jsx)(d.Anchor, {
          onClick: () => b(m.InstantInviteModalPages.SETTINGS),
          children: T.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && s && j ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(N.marginTop8, _.footerText),
        children: [T.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
          onClick: () => b(m.InstantInviteModalPages.SETTINGS),
          children: T.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != D ? (0, l.jsx)(C.InviteErrorMessage, {
        guild: t,
        error: D,
        onClose: o
      }) : null]
    })
  }
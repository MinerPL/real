"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("249654"),
  i = n("446674"),
  r = n("77078"),
  o = n("819689"),
  u = n("850391"),
  d = n("41170"),
  c = n("300322"),
  f = n("26989"),
  E = n("957255"),
  _ = n("697218"),
  T = n("599110"),
  I = n("718422"),
  m = n("49111"),
  N = n("33536");

function p(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, l = (a.default.extractTimestamp(n.id) + a.default.extractTimestamp(s.id)) % t.length;
  return t[l]
}

function S(e) {
  let {
    currentUser: t,
    channel: n,
    message: a,
    buttonLabels: i,
    stickers: c,
    event: f,
    eventProperties: E
  } = e, [_, m] = l.useState(!1), S = l.useMemo(() => p({
    assets: c,
    currentUser: t,
    message: a
  }), [c, t, a]), A = l.useMemo(() => p({
    assets: i,
    currentUser: t,
    message: a
  }), [i, t, a]), C = l.useCallback(async () => {
    let {
      valid: e
    } = await (0, I.applyChatRestrictions)({
      type: u.ChatInputTypes.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: s
      } = e;
      o.default.sendGreetMessage(t.id, s.id, o.default.getSendMessageOptionsForReply({
        channel: t,
        message: n,
        shouldMention: !0,
        showMentionToggle: !0
      }))
    }({
      channel: n,
      message: a,
      sticker: S
    }), ! function(e) {
      let {
        sticker: t,
        event: n,
        eventProperties: s
      } = e;
      null != n && T.default.track(n, {
        ...s,
        sticker_id: t.id
      })
    }({
      sticker: S,
      event: f,
      eventProperties: E
    }))
  }, [n, a, S, f, E]);
  return (0, s.jsxs)(r.Button, {
    className: N.CTAMessageButtonOuter,
    innerClassName: N.CTAMessageButton,
    color: r.ButtonColors.PRIMARY,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    onClick: C,
    children: [(0, s.jsx)(d.default, {
      className: N.CTAMessageSticker,
      isInteracting: _,
      sticker: S,
      size: 28
    }), A]
  })
}

function A(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: l,
    stickers: a,
    event: r,
    eventProperties: o
  } = e, u = _.default.getCurrentUser(), d = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, i.useStateFromStores)([E.default, f.default], () => {
      var e;
      let l = t.guild_id;
      if (null == s || null == l) return !1;
      let a = (0, c.computeIsReadOnlyThread)(t),
        i = E.default.can(m.Permissions.SEND_MESSAGES, t),
        r = null === (e = f.default.getMember(l, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return i && !a && !r && !o
    })
  }({
    channel: t,
    message: n,
    currentUser: u
  });
  return null != u && d ? (0, s.jsx)("div", {
    className: N.CTAMessage,
    children: (0, s.jsx)(S, {
      currentUser: u,
      channel: t,
      message: n,
      buttonLabels: l,
      stickers: a,
      event: r,
      eventProperties: o
    })
  }) : null
}
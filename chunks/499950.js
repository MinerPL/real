"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("9294"),
  r = n("512027"),
  u = n("52393"),
  o = n("652453"),
  d = n("119184"),
  c = n("923959"),
  E = n("305961"),
  f = n("330154"),
  _ = n("943232"),
  I = n("945330"),
  h = n("599110"),
  T = n("306160"),
  N = n("354023"),
  v = n("841363"),
  m = n("49111"),
  S = n("782340"),
  g = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: C,
  INVITE_OPTIONS_UNLIMITED: p
} = N.default;

function x(e) {
  var t, n, x;
  let {
    onClose: R,
    event: A
  } = e, O = null == A ? void 0 : A.guild_id, L = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != O ? null === (e = c.default.getDefaultChannel(O)) || void 0 === e ? void 0 : e.id : null
  }, [O]), M = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(O), [O]), D = (null == M ? void 0 : M.vanityURLCode) != null && (null == M ? void 0 : M.vanityURLCode.length) > 0, {
    enabled: y
  } = r.default.useExperiment({
    guildId: null != O ? O : "",
    location: "bd50e8_1"
  }, {
    autoTrackExposure: D
  }), {
    channel_id: U,
    id: V
  } = null != A ? A : {}, j = (0, a.useStateFromStores)([f.default], () => {
    let e = null != U ? U : L;
    return null == e ? null : f.default.getInvite(e)
  }, [U, L]);
  if (null == A) return R(), null;
  let P = y && null !== (t = null == M ? void 0 : M.vanityURLCode) && void 0 !== t ? t : null == j ? void 0 : j.code,
    G = null != P ? (0, i.generateInviteKeyFromExtraData)({
      baseCode: P,
      guildScheduledEventId: V
    }) : null,
    H = null == G || null == j,
    b = (0, u.default)(null != G ? G : ""),
    B = null !== (n = null == j ? void 0 : j.maxAge) && void 0 !== n ? n : C.value,
    F = null !== (x = null == j ? void 0 : j.maxUses) && void 0 !== x ? x : p.value;
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: R,
      className: g.close,
      "aria-label": S.default.Messages.CLOSE,
      children: (0, l.jsx)(I.default, {})
    }), (0, l.jsx)(d.default, {
      children: (0, l.jsx)("div", {
        className: g.iconContainer,
        children: (0, l.jsx)(_.default, {
          height: 30,
          width: 30,
          className: g.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: g.header,
      children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.body,
      children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: g.invite,
      children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
        value: b,
        autoFocus: !1,
        onCopy: e => {
          if (H) return;
          (0, T.copy)(e);
          let t = (0, v.getChannelTypeFromEntity)(A.entity_type);
          h.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: A.guild_id,
            channel: U,
            channel_type: t,
            location: m.InstantInviteSources.GUILD_EVENTS,
            code: j.code,
            guild_scheduled_event_id: null == A ? void 0 : A.id
          })
        }
      }), (null == M ? void 0 : M.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: g.inviteDetail,
        children: (0, N.maxAgeString)(B, F)
      })]
    })]
  })
}
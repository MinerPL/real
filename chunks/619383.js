"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("907002"),
  i = s("65597"),
  r = s("77078"),
  o = s("206230"),
  d = s("308086"),
  u = s("305961"),
  c = s("663745"),
  S = s("427459"),
  E = s("719923"),
  f = s("299039"),
  T = s("397723"),
  m = s("717266"),
  _ = s("131424"),
  g = s("49111"),
  h = s("646718"),
  I = s("782340"),
  N = s("762981");

function p(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    showAltText: i,
    isCanceled: o,
    premiumSubscription: d
  } = e, u = n.useMemo(() => {
    if (o) return I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
      date: d.currentPeriodEnd
    });
    let e = null != s.premiumGuildSubscription ? f.default.extractTimestamp(s.premiumGuildSubscription.id) : 0;
    return I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION_SHORTENED.format({
      date: new Date(e)
    })
  }, [s, o, d]), c = n.useMemo(() => (function(e) {
    if (null == e || e === g.BoostedGuildTiers.NONE) return "";
    let t = [I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_EMOJI_SLOTS.format({
      numEmojiSlots: h.BoostedGuildFeatures[e].limits.emoji
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STICKER_SLOTS.format({
      numStickerSlots: h.BoostedGuildFeatures[e].limits.stickers
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_SOUNDBOARD_SLOTS.format({
      numSoundboardSlots: h.BoostedGuildFeatures[e].limits.soundboardSounds
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_STREAM_QUALITY.format({
      resolution: h.BoostedGuildFeatures[e].limits.screenShareQualityResolution,
      framerate: h.BoostedGuildFeatures[e].limits.screenShareQualityFramerate
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_AUDIO_QUALITY.format({
      bitrate: h.BoostedGuildFeatures[e].limits.bitrate / 1e3
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_UPLOAD_SIZE_LIMIT.format({
      filesize: h.BoostedGuildFeatures[e].limits.fileSize / 1024 / 1024
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VIDEO_STAGE_SEATS.format({
      numVideoStageSeats: h.BoostedGuildFeatures[e].limits.stageVideoUsers
    }), I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_ANIMATED_GUILD_ICON, I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_INVITE_BACKGROUND];
    e >= g.BoostedGuildTiers.TIER_2 && (t.push(I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_GUILD_BANNER), t.push(I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_CUSTOM_ROLE_ICONS)), e >= g.BoostedGuildTiers.TIER_3 && t.push(I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_VANITY_URL);
    let s = t[Math.floor(Math.random() * t.length)];
    return I.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PERK_TEMPLATE.format({
      perk: s
    })
  })(t), [t]), S = (0, l.useTransition)(i, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  return o || t === g.BoostedGuildTiers.NONE ? (0, a.jsx)("div", {
    className: N.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: u
    })
  }) : S((e, t) => (0, a.jsx)(l.animated.div, {
    style: e,
    className: N.boostDescriptionInnerContainer,
    children: (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? c : u
    })
  }))
}

function C(e) {
  let {
    guildTier: t,
    guildBoostSlot: s,
    premiumSubscription: l,
    hasCancelableGuildBoostSlot: u,
    showAltText: E,
    isLastGuildBoostSlot: f
  } = e, _ = (0, i.default)([o.default], () => o.default.useReducedMotion), g = n.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), h = n.useMemo(() => null != g && g > new Date, [g]), C = (0, S.isGuildBoostSlotCanceled)(s);
  return (0, a.jsxs)("div", {
    className: N.boostContainer,
    children: [(0, a.jsxs)("div", {
      className: N.boostInnerContainer,
      children: [(0, a.jsx)(m.default, {
        isCanceled: C,
        hasCooldown: h,
        useReducedMotion: _
      }), (0, a.jsx)("div", {
        className: N.boostDescriptionContainer,
        children: null != g && h && !C ? (0, a.jsx)(T.default, {
          className: N.boostDescriptionInnerContainer,
          cooldown: g.getTime()
        }) : (0, a.jsx)(p, {
          guildTier: t,
          guildBoostSlot: s,
          showAltText: E,
          isCanceled: C,
          premiumSubscription: l
        })
      }), (0, a.jsx)(r.Popout, {
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(d.default, {
            onClose: t,
            guildBoostSlot: s,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: u
          })
        },
        position: "right",
        align: "center",
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          "aria-label": I.default.Messages.MORE_OPTIONS,
          className: N.boostSlotMenuIcon,
          children: (0, a.jsx)(c.default, {})
        })
      })]
    }), !f && (0, a.jsx)("div", {
      className: N.boostContainerSeparator
    })]
  })
}

function A(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: s,
    premiumSubscription: n,
    hasCancelableGuildBoostSlot: l,
    showAltText: r
  } = e, o = (0, i.default)([u.default], () => u.default.getGuild(t), [t]);
  return (0, a.jsxs)("div", {
    className: N.appliedBoostContainer,
    children: [(0, a.jsx)(_.default, {
      guildId: t,
      boostingVariant: !1
    }), s.map((e, t) => (0, a.jsx)(C, {
      guildTier: null == o ? void 0 : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: n,
      hasCancelableGuildBoostSlot: l,
      showAltText: r,
      isLastGuildBoostSlot: t === s.length - 1
    }, e.id))]
  })
}

function O(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: s
  } = e, [l, i] = n.useState(!1);
  n.useEffect(() => {
    let e = -1;
    return null != s && (e = setInterval(() => {
      i(e => !e)
    }, 3e3)), () => {
      clearInterval(e)
    }
  }, [s]);
  let {
    boostsByGuildId: r,
    numActiveGuildBoostSlots: o
  } = n.useMemo(() => {
    let e = 0,
      s = {};
    return Object.keys(t).forEach(a => {
      let n = t[a];
      if (!(0, S.isGuildBoostSlotCanceled)(n) && e++, null != n.premiumGuildSubscription) {
        let e = n.premiumGuildSubscription.guildId;
        !(e in s) && (s[e] = []), s[e].push(n)
      }
    }), {
      boostsByGuildId: s,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == s || 0 === Object.keys(r).length) return null;
  let d = E.default.getNumIncludedPremiumGuildSubscriptionSlots(s.planId),
    u = o > d;
  return (0, a.jsxs)("div", {
    className: N.wrapper,
    children: [(0, a.jsx)("div", {
      className: N.container,
      children: Object.keys(r).map(e => (0, a.jsx)(A, {
        guildId: e,
        guildBoostSlotRecords: r[e],
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: u,
        showAltText: l
      }, e))
    }), (0, a.jsx)("div", {
      className: N.mainSeparator
    })]
  })
}
"use strict";
n.r(t), n.d(t, {
  transitionToGuildFromEventInvite: function() {
    return et
  },
  default: function() {
    return en
  }
}), n("70102");
var s = n("597755"),
  i = n.n(s),
  r = n("759843"),
  a = n("742270"),
  o = n("815157"),
  d = n("391679"),
  u = n("872717"),
  l = n("913144"),
  f = n("599417"),
  _ = n("333805"),
  c = n("427953"),
  g = n("644223"),
  m = n("523086"),
  h = n("263901"),
  v = n("677315"),
  E = n("233322"),
  p = n("157186"),
  y = n("290886"),
  T = n("374021"),
  C = n("398604"),
  S = n("704341"),
  I = n("9294"),
  A = n("487946"),
  D = n("258158"),
  N = n("877275"),
  O = n("393414"),
  b = n("716214"),
  P = n("233069"),
  V = n("271938"),
  R = n("42203"),
  k = n("923959"),
  M = n("26989"),
  w = n("305961"),
  L = n("88093"),
  U = n("330154"),
  G = n("957255"),
  F = n("697218"),
  x = n("599110"),
  B = n("840707"),
  H = n("65300"),
  Y = n("851387"),
  j = n("990766"),
  K = n("49111"),
  W = n("724210"),
  z = n("706530"),
  q = n("91366"),
  X = n("837979");
let Q = "invite",
  Z = null;

function J(e) {
  var t, n, s;
  let i = {};
  switch (e.target_type) {
    case q.InviteTargetTypes.STREAM:
      i.targetType = e.target_type, i.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
      break;
    case q.InviteTargetTypes.EMBEDDED_APPLICATION:
      i.targetType = e.target_type, i.targetApplicationId = null === (s = e.target_application) || void 0 === s ? void 0 : s.id;
      break;
    case q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
      i.targetType = e.target_type
  }
  let r = null != w.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id),
    a = !r || e.new_member;
  return a && null != e.channel && (0, P.isGuildTextChannelType)(e.channel.type) && (i.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (i.guildScheduledEvent = e.guild_scheduled_event), i
}

function $(e) {
  let {
    guildId: t,
    channel: s,
    options: i,
    analyticsLocations: r = []
  } = e, {
    type: a
  } = s, o = function(e, t, n) {
    var s, i;
    if ((null == n ? void 0 : n.targetType) === q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return W.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !P.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, v.canSeeGuildHome)(e) || (0, y.canSeeOnboardingHome)(e))) return W.StaticChannelRoute.GUILD_HOME;
    let r = R.default.getChannel(t.id);
    return G.default.can(K.Permissions.VIEW_CHANNEL, r) ? t.id : null !== (i = null === (s = k.default.getDefaultChannel(e, !0, K.Permissions.CREATE_INSTANT_INVITE)) || void 0 === s ? void 0 : s.id) && void 0 !== i ? i : t.id
  }(t, s, i), {
    targetUserId: d,
    targetType: u,
    targetApplicationId: l
  } = null != i ? i : {}, f = a === K.ChannelTypes.GUILD_STAGE_VOICE, _ = K.Routes.CHANNEL(t, o);
  P.GUILD_VOCAL_CHANNEL_TYPES.has(a) ? (0, h.addPostConnectionCallback)(() => {
    n.el("987317").then(n.bind(n, "987317")).then(e => {
      let {
        default: n
      } = e, a = () => {
        if (f) {
          (0, b.connectAndOpen)(s instanceof P.ChannelRecordBase ? s : (0, P.createChannelRecord)(s)), (0, O.transitionTo)(_);
          return
        }
        n.selectVoiceChannel(o), u === q.InviteTargetTypes.STREAM && null != d && j.watchStreamAndTransitionToStream({
          streamType: z.StreamTypes.GUILD,
          ownerId: d,
          guildId: t,
          channelId: o
        }), u === q.InviteTargetTypes.EMBEDDED_APPLICATION && null != l && ((0, O.transitionTo)(K.Routes.CHANNEL(null != t ? t : K.ME, o)), (0, g.default)(o, l, r, null == i ? void 0 : i.intent))
      };
      (0, p.shouldShowMembershipVerificationGate)(t, [w.default, L.default, F.default, M.default]) ? (0, E.openMemberVerificationModal)(t, a) : a()
    })
  }) : (0, c.isActivityInTextSupportedForChannelType)(a) && u === q.InviteTargetTypes.EMBEDDED_APPLICATION && null != l && ((0, O.transitionTo)(K.Routes.CHANNEL(null != t ? t : K.ME, o)), (0, g.default)(o, l, r, null == i ? void 0 : i.intent)), (function(e, t) {
    let {
      type: n
    } = e, {
      transitionTo: s,
      welcomeModalChannelId: i,
      guildScheduledEvent: r
    } = null != t ? t : {}, a = n === K.ChannelTypes.GUILD_STAGE_VOICE, o = {
      navigationReplace: !0
    };
    return null != i && (o.welcomeModalChannelId = i), a && (o.state = X.STAGE_INVITE_STATE_KEY), null != r && (o.guildScheduledEventId = r.id), e => null != s ? s(e, o, N.default.INVITE_ACCEPT) : (0, O.transitionTo)(e, o, N.default.INVITE_ACCEPT)
  })(s, i)(_)
}
let ee = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    R.default.addConditionalChangeListener(() => {
      var s;
      let i = R.default.getChannel(e),
        r = F.default.getCurrentUser();
      return null == i || null == r || (!i.nsfw || !!r.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
        let {
          guildScheduledEvent: t,
          welcomeModalChannelId: n
        } = e;
        null != t && (0, h.addPostConnectionCallback)(() => {
          let e = {
            guildScheduledEventId: t.id
          };
          null != n && (e.welcomeModalChannelId = n), (0, T.transitionToEventDetailsFromInvite)(t, e)
        })
      }(t), !1) : ($({
        guildId: null !== (s = i.getGuildId()) && void 0 !== s ? s : K.ME,
        channel: i,
        options: t,
        analyticsLocations: n
      }), !1))
    })
  },
  et = async e => {
    let {
      guild_id: t,
      channel_id: n
    } = e;
    (0, C.isGuildScheduledEventActive)(e) && null != n ? ee(n) : await Y.default.transitionToGuildSync(t)
  };
var en = {
  resolveInvite: function e(t, n, s) {
    return l.default.isDispatching() ? Promise.resolve().then(() => e(t, n, s)) : (l.default.dispatch({
      type: "INVITE_RESOLVE",
      code: t
    }), (0, A.default)(t, n, s).then(e => {
      let {
        invite: t,
        code: n,
        banned: s
      } = e;
      return null != t ? l.default.dispatch({
        type: "INVITE_RESOLVE_SUCCESS",
        invite: t,
        code: n
      }) : l.default.dispatch({
        type: "INVITE_RESOLVE_FAILURE",
        code: n,
        banned: s
      }), {
        invite: t,
        code: n
      }
    }))
  },
  getInviteContext: (e, t) => ({
    location: e,
    location_guild_id: null != t.guild ? t.guild.id : void 0,
    location_channel_id: null != t.channel ? t.channel.id : void 0,
    location_channel_type: null != t.channel ? t.channel.type : void 0
  }),
  async createInvite(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0;
    try {
      let {
        body: s
      } = await u.default.post({
        url: K.Endpoints.INSTANT_INVITES(e),
        body: t,
        context: {
          location: n
        }
      });
      return l.default.dispatch({
        type: "INSTANT_INVITE_CREATE_SUCCESS",
        channelId: e,
        invite: s
      }), s
    } catch (t) {
      throw l.default.dispatch({
        type: "INSTANT_INVITE_CREATE_FAILURE",
        channelId: e
      }), new f.default(t)
    }
  },
  async mobileCreateInvite(e, t) {
    let n = U.default.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let s = {
        max_age: K.Durations.DAY
      },
      i = await this.createInvite(e.id, s, t).catch(() => l.default.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == i ? void 0 : i.code
  },
  async getAllFriendInvites(e) {
    await new Promise(e => l.default.wait(() => e(null)));
    let t = U.default.getFriendInvitesFetching();
    if (t) return null != Z ? Z.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    Z = u.default.get({
      url: K.Endpoints.FRIEND_INVITES,
      context: {
        location: e
      }
    }), l.default.dispatch({
      type: "FRIEND_INVITES_FETCH_REQUEST",
      requestedAt: new Date
    });
    let {
      body: n
    } = await Z;
    return Z = null, l.default.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: n
    }), n
  },
  createFriendInvite: (e, t) => (l.default.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), u.default.post({
    url: K.Endpoints.FRIEND_INVITES,
    body: null != e ? e : {},
    context: {
      location: t
    }
  }).then(e => {
    let {
      body: t
    } = e;
    return l.default.dispatch({
      type: "FRIEND_INVITE_CREATE_SUCCESS",
      invite: t
    }), t
  }, e => {
    throw l.default.dispatch({
      type: "FRIEND_INVITE_CREATE_FAILURE",
      error: e
    }), e
  })),
  revokeFriendInvites: () => (l.default.dispatch({
    type: "FRIEND_INVITE_REVOKE_REQUEST"
  }), u.default.delete({
    url: K.Endpoints.FRIEND_INVITES,
    context: {
      location
    }
  }).then(e => {
    let {
      body: t
    } = e;
    l.default.dispatch({
      type: "FRIEND_INVITE_REVOKE_SUCCESS",
      invites: t
    })
  })),
  revokeFriendInvite: e => u.default.delete({
    url: K.Endpoints.INVITE(e)
  }),
  clearInviteFromStore(e) {
    l.default.dispatch({
      type: "INSTANT_INVITE_CLEAR",
      channelId: e
    })
  },
  revokeInvite(e) {
    let {
      code: t,
      channel: n
    } = e;
    return B.default.delete({
      url: K.Endpoints.INVITE(t),
      oldFormErrors: !0,
      trackedActionData: {
        event: r.NetworkActionNames.INVITE_REVOKE,
        properties: {
          uses: e.uses,
          max_uses: e.maxUses,
          max_age: e.maxAge,
          invite_type: e.type
        }
      }
    }).then(() => {
      l.default.dispatch({
        type: "INSTANT_INVITE_REVOKE_SUCCESS",
        code: t,
        channelId: n.id
      })
    })
  },
  acceptInvite(e) {
    var t, s, i;
    let {
      inviteKey: r,
      context: a,
      callback: o,
      skipOnboarding: d
    } = e, f = (0, I.parseExtraDataFromInviteKey)(r), c = f.baseCode, g = V.default.getSessionId();
    let m = (s = a, i = f, {
        ...s,
        invite_guild_scheduled_event_id: i.guildScheduledEventId
      }),
      h = F.default.getCurrentUser();
    return null !== (t = null == h ? void 0 : h.hasFlag(K.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, D.default)(), new Promise((e, t) => t(Error()))) : (l.default.dispatch({
      type: "INVITE_ACCEPT",
      code: c
    }), u.default.post({
      url: K.Endpoints.INVITE(c),
      context: m,
      oldFormErrors: !0,
      body: {
        session_id: g
      }
    }).then(async e => {
      var t, s;
      l.default.dispatch({
        type: "INVITE_ACCEPT_SUCCESS",
        invite: e.body,
        code: c
      });
      let i = C.default.getGuildScheduledEvent(f.guildScheduledEventId),
        r = {
          ...e.body,
          guild_scheduled_event: i
        },
        a = null !== (s = null == r ? void 0 : r.guild_id) && void 0 !== s ? s : null == r ? void 0 : null === (t = r.guild) || void 0 === t ? void 0 : t.id;
      if (!d && null != a && r.new_member) {
        let {
          default: e
        } = await n.el("937692").then(n.bind(n, "937692"));
        await e({
          guildId: a
        })
      }
      return null == o || o(r), e.body
    }, e => {
      var t, n;
      throw l.default.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: c,
        error: {
          message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
          code: null === (n = e.body) || void 0 === n ? void 0 : n.code
        }
      }), new _.default(e)
    }))
  },
  acceptInviteAndTransitionToInviteChannel(e) {
    let {
      inviteKey: t,
      context: n,
      analyticsLocations: s,
      callback: i,
      skipOnboarding: r
    } = e;
    return this.acceptInvite({
      inviteKey: t,
      context: n,
      skipOnboarding: r,
      callback: e => {
        if (null != e.channel) {
          let t = J(e);
          ee(e.channel.id, t, null != s ? s : [])
        }
        null != i && i(e)
      }
    })
  },
  transitionToInvite(e, t) {
    var n, s, i;
    let {
      channel: r,
      guild: a
    } = e;
    if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(K.GuildFeatures.HUB))) {
      S.default.onOpenHubInvite(e);
      return
    }
    if (null != a && (null === (s = a.features) || void 0 === s ? void 0 : s.includes(K.GuildFeatures.COMMUNITY)) && (null === (i = a.features) || void 0 === i ? void 0 : i.includes(K.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(K.GuildFeatures.PREVIEW_ENABLED)) {
      (0, O.transitionTo)(K.Routes.GUILD_MEMBER_VERIFICATION(a.id, e.code));
      return
    }
    if (null == r) return;
    let o = J(e);
    null != t && (o.transitionTo = t);
    let d = null != a ? a.id : K.ME;
    $({
      guildId: d,
      channel: r,
      options: o
    })
  },
  transitionToInviteSync(e, t, n) {
    if (null != e.channel) {
      let s = J(e);
      this.transitionToInviteChannelSync(e.channel.id, {
        ...s,
        intent: n,
        transitionTo: t
      })
    }
  },
  openNativeAppModal(e) {
    m.default.openNativeAppModal(e, K.RPCCommands.INVITE_BROWSER)
  },
  openApp(e, t, n, s, r) {
    var u, f;
    let _;
    let c = null != e ? (0, I.parseExtraDataFromInviteKey)(e) : null,
      g = null == c ? void 0 : c.baseCode;
    if (l.default.dispatch({
        type: "INVITE_APP_OPENING",
        code: e
      }), null != i.ua && i.ua.toLowerCase().indexOf("googlebot") > -1) {
      l.default.dispatch({
        type: "INVITE_APP_NOT_OPENED",
        code: e
      });
      return
    }
    if ((null === (u = i.os) || void 0 === u ? void 0 : u.family) === "Android" || (null === (f = i.os) || void 0 === f ? void 0 : f.family) === "iOS") {
      let e = null != g ? (0, a.getInviteDynamicLinkTemplate)(g) : (0, a.getDefaultDynamicLinkTemplate)(),
        t = (0, o.generateAttemptId)();
      _ = (0, o.default)(e, {
        utmSource: 2 === r ? "friend_invite" : Q,
        fingerprint: n,
        username: s,
        attemptId: t,
        event: null == c ? void 0 : c.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(g)
      }), x.default.track(K.AnalyticEvents.DEEP_LINK_CLICKED, {
        fingerprint: (0, d.maybeExtractId)(n),
        attempt_id: t,
        source: Q,
        invite_code: g
      })
    } else "#" === (_ = null != t ? K.Routes.INVITE_PROXY(t) : "")[0] && (_ = _.slice(1)), _ = "discord://".concat(_);
    H.default.launch(_, t => {
      l.default.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: ee
}
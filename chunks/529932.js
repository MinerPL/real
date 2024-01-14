"use strict";
n.r(t), n.d(t, {
  getJoinedEmojiSourceGuildData: function() {
    return p
  },
  useEmojiAndSourceGuild: function() {
    return m
  },
  usePackCollectionData: function() {
    return A
  },
  useExpressionSourceGuildDataForGuildLeaveModal: function() {
    return N
  }
}), n("222007");
var l = n("884691"),
  r = n("65597"),
  u = n("913144"),
  i = n("385976"),
  o = n("858619"),
  a = n("305961"),
  s = n("697218"),
  d = n("719923"),
  c = n("252931"),
  E = n("166465"),
  _ = n("557562"),
  f = n("446066"),
  I = n("49111"),
  C = n("958706");
let p = (e, t, n) => {
    let l = null != n ? e.getCustomEmojiById(n) : null;
    switch (null == l ? void 0 : l.type) {
      case o.EmojiTypes.GUILD:
        return {
          emoji: l, joinedEmojiSourceGuildRecord: t.getGuild(null == l ? void 0 : l.guildId)
        };
      case o.EmojiTypes.PACK:
        return {
          emoji: l, joinedEmojiSourceGuildRecord: t.getGuild(null == l ? void 0 : l.packId)
        };
      default:
        return {
          emoji: null, joinedEmojiSourceGuildRecord: null
        }
    }
  },
  m = e => {
    let {
      emojiId: t,
      refreshPositionKey: n
    } = e, {
      joinedEmojiSourceGuildRecord: u,
      emoji: o
    } = (0, r.useStateFromStoresObject)([i.default, a.default], () => p(i.default, a.default, t)), s = null != u, d = null != u && u.hasFeature(I.GuildFeatures.DISCOVERABLE), c = (!s || d) && null != t, [E, _] = l.useState(c), C = null != u ? f.default.createFromGuildRecord(u) : null, [m, O] = l.useState(C);
    return l.useEffect(() => {
      null == n || n();
      let e = async () => {
        let e = null != t ? await f.default.getGuildFromEmojiId(t) : null;
        O(e), _(!1), null == n || n()
      };
      if (c) {
        e();
        return
      }
      null == n || n()
    }, [t, c]), {
      expressionSourceGuild: m,
      joinedEmojiSourceGuildRecord: u,
      hasJoinedEmojiSourceGuild: s,
      emoji: o,
      isFetching: E
    }
  },
  O = e => {
    let {
      expressionSourceGuild: t
    } = e, n = (0, r.default)([E.default], () => null != t ? E.default.getPackByPackId({
      packId: t.id
    }) : null);
    return null != n ? n : null
  },
  A = e => {
    let {
      expressionSourceGuild: t
    } = e, n = (0, r.default)([s.default], () => s.default.getCurrentUser()), l = d.default.isPremium(n), u = (0, c.useInventoryGuildPacksUserExperiment)({
      expressionSourceGuild: t
    }), i = (0, r.default)([E.default], () => E.default.countPacksCollected()), o = O({
      expressionSourceGuild: t
    }), a = i >= (0, _.getMaxPacksForUserType)(l);
    return {
      ...u,
      collectedPack: o,
      numPacksCollected: i,
      hasReachedMaxPacksCollected: a,
      isPremium: l
    }
  },
  N = e => {
    let t = (0, c.useInventoryGuildPacksUserExperiment)({
        expressionSourceGuild: f.default.createFromGuildRecord(e),
        autoTrackExposure: !1
      }),
      n = (0, c.useInventoryGuildSettingsExperiment)({
        guildId: e.id,
        autoTrackExposure: !1
      }),
      o = t.collectEnabled && n.allowCollection,
      a = (0, r.default)([i.default], () => {
        let t = i.default.getGuildEmoji(e.id).filter(e => 0 === e.roles.length && e.available && !e.managed);
        return 0 === t.length ? null : t[0].id
      }),
      [s, d] = l.useState(null);
    return l.useEffect(() => {
      let e = async e => {
        d(await f.default.getGuildFromEmojiId(e))
      };
      o && null != a && e(a)
    }, []), l.useEffect(() => {
      u.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: C.EmojiInteractionPoint.GuildLeaveModalShown
      })
    }, []), s
  }
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  },
  useSearchCategories: function() {
    return y
  }
}), n("222007"), n("424973");
var l = n("884691"),
  i = n("249654"),
  r = n("446674"),
  o = n("817963"),
  s = n("872173"),
  a = n("305961"),
  u = n("957255"),
  d = n("697218"),
  c = n("719923"),
  f = n("880342"),
  p = n("469607"),
  m = n("235004"),
  h = n("389480"),
  E = n("774473"),
  S = n("846325");

function g(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e.map(e => ({
      type: h.SoundboardSoundItemType.SOUND,
      sound: e
    }));
  return t ? n.sort((e, t) => i.default.compare(e.sound.soundId, t.sound.soundId)) : n
}

function C(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: l,
    potentialSoundIdsForSection: i,
    sectionType: r,
    sortById: o
  } = e, s = {}, a = [...n, S.DEFAULT_SOUND_GUILD_ID];
  for (let e of a) {
    var u;
    let t = null !== (u = l.get(e)) && void 0 !== u ? u : [];
    for (let e of t) {
      let t = i.find(t => t === e.soundId);
      null != t && (s[e.soundId] = e)
    }
  }
  let d = [];
  for (let e of i) {
    let t = s[e];
    null != t && d.push(t)
  }
  let c = g(d, o);
  c.length > 0 && t.push({
    key: r,
    categoryInfo: {
      type: r
    },
    items: c
  })
}

function T(e, t) {
  var n;
  let l = null !== (n = t.get(S.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : S.EMPTY_SOUND_LIST;
  e.push({
    key: h.SoundboardSoundGridSectionType.DEFAULTS,
    categoryInfo: {
      type: h.SoundboardSoundGridSectionType.DEFAULTS
    },
    items: g(l)
  })
}

function v(e) {
  let {
    filterOutEmptyCurrentGuild: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [S, v, y] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.getSounds(), m.default.getFavorites(), m.default.isFetching()]), x = (0, E.useSortedGuildIdsForSoundboard)(e, !1), I = (0, r.useStateFromStoresArray)([a.default], () => {
    let e = [];
    return x.forEach(t => {
      let n = a.default.getGuild(t);
      null != n && e.push(n)
    }), e
  }), N = c.default.canUseSoundboardEverywhere(i), _ = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id)), A = (0, r.useStateFromStores)([u.default], () => {
    let {
      canCreateExpressions: e
    } = (0, o.getManageResourcePermissions)(_);
    return e
  }, [_]), {
    canSeeRecentlyHeard: R,
    canSeeFrequentlyPlayed: O
  } = (0, f.useRecentlyHeardExperiment)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: !0
  }), M = function() {
    l.useEffect(() => {
      s.FrecencyUserSettingsActionCreators.loadIfNecessary()
    }, []);
    let e = (0, r.useStateFromStores)([p.default], () => p.default.frecentlyPlayedSounds);
    return e
  }(), k = (0, r.useStateFromStoresArray)([p.default], () => p.default.recentlyHeardSoundIds);
  return l.useMemo(() => {
    let e = [];
    return n ? (T(e, S), {
      categories: e,
      isFetching: y
    }) : (C({
      sections: e,
      guildIds: x,
      allSounds: S,
      potentialSoundIdsForSection: Array.from(v),
      sectionType: h.SoundboardSoundGridSectionType.FAVORITES,
      sortById: !0
    }), R && C({
      sections: e,
      guildIds: x,
      allSounds: S,
      potentialSoundIdsForSection: k,
      sectionType: h.SoundboardSoundGridSectionType.RECENTLY_HEARD,
      sortById: !1
    }), O && C({
      sections: e,
      guildIds: x,
      allSounds: S,
      potentialSoundIdsForSection: M.map(e => e.soundId),
      sectionType: h.SoundboardSoundGridSectionType.FREQUENTLY_USED,
      sortById: !1
    }), ! function(e, t, n, l, i) {
      var r;
      if (null == t) return;
      let o = null !== (r = l.get(t.id)) && void 0 !== r ? r : [],
        s = g(o),
        a = o.length < t.getMaxSoundboardSlots() && n,
        u = 0 === s.length;
      (a || u) && !i && s.push({
        type: h.SoundboardSoundItemType.ADD_SOUND,
        guild: t
      });
      !(i && u) && e.push({
        categoryInfo: {
          type: h.SoundboardSoundGridSectionType.GUILD,
          guild: t
        },
        key: t.id,
        items: s
      })
    }(e, _, A, S, t), !N && T(e, S), ! function(e, t, n, l) {
      for (let r of t) {
        var i;
        if (r.id === n) continue;
        let t = null !== (i = l.get(r.id)) && void 0 !== i ? i : [],
          o = g(t);
        o.length > 0 && e.push({
          categoryInfo: {
            type: h.SoundboardSoundGridSectionType.GUILD,
            guild: r
          },
          key: r.id,
          items: o
        })
      }
    }(e, I, null == _ ? void 0 : _.id, S), N && T(e, S), {
      categories: e,
      isFetching: y
    })
  }, [x, S, v, k, M, O, R, _, A, t, N, I, n, y])
}

function y(e, t, n) {
  return l.useMemo(() => n.length > 0 ? [{
    key: h.SoundboardSoundGridSectionType.SEARCH,
    categoryInfo: {
      type: h.SoundboardSoundGridSectionType.SEARCH
    },
    items: g(t, !1)
  }] : e, [e, n.length, t])
}
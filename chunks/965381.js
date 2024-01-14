"use strict";
E.r(e), E.d(e, {
  useChannelEmojiAndColor: function() {
    return d
  }
}), E("222007"), E("884691");
var C = E("446674"),
  n = E("36763");
E("18054");
var l = E("362391"),
  t = E("385976");
E("872173");
var F = E("374363");
E("42203");
var i = E("284679"),
  u = E("21121"),
  a = E("934306"),
  o = E("807362"),
  r = E("132568");

function D(B) {
  return "#" + B.toString(16).toUpperCase()
}

function d(B) {
  var e, E, d, s, A, c;
  let _, N, f = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    m = function() {
      let B = (0, l.default)("enable_channel_emojis"),
        e = (0, a.useOnNewPanels)(),
        E = (0, u.useInMainTabsExperiment)();
      return B || E && !e
    }(),
    T = (0, l.default)("user_channel_emoji_overrides"),
    {
      emoji: h,
      color: v
    } = function(B) {
      var e, E, n, l, t, i, u;
      let a = (0, C.useStateFromStores)([F.default], () => {
          var e, E, C;
          let n = null === (e = F.default.settings.guilds) || void 0 === e ? void 0 : e.guilds;
          return null != B ? null == n ? void 0 : null === (C = n[B.guild_id]) || void 0 === C ? void 0 : null === (E = C.channels) || void 0 === E ? void 0 : E[B.id] : null
        }),
        o = null == a ? void 0 : a.iconEmoji;
      return {
        emoji: (null == o ? void 0 : null === (e = o.id) || void 0 === e ? void 0 : e.value) != null || (null == o ? void 0 : null === (E = o.name) || void 0 === E ? void 0 : E.value) != null ? {
          id: null !== (i = null == o ? void 0 : null === (n = o.id) || void 0 === n ? void 0 : n.value) && void 0 !== i ? i : null,
          name: null !== (u = null == o ? void 0 : null === (l = o.name) || void 0 === l ? void 0 : l.value) && void 0 !== u ? u : null
        } : null,
        color: (null == o ? void 0 : null === (t = o.color) || void 0 === t ? void 0 : t.value) != null ? D(Number(o.color.value)) : null
      }
    }(B),
    {
      emoji: S,
      color: I
    } = function(B) {
      var e, E, C;
      let n = null !== (e = null == B ? void 0 : B.iconEmoji) && void 0 !== e ? e : null;
      return {
        emoji: null != n ? {
          id: null !== (E = n.id) && void 0 !== E ? E : null,
          name: null !== (C = n.name) && void 0 !== C ? C : null
        } : null,
        color: (null == B ? void 0 : B.themeColor) != null ? D(B.themeColor) : null
      }
    }(B),
    p = function() {
      let {
        theme: B
      } = (0, n.useThemeContext)();
      return "dark" === B ? r.CHANNEL_EMOJI_BACKGROUND_OPACITY_DARK : r.CHANNEL_EMOJI_BACKGROUND_OPACITY_LIGHT
    }();
  if ((null == h ? void 0 : h.name) != null && T) {
    let B = null !== (e = null != v ? v : (null == h ? void 0 : h.id) == null ? o.default[h.name] : null) && void 0 !== e ? e : r.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
    _ = {
      id: null !== (E = null == h ? void 0 : h.id) && void 0 !== E ? E : null,
      name: null !== (d = null == h ? void 0 : h.name) && void 0 !== d ? d : r.DEFAULT_CHANNEL_EMOJI,
      url: void 0
    }, N = f ? (0, i.hexWithOpacity)(B, p) : B
  } else {
    let B = null !== (s = null != I ? I : (null == S ? void 0 : S.name) != null && (null == S ? void 0 : S.id) == null ? o.default[S.name] : null) && void 0 !== s ? s : r.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
    _ = {
      id: null !== (A = null == S ? void 0 : S.id) && void 0 !== A ? A : null,
      name: null !== (c = null == S ? void 0 : S.name) && void 0 !== c ? c : r.DEFAULT_CHANNEL_EMOJI,
      url: void 0
    }, N = f ? (0, i.hexWithOpacity)(B, p) : B
  }
  let L = (0, C.useStateFromStores)([t.default], () => null != _.id ? t.default.getUsableCustomEmojiById(_.id) : null);
  return m ? {
    emoji: null != _.id && null != L ? {
      ..._,
      url: L.url
    } : _,
    color: N
  } : {
    color: f ? (0, i.hexWithOpacity)(r.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR, p) : r.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR,
    emoji: {
      name: r.DEFAULT_CHANNEL_EMOJI,
      id: null,
      url: void 0
    }
  }
}
"use strict";
s.r(t), s.d(t, {
  useChannelRows: function() {
    return d
  },
  default: function() {
    return u
  }
}), s("222007"), s("424973"), s("808653");
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("656038"),
  i = s("923959"),
  r = s("644583"),
  o = s("49111");

function d(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    d = (0, n.useStateFromStoresArray)([i.default], () => {
      let n = i.default.getChannels(e)[o.ChannelTypes.GUILD_CATEGORY],
        d = [...i.default.getChannels(e)[i.GUILD_SELECTABLE_CHANNELS_KEY], ...i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY]],
        u = [],
        c = {};
      n.forEach(e => {
        let {
          channel: t,
          comparator: s
        } = e;
        "null" !== t.id && (c[t.id] = [], u.push({
          channel: t,
          comparator: s
        }))
      }), d.forEach(e => {
        let {
          channel: n,
          comparator: i
        } = e;
        if (!(n.isThread() || t.has(n.id) || n.isGuildStageVoice() && !a)) !(!s && (0, l.default)(n)) && (null == n.parent_id ? u.push({
          channel: n,
          comparator: i
        }) : (null == c[n.parent_id] && (c[n.parent_id] = []), c[n.parent_id].push({
          channel: n,
          comparator: i
        })))
      });
      let E = u.sort((e, t) => {
        let {
          comparator: s,
          channel: a
        } = e, {
          comparator: n,
          channel: l
        } = t;
        return a.isCategory() && !l.isCategory() ? 1 : !a.isCategory() && l.isCategory() ? -1 : n - s
      }).reduce((e, s) => {
        let {
          channel: a
        } = s;
        if (a.isGuildStageVoice() || a.isThread() || t.has(a.id)) return e;
        e.push((0, r.channelToPendingAddition)(a).row);
        let n = c[a.id];
        return null != n && n.length > 0 && n.forEach(t => {
          let {
            channel: s
          } = t;
          e.push((0, r.channelToPendingAddition)(s).row)
        }), e
      }, []);
      return E
    }, [e, s, a, t]);
  return d
}

function u(e) {
  let {
    guildId: t,
    selectedChannelIds: s,
    onChange: n,
    placeholder: l,
    includeRoleRestrictedPrivateChannels: i = !1,
    includeStageVoiceChannels: o = !1,
    helperText: u,
    className: c
  } = e, E = d(t, s, i, o);
  return (0, a.jsx)(r.default, {
    channelRows: E,
    guildId: t,
    selectedChannelIds: s,
    onChange: (e, t) => n(e),
    placeholder: l,
    helperText: u,
    className: c
  })
}
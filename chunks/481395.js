"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("781738"), n("843762");
var a = n("913144"),
  s = n("533280"),
  i = n("679653"),
  l = n("256572"),
  r = n("915639"),
  o = n("845579"),
  u = n("271938"),
  d = n("982108"),
  c = n("42203"),
  f = n("26989"),
  E = n("305961"),
  _ = n("42887"),
  h = n("385649"),
  C = n("27618"),
  I = n("18494"),
  T = n("282109"),
  S = n("697218"),
  m = n("158998"),
  p = n("76629"),
  A = n("981957"),
  g = n("357046"),
  N = n("49111"),
  R = n("782340");
let O = [],
  L = null,
  v = null,
  M = null,
  P = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, a) {
  let s = E.default.getGuild(n),
    l = e.replace(P, R.default.Messages.SPOILER).replace(/<@!?(\d+)>/g, (e, t) => {
      var a;
      let s = S.default.getUser(t);
      if (null == s) return e;
      return null !== (a = f.default.getNick(n, s.id)) && void 0 !== a ? a : m.default.getName(s)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != s ? s.roles[t] : null;
      return null != n && null != n.name ? n.name : R.default.Messages.MESSAGE_TTS_DELETED_ROLE
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = c.default.getChannel(t);
      return null == n ? e : (0, i.computeChannelName)(n, S.default, C.default)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(R.default.Messages.EMOJI, " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t));
  return null == a ? R.default.Messages.MESSAGE_TTS.format({
    username: t,
    body: l
  }) : R.default.Messages.MESSAGE_TTS_REPLY.format({
    username: t,
    body: l,
    replyUsername: a
  })
}

function y() {
  if (!s.supported) return !1;
  let e = r.default.locale;
  if (null == M) {
    var t;
    M = null === (t = window.speechSynthesis) || void 0 === t ? void 0 : t.getVoices()
  }
  let n = M.filter(t => t.lang === e || t.lang.slice(0, e.length) === e || !1);
  v = n.length > 0 ? n[0] : null
}
async function x(e, t, n, a, i) {
  let l = s.createUtterance(e, n);
  null !== l && (null == v && y(), t ? await (0, p.stopSpeaking)() : null == L || L.removeEventListener("end", p.stopSpeaking), l.addEventListener("end", p.stopSpeaking), null != a && l.addEventListener("start", a), null != i && l.addEventListener("end", i), L = l, s.speakUtterance(l, v))
}

function b(e, t, n, a, s) {
  x(e, t, s, () => {
    (0, p.speakingMessage)(n, a)
  })
}

function U(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: a,
    onStart: s,
    onEnd: i
  } = e;
  x(t, n, a, s, i)
}

function G() {
  return null !== L && L.removeEventListener("end", p.stopSpeaking), s.cancelAll(), L = null, !0
}

function j(e) {
  var t, n, a;
  let {
    message: s,
    channel: i
  } = e, r = s.type === N.MessageTypes.REPLY ? l.default.getMessageByReference(s.messageReference) : null, o = (null == r ? void 0 : r.state) === l.ReferencedMessageState.LOADED ? null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.author : null, u = null != o ? null !== (n = f.default.getNick(i.guild_id, null == o ? void 0 : o.id)) && void 0 !== n ? n : m.default.getName(o) : null, d = i.getGuildId(), c = null !== (a = f.default.getNick(d, s.author.id)) && void 0 !== a ? a : m.default.getName(s.author), E = D(s.content, c, d, u);
  return b(E, !0, i.id, s.id), !0
}

function w(e) {
  var t, n, a, s, i, l, r;
  let {
    channelId: E,
    message: S,
    optimistic: p
  } = e;
  if (p || _.default.isSelfDeaf()) return !1;
  let A = c.default.getChannel(E);
  if (null == A) return !1;
  let R = I.default.getChannelId(),
    L = d.default.getCurrentSidebarChannelId(R),
    v = E === R || E === L,
    M = o.EnableTTSCommand.getSetting() && S.tts && v,
    P = h.default.getTTSType(),
    y = (null === (t = S.author) || void 0 === t ? void 0 : t.id) !== u.default.getId() && (P === N.TTSNotificationTypes.ALL_CHANNELS || P === N.TTSNotificationTypes.SELECTED_CHANNEL && v);
  if ((M || y) && ((null === (n = S.author) || void 0 === n ? void 0 : n.id) == null || !C.default.isBlocked(S.author.id))) {
    if (O.indexOf(S.id) >= 0) return !1;
    O.unshift(S.id) > 10 && O.pop();
    let e = A.getGuildId();
    if (null != e && T.default.getMutedChannels(e).has(E)) return !1;
    let t = null !== (l = null !== (i = f.default.getNick(e, null === (a = S.author) || void 0 === a ? void 0 : a.id)) && void 0 !== i ? i : m.default.getName(S.author)) && void 0 !== l ? l : "",
      n = S.type === N.MessageTypes.REPLY ? null === (s = S.referenced_message) || void 0 === s ? void 0 : s.author : null,
      o = null != n ? null !== (r = f.default.getNick(e, null == n ? void 0 : n.id)) && void 0 !== r ? r : m.default.getName(n) : null,
      u = D(S.content, t, e, o);
    b(u, !1, A.id, S.id, g.MAX_TTS_LENGTH)
  }
  return !1
}

function k(e) {
  let {
    id: t,
    channelId: n
  } = e, a = A.default.currentMessage;
  return null != a && t === a.messageId && n === a.channelId && ((0, p.stopSpeaking)(), !0)
}

function F() {
  _.default.isSelfDeaf() && s.cancelAll()
}
var H = {
  init() {
    a.default.subscribe("SPEAK_TEXT", U), a.default.subscribe("SPEAK_MESSAGE", j), a.default.subscribe("STOP_SPEAKING", G), a.default.subscribe("MESSAGE_CREATE", w), a.default.subscribe("MESSAGE_DELETE", k), a.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", F), a.default.subscribe("USER_SETTINGS_PROTO_UPDATE", y), a.default.subscribe("I18N_LOAD_SUCCESS", y)
  }
}
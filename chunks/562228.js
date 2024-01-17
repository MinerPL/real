"use strict";
n.r(t), n.d(t, {
  generateEmptyPollAnswer: function() {
    return c
  },
  filterOutUUID: function() {
    return E
  },
  hasNonVoteReactions: function() {
    return f
  },
  useCanPostPollsInChannel: function() {
    return _
  },
  isAnswerFilled: function() {
    return g
  },
  isIncompleteAnswer: function() {
    return h
  },
  createPollServerDataFromCreateRequest: function() {
    return m
  }
}), n("781738"), n("222007");
var a = n("748820"),
  l = n("446674"),
  s = n("418009"),
  i = n("957255"),
  r = n("697218"),
  d = n("718517"),
  u = n("83995"),
  o = n("49111");

function c() {
  return {
    text: void 0,
    image: void 0,
    localCreationAnswerId: function() {
      return (0, a.v4)()
    }()
  }
}

function E(e) {
  return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
}

function f(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) return !0;
  return !1
}

function _(e) {
  let {
    enabled: t
  } = u.PollsExperiment.useExperiment({
    guildId: e.guild_id,
    location: "useCanPostPollsInChannel"
  }), n = (0, l.useStateFromStoresArray)([r.default], () => {
    var t, n;
    return null !== (n = null === (t = e.recipients) || void 0 === t ? void 0 : t.map(r.default.getUser)) && void 0 !== n ? n : []
  }, [e.recipients]);
  return !!o.ChannelTypesSets.POLLS.has(e.type) && (e.isPrivate() ? n.every(e => (null == e ? void 0 : e.isStaff()) === !0) : t && i.default.can(o.Permissions.SEND_MESSAGES, e))
}

function g(e, t) {
  return t === s.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? null != e.image : null != e.text && e.text.length > 0
}

function h(e, t) {
  return t === s.PollLayoutTypes.DEFAULT && null != e.image && (null == e.text || 0 === e.text.length)
}

function m(e) {
  var t, n;
  if (null == e) return;
  let a = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
    var n, a, l;
    let s = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
      i = {
        ...e.poll_media,
        emoji: null != s ? {
          id: null !== (a = s.id) && void 0 !== a ? a : null,
          name: null !== (l = s.name) && void 0 !== l ? l : ""
        } : void 0
      };
    return {
      ...e,
      answer_id: t + 1,
      poll_media: i
    }
  });
  let l = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * d.default.Millis.HOUR).toISOString()) : "0";
  return {
    ...e,
    expiry: l,
    answers: a
  }
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("424973"), n("222007");
var s = n("637612"),
  a = n("336696"),
  l = n("888400"),
  i = n("299039"),
  r = n("459776"),
  o = n("654017"),
  u = n("49111");

function d(e) {
  let t, n, d, {
      channel: c,
      messages: f,
      oldestUnreadMessageId: h,
      treatSpam: C,
      summaries: p,
      selectedSummary: m
    } = e,
    E = [],
    g = !1,
    S = null != h ? i.default.extractTimestamp(h) : null,
    _ = null;
  return f.forEach(e => {
    var a, A, T, M, I, N, L, v;
    if (null != p && p.length > 0) {
      ;
      let t = i.default.extractTimestamp(e.id);
      for (let e = 0; a = e < (null == p ? void 0 : p.length), a; e++) {
        if (null == p[e]) continue;
        let n = i.default.extractTimestamp(p[e].startId),
          s = i.default.extractTimestamp(p[e].endId);
        if (t >= n && t <= s) {
          if (_ === p[e].id) break;
          E.push({
            type: u.ChannelStreamTypes.DIVIDER,
            content: p[e].topic,
            contentKey: p[e].id
          }), _ = p[e].id;
          break
        }
      }
    }
    let x = (0, l.dateFormat)(e.timestamp, "LL");
    x !== t && null == _ && (E.push({
      type: u.ChannelStreamTypes.DIVIDER,
      content: x,
      contentKey: x
    }), t = x);
    let R = E[E.length - 1],
      y = null,
      O = (0, o.isSpam)(e);
    g = g || O;
    let D = function(e, t, n) {
      if (s.MessageTypesSets.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED;
      else if ((0, o.isSpamSupported)(e) && n) return u.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER;
      return null
    }(c, e, O && C);
    if (null !== D) {
      ;
      let t, n;
      [y, R] = (A = E, T = e, M = D, n = I = R, null == I || I.type !== M ? (t = {
        type: M,
        content: [],
        key: T.id
      }, A.push(t)) : n = (t = I).content[t.content.length - 1], [t, n])
    }
    if (h === e.id && null != S) {
      if (null != R && R.type === u.ChannelStreamTypes.DIVIDER) R.unreadId = e.id, S = null;
      else if (null !== y) {
        ;
        N = y, L = c, (v = e).isFirstMessageInForumPost(L) || N.content.push({
          type: u.ChannelStreamTypes.DIVIDER,
          unreadId: v.id
        }), N.hasUnread = !0, S = null
      } else !e.isFirstMessageInForumPost(c) && E.push({
        type: u.ChannelStreamTypes.DIVIDER,
        unreadId: e.id
      }), S = null
    } else null != S && i.default.extractTimestamp(e.id) > S && (!e.isFirstMessageInForumPost(c) && E.push({
      type: u.ChannelStreamTypes.DIVIDER,
      unreadId: e.id
    }), S = null);
    let j = (null == R ? void 0 : R.type) === u.ChannelStreamTypes.MESSAGE ? d : R;
    (0, r.isNewGroupItem)(c, j, e) && (n = e.id);
    let P = {
      type: e.type === u.MessageTypes.THREAD_STARTER_MESSAGE ? u.ChannelStreamTypes.THREAD_STARTER_MESSAGE : u.ChannelStreamTypes.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = P);
    let {
      jumpSequenceId: b,
      jumpFlash: U,
      jumpTargetId: F
    } = f;
    U && e.id === F && null != b && (P.flashKey = b), f.jumpTargetId === e.id && (P.jumpTarget = !0), null != m && e.id === m.startId && m.count > 1 && E.push({
      type: u.ChannelStreamTypes.DIVIDER,
      content: m.topic,
      contentKey: m.startId,
      isSummaryDivider: !0
    }), null !== y ? (y.content.push(P), P.jumpTarget && (y.hasJumpTarget = !0)) : E.push(P), e.isFirstMessageInForumPost(c) && E.push({
      type: u.ChannelStreamTypes.FORUM_POST_ACTION_BAR
    }), null != m && e.id === m.endId && m.count > 1 && E.push({
      type: u.ChannelStreamTypes.DIVIDER,
      contentKey: m.endId,
      isSummaryDivider: !0
    })
  }), g && (0, o.isSpamSupported)(c) && a.default.trackExposure({
    location: "416cc9_1"
  }), E
}
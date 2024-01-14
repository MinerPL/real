"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("424973");
var a = n("446674"),
  s = n("913144"),
  i = n("42793"),
  r = n("393414"),
  o = n("233069"),
  u = n("813006"),
  d = n("42203"),
  c = n("305961"),
  f = n("337543"),
  h = n("957255"),
  C = n("697218"),
  p = n("50885"),
  m = n("49111"),
  E = n("724210");
let g = m.AppContext.APP,
  I = !1,
  S = !1,
  _ = [];

function N() {
  I = !0
}
class T extends a.default.Store {
  initialize() {
    this.waitFor(c.default, f.default, C.default)
  }
  isOpen() {
    let e = __OVERLAY__ ? m.AppContext.OVERLAY : m.AppContext.APP;
    return !!(I && _.length > 0 && g === e)
  }
  getProps() {
    return {
      invite: _.length > 0 ? _[0][0] : null,
      error: null != l && "" !== l ? l : null,
      submitting: S
    }
  }
}
T.displayName = "InviteModalStore";
var A = new T(s.default, {
  OVERLAY_INITIALIZE: N,
  CONNECTION_OPEN: N,
  CONNECTION_CLOSED: function() {
    I = !1
  },
  INVITE_MODAL_OPEN: function(e) {
    let t = e.invite;
    if (null == t) return !1;
    let n = t.state === m.InviteStates.EXPIRED || t.state === m.InviteStates.BANNED || t.state === m.InviteStates.ERROR;
    if (!n) {
      let {
        channel: e,
        guild: n
      } = t;
      if (null == e) return !1;
      if ((0, o.isMultiUserDM)(e.type)) {
        if (null != d.default.getChannel(e.id)) return (0, r.transitionToGuild)(m.ME, e.id), p.default.focus(), !1
      } else {
        if (null == n) return !1;
        if (null != c.default.getGuild(n.id) && !(0, i.isStreamInvite)(t)) {
          let e = function(e) {
            if ((0, i.isRoleSubscriptionInvite)(e)) return E.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
            let {
              channel: t
            } = e;
            if (null != t) {
              let e = d.default.getChannel(t.id);
              if (h.default.can(m.Permissions.VIEW_CHANNEL, e)) return t.id
            }
            return null
          }(t);
          return (0, r.transitionToGuild)(n.id, e), p.default.focus(), !1
        }
      }
    }
    if (_.some(e => {
        let [n] = e;
        return n.code === t.code
      })) return !1;
    g = e.context, S = !1;
    let l = function(e) {
      let {
        approximate_member_count: t,
        approximate_presence_count: n,
        code: l,
        state: a,
        target_type: s,
        target_user: i,
        target_application: r,
        stage_instance: o,
        type: d,
        channel: c,
        guild: f
      } = e, h = {
        code: l,
        state: a,
        approximate_member_count: t,
        approximate_presence_count: n,
        target_type: s,
        target_user: i,
        target_application: r,
        stage_instance: o,
        type: d
      };
      return null != c && (h.channel = {
        ...c
      }), null != f && (h.guild = new u.default(f)), null != e.inviter && (h.inviter = {
        ...e.inviter
      }), h
    }(t);
    _.push([l, e.resolve])
  },
  INVITE_MODAL_CLOSE: function() {
    if (l = null, S = !1, _.length > 0) {
      let [, e] = _.shift();
      null != e && e()
    }
  },
  INVITE_ACCEPT: function() {
    S = !0
  },
  INVITE_MODAL_ERROR: function(e) {
    let {
      message: t
    } = e;
    l = t, S = !1
  }
})
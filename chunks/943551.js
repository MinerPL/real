"use strict";
n.r(t), n.d(t, {
  shouldTrackMessage: function() {
    return S
  },
  default: function() {
    return T
  }
}), n("222007");
var a = n("446674"),
  l = n("407846"),
  s = n("862337"),
  i = n("913144"),
  r = n("271938"),
  d = n("18494"),
  u = n("659500"),
  o = n("880731"),
  c = n("119035"),
  E = n("39141"),
  f = n("49111");
let _ = new Set,
  g = new l.default(function(e) {
    let {
      userId: t,
      channelId: n
    } = e;
    return [t, n]
  }, function(e) {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(n, "-").concat(t)
  }),
  h = new l.default(function(e) {
    let {
      messageId: t,
      channelId: n,
      combo: {
        userId: a
      }
    } = e;
    return [t, n, a]
  }, function(e) {
    let {
      messageId: t,
      channelId: n,
      combo: {
        userId: a
      }
    } = e;
    return "".concat(n, "-").concat(a, "-").concat(t)
  }),
  m = e => {
    let {
      userId: t,
      channelId: n
    } = e;
    return "".concat(t, "-").concat(n)
  };

function S(e, t, n, a) {
  if (e !== t) return !1;
  let l = null == n;
  return !(l || a.has(n)) && (a.add(n), !0)
}
class p extends a.default.Store {
  initialize() {
    this.waitFor(r.default, d.default)
  }
  getComboScore(e, t) {
    let n = g.get(m({
      userId: e,
      channelId: t
    }));
    return null == n ? 0 : (0, c.getComboScore)(n)
  }
  getUserCombo(e, t) {
    return g.get(m({
      userId: e,
      channelId: t
    }))
  }
  isComboing(e, t) {
    var n;
    let a = this.getUserCombo(e, t);
    return null != a && a.value >= o.default.combosRequiredCount && null != (n = a) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
  }
  getMessageCombo(e) {
    var t;
    let n = h.get(e);
    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
  }
  getMostRecentMessageCombo(e) {
    let t = h.values(e);
    return t[t.length - 1]
  }
  getUserComboShakeIntensity(e, t, n, a) {
    let l = this.getUserCombo(e, t);
    return null != l ? (0, c.getComboShakeIntensity)(l, a) * n : 0
  }
}
p.displayName = "PoggermodeStore";
let M = new p(i.default, {
  POGGERMODE_UPDATE_COMBO: function(e) {
    let {
      type: t,
      ...n
    } = e;
    if (!o.default.isEnabled()) return !1;
    ! function e(t) {
      var n, a, l, i, r, d;
      let u = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = g.get(m(t)),
        c = {
          ...o,
          ...t,
          value: null !== (a = null !== (n = t.value) && void 0 !== n ? n : null == o ? void 0 : o.value) && void 0 !== a ? a : 0,
          multiplier: Math.min(null !== (i = null !== (l = t.multiplier) && void 0 !== l ? l : null == o ? void 0 : o.multiplier) && void 0 !== i ? i : 1, 7),
          decayInterval: null !== (r = null == o ? void 0 : o.decayInterval) && void 0 !== r ? r : new s.Interval
        };
      g.set(m(t), c), u && (null === (d = c.decayInterval) || void 0 === d || d.start(1e3, () => {
        let t = g.get(m(c));
        if (null != t) {
          let a = c.multiplier !== t.multiplier && c.value !== t.value;
          if (t.value <= 0 || a) {
            var n;
            null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
              ...t,
              value: 0,
              multiplier: 1
            }), M.emitChange())
          } else e({
            ...t,
            value: t.value - 1
          }), M.emitChange()
        }
      }))
    }(n)
  },
  POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
    var t;
    let {
      comboMessage: n
    } = e;
    if (!o.default.isEnabled()) return !1;
    t = n, h.set(t.messageId, t)
  },
  MESSAGE_CREATE: function(e) {
    var t, n;
    let {
      channelId: a,
      message: {
        mentions: l,
        author: s,
        nonce: i
      }
    } = e;
    if (!o.default.isEnabled()) return !1;
    let d = r.default.getId();
    if (!S(null == s ? void 0 : s.id, d, i, _)) return !1;
    let h = g.get(m({
      userId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "???",
      channelId: a
    }));
    if (o.default.screenshakeEnabled && o.default.screenshakeEnabledLocations[E.ShakeLocation.MENTION] && null != l && null != l.find(e => e.id === d)) {
      let e = null != h ? null !== (n = (0, c.getComboShakeIntensity)(h, E.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
      return u.ComponentDispatch.dispatch(f.ComponentActions.SHAKE_APP, {
        duration: 1e3,
        intensity: e
      }), !0
    }
    return !1
  }
});
var T = M
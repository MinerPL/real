"use strict";
n.r(t), n.d(t, {
  generateInviteKeyFromUrlParams: function() {
    return u
  },
  generateInviteKeyFromExtraData: function() {
    return a
  },
  parseExtraDataFromInviteKey: function() {
    return o
  },
  parseInviteCodeFromInviteKey: function() {
    return d
  }
}), n("222007");
var r = n("522632"),
  i = n("833858");
let l = "event";

function u(e, t) {
  if (null == t) return e;
  let n = function(e) {
    let t = "?" === e.charAt(0) ? e.substring(1) : e;
    try {
      let e = r.parse(t);
      return (0, i.getFirstQueryStringValue)(e[l])
    } catch (e) {
      return
    }
  }(t);
  return a({
    baseCode: e,
    guildScheduledEventId: n
  })
}

function a(e) {
  let {
    baseCode: t,
    guildScheduledEventId: n
  } = e;
  return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
}

function o(e) {
  let [t, n] = e.split("?");
  if (null == n) return {
    baseCode: t
  };
  let u = r.parse(n),
    a = (0, i.getFirstQueryStringValue)(u[l]);
  return {
    baseCode: t,
    guildScheduledEventId: a
  }
}

function d(e) {
  let [t] = e.split("?");
  return t
}
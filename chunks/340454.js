"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
let s = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
  i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
  r = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  a = /^(.*)#[0-9]{1,5}$/,
  o = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
  d = ["discordtag", "everyone", "here", "discord nitro", "discord"];
var u = {
  isEmail: function(e) {
    return s.test(e)
  },
  isInvite: function(e) {
    return i.test(e)
  },
  isPhoneNumber: function(e) {
    return r.test(e)
  },
  isUserTagLike: function(e) {
    let t = a.exec(e);
    if (null != t && t.length > 1) {
      let e = t[1],
        n = o.some(t => e.includes(t)),
        s = d.includes(e);
      return !n && !s
    }
    return !1
  }
}
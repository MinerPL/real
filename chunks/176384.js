"use strict";
t.r(s), t.d(s, {
  default: function() {
    return u
  }
}), t("222007");
var n = t("37983"),
  i = t("884691"),
  r = t("730290"),
  a = t("382825"),
  l = t("619340"),
  o = t("456320"),
  c = t("49111");

function d(e) {
  let {
    platformType: s
  } = e, [t, a] = i.useState("verifying");
  return i.useEffect(() => {
    let e = r.parse(window.location.search),
      {
        code: t,
        state: n
      } = e;
    if (null == t || null == n) {
      a("error");
      return
    }
    l.default.linkDispatchAuthCallback(s, {
      code: t,
      state: n
    }).then(e => {
      let {
        status: s
      } = e;
      a(204 === s ? "verified" : "error")
    }, () => {
      a("error")
    })
  }, [s]), (0, n.jsx)(o.AccountConnectionResult, {
    platformType: s,
    verifying: "verifying" === t,
    verified: "verified" === t
  })
}
var u = function(e) {
  let {
    match: s
  } = e, t = s.params.type, {
    two_way_link_type: i
  } = r.parse(window.location.search);
  return [c.PlatformTypes.XBOX, c.PlatformTypes.PLAYSTATION_STAGING, c.PlatformTypes.PLAYSTATION, c.PlatformTypes.CRUNCHYROLL].includes(t) && i === a.TwoWayLinkType.DESKTOP ? (0, n.jsx)(d, {
    platformType: t
  }) : null
}
"use strict";
n.r(e), n.d(e, {
  useUrlParts: function() {
    return s
  },
  useModalState: function() {
    return o
  }
}), n("781738"), n("222007");
var r = n("884691"),
  a = n("48703");

function s(t) {
  let {
    protocol: e,
    hostname: n
  } = r.useMemo(() => ({
    protocol: (0, a.getProtocol)(t),
    hostname: (0, a.getHostname)(t)
  }), [t]), s = "".concat(e, "//").concat(n), o = t.replace(s, "");
  return {
    protocol: e,
    hostname: n,
    theRestOfTheUrl: o
  }
}

function o(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: a,
    onClose: o
  } = t, [l, i] = r.useState(!1), {
    protocol: u,
    hostname: c,
    theRestOfTheUrl: d
  } = s(e), f = r.useCallback(() => {
    l && n(e), null == o || o(), a()
  }, [e, l, n, a, o]);
  return {
    protocol: u,
    hostname: c,
    theRestOfTheUrl: d,
    shouldTrustUrl: l,
    setShouldTrustUrl: i,
    handleConfirm: f
  }
}
"use strict";
A.r(t), A.d(t, {
  default: function() {
    return o
  }
}), A("222007");
var a = A("884691"),
  l = A("446674"),
  n = A("448993"),
  r = A("651057"),
  s = A("299285");

function o(e, t) {
  let A = (0, l.useStateFromStores)([s.default], () => s.default.getGuildApplication(e, t)),
    [o, i] = a.useState(null == A),
    [u, d] = a.useState(),
    [c, f] = a.useState(!1),
    C = a.useCallback(async () => {
      if (null == A && null != e) {
        f(!0), i(!0);
        try {
          await r.default.getApplicationsForGuild(e, {
            type: t,
            includeTeam: !0
          })
        } catch (e) {
          d(new n.APIError(e))
        } finally {
          i(!1)
        }
      }
    }, [A, t, e]);
  return a.useEffect(() => {
    !c && C()
  }, [c, C]), {
    application: A,
    error: u,
    loading: o
  }
}
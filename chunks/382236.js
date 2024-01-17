"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
var s, a, l = n("37983"),
  r = n("884691"),
  i = n("730290"),
  o = n("391679"),
  u = n("446674"),
  d = n("872717"),
  c = n("95410"),
  f = n("77078"),
  E = n("913144"),
  h = n("437822"),
  _ = n("229353"),
  m = n("271938"),
  g = n("599110"),
  p = n("718517"),
  A = n("672630"),
  T = n("49111"),
  R = n("332204");
let I = "mweb_handoff_nonce",
  N = "mweb_handoff_nonce_expiration",
  S = 1 * p.default.Millis.MINUTE;
(a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
let C = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
  L = new Set(["deep_link_failed"]),
  M = () => {
    c.default.remove(I), c.default.remove(N)
  };
var O = () => {
  let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
    {
      fingerprint: t,
      handoff_token: n
    } = (0, i.parse)(window.location.search),
    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
    a = null != s ? s : null !== e ? e : void 0;
  r.useEffect(() => {
    null !== s && e !== s && E.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: s
    })
  }, [s, e]);
  let [p, O] = r.useState(null), x = r.useCallback(e => {
    O(e), g.default.track(T.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
      reason: e,
      fingerprint: (0, o.maybeExtractId)(a)
    }, {
      fingerprint: a
    })
  }, [O, a]), v = c.default.get(I);
  if ("null" === n && null === p && x("deep_link_failed"), null != n && "null" !== n && null == v && null === p && x("nonce_missing"), r.useEffect(() => {
      if (null != v) {
        let e = c.default.get(N);
        (null == e || Date.now() >= e) && (x("nonce_expired"), M())
      }
    }, [v, x]), r.useEffect(() => {
      null != n && "null" !== n && null != v && null == p && d.default.post({
        url: T.Endpoints.HANDOFF_EXCHANGE,
        body: {
          key: v,
          handoff_token: n
        }
      }).then(e => h.default.loginToken(e.body.token, !1)).then(() => {
        g.default.track(T.AnalyticEvents.LOGIN_SUCCESSFUL, {
          source: T.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
          is_new_user: !1,
          fingerprint: (0, o.maybeExtractId)(a)
        });
        let e = new URL(window.location.href),
          t = new URLSearchParams(e.search);
        t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
      }).catch(() => {
        x("handoff_exchange")
      }).finally(() => {
        M()
      })
    }, [n, v, p, a, x]), null == a) return null;
  let D = (() => {
      if (null == p) return (0, l.jsxs)(l.Fragment, {
        children: [_.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, l.jsx)("br", {}), _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
      });
      if (L.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
      if (C.has(p)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
    })(),
    U = null != p && L.has(p);
  return U ? (0, l.jsx)("div", {
    className: R.errorContainer,
    children: (0, l.jsx)(f.Text, {
      color: "interactive-normal",
      variant: "text-sm/semibold",
      children: D
    })
  }) : (0, l.jsxs)("div", {
    className: R.container,
    children: [(0, l.jsx)(f.Text, {
      variant: "text-sm/semibold",
      children: D
    }), (0, l.jsx)(f.Button, {
      look: f.Button.Looks.INVERTED,
      color: f.Button.Colors.BRAND_NEW,
      onClick: () => {
        let e = A.default.generateNonce();
        c.default.set(I, e), c.default.set(N, Date.now() + S);
        let t = new URL(T.MOBILE_WEB_HANDOFF_DEEP_LINK),
          n = new URLSearchParams(window.location.search);
        n.delete("fingerprint"), n.delete("handoff_token");
        let s = new URLSearchParams;
        s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), g.default.track(T.AnalyticEvents.DEEP_LINK_CLICKED, {
          fingerprint: (0, o.maybeExtractId)(a),
          source: "mobile_web_handoff",
          destination: T.MOBILE_WEB_HANDOFF_DEEP_LINK
        }, {
          fingerprint: a,
          flush: !0
        }), window.location.href = t.toString()
      },
      children: (0, l.jsx)(f.Text, {
        className: R.buttonText,
        variant: "text-sm/semibold",
        children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT
      })
    })]
  })
}
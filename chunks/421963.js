"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("912215"),
  s = n("67164"),
  c = n("748820"),
  o = n("432710"),
  d = n("486196"),
  p = n("155084"),
  l = n("599110"),
  u = n("49111"),
  h = e => {
    let {
      captchaService: t = d.CaptchaTypes.RECAPTCHA,
      sitekey: n,
      rqdata: h,
      onRender: f,
      onVerify: _,
      onError: E,
      onOpen: m,
      onClose: v,
      onChalExpired: C,
      ...y
    } = e, R = r.useRef(null), A = (0, c.v4)(), [b, g] = r.useState(!1), T = r.useCallback(e => {
      l.default.track(u.AnalyticEvents.CAPTCHA_EVENT, {
        captcha_event_name: e,
        captcha_service: t,
        sitekey: n,
        captcha_flow_key: A
      })
    }, [A, t, n]), x = r.useCallback(e => {
      p.default.increment({
        name: o.MetricEvents.CAPTCHA_EVENT,
        tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
      })
    }, [t]), I = r.useCallback(() => {
      !b && (T("initial-load"), x("initial-load"), g(!0))
    }, [x, b, T]), S = r.useCallback(() => {
      if (b && null != h && "" !== h) {
        var e;
        null === (e = R.current) || void 0 === e || e.setData({
          rqdata: h
        })
      }
    }, [b, h, R]);
    r.useEffect(() => {
      S()
    }, [S]), r.useEffect(() => {
      I()
    }, [I]);
    let w = r.useCallback(() => {
        T("error"), x("error"), S(), null == E || E()
      }, [T, x, S, E]),
      O = r.useCallback(e => {
        T("verify"), x("verify"), _(e)
      }, [x, _, T]),
      N = r.useCallback(() => {
        T("render"), null == f || f()
      }, [f, T]),
      k = r.useCallback(() => {
        T("open"), x("open"), null == m || m()
      }, [x, m, T]),
      L = r.useCallback(() => {
        T("close"), S(), null == v || v()
      }, [v, T, S]),
      D = r.useCallback(() => {
        T("chal-expire"), null == C || C()
      }, [C, T]);
    return ((null == n || "" === n) && (n = u.RECAPTCHA_SITE_KEY), t === d.CaptchaTypes.RECAPTCHA) ? (0, a.jsx)(s.default, {
      ...y,
      onLoad: I,
      onRender: N,
      onVerify: O,
      onError: w,
      sitekey: n
    }) : t === d.CaptchaTypes.HCAPTCHA ? (0, a.jsx)(i.default, {
      ref: R,
      ...y,
      sitekey: n,
      onLoad: I,
      onError: w,
      onVerify: O,
      onChalExpired: D,
      onOpen: k,
      onClose: L
    }) : (0, a.jsx)(s.default, {
      ...y,
      sitekey: n,
      onLoad: I,
      onRender: N,
      onVerify: O,
      onError: w
    })
  }
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("143435"),
  i = n("77078"),
  r = n("599110"),
  o = n("195812"),
  u = n("49111"),
  d = n("782340"),
  c = e => {
    let {
      href: t,
      className: n,
      iconClassName: c,
      rel: m,
      target: f,
      mimeType: h,
      fileName: p,
      focusProps: g,
      onClick: E,
      ...v
    } = e, C = a.useMemo(() => s.designConfig.getDefaultLinkInterceptor(t), [t]), I = a.useCallback(e => {
      r.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
        attachment_type: null == h ? void 0 : h[0],
        attachment_subtype: null == h ? void 0 : h[1]
      }), null == E || E(), null == C || C(e)
    }, [C, h, E]);
    return null != p ? (0, l.jsx)(i.Anchor, {
      href: t,
      onClick: I,
      target: f,
      rel: m,
      className: n,
      "aria-label": d.default.Messages.DOWNLOAD,
      focusProps: g,
      ...v,
      children: p
    }) : (0, l.jsx)(i.Anchor, {
      href: t,
      onClick: I,
      target: f,
      rel: m,
      className: n,
      "aria-label": d.default.Messages.DOWNLOAD,
      focusProps: g,
      ...v,
      children: (0, l.jsx)(o.default, {
        className: c
      })
    })
  }
"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("222007");
var n = r("37983"),
  l = r("884691"),
  i = r("414456"),
  a = r.n(i),
  s = r("627445"),
  u = r.n(s),
  d = r("77078"),
  o = r("68238"),
  c = r("83900"),
  f = r("626820"),
  v = r("306160"),
  g = r("701909"),
  h = r("161449"),
  E = r("49111"),
  C = r("782340"),
  I = r("939848");

function R(e) {
  let {
    url: t
  } = e, [r, i] = l.useState(!1), s = l.useRef(void 0), u = l.useCallback(() => {
    !r && ((0, v.copy)(t) && i(!0), s.current = setTimeout(() => i(!1), 2e3))
  }, [t, r]);
  return l.useEffect(() => () => clearTimeout(s.current), []), v.SUPPORTS_COPY ? (0, n.jsxs)(d.Clickable, {
    className: a(I.copyLink, r ? I.copied : null),
    onClick: u,
    children: [(0, n.jsx)(c.default, {
      className: I.copyLinkIcon
    }), r ? C.default.Messages.BUILD_OVERRIDE_LINK_COPIED : C.default.Messages.BUILD_OVERRIDE_LINK_COPY]
  }) : null
}

function p(e) {
  let {
    subHead: t,
    buildDetails: r,
    buttonColor: i,
    buttonClick: s,
    buttonText: u,
    disabled: o = !1,
    submitting: c = !1
  } = e;
  return (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: I.buildInfo,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-sm/medium",
        className: I.subHead,
        children: t
      }), (0, n.jsx)("div", {
        className: I.buildDetails,
        children: r
      })]
    }), (0, n.jsx)(d.Button, {
      submitting: c,
      color: i,
      onClick: s,
      className: a(I.button, o ? I.disabledButtonOverride : null),
      size: I.buttonSize,
      disabled: o,
      children: u
    })]
  })
}
var m = e => {
  var t, r, i;
  let {
    loading: s = !1,
    currentOverrides: c,
    linkMeta: v,
    url: m,
    applyBuildOverride: L,
    clearBuildOverride: _
  } = e, [O, B] = l.useState(!1), D = l.useCallback(() => {
    !O && (B(!0), L().catch(() => B(!1)))
  }, [L, O]), b = l.useCallback(() => {
    !O && (B(!0), _().catch(() => B(!1)))
  }, [_, O]);
  return (0, n.jsxs)("div", {
    className: I.wrapper,
    children: [(t = v, r = m, i = s, (0, n.jsxs)(d.Text, {
      variant: "text-xs/normal",
      className: I.titleRegion,
      children: [(0, n.jsx)("strong", {
        className: I.title,
        children: null != t && null != t.releaseChannel ? C.default.Messages.BUILD_OVERRIDE_FOR.format({
          releaseChannel: t.releaseChannel
        }) : C.default.Messages.BUILD_OVERRIDE
      }), (0, n.jsx)(d.Anchor, {
        className: I.infoLink,
        href: g.default.getArticleURL(E.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
        target: "_blank",
        children: (0, n.jsx)(o.default, {
          className: I.infoIcon
        })
      }), i ? null : (0, n.jsx)(R, {
        url: r
      })]
    })), (0, n.jsxs)("div", {
      className: I.content,
      children: [(0, n.jsx)(f.default, {
        className: I.icon
      }), s ? (0, n.jsxs)(l.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: I.buildInfo,
          children: [(0, n.jsx)("div", {
            className: a(I.barLoader, I.barTitle)
          }), (0, n.jsx)("div", {
            className: I.barLoader
          })]
        }), (0, n.jsx)("div", {
          className: I.buttonLoader
        })]
      }) : function(e) {
        var t, r;
        let n, l, i, {
            currentOverrides: a,
            linkMeta: s,
            applyBuildOverride: o,
            clearBuildOverride: c,
            submitting: f
          } = e,
          v = (0, h.default)(s, ["discord_web"]);
        if (!v.valid) return function(e) {
          return p({
            subHead: C.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
            buttonColor: d.Button.Colors.TRANSPARENT,
            buttonText: "Invalid",
            buildDetails: e,
            disabled: !0
          })
        }(v.reason);
        u(null != s, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
        let {
          discord_web: g
        } = s.targetBuildOverride;
        if (u(null != g, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = g, null == (r = a) || null == r.discord_web ? 1 : t.id !== r.discord_web.id || t.type !== r.discord_web.type) l = C.default.Messages.BUILD_OVERRIDE_APPLY, n = o, i = d.Button.Colors.GREEN;
        else l = C.default.Messages.BUILD_OVERRIDE_CLEAR, n = c, i = d.Button.Colors.RED;
        return p({
          subHead: C.default.Messages.BUILD_OVERRIDE_ID,
          buildDetails: g.id,
          buttonClick: n,
          buttonText: l,
          buttonColor: i,
          submitting: f
        })
      }({
        currentOverrides: c,
        linkMeta: v,
        applyBuildOverride: D,
        clearBuildOverride: b,
        submitting: O
      })]
    })]
  })
}
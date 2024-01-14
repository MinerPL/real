"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("281071"),
  i = n("65597"),
  r = n("77078"),
  o = n("716241"),
  u = n("42203"),
  d = n("191814"),
  c = n("945330"),
  f = n("83900"),
  h = n("404008"),
  C = n("701909"),
  p = n("639440"),
  m = n("673844"),
  E = n("49111"),
  g = n("782340"),
  S = n("64664");

function _(e) {
  let {
    threadId: t
  } = e, n = (0, i.default)([u.default], () => u.default.getChannel(t)), _ = (0, i.default)([u.default], () => u.default.getChannel(null == n ? void 0 : n.parent_id)), A = a.useCallback(() => {
    null != n && null != _ && ((0, o.trackWithMetadata)(E.AnalyticEvents.MEDIA_POST_SHARE_PROMPT_CLICKED, {
      media_post_id: n.id
    }), (0, l.copy)((0, h.getChannelLinkToCopy)(n, _)))
  }, [n, _]);
  return (0, s.jsxs)("div", {
    className: S.sharePromptContainer,
    children: [(0, s.jsx)(m.default, {}), (0, s.jsxs)("div", {
      className: S.sharePromptContent,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
          helpArticleUrl: C.default.getCreatorSupportArticleURL(E.HelpdeskArticles.MEDIA_CHANNEL)
        })
      }), (0, s.jsx)(d.default, {
        size: 4
      }), (0, s.jsxs)(r.Button, {
        className: S.sharePromptCta,
        innerClassName: S.ctaContent,
        onClick: A,
        children: [(0, s.jsx)(f.default, {
          height: "16px",
          width: "16px"
        }), (0, s.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: g.default.Messages.MEDIA_POST_SHARE_PROMPT_CTA
        })]
      })]
    }), (0, s.jsx)(r.Clickable, {
      className: S.closeButton,
      onClick: () => {
        (0, p.dismissMediaPostSharePrompt)(t)
      },
      "aria-label": g.default.Messages.REMOVE_MESSAGE_ATTACHMENT,
      children: (0, s.jsx)(c.default, {
        height: "15px",
        width: "15px"
      })
    })]
  })
}
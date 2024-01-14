"use strict";
a.r(s), a.d(s, {
  default: function() {
    return h
  }
}), a("222007");
var t = a("37983"),
  l = a("884691"),
  i = a("414456"),
  r = a.n(i),
  d = a("884745"),
  n = a.n(d),
  o = a("446674"),
  c = a("77078"),
  u = a("828116"),
  E = a("716241"),
  S = a("900938"),
  R = a("599110"),
  m = a("758276"),
  _ = a("283167"),
  x = a("149632"),
  C = a("49111"),
  p = a("53948"),
  I = a("782340"),
  g = a("627819");
let T = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
var h = e => {
  var s;
  let {
    guild: a,
    guildMetadata: i,
    headerId: d
  } = e, [h, f] = l.useState(!1), v = (0, o.useStateFromStores)([S.default], () => "keywords" in S.default.getErrors()), D = e => {
    if (T.test(e)) f(!1);
    else {
      f(!0);
      return
    }
    if ((null == a ? void 0 : a.id) == null) return;
    let {
      keywords: s
    } = i;
    !(s.length >= p.MAX_KEYWORDS) && _.updateGuildKeywords(a.id, n([...s, e.toLowerCase()]))
  }, N = e => {
    D(e), R.default.track(C.AnalyticEvents.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
      tag: e,
      primary_category_id: i.primaryCategoryId,
      ...(0, E.collectGuildAnalyticsMetadata)(a.id)
    })
  }, O = h ? I.default.Messages.SERVER_DISCOVERY_TAGS_ERROR_MSG_DASHES_ONLY : v ? I.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
    onLearnMoreClick: () => {
      (0, x.navigateToAndTrackHelpCenterClick)({
        articleId: C.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
        guildId: a.id,
        modalStep: x.DiscoverySetupModalSteps.TAGS
      })
    }
  }) : null, A = new Set(i.keywords);
  return (0, t.jsxs)("div", {
    className: g.container,
    children: [(0, t.jsxs)("div", {
      className: g.content,
      children: [(0, t.jsx)("div", {
        className: r(g.stepImage, g.tagImage)
      }), (0, t.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: g.header,
        id: d,
        children: I.default.Messages.SERVER_DISCOVERY_TAGS
      }), (0, t.jsx)(c.Text, {
        color: "none",
        variant: "text-md/normal",
        className: g.headerCaption,
        children: I.default.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
      })]
    }), (0, t.jsxs)(c.FormSection, {
      className: g.form,
      children: [(0, t.jsx)(c.FormTitle, {
        required: !0,
        children: I.default.Messages.SERVER_DISCOVERY_TAGS
      }), (0, t.jsx)(c.FormText, {
        type: c.FormTextTypes.DESCRIPTION,
        className: g.description,
        children: I.default.Messages.SERVER_DISCOVERY_TAGS_INPUT_SUBLABEL
      }), (0, t.jsx)(u.default, {
        className: r(g.tags, {
          [g.error]: null != O
        }),
        tags: i.keywords,
        onRemoveTag: e => {
          if ((null == a ? void 0 : a.id) == null) return;
          let s = [...i.keywords];
          s.splice(e, 1), _.updateGuildKeywords(a.id, s)
        },
        onAddTag: D,
        maxTags: p.MAX_KEYWORDS,
        maxTaxLength: p.MAX_KEYWORD_LENGTH,
        placeholder: (null == i ? void 0 : null === (s = i.keywords) || void 0 === s ? void 0 : s.length) === 0 ? I.default.Messages.SERVER_DISCOVERY_TAGS_INPUT_PLACEHOLDER : ""
      }), (0, t.jsx)(c.Text, {
        className: g.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: O
      })]
    }), (0, t.jsx)("div", {
      className: g.form,
      children: (0, t.jsx)(c.FormTitle, {
        children: I.default.Messages.SERVER_DISCOVERY_POPULAR_TAGS
      })
    }), (0, t.jsx)("div", {
      className: g.tagContainer,
      children: (0, m.getSuggestedTags)(i.primaryCategoryId).map(e => (0, t.jsx)(c.Anchor, {
        onClick: () => N(e),
        className: r(g.tag, {
          [g.usedTag]: A.has(e)
        }),
        children: e
      }, e))
    })]
  })
}
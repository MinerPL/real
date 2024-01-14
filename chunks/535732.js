"use strict";
a.r(s), a.d(s, {
  default: function() {
    return R
  }
});
var t = a("37983");
a("884691");
var l = a("414456"),
  i = a.n(l),
  r = a("446674"),
  d = a("77078"),
  n = a("592407"),
  o = a("900938"),
  c = a("149632"),
  u = a("49111"),
  E = a("782340"),
  S = a("627819"),
  R = e => {
    var s;
    let {
      guild: a,
      headerId: l
    } = e, R = (0, r.useStateFromStores)([o.default], () => "description" in o.default.getErrors()), m = R ? E.default.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
      onLearnMoreClick: () => {
        (0, c.navigateToAndTrackHelpCenterClick)({
          articleId: u.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES,
          guildId: a.id,
          modalStep: c.DiscoverySetupModalSteps.DESCRIPTION
        })
      }
    }) : null;
    return (0, t.jsxs)("div", {
      className: S.container,
      children: [(0, t.jsxs)("div", {
        className: S.content,
        children: [(0, t.jsx)("div", {
          className: i(S.stepImage, S.pencilImage)
        }), (0, t.jsx)(d.Heading, {
          variant: "heading-xl/semibold",
          className: S.header,
          id: l,
          children: E.default.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_HEADER
        }), (0, t.jsx)(d.Text, {
          color: "none",
          variant: "text-md/normal",
          className: S.headerCaption,
          children: E.default.Messages.SERVER_DISCOVERY_DESCRIPTION_PAGE_SUBHEADING
        })]
      }), (0, t.jsxs)(d.FormSection, {
        className: S.form,
        children: [(0, t.jsx)(d.FormTitle, {
          required: !0,
          children: E.default.Messages.FORM_LABEL_SERVER_DESCRIPTION
        }), (0, t.jsx)(d.FormText, {
          type: d.FormTextTypes.DESCRIPTION,
          className: S.description,
          children: E.default.Messages.SERVER_DISCOVERY_SERVER_DESCRIPTION_INPUT_SUBLABEL
        }), (0, t.jsx)(d.TextArea, {
          autoFocus: !0,
          value: null !== (s = a.description) && void 0 !== s ? s : "",
          placeholder: E.default.Messages.SERVER_DESCIPTION_EMPTY,
          onChange: e => {
            n.default.updateGuild({
              description: e
            })
          },
          maxLength: 120,
          className: S.textArea,
          error: m
        })]
      })]
    })
  }
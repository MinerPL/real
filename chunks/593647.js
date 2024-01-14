"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("65597"),
  l = s("77078"),
  i = s("32296"),
  r = s("42887"),
  o = s("701909"),
  d = s("49111"),
  u = s("353927"),
  c = s("782340"),
  S = s("272371");

function E() {
  let e = (0, n.default)([r.default], () => r.default.supports(u.Features.LOOPBACK));
  return e ? (0, a.jsx)("div", {
    className: S.micTest,
    children: (0, a.jsx)(i.default, {
      title: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
      description: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_DESCRIPTION,
      notchBackground: i.NotchBackground.GRAY,
      captionVoice: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_CAPTION,
      captionNoVoice: (0, a.jsxs)(a.Fragment, {
        children: [c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_VOICE_NO_INPUT_NOTICE, (0, a.jsx)(l.Anchor, {
          className: S.micTestHelpLink,
          href: o.default.getArticleURL(d.HelpdeskArticles.NO_INPUT_DETECTED),
          children: c.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
        })]
      }),
      buttonTest: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_INACTIVE,
      buttonStop: c.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_BUTTON_ACTIVE,
      buttonClassName: S.micTestButton,
      buttonColor: l.Button.Colors.BRAND,
      location: {
        page: d.AnalyticsPages.USER_SETTINGS,
        section: d.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }
    })
  }) : null
}
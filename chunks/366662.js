"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("629109"),
  r = s("42887"),
  o = s("145131"),
  d = s("701909"),
  u = s("49111"),
  c = s("782340"),
  S = s("926622");

function E() {
  let {
    videoHook: e,
    experimentalSoundshare: t,
    soundshareEnabled: s,
    supportsVideoHook: E,
    supportsExperimentalSoundshare: f,
    supportsEnableSoundshare: T
  } = (0, n.useStateFromStoresObject)([r.default], () => ({
    videoHook: r.default.getVideoHook(),
    experimentalSoundshare: r.default.getExperimentalSoundshare(),
    soundshareEnabled: r.default.getSoundshareEnabled(),
    supportsVideoHook: r.default.supportsVideoHook(),
    supportsExperimentalSoundshare: r.default.supportsExperimentalSoundshare(),
    supportsEnableSoundshare: r.default.supportsEnableSoundshare()
  }));
  return E || f || T ? (0, a.jsxs)(l.FormSection, {
    className: S.marginBottom20,
    title: c.default.Messages.FORM_LABEL_SCREENSHARE,
    children: [E && (0, a.jsx)(l.FormSwitch, {
      value: e,
      onChange: e => i.default.setVideoHook(e),
      note: c.default.Messages.FORM_HELP_VIDEO_HOOK,
      children: c.default.Messages.USER_SETTINGS_VOICE_VIDEO_HOOK_LABEL
    }), f && (0, a.jsx)(l.FormSwitch, {
      value: t,
      onChange: e => i.default.setExperimentalSoundshare(e),
      children: c.default.Messages.USER_SETTINGS_VOICE_EXPERIMENTAL_SOUNDSHARE_LABEL
    }), T && (0, a.jsxs)(l.FormItem, {
      children: [(0, a.jsx)(l.FormText, {
        className: S.marginBottom20,
        children: (function(e) {
          switch (e) {
            case u.SoundshareEnableState.ENABLING:
              return c.default.Messages.USER_SETTINGS_VOICE_SOUNDSHARE_ENABLING_LABEL;
            case u.SoundshareEnableState.ENABLED:
              return c.default.Messages.USER_SETTINGS_VOICE_SOUNDSHARE_ENABLED_LABEL;
            case u.SoundshareEnableState.FAILED_TO_ENABLE:
              return c.default.Messages.USER_SETTINGS_VOICE_SOUNDSHARE_FAILED_TO_ENABLE_LABEL
          }
          return c.default.Messages.USER_SETTINGS_VOICE_SOUNDSHARE_NOT_ENABLED_LABEL
        })(s).format({
          helpdeskArticle: d.default.getArticleURL(u.HelpdeskArticles.OSX_SOUNDSHARE)
        })
      }), (0, a.jsx)(o.default, {
        children: (0, a.jsx)(o.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(l.Button, {
            className: S.marginBottom20,
            size: l.Button.Sizes.SMALL,
            onClick: () => i.default.enableSoundshare(),
            disabled: s !== u.SoundshareEnableState.NOT_ENABLED,
            children: c.default.Messages.USER_SETTINGS_VOICE_INSTALL_LABEL
          })
        })
      }), (0, a.jsx)(l.FormDivider, {
        className: S.marginBottom20
      })]
    })]
  }) : null
}
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("627445"),
  r = l.n(s),
  i = l("446674"),
  u = l("151426"),
  o = l("77078"),
  d = l("10641"),
  c = l("235145"),
  f = l("369964"),
  m = l("227602"),
  S = l("701909"),
  C = l("13798"),
  E = l("386045"),
  h = l("30591"),
  _ = l("803725"),
  g = l("49111"),
  p = l("994428"),
  N = l("782340"),
  I = l("173266"),
  x = l("770420");
let v = e => {
  let {
    clipsEnabled: t,
    isAnimationDone: l,
    guildId: s,
    children: r
  } = e, m = (0, i.useStateFromStores)([E.default], () => E.default.getHardwareClassification()), C = m === h.ClipsHardwareClassification.MEETS_MINIMUM || m === h.ClipsHardwareClassification.UNKNOWN, x = m === h.ClipsHardwareClassification.BELOW_MINIMUM, v = l && (C || x) && !t, [A, R] = (0, c.useGetDismissibleContent)(v ? [u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK] : []), T = A === u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK;
  a.useEffect(() => {
    t && (0, d.markDismissibleContentAsDismissed)(u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK, {
      forceTrack: !0
    })
  }, [t]);
  let L = (e, t) => {
    e.stopPropagation(), e.preventDefault(), null == t || t(), R(p.ContentDismissActionType.UNKNOWN)
  };
  return (0, n.jsx)(o.Popout, {
    shouldShow: T,
    position: "right",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(f.default, {
        dismissibleContent: u.DismissibleContent.CLIPS_ONBOARDING_GO_LIVE_COACHMARK,
        shouldUseHorizontalButtons: !0,
        inlineArt: !0,
        artClassName: I.clipsEducationArt,
        position: "right",
        header: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_TITLE,
        headerClassName: I.clipsEducationHeader,
        body: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_BODY
          }), x ? (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: I.warningText,
            children: N.default.Messages.CLIPS_ONBOARDING_GO_LIVE_DEFAULT_DISABLED_COACHMARK_HARDWARE_IMPACT_WARNING.format({
              url: S.default.getArticleURL(g.HelpdeskArticles.CLIPS)
            })
          }) : null]
        }),
        tryItText: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS,
        onTryFeature: e => {
          (0, _.updateClipsEnabled)({
            clipsEnabled: !0,
            guildId: s,
            trackAnalytics: !0
          }), L(e)
        },
        onClose: e => {
          L(e, t)
        }
      })
    },
    children: () => r
  })
};
var A = function(e) {
  let {
    isAnimationDone: t,
    guildId: l
  } = e, a = (0, i.useStateFromStores)([E.default], () => E.default.getSettings().clipsEnabled), s = (0, i.useStateFromStores)([m.default], () => m.default.getKeybindForAction(g.GlobalKeybindActions.SAVE_CLIP));
  r(null != s, "Clips keybind should be set");
  let u = C.toString(s.shortcut, !0);
  return (0, n.jsx)(o.FormItem, {
    title: N.default.Messages.CLIPS_SETTINGS,
    titleClassName: x.formItemTitle,
    className: x.modalContent,
    children: (0, n.jsxs)("div", {
      className: I.container,
      children: [(0, n.jsx)(v, {
        clipsEnabled: a,
        guildId: l,
        isAnimationDone: t,
        children: (0, n.jsx)(o.FormSwitch, {
          className: I.formSwitch,
          value: a,
          onChange: e => (0, _.updateClipsEnabled)({
            clipsEnabled: e,
            guildId: l,
            trackAnalytics: !0
          }),
          hideBorder: !0,
          children: N.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "interactive-normal",
        className: I.description,
        children: N.default.Messages.CLIPS_SETTINGS_HELP_IN_GO_LIVE_CTA.format({
          keybind: u,
          keybindHook: () => (0, n.jsx)("span", {
            className: I.keybindHintKeys,
            children: (0, n.jsx)(o.KeyCombo, {
              className: I.keybindShortcut,
              shortcut: u
            })
          })
        })
      })]
    })
  })
}
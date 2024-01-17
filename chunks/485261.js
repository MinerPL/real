"use strict";
n.r(t), n.d(t, {
  ClydeEditProfileModalContent: function() {
    return m
  },
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  i = n("446674"),
  s = n("77078"),
  a = n("305961"),
  o = n("145131"),
  u = n("599110"),
  c = n("335189"),
  d = n("473591"),
  f = n("980215"),
  h = n("879253"),
  E = n("709594"),
  p = n("49111"),
  C = n("782340"),
  _ = n("947399");

function m(e) {
  let {
    onClose: t,
    guildId: n
  } = e, {
    settings: m,
    isFetchingSettings: v,
    isSavingSettings: I,
    hasPendingChanges: g,
    errors: S
  } = (0, i.useStateFromStoresObject)([d.default], () => ({
    settings: d.default.getSettings(n),
    isFetchingSettings: d.default.isFetchingSettings(n),
    isSavingSettings: d.default.isSavingSettings(),
    hasPendingChanges: d.default.hasPendingChanges(),
    errors: d.default.getErrors()
  })), R = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(n)), N = (0, f.useClydeProfilesEnabled)(R), [L, T] = r.useState(!1);
  r.useEffect(() => ((0, c.startEditingClydeProfile)(), () => {
    (0, c.doneEditingClydeProfile)(), (0, c.resetPendingChanges)()
  }), []), r.useEffect(() => {
    (0, c.fetchClydeSettings)(n, !0)
  }, [n]), r.useEffect(() => {
    (g || null != S) && T(!1)
  }, [g, S]);
  let x = async () => {
    if (null == n || !d.default.hasPendingChanges()) return;
    let e = d.default.getPendingUpdates();
    await (0, c.saveClydeProfile)(n, function(e) {
      let t = {};
      return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
    }(e)), T(!0)
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: _.heading,
        children: (0, l.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: C.default.Messages.CLYDE_CUSTOMIZE
        })
      }), (0, l.jsx)(s.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsx)(s.ScrollerAuto, {
      className: _.content,
      children: v || null == m ? (0, l.jsx)(s.Spinner, {
        type: s.Spinner.Type.SPINNING_CIRCLE
      }) : (0, l.jsxs)(l.Fragment, {
        children: [N && (0, l.jsx)(E.default, {
          guildId: n
        }), null != m && (0, l.jsx)("div", {
          className: _.section,
          children: (0, l.jsx)(h.ClydeEditProfileModalPersonalitySection, {
            settings: m
          })
        })]
      })
    }), (0, l.jsxs)(s.ModalFooter, {
      direction: o.default.Direction.HORIZONTAL,
      className: _.footer,
      children: [(0, l.jsx)("div", {
        className: _.resetButtonContainer,
        children: (0, l.jsx)(s.Button, {
          onClick: () => {
            (0, c.resetPendingChanges)(), u.default.track(p.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
              guild_id: n
            })
          },
          color: s.ButtonColors.PRIMARY,
          size: s.ButtonSizes.SMALL,
          disabled: !g,
          children: C.default.Messages.RESET
        })
      }), g && null == S && (0, l.jsx)("div", {
        className: _.pendingChangesMessage,
        children: C.default.Messages.SETTINGS_NOTICE_MESSAGE
      }), L && (0, l.jsx)("div", {
        className: _.successfullSaveMessage,
        children: C.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
      }), null != S && (0, l.jsx)("div", {
        className: _.errorMessage,
        children: C.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(s.Button, {
          onClick: x,
          color: s.ButtonColors.GREEN,
          size: s.ButtonSizes.SMALL,
          submitting: I,
          disabled: !g,
          children: C.default.Messages.SAVE_CHANGES
        })
      })]
    })]
  })
}

function v(e) {
  let {
    transitionState: t,
    onClose: n,
    guildId: r
  } = e;
  return (0, l.jsx)(s.ModalRoot, {
    transitionState: t,
    size: s.ModalSize.LARGE,
    children: (0, l.jsx)(m, {
      onClose: n,
      guildId: r
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  RecentsPopout: function() {
    return T
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("397613"),
  i = n("446674"),
  r = n("151426"),
  o = n("77078"),
  u = n("22082"),
  d = n("979268"),
  c = n("913796"),
  f = n("872173"),
  h = n("374363"),
  E = n("659500"),
  m = n("981024"),
  p = n("519540"),
  g = n("80649"),
  S = n("385730"),
  N = n("788072"),
  _ = n("49111"),
  I = n("782340");

function T(e) {
  let {
    onOpen: t,
    onClose: n,
    children: T,
    badgeState: C,
    popoutPosition: A,
    popoutAlign: x
  } = e, [v, M] = l.useState(!1), [R, L] = function() {
    let e = (0, i.useStateFromStores)([h.default], () => {
        var e, t;
        return null !== (t = null === (e = h.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
      }),
      t = l.useCallback(e => {
        f.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
          if (t.currentTab === e) return !1;
          t.currentTab = e
        }, f.UserSettingsDelay.FREQUENT_USER_ACTION)
      }, []);
    return [e, t]
  }(), {
    showTutorial: O,
    setSeenTutorial: b
  } = function(e) {
    let t = (0, i.useStateFromStores)([h.default], () => {
        var e, t;
        return null !== (t = null === (e = h.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = l.useCallback(() => {
        f.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
      }, []),
      a = !t && e === r.InboxTab.UNREADS;
    return {
      showTutorial: a,
      setSeenTutorial: n
    }
  }(R), y = l.useCallback(() => {
    M(!1), v && (null == n || n())
  }, [n, v]), j = l.useCallback(() => {
    M(!v), v ? null == n || n() : null == t || t()
  }, [n, t, v]), F = l.useCallback(() => {
    j(), L(r.InboxTab.UNREADS)
  }, [L, j]);
  l.useEffect(() => (E.ComponentDispatch.subscribe(_.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, F), () => void E.ComponentDispatch.unsubscribe(_.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, F)), [F]);
  let {
    showReminders: D
  } = d.default.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), U = (0, c.useInDesktopNotificationCenterExperiment)(), {
    enabled: k
  } = u.default.useExperiment({
    location: "RecentsPopout"
  });
  l.useEffect(() => {
    !D && R === r.InboxTab.TODOS && L(r.InboxTab.MENTIONS)
  });
  let P = l.useCallback(e => {
    !e.shiftKey && y()
  }, [y]);
  return (0, a.jsx)(o.Popout, {
    animation: o.Popout.Animation.NONE,
    position: A,
    align: x,
    autoInvert: !1,
    shouldShow: v,
    onRequestClose: y,
    renderPopout: function() {
      return (0, a.jsx)(o.Dialog, {
        "aria-label": I.default.Messages.INBOX,
        children: R === r.InboxTab.FOR_YOU && U ? (0, a.jsx)(m.default, {
          setTab: L,
          badgeState: C,
          closePopout: y
        }) : R === r.InboxTab.MENTIONS ? (0, a.jsx)(g.default, {
          setTab: L,
          onJump: P,
          badgeState: C,
          closePopout: y
        }) : k && R === r.InboxTab.GAME_INVITES ? (0, a.jsx)(N.default, {
          setTab: L,
          badgeState: C,
          closePopout: y
        }) : D && R === r.InboxTab.TODOS ? (0, a.jsx)(p.default, {
          setTab: L,
          onJump: P,
          closePopout: y
        }) : (0, a.jsx)(s.ErrorBoundary, {
          fallback: (0, a.jsx)(S.UnreadsCrashed, {
            setTab: L,
            closePopout: y,
            badgeState: C
          }),
          children: (0, a.jsx)(S.default, {
            setTab: L,
            onJump: P,
            showTutorial: O,
            setSeenTutorial: b,
            closePopout: y,
            badgeState: C
          })
        })
      })
    },
    ignoreModalClicks: !0,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return T(j, n, e)
    }
  })
}
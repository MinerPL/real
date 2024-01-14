"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("446674"),
  a = n("151426"),
  u = n("77078"),
  d = n("244201"),
  c = n("206230"),
  f = n("427953"),
  p = n("550766"),
  m = n("292655"),
  h = n("478272"),
  E = n("685665"),
  S = n("384997"),
  g = n("128295"),
  C = n("414868"),
  T = n("49111"),
  v = n("994428"),
  y = n("13030"),
  x = n("782340"),
  I = n("851855");

function N(e) {
  let {
    disabled: t,
    channel: n,
    markAsDismissed: r,
    visibleContent: S,
    innerRef: N
  } = e, _ = (0, d.useAppContext)(), {
    analyticsLocations: A
  } = (0, E.default)(), R = _ === T.AppContext.POPOUT, O = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = (0, f.useIsActivitiesInTextEnabled)(n.id, "ChannelActivityPickerButton"), k = i.useCallback(() => {
    r(v.ContentDismissActionType.UNKNOWN), (0, h.default)({
      channel: M ? n : void 0,
      guildId: n.guild_id,
      locationObject: {
        page: T.AnalyticsPages.GUILD_CHANNEL,
        section: T.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: T.AnalyticsObjects.BUTTON_ICON,
        objectType: T.AnalyticsObjectTypes.ACTIVITY
      },
      openInPopout: R,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: A
    }), (0, p.fetchShelf)({
      guildId: n.guild_id
    })
  }, [A, n, M, r, R]), b = () => {
    if (S === a.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES) return (0, l.jsxs)("div", {
      className: I.sparkleContainer,
      children: [(0, l.jsx)(C.default, {
        className: o(I.sparkleStar, {
          [I.noAnimation]: O
        })
      }), (0, l.jsx)(g.default, {
        className: o(I.sparklePlus, {
          [I.noAnimation]: O
        })
      })]
    });
    return null
  };
  return t ? null : (0, l.jsx)(u.Tooltip, {
    text: x.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
    children: e => (0, l.jsxs)("div", {
      ...e,
      className: o(y.CHAT_INPUT_BUTTON_CLASSNAME, I.buttonContainer),
      ref: N,
      children: [(0, l.jsx)(m.default, {
        onClick: k,
        tabIndex: 0,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        }
      }), b()]
    })
  })
}
let _ = [a.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES];
var A = i.memo(i.forwardRef(function(e, t) {
  return (0, l.jsx)(S.default, {
    contentTypes: _,
    children: n => {
      let {
        visibleContent: i,
        markAsDismissed: r
      } = n;
      return (0, l.jsx)(N, {
        ...e,
        innerRef: t,
        visibleContent: i,
        markAsDismissed: () => r(v.ContentDismissActionType.UNKNOWN)
      })
    }
  })
}))
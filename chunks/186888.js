"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("77078"),
  r = n("260365"),
  o = n("987317"),
  u = n("79112"),
  d = n("376556"),
  c = n("871388"),
  f = n("152311"),
  E = n("36539"),
  _ = n("860285"),
  h = n("47319"),
  C = n("86878"),
  I = n("686470"),
  T = n("568307"),
  S = n("535974"),
  m = n("599110"),
  p = n("602043"),
  A = n("780009"),
  g = n("49111"),
  N = n("782340");
let R = d.default.get(g.PlatformTypes.XBOX).name;

function O(e) {
  let {
    currentActivities: t
  } = e, n = t.length > 1, O = function(e) {
    let {
      currentActivities: t
    } = e, n = (0, i.useStateFromStores)([h.default], () => h.default.getAccounts().some(e => e.type === d.default.get(g.PlatformTypes.XBOX).type)), s = t.some(e => {
      let {
        activity: t
      } = e;
      return (0, E.default)(t)
    });
    return n || !s ? null : (0, a.jsx)(l.MenuItem, {
      id: "xbox-connect",
      action: () => u.default.open(g.UserSettingsSections.CONNECTIONS),
      label: N.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: R
      })
    })
  }(e), L = function(e) {
    let {
      currentActivities: t
    } = e, n = s.useContext(m.AnalyticsContext);
    return (0, i.useStateFromStoresArray)([T.default, I.default, _.default, S.default, C.default], () => t.filter(e => !(0, f.default)(e.activity)).map(e => {
      let {
        activity: t,
        game: a
      } = e, s = I.default.getActiveLibraryApplication(a.id);
      return {
        ...e,
        libraryApplication: s,
        canJoin: null != t && (0, c.default)(t, g.ActivityFlags.JOIN) && t.type === g.ActivityTypes.PLAYING,
        canPlay: (0, p.isLaunchable)({
          LibraryApplicationStore: I.default,
          LaunchableGameStore: _.default,
          DispatchApplicationStore: S.default,
          ConnectedAppsStore: C.default,
          applicationId: a.id,
          branchId: null != s ? s.branchId : null
        }),
        isLaunching: _.default.launchingGames.has(a.id),
        isRunning: T.default.getRunningVerifiedApplicationIds().includes(a.id),
        location: n.location
      }
    }), [n.location, t])
  }(e), v = [];
  for (let e of L) {
    let {
      activity: t
    } = e;
    null != t && null != t.type && v.push(function(e, t) {
      let {
        canJoin: n,
        activity: s,
        activityUser: i
      } = e;
      if (!n || null == s) return null;
      async function u() {
        if (null == s) return;
        let e = await r.default.sendActivityInviteUser({
          type: g.ActivityActionTypes.JOIN_REQUEST,
          userId: i.id,
          activity: s,
          location: g.AnalyticsLocations.PROFILE_POPOUT
        });
        null != e && o.default.selectPrivateChannel(e.id)
      }
      return (0, a.jsx)(l.MenuItem, {
        id: "join-".concat(s.session_id),
        label: t ? N.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN_USER.format({
          name: i.toString()
        }) : N.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        action: u
      })
    }(e, n), function(e, t) {
      let {
        activity: n,
        game: s,
        libraryApplication: i,
        location: r,
        canPlay: o,
        isRunning: u,
        isLaunching: d
      } = e;
      if (!o || null == n) return null;
      let c = u ? N.default.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_RUNNING.format({
        name: s.name
      }) : d ? N.default.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_LAUNCHING.format({
        name: s.name
      }) : void 0;
      return (0, a.jsx)(l.MenuItem, {
        id: "play-".concat(n.session_id),
        action: function() {
          (0, A.playApplication)(s.id, i, {
            analyticsParams: {
              location: {
                ...r,
                object: g.AnalyticsObjects.LIST_ITEM
              }
            }
          })
        },
        label: t ? N.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_APPLICATION_NAME.format({
          name: s.name
        }) : N.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
        subtext: c
      })
    }(e, n))
  }
  return [O, ...v]
}
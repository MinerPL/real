"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("629109"),
  l = n("990766"),
  r = n("375202"),
  o = n("727284"),
  u = n("373469"),
  d = n("42887"),
  c = n("568307"),
  E = n("703370"),
  f = n("773336"),
  _ = n("716724"),
  h = n("880553"),
  C = n("492249"),
  T = n("49111"),
  I = {
    [T.RPCCommands.TOGGLE_VIDEO]: {
      scope: {
        [C.RPC_SCOPE_CONFIG.ALL]: [T.OAuth2Scopes.RPC, T.OAuth2Scopes.RPC_VIDEO_WRITE]
      },
      handler() {
        let e = d.default.isVideoEnabled(),
          t = (0, h.default)();
        null != t && (e ? i.default.setVideoEnabled(!1) : (0, o.default)(() => i.default.setVideoEnabled(!0), T.AppContext.APP))
      }
    },
    [T.RPCCommands.TOGGLE_SCREENSHARE]: {
      scope: {
        [C.RPC_SCOPE_CONFIG.ALL]: [T.OAuth2Scopes.RPC, T.OAuth2Scopes.RPC_SCREENSHARE_WRITE]
      },
      validation: e => (0, _.default)(e).optional().keys({
        pid: e.number().optional().min(0)
      }),
      handler(e) {
        let {
          args: {
            pid: t
          }
        } = e, i = u.default.getCurrentUserActiveStream(), o = u.default.getStreamerActiveStreamMetadata(), d = (0, r.default)(c.default, E.default), _ = (0, h.default)();
        null != _ && (null != t && null != o && o.pid !== t && (0, f.isWindows)() ? (0, l.startStream)(_.guild_id, _.id, {
          pid: t
        }) : null != i ? (0, l.stopOwnStream)(!1) : null != t && (0, f.isWindows)() ? (0, l.startStream)(_.guild_id, _.id, {
          pid: t
        }) : null != d ? (0, l.startStream)(_.guild_id, _.id, {
          pid: d.pid
        }) : (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("451863").then(n.bind(n, "451863"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: _.guild_id,
            analyticsLocation: T.AnalyticsLocations.ACTIVITY_RPC
          })
        }))
      }
    }
  }
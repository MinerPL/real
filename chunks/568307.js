"use strict";
let i;
n.r(t), n.d(t, {
  gameInDatabase: function() {
    return ee
  },
  getOverlayGameStatus: function() {
    return et
  },
  transformForGameSettings: function() {
    return er
  },
  default: function() {
    return ec
  }
}), n("222007"), n("424973"), n("808653"), n("781738"), n("843762");
var r, s, a = n("917351"),
  o = n.n(a),
  l = n("866227"),
  u = n.n(l),
  c = n("446674"),
  d = n("95410"),
  f = n("913144"),
  E = n("115718"),
  h = n("376556"),
  p = n("605250"),
  _ = n("630915"),
  S = n("756898"),
  m = n("32128"),
  T = n("599110"),
  g = n("269180"),
  I = n("449008"),
  C = n("773336"),
  v = n("50885"),
  A = n("819068"),
  R = n("546463"),
  N = n("686470"),
  O = n("535974"),
  D = n("49111"),
  y = n("6791");
let P = new p.default("RunningGameStore"),
  L = "RunningGameStore",
  b = [{
    executables: [{
      os: "win32",
      name: "obs/obs.exe"
    }, {
      os: "win32",
      name: "obs32.exe"
    }, {
      os: "win32",
      name: "obs64.exe"
    }, {
      os: "darwin",
      name: "OBS.app"
    }, {
      os: "linux",
      name: "obs"
    }],
    name: "OBS",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "XSplit.Gamecaster.exe"
    }, {
      os: "win32",
      name: "XSplit.Core.exe"
    }, {
      os: "win32",
      name: "Gamecaster.exe"
    }],
    name: "XSplit",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "bebo.exe"
    }],
    name: "Bebo",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "Streamlabs OBS.exe"
    }, {
      os: "win32",
      name: "Streamlabs Desktop.exe"
    }, {
      os: "darwin",
      name: "Streamlabs Desktop.app"
    }],
    name: "Streamlabs Desktop",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "TwitchStudio.exe"
    }, {
      os: "darwin",
      name: "Twitch Studio.app"
    }],
    name: "Twitch Studio",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "Spotify.exe"
    }, {
      os: "darwin",
      name: "Spotify.app"
    }, {
      os: "linux",
      name: "spotify"
    }],
    name: h.default.get(D.PlatformTypes.SPOTIFY).name
  }],
  M = !0,
  U = new Set,
  G = [],
  w = [],
  k = [],
  x = null,
  F = [],
  V = {},
  B = {},
  H = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableDetection: {}
  },
  j = function() {},
  Y = {},
  W = 0,
  K = null,
  z = null,
  q = {};

function X(e, t, n) {
  let i = e[t];
  void 0 !== i && (delete e[t], e[n] = i)
}

function Q(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function Z(e) {
  return b.some(t => t.name === e.name && !0 === t.streamerTool)
}

function J() {
  if (k.length > 0) {
    let e = x;
    x = k[0], null != e && x.pid === e.pid ? x.start = e.start : x.start = Date.now()
  } else x = null;
  let e = [];
  for (let t of k) !(t.pid in q) && (q[t.pid] = t, e.push(t));
  let t = [];
  for (let e of Object.values(q)) !k.some(t => t.pid === e.pid) && (t.push(e), delete q[e.pid]);
  P.info("games", {
    runningGames: k,
    added: e,
    removed: t,
    previousGames: q
  }), f.default.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: k,
    added: e,
    removed: t
  })
}

function $(e) {
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}

function ee(e) {
  let t = R.default.getGameByName(e.name);
  return null != t || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
}

function et(e) {
  if (e.isLauncher) return {
    source: "LAUNCHER",
    enabled: !1,
    overlayMethod: y.OverlayMethod.Disabled
  };
  let t = R.default.getGameByName(e.name);
  if (null != t) {
    let e = N.default.getActiveLibraryApplication(t.id);
    if (null != e) return {
      source: "LIBRARY_APPLICATION",
      enabled: e.isOverlayEnabled(),
      overlayMethod: y.OverlayMethod.Disabled
    }
  }
  let n = _.isOOPExperimentEnabled() && (0, A.supportsOutOfProcess)(),
    i = null == e.id ? null : Y[e.id],
    r = n && null != i && i.supportsOutOfProcessOverlay,
    s = r ? y.OverlayMethod.OutOfProcess : y.OverlayMethod.Hook,
    a = m.OverlayStoredSettings.methodOverride;
  if (null != a && a !== y.OverlayMethod.Disabled) {
    let t = y.OverlayMethod[s],
      n = y.OverlayMethod[a];
    P.info("getOverlayGameStatus: overlay method overriden ".concat(t, " -> ").concat(n, " (").concat(e.name, ")")), s = a
  }
  let o = H.enableOverlay[$(e)];
  return null != o ? {
    source: "USER_OVERRIDE",
    enabled: o,
    overlayMethod: s
  } : null != i ? {
    source: "DATABASE",
    enabled: i.enabled || r,
    overlayMethod: s
  } : {
    source: "DEFAULT",
    enabled: !1,
    overlayMethod: y.OverlayMethod.Hook
  }
}(s = r || (r = {})).LAUNCHER = "LAUNCHER", s.LIBRARY_APPLICATION = "LIBRARY_APPLICATION", s.USER_OVERRIDE = "USER_OVERRIDE", s.DATABASE = "DATABASE", s.DEFAULT = "DEFAULT";

function en(e) {
  let t = H.enableDetection[$(e)];
  return null == t || t
}

function ei() {
  d.default.set(L, H)
}

function er(e) {
  var t, n;
  let i = {
    ...e,
    played: null != e.lastFocused && 0 !== e.lastFocused ? u(new Date(1e3 * e.lastFocused)).fromNow() : " ",
    overlay: (t = e, null !== (n = H.enableOverlay[$(t)]) && void 0 !== n ? n : et(t).enabled),
    verified: ee(e),
    detectable: en(e)
  };
  if (null != e.id && null != Y[e.id]) {
    let t = Y[e.id];
    i.overlayWarn = t.warn
  }
  return i
}

function es() {
  let e = !1;
  return G = o.values(N.default.libraryApplications).reduce((t, n) => {
    let i = R.default.getDetectableGame(n.id);
    if (null == i) return t;
    let r = O.default.getLaunchOptions(n.id, n.branchId);
    for (let s of r) {
      let r = "".concat(n.id, ":").concat(n.branchId);
      !U.has(r) && (e = !0, U.add(r));
      let {
        fullExecutablePath: a
      } = s, o = a.replace(/\\/g, "/").toLowerCase();
      V[o] = i.id, t.push({
        id: i.id,
        name: i.name,
        exePath: o,
        cmdLine: "",
        lastFocused: 0,
        add: !0
      })
    }
    return t
  }, []), e && ea(), e
}

function ea() {
  if (!__OVERLAY__ && C.isPlatformEmbedded) {
    let e = [...G, ...o.values(H.gameOverrides)];
    v.default.setGameCandidateOverrides(e)
  }
}

function eo(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    let t = H.gamesSeen.some(t => {
      if (t.name === e.name) {
        if (e.lastFocused) {
          t.lastFocused = e.lastFocused;
          let n = H.gameOverrides[$(e)];
          null != n && (n.lastFocused = e.lastFocused)
        }
        return Q(t, e), !0
      }
      return !1
    });
    if (t);
    else {
      if (e.hidden) return;
      H.gamesSeen.unshift(function(e) {
        let t = {
          exePath: e.exePath,
          cmdLine: e.cmdLine,
          lastFocused: e.lastFocused
        };
        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), Q(t, e), t
      }(e))
    }
  }), H.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ei(), g.default.setRecentGames(el().map(e => er(e))))
}

function el() {
  let e = o.values(H.gameOverrides),
    t = H.gamesSeen.filter(e => void 0 === H.gameOverrides[$(e)]);
  return t.concat(e)
}!__OVERLAY__ && (0, C.isDesktop)() && (j = function() {
  let e = [],
    t = new Set;
  i = {};
  let n = R.default.games;
  for (let e of n) {
    var r, s, a, o;
    Y[e.id] = {
      compatibilityHook: null !== (r = e.overlayCompatibilityHook) && void 0 !== r ? r : E.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
      warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : E.DEFAULT_OVERLAY_OPTIONS.warn,
      enabled: null !== (a = e.overlay) && void 0 !== a ? a : E.DEFAULT_OVERLAY_OPTIONS.enabled,
      allowHook: null !== (o = e.hook) && void 0 !== o ? o : E.DEFAULT_OVERLAY_OPTIONS.allowHook,
      supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    }
  } [...n, ...b].forEach(n => {
    var i;
    let r = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
        let {
          os: t
        } = e;
        return t === (0, C.getPlatformName)()
      }) : [],
      s = {};
    r.forEach(e => {
      let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
      null == s[n] && (s[n] = []), s[n].push(e.name), e.isLauncher && t.add(e.name)
    }), Object.keys(s).forEach(t => e.push({
      name: n.name,
      id: n.id,
      executables: s[t],
      cmdLine: "null" !== t ? t : null
    }))
  }), e = e.filter(e => null != e.executables && e.executables.length > 0), v.default.setObservedGamesCallback(e, e => {
    let n = [],
      r = {};
    e = e.filter(e => (e.distributor = function(e) {
      if (null != V[e.exePath]) return D.Distributors.DISCORD;
      if (/steamapps/.test(e.cmdLine)) return D.Distributors.STEAM;
      if (/-epicapp/.test(e.cmdLine)) return D.Distributors.EPIC;
      return e.distributor
    }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (r[e.id] = e), e.windowHandle = function(e, t) {
      if (void 0 === t) {
        let t = v.default.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
          let n = t.getWindowHandleFromPid(e);
          return null != n && "0" !== n ? n : null
        }
        return null
      }
      return "0" === t ? null : t
    }(e.pid, e.windowHandle), null == b.find(t => {
      let {
        name: n
      } = t;
      return n === e.name
    }) || (n.push(e), !1)));
    let s = n.filter(Z).length;
    s !== W && (W = s, f.default.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: W
    })), k = e, F = n, i = r, J()
  }), ea()
});
class eu extends c.default.Store {
  initialize() {
    var e, t, n, i;
    let r = null !== (e = d.default.get(L)) && void 0 !== e ? e : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableDetection: {}
    };
    H.gameOverrides = {};
    let s = !1;
    if (o.values(null !== (t = r.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
        let t = $(e);
        H.gameOverrides[t] = e
      }), H.enableOverlay = null !== (n = r.enableOverlay) && void 0 !== n ? n : {}, H.enableDetection = null !== (i = r.enableDetection) && void 0 !== i ? i : {}, ea(), Array.isArray(r.gamesSeen))
      for (let e of r.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, s = !0);
    eo(r.gamesSeen), this.waitFor(R.default), this.syncWith([N.default, R.default, O.default], o.throttle(es, 1e3)), s && ei()
  }
  getVisibleGame() {
    return null != x && (x.hidden || !en(x)) ? null : x
  }
  getCurrentGameForAnalytics() {
    return x
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of k) null != V[t.exePath] && e.push(V[t.exePath]);
    return e
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => R.default.getGameByName(e.name)).filter(I.isNotNullish).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null !== (t = k.find(t => t.pid === e)) && void 0 !== t ? t : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? null != t.id ? i[t.id] : null : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : {
      ...Y[t.id]
    }
  }
  shouldElevateProcessForPID(e) {
    return null != K && K === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != z && z === e
  }
  getCandidateGames() {
    return w.filter(e => e.hidden || null == e.id).filter(e => void 0 === H.gameOverrides[$(e)])
  }
  getRunningGames() {
    return k
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = el();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = $(e);
        n = n.filter(e => $(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return H.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return F.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(H.gameOverrides)
  }
  getOverrideForGame(e) {
    return H.gameOverrides[$(e)]
  }
  getGameOverlayStatus(e) {
    if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return P.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = et(e);
    return t.enabled ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null !== (n = null === (t = F.find(t => (0, S.default)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
  }
  get canShowAdminWarning() {
    return M
  }
}
eu.displayName = "RunningGameStore";
var ec = new eu(f.default, {
  RUNNING_GAMES_CHANGE: function(e) {
    eo(k)
  },
  CANDIDATE_GAMES_CHANGE: function(e) {
    w = e.games
  },
  PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
    M = !1
  },
  PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    K = t, z = null
  },
  PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
    K = null
  },
  PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    z = t, K = null
  },
  RUNNING_GAME_ADD_OVERRIDE: function(e) {
    let t;
    let n = e.pid,
      i = k.find(e => e.pid === n);
    if (null == i) {
      let e = w.find(e => e.pid === n);
      if (null == e) return;
      (i = {
        ...e
      }).hidden = !1, k.push(i), t = $(i)
    } else t = $(i), i.hidden && (B[t] = !0), i.hidden = !1;
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), H.gameOverrides[t] = {
      ...i,
      add: !0
    }, eo(k), ea(), ei(), J()
  },
  RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
    if (H.enableOverlay[$(e.game)] = e.newEnabledValue, ei(), !__OVERLAY__) {
      let t = null != e.game.id ? R.default.getDetectableGame(e.game.id) : null;
      null != t && T.default.track(D.AnalyticEvents.OVERLAY_TOGGLED, {
        enabled: e.newEnabledValue,
        setting_type: "overlay toggled - game",
        application_id: t.id,
        application_name: t.name
      })
    }
  },
  RUNNING_GAME_TOGGLE_DETECTION: function(e) {
    let {
      game: t
    } = e, n = en(t);
    H.enableDetection[$(t)] = !n, ei()
  },
  RUNNING_GAME_EDIT_NAME: function(e) {
    let t = $(e.game),
      n = H.gameOverrides[t];
    if (null == n) {
      var i;
      (n = {
        name: (i = e.game).name,
        exePath: i.exePath,
        cmdLine: i.cmdLine,
        lastFocused: i.lastFocused
      }).add = !0
    }
    n.name = e.newName;
    let r = $(n);
    delete H.gameOverrides[t], H.gameOverrides[r] = n, X(H.enableOverlay, t, r), X(H.enableDetection, t, r), X(B, t, r), H.gamesSeen.forEach(n => {
      $(n) === t && (n.name = e.newName)
    });
    let s = !1;
    k.forEach(n => {
      $(n) === t && (n.name = e.newName, s = !0)
    }), ea(), ei(), s && J()
  },
  RUNNING_GAME_DELETE_ENTRY: function(e) {
    let t = $(e.game);
    delete H.gameOverrides[t], delete H.enableOverlay[t], delete H.enableDetection[t], H.gamesSeen = H.gamesSeen.filter(e => $(e) !== t), B[t] && (k.forEach(e => {
      t === $(e) && (e.hidden = !0)
    }), delete B[t], J()), ea(), ei()
  },
  GAMES_DATABASE_UPDATE: j,
  GAME_LAUNCH_SUCCESS: function(e) {
    var t;
    if (__OVERLAY__ || !C.isPlatformEmbedded) return;
    let n = v.default.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = R.default.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
  },
  GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
    ea()
  }
})
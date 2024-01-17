"use strict";
let i;
n.r(t), n.d(t, {
  gameInDatabase: function() {
    return et
  },
  getOverlayGameStatus: function() {
    return en
  },
  transformForGameSettings: function() {
    return es
  },
  default: function() {
    return ed
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
  g = n("718517"),
  I = n("269180"),
  C = n("449008"),
  v = n("773336"),
  A = n("50885"),
  R = n("819068"),
  N = n("546463"),
  O = n("686470"),
  D = n("535974"),
  y = n("49111"),
  P = n("6791");
let L = new p.default("RunningGameStore"),
  b = "RunningGameStore",
  M = [{
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
    name: h.default.get(y.PlatformTypes.SPOTIFY).name
  }],
  U = !0,
  G = new Set,
  w = [],
  k = [],
  x = [],
  F = null,
  V = [],
  B = {},
  H = {},
  j = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableDetection: {}
  },
  Y = function() {},
  W = {},
  K = 0,
  z = null,
  q = null,
  X = {};

function Q(e, t, n) {
  let i = e[t];
  void 0 !== i && (delete e[t], e[n] = i)
}

function Z(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function J(e) {
  return M.some(t => t.name === e.name && !0 === t.streamerTool)
}

function $() {
  if (x.length > 0) {
    let e = F;
    F = x[0], null != e && F.pid === e.pid ? F.start = e.start : F.start = Date.now()
  } else F = null;
  let e = [];
  for (let t of x) !(t.pid in X) && (X[t.pid] = t, e.push(t));
  let t = [];
  for (let e of Object.values(X)) !x.some(t => t.pid === e.pid) && (t.push(e), delete X[e.pid]);
  L.info("games", {
    runningGames: x,
    added: e,
    removed: t,
    previousGames: X
  }), f.default.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: x,
    added: e,
    removed: t
  })
}

function ee(e) {
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}

function et(e) {
  let t = N.default.getGameByName(e.name);
  return null != t || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
}

function en(e) {
  if (e.isLauncher) return {
    source: "LAUNCHER",
    enabled: !1,
    overlayMethod: P.OverlayMethod.Disabled
  };
  let t = N.default.getGameByName(e.name);
  if (null != t) {
    let e = O.default.getActiveLibraryApplication(t.id);
    if (null != e) return {
      source: "LIBRARY_APPLICATION",
      enabled: e.isOverlayEnabled(),
      overlayMethod: P.OverlayMethod.Disabled
    }
  }
  let n = _.isOOPExperimentEnabled() && (0, R.supportsOutOfProcess)(),
    i = null == e.id ? null : W[e.id],
    r = n && null != i && i.supportsOutOfProcessOverlay,
    s = r ? P.OverlayMethod.OutOfProcess : P.OverlayMethod.Hook,
    a = m.OverlayStoredSettings.methodOverride;
  if (null != a && a !== P.OverlayMethod.Disabled) {
    let t = P.OverlayMethod[s],
      n = P.OverlayMethod[a];
    L.info("getOverlayGameStatus: overlay method overriden ".concat(t, " -> ").concat(n, " (").concat(e.name, ")")), s = a
  }
  let o = j.enableOverlay[ee(e)];
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
    overlayMethod: P.OverlayMethod.Hook
  }
}(s = r || (r = {})).LAUNCHER = "LAUNCHER", s.LIBRARY_APPLICATION = "LIBRARY_APPLICATION", s.USER_OVERRIDE = "USER_OVERRIDE", s.DATABASE = "DATABASE", s.DEFAULT = "DEFAULT";

function ei(e) {
  let t = j.enableDetection[ee(e)];
  return null == t || t
}

function er() {
  d.default.set(b, j)
}

function es(e) {
  var t, n;
  let i = {
    ...e,
    played: null != e.lastFocused && 0 !== e.lastFocused ? u(new Date(e.lastFocused * g.default.Millis.SECOND)).fromNow() : " ",
    overlay: (t = e, null !== (n = j.enableOverlay[ee(t)]) && void 0 !== n ? n : en(t).enabled),
    verified: et(e),
    detectable: ei(e)
  };
  if (null != e.id && null != W[e.id]) {
    let t = W[e.id];
    i.overlayWarn = t.warn
  }
  return i
}

function ea() {
  let e = !1;
  return w = o.values(O.default.libraryApplications).reduce((t, n) => {
    let i = N.default.getDetectableGame(n.id);
    if (null == i) return t;
    let r = D.default.getLaunchOptions(n.id, n.branchId);
    for (let s of r) {
      let r = "".concat(n.id, ":").concat(n.branchId);
      !G.has(r) && (e = !0, G.add(r));
      let {
        fullExecutablePath: a
      } = s, o = a.replace(/\\/g, "/").toLowerCase();
      B[o] = i.id, t.push({
        id: i.id,
        name: i.name,
        exePath: o,
        cmdLine: "",
        lastFocused: 0,
        add: !0
      })
    }
    return t
  }, []), e && eo(), e
}

function eo() {
  if (!__OVERLAY__ && v.isPlatformEmbedded) {
    let e = [...w, ...o.values(j.gameOverrides)];
    A.default.setGameCandidateOverrides(e)
  }
}

function el(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    let t = j.gamesSeen.some(t => {
      if (t.name === e.name) {
        if (e.lastFocused) {
          t.lastFocused = e.lastFocused;
          let n = j.gameOverrides[ee(e)];
          null != n && (n.lastFocused = e.lastFocused)
        }
        return Z(t, e), !0
      }
      return !1
    });
    if (t);
    else {
      if (e.hidden) return;
      j.gamesSeen.unshift(function(e) {
        let t = {
          exePath: e.exePath,
          cmdLine: e.cmdLine,
          lastFocused: e.lastFocused
        };
        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), Z(t, e), t
      }(e))
    }
  }), j.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), er(), I.default.setRecentGames(eu().map(e => es(e))))
}

function eu() {
  let e = o.values(j.gameOverrides),
    t = j.gamesSeen.filter(e => void 0 === j.gameOverrides[ee(e)]);
  return t.concat(e)
}!__OVERLAY__ && (0, v.isDesktop)() && (Y = function() {
  let e = [],
    t = new Set;
  i = {};
  let n = N.default.games;
  for (let e of n) {
    var r, s, a, o;
    W[e.id] = {
      compatibilityHook: null !== (r = e.overlayCompatibilityHook) && void 0 !== r ? r : E.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
      warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : E.DEFAULT_OVERLAY_OPTIONS.warn,
      enabled: null !== (a = e.overlay) && void 0 !== a ? a : E.DEFAULT_OVERLAY_OPTIONS.enabled,
      allowHook: null !== (o = e.hook) && void 0 !== o ? o : E.DEFAULT_OVERLAY_OPTIONS.allowHook,
      supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    }
  } [...n, ...M].forEach(n => {
    var i;
    let r = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
        let {
          os: t
        } = e;
        return t === (0, v.getPlatformName)()
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
  }), e = e.filter(e => null != e.executables && e.executables.length > 0), A.default.setObservedGamesCallback(e, e => {
    let n = [],
      r = {};
    e = e.filter(e => (e.distributor = function(e) {
      if (null != B[e.exePath]) return y.Distributors.DISCORD;
      if (/steamapps/.test(e.cmdLine)) return y.Distributors.STEAM;
      if (/-epicapp/.test(e.cmdLine)) return y.Distributors.EPIC;
      return e.distributor
    }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (r[e.id] = e), e.windowHandle = function(e, t) {
      if (void 0 === t) {
        let t = A.default.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
          let n = t.getWindowHandleFromPid(e);
          return null != n && "0" !== n ? n : null
        }
        return null
      }
      return "0" === t ? null : t
    }(e.pid, e.windowHandle), null == M.find(t => {
      let {
        name: n
      } = t;
      return n === e.name
    }) || (n.push(e), !1)));
    let s = n.filter(J).length;
    s !== K && (K = s, f.default.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: K
    })), x = e, V = n, i = r, $()
  }), eo()
});
class ec extends c.default.Store {
  initialize() {
    var e, t, n, i;
    let r = null !== (e = d.default.get(b)) && void 0 !== e ? e : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableDetection: {}
    };
    j.gameOverrides = {};
    let s = !1;
    if (o.values(null !== (t = r.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
        let t = ee(e);
        j.gameOverrides[t] = e
      }), j.enableOverlay = null !== (n = r.enableOverlay) && void 0 !== n ? n : {}, j.enableDetection = null !== (i = r.enableDetection) && void 0 !== i ? i : {}, eo(), Array.isArray(r.gamesSeen))
      for (let e of r.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, s = !0);
    el(r.gamesSeen), this.waitFor(N.default), this.syncWith([O.default, N.default, D.default], o.throttle(ea, 1e3)), s && er()
  }
  getVisibleGame() {
    return null != F && (F.hidden || !ei(F)) ? null : F
  }
  getCurrentGameForAnalytics() {
    return F
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of x) null != B[t.exePath] && e.push(B[t.exePath]);
    return e
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => N.default.getGameByName(e.name)).filter(C.isNotNullish).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null !== (t = x.find(t => t.pid === e)) && void 0 !== t ? t : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? null != t.id ? i[t.id] : null : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : {
      ...W[t.id]
    }
  }
  shouldElevateProcessForPID(e) {
    return null != z && z === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != q && q === e
  }
  getCandidateGames() {
    return k.filter(e => e.hidden || null == e.id).filter(e => void 0 === j.gameOverrides[ee(e)])
  }
  getRunningGames() {
    return x
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = eu();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = ee(e);
        n = n.filter(e => ee(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return j.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return V.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(j.gameOverrides)
  }
  getOverrideForGame(e) {
    return j.gameOverrides[ee(e)]
  }
  getGameOverlayStatus(e) {
    if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return L.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = en(e);
    return t.enabled ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null !== (n = null === (t = V.find(t => (0, S.default)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
  }
  get canShowAdminWarning() {
    return U
  }
}
ec.displayName = "RunningGameStore";
var ed = new ec(f.default, {
  RUNNING_GAMES_CHANGE: function(e) {
    el(x)
  },
  CANDIDATE_GAMES_CHANGE: function(e) {
    k = e.games
  },
  PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
    U = !1
  },
  PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    z = t, q = null
  },
  PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
    z = null
  },
  PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    q = t, z = null
  },
  RUNNING_GAME_ADD_OVERRIDE: function(e) {
    let t;
    let n = e.pid,
      i = x.find(e => e.pid === n);
    if (null == i) {
      let e = k.find(e => e.pid === n);
      if (null == e) return;
      (i = {
        ...e
      }).hidden = !1, x.push(i), t = ee(i)
    } else t = ee(i), i.hidden && (H[t] = !0), i.hidden = !1;
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), j.gameOverrides[t] = {
      ...i,
      add: !0
    }, el(x), eo(), er(), $()
  },
  RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
    if (j.enableOverlay[ee(e.game)] = e.newEnabledValue, er(), !__OVERLAY__) {
      let t = null != e.game.id ? N.default.getDetectableGame(e.game.id) : null;
      null != t && T.default.track(y.AnalyticEvents.OVERLAY_TOGGLED, {
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
    } = e, n = ei(t);
    j.enableDetection[ee(t)] = !n, er()
  },
  RUNNING_GAME_EDIT_NAME: function(e) {
    let t = ee(e.game),
      n = j.gameOverrides[t];
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
    let r = ee(n);
    delete j.gameOverrides[t], j.gameOverrides[r] = n, Q(j.enableOverlay, t, r), Q(j.enableDetection, t, r), Q(H, t, r), j.gamesSeen.forEach(n => {
      ee(n) === t && (n.name = e.newName)
    });
    let s = !1;
    x.forEach(n => {
      ee(n) === t && (n.name = e.newName, s = !0)
    }), eo(), er(), s && $()
  },
  RUNNING_GAME_DELETE_ENTRY: function(e) {
    let t = ee(e.game);
    delete j.gameOverrides[t], delete j.enableOverlay[t], delete j.enableDetection[t], j.gamesSeen = j.gamesSeen.filter(e => ee(e) !== t), H[t] && (x.forEach(e => {
      t === ee(e) && (e.hidden = !0)
    }), delete H[t], $()), eo(), er()
  },
  GAMES_DATABASE_UPDATE: Y,
  GAME_LAUNCH_SUCCESS: function(e) {
    var t;
    if (__OVERLAY__ || !v.isPlatformEmbedded) return;
    let n = A.default.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = N.default.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
  },
  GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
    eo()
  }
})
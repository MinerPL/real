"use strict";
l.r(t), l.d(t, {
  useSpotifyPlayAction: function() {
    return S
  },
  useSpotifySyncAction: function() {
    return h
  },
  useSpotifyJoinAction: function() {
    return I
  }
}), l("222007");
var n = l("884691"),
  a = l("446674"),
  s = l("862337"),
  i = l("84339"),
  r = l("271938"),
  o = l("158998"),
  u = l("662285"),
  d = l("782911"),
  c = l("629414"),
  f = l("53887"),
  m = l("486150"),
  p = l("555759"),
  E = l("450484");

function T(e) {
  let {
    currentUserTrackId: t,
    syncingWithUser: l,
    syncingWithParty: a
  } = e, [r, o] = n.useState(!1), [u] = n.useState(() => new s.Timeout), d = (0, i.default)(t);
  n.useEffect(() => {
    r && (t !== d || l || a) && (o(!1), u.stop())
  }, [t, d, l, a, r, u]);
  let c = n.useCallback(() => {
      o(!0), u.start(3e4, () => o(!1))
    }, [u]),
    f = n.useCallback(() => {
      o(!1), u.stop()
    }, [u]);
  return n.useEffect(() => () => u.stop(), [u]), {
    loading: r,
    startLoading: c,
    clearLoading: f
  }
}

function _(e, t) {
  return (0, a.useStateFromStoresObject)([u.default, r.default], () => (0, f.default)(u.default, r.default, t, e), [e, t])
}

function S(e, t, l) {
  let a = _(e, t),
    {
      notPlayable: s,
      isCurrentUser: i,
      playingSameTrack: r
    } = a,
    {
      loading: o,
      startLoading: u,
      clearLoading: f
    } = T(a),
    m = n.useCallback(() => {
      u(), (0, p.default)(a, E.SpotifyActionTypes.USER_ACTIVITY_PLAY, l).catch(f)
    }, [a, l, u, f]);
  return {
    label: (0, d.default)(a, E.SpotifyActionTypes.USER_ACTIVITY_PLAY),
    tooltip: (0, c.default)(a, E.SpotifyActionTypes.USER_ACTIVITY_PLAY),
    disabled: !o && (i || s || r),
    loading: o,
    onClick: m,
    spotifyData: a
  }
}

function h(e, t, l, a) {
  let s = null != a ? a : o.default.getName(t),
    i = _(e, t),
    {
      syncingWithUser: r,
      syncingWithParty: u,
      isCurrentUser: f
    } = i,
    {
      loading: p,
      startLoading: S,
      clearLoading: h
    } = T(i),
    I = n.useCallback(() => {
      S(), (0, m.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_SYNC, l).catch(h)
    }, [i, l, S, h]);
  return {
    label: (0, d.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_SYNC),
    tooltip: (0, c.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_SYNC, s),
    disabled: !p && (f || r || u),
    loading: p,
    onClick: I,
    spotifyData: i
  }
}

function I(e, t, l) {
  let a = _(e, t),
    {
      notPlayable: s,
      syncingWithUser: i,
      syncingWithParty: r,
      isCurrentUser: o
    } = a,
    {
      loading: u,
      startLoading: f,
      clearLoading: p
    } = T(a),
    S = n.useCallback(() => {
      f(), (0, m.default)(a, E.SpotifyActionTypes.EMBED_SYNC, l).catch(p)
    }, [a, l, f, p]);
  return {
    label: (0, d.default)(a, E.SpotifyActionTypes.EMBED_SYNC),
    tooltip: (0, c.default)(a, E.SpotifyActionTypes.EMBED_SYNC),
    disabled: !u && (o || i || r || s),
    loading: u,
    onClick: S,
    spotifyData: a
  }
}
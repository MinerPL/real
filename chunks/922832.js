"use strict";
n.r(t), n.d(t, {
  FAMILY_CENTER_REFETCH_COOLDOWN: function() {
    return v
  },
  MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: function() {
    return M
  },
  MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: function() {
    return P
  },
  FAMILY_CENTER_REQUEST_SECTION_HEIGHT: function() {
    return D
  },
  FAMILY_CENTER_REQUEST_ROW_HEIGHT: function() {
    return y
  },
  FAMILY_CENTER_REQUEST_QR_CODE_URL: function() {
    return x
  },
  FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: function() {
    return b
  },
  QR_CODE_AUTO_HIDE_TIMEOUT: function() {
    return U
  },
  PLACEHOLDER_QR_CODE_URL: function() {
    return G
  },
  FAMILY_CENTER_SUB_ROUTES: function() {
    return j
  },
  UserLinkStatus: function() {
    return i
  },
  TeenActionDisplayType: function() {
    return l
  },
  FamilyCenterSubPages: function() {
    return r
  },
  FamilyCenterSubPageAnalyticsIds: function() {
    return o
  },
  FamilyCenterPageLocation: function() {
    return u
  },
  FamilyCenterPageLocationAnalyticsIds: function() {
    return d
  },
  FamilyCenterAction: function() {
    return c
  },
  ACTION_TO_TEXT: function() {
    return k
  },
  PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: function() {
    return w
  },
  ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: function() {
    return F
  }
}), n("222007");
var a, s, i, l, r, o, u, d, c, E, f, _, h, C, T, I, S, N, A, p, m, g, R = n("447669"),
  O = n("718517"),
  L = n("782340");
let v = 30 * O.default.Millis.SECOND,
  M = 8,
  P = 3,
  D = 26,
  y = 64,
  x = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
  b = 4,
  U = 5 * O.default.Millis.MINUTE,
  G = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  j = (0, R.wrapPaths)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
(_ = a || (a = {}))[_.DM_MESSAGE_SEND = 1] = "DM_MESSAGE_SEND", _[_.GDM_MESSAGE_SEND = 2] = "GDM_MESSAGE_SEND", _[_.MESSAGE_REACT = 3] = "MESSAGE_REACT", _[_.ADD_FRIEND = 4] = "ADD_FRIEND", _[_.SEND_CALL = 5] = "SEND_CALL", _[_.CALL_JOIN = 6] = "CALL_JOIN", _[_.GUILD_JOIN = 7] = "GUILD_JOIN", (h = s || (s = {}))[h.PARENT = 1] = "PARENT", h[h.CHILD = 2] = "CHILD", (C = i || (i = {}))[C.PENDING = 1] = "PENDING", C[C.ACTIVE = 2] = "ACTIVE", C[C.INACTIVE = 3] = "INACTIVE", C[C.DECLINED = 4] = "DECLINED", C[C.EXPIRED = 5] = "EXPIRED", (T = l || (l = {}))[T.USER_ADD = 1] = "USER_ADD", T[T.GUILD_ADD = 2] = "GUILD_ADD", T[T.USER_INTERACTION = 3] = "USER_INTERACTION", T[T.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", T[T.USER_CALLED = 5] = "USER_CALLED", (I = r || (r = {})).ACTIVITY = "ACTIVITY", I.REQUESTS = "REQUESTS", I.SETTINGS = "SETTINGS", (S = o || (o = {}))[S.ACTIVITY = 0] = "ACTIVITY", S[S.REQUESTS = 1] = "REQUESTS", S[S.SETTINGS = 2] = "SETTINGS", (N = u || (u = {})).SIDENAV = "SIDENAV", N.SETTINGS = "SETTINGS", (A = d || (d = {}))[A.SIDENAV = 0] = "SIDENAV", A[A.SETTINGS = 1] = "SETTINGS", (p = c || (c = {}))[p.TabChange = 0] = "TabChange", p[p.ShowQRCodeModal = 1] = "ShowQRCodeModal", p[p.RevealQRCode = 2] = "RevealQRCode", p[p.ScanQRCodeButton = 3] = "ScanQRCodeButton", p[p.ScanQRCode = 4] = "ScanQRCode", p[p.LoadMore = 5] = "LoadMore", p[p.SelectTeen = 6] = "SelectTeen", p[p.HideQRCode = 7] = "HideQRCode";
let k = new Map([
  [3, {
    tooltipHeader: () => L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_HEADER,
    tooltipDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
    sectionHeader: e => L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_TODAY,
      yesterday: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_YESTERDAY,
      days: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_DAYS
    })
  }],
  [5, {
    tooltipHeader: () => L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_HEADER,
    tooltipDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
    sectionHeader: e => L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_TODAY,
      yesterday: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_YESTERDAY,
      days: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_DAYS
    })
  }],
  [1, {
    tooltipHeader: () => L.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_HEADER,
    tooltipDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
    sectionHeader: e => L.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_TODAY,
      yesterday: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_YESTERDAY,
      days: L.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_DAYS
    })
  }],
  [2, {
    tooltipHeader: () => L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_HEADER,
    tooltipDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
    sectionHeader: e => L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN
  }],
  [4, {
    tooltipHeader: () => L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_HEADER,
    tooltipDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN,
    sectionHeader: e => L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT : L.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN
  }]
]);
(m = E || (E = {}))[m.CHECK = 0] = "CHECK", m[m.X = 1] = "X", (g = f || (f = {}))[g.GENERIC_ERROR = 0] = "GENERIC_ERROR", g[g.INELIGIBLE_FOR_FAMILY_CENTER = 1] = "INELIGIBLE_FOR_FAMILY_CENTER", g[g.PENDING_REQUEST_EXISTS = 2] = "PENDING_REQUEST_EXISTS", g[g.MAX_CONNECTIONS_REACHED = 3] = "MAX_CONNECTIONS_REACHED";
let w = () => ({
    seconds: L.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_SECONDS,
    minutes: L.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_MINUTES,
    hours: L.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_HOURS,
    yesterday: L.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_YESTERDAY,
    days: L.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DAYS,
    date: L.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DATE
  }),
  F = () => ({
    seconds: L.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_SECONDS,
    minutes: L.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_MINUTES,
    hours: L.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_HOURS,
    yesterday: L.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_YESTERDAY,
    days: L.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DAYS,
    date: L.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DATE
  })
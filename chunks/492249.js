"use strict";
var i, r, s, a, o, l, u, c, d, f;
n.r(t), n.d(t, {
  RPC_SCOPE_CONFIG: function() {
    return i
  },
  RPC_PRIVATE_SCOPE: function() {
    return E
  },
  RPC_PRIVATE_LIMITED_SCOPE: function() {
    return h
  },
  RPC_LOCAL_SCOPE: function() {
    return p
  },
  RPC_AUTHENTICATED_SCOPE: function() {
    return _
  },
  RPCDeepLinks: function() {
    return r
  },
  RPCErrors: function() {
    return s
  },
  DispatchErrorCodes: function() {
    return a
  },
  TransportTypes: function() {
    return o
  }
}), (l = i || (i = {})).ANY = "$any", l.ALL = "$all";
let E = "RPC_PRIVATE_SCOPE",
  h = "RPC_PRIVATE_LIMITED_SCOPE",
  p = "RPC_LOCAL_SCOPE",
  _ = "RPC_AUTHENTICATED_SCOPE";
(u = r || (r = {})).USER_SETTINGS = "USER_SETTINGS", u.CHANGELOG = "CHANGELOG", u.LIBRARY = "LIBRARY", u.STORE_HOME = "STORE_HOME", u.STORE_LISTING = "STORE_LISTING", u.CHANNEL = "CHANNEL", u.PICK_GUILD_SETTINGS = "PICK_GUILD_SETTINGS", (c = s || (s = {}))[c.UNKNOWN_ERROR = 1e3] = "UNKNOWN_ERROR", c[c.SERVICE_UNAVAILABLE = 1001] = "SERVICE_UNAVAILABLE", c[c.TRANSACTION_ABORTED = 1002] = "TRANSACTION_ABORTED", c[c.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", c[c.INVALID_COMMAND = 4002] = "INVALID_COMMAND", c[c.INVALID_GUILD = 4003] = "INVALID_GUILD", c[c.INVALID_EVENT = 4004] = "INVALID_EVENT", c[c.INVALID_CHANNEL = 4005] = "INVALID_CHANNEL", c[c.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS", c[c.INVALID_CLIENTID = 4007] = "INVALID_CLIENTID", c[c.INVALID_ORIGIN = 4008] = "INVALID_ORIGIN", c[c.INVALID_TOKEN = 4009] = "INVALID_TOKEN", c[c.INVALID_USER = 4010] = "INVALID_USER", c[c.INVALID_INVITE = 4011] = "INVALID_INVITE", c[c.INVALID_ACTIVITY_JOIN_REQUEST = 4012] = "INVALID_ACTIVITY_JOIN_REQUEST", c[c.INVALID_LOBBY = 4013] = "INVALID_LOBBY", c[c.INVALID_LOBBY_SECRET = 4014] = "INVALID_LOBBY_SECRET", c[c.INVALID_ENTITLEMENT = 4015] = "INVALID_ENTITLEMENT", c[c.INVALID_GIFT_CODE = 4016] = "INVALID_GIFT_CODE", c[c.INVALID_GUILD_TEMPLATE = 4017] = "INVALID_GUILD_TEMPLATE", c[c.INVALID_SOUND = 4018] = "INVALID_SOUND", c[c.OAUTH2_ERROR = 5e3] = "OAUTH2_ERROR", c[c.SELECT_CHANNEL_TIMED_OUT = 5001] = "SELECT_CHANNEL_TIMED_OUT", c[c.GET_GUILD_TIMED_OUT = 5002] = "GET_GUILD_TIMED_OUT", c[c.SELECT_VOICE_FORCE_REQUIRED = 5003] = "SELECT_VOICE_FORCE_REQUIRED", c[c.INVALID_ACTIVITY_SECRET = 5005] = "INVALID_ACTIVITY_SECRET", c[c.NO_ELIGIBLE_ACTIVITY = 5006] = "NO_ELIGIBLE_ACTIVITY", c[c.LOBBY_FULL = 5007] = "LOBBY_FULL", c[c.PURCHASE_CANCELED = 5008] = "PURCHASE_CANCELED", c[c.PURCHASE_ERROR = 5009] = "PURCHASE_ERROR", c[c.UNAUTHORIZED_FOR_ACHIEVEMENT = 5010] = "UNAUTHORIZED_FOR_ACHIEVEMENT", c[c.RATE_LIMITED = 5011] = "RATE_LIMITED", (d = a || (a = {}))[d.APPLICATION_NOT_FOUND = 101] = "APPLICATION_NOT_FOUND", d[d.DISK_LOW = 2022] = "DISK_LOW", d[d.DISK_PERMISSION_DENIED = 2025] = "DISK_PERMISSION_DENIED", d[d.POST_INSTALL_FAILED = 2025] = "POST_INSTALL_FAILED", d[d.REDISTRIBUTABLE_INSTALL_FAILED = 2026] = "REDISTRIBUTABLE_INSTALL_FAILED", d[d.APPLICATION_LOAD_FAILED = 2034] = "APPLICATION_LOAD_FAILED", d[d.DESERIALIZATION_FAILED = 2047] = "DESERIALIZATION_FAILED", d[d.INTERRUPTED = 2055] = "INTERRUPTED", d[d.MAX_REQUEST_RETRIES_EXCEEDED = 2058] = "MAX_REQUEST_RETRIES_EXCEEDED", d[d.AUTHENTICATION_FAILED = 2063] = "AUTHENTICATION_FAILED", d[d.IO_PERMISSION_DENIED = 2064] = "IO_PERMISSION_DENIED", d[d.NO_MANIFESTS = 2065] = "NO_MANIFESTS", d[d.POST_INSTALL_CANCELLED = 2066] = "POST_INSTALL_CANCELLED", d[d.API_ERROR = 2069] = "API_ERROR", d[d.FILE_NAME_TOO_LONG = 2072] = "FILE_NAME_TOO_LONG", d[d.NOT_ENTITLED = 2073] = "NOT_ENTITLED", d[d.APPLICATION_LOCK_FAILED = 2076] = "APPLICATION_LOCK_FAILED", d[d.NOT_DIRECTORY = 2077] = "NOT_DIRECTORY", d[d.INVALID_DRIVE = 2078] = "INVALID_DRIVE", d[d.DISK_FULL = 2080] = "DISK_FULL", (f = o || (o = {})).IPC = "ipc", f.WEBSOCKET = "ws", f.HTTP = "http", f.POST_MESSAGE = "post_message"
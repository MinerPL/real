"use strict";
n.r(e), n.d(e, {
  uploadDebugLogFiles: function() {
    return h
  },
  getBlindIds: function() {
    return E
  },
  uploadCallscopeLogs: function() {
    return L
  },
  uploadCallscopeLogFiles: function() {
    return b
  }
}), n("222007");
var o = n("872717"),
  a = n("869586"),
  l = n("49671"),
  r = n("890747"),
  i = n("254490"),
  c = n("821316"),
  s = n("605250"),
  u = n("836403"),
  d = n("825287"),
  g = n("929331"),
  p = n("49111");
let f = new s.default("DebugUploadManager");
async function h(t, e) {
  await w(t), await (0, r.uploadRtcLogFiles)(3670016, e)
}
class m {
  static getTrimmedFilename(t) {
    let e = /^channel\.\d+\.(.+)$/.exec(t);
    return null == e || e.length < 2 || null == e[1] ? "unknown" : e[1]
  }
  static getChannelId(t) {
    let e = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(t);
    return null == e || e.length < 2 || null == e[1] ? "unknown" : e[1]
  }
}
async function E(t, e, n) {
  let o = new a.BlindID(n),
    l = await o.blind(t),
    r = await o.blind(e);
  return {
    blindChannelId: l,
    blindUserId: r
  }
}
async function L(t, e, n, o) {
  var a;
  if (!__OVERLAY__) {
    if ((null === l.default || void 0 === l.default ? void 0 : null === (a = l.default.fileManager) || void 0 === a ? void 0 : a.getCallscopeLogFiles) == null) {
      f.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
      return
    }
    if (!("crypto" in window)) {
      f.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
      return
    }
    try {
      let {
        blindChannelId: a,
        blindUserId: r
      } = await E(t, e, n), i = "channel blind(".concat(t, "): ").concat(a, ", user blind(").concat(e, "): ").concat(r);
      f.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(o, ", ").concat(i));
      let c = await l.default.fileManager.getCallscopeLogFiles(a);
      await b(r, c)
    } catch (t) {
      f.error("uploadCallscopeLogs: Error uploading logs ".concat(null == t ? void 0 : t.text), t)
    }
  }
}
async function b(t, e) {
  try {
    if (0 === e.length) {
      f.error("uploadCallscopeLogFiles: No files found.");
      return
    }
    for (let n of e.map(t => i.transformNativeFile(t, "application/octet-stream"))) {
      f.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
      let e = m.getChannelId(n.name);
      try {
        let a = await o.default.post({
            url: p.Endpoints.CALLSCOPE_LOGS(e, t, m.getTrimmedFilename(n.name)),
            headers: {
              "Content-Type": "application/octet-stream"
            },
            body: n
          }),
          l = a.status >= 200 && a.status <= 299;
        !l && f.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(a.status, ", ").concat(a.text))
      } catch (t) {
        f.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == t ? void 0 : t.text), t)
      }
    }
  } catch (t) {
    f.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == t ? void 0 : t.text), t)
  }
}
async function w(t) {
  try {
    let e = c.stringify(),
      n = "",
      a = await (0, u.getPushNotificationLogs)().then(t => (0, u.serializePushNotificationLogs)(t)),
      l = e.length + n.length + a.length;
    if (l > 9437184) {
      let t = 1 - 9437184 / l;
      e = e.slice(e.length - Math.floor(e.length * t)), n = n.slice(n.length - Math.floor(n.length * t)), a = a.slice(a.length - Math.floor(a.length * t))
    }
    let r = null,
      i = "\n    ".concat((0, g.default)(r), "\n\n    ").concat(JSON.stringify((0, d.default)(), void 0, 2), "\n    Logs:\n    ").concat(e, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(a, "\n    ");
    c.clear();
    let s = p.Endpoints.DEBUG_LOG(t, "discord_app_logs");
    await o.default.post({
      url: s,
      body: i,
      retries: 3,
      headers: {
        "Content-Type": "text/plain"
      },
      oldFormErrors: !0
    })
  } catch (t) {
    f.error("uploadAppLogFiles: upload app log files error ".concat(t.message))
  }
}
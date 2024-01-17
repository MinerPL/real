"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("860677");
var s = n("446674"),
  a = n("913144"),
  l = n("377253");
let i = Object.freeze([]),
  r = {},
  o = {},
  u = {},
  d = {},
  c = {};

function f(e, t) {}

function h() {
  c = {}
}

function C(e, t) {
  let n = r[e];
  return null != n && (r[e] = n.filter(e => e.id !== t), delete o[t], delete u[t], n.length !== r[e].length)
}

function p(e, t) {
  let n = r[e];
  if (null == n) return !1;
  r[e] = n.map(e => e.id === t.id ? {
    ...e,
    ...t
  } : e);
  let s = u[t.id];
  null != s && null != d[s.id] && (d[s.id] = {
    ...d[s.id],
    ...t
  })
}
class m extends s.default.Store {
  initialize() {
    this.waitFor(l.default)
  }
  getFiles(e) {
    var t;
    return null !== (t = r[e]) && void 0 !== t ? t : i
  }
  getMessageForFile(e) {
    return u[e]
  }
  getUploaderFileForMessageId(e) {
    return d[e]
  }
  getUploadAttachments(e) {
    if (null != e) return c[e]
  }
}
m.displayName = "UploadStore";
var g = new m(a.default, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  LOGOUT: function() {
    c = {}
  },
  UPLOAD_START: function(e) {
    var t;
    let {
      channelId: n,
      file: s,
      uploader: a,
      message: l
    } = e;
    if (a._aborted || a._errored) return;
    let c = null !== (t = r[n]) && void 0 !== t ? t : i;
    o[s.id] = a, r[n] = [...c, s], u[s.id] = l;
    let {
      items: f
    } = s;
    null != f && (d[l.id] = {
      ...s,
      items: f
    }), l.nonce
  },
  UPLOAD_COMPRESSION_PROGRESS: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    p(t, n)
  },
  UPLOAD_PROGRESS: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    p(t, n)
  },
  UPLOAD_COMPLETE: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    return C(t, n.id)
  },
  UPLOAD_FAIL: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    return C(t, n.id)
  },
  UPLOAD_CANCEL_REQUEST: function(e) {
    let {
      file: t
    } = e, n = o[t.id];
    if (null == n) return !1;
    setImmediate(() => {
      var e;
      return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n)
    })
  },
  UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
    let {
      file: t,
      itemId: n
    } = e, s = o[t.id];
    if (null == s) return !1;
    setImmediate(() => s.cancelItem(n))
  },
  UPLOAD_FILE_UPDATE: function(e) {
    let {
      channelId: t,
      file: n
    } = e, s = u[n.id];
    null != s && s.nonce, p(t, n)
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
    let {
      file: t,
      messageId: n
    } = e;
    d[n] = t
  }
})
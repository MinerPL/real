"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("70102");
var a = n("446825"),
  s = n("44170"),
  i = n("917351"),
  l = n.n(i),
  r = n("605250"),
  o = n("50885"),
  u = n("856116"),
  d = n("470313"),
  c = n("56245"),
  E = n("49111");
let f = o.default.requireModule("discord_rpc").RPCIPC,
  _ = new r.default("RPCServer:IPC"),
  h = {
    HANDSHAKE: 0,
    FRAME: 1,
    CLOSE: 2,
    PING: 3,
    PONG: 4
  };

function C(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t
}

function T(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake
}

function I(e) {
  return new Promise((t, n) => {
    "string" == typeof e && (e = f.net.createConnection(e)), e.pause(), e.on("readable", () => {
      try {
        N(e)
      } catch (t) {
        e.end(S(h.CLOSE, {
          code: 1003,
          message: t.message
        })), e.destroy()
      }
    });
    let a = () => {
        try {
          e.end(), e.destroy()
        } catch (e) {}
      },
      s = Promise.race([new Promise(t => e.on("error", () => t())), new Promise((t, n) => {
        e.on("pong", () => n(Error("socket responded with pong")))
      }), new Promise((e, t) => {
        setTimeout(() => t(Error("socket alive timeout")), 1e3)
      })]).then(() => {
        a()
      }, e => {
        throw a(), e
      });
    return e.write(S(h.PING, l.uniqueId())), s.then(t, n)
  })
}

function S(e, t) {
  var n;
  t = JSON.stringify(t);
  let s = a.Buffer.byteLength(t),
    i = a.Buffer.alloc(8 + s);
  return i.writeInt32LE(e, 0), i.writeInt32LE(s, 4), i.write(t, 8, s), (n = i).buffer.slice(n.byteOffset, n.byteOffset + n.byteLength)
}

function N(e) {
  let t = e.read(8);
  if (null == t) return;
  let n = a.Buffer.from(t),
    s = n.readInt32LE(0),
    i = n.readInt32LE(4);
  if (!Object.values(h).includes(s) || i < 0) throw Error("protocol error");
  if (null == (t = e.read(i))) throw Error("data size does not match what was received");
  n = a.Buffer.from(t);
  let l = JSON.parse(n.toString());
  switch (s) {
    case h.PING:
      e.emit("ping", l), e.write(S(h.PONG, l));
      break;
    case h.PONG:
      e.emit("pong", l);
      break;
    case h.HANDSHAKE:
      if (T(e)) throw Error("already did handshake");
      C(e, !0), e.emit("handshake", l);
      break;
    case h.FRAME:
      if (!T(e)) throw Error("did not handshake");
      e.emit("request", l);
      break;
    case h.CLOSE:
      e.end(), e.destroy()
  }
  N(e)
}
class A extends d.default {
  send(e) {
    _.info("Socket Emit: ".concat(this.id), (0, u.default)(e)), this.socket.write(S(h.FRAME, e))
  }
  close(e, t) {
    this.socket.end(S(h.CLOSE, {
      code: e,
      message: t
    })), this.socket.destroy()
  }
  constructor(e, t, n) {
    super("ipc", t, n), this.socket = e
  }
}
class p extends s.EventEmitter {
  handleConnection(e) {
    C(e, !1), e.pause(), e.on("readable", () => {
      try {
        N(e)
      } catch (t) {
        e.end(S(h.CLOSE, {
          code: E.RPCCloseCodes.CLOSE_UNSUPPORTED,
          message: t.message
        })), e.destroy()
      }
    }), e.once("handshake", t => {
      let n;
      let a = t.client_id,
        s = +t.v;
      try {
        n = new A(e, s, "json")
      } catch (t) {
        e.end(S(h.CLOSE, {
          code: t.code,
          message: t.message
        })), e.destroy();
        return
      }
      _.info("Socket Opened: ".concat(n.id)), e.on("error", e => _.error("Socket Error: ".concat(e.message))), e.on("close", () => {
        _.info("Socket Close: ".concat(n.id)), this.emit("disconnect", n)
      }), (0, c.validateSocketClient)(n, null, a).then(() => {
        e.on("request", e => {
          _.info("Socket Message: ".concat(n.id), (0, u.default)(e)), this.emit("request", n, e)
        }), this.emit("connect", n)
      }).catch(e => {
        let {
          code: t,
          message: a
        } = e;
        return n.close(t, a)
      })
    })
  }
  constructor() {
    super();
    let e = f.net.createServer(e => this.handleConnection(e));
    e.on("error", e => _.error("Error: ".concat(e.message))), f.getAvailableSocket(I).then(t => {
      e.listen(t, () => {
        let t = "function" == typeof e.listening ? e.listening() : e.listening;
        t && _.info("Starting on ".concat(e.address()))
      })
    })
  }
}
var m = new p
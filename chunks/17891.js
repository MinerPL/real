"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var a, s = n("44170"),
  i = n("191225"),
  l = n("599110"),
  r = n("659500"),
  o = n("718517"),
  u = n("861309"),
  d = n("614818"),
  c = n("49111");
let f = 10 * o.default.Millis.SECOND,
  E = new Map,
  _ = new Set,
  h = (e, t, n) => {
    n([d.default.CLOSE, t], e)
  };
a = class extends s.EventEmitter {
  routeEvent(e, t, n, a) {
    if (!Array.isArray(n)) throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Protocol error");
    let [s, i] = n;
    switch (s) {
      case d.default.HANDSHAKE:
        if (null != e) throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Already connected");
        return this.handleHandshake(t, i, a);
      case d.default.FRAME:
        if (null == e) throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Not connected");
        return this.handleFrame(t, e, i);
      case d.default.CLOSE:
        if (null == e) throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Not connected");
        return this.handleClose(e, i);
      default:
        throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Invalid opcode")
    }
  }
  constructor(e, t, a, s) {
    var o;
    super(), o = this, this.disconnectSocket = function(e, t) {
      var n, a;
      let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      o.emit("disconnect", e, s ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : "Unknown");
      let [i] = null !== (a = Array.from(E.entries()).find(t => {
        let [n, a] = t;
        return a === e
      })) && void 0 !== a ? a : [null, null];
      null != i && E.delete(i)
    }, this.handleIFrameMount = e => {
      let {
        id: t
      } = e;
      _.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(i.default.getSelfEmbeddedActivities().entries()).forEach(e => {
          let [t, n] = e;
          l.default.track(c.AnalyticEvents.ACTIVITY_HANDSHAKE_TIMED_OUT, {
            application_id: t,
            channel_id: n.channelId,
            guild_id: n.guildId,
            timeout_ms: f
          })
        })
      }, f)
    }, this.handleIFrameUnmount = e => {
      var t;
      let {
        id: n
      } = e;
      _.delete(n);
      let [a, s] = null !== (t = Array.from(E.entries()).find(e => {
        let [t, a] = e;
        return a.frameId === n
      })) && void 0 !== t ? t : [null, null];
      null != s && null != a && (this.disconnectSocket(s, {
        code: c.RPCCloseCodes.CLOSE_NORMAL,
        message: "iFrame gone"
      }, !0), E.delete(a))
    }, this.handleMessage = (e, t, n) => {
      let a = E.get(t);
      try {
        this.routeEvent(a, t, e, n)
      } catch (e) {
        null != a ? this.disconnectSocket(a, {
          code: e.code,
          message: e.message
        }, !0) : h(t, {
          code: e.code,
          message: e.message
        }, n)
      }
    }, this.handleFrame = (e, t, n) => {
      var a;
      let s;
      if (e !== t.origin) throw new u.default(c.RPCCloseCodes.INVALID_ORIGIN, "Origin has changed");
      try {
        s = "string" == typeof n ? JSON.parse(n) : n
      } catch (e) {
        throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Payload not recognized encoding")
      }
      null === (a = this.onFrameHandled) || void 0 === a || a.call(this, s, this.logger, t), this.emit("request", t, s)
    }, this.handleHandshake = async (e, t, a) => {
      let s;
      null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
      let i = (await n.el("990599").then(n.t.bind(n, "990599", 23))).default;
      try {
        i.assert(t, i.object().required().keys({
          v: i.number().min(1).max(1).required(),
          encoding: i.string().equal("json").optional(),
          client_id: i.string().required(),
          frame_id: i.string().required()
        }))
      } catch (e) {
        throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, e.message)
      }
      let l = t.frame_id,
        r = !_.has(l);
      if (r) throw this.logger.error("Unrecognized frame ID ".concat(l)), new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Unrecognized frame ID ".concat(l));
      try {
        var o;
        s = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: a,
          frameId: l,
          version: Number(t.v),
          logger: this.logger,
          postClose: h,
          encoding: null !== (o = t.encoding) && void 0 !== o ? o : "json"
        })
      } catch (e) {
        throw this.logger.error("Error opening window socket ".concat(e)), e
      }
      this.logger.info("Socket Opened: ".concat(s.id));
      try {
        if (await this.validateSocketClient(s, e, t.client_id), !_.has(l)) throw this.logger.error("Frame ID ".concat(l, " no longer exists")), new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, "Unrecognized frame ID ".concat(l));
        E.set(e, s), _.delete(l), this.emit("connect", s), this.logger.info("Socket Validated: ".concat(s.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(s.id, ", ").concat(e.message)), e
      }
    }, this.handleClose = async (e, t) => {
      let a = (await n.el("990599").then(n.t.bind(n, "990599", 23))).default;
      try {
        a.assert(t, a.object().required().unknown(!0).keys({
          code: a.number().valid(Object.values(c.RPCCloseCodes)).required(),
          message: a.string().optional()
        }))
      } catch (e) {
        throw new u.default(c.RPCCloseCodes.CLOSE_UNSUPPORTED, e.message)
      }
      this.disconnectSocket(e, t)
    }, r.ComponentDispatch.subscribe(c.ComponentActions.IFRAME_MOUNT, this.handleIFrameMount), r.ComponentDispatch.subscribe(c.ComponentActions.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = a, this.onFrameHandled = s
  }
}
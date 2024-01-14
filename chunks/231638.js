n("70102"), n("222007"), n("424973"), n("101997"), n("781738"), n("274635"), n("506083"), n("808653"), ! function e(t, n, r) {
  function o(i, s) {
    if (!n[i]) {
      if (!t[i]) {
        if (!s) return (!0)(i, !0);
        if (a) return a(i, !0);
        var c = Error("Cannot find module '" + i + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = n[i] = {
        exports: {}
      };
      t[i][0].call(l.exports, function(e) {
        return o(t[i][1][e] || e)
      }, l, l.exports, e, t, n, r)
    }
    return n[i].exports
  }
  for (var a = void 0, i = 0; i < r.length; i++) o(r[i]);
  return o
}({
  1: [function(e, t, n) {
    "use strict";
    var r = (0, e("./adapter_factory.js").adapterFactory)({
      window: window
    });
    t.exports = r
  }, {
    "./adapter_factory.js": 2
  }],
  2: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.adapterFactory = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.window,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          shimChrome: !0,
          shimFirefox: !0,
          shimEdge: !0,
          shimSafari: !0
        },
        l = r.log,
        u = r.detectBrowser(t),
        d = {
          browserDetails: u,
          commonShim: c,
          extractVersion: r.extractVersion,
          disableLog: r.disableLog,
          disableWarnings: r.disableWarnings
        };
      switch (u.browser) {
        case "chrome":
          if (!o || !o.shimPeerConnection || !n.shimChrome) {
            l("Chrome shim is not included in this adapter release.");
            break
          }
          l("adapter.js shimming chrome."), d.browserShim = o, o.shimGetUserMedia(t), o.shimMediaStream(t), o.shimPeerConnection(t), o.shimOnTrack(t), o.shimAddTrackRemoveTrack(t), o.shimGetSendersWithDtmf(t), o.shimGetStats(t), o.shimSenderReceiverGetStats(t), o.fixNegotiationNeeded(t), c.shimRTCIceCandidate(t), c.shimConnectionState(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t), c.removeAllowExtmapMixed(t);
          break;
        case "firefox":
          if (!i || !i.shimPeerConnection || !n.shimFirefox) {
            l("Firefox shim is not included in this adapter release.");
            break
          }
          l("adapter.js shimming firefox."), d.browserShim = i, i.shimGetUserMedia(t), i.shimPeerConnection(t), i.shimOnTrack(t), i.shimRemoveStream(t), i.shimSenderGetStats(t), i.shimReceiverGetStats(t), i.shimRTCDataChannel(t), i.shimAddTransceiver(t), i.shimCreateOffer(t), i.shimCreateAnswer(t), c.shimRTCIceCandidate(t), c.shimConnectionState(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t);
          break;
        case "edge":
          if (!a || !a.shimPeerConnection || !n.shimEdge) {
            l("MS edge shim is not included in this adapter release.");
            break
          }
          l("adapter.js shimming edge."), d.browserShim = a, a.shimGetUserMedia(t), a.shimGetDisplayMedia(t), a.shimPeerConnection(t), a.shimReplaceTrack(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t);
          break;
        case "safari":
          if (!s || !n.shimSafari) {
            l("Safari shim is not included in this adapter release.");
            break
          }
          l("adapter.js shimming safari."), d.browserShim = s, s.shimRTCIceServerUrls(t), s.shimCreateOfferLegacy(t), s.shimCallbacksAPI(t), s.shimLocalStreamsAPI(t), s.shimRemoteStreamsAPI(t), s.shimTrackEventTransceiver(t), s.shimGetUserMedia(t), c.shimRTCIceCandidate(t), c.shimMaxMessageSize(t), c.shimSendThrowTypeError(t), c.removeAllowExtmapMixed(t);
          break;
        default:
          l("Unsupported browser!")
      }
      return d
    };
    var r = l(e("./utils")),
      o = l(e("./chrome/chrome_shim")),
      a = l(e("./edge/edge_shim")),
      i = l(e("./firefox/firefox_shim")),
      s = l(e("./safari/safari_shim")),
      c = l(e("./common_shim"));

    function l(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }
  }, {
    "./chrome/chrome_shim": 3,
    "./common_shim": 6,
    "./edge/edge_shim": 12,
    "./firefox/firefox_shim": 7,
    "./safari/safari_shim": 10,
    "./utils": 11
  }],
  3: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.shimGetDisplayMedia = n.shimGetUserMedia = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = e("./getusermedia");
    Object.defineProperty(n, "shimGetUserMedia", {
      enumerable: !0,
      get: function() {
        return o.shimGetUserMedia
      }
    });
    var a = e("./getdisplaymedia");
    Object.defineProperty(n, "shimGetDisplayMedia", {
      enumerable: !0,
      get: function() {
        return a.shimGetDisplayMedia
      }
    }), n.shimMediaStream = function(e) {
      e.MediaStream = e.MediaStream || e.webkitMediaStream
    }, n.shimOnTrack = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) !== "object" || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) i.wrapPeerConnectionEvent(e, "track", function(e) {
        return !e.transceiver && Object.defineProperty(e, "transceiver", {
          value: {
            receiver: e.receiver
          }
        }), e
      });
      else {
        Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
          get: function() {
            return this._ontrack
          },
          set: function(e) {
            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
          },
          enumerable: !0,
          configurable: !0
        });
        var t = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
          var n = this;
          return !this._ontrackpoly && (this._ontrackpoly = function(t) {
            t.stream.addEventListener("addtrack", function(r) {
              var o = void 0;
              o = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find(function(e) {
                return e.track && e.track.id === r.track.id
              }) : {
                track: r.track
              };
              var a = new Event("track");
              a.track = r.track, a.receiver = o, a.transceiver = {
                receiver: o
              }, a.streams = [t.stream], n.dispatchEvent(a)
            }), t.stream.getTracks().forEach(function(r) {
              var o = void 0;
              o = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find(function(e) {
                return e.track && e.track.id === r.id
              }) : {
                track: r
              };
              var a = new Event("track");
              a.track = r, a.receiver = o, a.transceiver = {
                receiver: o
              }, a.streams = [t.stream], n.dispatchEvent(a)
            })
          }, this.addEventListener("addstream", this._ontrackpoly)), t.apply(this, arguments)
        }
      }
    }, n.shimGetSendersWithDtmf = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
        var t = function(e, t) {
          return {
            track: t,
            get dtmf() {
              return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
            },
            _pc: e
          }
        };
        if (!e.RTCPeerConnection.prototype.getSenders) {
          e.RTCPeerConnection.prototype.getSenders = function() {
            return this._senders = this._senders || [], this._senders.slice()
          };
          var n = e.RTCPeerConnection.prototype.addTrack;
          e.RTCPeerConnection.prototype.addTrack = function(e, r) {
            var o = n.apply(this, arguments);
            return !o && (o = t(this, e), this._senders.push(o)), o
          };
          var o = e.RTCPeerConnection.prototype.removeTrack;
          e.RTCPeerConnection.prototype.removeTrack = function(e) {
            o.apply(this, arguments);
            var t = this._senders.indexOf(e); - 1 !== t && this._senders.splice(t, 1)
          }
        }
        var a = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(e) {
          var n = this;
          this._senders = this._senders || [], a.apply(this, [e]), e.getTracks().forEach(function(e) {
            n._senders.push(t(n, e))
          })
        };
        var i = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(e) {
          var t = this;
          this._senders = this._senders || [], i.apply(this, [e]), e.getTracks().forEach(function(e) {
            var n = t._senders.find(function(t) {
              return t.track === e
            });
            n && t._senders.splice(t._senders.indexOf(n), 1)
          })
        }
      } else if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
        var s = e.RTCPeerConnection.prototype.getSenders;
        e.RTCPeerConnection.prototype.getSenders = function() {
          var e = this,
            t = s.apply(this, []);
          return t.forEach(function(t) {
            return t._pc = e
          }), t
        }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
          get: function() {
            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
          }
        })
      }
    }, n.shimGetStats = function(e) {
      if (e.RTCPeerConnection) {
        var t = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
          var e = this,
            n = Array.prototype.slice.call(arguments),
            r = n[0],
            o = n[1],
            a = n[2];
          if (arguments.length > 0 && "function" == typeof r) return t.apply(this, arguments);
          if (0 === t.length && (0 == arguments.length || "function" != typeof r)) return t.apply(this, []);
          var i = function(e) {
              var t = {};
              return e.result().forEach(function(e) {
                var n = {
                  id: e.id,
                  timestamp: e.timestamp,
                  type: {
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate"
                  } [e.type] || e.type
                };
                e.names().forEach(function(t) {
                  n[t] = e.stat(t)
                }), t[n.id] = n
              }), t
            },
            s = function(e) {
              return new Map(Object.keys(e).map(function(t) {
                return [t, e[t]]
              }))
            };
          return arguments.length >= 2 ? t.apply(this, [function(e) {
            o(s(i(e)))
          }, r]) : new Promise(function(n, r) {
            t.apply(e, [function(e) {
              n(s(i(e)))
            }, r])
          }).then(o, a)
        }
      }
    }, n.shimSenderReceiverGetStats = function(e) {
      if (!!((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) {
        if (!("getStats" in e.RTCRtpSender.prototype)) {
          var t = e.RTCPeerConnection.prototype.getSenders;
          t && (e.RTCPeerConnection.prototype.getSenders = function() {
            var e = this,
              n = t.apply(this, []);
            return n.forEach(function(t) {
              return t._pc = e
            }), n
          });
          var n = e.RTCPeerConnection.prototype.addTrack;
          n && (e.RTCPeerConnection.prototype.addTrack = function() {
            var e = n.apply(this, arguments);
            return e._pc = this, e
          }), e.RTCRtpSender.prototype.getStats = function() {
            var e = this;
            return this._pc.getStats().then(function(t) {
              return i.filterStats(t, e.track, !0)
            })
          }
        }
        if (!("getStats" in e.RTCRtpReceiver.prototype)) {
          var o = e.RTCPeerConnection.prototype.getReceivers;
          o && (e.RTCPeerConnection.prototype.getReceivers = function() {
            var e = this,
              t = o.apply(this, []);
            return t.forEach(function(t) {
              return t._pc = e
            }), t
          }), i.wrapPeerConnectionEvent(e, "track", function(e) {
            return e.receiver._pc = e.srcElement, e
          }), e.RTCRtpReceiver.prototype.getStats = function() {
            var e = this;
            return this._pc.getStats().then(function(t) {
              return i.filterStats(t, e.track, !1)
            })
          }
        }
        if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
          var a = e.RTCPeerConnection.prototype.getStats;
          e.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
              var t = arguments[0],
                n = void 0,
                r = void 0,
                o = void 0;
              if (this.getSenders().forEach(function(e) {
                  e.track === t && (n ? o = !0 : n = e)
                }), this.getReceivers().forEach(function(e) {
                  return e.track === t && (r ? o = !0 : r = e), e.track === t
                }), o || n && r) return Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError"));
              if (n) return n.getStats();
              else if (r) return r.getStats();
              return Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"))
            }
            return a.apply(this, arguments)
          }
        }
      }
    }, n.shimAddTrackRemoveTrackWithNative = c, n.shimAddTrackRemoveTrack = function(e) {
      if (e.RTCPeerConnection) {
        var t = i.detectBrowser(e);
        if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return c(e);
        var n = e.RTCPeerConnection.prototype.getLocalStreams;
        e.RTCPeerConnection.prototype.getLocalStreams = function() {
          var e = this,
            t = n.apply(this);
          return this._reverseStreams = this._reverseStreams || {}, t.map(function(t) {
            return e._reverseStreams[t.id]
          })
        };
        var r = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(t) {
          var n = this;
          if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t.getTracks().forEach(function(e) {
              if (n.getSenders().find(function(t) {
                  return t.track === e
                })) throw new DOMException("Track already exists.", "InvalidAccessError")
            }), !this._reverseStreams[t.id]) {
            var o = new e.MediaStream(t.getTracks());
            this._streams[t.id] = o, this._reverseStreams[o.id] = t, t = o
          }
          r.apply(this, [t])
        };
        var o = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(e) {
          this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, o.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id]
        }, e.RTCPeerConnection.prototype.addTrack = function(t, n) {
          var r = this;
          if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
          var o = [].slice.call(arguments, 1);
          if (1 !== o.length || !o[0].getTracks().find(function(e) {
              return e === t
            })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
          if (this.getSenders().find(function(e) {
              return e.track === t
            })) throw new DOMException("Track already exists.", "InvalidAccessError");
          this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
          var a = this._streams[n.id];
          if (a) a.addTrack(t), Promise.resolve().then(function() {
            r.dispatchEvent(new Event("negotiationneeded"))
          });
          else {
            var i = new e.MediaStream([t]);
            this._streams[n.id] = i, this._reverseStreams[i.id] = n, this.addStream(i)
          }
          return this.getSenders().find(function(e) {
            return e.track === t
          })
        }, ["createOffer", "createAnswer"].forEach(function(t) {
          var n = e.RTCPeerConnection.prototype[t],
            r = s({}, t, function() {
              var e = this,
                t = arguments,
                r = arguments.length && "function" == typeof arguments[0];
              return r ? n.apply(this, [function(n) {
                var r = u(e, n);
                t[0].apply(null, [r])
              }, function(e) {
                t[1] && t[1].apply(null, e)
              }, arguments[2]]) : n.apply(this, arguments).then(function(t) {
                return u(e, t)
              })
            });
          e.RTCPeerConnection.prototype[t] = r[t]
        });
        var a = e.RTCPeerConnection.prototype.setLocalDescription;
        e.RTCPeerConnection.prototype.setLocalDescription = function() {
          return arguments.length && arguments[0].type ? (arguments[0] = function(e, t) {
            var n = t.sdp;
            return Object.keys(e._reverseStreams || []).forEach(function(t) {
              var r = e._reverseStreams[t],
                o = e._streams[r.id];
              n = n.replace(RegExp(r.id, "g"), o.id)
            }), new RTCSessionDescription({
              type: t.type,
              sdp: n
            })
          }(this, arguments[0]), a.apply(this, arguments)) : a.apply(this, arguments)
        };
        var l = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
        Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
          get: function() {
            var e = l.get.apply(this);
            return "" === e.type ? e : u(this, e)
          }
        }), e.RTCPeerConnection.prototype.removeTrack = function(e) {
          var t = this;
          if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
          if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
          if (e._pc !== this) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
          this._streams = this._streams || {};
          var n = void 0;
          Object.keys(this._streams).forEach(function(r) {
            t._streams[r].getTracks().find(function(t) {
              return e.track === t
            }) && (n = t._streams[r])
          }), n && (1 === n.getTracks().length ? this.removeStream(this._reverseStreams[n.id]) : n.removeTrack(e.track), this.dispatchEvent(new Event("negotiationneeded")))
        }
      }

      function u(e, t) {
        var n = t.sdp;
        return Object.keys(e._reverseStreams || []).forEach(function(t) {
          var r = e._reverseStreams[t],
            o = e._streams[r.id];
          n = n.replace(RegExp(o.id, "g"), r.id)
        }), new RTCSessionDescription({
          type: t.type,
          sdp: n
        })
      }
    }, n.shimPeerConnection = function(e) {
      var t = i.detectBrowser(e);
      if (!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), e.RTCPeerConnection) {
        var n = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
        t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
          var n = e.RTCPeerConnection.prototype[t],
            r = s({}, t, function() {
              return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
            });
          e.RTCPeerConnection.prototype[t] = r[t]
        });
        var r = e.RTCPeerConnection.prototype.addIceCandidate;
        e.RTCPeerConnection.prototype.addIceCandidate = function() {
          return n || arguments[0] ? t.version < 78 && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : r.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
        }
      }
    }, n.fixNegotiationNeeded = function(e) {
      i.wrapPeerConnectionEvent(e, "negotiationneeded", function(e) {
        if ("stable" === e.target.signalingState) return e
      })
    };
    var i = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(e("../utils.js"));

    function s(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function c(e) {
      e.RTCPeerConnection.prototype.getLocalStreams = function() {
        var e = this;
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function(t) {
          return e._shimmedLocalStreams[t][0]
        })
      };
      var t = e.RTCPeerConnection.prototype.addTrack;
      e.RTCPeerConnection.prototype.addTrack = function(e, n) {
        if (!n) return t.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        var r = t.apply(this, arguments);
        return this._shimmedLocalStreams[n.id] ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) && this._shimmedLocalStreams[n.id].push(r) : this._shimmedLocalStreams[n.id] = [n, r], r
      };
      var n = e.RTCPeerConnection.prototype.addStream;
      e.RTCPeerConnection.prototype.addStream = function(e) {
        var t = this;
        this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function(e) {
          if (t.getSenders().find(function(t) {
              return t.track === e
            })) throw new DOMException("Track already exists.", "InvalidAccessError")
        });
        var r = this.getSenders();
        n.apply(this, arguments);
        var o = this.getSenders().filter(function(e) {
          return -1 === r.indexOf(e)
        });
        this._shimmedLocalStreams[e.id] = [e].concat(o)
      };
      var r = e.RTCPeerConnection.prototype.removeStream;
      e.RTCPeerConnection.prototype.removeStream = function(e) {
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], r.apply(this, arguments)
      };
      var o = e.RTCPeerConnection.prototype.removeTrack;
      e.RTCPeerConnection.prototype.removeTrack = function(e) {
        var t = this;
        return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function(n) {
          var r = t._shimmedLocalStreams[n].indexOf(e); - 1 !== r && t._shimmedLocalStreams[n].splice(r, 1), 1 === t._shimmedLocalStreams[n].length && delete t._shimmedLocalStreams[n]
        }), o.apply(this, arguments)
      }
    }
  }, {
    "../utils.js": 11,
    "./getdisplaymedia": 4,
    "./getusermedia": 5
  }],
  4: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.shimGetDisplayMedia = function(e, t) {
      if (!e.navigator.mediaDevices || !("getDisplayMedia" in e.navigator.mediaDevices)) {
        if (e.navigator.mediaDevices) {
          if ("function" != typeof t) {
            console.error("shimGetDisplayMedia: getSourceId argument is not a function");
            return
          }
          e.navigator.mediaDevices.getDisplayMedia = function(n) {
            return t(n).then(function(t) {
              var r = n.video && n.video.width,
                o = n.video && n.video.height,
                a = n.video && n.video.frameRate;
              return n.video = {
                mandatory: {
                  chromeMediaSource: "desktop",
                  chromeMediaSourceId: t,
                  maxFrameRate: a || 3
                }
              }, r && (n.video.mandatory.maxWidth = r), o && (n.video.mandatory.maxHeight = o), e.navigator.mediaDevices.getUserMedia(n)
            })
          }
        }
      }
    }
  }, {}],
  5: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n.shimGetUserMedia = function(e) {
      var t = e && e.navigator;
      if (t.mediaDevices) {
        var n = o.detectBrowser(e),
          i = function(e) {
            if ((void 0 === e ? "undefined" : r(e)) !== "object" || e.mandatory || e.optional) return e;
            var t = {};
            return Object.keys(e).forEach(function(n) {
              if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                var o = "object" === r(e[n]) ? e[n] : {
                  ideal: e[n]
                };
                void 0 !== o.exact && "number" == typeof o.exact && (o.min = o.max = o.exact);
                var a = function(e, t) {
                  return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                };
                if (void 0 !== o.ideal) {
                  t.optional = t.optional || [];
                  var i = {};
                  "number" == typeof o.ideal ? (i[a("min", n)] = o.ideal, t.optional.push(i), (i = {})[a("max", n)] = o.ideal) : i[a("", n)] = o.ideal, t.optional.push(i)
                }
                void 0 !== o.exact && "number" != typeof o.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[a("", n)] = o.exact) : ["min", "max"].forEach(function(e) {
                  void 0 !== o[e] && (t.mandatory = t.mandatory || {}, t.mandatory[a(e, n)] = o[e])
                })
              }
            }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
          },
          s = function(e, o) {
            if (n.version >= 61) return o(e);
            if ((e = JSON.parse(JSON.stringify(e))) && "object" === r(e.audio)) {
              var s = function(e, t, n) {
                t in e && !(n in e) && (e[n] = e[t], delete e[t])
              };
              s((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), s(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = i(e.audio)
            }
            if (e && "object" === r(e.video)) {
              var c = e.video.facingMode;
              c = c && ((void 0 === c ? "undefined" : r(c)) === "object" ? c : {
                ideal: c
              });
              var l = n.version < 66;
              if (c && ("user" === c.exact || "environment" === c.exact || "user" === c.ideal || "environment" === c.ideal) && !(t.mediaDevices.getSupportedConstraints && t.mediaDevices.getSupportedConstraints().facingMode && !l)) {
                delete e.video.facingMode;
                var u = void 0;
                if ("environment" === c.exact || "environment" === c.ideal ? u = ["back", "rear"] : ("user" === c.exact || "user" === c.ideal) && (u = ["front"]), u) return t.mediaDevices.enumerateDevices().then(function(t) {
                  var n = (t = t.filter(function(e) {
                    return "videoinput" === e.kind
                  })).find(function(e) {
                    return u.some(function(t) {
                      return e.label.toLowerCase().includes(t)
                    })
                  });
                  return !n && t.length && u.includes("back") && (n = t[t.length - 1]), n && (e.video.deviceId = c.exact ? {
                    exact: n.deviceId
                  } : {
                    ideal: n.deviceId
                  }), e.video = i(e.video), a("chrome: " + JSON.stringify(e)), o(e)
                })
              }
              e.video = i(e.video)
            }
            return a("chrome: " + JSON.stringify(e)), o(e)
          },
          c = function(e) {
            return n.version >= 64 ? e : {
              name: ({
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError"
              })[e.name] || e.name,
              message: e.message,
              constraint: e.constraint || e.constraintName,
              toString: function() {
                return this.name + (this.message && ": ") + this.message
              }
            }
          };
        if (t.getUserMedia = (function(e, n, r) {
            s(e, function(e) {
              t.webkitGetUserMedia(e, n, function(e) {
                r && r(c(e))
              })
            })
          }).bind(t), t.mediaDevices.getUserMedia) {
          var l = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
          t.mediaDevices.getUserMedia = function(e) {
            return s(e, function(e) {
              return l(e).then(function(t) {
                if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function(e) {
                  e.stop()
                }), new DOMException("", "NotFoundError");
                return t
              }, function(e) {
                return Promise.reject(c(e))
              })
            })
          }
        }
      }
    };
    var o = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(e("../utils.js")),
      a = o.log
  }, {
    "../utils.js": 11
  }],
  6: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n.shimRTCIceCandidate = function(e) {
      if (e.RTCIceCandidate && (!e.RTCIceCandidate || !("foundation" in e.RTCIceCandidate.prototype))) {
        var t = e.RTCIceCandidate;
        e.RTCIceCandidate = function(e) {
          if ((void 0 === e ? "undefined" : r(e)) === "object" && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) {
            var n = Object.assign(new t(e), o.default.parseCandidate(e.candidate));
            return n.toJSON = function() {
              return {
                candidate: n.candidate,
                sdpMid: n.sdpMid,
                sdpMLineIndex: n.sdpMLineIndex,
                usernameFragment: n.usernameFragment
              }
            }, n
          }
          return new t(e)
        }, e.RTCIceCandidate.prototype = t.prototype, a.wrapPeerConnectionEvent(e, "icecandidate", function(t) {
          return t.candidate && Object.defineProperty(t, "candidate", {
            value: new e.RTCIceCandidate(t.candidate),
            writable: "false"
          }), t
        })
      }
    }, n.shimMaxMessageSize = function(e) {
      if (e.RTCPeerConnection) {
        var t = a.detectBrowser(e);
        !("sctp" in e.RTCPeerConnection.prototype) && Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
          get: function() {
            return void 0 === this._sctp ? null : this._sctp
          }
        });
        var n = function(e) {
            if (!e || !e.sdp) return !1;
            var t = o.default.splitSections(e.sdp);
            return t.shift(), t.some(function(e) {
              var t = o.default.parseMLine(e);
              return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
            })
          },
          r = function(e) {
            var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (null === t || t.length < 2) return -1;
            var n = parseInt(t[1], 10);
            return n != n ? -1 : n
          },
          i = function(e) {
            var n = 65536;
            return "firefox" === t.browser && (n = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), n
          },
          s = function(e, n) {
            var r = 65536;
            "firefox" === t.browser && 57 === t.version && (r = 65535);
            var a = o.default.matchPrefix(e.sdp, "a=max-message-size:");
            return a.length > 0 ? r = parseInt(a[0].substr(19), 10) : "firefox" === t.browser && -1 !== n && (r = 2147483637), r
          },
          c = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
          if (this._sctp = null, "chrome" === t.browser && t.version >= 76 && "plan-b" === this.getConfiguration().sdpSemantics && Object.defineProperty(this, "sctp", {
              get: function() {
                return void 0 === this._sctp ? null : this._sctp
              },
              enumerable: !0,
              configurable: !0
            }), n(arguments[0])) {
            var e = r(arguments[0]),
              o = i(e),
              a = s(arguments[0], e),
              l = void 0;
            l = 0 === o && 0 === a ? Number.POSITIVE_INFINITY : 0 === o || 0 === a ? Math.max(o, a) : Math.min(o, a);
            var u = {};
            Object.defineProperty(u, "maxMessageSize", {
              get: function() {
                return l
              }
            }), this._sctp = u
          }
          return c.apply(this, arguments)
        }
      }
    }, n.shimSendThrowTypeError = function(e) {
      if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
        var t = e.RTCPeerConnection.prototype.createDataChannel;
        e.RTCPeerConnection.prototype.createDataChannel = function() {
          var e = t.apply(this, arguments);
          return n(e, this), e
        }, a.wrapPeerConnectionEvent(e, "datachannel", function(e) {
          return n(e.channel, e.target), e
        })
      }

      function n(e, t) {
        var n = e.send;
        e.send = function() {
          var r = arguments[0],
            o = r.length || r.size || r.byteLength;
          if ("open" === e.readyState && t.sctp && o > t.sctp.maxMessageSize) throw TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)");
          return n.apply(e, arguments)
        }
      }
    }, n.shimConnectionState = function(e) {
      if (e.RTCPeerConnection && !("connectionState" in e.RTCPeerConnection.prototype)) {
        var t = e.RTCPeerConnection.prototype;
        Object.defineProperty(t, "connectionState", {
          get: function() {
            return ({
              completed: "connected",
              checking: "connecting"
            })[this.iceConnectionState] || this.iceConnectionState
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t, "onconnectionstatechange", {
          get: function() {
            return this._onconnectionstatechange || null
          },
          set: function(e) {
            this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e)
          },
          enumerable: !0,
          configurable: !0
        }), ["setLocalDescription", "setRemoteDescription"].forEach(function(e) {
          var n = t[e];
          t[e] = function() {
            return !this._connectionstatechangepoly && (this._connectionstatechangepoly = function(e) {
              var t = e.target;
              if (t._lastConnectionState !== t.connectionState) {
                t._lastConnectionState = t.connectionState;
                var n = new Event("connectionstatechange", e);
                t.dispatchEvent(n)
              }
              return e
            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n.apply(this, arguments)
          }
        })
      }
    }, n.removeAllowExtmapMixed = function(e) {
      if (!!e.RTCPeerConnection) {
        var t = a.detectBrowser(e);
        if ("chrome" !== t.browser || !(t.version >= 71)) {
          var n = e.RTCPeerConnection.prototype.setRemoteDescription;
          e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
            return e && e.sdp && -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") && (e.sdp = e.sdp.split("\n").filter(function(e) {
              return "a=extmap-allow-mixed" !== e.trim()
            }).join("\n")), n.apply(this, arguments)
          }
        }
      }
    };
    var o = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(e("sdp")),
      a = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(e("./utils"))
  }, {
    "./utils": 11,
    sdp: 13
  }],
  7: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.shimGetDisplayMedia = n.shimGetUserMedia = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = e("./getusermedia");
    Object.defineProperty(n, "shimGetUserMedia", {
      enumerable: !0,
      get: function() {
        return o.shimGetUserMedia
      }
    });
    var a = e("./getdisplaymedia");
    Object.defineProperty(n, "shimGetDisplayMedia", {
      enumerable: !0,
      get: function() {
        return a.shimGetDisplayMedia
      }
    }), n.shimOnTrack = function(e) {
      (void 0 === e ? "undefined" : r(e)) === "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function() {
          return {
            receiver: this.receiver
          }
        }
      })
    }, n.shimPeerConnection = function(e) {
      var t = i.detectBrowser(e);
      if ((void 0 === e ? "undefined" : r(e)) === "object" && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
        if (!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection), t.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) {
            var n, r, o, a = e.RTCPeerConnection.prototype[t];
            var i = (n = {}, r = t, o = function() {
              return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), a.apply(this, arguments)
            }, r in n ? Object.defineProperty(n, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[r] = o, n);
            e.RTCPeerConnection.prototype[t] = i[t]
          }), t.version < 68) {
          var n = e.RTCPeerConnection.prototype.addIceCandidate;
          e.RTCPeerConnection.prototype.addIceCandidate = function() {
            return arguments[0] ? arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
          }
        }
        var o = {
            inboundrtp: "inbound-rtp",
            outboundrtp: "outbound-rtp",
            candidatepair: "candidate-pair",
            localcandidate: "local-candidate",
            remotecandidate: "remote-candidate"
          },
          a = e.RTCPeerConnection.prototype.getStats;
        e.RTCPeerConnection.prototype.getStats = function() {
          var e = Array.prototype.slice.call(arguments),
            n = e[0],
            r = e[1],
            i = e[2];
          return a.apply(this, [n || null]).then(function(e) {
            if (t.version < 53 && !r) try {
              e.forEach(function(e) {
                e.type = o[e.type] || e.type
              })
            } catch (t) {
              if ("TypeError" !== t.name) throw t;
              e.forEach(function(t, n) {
                e.set(n, Object.assign({}, t, {
                  type: o[t.type] || t.type
                }))
              })
            }
            return e
          }).then(r, i)
        }
      }
    }, n.shimSenderGetStats = function(e) {
      if (!!((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection && e.RTCRtpSender)) {
        if (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype)) {
          var t = e.RTCPeerConnection.prototype.getSenders;
          t && (e.RTCPeerConnection.prototype.getSenders = function() {
            var e = this,
              n = t.apply(this, []);
            return n.forEach(function(t) {
              return t._pc = e
            }), n
          });
          var n = e.RTCPeerConnection.prototype.addTrack;
          n && (e.RTCPeerConnection.prototype.addTrack = function() {
            var e = n.apply(this, arguments);
            return e._pc = this, e
          }), e.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map)
          }
        }
      }
    }, n.shimReceiverGetStats = function(e) {
      if (!!((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection && e.RTCRtpSender)) {
        if (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype)) {
          var t = e.RTCPeerConnection.prototype.getReceivers;
          t && (e.RTCPeerConnection.prototype.getReceivers = function() {
            var e = this,
              n = t.apply(this, []);
            return n.forEach(function(t) {
              return t._pc = e
            }), n
          }), i.wrapPeerConnectionEvent(e, "track", function(e) {
            return e.receiver._pc = e.srcElement, e
          }), e.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track)
          }
        }
      }
    }, n.shimRemoveStream = function(e) {
      e.RTCPeerConnection && !("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function(e) {
        var t = this;
        i.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function(n) {
          n.track && e.getTracks().includes(n.track) && t.removeTrack(n)
        })
      })
    }, n.shimRTCDataChannel = function(e) {
      e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
    }, n.shimAddTransceiver = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection) {
        var t = e.RTCPeerConnection.prototype.addTransceiver;
        t && (e.RTCPeerConnection.prototype.addTransceiver = function() {
          this.setParametersPromises = [];
          var e = arguments[1],
            n = e && "sendEncodings" in e;
          n && e.sendEncodings.forEach(function(e) {
            if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid)) throw TypeError("Invalid RID value provided.");
            if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0)) throw RangeError("max_framerate must be >= 0.0")
          });
          var r = t.apply(this, arguments);
          if (n) {
            var o = r.sender,
              a = o.getParameters();
            !("encodings" in a) && (a.encodings = e.sendEncodings, this.setParametersPromises.push(o.setParameters(a).catch(function() {})))
          }
          return r
        })
      }
    }, n.shimCreateOffer = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection) {
        var t = e.RTCPeerConnection.prototype.createOffer;
        e.RTCPeerConnection.prototype.createOffer = function() {
          var e = this,
            n = arguments;
          return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
            return t.apply(e, n)
          }).finally(function() {
            e.setParametersPromises = []
          }) : t.apply(this, arguments)
        }
      }
    }, n.shimCreateAnswer = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection) {
        var t = e.RTCPeerConnection.prototype.createAnswer;
        e.RTCPeerConnection.prototype.createAnswer = function() {
          var e = this,
            n = arguments;
          return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(function() {
            return t.apply(e, n)
          }).finally(function() {
            e.setParametersPromises = []
          }) : t.apply(this, arguments)
        }
      }
    };
    var i = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(e("../utils"))
  }, {
    "../utils": 11,
    "./getdisplaymedia": 8,
    "./getusermedia": 9
  }],
  8: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.shimGetDisplayMedia = function(e, t) {
      if (!e.navigator.mediaDevices || !("getDisplayMedia" in e.navigator.mediaDevices)) e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(n) {
        if (!(n && n.video)) {
          var r = new DOMException("getDisplayMedia without video constraints is undefined");
          return r.name = "NotFoundError", r.code = 8, Promise.reject(r)
        }
        return !0 === n.video ? n.video = {
          mediaSource: t
        } : n.video.mediaSource = t, e.navigator.mediaDevices.getUserMedia(n)
      })
    }
  }, {}],
  9: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n.shimGetUserMedia = function(e) {
      var t = o.detectBrowser(e),
        n = e && e.navigator,
        MediaStreamTrack = e && e.MediaStreamTrack;
      if (n.getUserMedia = function(e, t, r) {
          o.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(e).then(t, r)
        }, !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
        var a = function(e, t, n) {
            t in e && !(n in e) && (e[n] = e[t], delete e[t])
          },
          i = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
        if (n.mediaDevices.getUserMedia = function(e) {
            return (void 0 === e ? "undefined" : r(e)) === "object" && "object" === r(e.audio) && (a((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "mozAutoGainControl"), a(e.audio, "noiseSuppression", "mozNoiseSuppression")), i(e)
          }, MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
          var s = MediaStreamTrack.prototype.getSettings;
          MediaStreamTrack.prototype.getSettings = function() {
            var e = s.apply(this, arguments);
            return a(e, "mozAutoGainControl", "autoGainControl"), a(e, "mozNoiseSuppression", "noiseSuppression"), e
          }
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
          var c = MediaStreamTrack.prototype.applyConstraints;
          MediaStreamTrack.prototype.applyConstraints = function(e) {
            return "audio" === this.kind && (void 0 === e ? "undefined" : r(e)) === "object" && (a(e = JSON.parse(JSON.stringify(e)), "autoGainControl", "mozAutoGainControl"), a(e, "noiseSuppression", "mozNoiseSuppression")), c.apply(this, [e])
          }
        }
      }
    };
    var o = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(e("../utils"))
  }, {
    "../utils": 11
  }],
  10: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n.shimLocalStreamsAPI = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection) {
        if (!("getLocalStreams" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.getLocalStreams = function() {
            return !this._localStreams && (this._localStreams = []), this._localStreams
          }), !("addStream" in e.RTCPeerConnection.prototype)) {
          var t = e.RTCPeerConnection.prototype.addTrack;
          e.RTCPeerConnection.prototype.addStream = function(e) {
            var n = this;
            !this._localStreams && (this._localStreams = []), !this._localStreams.includes(e) && this._localStreams.push(e), e.getAudioTracks().forEach(function(r) {
              return t.call(n, r, e)
            }), e.getVideoTracks().forEach(function(r) {
              return t.call(n, r, e)
            })
          }, e.RTCPeerConnection.prototype.addTrack = function(e) {
            for (var n = this, r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
            return o && o.forEach(function(e) {
              n._localStreams ? !n._localStreams.includes(e) && n._localStreams.push(e) : n._localStreams = [e]
            }), t.apply(this, arguments)
          }
        }!("removeStream" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.removeStream = function(e) {
          var t = this;
          !this._localStreams && (this._localStreams = []);
          var n = this._localStreams.indexOf(e);
          if (-1 !== n) {
            this._localStreams.splice(n, 1);
            var r = e.getTracks();
            this.getSenders().forEach(function(e) {
              r.includes(e.track) && t.removeTrack(e)
            })
          }
        })
      }
    }, n.shimRemoteStreamsAPI = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection && (!("getRemoteStreams" in e.RTCPeerConnection.prototype) && (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
          return this._remoteStreams ? this._remoteStreams : []
        }), !("onaddstream" in e.RTCPeerConnection.prototype))) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
          get: function() {
            return this._onaddstream
          },
          set: function(e) {
            var t = this;
            this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function(e) {
              e.streams.forEach(function(e) {
                if (!t._remoteStreams && (t._remoteStreams = []), !t._remoteStreams.includes(e)) {
                  t._remoteStreams.push(e);
                  var n = new Event("addstream");
                  n.stream = e, t.dispatchEvent(n)
                }
              })
            })
          }
        });
        var t = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
          var e = this;
          return !this._onaddstreampoly && this.addEventListener("track", this._onaddstreampoly = function(t) {
            t.streams.forEach(function(t) {
              if (!e._remoteStreams && (e._remoteStreams = []), !(e._remoteStreams.indexOf(t) >= 0)) {
                e._remoteStreams.push(t);
                var n = new Event("addstream");
                n.stream = t, e.dispatchEvent(n)
              }
            })
          }), t.apply(e, arguments)
        }
      }
    }, n.shimCallbacksAPI = function(e) {
      if ((void 0 === e ? "undefined" : r(e)) === "object" && e.RTCPeerConnection) {
        var t = e.RTCPeerConnection.prototype,
          n = t.createOffer,
          o = t.createAnswer,
          a = t.setLocalDescription,
          i = t.setRemoteDescription,
          s = t.addIceCandidate;
        t.createOffer = function(e, t) {
          var r = arguments.length >= 2 ? arguments[2] : arguments[0],
            o = n.apply(this, [r]);
          return t ? (o.then(e, t), Promise.resolve()) : o
        }, t.createAnswer = function(e, t) {
          var n = arguments.length >= 2 ? arguments[2] : arguments[0],
            r = o.apply(this, [n]);
          return t ? (r.then(e, t), Promise.resolve()) : r
        };
        var c = function(e, t, n) {
          var r = a.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r
        };
        t.setLocalDescription = c, c = function(e, t, n) {
          var r = i.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r
        }, t.setRemoteDescription = c, c = function(e, t, n) {
          var r = s.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r
        }, t.addIceCandidate = c
      }
    }, n.shimGetUserMedia = function(e) {
      var t = e && e.navigator;
      if (t.mediaDevices && t.mediaDevices.getUserMedia) {
        var n = t.mediaDevices,
          r = n.getUserMedia.bind(n);
        t.mediaDevices.getUserMedia = function(e) {
          return r(a(e))
        }
      }!t.getUserMedia && t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = (function(e, n, r) {
        t.mediaDevices.getUserMedia(e).then(n, r)
      }).bind(t))
    }, n.shimConstraints = a, n.shimRTCIceServerUrls = function(e) {
      var t = e.RTCPeerConnection;
      e.RTCPeerConnection = function(e, n) {
        if (e && e.iceServers) {
          for (var r = [], a = 0; a < e.iceServers.length; a++) {
            var i = e.iceServers[a];
            !i.hasOwnProperty("urls") && i.hasOwnProperty("url") ? (o.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (i = JSON.parse(JSON.stringify(i))).urls = i.url, delete i.url, r.push(i)) : r.push(e.iceServers[a])
          }
          e.iceServers = r
        }
        return new t(e, n)
      }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
        get: function() {
          return t.generateCertificate
        }
      })
    }, n.shimTrackEventTransceiver = function(e) {
      (void 0 === e ? "undefined" : r(e)) === "object" && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get: function() {
          return {
            receiver: this.receiver
          }
        }
      })
    }, n.shimCreateOfferLegacy = function(e) {
      var t = e.RTCPeerConnection.prototype.createOffer;
      e.RTCPeerConnection.prototype.createOffer = function(e) {
        if (e) {
          void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
          var n = this.getTransceivers().find(function(e) {
            return "audio" === e.receiver.track.kind
          });
          !1 === e.offerToReceiveAudio && n ? "sendrecv" === n.direction ? n.setDirection ? n.setDirection("sendonly") : n.direction = "sendonly" : "recvonly" === n.direction && (n.setDirection ? n.setDirection("inactive") : n.direction = "inactive") : !0 === e.offerToReceiveAudio && !n && this.addTransceiver("audio"), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
          var r = this.getTransceivers().find(function(e) {
            return "video" === e.receiver.track.kind
          });
          !1 === e.offerToReceiveVideo && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 === e.offerToReceiveVideo && !r && this.addTransceiver("video")
        }
        return t.apply(this, arguments)
      }
    };
    var o = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(e("../utils"));

    function a(e) {
      return e && void 0 !== e.video ? Object.assign({}, e, {
        video: o.compactObject(e.video)
      }) : e
    }
  }, {
    "../utils": 11
  }],
  11: [function(e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    n.extractVersion = i, n.wrapPeerConnectionEvent = function(e, t, n) {
      if (e.RTCPeerConnection) {
        var r = e.RTCPeerConnection.prototype,
          o = r.addEventListener;
        r.addEventListener = function(e, r) {
          if (e !== t) return o.apply(this, arguments);
          var a = function(e) {
            var t = n(e);
            t && r(t)
          };
          return this._eventMap = this._eventMap || {}, this._eventMap[r] = a, o.apply(this, [e, a])
        };
        var a = r.removeEventListener;
        r.removeEventListener = function(e, n) {
          if (e !== t || !this._eventMap || !this._eventMap[n]) return a.apply(this, arguments);
          var r = this._eventMap[n];
          return delete this._eventMap[n], a.apply(this, [e, r])
        }, Object.defineProperty(r, "on" + t, {
          get: function() {
            return this["_on" + t]
          },
          set: function(e) {
            this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
          },
          enumerable: !0,
          configurable: !0
        })
      }
    }, n.disableLog = function(e) {
      return "boolean" != typeof e ? Error("Argument type: " + (void 0 === e ? "undefined" : r(e)) + ". Please use a boolean.") : (o = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
    }, n.disableWarnings = function(e) {
      return "boolean" != typeof e ? Error("Argument type: " + (void 0 === e ? "undefined" : r(e)) + ". Please use a boolean.") : (a = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
    }, n.log = function() {
      ("undefined" == typeof window ? "undefined" : r(window)) === "object" && !o && "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
    }, n.deprecated = function(e, t) {
      a && console.warn(e + " is deprecated, please use " + t + " instead.")
    }, n.detectBrowser = function(e) {
      var t = e.navigator,
        n = {
          browser: null,
          version: null
        };
      return void 0 !== e && e.navigator ? (t.mozGetUserMedia ? (n.browser = "firefox", n.version = i(t.userAgent, /Firefox\/(\d+)\./, 1)) : t.webkitGetUserMedia || !1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer ? (n.browser = "chrome", n.version = i(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) : t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (n.browser = "edge", n.version = i(t.userAgent, /Edge\/(\d+).(\d+)$/, 2)) : e.RTCPeerConnection && t.userAgent.match(/AppleWebKit\/(\d+)\./) ? (n.browser = "safari", n.version = i(t.userAgent, /AppleWebKit\/(\d+)\./, 1), n.supportsUnifiedPlan = e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype) : n.browser = "Not a supported browser.", n) : (n.browser = "Not a browser.", n)
    }, n.compactObject = function e(t) {
      return s(t) ? Object.keys(t).reduce(function(n, r) {
        var o, a, i, c = s(t[r]),
          l = c ? e(t[r]) : t[r],
          u = c && !Object.keys(l).length;
        if (void 0 === l || u) return n;
        return Object.assign(n, (o = {}, a = r, i = l, a in o ? Object.defineProperty(o, a, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : o[a] = i, o))
      }, {}) : t
    }, n.walkStats = c, n.filterStats = function(e, t, n) {
      var r = n ? "outbound-rtp" : "inbound-rtp",
        o = new Map;
      if (null === t) return o;
      var a = [];
      return e.forEach(function(e) {
        "track" === e.type && e.trackIdentifier === t.id && a.push(e)
      }), a.forEach(function(t) {
        e.forEach(function(n) {
          n.type === r && n.trackId === t.id && c(e, n, o)
        })
      }), o
    };
    var o = !0,
      a = !0;

    function i(e, t, n) {
      var r = e.match(t);
      return r && r.length >= n && parseInt(r[n], 10)
    }

    function s(e) {
      return "[object Object]" === Object.prototype.toString.call(e)
    }

    function c(e, t, n) {
      !(!t || n.has(t.id)) && (n.set(t.id, t), Object.keys(t).forEach(function(r) {
        r.endsWith("Id") ? c(e, e.get(t[r]), n) : r.endsWith("Ids") && t[r].forEach(function(t) {
          c(e, e.get(t), n)
        })
      }))
    }
  }, {}],
  12: [function(e, t, n) {}, {}],
  13: [function(e, t, n) {
    "use strict";
    var r = {};
    r.generateIdentifier = function() {
      return Math.random().toString(36).substr(2, 10)
    }, r.localCName = r.generateIdentifier(), r.splitLines = function(e) {
      return e.trim().split("\n").map(function(e) {
        return e.trim()
      })
    }, r.splitSections = function(e) {
      return e.split("\nm=").map(function(e, t) {
        return (t > 0 ? "m=" + e : e).trim() + "\r\n"
      })
    }, r.getDescription = function(e) {
      var t = r.splitSections(e);
      return t && t[0]
    }, r.getMediaSections = function(e) {
      var t = r.splitSections(e);
      return t.shift(), t
    }, r.matchPrefix = function(e, t) {
      return r.splitLines(e).filter(function(e) {
        return 0 === e.indexOf(t)
      })
    }, r.parseCandidate = function(e) {
      for (var t, n = {
          foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
          component: parseInt(t[1], 10),
          protocol: t[2].toLowerCase(),
          priority: parseInt(t[3], 10),
          ip: t[4],
          address: t[4],
          port: parseInt(t[5], 10),
          type: t[7]
        }, r = 8; r < t.length; r += 2) switch (t[r]) {
        case "raddr":
          n.relatedAddress = t[r + 1];
          break;
        case "rport":
          n.relatedPort = parseInt(t[r + 1], 10);
          break;
        case "tcptype":
          n.tcpType = t[r + 1];
          break;
        case "ufrag":
          n.ufrag = t[r + 1], n.usernameFragment = t[r + 1];
          break;
        default:
          n[t[r]] = t[r + 1]
      }
      return n
    }, r.writeCandidate = function(e) {
      var t = [];
      t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.address || e.ip), t.push(e.port);
      var n = e.type;
      return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ")
    }, r.parseIceOptions = function(e) {
      return e.substr(14).split(" ")
    }, r.parseRtpMap = function(e) {
      var t = e.substr(9).split(" "),
        n = {
          payloadType: parseInt(t.shift(), 10)
        };
      return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.channels = 3 === t.length ? parseInt(t[2], 10) : 1, n.numChannels = n.channels, n
    }, r.writeRtpMap = function(e) {
      var t = e.payloadType;
      void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
      var n = e.channels || e.numChannels || 1;
      return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== n ? "/" + n : "") + "\r\n"
    }, r.parseExtmap = function(e) {
      var t = e.substr(9).split(" ");
      return {
        id: parseInt(t[0], 10),
        direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
        uri: t[1]
      }
    }, r.writeExtmap = function(e) {
      return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
    }, r.parseFmtp = function(e) {
      for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), o = 0; o < r.length; o++) n[(t = r[o].trim().split("="))[0].trim()] = t[1];
      return n
    }, r.writeFmtp = function(e) {
      var t = "",
        n = e.payloadType;
      if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
        var r = [];
        Object.keys(e.parameters).forEach(function(t) {
          e.parameters[t] ? r.push(t + "=" + e.parameters[t]) : r.push(t)
        }), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n"
      }
      return t
    }, r.parseRtcpFb = function(e) {
      var t = e.substr(e.indexOf(" ") + 1).split(" ");
      return {
        type: t.shift(),
        parameter: t.join(" ")
      }
    }, r.writeRtcpFb = function(e) {
      var t = "",
        n = e.payloadType;
      return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) {
        t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
      }), t
    }, r.parseSsrcMedia = function(e) {
      var t = e.indexOf(" "),
        n = {
          ssrc: parseInt(e.substr(7, t - 7), 10)
        },
        r = e.indexOf(":", t);
      return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n
    }, r.parseSsrcGroup = function(e) {
      var t = e.substr(13).split(" ");
      return {
        semantics: t.shift(),
        ssrcs: t.map(function(e) {
          return parseInt(e, 10)
        })
      }
    }, r.getMid = function(e) {
      var t = r.matchPrefix(e, "a=mid:")[0];
      if (t) return t.substr(6)
    }, r.parseFingerprint = function(e) {
      var t = e.substr(14).split(" ");
      return {
        algorithm: t[0].toLowerCase(),
        value: t[1]
      }
    }, r.getDtlsParameters = function(e, t) {
      return {
        role: "auto",
        fingerprints: r.matchPrefix(e + t, "a=fingerprint:").map(r.parseFingerprint)
      }
    }, r.writeDtlsParameters = function(e, t) {
      var n = "a=setup:" + t + "\r\n";
      return e.fingerprints.forEach(function(e) {
        n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
      }), n
    }, r.parseCryptoLine = function(e) {
      var t = e.substr(9).split(" ");
      return {
        tag: parseInt(t[0], 10),
        cryptoSuite: t[1],
        keyParams: t[2],
        sessionParams: t.slice(3)
      }
    }, r.writeCryptoLine = function(e) {
      return "a=crypto:" + e.tag + " " + e.cryptoSuite + " " + ("object" == typeof e.keyParams ? r.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? " " + e.sessionParams.join(" ") : "") + "\r\n"
    }, r.parseCryptoKeyParams = function(e) {
      if (0 !== e.indexOf("inline:")) return null;
      var t = e.substr(7).split("|");
      return {
        keyMethod: "inline",
        keySalt: t[0],
        lifeTime: t[1],
        mkiValue: t[2] ? t[2].split(":")[0] : void 0,
        mkiLength: t[2] ? t[2].split(":")[1] : void 0
      }
    }, r.writeCryptoKeyParams = function(e) {
      return e.keyMethod + ":" + e.keySalt + (e.lifeTime ? "|" + e.lifeTime : "") + (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
    }, r.getCryptoParameters = function(e, t) {
      return r.matchPrefix(e + t, "a=crypto:").map(r.parseCryptoLine)
    }, r.getIceParameters = function(e, t) {
      var n = r.matchPrefix(e + t, "a=ice-ufrag:")[0],
        o = r.matchPrefix(e + t, "a=ice-pwd:")[0];
      return n && o ? {
        usernameFragment: n.substr(12),
        password: o.substr(10)
      } : null
    }, r.writeIceParameters = function(e) {
      return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
    }, r.parseRtpParameters = function(e) {
      for (var t = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: []
        }, n = r.splitLines(e)[0].split(" "), o = 3; o < n.length; o++) {
        var a = n[o],
          i = r.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
        if (i) {
          var s = r.parseRtpMap(i),
            c = r.matchPrefix(e, "a=fmtp:" + a + " ");
          switch (s.parameters = c.length ? r.parseFmtp(c[0]) : {}, s.rtcpFeedback = r.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(r.parseRtcpFb), t.codecs.push(s), s.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              t.fecMechanisms.push(s.name.toUpperCase())
          }
        }
      }
      return r.matchPrefix(e, "a=extmap:").forEach(function(e) {
        t.headerExtensions.push(r.parseExtmap(e))
      }), t
    }, r.writeRtpDescription = function(e, t) {
      var n = "";
      n += "m=" + e + " " + (t.codecs.length > 0 ? "9" : "0") + " UDP/TLS/RTP/SAVPF " + (t.codecs.map(function(e) {
        return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
      }).join(" ") + "\r\n") + "c=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
        n += r.writeRtpMap(e) + r.writeFmtp(e) + r.writeRtcpFb(e)
      });
      var o = 0;
      return t.codecs.forEach(function(e) {
        e.maxptime > o && (o = e.maxptime)
      }), o > 0 && (n += "a=maxptime:" + o + "\r\n"), n += "a=rtcp-mux\r\n", t.headerExtensions && t.headerExtensions.forEach(function(e) {
        n += r.writeExtmap(e)
      }), n
    }, r.parseRtpEncodingParameters = function(e) {
      var t, n = [],
        o = r.parseRtpParameters(e),
        a = -1 !== o.fecMechanisms.indexOf("RED"),
        i = -1 !== o.fecMechanisms.indexOf("ULPFEC"),
        s = r.matchPrefix(e, "a=ssrc:").map(function(e) {
          return r.parseSsrcMedia(e)
        }).filter(function(e) {
          return "cname" === e.attribute
        }),
        c = s.length > 0 && s[0].ssrc,
        l = r.matchPrefix(e, "a=ssrc-group:FID").map(function(e) {
          return e.substr(17).split(" ").map(function(e) {
            return parseInt(e, 10)
          })
        });
      l.length > 0 && l[0].length > 1 && l[0][0] === c && (t = l[0][1]), o.codecs.forEach(function(e) {
        if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
          var r = {
            ssrc: c,
            codecPayloadType: parseInt(e.parameters.apt, 10)
          };
          c && t && (r.rtx = {
            ssrc: t
          }), n.push(r), a && ((r = JSON.parse(JSON.stringify(r))).fec = {
            ssrc: c,
            mechanism: i ? "red+ulpfec" : "red"
          }, n.push(r))
        }
      }), 0 === n.length && c && n.push({
        ssrc: c
      });
      var u = r.matchPrefix(e, "b=");
      return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 950 * parseInt(u[0].substr(5), 10) - 16e3 : void 0, n.forEach(function(e) {
        e.maxBitrate = u
      })), n
    }, r.parseRtcpParameters = function(e) {
      var t = {},
        n = r.matchPrefix(e, "a=ssrc:").map(function(e) {
          return r.parseSsrcMedia(e)
        }).filter(function(e) {
          return "cname" === e.attribute
        })[0];
      n && (t.cname = n.value, t.ssrc = n.ssrc);
      var o = r.matchPrefix(e, "a=rtcp-rsize");
      t.reducedSize = o.length > 0, t.compound = 0 === o.length;
      var a = r.matchPrefix(e, "a=rtcp-mux");
      return t.mux = a.length > 0, t
    }, r.parseMsid = function(e) {
      var t, n = r.matchPrefix(e, "a=msid:");
      if (1 === n.length) return {
        stream: (t = n[0].substr(7).split(" "))[0],
        track: t[1]
      };
      var o = r.matchPrefix(e, "a=ssrc:").map(function(e) {
        return r.parseSsrcMedia(e)
      }).filter(function(e) {
        return "msid" === e.attribute
      });
      if (o.length > 0) return {
        stream: (t = o[0].value.split(" "))[0],
        track: t[1]
      }
    }, r.parseSctpDescription = function(e) {
      var t, n = r.parseMLine(e),
        o = r.matchPrefix(e, "a=max-message-size:");
      o.length > 0 && (t = parseInt(o[0].substr(19), 10)), isNaN(t) && (t = 65536);
      var a = r.matchPrefix(e, "a=sctp-port:");
      if (a.length > 0) return {
        port: parseInt(a[0].substr(12), 10),
        protocol: n.fmt,
        maxMessageSize: t
      };
      if (r.matchPrefix(e, "a=sctpmap:").length > 0) {
        var i = r.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
        return {
          port: parseInt(i[0], 10),
          protocol: i[1],
          maxMessageSize: t
        }
      }
    }, r.writeSctpDescription = function(e, t) {
      var n = [];
      return n = "DTLS/SCTP" !== e.protocol ? ["m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t.port + "\r\n"] : ["m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"], void 0 !== t.maxMessageSize && n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"), n.join("")
    }, r.generateSessionId = function() {
      return Math.random().toString().substr(2, 21)
    }, r.writeSessionBoilerplate = function(e, t, n) {
      var o;
      return o = e ? e : r.generateSessionId(), "v=0\r\no=" + (n || "thisisadapterortc") + " " + o + " " + (void 0 !== t ? t : 2) + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
    }, r.writeMediaSection = function(e, t, n, o) {
      var a = r.writeRtpDescription(e.kind, t);
      if (a += r.writeIceParameters(e.iceGatherer.getLocalParameters()) + r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : "active") + ("a=mid:" + e.mid + "\r\n"), e.direction ? a += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
        var i = "msid:" + o.id + " " + e.rtpSender.track.id + "\r\n";
        a += "a=" + i + ("a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + i), e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + i + ("a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n"))
      }
      return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + r.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + r.localCName + "\r\n"), a
    }, r.getDirection = function(e, t) {
      for (var n = r.splitLines(e), o = 0; o < n.length; o++) switch (n[o]) {
        case "a=sendrecv":
        case "a=sendonly":
        case "a=recvonly":
        case "a=inactive":
          return n[o].substr(2)
      }
      return t ? r.getDirection(t) : "sendrecv"
    }, r.getKind = function(e) {
      return r.splitLines(e)[0].split(" ")[0].substr(2)
    }, r.isRejected = function(e) {
      return "0" === e.split(" ", 2)[1]
    }, r.parseMLine = function(e) {
      var t = r.splitLines(e)[0].substr(2).split(" ");
      return {
        kind: t[0],
        port: parseInt(t[1], 10),
        protocol: t[2],
        fmt: t.slice(3).join(" ")
      }
    }, r.parseOLine = function(e) {
      var t = r.matchPrefix(e, "o=")[0].substr(2).split(" ");
      return {
        username: t[0],
        sessionId: t[1],
        sessionVersion: parseInt(t[2], 10),
        netType: t[3],
        addressType: t[4],
        address: t[5]
      }
    }, r.isValidSDP = function(e) {
      if ("string" != typeof e || 0 === e.length) return !1;
      for (var t = r.splitLines(e), n = 0; n < t.length; n++)
        if (t[n].length < 2 || "=" !== t[n].charAt(1)) return !1;
      return !0
    }, "object" == typeof t && (t.exports = r)
  }, {}]
}, {}, [1])
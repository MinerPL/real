e = n.nmd(e), n("854508");
var i = i || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      n = function() {
        return e.URL || e.webkitURL || e
      },
      i = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      r = "download" in i,
      o = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      l = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      s = e.webkitRequestFileSystem,
      a = e.requestFileSystem || s || e.mozRequestFileSystem,
      u = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t
        }, 0)
      },
      c = "application/octet-stream",
      d = 0,
      f = function(e) {
        setTimeout(function() {
          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
        }, 4e4)
      },
      E = function(e, t, n) {
        for (var i = (t = [].concat(t)).length; i--;) {
          var r = e["on" + t[i]];
          if ("function" == typeof r) try {
            r.call(e, n || e)
          } catch (e) {
            u(e)
          }
        }
      },
      _ = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      h = function(t, u, h) {
        !h && (t = _(t));
        var p, S, I = this,
          C = t.type,
          T = !1,
          N = function() {
            E(I, "writestart progress write writeend".split(" "))
          },
          v = function() {
            if (S && l && "undefined" != typeof FileReader) {
              var i = new FileReader;
              i.onloadend = function() {
                var e = i.result;
                S.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), I.readyState = I.DONE, N()
              }, i.readAsDataURL(t), I.readyState = I.INIT;
              return
            }(T || !p) && (p = n().createObjectURL(t)), S ? S.location.href = p : void 0 === e.open(p, "_blank") && l && (e.location.href = p), I.readyState = I.DONE, N(), f(p)
          },
          g = function(e) {
            return function() {
              if (I.readyState !== I.DONE) return e.apply(this, arguments)
            }
          },
          m = {
            create: !0,
            exclusive: !1
          };
        if (I.readyState = I.INIT, !u && (u = "download"), r) {
          p = n().createObjectURL(t), setTimeout(function() {
            i.href = p, i.download = u, o(i), N(), f(p), I.readyState = I.DONE
          });
          return
        }
        if (e.chrome && C && C !== c && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, c), T = !0), s && "download" !== u && (u += ".download"), (C === c || s) && (S = e), !a) {
          v();
          return
        }
        d += t.size, a(e.TEMPORARY, d, g(function(e) {
          e.root.getDirectory("saved", m, g(function(e) {
            var n = function() {
              e.getFile(u, m, g(function(e) {
                e.createWriter(g(function(n) {
                  n.onwriteend = function(t) {
                    S.location.href = e.toURL(), I.readyState = I.DONE, E(I, "writeend", t), f(e)
                  }, n.onerror = function() {
                    var e = n.error;
                    e.code !== e.ABORT_ERR && v()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    n["on" + e] = I["on" + e]
                  }), n.write(t), I.abort = function() {
                    n.abort(), I.readyState = I.DONE
                  }, I.readyState = I.WRITING
                }), v)
              }), v)
            };
            e.getFile(u, {
              create: !1
            }, g(function(e) {
              e.remove(), n()
            }), g(function(e) {
              e.code === e.NOT_FOUND_ERR ? n() : v()
            }))
          }), v)
        }), v)
      },
      p = h.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
      return !n && (e = _(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (p.abort = function() {
      this.readyState = this.DONE, E(this, "abort")
    }, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, function(e, t, n) {
      return new h(e, t, n)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = i : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return i
})
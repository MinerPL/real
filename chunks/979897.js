e = s.nmd(e), s("854508");
var a = a || function(e) {
  "use strict";
  if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
    var t = e.document,
      s = function() {
        return e.URL || e.webkitURL || e
      },
      a = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      n = "download" in a,
      l = function(e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t)
      },
      i = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
      r = e.webkitRequestFileSystem,
      o = e.requestFileSystem || r || e.mozRequestFileSystem,
      d = function(t) {
        (e.setImmediate || e.setTimeout)(function() {
          throw t
        }, 0)
      },
      u = "application/octet-stream",
      c = 0,
      S = function(e) {
        setTimeout(function() {
          "string" == typeof e ? s().revokeObjectURL(e) : e.remove()
        }, 4e4)
      },
      E = function(e, t, s) {
        for (var a = (t = [].concat(t)).length; a--;) {
          var n = e["on" + t[a]];
          if ("function" == typeof n) try {
            n.call(e, s || e)
          } catch (e) {
            d(e)
          }
        }
      },
      f = function(e) {
        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\xef\xbb\xbf", e], {
          type: e.type
        }) : e
      },
      T = function(t, d, T) {
        !T && (t = f(t));
        var m, _, g = this,
          h = t.type,
          I = !1,
          N = function() {
            E(g, "writestart progress write writeend".split(" "))
          },
          p = function() {
            if (_ && i && "undefined" != typeof FileReader) {
              var a = new FileReader;
              a.onloadend = function() {
                var e = a.result;
                _.location.href = "data:attachment/file" + e.slice(e.search(/[,;]/)), g.readyState = g.DONE, N()
              }, a.readAsDataURL(t), g.readyState = g.INIT;
              return
            }(I || !m) && (m = s().createObjectURL(t)), _ ? _.location.href = m : void 0 === e.open(m, "_blank") && i && (e.location.href = m), g.readyState = g.DONE, N(), S(m)
          },
          C = function(e) {
            return function() {
              if (g.readyState !== g.DONE) return e.apply(this, arguments)
            }
          },
          A = {
            create: !0,
            exclusive: !1
          };
        if (g.readyState = g.INIT, !d && (d = "download"), n) {
          m = s().createObjectURL(t), setTimeout(function() {
            a.href = m, a.download = d, l(a), N(), S(m), g.readyState = g.DONE
          });
          return
        }
        if (e.chrome && h && h !== u && (t = (t.slice || t.webkitSlice).call(t, 0, t.size, u), I = !0), r && "download" !== d && (d += ".download"), (h === u || r) && (_ = e), !o) {
          p();
          return
        }
        c += t.size, o(e.TEMPORARY, c, C(function(e) {
          e.root.getDirectory("saved", A, C(function(e) {
            var s = function() {
              e.getFile(d, A, C(function(e) {
                e.createWriter(C(function(s) {
                  s.onwriteend = function(t) {
                    _.location.href = e.toURL(), g.readyState = g.DONE, E(g, "writeend", t), S(e)
                  }, s.onerror = function() {
                    var e = s.error;
                    e.code !== e.ABORT_ERR && p()
                  }, "writestart progress write abort".split(" ").forEach(function(e) {
                    s["on" + e] = g["on" + e]
                  }), s.write(t), g.abort = function() {
                    s.abort(), g.readyState = g.DONE
                  }, g.readyState = g.WRITING
                }), p)
              }), p)
            };
            e.getFile(d, {
              create: !1
            }, C(function(e) {
              e.remove(), s()
            }), C(function(e) {
              e.code === e.NOT_FOUND_ERR ? s() : p()
            }))
          }), p)
        }), p)
      },
      m = T.prototype;
    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, s) {
      return !s && (e = f(e)), navigator.msSaveOrOpenBlob(e, t || "download")
    } : (m.abort = function() {
      this.readyState = this.DONE, E(this, "abort")
    }, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, function(e, t, s) {
      return new T(e, t, s)
    })
  }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
void 0 !== e && e.exports ? e.exports.saveAs = a : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
  return a
})
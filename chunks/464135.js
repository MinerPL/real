"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007");
var n = a("37983"),
  l = a("884691"),
  i = a("414456"),
  r = a.n(i),
  s = a("917351"),
  u = a("65597"),
  o = a("718776"),
  d = a("77078"),
  c = a("731898"),
  f = a("31695"),
  m = a("471671"),
  v = a("830837"),
  E = a("132755"),
  p = a("58608"),
  h = a("28388"),
  C = a("80028"),
  N = a("782340"),
  x = a("766825"),
  S = function(e) {
    var t, a, i, S, _, L;
    let {
      sourceURL: M,
      cropData: T,
      videoPlayerRef: A,
      setCropData: R
    } = e, [j, b] = l.useState((L = !(null === (a = A.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), L)), P = l.useRef(null), [w, D] = l.useState(null), [y, O] = l.useState(), k = l.useRef(null), F = l.useRef(null), [G, U] = l.useState(0), [B, V] = l.useState(!1), [H, z] = l.useState(null);
    (0, f.default)(() => {
      var e;
      let t = null === (e = A.current) || void 0 === e ? void 0 : e.videoElement;
      null != t && G !== t.currentTime && U(t.currentTime)
    });
    let Z = l.useMemo(() => T.end - T.start, [T]);
    l.useEffect(() => {
      var e;
      let t = null === (e = A.current) || void 0 === e ? void 0 : e.videoElement,
        a = k.current,
        n = F.current;
      if (null == t || null == a || null == n) return;
      let l = (0, s.debounce)(b, C.CLIP_PLAYING_DEBOUNCE_MS),
        i = () => {
          D(null), V(!1), l.cancel(), l(!0)
        },
        r = () => {
          l.cancel(), l(!1)
        };
      return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
        t.removeEventListener("play", i), t.removeEventListener("pause", r)
      }
    }, [A]);
    let {
      ref: K,
      width: X = 0,
      height: W = 0
    } = (0, c.default)(), Y = (0, u.default)([m.default], () => m.default.windowSize());
    l.useMemo(() => {
      let e = K.current;
      null != e && z(e.getBoundingClientRect())
    }, [Y.width, Y.height, X]);
    let q = l.useRef(null),
      J = l.useRef({}),
      Q = l.useCallback(e => {
        var t;
        let a = (0, s.clamp)(e, 0, T.end - C.MIN_CLIP_DURATION_SECONDS);
        R({
          ...T,
          start: a
        }), null === (t = A.current) || void 0 === t || t.seek(a)
      }, [T, R, A]),
      $ = l.useCallback(e => {
        var t, a;
        let n = null === (t = A.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == n) return;
        let l = (0, s.clamp)(e, T.start + C.MIN_CLIP_DURATION_SECONDS, n.duration);
        R({
          ...T,
          end: l
        }), null === (a = A.current) || void 0 === a || a.seek(l)
      }, [T, R, A]),
      ee = l.useCallback((e, t) => {
        var a, n;
        if (null == y) return;
        if (null == H) return null;
        let l = (0, s.clamp)(e, H.left, H.right),
          i = (l - H.left) / H.width * y,
          r = (0, s.clamp)(i, 0, y),
          u = w;
        if (null == u && t && (u = r <= T.start ? "start" : r >= T.end ? "end" : "playhead", null === (a = A.current) || void 0 === a || a.pause(), D(u), V(j)), "start" === u) Q(r);
        else if ("end" === u) $(r);
        else if ("playhead" === u) {
          let e = (0, s.clamp)(r, T.start, T.end);
          null === (n = A.current) || void 0 === n || n.seek(e)
        }
      }, [y, H, w, T.start, T.end, A, j, Q, $]),
      et = l.useCallback(e => {
        var t;
        let a = null === (t = A.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == a) return;
        let n = (0, h.default)(a.duration, e.shiftKey),
          l = !1;
        switch (e.key) {
          case "ArrowLeft":
            l = !0, Q(T.start - n);
            break;
          case "ArrowRight":
            l = !0, Q(T.start + n)
        }
        l && (e.stopPropagation(), e.preventDefault())
      }, [A, Q, T.start]),
      ea = l.useCallback(e => {
        var t;
        let a = null === (t = A.current) || void 0 === t ? void 0 : t.videoElement;
        if (null == a) return;
        let n = (0, h.default)(a.duration, e.shiftKey),
          l = !1;
        switch (e.key) {
          case "ArrowLeft":
            l = !0, $(T.end - n);
            break;
          case "ArrowRight":
            l = !0, $(T.end + n)
        }
        l && (e.stopPropagation(), e.preventDefault())
      }, [A, $, T.end]),
      en = l.useCallback(e => {
        ee(e.clientX, !0)
      }, [ee]),
      el = l.useCallback(e => {
        ee(e.clientX, !1)
      }, [ee]),
      ei = l.useCallback(() => {
        if (B) {
          var e;
          null === (e = A.current) || void 0 === e || e.play()
        }
        V(!1), D(null)
      }, [A, B]);
    l.useEffect(() => (document.addEventListener("mousemove", el), document.addEventListener("mouseup", ei), () => {
      document.removeEventListener("mousemove", el), document.removeEventListener("mouseup", ei)
    }), [el, ei]), l.useEffect(() => {
      (async function e() {
        var e;
        let t = K.current,
          a = P.current;
        if (null == t || null == a || null == y) return;
        t.height = W, t.width = X;
        let n = t.getContext("2d");
        if (null == n) return;
        n.fillStyle = "#000", n.fillRect(0, 0, X, W);
        let l = a.videoWidth / a.videoHeight,
          i = Math.ceil(W * l),
          r = Math.ceil(X / i),
          s = q.current;
        if (null == s) return;
        s.width = i, s.height = W;
        let u = null == s ? void 0 : s.getContext("2d", {
          willReadFrequently: !0
        });
        if (null == u) return;
        let o = J.current;
        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
          for (let e = 0; e < r; e++) n.putImageData(o[r][e], i * e, 0);
          return
        }
        for (let e = 0; e < r; e++) await new Promise(t => {
          a.onseeked = () => {
            n.drawImage(a, i * e, 0, i, W), u.drawImage(a, 0, 0, i, W);
            let l = u.getImageData(0, 0, i, W);
            null == o[r] && (o[r] = []), o[r][e] = l, t()
          }, a.currentTime = i / X * y * e
        })
      })()
    }, [X, W, K, y, q]);
    let er = G - T.start,
      es = null === (i = A.current) || void 0 === i ? void 0 : i.videoElement;
    return (0, n.jsx)("div", {
      className: x.centeringWrapper,
      children: (0, n.jsxs)("div", {
        className: x.timelineContainer,
        children: [(0, n.jsx)("div", {
          className: x.playPauseButtonWrapper,
          children: (0, n.jsx)(d.Clickable, {
            tabIndex: 0,
            onClick: () => {
              var e, t;
              return j ? null === (e = A.current) || void 0 === e ? void 0 : e.pause() : null === (t = A.current) || void 0 === t ? void 0 : t.play()
            },
            className: x.playPauseButton,
            children: j ? (0, n.jsx)(v.default, {
              width: 24,
              height: 24,
              className: x.playPauseIcon
            }) : (0, n.jsx)(E.default, {
              width: 24,
              height: 24,
              className: x.playPauseIcon
            })
          })
        }), (0, n.jsxs)("div", {
          className: r(x.timeline, {
            [x.timelineDragging]: null != w
          }),
          onMouseDown: en,
          children: [(0, n.jsx)("canvas", {
            className: x.hiddenCanvas,
            ref: q
          }), (0, n.jsx)("canvas", {
            className: x.timelineBackground,
            ref: K
          }), (0, n.jsx)(o.FocusRing, {
            children: (0, n.jsx)("div", {
              tabIndex: 0,
              ref: k,
              className: x.playhead,
              style: {
                left: null != es ? "".concat(es.currentTime / es.duration * 100, "%") : 0
              }
            })
          }), (0, n.jsx)(p.default, {
            preload: "auto",
            onLoadedMetadata: function() {
              let e = P.current;
              if (null != e) {
                if (O(e.duration), 0 === T.start && (0 === T.end || T.end === e.duration)) {
                  var t;
                  null === (t = A.current) || void 0 === t || t.seek(e.duration / 2), U(e.duration / 2)
                }
                0 === T.end && R(t => ({
                  ...t,
                  end: e.duration
                }))
              }
            },
            className: x.timelineVideo,
            ref: P,
            src: M,
            muted: !0
          }), (0, n.jsxs)("div", {
            className: x.dragBox,
            style: {
              left: null != y ? "".concat(T.start / y * 100, "%") : "0",
              right: null != y ? "".concat((y - T.end) / y * 100, "%") : "0"
            },
            children: [(0, n.jsx)("div", {
              className: x.timePillContainer,
              children: (0, n.jsx)("div", {
                ref: F,
                className: x.timePillBackground,
                children: (0, n.jsxs)(d.Text, {
                  variant: "text-sm/normal",
                  className: x.timePillText,
                  color: "always-white",
                  children: [I(er), (0, n.jsx)("span", {
                    className: x.slashCharacter,
                    children: " / "
                  }), I(Z)]
                })
              })
            }), (0, n.jsx)(o.FocusRing, {
              children: (0, n.jsx)("button", {
                className: r(x.dragHandleLeft, {
                  [x.dragging]: "start" === w
                }),
                onMouseDown: en,
                onKeyDown: et,
                role: "slider",
                tabIndex: 0,
                "aria-valuemin": 0,
                "aria-valuenow": T.start,
                "aria-valuetext": g(T.start),
                "aria-valuemax": T.end - C.MIN_CLIP_DURATION_SECONDS,
                "aria-label": N.default.Messages.CLIPS_CROP_START,
                children: (0, n.jsx)("div", {
                  className: x.cropLeftArrow
                })
              })
            }), (0, n.jsx)(o.FocusRing, {
              children: (0, n.jsx)("button", {
                className: r(x.dragHandleRight, {
                  [x.dragging]: "end" === w
                }),
                onMouseDown: en,
                onKeyDown: ea,
                role: "slider",
                tabIndex: 0,
                "aria-valuemin": T.start + C.MIN_CLIP_DURATION_SECONDS,
                "aria-valuenow": T.end,
                "aria-valuetext": g(T.end),
                "aria-valuemax": null === (_ = A.current) || void 0 === _ ? void 0 : null === (S = _.videoElement) || void 0 === S ? void 0 : S.duration,
                "aria-label": N.default.Messages.CLIPS_CROP_END,
                children: (0, n.jsx)("div", {
                  className: x.cropRightArrow
                })
              })
            })]
          })]
        })]
      })
    })
  };

function I(e) {
  ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
  let t = Math.floor(e / 60),
    a = Math.floor(e % 60),
    n = Math.floor(e % 1 * 100);
  return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, n = n < 10 ? "0" + n : n, "".concat(t, ":").concat(a, ".").concat(n)
}

function g(e) {
  let t = N.default.Messages.DURATION_MINUTES.format({
      minutes: Math.floor(e / 60)
    }),
    a = N.default.Messages.DURATION_SECONDS.format({
      seconds: e % 60
    });
  return "".concat(t, " ").concat(a)
}
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return h
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return T
                },
                dataUrlToFile: function() {
                    return A
                },
                isPNGAnimated: function() {
                    return p
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var l = n("627445"),
                i = n.n(l),
                r = n("917351"),
                s = n.n(r),
                a = n("48648"),
                o = n.n(a);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i,
                    minWidth: r = 0,
                    minHeight: s = 0
                } = e;
                if (t !== l || n !== i) {
                    let e = t > l ? l / t : 1;
                    t = Math.max(Math.round(t * e), r), n = Math.max(Math.round(n * e), s);
                    let a = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * a), r), n = Math.max(Math.round(n * a), s)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    l = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: l,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e, r = 1;
                t > l && (r = l / t), t = Math.round(t * r);
                let s = 1;
                return (n = Math.round(n * r)) > i && (s = i / n), Math.min(r * s, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: l,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(l / t, i / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let l = document.createElement("canvas"),
                    i = l.getContext("2d");
                if (null == i) return f;
                let r = l.width = 0 === e.width ? 128 : e.width,
                    s = l.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, r, s);
                let a = i.getImageData(0, 0, r, s).data,
                    u = function(e, t, n) {
                        let l = [];
                        for (let i = 0, r, s, a, o, u; i < t; i += n) s = e[(r = 4 * i) + 0], a = e[r + 1], o = e[r + 2], (void 0 === (u = e[r + 3]) || u >= 125) && !(s > 250 && a > 250 && o > 250) && l.push([s, a, o]);
                        return l
                    }(a, r * s, n),
                    d = o(u, t);
                return "boolean" == typeof d ? f : d.palette()
            }
            let h = e => "number" == typeof e ? null : g(e),
                g = s.memoize(e => new Promise((t, n) => {
                    let l = new Image;
                    l.crossOrigin = "Anonymous", l.onerror = e => {
                        n(e), l.onerror = l.onload = null, l = null
                    }, l.onload = () => {
                        t(I(l, 5, 10)), l.onerror = l.onload = null, l = null
                    }, l.src = e
                }));

            function N(e) {
                return new Promise((t, n) => {
                    let l = new FileReader;
                    l.readAsDataURL(e), l.onload = () => {
                        i("string" == typeof l.result, "Result must be a string"), t(l.result)
                    }, l.onerror = e => n(e)
                })
            }

            function T(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function A(e, t, n) {
                let l = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            l = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) l[i] = t.charCodeAt(i);
                        return new Blob([l], {
                            type: n
                        })
                    }(e),
                    i = await l.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function p(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let l = await e.text(),
                    i = l.indexOf("IDAT");
                return !!(i > 0) && -1 !== l.substring(0, i).indexOf("acTL") || !1
            }
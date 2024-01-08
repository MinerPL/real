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
                    return _
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return A
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return R
                },
                dataUrlToFile: function() {
                    return N
                },
                isPNGAnimated: function() {
                    return p
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                a = n("917351"),
                o = n.n(a),
                s = n("48648"),
                l = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: a = 0,
                    minHeight: o = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), a), n = Math.max(Math.round(n * e), o);
                    let s = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), a), n = Math.max(Math.round(n * s), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, a = 1;
                t > r && (a = r / t), t = Math.round(t * a);
                let o = 1;
                return (n = Math.round(n * a)) > i && (o = i / n), Math.min(a * o, 1)
            }

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return f;
                let a = r.width = 0 === e.width ? 128 : e.width,
                    o = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, a, o);
                let s = i.getImageData(0, 0, a, o).data,
                    u = function(e, t, n) {
                        let r = [];
                        for (let i = 0, a, o, s, l, u; i < t; i += n) o = e[(a = 4 * i) + 0], s = e[a + 1], l = e[a + 2], (void 0 === (u = e[a + 3]) || u >= 125) && !(o > 250 && s > 250 && l > 250) && r.push([o, s, l]);
                        return r
                    }(s, a * o, n),
                    d = l(u, t);
                return "boolean" == typeof d ? f : d.palette()
            }
            let A = e => "number" == typeof e ? null : S(e),
                S = o.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function R(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function N(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function p(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
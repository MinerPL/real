            "use strict";
            let r, i, a, s, o;
            n.r(e), n.d(e, {
                Replay: function() {
                    return e$
                }
            }), n("990131"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("781738"), n("424973"), n("222007"), n("426094"), n("70102"), n("843762"), n("311790"), n("370692"), n("667500"), n("527135"), n("659510"), n("477315"), n("453061"), n("332822"), n("808653"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var c, l, u, d, h, f, p, _, g, m, y, v, E, b, S, w, T = n("675065"),
                k = n("103787"),
                R = n("390493");
            let x = k.GLOBAL_OBJ,
                D = "sentryReplaySession",
                N = "Unable to send Replay";
            (g = c || (c = {}))[g.Document = 0] = "Document", g[g.DocumentType = 1] = "DocumentType", g[g.Element = 2] = "Element", g[g.Text = 3] = "Text", g[g.CDATA = 4] = "CDATA", g[g.Comment = 5] = "Comment";

            function I(t) {
                let e = null == t ? void 0 : t.host;
                return !!(e && e.shadowRoot && e.shadowRoot === t)
            }

            function C(t) {
                let {
                    maskInputOptions: e,
                    tagName: n,
                    type: r
                } = t;
                "option" === n.toLowerCase() && (n = "select");
                let i = "string" == typeof r ? r.toLowerCase() : void 0;
                return e[n.toLowerCase()] || i && e[i] || "password" === i || "input" === n && !r && e.text
            }

            function O(t) {
                let {
                    input: e,
                    maskInputSelector: n,
                    unmaskInputSelector: r,
                    maskInputOptions: i,
                    tagName: a,
                    type: s,
                    value: o,
                    maskInputFn: c
                } = t, l = o || "";
                return r && e.matches(r) ? l : (e.hasAttribute("data-rr-is-password") && (s = "password"), (C({
                    maskInputOptions: i,
                    tagName: a,
                    type: s
                }) || n && e.matches(n)) && (l = c ? c(l) : "*".repeat(l.length)), l)
            }
            let A = "__rrweb_original__";

            function U(t) {
                let e = t.type;
                return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
            }

            function B(t, e, n) {
                return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
            }
            let L = 1,
                M = RegExp("[^a-z0-9-_:]");

            function P(t) {
                return t ? t.replace(/[\S]/g, "*") : ""
            }

            function G(t) {
                try {
                    let e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(Y).join("") : null
                } catch (t) {
                    return null
                }
            }

            function Y(t) {
                let e = t.cssText;
                if (function(t) {
                        return "styleSheet" in t
                    }(t)) try {
                    e = G(t.styleSheet) || e
                } catch (t) {}
                return F(e)
            }

            function F(t) {
                return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
            }
            let z = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                H = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                W = /^(data:)([^,]*),(.*)/i;

            function j(t, e) {
                return (t || "").replace(z, (t, n, r, i, a, s) => {
                    let o = r || a || s,
                        c = n || i || "";
                    if (!o) return t;
                    if (!H.test(o) || W.test(o)) return "url(".concat(c).concat(o).concat(c, ")");
                    if ("/" === o[0]) {
                        var l;
                        let t;
                        return "url(".concat(c).concat((t = "", (t = (t = (l = e).indexOf("//") > -1 ? l.split("/").slice(0, 3).join("/") : l.split("/")[0]).split("?")[0]) + o)).concat(c, ")")
                    }
                    let u = e.split("/"),
                        d = o.split("/");
                    for (let t of (u.pop(), d)) {
                        if ("." !== t) ".." === t ? u.pop() : u.push(t)
                    }
                    return "url(".concat(c).concat(u.join("/")).concat(c, ")")
                })
            }
            let q = /^[^ \t\n\r\u000c]+/,
                Z = /^[, \t\n\r\u000c]+/;

            function V(t, e) {
                if (!e || "" === e.trim()) return e;
                let n = t.createElement("a");
                return n.href = e, n.href
            }

            function K() {
                let t = document.createElement("a");
                return t.href = "", t.href
            }

            function J(t, e, n, r, i, a, s, o) {
                if (!i) return i;
                let c = r.toLowerCase(),
                    l = n.toLowerCase();
                if ("src" === c || "href" === c) return V(t, i);
                if ("xlink:href" === c && "#" !== i[0]) return V(t, i);
                if ("background" === c && ("table" === l || "td" === l || "th" === l)) return V(t, i);
                else if ("srcset" === c) return function(t, e) {
                    if ("" === e.trim()) return e;
                    let n = 0;

                    function r(t) {
                        let r;
                        let i = t.exec(e.substring(n));
                        return i ? (r = i[0], n += r.length, r) : ""
                    }
                    let i = [];
                    for (; r(Z), !(n >= e.length);) {
                        ;
                        let a = r(q);
                        if ("," === a.slice(-1)) a = V(t, a.substring(0, a.length - 1)), i.push(a);
                        else {
                            let r = "";
                            a = V(t, a);
                            let s = !1;
                            for (;;) {
                                let t = e.charAt(n);
                                if ("" === t) {
                                    i.push((a + r).trim());
                                    break
                                }
                                if (s) ")" === t && (s = !1);
                                else {
                                    if ("," === t) {
                                        n += 1, i.push((a + r).trim());
                                        break
                                    }
                                    "(" === t && (s = !0)
                                }
                                r += t, n += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(t, i);
                else if ("style" === c) return j(i, K());
                else if ("object" === l && "data" === c) return V(t, i);
                else if (a && function(t, e, n, r) {
                        return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
                    }(e, c, l, s)) return o ? o(i) : P(i);
                return i
            }

            function X(t, e, n, r, i) {
                if (!t) return !1;
                if (t.nodeType !== t.ELEMENT_NODE) return X(t.parentNode, e, n, r, i);
                if (r && (t.matches(r) || t.closest(r))) return !1;
                if (i) return !0;
                if ("string" == typeof e) {
                    if (t.classList.contains(e)) return !0
                } else
                    for (let n = 0; n < t.classList.length; n++) {
                        let r = t.classList[n];
                        if (e.test(r)) return !0
                    }
                return !!(n && t.matches(n)) || X(t.parentNode, e, n, r, i)
            }

            function $(t) {
                return null == t ? "" : t.toLowerCase()
            }

            function Q(t, e) {
                let n;
                let {
                    doc: a,
                    map: s,
                    blockClass: o,
                    blockSelector: l,
                    unblockSelector: u,
                    maskTextClass: d,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    skipChild: p = !1,
                    inlineStylesheet: _ = !0,
                    maskInputSelector: g,
                    unmaskInputSelector: m,
                    maskAllText: y,
                    maskInputOptions: v = {},
                    maskTextFn: E,
                    maskInputFn: b,
                    slimDOMOptions: S,
                    dataURLOptions: w = {},
                    inlineImages: T = !1,
                    recordCanvas: k = !1,
                    onSerialize: R,
                    onIframeLoad: x,
                    iframeLoadTimeout: D = 5e3,
                    keepIframeSrcFn: N = () => !1
                } = e, {
                    preserveWhiteSpace: C = !0
                } = e, Y = function(t, e) {
                    var n, a, s;
                    let o;
                    let {
                        doc: l,
                        blockClass: u,
                        blockSelector: d,
                        unblockSelector: h,
                        maskTextClass: f,
                        maskTextSelector: p,
                        unmaskTextSelector: _,
                        inlineStylesheet: g,
                        maskInputSelector: m,
                        unmaskInputSelector: y,
                        maskAllText: v,
                        maskInputOptions: E = {},
                        maskTextFn: b,
                        maskInputFn: S,
                        dataURLOptions: w = {},
                        inlineImages: T,
                        recordCanvas: k,
                        keepIframeSrcFn: R
                    } = e;
                    if (l.__sn) {
                        let t = l.__sn.id;
                        o = 1 === t ? void 0 : t
                    }
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            if ("CSS1Compat" !== t.compatMode) return {
                                type: c.Document,
                                childNodes: [],
                                compatMode: t.compatMode,
                                rootId: o
                            };
                            return {
                                type: c.Document, childNodes: [], rootId: o
                            };
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: c.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: o
                            };
                        case t.ELEMENT_NODE:
                            ;
                            let x = function(t, e, n, r) {
                                    if (r && t.matches(r)) return !1;
                                    if ("string" == typeof e) {
                                        if (t.classList.contains(e)) return !0
                                    } else
                                        for (let n = 0; n < t.classList.length; n++) {
                                            let r = t.classList[n];
                                            if (e.test(r)) return !0
                                        }
                                    return !!n && t.matches(n)
                                }(t, u, d, h),
                                D = function(t) {
                                    if (t instanceof HTMLFormElement) return "form";
                                    let e = t.tagName.toLowerCase().trim();
                                    return M.test(e) ? "div" : e
                                }(t),
                                N = {};
                            for (let {
                                    name: e,
                                    value: n
                                }
                                of Array.from(t.attributes)) ! function(t, e, n) {
                                return ("video" === t || "audio" === t) && "autoplay" === e
                            }(D, e) && (N[e] = J(l, t, D, e, n, v, _, b));
                            if ("link" === D && g) {
                                let e = Array.from(l.styleSheets).find(e => e.href === t.href),
                                    n = null;
                                e && (n = G(e)), n && (delete N.rel, delete N.href, N._cssText = j(n, e.href))
                            }
                            if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                let e = G(t.sheet);
                                e && (N._cssText = j(e, K()))
                            }
                            if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
                                let e = U(t),
                                    n = B(t, D.toUpperCase(), e),
                                    r = t.checked;
                                "submit" !== e && "button" !== e && n && (N.value = O({
                                    input: t,
                                    type: e,
                                    tagName: D,
                                    value: n,
                                    maskInputSelector: m,
                                    unmaskInputSelector: y,
                                    maskInputOptions: E,
                                    maskInputFn: S
                                })), r && (N.checked = r)
                            }
                            if ("option" === D && (t.selected && !E.select ? N.selected = !0 : delete N.selected), "canvas" === D && k) {
                                if ("2d" === t.__context) ! function(t) {
                                    let e = t.getContext("2d");
                                    if (!e) return !0;
                                    for (let n = 0; n < t.width; n += 50)
                                        for (let r = 0; r < t.height; r += 50) {
                                            let i = e.getImageData,
                                                a = A in i ? i[A] : i,
                                                s = new Uint32Array(a.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer);
                                            if (s.some(t => 0 !== t)) return !1
                                        }
                                    return !0
                                }(t) && (N.rr_dataURL = t.toDataURL(w.type, w.quality));
                                else if (!("__context" in t)) {
                                    let e = t.toDataURL(w.type, w.quality),
                                        n = document.createElement("canvas");
                                    n.width = t.width, n.height = t.height;
                                    let r = n.toDataURL(w.type, w.quality);
                                    e !== r && (N.rr_dataURL = e)
                                }
                            }
                            if ("img" === D && T) {
                                !r && (i = (r = l.createElement("canvas")).getContext("2d"));
                                let e = t.crossOrigin;
                                t.crossOrigin = "anonymous";
                                let n = () => {
                                    try {
                                        r.width = t.naturalWidth, r.height = t.naturalHeight, i.drawImage(t, 0, 0), N.rr_dataURL = r.toDataURL(w.type, w.quality)
                                    } catch (e) {
                                        console.warn("Cannot inline img src=".concat(t.currentSrc, "! Error: ").concat(e))
                                    }
                                    e ? N.crossOrigin = e : delete N.crossOrigin
                                };
                                t.complete && 0 !== t.naturalWidth ? n() : t.onload = n
                            }
                            if (("audio" === D || "video" === D) && (N.rr_mediaState = t.paused ? "paused" : "played", N.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (N.rr_scrollLeft = t.scrollLeft), t.scrollTop && (N.rr_scrollTop = t.scrollTop), x) {
                                let {
                                    width: e,
                                    height: n
                                } = t.getBoundingClientRect();
                                N = {
                                    class: N.class,
                                    rr_width: "".concat(e, "px"),
                                    rr_height: "".concat(n, "px")
                                }
                            }
                            return "iframe" === D && !R(N.src) && (!t.contentDocument && (N.rr_src = N.src), delete N.src), {
                                type: c.Element,
                                tagName: D,
                                attributes: N,
                                childNodes: [],
                                isSVG: !!("svg" === (a = t).tagName || a.ownerSVGElement) || void 0,
                                needBlock: x,
                                rootId: o
                            };
                        case t.TEXT_NODE:
                            let I = t.parentNode && t.parentNode.tagName,
                                C = t.textContent,
                                L = "STYLE" === I || void 0,
                                Y = "SCRIPT" === I || void 0;
                            if (L && C) {
                                try {
                                    if (t.nextSibling || t.previousSibling);
                                    else if (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) {
                                        ;
                                        C = (s = t.parentNode.sheet).cssRules ? Array.from(s.cssRules).map(t => t.cssText ? F(t.cssText) : "").join("") : ""
                                    }
                                } catch (e) {
                                    console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(e), t)
                                }
                                C = j(C, K())
                            }
                            if (Y && (C = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === I && C) C = "";
                            else if ("OPTION" === I && C) {
                                let e = t.parentNode;
                                C = O({
                                    input: e,
                                    type: null,
                                    tagName: I,
                                    value: C,
                                    maskInputSelector: m,
                                    unmaskInputSelector: y,
                                    maskInputOptions: E,
                                    maskInputFn: S
                                })
                            } else !L && !Y && X(t, f, p, _, v) && C && (C = b ? b(C) : P(C));
                            return {
                                type: c.Text, textContent: C || "", isStyle: L, rootId: o
                            };
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: c.CDATA, textContent: "", rootId: o
                            };
                        case t.COMMENT_NODE:
                            return {
                                type: c.Comment, textContent: t.textContent || "", rootId: o
                            };
                        default:
                            return !1
                    }
                }(t, {
                    doc: a,
                    blockClass: o,
                    blockSelector: l,
                    unblockSelector: u,
                    maskTextClass: d,
                    maskTextSelector: h,
                    unmaskTextSelector: f,
                    inlineStylesheet: _,
                    maskInputSelector: g,
                    unmaskInputSelector: m,
                    maskAllText: y,
                    maskInputOptions: v,
                    maskTextFn: E,
                    maskInputFn: b,
                    dataURLOptions: w,
                    inlineImages: T,
                    recordCanvas: k,
                    keepIframeSrcFn: N
                });
                if (!Y) return console.warn(t, "not serialized"), null;
                n = "__sn" in t ? t.__sn.id : ! function(t, e) {
                    if (e.comment && t.type === c.Comment) return !0;
                    if (t.type === c.Element) {
                        if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                        if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && ($(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === $(t.attributes.name) || "icon" === $(t.attributes.rel) || "apple-touch-icon" === $(t.attributes.rel) || "shortcut icon" === $(t.attributes.rel)))) return !0;
                        else if ("meta" === t.tagName) {
                            if (e.headMetaDescKeywords && $(t.attributes.name).match(/^description|keywords$/)) return !0;
                            if (e.headMetaSocial && ($(t.attributes.property).match(/^(og|twitter|fb):/) || $(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === $(t.attributes.name))) return !0;
                            else if (e.headMetaRobots && ("robots" === $(t.attributes.name) || "googlebot" === $(t.attributes.name) || "bingbot" === $(t.attributes.name))) return !0;
                            else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                            else if (e.headMetaAuthorship && ("author" === $(t.attributes.name) || "generator" === $(t.attributes.name) || "framework" === $(t.attributes.name) || "publisher" === $(t.attributes.name) || "progid" === $(t.attributes.name) || $(t.attributes.property).match(/^article:/) || $(t.attributes.property).match(/^product:/))) return !0;
                            else if (e.headMetaVerification && ("google-site-verification" === $(t.attributes.name) || "yandex-verification" === $(t.attributes.name) || "csrf-token" === $(t.attributes.name) || "p:domain_verify" === $(t.attributes.name) || "verify-v1" === $(t.attributes.name) || "verification" === $(t.attributes.name) || "shopify-checkout-api-token" === $(t.attributes.name))) return !0
                        }
                    }
                    return !1
                }(Y, S) && (C || Y.type !== c.Text || Y.isStyle || Y.textContent.replace(/^\s+|\s+$/gm, "").length) ? L++ : -2;
                let z = Object.assign(Y, {
                    id: n
                });
                if (t.__sn = z, -2 === n) return null;
                s[n] = t, R && R(t);
                let H = !p;
                if (z.type === c.Element && (H = H && !z.needBlock, delete z.needBlock, t.shadowRoot && (z.isShadowHost = !0)), (z.type === c.Document || z.type === c.Element) && H) {
                    var W;
                    S.headWhitespace && Y.type === c.Element && "head" === Y.tagName && (C = !1);
                    let e = {
                        doc: a,
                        map: s,
                        blockClass: o,
                        blockSelector: l,
                        unblockSelector: u,
                        maskTextClass: d,
                        maskTextSelector: h,
                        unmaskTextSelector: f,
                        skipChild: p,
                        inlineStylesheet: _,
                        maskInputSelector: g,
                        unmaskInputSelector: m,
                        maskAllText: y,
                        maskInputOptions: v,
                        maskTextFn: E,
                        maskInputFn: b,
                        slimDOMOptions: S,
                        dataURLOptions: w,
                        inlineImages: T,
                        recordCanvas: k,
                        preserveWhiteSpace: C,
                        onSerialize: R,
                        onIframeLoad: x,
                        iframeLoadTimeout: D,
                        keepIframeSrcFn: N
                    };
                    for (let n of Array.from(t.childNodes)) {
                        let t = Q(n, e);
                        t && z.childNodes.push(t)
                    }
                    if ((W = t).nodeType === W.ELEMENT_NODE && t.shadowRoot)
                        for (let n of Array.from(t.shadowRoot.childNodes)) {
                            let t = Q(n, e);
                            t && (t.isShadow = !0, z.childNodes.push(t))
                        }
                }
                return t.parentNode && I(t.parentNode) && (z.isShadow = !0), z.type === c.Element && "iframe" === z.tagName && ! function(t, e, n) {
                    let r;
                    let i = t.contentWindow;
                    if (!i) return;
                    let a = !1;
                    try {
                        r = i.document.readyState
                    } catch (t) {
                        return
                    }
                    if ("complete" !== r) {
                        let r = setTimeout(() => {
                            !a && (e(), a = !0)
                        }, n);
                        t.addEventListener("load", () => {
                            clearTimeout(r), a = !0, e()
                        });
                        return
                    }
                    let s = "about:blank";
                    if (i.location.href !== s || t.src === s || "" === t.src) {
                        setTimeout(e, 0);
                        return
                    }
                    t.addEventListener("load", e)
                }(t, () => {
                    let e = t.contentDocument;
                    if (e && x) {
                        let n = Q(e, {
                            doc: e,
                            map: s,
                            blockClass: o,
                            blockSelector: l,
                            unblockSelector: u,
                            maskTextClass: d,
                            maskTextSelector: h,
                            unmaskTextSelector: f,
                            skipChild: !1,
                            inlineStylesheet: _,
                            maskInputSelector: g,
                            unmaskInputSelector: m,
                            maskAllText: y,
                            maskInputOptions: v,
                            maskTextFn: E,
                            maskInputFn: b,
                            slimDOMOptions: S,
                            dataURLOptions: w,
                            inlineImages: T,
                            recordCanvas: k,
                            preserveWhiteSpace: C,
                            onSerialize: R,
                            onIframeLoad: x,
                            iframeLoadTimeout: D,
                            keepIframeSrcFn: N
                        });
                        n && x(t, n)
                    }
                }, D), z
            }

            function tt(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = {
                        capture: !0,
                        passive: !0
                    };
                return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
            }(m = l || (l = {}))[m.DomContentLoaded = 0] = "DomContentLoaded", m[m.Load = 1] = "Load", m[m.FullSnapshot = 2] = "FullSnapshot", m[m.IncrementalSnapshot = 3] = "IncrementalSnapshot", m[m.Meta = 4] = "Meta", m[m.Custom = 5] = "Custom", m[m.Plugin = 6] = "Plugin", (y = u || (u = {}))[y.Mutation = 0] = "Mutation", y[y.MouseMove = 1] = "MouseMove", y[y.MouseInteraction = 2] = "MouseInteraction", y[y.Scroll = 3] = "Scroll", y[y.ViewportResize = 4] = "ViewportResize", y[y.Input = 5] = "Input", y[y.TouchMove = 6] = "TouchMove", y[y.MediaInteraction = 7] = "MediaInteraction", y[y.StyleSheetRule = 8] = "StyleSheetRule", y[y.CanvasMutation = 9] = "CanvasMutation", y[y.Font = 10] = "Font", y[y.Log = 11] = "Log", y[y.Drag = 12] = "Drag", y[y.StyleDeclaration = 13] = "StyleDeclaration", (v = d || (d = {}))[v.MouseUp = 0] = "MouseUp", v[v.MouseDown = 1] = "MouseDown", v[v.Click = 2] = "Click", v[v.ContextMenu = 3] = "ContextMenu", v[v.DblClick = 4] = "DblClick", v[v.Focus = 5] = "Focus", v[v.Blur = 6] = "Blur", v[v.TouchStart = 7] = "TouchStart", v[v.TouchMove_Departed = 8] = "TouchMove_Departed", v[v.TouchEnd = 9] = "TouchEnd", v[v.TouchCancel = 10] = "TouchCancel", (E = h || (h = {}))[E["2D"] = 0] = "2D", E[E.WebGL = 1] = "WebGL", E[E.WebGL2 = 2] = "WebGL2", (b = f || (f = {}))[b.Play = 0] = "Play", b[b.Pause = 1] = "Pause", b[b.Seeked = 2] = "Seeked", b[b.VolumeChange = 3] = "VolumeChange", (S = p || (p = {})).Start = "start", S.Pause = "pause", S.Resume = "resume", S.Resize = "resize", S.Finish = "finish", S.FullsnapshotRebuilded = "fullsnapshot-rebuilded", S.LoadStylesheetStart = "load-stylesheet-start", S.LoadStylesheetEnd = "load-stylesheet-end", S.SkipStart = "skip-start", S.SkipEnd = "skip-end", S.MouseInteraction = "mouse-interaction", S.EventCast = "event-cast", S.CustomEvent = "custom-event", S.Flush = "flush", S.StateChange = "state-change", S.PlayBack = "play-back";
            let te = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                tn = {
                    map: {},
                    getId: () => (console.error(te), -1),
                    getNode: () => (console.error(te), null),
                    removeNodeFromMap() {
                        console.error(te)
                    },
                    has: () => (console.error(te), !1),
                    reset() {
                        console.error(te)
                    }
                };

            function tr(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = null,
                    i = 0;
                return function(a) {
                    let s = Date.now();
                    !i && !1 === n.leading && (i = s);
                    let o = e - (s - i),
                        c = this,
                        l = arguments;
                    o <= 0 || o > e ? (r && (clearTimeout(r), r = null), i = s, t.apply(c, l)) : !r && !1 !== n.trailing && (r = setTimeout(() => {
                        i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(c, l)
                    }, o))
                }
            }

            function ti(t, e, n, r) {
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window,
                    a = i.Object.getOwnPropertyDescriptor(t, e);
                return i.Object.defineProperty(t, e, r ? n : {
                    set(t) {
                        setTimeout(() => {
                            n.set.call(this, t)
                        }, 0), a && a.set && a.set.call(this, t)
                    }
                }), () => ti(t, e, a || {}, !0)
            }

            function ta(t, e, n) {
                try {
                    if (!(e in t)) return () => {};
                    let r = t[e],
                        i = n(r);
                    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })), t[e] = i, () => {
                        t[e] = r
                    }
                } catch (t) {
                    return () => {}
                }
            }

            function ts() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function to() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function tc(t, e, n, r) {
                if (!t) return !1;
                if (t.nodeType === t.ELEMENT_NODE) {
                    let i = !1,
                        a = r && t.matches(r);
                    return "string" == typeof e ? i = void 0 !== t.closest ? !a && null !== t.closest("." + e) : !a && t.classList.contains(e) : a || t.classList.forEach(t => {
                        e.test(t) && (i = !0)
                    }), !i && n && (i = t.matches(n)), !a && i || tc(t.parentNode, e, n, r)
                }
                return t.nodeType, t.TEXT_NODE, tc(t.parentNode, e, n, r)
            }

            function tl(t) {
                return "__sn" in t && -2 === t.__sn.id
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (tn = new Proxy(tn, {
                get: (t, e, n) => ("map" === e && console.error(te), Reflect.get(t, e, n))
            }));

            function tu(t) {
                return !!t.changedTouches
            }

            function td(t) {
                return "__sn" in t && t.__sn.type === c.Element && "iframe" === t.__sn.tagName
            }

            function th(t) {
                return !!(null == t ? void 0 : t.shadowRoot)
            }

            function tf(t) {
                return "__ln" in t
            }
            class tp {
                get(t) {
                    if (t >= this.length) throw Error("Position outside of list range");
                    let e = this.head;
                    for (let n = 0; n < t; n++) e = (null == e ? void 0 : e.next) || null;
                    return e
                }
                addNode(t) {
                    let e = {
                        value: t,
                        previous: null,
                        next: null
                    };
                    if (t.__ln = e, t.previousSibling && "__ln" in t.previousSibling) {
                        let n = t.previousSibling.__ln.next;
                        e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
                    } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
                        let n = t.nextSibling.__ln.previous;
                        e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
                    } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
                    this.length++
                }
                removeNode(t) {
                    let e = t.__ln;
                    this.head && (e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--)
                }
                constructor() {
                    this.length = 0, this.head = null
                }
            }
            let t_ = (t, e) => "".concat(t, "@").concat(e);

            function tg(t) {
                return "__sn" in t
            }
            class tm {
                init(t) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(e => {
                        this[e] = t[e]
                    })
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                        t.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let t = [],
                            e = new tp,
                            n = t => {
                                let e = t,
                                    n = -2;
                                for (; - 2 === n;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
                                return n
                            },
                            r = r => {
                                var i, a, s, o, c;
                                let l = r.getRootNode ? null === (i = r.getRootNode()) || void 0 === i ? void 0 : i.host : null,
                                    u = l;
                                for (; null === (s = null === (a = null == u ? void 0 : u.getRootNode) || void 0 === a ? void 0 : a.call(u)) || void 0 === s ? void 0 : s.host;) u = (null === (c = null === (o = null == u ? void 0 : u.getRootNode) || void 0 === o ? void 0 : o.call(u)) || void 0 === c ? void 0 : c.host) || null;
                                let d = !this.doc.contains(r) && (!u || !this.doc.contains(u));
                                if (!r.parentNode || d) return;
                                let h = I(r.parentNode) ? this.mirror.getId(l) : this.mirror.getId(r.parentNode),
                                    f = n(r);
                                if (-1 === h || -1 === f) return e.addNode(r);
                                let p = Q(r, {
                                    doc: this.doc,
                                    map: this.mirror.map,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    maskInputSelector: this.maskInputSelector,
                                    unmaskInputSelector: this.unmaskInputSelector,
                                    skipChild: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskAllText: this.maskAllText,
                                    maskInputOptions: this.maskInputOptions,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: t => {
                                        td(t) && this.iframeManager.addIframe(t), th(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document)
                                    },
                                    onIframeLoad: (t, e) => {
                                        this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                                    }
                                });
                                p && t.push({
                                    parentId: h,
                                    nextId: f,
                                    node: p
                                })
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let t of this.movedSet)(!tv(this.removes, t, this.mirror) || this.movedSet.has(t.parentNode)) && r(t);
                        for (let t of this.addedSet) tE(this.droppedSet, t) || tv(this.removes, t, this.mirror) ? tE(this.movedSet, t) ? r(t) : this.droppedSet.add(t) : r(t);
                        let i = null;
                        for (; e.length;) {
                            let t = null;
                            if (i) {
                                let e = this.mirror.getId(i.value.parentNode),
                                    r = n(i.value); - 1 !== e && -1 !== r && (t = i)
                            }
                            if (!t)
                                for (let r = e.length - 1; r >= 0; r--) {
                                    let i = e.get(r);
                                    if (i) {
                                        let e = this.mirror.getId(i.value.parentNode),
                                            r = n(i.value);
                                        if (-1 !== e && -1 !== r) {
                                            t = i;
                                            break
                                        }
                                    }
                                }
                            if (!t) {
                                for (; e.head;) e.removeNode(e.head.value);
                                break
                            }
                            i = t.previous, e.removeNode(t.value), r(t.value)
                        }
                        let a = {
                            texts: this.texts.map(t => ({
                                id: this.mirror.getId(t.node),
                                value: t.value
                            })).filter(t => this.mirror.has(t.id)),
                            attributes: this.attributes.map(t => ({
                                id: this.mirror.getId(t.node),
                                attributes: t.attributes
                            })).filter(t => this.mirror.has(t.id)),
                            removes: this.removes,
                            adds: t
                        };
                        (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(a))
                    }, this.processMutation = t => {
                        if (!tl(t.target)) switch (t.type) {
                            case "characterData": {
                                let e = t.target.textContent;
                                !tc(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
                                    value: X(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
                                    node: t.target
                                });
                                break
                            }
                            case "attributes": {
                                let e = t.target,
                                    n = e.getAttribute(t.attributeName);
                                if ("value" === t.attributeName && (n = O({
                                        input: e,
                                        maskInputSelector: this.maskInputSelector,
                                        unmaskInputSelector: this.unmaskInputSelector,
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: e.tagName,
                                        type: e.getAttribute("type"),
                                        value: n,
                                        maskInputFn: this.maskInputFn
                                    })), tc(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
                                let r = this.attributes.find(e => e.node === t.target);
                                if (!r && (r = {
                                        node: t.target,
                                        attributes: {}
                                    }, this.attributes.push(r)), "type" === t.attributeName && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
                                    let n = this.doc.createElement("span");
                                    t.oldValue && n.setAttribute("style", t.oldValue), (void 0 === r.attributes.style || null === r.attributes.style) && (r.attributes.style = {});
                                    try {
                                        let t = r.attributes.style;
                                        for (let r of Array.from(e.style)) {
                                            let i = e.style.getPropertyValue(r),
                                                a = e.style.getPropertyPriority(r);
                                            (i !== n.style.getPropertyValue(r) || a !== n.style.getPropertyPriority(r)) && ("" === a ? t[r] = i : t[r] = [i, a])
                                        }
                                        for (let r of Array.from(n.style)) "" === e.style.getPropertyValue(r) && (t[r] = !1)
                                    } catch (t) {
                                        console.warn("[rrweb] Error when parsing update to style attribute:", t)
                                    }
                                } else {
                                    let e = t.target;
                                    r.attributes[t.attributeName] = J(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
                                }
                                break
                            }
                            case "childList":
                                t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                                    let n = this.mirror.getId(e),
                                        r = I(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                    !(tc(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tl(e)) && (this.addedSet.has(e) ? (ty(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
                                        if (I(e)) return !1;
                                        let r = n.getId(e);
                                        return !n.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
                                    }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[t_(n, r)] ? ty(this.movedSet, e) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!I(t.target) || void 0
                                    })), this.mapRemoves.push(e))
                                })
                        }
                    }, this.genAdds = (t, e) => {
                        if (!(e && tc(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
                            if ("__sn" in t) {
                                if (tl(t)) return;
                                this.movedSet.add(t);
                                let n = null;
                                if (e && "__sn" in e) n = e.__sn.id;
                                n && (this.movedMap[t_(t.__sn.id, n)] = !0)
                            } else this.addedSet.add(t), this.droppedSet.delete(t);
                            !tc(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t))
                        }
                    }
                }
            }

            function ty(t, e) {
                t.delete(e), e.childNodes.forEach(e => ty(t, e))
            }

            function tv(t, e, n) {
                let {
                    parentNode: r
                } = e;
                if (!r) return !1;
                let i = n.getId(r);
                return !!t.some(t => t.id === i) || tv(t, r, n)
            }

            function tE(t, e) {
                let {
                    parentNode: n
                } = e;
                return !!n && (!!t.has(n) || tE(t, n))
            }
            let tb = t => function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    try {
                        return t(...n)
                    } catch (t) {
                        try {
                            t.__rrweb__ = !0
                        } catch (t) {}
                        throw t
                    }
                },
                tS = [];

            function tw(t) {
                try {
                    if ("composedPath" in t) {
                        let e = t.composedPath();
                        if (e.length) return e[0]
                    } else if ("path" in t && t.path.length) return t.path[0]
                } catch (t) {}
                return t && t.target
            }

            function tT(t, e) {
                var n, r;
                let i = new tm;
                tS.push(i), i.init(t);
                let a = window.MutationObserver || window.__rrMutationObserver,
                    s = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
                s && window[s] && (a = window[s]);
                let o = new a(tb(e => {
                    (!t.onMutation || !1 !== t.onMutation(e)) && i.processMutations(e)
                }));
                return o.observe(e, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), o
            }

            function tk(t) {
                let {
                    scrollCb: e,
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: a,
                    unblockSelector: s,
                    sampling: o
                } = t, c = tr(t => {
                    let o = tw(t);
                    if (!o || tc(o, i, a, s)) return;
                    let c = r.getId(o);
                    if (o === n) {
                        let t = n.scrollingElement || n.documentElement;
                        tb(e)({
                            id: c,
                            x: t.scrollLeft,
                            y: t.scrollTop
                        })
                    } else tb(e)({
                        id: c,
                        x: o.scrollLeft,
                        y: o.scrollTop
                    })
                }, o.scroll || 100);
                return tt("scroll", tb(c), n)
            }

            function tR(t, e) {
                let n = Object.assign({}, t);
                return !e && delete n.userTriggered, n
            }
            let tx = ["INPUT", "TEXTAREA", "SELECT"],
                tD = new WeakMap;

            function tN(t) {
                return function(t, e) {
                    if (tC("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tC("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tC("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tC("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                        let n = Array.from(t.parentRule.cssRules),
                            r = n.indexOf(t);
                        e.unshift(r)
                    } else {
                        let n = Array.from(t.parentStyleSheet.cssRules),
                            r = n.indexOf(t);
                        e.unshift(r)
                    }
                    return e
                }(t, [])
            }

            function tI(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.doc.defaultView;
                if (!n) return () => {};
                ! function(t, e) {
                    let {
                        mutationCb: n,
                        mousemoveCb: r,
                        mouseInteractionCb: i,
                        scrollCb: a,
                        viewportResizeCb: s,
                        inputCb: o,
                        mediaInteractionCb: c,
                        styleSheetRuleCb: l,
                        styleDeclarationCb: u,
                        canvasMutationCb: d,
                        fontCb: h
                    } = t;
                    t.mutationCb = function() {
                        for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                        e.mutation && e.mutation(...r), n(...r)
                    }, t.mousemoveCb = function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        e.mousemove && e.mousemove(...n), r(...n)
                    }, t.mouseInteractionCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.mouseInteraction && e.mouseInteraction(...n), i(...n)
                    }, t.scrollCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.scroll && e.scroll(...n), a(...n)
                    }, t.viewportResizeCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.viewportResize && e.viewportResize(...n), s(...n)
                    }, t.inputCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.input && e.input(...n), o(...n)
                    }, t.mediaInteractionCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.mediaInteaction && e.mediaInteaction(...n), c(...n)
                    }, t.styleSheetRuleCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.styleSheetRule && e.styleSheetRule(...n), l(...n)
                    }, t.styleDeclarationCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.styleDeclaration && e.styleDeclaration(...n), u(...n)
                    }, t.canvasMutationCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.canvasMutation && e.canvasMutation(...n), d(...n)
                    }, t.fontCb = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        e.font && e.font(...n), h(...n)
                    }
                }(t, e);
                let r = tT(t, t.doc),
                    i = function(t) {
                        let e, {
                            mousemoveCb: n,
                            sampling: r,
                            doc: i,
                            mirror: a
                        } = t;
                        if (!1 === r.mousemove) return () => {};
                        let s = "number" == typeof r.mousemove ? r.mousemove : 50,
                            o = "number" == typeof r.mousemoveCallback ? r.mousemoveCallback : 500,
                            c = [],
                            l = tr(t => {
                                let r = Date.now() - e;
                                tb(n)(c.map(t => (t.timeOffset -= r, t)), t), c = [], e = null
                            }, o),
                            d = tr(t => {
                                let n = tw(t),
                                    {
                                        clientX: r,
                                        clientY: i
                                    } = tu(t) ? t.changedTouches[0] : t;
                                !e && (e = Date.now()), c.push({
                                    x: r,
                                    y: i,
                                    id: a.getId(n),
                                    timeOffset: Date.now() - e
                                }), l("undefined" != typeof DragEvent && t instanceof DragEvent ? u.Drag : t instanceof MouseEvent ? u.MouseMove : u.TouchMove)
                            }, s, {
                                trailing: !1
                            }),
                            h = [tt("mousemove", tb(d), i), tt("touchmove", tb(d), i), tt("drag", tb(d), i)];
                        return tb(() => {
                            h.forEach(t => t())
                        })
                    }(t),
                    a = function(t) {
                        let {
                            mouseInteractionCb: e,
                            doc: n,
                            mirror: r,
                            blockClass: i,
                            blockSelector: a,
                            unblockSelector: s,
                            sampling: o
                        } = t;
                        if (!1 === o.mouseInteraction) return () => {};
                        let c = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            l = [],
                            u = t => n => {
                                let o = tw(n);
                                if (tc(o, i, a, s)) return;
                                let c = tu(n) ? n.changedTouches[0] : n;
                                if (!c) return;
                                let l = r.getId(o),
                                    {
                                        clientX: u,
                                        clientY: h
                                    } = c;
                                tb(e)({
                                    type: d[t],
                                    id: l,
                                    x: u,
                                    y: h
                                })
                            };
                        return Object.keys(d).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== c[t]).forEach(t => {
                            let e = t.toLowerCase(),
                                r = tb(u(t));
                            l.push(tt(e, r, n))
                        }), tb(() => {
                            l.forEach(t => t())
                        })
                    }(t),
                    s = tk(t),
                    o = function(t) {
                        let {
                            viewportResizeCb: e
                        } = t, n = -1, r = -1, i = tr(() => {
                            let t = ts(),
                                i = to();
                            (n !== t || r !== i) && (tb(e)({
                                width: Number(i),
                                height: Number(t)
                            }), n = t, r = i)
                        }, 200);
                        return tt("resize", tb(i), window)
                    }(t),
                    c = function(t) {
                        let {
                            inputCb: e,
                            doc: n,
                            mirror: r,
                            blockClass: i,
                            blockSelector: a,
                            unblockSelector: s,
                            ignoreClass: o,
                            ignoreSelector: c,
                            maskInputSelector: l,
                            unmaskInputSelector: u,
                            maskInputOptions: d,
                            maskInputFn: h,
                            sampling: f,
                            userTriggeredOnInput: p
                        } = t;

                        function _(t) {
                            let e = tw(t),
                                r = e && e.tagName,
                                f = t.isTrusted;
                            if ("OPTION" === r && (e = e.parentElement), !e || !r || 0 > tx.indexOf(r) || tc(e, i, a, s)) return;
                            let _ = e,
                                m = U(_);
                            if (_.classList.contains(o) || c && _.matches(c)) return;
                            let y = B(_, r, m),
                                v = !1;
                            ("radio" === m || "checkbox" === m) && (v = e.checked),
                            function(t) {
                                let {
                                    tagName: e,
                                    type: n,
                                    maskInputOptions: r,
                                    maskInputSelector: i
                                } = t;
                                return i || C({
                                    maskInputOptions: r,
                                    tagName: e,
                                    type: n
                                })
                            }({
                                maskInputOptions: d,
                                maskInputSelector: l,
                                tagName: r,
                                type: m
                            }) && (y = O({
                                input: _,
                                maskInputOptions: d,
                                maskInputSelector: l,
                                unmaskInputSelector: u,
                                tagName: r,
                                type: m,
                                value: y,
                                maskInputFn: h
                            })), g(e, tb(tR)({
                                text: y,
                                isChecked: v,
                                userTriggered: f
                            }, p));
                            let E = e.name;
                            "radio" === m && E && v && n.querySelectorAll('input[type="radio"][name="'.concat(E, '"]')).forEach(t => {
                                if (t !== e) {
                                    let e = O({
                                        input: t,
                                        maskInputOptions: d,
                                        maskInputSelector: l,
                                        unmaskInputSelector: u,
                                        tagName: r,
                                        type: m,
                                        value: B(t, r, m),
                                        maskInputFn: h
                                    });
                                    g(t, tb(tR)({
                                        text: e,
                                        isChecked: !v,
                                        userTriggered: !1
                                    }, p))
                                }
                            })
                        }

                        function g(t, n) {
                            let i = tD.get(t);
                            if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                                tD.set(t, n);
                                let i = r.getId(t);
                                e(Object.assign(Object.assign({}, n), {
                                    id: i
                                }))
                            }
                        }
                        let m = "last" === f.input ? ["change"] : ["input", "change"],
                            y = m.map(t => tt(t, tb(_), n)),
                            v = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                            E = [
                                [HTMLInputElement.prototype, "value"],
                                [HTMLInputElement.prototype, "checked"],
                                [HTMLSelectElement.prototype, "value"],
                                [HTMLTextAreaElement.prototype, "value"],
                                [HTMLSelectElement.prototype, "selectedIndex"],
                                [HTMLOptionElement.prototype, "selected"]
                            ];
                        return v && v.set && y.push(...E.map(t => ti(t[0], t[1], {
                            set() {
                                tb(_)({
                                    target: this
                                })
                            }
                        }))), tb(() => {
                            y.forEach(t => t())
                        })
                    }(t),
                    l = function(t) {
                        let {
                            mediaInteractionCb: e,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: i,
                            mirror: a,
                            sampling: s
                        } = t, o = t => tr(tb(s => {
                            let o = tw(s);
                            if (!o || tc(o, n, r, i)) return;
                            let {
                                currentTime: c,
                                volume: l,
                                muted: u
                            } = o;
                            e({
                                type: t,
                                id: a.getId(o),
                                currentTime: c,
                                volume: l,
                                muted: u
                            })
                        }), s.media || 500), c = [tt("play", o(0)), tt("pause", o(1)), tt("seeked", o(2)), tt("volumechange", o(3))];
                        return tb(() => {
                            c.forEach(t => t())
                        })
                    }(t),
                    h = function(t, e) {
                        let {
                            styleSheetRuleCb: n,
                            mirror: r
                        } = t, {
                            win: i
                        } = e;
                        if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return () => {};
                        let a = i.CSSStyleSheet.prototype.insertRule;
                        i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
                            apply: tb((t, e, i) => {
                                let [a, s] = i, o = r.getId(e.ownerNode);
                                return -1 !== o && n({
                                    id: o,
                                    adds: [{
                                        rule: a,
                                        index: s
                                    }]
                                }), t.apply(e, i)
                            })
                        });
                        let s = i.CSSStyleSheet.prototype.deleteRule;
                        i.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
                            apply: tb((t, e, i) => {
                                let [a] = i, s = r.getId(e.ownerNode);
                                return -1 !== s && n({
                                    id: s,
                                    removes: [{
                                        index: a
                                    }]
                                }), t.apply(e, i)
                            })
                        });
                        let o = {};
                        tO("CSSGroupingRule") ? o.CSSGroupingRule = i.CSSGroupingRule : (tO("CSSMediaRule") && (o.CSSMediaRule = i.CSSMediaRule), tO("CSSConditionRule") && (o.CSSConditionRule = i.CSSConditionRule), tO("CSSSupportsRule") && (o.CSSSupportsRule = i.CSSSupportsRule));
                        let c = {};
                        return Object.entries(o).forEach(t => {
                            let [e, i] = t;
                            c[e] = {
                                insertRule: i.prototype.insertRule,
                                deleteRule: i.prototype.deleteRule
                            }, i.prototype.insertRule = new Proxy(c[e].insertRule, {
                                apply: tb((t, e, i) => {
                                    let [a, s] = i, o = r.getId(e.parentStyleSheet.ownerNode);
                                    return -1 !== o && n({
                                        id: o,
                                        adds: [{
                                            rule: a,
                                            index: [...tN(e), s || 0]
                                        }]
                                    }), t.apply(e, i)
                                })
                            }), i.prototype.deleteRule = new Proxy(c[e].deleteRule, {
                                apply: tb((t, e, i) => {
                                    let [a] = i, s = r.getId(e.parentStyleSheet.ownerNode);
                                    return -1 !== s && n({
                                        id: s,
                                        removes: [{
                                            index: [...tN(e), a]
                                        }]
                                    }), t.apply(e, i)
                                })
                            })
                        }), tb(() => {
                            i.CSSStyleSheet.prototype.insertRule = a, i.CSSStyleSheet.prototype.deleteRule = s, Object.entries(o).forEach(t => {
                                let [e, n] = t;
                                n.prototype.insertRule = c[e].insertRule, n.prototype.deleteRule = c[e].deleteRule
                            })
                        })
                    }(t, {
                        win: n
                    }),
                    f = function(t, e) {
                        let {
                            styleDeclarationCb: n,
                            mirror: r
                        } = t, {
                            win: i
                        } = e, a = i.CSSStyleDeclaration.prototype.setProperty;
                        i.CSSStyleDeclaration.prototype.setProperty = new Proxy(a, {
                            apply: tb((t, e, i) => {
                                var a, s;
                                let [o, c, l] = i, u = r.getId(null === (s = null === (a = e.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === s ? void 0 : s.ownerNode);
                                return -1 !== u && n({
                                    id: u,
                                    set: {
                                        property: o,
                                        value: c,
                                        priority: l
                                    },
                                    index: tN(e.parentRule)
                                }), t.apply(e, i)
                            })
                        });
                        let s = i.CSSStyleDeclaration.prototype.removeProperty;
                        return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                            apply: tb((t, e, i) => {
                                var a, s;
                                let [o] = i, c = r.getId(null === (s = null === (a = e.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === s ? void 0 : s.ownerNode);
                                return -1 !== c && n({
                                    id: c,
                                    remove: {
                                        property: o
                                    },
                                    index: tN(e.parentRule)
                                }), t.apply(e, i)
                            })
                        }), tb(() => {
                            i.CSSStyleDeclaration.prototype.setProperty = a, i.CSSStyleDeclaration.prototype.removeProperty = s
                        })
                    }(t, {
                        win: n
                    }),
                    p = t.collectFonts ? function(t) {
                        let {
                            fontCb: e,
                            doc: n
                        } = t, r = n.defaultView;
                        if (!r) return () => {};
                        let i = [],
                            a = new WeakMap,
                            s = r.FontFace;
                        r.FontFace = function(t, e, n) {
                            let r = new s(t, e, n);
                            return a.set(r, {
                                family: t,
                                buffer: "string" != typeof e,
                                descriptors: n,
                                fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                            }), r
                        };
                        let o = ta(n.fonts, "add", function(t) {
                            return function(n) {
                                return setTimeout(() => {
                                    let t = a.get(n);
                                    t && (e(t), a.delete(n))
                                }, 0), t.apply(this, [n])
                            }
                        });
                        return i.push(() => {
                            r.FontFace = s
                        }), i.push(o), tb(() => {
                            i.forEach(t => t())
                        })
                    }(t) : () => {},
                    _ = [];
                for (let e of t.plugins) _.push(e.observer(e.callback, n, e.options));
                return tb(() => {
                    tS.forEach(t => t.reset()), r.disconnect(), i(), a(), s(), o(), c(), l();
                    try {
                        h(), f()
                    } catch (t) {}
                    p(), _.forEach(t => t())
                })
            }

            function tC(t) {
                return void 0 !== window[t]
            }

            function tO(t) {
                return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
            }
            class tA {
                addIframe(t) {
                    this.iframes.set(t, !0)
                }
                addLoadListener(t) {
                    this.loadListener = t
                }
                attachIframe(t, e) {
                    var n;
                    this.mutationCb({
                        adds: [{
                            parentId: t.__sn.id,
                            nextId: null,
                            node: e
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), null === (n = this.loadListener) || void 0 === n || n.call(this, t)
                }
                constructor(t) {
                    this.iframes = new WeakMap, this.mutationCb = t.mutationCb
                }
            }
            class tU {
                addShadowRoot(t, e) {
                    tT(Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: e,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), t), tk(Object.assign(Object.assign({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: t,
                        mirror: this.mirror
                    }))
                }
                observeAttachShadow(t) {
                    if (t.contentWindow) {
                        let e = this;
                        this.restorePatches.push(ta(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
                            return function() {
                                let r = n.apply(this, arguments);
                                return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), r
                            }
                        }))
                    }
                }
                reset() {
                    this.restorePatches.forEach(t => t())
                }
                constructor(t) {
                    this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
                    let e = this;
                    this.restorePatches.push(ta(HTMLElement.prototype, "attachShadow", function(t) {
                        return function() {
                            let n = t.apply(this, arguments);
                            return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                        }
                    }))
                }
            }
            for (var tB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tL = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tM = 0; tM < tB.length; tM++) tL[tB.charCodeAt(tM)] = tM;
            var tP = function(t) {
                var e, n = new Uint8Array(t),
                    r = n.length,
                    i = "";
                for (e = 0; e < r; e += 3) i += tB[n[e] >> 2] + tB[(3 & n[e]) << 4 | n[e + 1] >> 4] + tB[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tB[63 & n[e + 2]];
                return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
            };
            let tG = new Map,
                tY = (t, e, n) => {
                    var r, i;
                    let a;
                    if (!t || !(tz(t, e) || "object" == typeof t)) return;
                    let s = t.constructor.name;
                    let o = (r = n, i = s, !(a = tG.get(r)) && (a = new Map, tG.set(r, a)), !a.has(i) && a.set(i, []), a.get(i)),
                        c = o.indexOf(t);
                    return -1 === c && (c = o.length, o.push(t)), c
                },
                tF = (t, e, n) => [...t].map(t => (function t(e, n, r) {
                    if (e instanceof Array) return e.map(e => t(e, n, r));
                    if (null === e);
                    else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) {
                        let t = e.constructor.name;
                        return {
                            rr_type: t,
                            args: [Object.values(e)]
                        }
                    } else if (e instanceof ArrayBuffer) {
                        let t = e.constructor.name,
                            n = tP(e);
                        return {
                            rr_type: t,
                            base64: n
                        }
                    } else if (e instanceof DataView) {
                        let i = e.constructor.name;
                        return {
                            rr_type: i,
                            args: [t(e.buffer, n, r), e.byteOffset, e.byteLength]
                        }
                    } else if (e instanceof HTMLImageElement) {
                        let t = e.constructor.name,
                            {
                                src: n
                            } = e;
                        return {
                            rr_type: t,
                            src: n
                        }
                    } else if (e instanceof ImageData) {
                        let i = e.constructor.name;
                        return {
                            rr_type: i,
                            args: [t(e.data, n, r), e.width, e.height]
                        }
                    } else if (tz(e, n) || "object" == typeof e) {
                        let t = e.constructor.name,
                            i = tY(e, n, r);
                        return {
                            rr_type: t,
                            index: i
                        }
                    }
                    return e
                })(t, e, n)),
                tz = (t, e) => {
                    let n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]);
                    return !!n.find(n => t instanceof e[n])
                };

            function tH(t, e, n, r, i, a, s, o) {
                let c = [],
                    l = Object.getOwnPropertyNames(t);
                for (let u of l) try {
                    if ("function" != typeof t[u]) continue;
                    let l = ta(t, u, function(c) {
                        return function() {
                            for (var l = arguments.length, d = Array(l), h = 0; h < l; h++) d[h] = arguments[h];
                            let f = c.apply(this, d);
                            if (tY(f, o, t), !tc(this.canvas, r, a, i)) {
                                s.getId(this.canvas);
                                let r = tF([...d], o, t),
                                    i = {
                                        type: e,
                                        property: u,
                                        args: r
                                    };
                                n(this.canvas, i)
                            }
                            return f
                        }
                    });
                    c.push(l)
                } catch (i) {
                    let r = ti(t, u, {
                        set(t) {
                            n(this.canvas, {
                                type: e,
                                property: u,
                                args: [t],
                                setter: !0
                            })
                        }
                    });
                    c.push(r)
                }
                return c
            }
            class tW {
                reset() {
                    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                initCanvasMutationObserver(t, e, n, r) {
                    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                    let i = function(t, e, n, r) {
                            let i = [];
                            try {
                                let a = ta(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                                    return function(i) {
                                        for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
                                        return !tc(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i, ...s])
                                    }
                                });
                                i.push(a)
                            } catch (t) {
                                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                            }
                            return () => {
                                i.forEach(t => t())
                            }
                        }(t, e, r, n),
                        a = function(t, e, n, r, i, a) {
                            let s = [],
                                o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
                            for (let a of o) try {
                                if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) continue;
                                let o = ta(e.CanvasRenderingContext2D.prototype, a, function(e) {
                                    return function() {
                                        for (var s = arguments.length, o = Array(s), c = 0; c < s; c++) o[c] = arguments[c];
                                        return !tc(this.canvas, n, i, r) && setTimeout(() => {
                                            let e = [...o];
                                            if ("drawImage" === a && e[0] && e[0] instanceof HTMLCanvasElement) {
                                                let t = e[0],
                                                    n = t.getContext("2d"),
                                                    r = null == n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                                                    i = null == r ? void 0 : r.data;
                                                e[0] = JSON.stringify(i)
                                            }
                                            t(this.canvas, {
                                                type: h["2D"],
                                                property: a,
                                                args: e
                                            })
                                        }, 0), e.apply(this, o)
                                    }
                                });
                                s.push(o)
                            } catch (r) {
                                let n = ti(e.CanvasRenderingContext2D.prototype, a, {
                                    set(e) {
                                        t(this.canvas, {
                                            type: h["2D"],
                                            property: a,
                                            args: [e],
                                            setter: !0
                                        })
                                    }
                                });
                                s.push(n)
                            }
                            return () => {
                                s.forEach(t => t())
                            }
                        }(this.processMutation.bind(this), t, e, r, n, this.mirror),
                        s = function(t, e, n, r, i, a) {
                            let s = [];
                            return s.push(...tH(e.WebGLRenderingContext.prototype, h.WebGL, t, n, r, i, a, e)), void 0 !== e.WebGL2RenderingContext && s.push(...tH(e.WebGL2RenderingContext.prototype, h.WebGL2, t, n, r, i, a, e)), () => {
                                s.forEach(t => t())
                            }
                        }(this.processMutation.bind(this), t, e, r, n, this.mirror);
                    this.resetObservers = () => {
                        i(), a(), s()
                    }
                }
                startPendingCanvasMutationFlusher() {
                    requestAnimationFrame(() => this.flushPendingCanvasMutations())
                }
                startRAFTimestamping() {
                    let t = e => {
                        this.rafStamps.latestId = e, requestAnimationFrame(t)
                    };
                    requestAnimationFrame(t)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach((t, e) => {
                        let n = this.mirror.getId(e);
                        this.flushPendingCanvasMutationFor(e, n)
                    }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
                }
                flushPendingCanvasMutationFor(t, e) {
                    if (this.frozen || this.locked) return;
                    let n = this.pendingCanvasMutations.get(t);
                    if (!n || -1 === e) return;
                    let r = n.map(t => {
                            let e = function(t, e) {
                                var n = {};
                                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                                return n
                            }(t, ["type"]);
                            return e
                        }),
                        {
                            type: i
                        } = n[0];
                    this.mutationCb({
                        id: e,
                        type: i,
                        commands: r
                    }), this.pendingCanvasMutations.delete(t)
                }
                constructor(t) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
                        let n = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
                        (n || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
                    }, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector)
                }
            }

            function tj(t) {
                return Object.assign(Object.assign({}, t), {
                    timestamp: Date.now()
                })
            }
            let tq = {
                map: {},
                getId: t => t && t.__sn ? t.__sn.id : -1,
                getNode(t) {
                    return this.map[t] || null
                },
                removeNodeFromMap(t) {
                    let e = t.__sn && t.__sn.id;
                    delete this.map[e], t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t))
                },
                has(t) {
                    return this.map.hasOwnProperty(t)
                },
                reset() {
                    this.map = {}
                }
            };

            function tZ() {
                let t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        emit: n,
                        checkoutEveryNms: r,
                        checkoutEveryNth: i,
                        blockClass: o = "rr-block",
                        blockSelector: c = null,
                        unblockSelector: d = null,
                        ignoreClass: h = "rr-ignore",
                        ignoreSelector: f = null,
                        maskTextClass: p = "rr-mask",
                        maskTextSelector: _ = null,
                        maskInputSelector: g = null,
                        unmaskTextSelector: m = null,
                        unmaskInputSelector: y = null,
                        inlineStylesheet: v = !0,
                        maskAllText: E = !1,
                        maskAllInputs: b,
                        maskInputOptions: S,
                        slimDOMOptions: w,
                        maskInputFn: T,
                        maskTextFn: k,
                        hooks: R,
                        packFn: x,
                        sampling: D = {},
                        mousemoveWait: N,
                        recordCanvas: I = !1,
                        userTriggeredOnInput: C = !1,
                        collectFonts: O = !1,
                        inlineImages: A = !1,
                        plugins: U,
                        keepIframeSrcFn: B = () => !1,
                        onMutation: L
                    } = e;
                if (!n) throw Error("emit function is required");
                void 0 !== N && void 0 === D.mousemove && (D.mousemove = N);
                let M = !0 === b ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== S ? S : {},
                    P = !0 === w || "all" === w ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === w,
                        headMetaDescKeywords: "all" === w
                    } : w || {};
                ! function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
                        if (!(0 in arguments)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let G = 0,
                    Y = t => {
                        for (let e of U || []) e.eventProcessor && (t = e.eventProcessor(t));
                        return x && (t = x(t)), t
                    };
                a = (e, a) => {
                    var o;
                    if ((null === (o = tS[0]) || void 0 === o ? void 0 : o.isFrozen()) && e.type !== l.FullSnapshot && !(e.type === l.IncrementalSnapshot && e.data.source === u.Mutation) && tS.forEach(t => t.unfreeze()), n(Y(e), a), e.type === l.FullSnapshot) t = e, G = 0;
                    else if (e.type === l.IncrementalSnapshot) {
                        if (e.data.source === u.Mutation && e.data.isAttachIframe) return;
                        G++;
                        let n = i && G >= i,
                            a = r && e.timestamp - t.timestamp > r;
                        (n || a) && s(!0)
                    }
                };
                let F = t => {
                        a(tj({
                            type: l.IncrementalSnapshot,
                            data: Object.assign({
                                source: u.Mutation
                            }, t)
                        }))
                    },
                    z = t => a(tj({
                        type: l.IncrementalSnapshot,
                        data: Object.assign({
                            source: u.Scroll
                        }, t)
                    })),
                    H = t => a(tj({
                        type: l.IncrementalSnapshot,
                        data: Object.assign({
                            source: u.CanvasMutation
                        }, t)
                    })),
                    W = new tA({
                        mutationCb: F
                    }),
                    j = new tW({
                        recordCanvas: I,
                        mutationCb: H,
                        win: window,
                        blockClass: o,
                        blockSelector: c,
                        unblockSelector: d,
                        mirror: tq
                    }),
                    q = new tU({
                        mutationCb: F,
                        scrollCb: z,
                        bypassOptions: {
                            onMutation: L,
                            blockClass: o,
                            blockSelector: c,
                            unblockSelector: d,
                            maskTextClass: p,
                            maskTextSelector: _,
                            unmaskTextSelector: m,
                            maskInputSelector: g,
                            unmaskInputSelector: y,
                            inlineStylesheet: v,
                            maskAllText: E,
                            maskInputOptions: M,
                            maskTextFn: k,
                            maskInputFn: T,
                            recordCanvas: I,
                            inlineImages: A,
                            sampling: D,
                            slimDOMOptions: P,
                            iframeManager: W,
                            canvasManager: j
                        },
                        mirror: tq
                    });
                s = function() {
                    var t, e, n, r;
                    let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    a(tj({
                        type: l.Meta,
                        data: {
                            href: window.location.href,
                            width: to(),
                            height: ts()
                        }
                    }), i), tS.forEach(t => t.lock());
                    let [s, u] = function(t, e) {
                        let {
                            blockClass: n = "rr-block",
                            blockSelector: r = null,
                            unblockSelector: i = null,
                            maskTextClass: a = "rr-mask",
                            maskTextSelector: s = null,
                            unmaskTextSelector: o = null,
                            inlineStylesheet: c = !0,
                            inlineImages: l = !1,
                            recordCanvas: u = !1,
                            maskInputSelector: d = null,
                            unmaskInputSelector: h = null,
                            maskAllText: f = !1,
                            maskAllInputs: p = !1,
                            maskTextFn: _,
                            maskInputFn: g,
                            slimDOM: m = !1,
                            dataURLOptions: y,
                            preserveWhiteSpace: v,
                            onSerialize: E,
                            onIframeLoad: b,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w = () => !1
                        } = e || {}, T = {};
                        return [Q(t, {
                            doc: t,
                            map: T,
                            blockClass: n,
                            blockSelector: r,
                            unblockSelector: i,
                            maskTextClass: a,
                            maskTextSelector: s,
                            unmaskTextSelector: o,
                            skipChild: !1,
                            inlineStylesheet: c,
                            maskInputSelector: d,
                            unmaskInputSelector: h,
                            maskAllText: f,
                            maskInputOptions: !0 === p ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0
                            } : !1 === p ? {} : p,
                            maskTextFn: _,
                            maskInputFn: g,
                            slimDOMOptions: !0 === m || "all" === m ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === m,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === m ? {} : m,
                            dataURLOptions: y,
                            inlineImages: l,
                            recordCanvas: u,
                            preserveWhiteSpace: v,
                            onSerialize: E,
                            onIframeLoad: b,
                            iframeLoadTimeout: S,
                            keepIframeSrcFn: w
                        }), T]
                    }(document, {
                        blockClass: o,
                        blockSelector: c,
                        unblockSelector: d,
                        maskTextClass: p,
                        maskTextSelector: _,
                        unmaskTextSelector: m,
                        maskInputSelector: g,
                        unmaskInputSelector: y,
                        inlineStylesheet: v,
                        maskAllText: E,
                        maskAllInputs: M,
                        maskTextFn: k,
                        slimDOM: P,
                        recordCanvas: I,
                        inlineImages: A,
                        onSerialize: t => {
                            td(t) && W.addIframe(t), th(t) && q.addShadowRoot(t.shadowRoot, document)
                        },
                        onIframeLoad: (t, e) => {
                            W.attachIframe(t, e), q.observeAttachShadow(t)
                        },
                        keepIframeSrcFn: B
                    });
                    if (!s) return console.warn("Failed to snapshot the document");
                    tq.map = u, a(tj({
                        type: l.FullSnapshot,
                        data: {
                            node: s,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (e = null === (t = null == document ? void 0 : document.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === e ? void 0 : e.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (r = null === (n = null == document ? void 0 : document.body) || void 0 === n ? void 0 : n.parentElement) || void 0 === r ? void 0 : r.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), tS.forEach(t => t.unlock())
                };
                try {
                    let t = [];
                    t.push(tt("DOMContentLoaded", () => {
                        a(tj({
                            type: l.DomContentLoaded,
                            data: {}
                        }))
                    }));
                    let e = t => {
                        var e;
                        return tb(tI)({
                            onMutation: L,
                            mutationCb: F,
                            mousemoveCb: (t, e) => a(tj({
                                type: l.IncrementalSnapshot,
                                data: {
                                    source: e,
                                    positions: t
                                }
                            })),
                            mouseInteractionCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.MouseInteraction
                                }, t)
                            })),
                            scrollCb: z,
                            viewportResizeCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.ViewportResize
                                }, t)
                            })),
                            inputCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.Input
                                }, t)
                            })),
                            mediaInteractionCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.MediaInteraction
                                }, t)
                            })),
                            styleSheetRuleCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.StyleSheetRule
                                }, t)
                            })),
                            styleDeclarationCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.StyleDeclaration
                                }, t)
                            })),
                            canvasMutationCb: H,
                            fontCb: t => a(tj({
                                type: l.IncrementalSnapshot,
                                data: Object.assign({
                                    source: u.Font
                                }, t)
                            })),
                            blockClass: o,
                            ignoreClass: h,
                            ignoreSelector: f,
                            maskTextClass: p,
                            maskTextSelector: _,
                            unmaskTextSelector: m,
                            maskInputSelector: g,
                            unmaskInputSelector: y,
                            maskInputOptions: M,
                            inlineStylesheet: v,
                            sampling: D,
                            recordCanvas: I,
                            inlineImages: A,
                            userTriggeredOnInput: C,
                            collectFonts: O,
                            doc: t,
                            maskAllText: E,
                            maskInputFn: T,
                            maskTextFn: k,
                            blockSelector: c,
                            unblockSelector: d,
                            slimDOMOptions: P,
                            mirror: tq,
                            iframeManager: W,
                            shadowDomManager: q,
                            canvasManager: j,
                            plugins: (null === (e = null == U ? void 0 : U.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
                                observer: t.observer,
                                options: t.options,
                                callback: e => a(tj({
                                    type: l.Plugin,
                                    data: {
                                        plugin: t.name,
                                        payload: e
                                    }
                                }))
                            }))) || []
                        }, R)
                    };
                    W.addLoadListener(n => {
                        try {
                            t.push(e(n.contentDocument))
                        } catch (t) {
                            console.warn(t)
                        }
                    });
                    let n = () => {
                        s(), t.push(e(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? n() : t.push(tt("load", () => {
                        a(tj({
                            type: l.Load,
                            data: {}
                        })), n()
                    }, window)), () => {
                        t.forEach(t => t())
                    }
                } catch (t) {
                    console.warn(t)
                }
            }

            function tV(t) {
                return t > 9999999999 ? t : 1e3 * t
            }
            tZ.addCustomEvent = (t, e) => {
                if (!a) throw Error("please add custom event after start recording");
                a(tj({
                    type: l.Custom,
                    data: {
                        tag: t,
                        payload: e
                    }
                }))
            }, tZ.freezePage = () => {
                tS.forEach(t => t.freeze())
            }, tZ.takeFullSnapshot = t => {
                if (!s) throw Error("please take full snapshot after start recording");
                s(t)
            }, tZ.mirror = tq;

            function tK(t, e) {
                "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
                    type: l.Custom,
                    timestamp: 1e3 * (e.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, k.normalize)(e, 10, 1e3)
                    }
                }), "console" === e.category)))
            }

            function tJ(t) {
                let e = tX(t);
                if (!e || !(e instanceof Element)) return e;
                let n = e.closest("button,a");
                return n || e
            }

            function tX(t) {
                return function(t) {
                    return "object" == typeof t && !!t && "target" in t
                }(t) ? t.target : t
            }
            class t$ {
                __init() {
                    this._lastMutation = 0
                }
                __init2() {
                    this._lastScroll = 0
                }
                __init3() {
                    this._clicks = []
                }
                addListeners() {
                    var t;
                    let e = () => {
                        this._lastScroll = t0()
                    };
                    let n = (t = () => {
                            this._lastMutation = t0()
                        }, !o && (o = [], function() {
                            (0, k.fill)(x, "open", function(t) {
                                return function() {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    if (o) try {
                                        o.forEach(t => t())
                                    } catch (t) {}
                                    return t.apply(x, n)
                                }
                            })
                        }()), o.push(t), () => {
                            let e = o ? o.indexOf(t) : -1;
                            e > -1 && o.splice(e, 1)
                        }),
                        r = t => {
                            if (!t.target) return;
                            let e = tJ(t);
                            e && this._handleMultiClick(e)
                        },
                        i = new MutationObserver(() => {
                            this._lastMutation = t0()
                        });
                    i.observe(x.document.documentElement, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), x.addEventListener("scroll", e, {
                        passive: !0
                    }), x.addEventListener("click", r, {
                        passive: !0
                    }), this._teardown = () => {
                        x.removeEventListener("scroll", e), x.removeEventListener("click", r), n(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(t, e) {
                    var n;
                    if (function(t, e) {
                            return !!(!tQ.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || e && t.matches(e)) || !1
                        }(e, this._ignoreSelector) || ! function(t) {
                            return !!(t.data && "number" == typeof t.data.nodeId && t.timestamp)
                        }(t)) return;
                    let r = {
                        timestamp: (n = t.timestamp) > 9999999999 ? n / 1e3 : n,
                        clickBreadcrumb: t,
                        clickCount: 0,
                        node: e
                    };
                    this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks()
                }
                _handleMultiClick(t) {
                    this._getClicks(t).forEach(t => {
                        t.clickCount++
                    })
                }
                _getClicks(t) {
                    return this._clicks.filter(e => e.node === t)
                }
                _checkClicks() {
                    let t = [],
                        e = t0();
                    for (let n of (this._clicks.forEach(n => {
                            !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n)
                        }), t)) {
                        let t = this._clicks.indexOf(n);
                        t > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(t, 1))
                    }
                    this._clicks.length && this._scheduleCheckClicks()
                }
                _generateBreadcrumbs(t) {
                    let e = this._replay,
                        n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
                        r = t.mutationAfter && t.mutationAfter <= this._threshold,
                        {
                            clickCount: i,
                            clickBreadcrumb: a
                        } = t;
                    if (!n && !r) {
                        let n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                            r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                            s = {
                                type: "default",
                                message: a.message,
                                timestamp: a.timestamp,
                                category: "ui.slowClickDetected",
                                data: {
                                    ...a.data,
                                    url: x.location.href,
                                    route: e.getCurrentRoute(),
                                    timeAfterClickMs: n,
                                    endReason: r,
                                    clickCount: i || 1
                                }
                            };
                        this._addBreadcrumbEvent(e, s);
                        return
                    }
                    if (i > 1) {
                        let t = {
                            type: "default",
                            message: a.message,
                            timestamp: a.timestamp,
                            category: "ui.multiClick",
                            data: {
                                ...a.data,
                                url: x.location.href,
                                route: e.getCurrentRoute(),
                                clickCount: i,
                                metric: !0
                            }
                        };
                        this._addBreadcrumbEvent(e, t)
                    }
                }
                _scheduleCheckClicks() {
                    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
                }
                constructor(t, e, n = tK) {
                    t$.prototype.__init.call(this), t$.prototype.__init2.call(this), t$.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
                }
            }
            let tQ = ["A", "BUTTON", "INPUT"];

            function t0() {
                return Date.now() / 1e3
            }

            function t1(t) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...t
                }
            }(w = _ || (_ = {}))[w.Document = 0] = "Document", w[w.DocumentType = 1] = "DocumentType", w[w.Element = 2] = "Element", w[w.Text = 3] = "Text", w[w.CDATA = 4] = "CDATA", w[w.Comment = 5] = "Comment";
            let t2 = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]),
                t5 = t => e => {
                    if (!t.isEnabled()) return;
                    let n = function(t) {
                        let {
                            target: e,
                            message: n
                        } = function(t) {
                            let e;
                            let n = "click" === t.name,
                                r = null;
                            try {
                                r = n ? tJ(t.event) : tX(t.event), e = (0, k.htmlTreeAsString)(r, {
                                    maxStringLength: 200
                                }) || "<unknown>"
                            } catch (t) {
                                e = "<unknown>"
                            }
                            return {
                                target: r,
                                message: e
                            }
                        }(t);
                        return t1({
                            category: "ui.".concat(t.name),
                            ...t3(e, n)
                        })
                    }(e);
                    if (!n) return;
                    let r = "click" === e.name,
                        i = r && e.event;
                    r && t.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
                        t.handleClick(e, n)
                    }(t.clickDetector, n, tJ(e.event)), tK(t, n)
                };

            function t3(t, e) {
                let n = t && function(t) {
                    return "__sn" in t
                }(t) && t.__sn.type === _.Element ? t.__sn : null;
                return {
                    message: e,
                    data: n ? {
                        nodeId: n.id,
                        node: {
                            id: n.id,
                            tagName: n.tagName,
                            textContent: t ? Array.from(t.childNodes).map(t => "__sn" in t && t.__sn.type === _.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join("") : "",
                            attributes: function(t) {
                                let e = {};
                                for (let n in t)
                                    if (t2.has(n)) {
                                        let r = n;
                                        ("data-testid" === n || "data-test-id" === n) && (r = "testId"), e[r] = t[n]
                                    } return e
                            }(n.attributes)
                        }
                    } : {}
                }
            }
            let t6 = ["name", "type", "startTime", "transferSize", "duration"];

            function t4(t) {
                return function(e) {
                    return t6.every(n => t[n] === e[n])
                }
            }
            class t7 extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of ".concat(2e7, "."))
                }
            }
            class t8 {
                __init() {
                    this._totalSize = 0
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                get type() {
                    return "sync"
                }
                destroy() {
                    this.events = []
                }
                async addEvent(t) {
                    let e = JSON.stringify(t).length;
                    if (this._totalSize += e, this._totalSize > 2e7) throw new t7;
                    this.events.push(t)
                }
                finish() {
                    return new Promise(t => {
                        let e = this.events;
                        this.clear(), t(JSON.stringify(e))
                    })
                }
                clear() {
                    this.events = [], this._totalSize = 0
                }
                getEarliestTimestamp() {
                    let t = this.events.map(t => t.timestamp).sort()[0];
                    return t ? tV(t) : null
                }
                constructor() {
                    t8.prototype.__init.call(this), this.events = []
                }
            }
            class t9 {
                ensureReady() {
                    return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
                        this._worker.addEventListener("message", n => {
                            let {
                                data: r
                            } = n;
                            r.success ? t() : e()
                        }, {
                            once: !0
                        }), this._worker.addEventListener("error", t => {
                            e(t)
                        }, {
                            once: !0
                        })
                    }), this._ensureReadyPromise)
                }
                destroy() {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Destroying compression worker"), this._worker.terminate()
                }
                postMessage(t, e) {
                    let n = this._getAndIncrementId();
                    return new Promise((r, i) => {
                        let a = e => {
                            let {
                                data: s
                            } = e;
                            if (s.method === t) {
                                if (s.id === n) {
                                    if (this._worker.removeEventListener("message", a), !s.success) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay]", s.response), i(Error("Error in compression worker"));
                                        return
                                    }
                                    r(s.response)
                                }
                            }
                        };
                        this._worker.addEventListener("message", a), this._worker.postMessage({
                            id: n,
                            method: t,
                            arg: e
                        })
                    })
                }
                _getAndIncrementId() {
                    return this._id++
                }
                constructor(t) {
                    this._worker = t, this._id = 0
                }
            }
            class et {
                __init() {
                    this._totalSize = 0
                }
                get hasEvents() {
                    return !!this._earliestTimestamp
                }
                get type() {
                    return "worker"
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                addEvent(t) {
                    let e = tV(t.timestamp);
                    (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                    let n = JSON.stringify(t);
                    return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new t7) : this._sendEventToWorker(n)
                }
                finish() {
                    return this._finishRequest()
                }
                clear() {
                    this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage("clear")
                }
                getEarliestTimestamp() {
                    return this._earliestTimestamp
                }
                _sendEventToWorker(t) {
                    return this._worker.postMessage("addEvent", t)
                }
                async _finishRequest() {
                    let t = await this._worker.postMessage("finish");
                    return this._earliestTimestamp = null, this._totalSize = 0, t
                }
                constructor(t) {
                    et.prototype.__init.call(this), this._worker = new t9(t), this._earliestTimestamp = null
                }
            }
            class ee {
                get type() {
                    return this._used.type
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                clear() {
                    return this._used.clear()
                }
                getEarliestTimestamp() {
                    return this._used.getEarliestTimestamp()
                }
                addEvent(t) {
                    return this._used.addEvent(t)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer");
                        return
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    let {
                        events: t
                    } = this._fallback, e = [];
                    for (let n of t) e.push(this._compression.addEvent(n));
                    this._used = this._compression;
                    try {
                        await Promise.all(e)
                    } catch (t) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("[Replay] Failed to add events when switching buffers.", t)
                    }
                }
                constructor(t) {
                    this._fallback = new t8, this._compression = new et(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
            }

            function en() {
                try {
                    return "sessionStorage" in x && !!x.sessionStorage
                } catch (t) {
                    return !1
                }
            }

            function er(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
            }

            function ei(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
                return er(t.started, e.maxSessionLife, n) || er(t.lastActivity, e.sessionIdleExpire, n)
            }

            function ea(t) {
                return void 0 !== t && Math.random() < t
            }

            function es(t) {
                if (en()) try {
                    x.sessionStorage.setItem(D, JSON.stringify(t))
                } catch (t) {}
            }

            function eo(t) {
                let e = Date.now(),
                    n = t.id || (0, k.uuid4)(),
                    r = t.started || e,
                    i = t.lastActivity || e,
                    a = t.segmentId || 0,
                    s = t.sampled;
                return {
                    id: n,
                    started: r,
                    lastActivity: i,
                    segmentId: a,
                    sampled: s,
                    shouldRefresh: !0
                }
            }

            function ec(t) {
                let {
                    timeouts: e,
                    currentSession: n,
                    stickySession: r,
                    sessionSampleRate: i,
                    allowBuffering: a
                } = t, s = n || r && function() {
                    if (!en()) return null;
                    try {
                        let t = x.sessionStorage.getItem(D);
                        if (!t) return null;
                        let e = JSON.parse(t);
                        return eo(e)
                    } catch (t) {
                        return null
                    }
                }();
                if (s) {
                    let t = ei(s, e);
                    if (!t || a && s.shouldRefresh) return {
                        type: "saved",
                        session: s
                    };
                    if (s.shouldRefresh)("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Session has expired");
                    else {
                        let t = eo({
                            sampled: !1
                        });
                        return {
                            type: "new",
                            session: t
                        }
                    }
                }
                let o = function(t) {
                    var e, n;
                    let {
                        sessionSampleRate: r,
                        allowBuffering: i,
                        stickySession: a = !1
                    } = t;
                    let s = (e = r, n = i, ea(e) ? "session" : !!n && "buffer"),
                        o = eo({
                            sampled: s
                        });
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Creating new session: ".concat(o.id)), a && es(o), o
                }({
                    stickySession: r,
                    sessionSampleRate: i,
                    allowBuffering: a
                });
                return {
                    type: "new",
                    session: o
                }
            }
            async function el(t, e, n) {
                if (!t.eventBuffer || t.isPaused()) return null;
                let r = tV(e.timestamp);
                if (r + t.timeouts.sessionIdlePause < Date.now()) return null;
                try {
                    n && t.eventBuffer.clear();
                    let r = t.getOptions(),
                        i = function(t, e) {
                            try {
                                if ("function" == typeof e && t.type === l.Custom) return e(t)
                            } catch (t) {
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
                            }
                            return t
                        }(e, r.beforeAddRecordingEvent);
                    if (!i) return;
                    return await t.eventBuffer.addEvent(i)
                } catch (r) {
                    let e = r && r instanceof t7 ? "addEventSizeExceeded" : "addEvent";
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error(r), await t.stop(e);
                    let n = (0, T.getCurrentHub)().getClient();
                    n && n.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function eu(t) {
                return !t.type
            }

            function ed(t) {
                return "transaction" === t.type
            }

            function eh(t) {
                let e = function() {
                    let t = (0, T.getCurrentHub)().getClient();
                    if (!t) return !1;
                    let e = t.getTransport();
                    return !!e && (e.send.__sentry__baseTransport__ || !1)
                }();
                return (n, r) => {
                    if (n.type && !ed(n)) return;
                    let i = r && r.statusCode;
                    if (!e || !!i && !(i < 200) && !(i >= 300)) {
                        if (ed(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
                            t.getContext().traceIds.add(n.contexts.trace.trace_id);
                            return
                        }
                        if (!n.type) n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(() => {
                            t.sendBufferedReplayOrFlush()
                        })
                    }
                }
            }

            function ef(t, e) {
                return e.map(e => {
                    let {
                        type: n,
                        start: r,
                        end: i,
                        name: a,
                        data: s
                    } = e, o = t.throttledAddEvent({
                        type: l.Custom,
                        timestamp: r,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: n,
                                description: a,
                                startTimestamp: r,
                                endTimestamp: i,
                                data: s
                            }
                        }
                    });
                    return "string" == typeof o ? Promise.resolve(null) : o
                })
            }

            function ep(t, e) {
                var n, r;
                if (!!t.isEnabled() && null !== e) {
                    if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
                            let e = (0, T.getCurrentHub)().getClient(),
                                n = e && e.getDsn();
                            return !!n && t.includes(n.host)
                        }(r))) t.addUpdate(() => (ef(t, [e]), !0))
                }
            }
            let e_ = ["true", "false", "null"];

            function eg(t) {
                let e = function(t) {
                    let e = [];
                    for (let n = 0; n < t.length; n++)(function(t, e, n) {
                        let r = t[t.length - 1],
                            i = e[n];
                        if (!/\s/.test(i)) {
                            if ('"' === i && ! function t(e, n) {
                                    let r = e[n - 1];
                                    return "\\" === r && !t(e, n - 1)
                                }(e, n)) {
                                (function(t, e) {
                                    if (14 === e) {
                                        t.pop(), t.push(15);
                                        return
                                    }
                                    if (22 === e) {
                                        t.pop(), t.push(23);
                                        return
                                    }
                                    if (13 === e) {
                                        t.push(14);
                                        return
                                    }
                                    if (21 === e) {
                                        t.push(22);
                                        return
                                    }
                                    if (10 === e) {
                                        t.push(12);
                                        return
                                    }
                                    if (12 === e) {
                                        t.pop(), t.push(11);
                                    }
                                })(t, r);
                                return
                            }
                            switch (i) {
                                case "{":
                                    (function(t, e) {
                                        if (!e || 13 === e) {
                                            t.push(10);
                                            return
                                        }
                                        if (21 === e && t.push(10), 20 === e) {
                                            t.push(10);
                                        }
                                    })(t, r);
                                    break;
                                case "[":
                                    (function(t, e) {
                                        if (!e || 13 === e) {
                                            t.push(20), t.push(21);
                                            return
                                        }
                                        if (21 === e && (t.push(20), t.push(21)), 20 === e) {
                                            t.push(20), t.push(21);
                                        }
                                    })(t, r);
                                    break;
                                case ":":
                                    (function(t, e) {
                                        11 === e && (t.pop(), t.push(13))
                                    })(t, r);
                                    break;
                                case ",":
                                    (function(t, e) {
                                        if (13 === e) {
                                            t.pop();
                                            return
                                        }
                                        if (15 === e) {
                                            t.pop(), t.pop();
                                            return
                                        }
                                        if (21 !== e && 23 === e) {
                                            t.pop();
                                        }
                                    })(t, r);
                                    break;
                                case "}":
                                    (function(t, e) {
                                        10 === e && t.pop(), 13 === e && (t.pop(), t.pop()), 15 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
                                    })(t, r);
                                    break;
                                case "]":
                                    (function(t, e) {
                                        20 === e && t.pop(), 21 === e && (t.pop(), t.pop()), 23 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
                                    })(t, r)
                            }
                        }
                    })(e, t, n);
                    return e
                }(t);
                return function(t, e) {
                    if (!e.length) return t;
                    let n = t,
                        r = e.length - 1,
                        i = e[r];
                    n = function(t, e) {
                        switch (e) {
                            case 10:
                                return "".concat(t, '"~~":"~~"');
                            case 11:
                                return "".concat(t, ':"~~"');
                            case 12:
                                return "".concat(t, '~~":"~~"');
                            case 13:
                                return function(t) {
                                    let e = t.lastIndexOf(":"),
                                        n = t.slice(e + 1);
                                    return e_.includes(n.trim()) ? "".concat(t, ',"~~":"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
                                }(t);
                            case 14:
                            case 22:
                                return "".concat(t, '~~"');
                            case 15:
                                return "".concat(t, ',"~~":"~~"');
                            case 20:
                                return "".concat(t, '"~~"');
                            case 21:
                                return function(t) {
                                    let e = function(t) {
                                        for (let e = t.length - 1; e >= 0; e--) {
                                            let n = t[e];
                                            if ("," === n || "[" === n) return e
                                        }
                                        return -1
                                    }(t);
                                    if (e > -1) {
                                        let n = t.slice(e + 1);
                                        return e_.includes(n.trim()) ? "".concat(t, ',"~~"') : "".concat(t.slice(0, e + 1), '"~~"')
                                    }
                                    return t
                                }(t);
                            case 23:
                                return "".concat(t, ',"~~"')
                        }
                        return t
                    }(n, i);
                    for (let t = r; t >= 0; t--) {
                        let r = e[t];
                        switch (r) {
                            case 10:
                                n = "".concat(n, "}");
                                break;
                            case 20:
                                n = "".concat(n, "]")
                        }
                    }
                    return n
                }(t, e)
            }

            function em(t, e) {
                if (t) try {
                    if ("string" == typeof t) return e.encode(t).length;
                    if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                    if (t instanceof FormData) {
                        let n = eT(t);
                        return e.encode(n).length
                    }
                    if (t instanceof Blob) return t.size;
                    if (t instanceof ArrayBuffer) return t.byteLength
                } catch (t) {}
            }

            function ey(t) {
                if (!t) return;
                let e = parseInt(t, 10);
                return isNaN(e) ? void 0 : e
            }

            function ev(t) {
                return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? eT(t) : void 0
            }

            function eE(t, e) {
                if (!e) return null;
                let {
                    startTimestamp: n,
                    endTimestamp: r,
                    url: i,
                    method: a,
                    statusCode: s,
                    request: o,
                    response: c
                } = e, l = {
                    type: t,
                    start: n / 1e3,
                    end: r / 1e3,
                    name: i,
                    data: (0, k.dropUndefinedKeys)({
                        method: a,
                        statusCode: s,
                        request: o,
                        response: c
                    })
                };
                return l
            }

            function eb(t) {
                return {
                    headers: {},
                    size: t,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function eS(t, e, n) {
                if (!e && 0 === Object.keys(t).length) return;
                if (!e) return {
                    headers: t
                };
                if (!n) return {
                    headers: t,
                    size: e
                };
                let r = {
                        headers: t,
                        size: e
                    },
                    {
                        body: i,
                        warnings: a
                    } = function(t) {
                        if (!t || "string" != typeof t) return {
                            body: t,
                            warnings: []
                        };
                        let e = t.length > 15e4;
                        if (function(t) {
                                let e = t[0],
                                    n = t[t.length - 1];
                                return "[" === e && "]" === n || "{" === e && "}" === n
                            }(t)) try {
                            let n = e ? eg(t.slice(0, 15e4)) : t,
                                r = JSON.parse(n);
                            return {
                                body: r,
                                warnings: e ? ["JSON_TRUNCATED"] : []
                            }
                        } catch (n) {
                            return {
                                body: e ? "".concat(t.slice(0, 15e4), "…") : t,
                                warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
                            }
                        }
                        return {
                            body: e ? "".concat(t.slice(0, 15e4), "…") : t,
                            warnings: e ? ["TEXT_TRUNCATED"] : []
                        }
                    }(n);
                return r.body = i, a.length > 0 && (r._meta = {
                    warnings: a
                }), r
            }

            function ew(t, e) {
                return Object.keys(t).reduce((n, r) => {
                    let i = r.toLowerCase();
                    return e.includes(i) && t[r] && (n[i] = t[r]), n
                }, {})
            }

            function eT(t) {
                return new URLSearchParams(t).toString()
            }

            function ek(t, e) {
                let n = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.document.baseURI;
                    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(x.location.origin)) return t;
                    let n = new URL(t, e);
                    if (n.origin !== new URL(e).origin) return t;
                    let r = n.href;
                    return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
                }(t);
                return (0, k.stringMatchesSomePattern)(n, e)
            }
            async function eR(t, e, n) {
                try {
                    let r = await ex(t, e, n),
                        i = eE("resource.fetch", r);
                    ep(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            async function ex(t, e, n) {
                let {
                    startTimestamp: r,
                    endTimestamp: i
                } = e, {
                    url: a,
                    method: s,
                    status_code: o = 0,
                    request_body_size: c,
                    response_body_size: l
                } = t.data, u = ek(a, n.networkDetailAllowUrls) && !ek(a, n.networkDetailDenyUrls), d = u ? function(t, e, n) {
                    let {
                        networkCaptureBodies: r,
                        networkRequestHeaders: i
                    } = t, a = function(t, e) {
                        return 1 === t.length && "string" != typeof t[0] ? eO(t[0], e) : 2 === t.length ? eO(t[1], e) : {}
                    }(e, i);
                    if (!r) return eS(a, n, void 0);
                    let s = eI(e),
                        o = ev(s);
                    return eS(a, n, o)
                }(n, e.input, c) : eb(c), h = await eD(u, n, e.response, l);
                return {
                    startTimestamp: r,
                    endTimestamp: i,
                    url: a,
                    method: s,
                    statusCode: o,
                    request: d,
                    response: h
                }
            }
            async function eD(t, e, n, r) {
                let {
                    networkCaptureBodies: i,
                    textEncoder: a,
                    networkResponseHeaders: s
                } = e;
                if (!t && void 0 !== r) return eb(r);
                let o = eC(n.headers, s);
                if (!i && void 0 !== r) return eS(o, r, void 0);
                try {
                    let e = n.clone(),
                        s = await eN(e),
                        c = s && s.length && void 0 === r ? em(s, a) : r;
                    if (!t) return eb(c);
                    if (i) return eS(o, c, s);
                    return eS(o, c, void 0)
                } catch (t) {
                    return eS(o, r, void 0)
                }
            }
            async function eN(t) {
                try {
                    return await t.text()
                } catch (t) {
                    return
                }
            }

            function eI() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (2 === t.length && "object" == typeof t[1]) return t[1].body
            }

            function eC(t, e) {
                let n = {};
                return e.forEach(e => {
                    t.get(e) && (n[e] = t.get(e))
                }), n
            }

            function eO(t, e) {
                if (!t) return {};
                let n = t.headers;
                return n ? n instanceof Headers ? eC(n, e) : Array.isArray(n) ? {} : ew(n, e) : {}
            }
            async function eA(t, e, n) {
                try {
                    let r = function(t, e, n) {
                            let {
                                startTimestamp: r,
                                endTimestamp: i,
                                input: a,
                                xhr: s
                            } = e, {
                                url: o,
                                method: c,
                                status_code: l = 0,
                                request_body_size: u,
                                response_body_size: d
                            } = t.data;
                            if (!o) return null;
                            if (!ek(o, n.networkDetailAllowUrls) || ek(o, n.networkDetailDenyUrls)) {
                                let t = eb(u),
                                    e = eb(d);
                                return {
                                    startTimestamp: r,
                                    endTimestamp: i,
                                    url: o,
                                    method: c,
                                    statusCode: l,
                                    request: t,
                                    response: e
                                }
                            }
                            let h = s[k.SENTRY_XHR_DATA_KEY],
                                f = h ? ew(h.request_headers, n.networkRequestHeaders) : {},
                                p = ew(function(t) {
                                    let e = t.getAllResponseHeaders();
                                    return e ? e.split("\r\n").reduce((t, e) => {
                                        let [n, r] = e.split(": ");
                                        return t[n.toLowerCase()] = r, t
                                    }, {}) : {}
                                }(s), n.networkResponseHeaders),
                                _ = eS(f, u, n.networkCaptureBodies ? ev(a) : void 0),
                                g = eS(p, d, n.networkCaptureBodies ? e.xhr.responseText : void 0);
                            return {
                                startTimestamp: r,
                                endTimestamp: i,
                                url: o,
                                method: c,
                                statusCode: l,
                                request: _,
                                response: g
                            }
                        }(t, e, n),
                        i = eE("resource.xhr", r);
                    ep(n.replay, i)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
                }
            }
            let eU = null,
                eB = t => e => {
                    if (!t.isEnabled()) return;
                    let n = function(t) {
                        let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                        if (eU === e || !e) return null;
                        return (eU = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
                            let e = t.data && t.data.arguments;
                            if (!Array.isArray(e) || 0 === e.length) return t1(t);
                            let n = !1,
                                r = e.map(t => {
                                    if (!t) return t;
                                    if ("string" == typeof t) return t.length > 5e3 ? (n = !0, "".concat(t.slice(0, 5e3), "…")) : t;
                                    if ("object" == typeof t) try {
                                        let e = (0, k.normalize)(t, 7),
                                            r = JSON.stringify(e);
                                        if (r.length > 5e3) {
                                            let t = eg(r.slice(0, 5e3)),
                                                e = JSON.parse(t);
                                            return n = !0, e
                                        }
                                        return e
                                    } catch (t) {}
                                    return t
                                });
                            return t1({
                                ...t,
                                data: {
                                    ...t.data,
                                    arguments: r,
                                    ...n ? {
                                        _meta: {
                                            warnings: ["CONSOLE_ARG_TRUNCATED"]
                                        }
                                    } : {}
                                }
                            })
                        }(e) : t1(e)
                    }(e);
                    n && tK(t, n)
                };

            function eL(t) {
                return !!(t && t.on)
            }
            async function eM(t) {
                try {
                    return Promise.all(ef(t, [function(t) {
                        let {
                            jsHeapSizeLimit: e,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        } = t, i = Date.now() / 1e3;
                        return {
                            type: "memory",
                            name: "memory",
                            start: i,
                            end: i,
                            data: {
                                memory: {
                                    jsHeapSizeLimit: e,
                                    totalJSHeapSize: n,
                                    usedJSHeapSize: r
                                }
                            }
                        }
                    }(x.performance.memory)]))
                } catch (t) {
                    return []
                }
            }
            let eP = {
                resource: function(t) {
                    let {
                        entryType: e,
                        initiatorType: n,
                        name: r,
                        responseEnd: i,
                        startTime: a,
                        decodedBodySize: s,
                        encodedBodySize: o,
                        responseStatus: c,
                        transferSize: l
                    } = t;
                    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                        type: "".concat(e, ".").concat(n),
                        start: eY(a),
                        end: eY(i),
                        name: r,
                        data: {
                            size: l,
                            statusCode: c,
                            decodedBodySize: s,
                            encodedBodySize: o
                        }
                    }
                },
                paint: function(t) {
                    let {
                        duration: e,
                        entryType: n,
                        name: r,
                        startTime: i
                    } = t, a = eY(i);
                    return {
                        type: n,
                        name: r,
                        start: a,
                        end: a + e,
                        data: void 0
                    }
                },
                navigation: function(t) {
                    let {
                        entryType: e,
                        name: n,
                        decodedBodySize: r,
                        duration: i,
                        domComplete: a,
                        encodedBodySize: s,
                        domContentLoadedEventStart: o,
                        domContentLoadedEventEnd: c,
                        domInteractive: l,
                        loadEventStart: u,
                        loadEventEnd: d,
                        redirectCount: h,
                        startTime: f,
                        transferSize: p,
                        type: _
                    } = t;
                    return 0 === i ? null : {
                        type: "".concat(e, ".").concat(_),
                        start: eY(f),
                        end: eY(a),
                        name: n,
                        data: {
                            size: p,
                            decodedBodySize: r,
                            encodedBodySize: s,
                            duration: i,
                            domInteractive: l,
                            domContentLoadedEventStart: o,
                            domContentLoadedEventEnd: c,
                            loadEventStart: u,
                            loadEventEnd: d,
                            domComplete: a,
                            redirectCount: h
                        }
                    }
                },
                "largest-contentful-paint": function(t) {
                    let {
                        entryType: e,
                        startTime: n,
                        size: r
                    } = t, i = 0;
                    if (x.performance) {
                        let t = x.performance.getEntriesByType("navigation")[0];
                        i = t && t.activationStart || 0
                    }
                    let a = Math.max(n - i, 0),
                        s = eY(i) + a / 1e3;
                    return {
                        type: e,
                        name: e,
                        start: s,
                        end: s,
                        data: {
                            value: a,
                            size: r,
                            nodeId: tZ.mirror.getId(t.element)
                        }
                    }
                }
            };

            function eG(t) {
                return void 0 === eP[t.entryType] ? null : eP[t.entryType](t)
            }

            function eY(t) {
                return ((k.browserPerformanceTimeOrigin || x.performance.timeOrigin) + t) / 1e3
            }
            async function eF(t) {
                let {
                    client: e,
                    scope: n,
                    replayId: r,
                    event: i
                } = t, a = "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations), s = await (0, T.prepareEvent)(e.getOptions(), i, {
                    event_id: r,
                    integrations: a
                }, n);
                if (!s) return null;
                s.platform = s.platform || "javascript";
                let o = e.getSdkMetadata && e.getSdkMetadata(),
                    {
                        name: c,
                        version: l
                    } = o && o.sdk || {};
                return s.sdk = {
                    ...s.sdk,
                    name: c || "sentry.javascript.unknown",
                    version: l || "0.0.0"
                }, s
            }
            async function ez(t) {
                var e, n, r, i;
                let a, {
                        recordingData: s,
                        replayId: o,
                        segmentId: c,
                        eventContext: l,
                        timestamp: u,
                        session: d
                    } = t,
                    h = function(t) {
                        let e, {
                                recordingData: n,
                                headers: r
                            } = t,
                            i = "".concat(JSON.stringify(r), "\n");
                        if ("string" == typeof n) e = "".concat(i).concat(n);
                        else {
                            let t = new TextEncoder,
                                r = t.encode(i);
                            (e = new Uint8Array(r.length + n.length)).set(r), e.set(n, r.length)
                        }
                        return e
                    }({
                        recordingData: s,
                        headers: {
                            segment_id: c
                        }
                    }),
                    {
                        urls: f,
                        errorIds: p,
                        traceIds: _,
                        initialTimestamp: g
                    } = l,
                    m = (0, T.getCurrentHub)(),
                    y = m.getClient(),
                    v = m.getScope(),
                    E = y && y.getTransport(),
                    b = y && y.getDsn();
                if (!y || !E || !b || !d.sampled) return;
                let S = {
                        type: "replay_event",
                        replay_start_timestamp: g / 1e3,
                        timestamp: u / 1e3,
                        error_ids: p,
                        trace_ids: _,
                        urls: f,
                        replay_id: o,
                        segment_id: c,
                        replay_type: d.sampled
                    },
                    w = await eF({
                        scope: v,
                        client: y,
                        replayId: o,
                        event: S
                    });
                if (!w) {
                    y.recordDroppedEvent("event_processor", "replay", S), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("An event processor returned `null`, will not send event.");
                    return
                }
                delete w.sdkProcessingMetadata;
                let R = (e = w, n = h, r = b, i = y.getOptions().tunnel, (0, k.createEnvelope)((0, k.createEventEnvelopeHeaders)(e, (0, k.getSdkMetadataForEnvelopeHeader)(e), i, r), [
                    [{
                        type: "replay_event"
                    }, e],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof n ? new TextEncoder().encode(n).length : n.length
                    }, n]
                ]));
                try {
                    a = await E.send(R)
                } catch (e) {
                    let t = Error(N);
                    try {
                        t.cause = e
                    } catch (t) {}
                    throw t
                }
                if (!a) return a;
                if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new eH(a.statusCode);
                return a
            }
            class eH extends Error {
                constructor(t) {
                    super("Transport returned status code ".concat(t))
                }
            }
            async function eW(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        count: 0,
                        interval: 5e3
                    },
                    {
                        recordingData: n,
                        options: r
                    } = t;
                if (n.length) try {
                    return await ez(t), !0
                } catch (n) {
                    if (n instanceof eH) throw n;
                    if ((0, T.setContext)("Replays", {
                            _retryCount: e.count
                        }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, T.captureException)(n), e.count >= 3) {
                        let t = Error("".concat(N, " - max retries exceeded"));
                        try {
                            t.cause = n
                        } catch (t) {}
                        throw t
                    }
                    return e.interval *= ++e.count, new Promise((n, r) => {
                        setTimeout(async () => {
                            try {
                                await eW(t, e), n(!0)
                            } catch (t) {
                                r(t)
                            }
                        }, e.interval)
                    })
                }
            }
            let ej = "__THROTTLED";
            class eq {
                __init() {
                    this.eventBuffer = null
                }
                __init2() {
                    this.performanceEvents = []
                }
                __init3() {
                    this.recordingMode = "session"
                }
                __init4() {
                    this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5,
                        maxSessionLife: 36e5
                    }
                }
                __init5() {
                    this._performanceObserver = null
                }
                __init6() {
                    this._flushLock = null
                }
                __init7() {
                    this._lastActivity = Date.now()
                }
                __init8() {
                    this._isEnabled = !1
                }
                __init9() {
                    this._isPaused = !1
                }
                __init10() {
                    this._hasInitializedCoreListeners = !1
                }
                __init11() {
                    this._stopRecording = null
                }
                __init12() {
                    this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                getOptions() {
                    return this._options
                }
                initializeSampling() {
                    let {
                        errorSampleRate: t,
                        sessionSampleRate: e
                    } = this._options;
                    if (t <= 0 && e <= 0) return;
                    let n = this._loadAndCheckSession();
                    if (n) {
                        if (!this.session) {
                            this._handleException(Error("Unable to initialize and create session"));
                            return
                        }
                        this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()
                    }
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
                    if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
                    let t = this.session && this.session.id,
                        {
                            session: e
                        } = ec({
                            timeouts: this.timeouts,
                            stickySession: !!this._options.stickySession,
                            currentSession: this.session,
                            sessionSampleRate: 1,
                            allowBuffering: !1
                        });
                    e.previousSessionId = t, this.session = e, this._initializeRecording()
                }
                startBuffering() {
                    if (this._isEnabled) throw Error("Replay recording is already in progress");
                    let t = this.session && this.session.id,
                        {
                            session: e
                        } = ec({
                            timeouts: this.timeouts,
                            stickySession: !!this._options.stickySession,
                            currentSession: this.session,
                            sessionSampleRate: 0,
                            allowBuffering: !0
                        });
                    e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                }
                startRecording() {
                    try {
                        var t;
                        let e;
                        this._stopRecording = tZ({
                            ...this._recordingOptions,
                            ..."buffer" === this.recordingMode && {
                                checkoutEveryNms: 6e4
                            },
                            emit: (t = this, e = !1, (n, r) => {
                                if (!t.checkAndHandleExpiredSession()) {
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("[Replay] Received replay event after session expired.");
                                    return
                                }
                                let i = r || !e;
                                e = !0, t.addUpdate(() => {
                                    if ("buffer" === t.recordingMode && i && t.setInitialState(), el(t, n, i), !i) return !1;
                                    if (function(t, e) {
                                            e && t.session && 0 === t.session.segmentId ? el(t, function(t) {
                                                let e = t.getOptions();
                                                return {
                                                    type: l.Custom,
                                                    timestamp: Date.now(),
                                                    data: {
                                                        tag: "options",
                                                        payload: {
                                                            sessionSampleRate: e.sessionSampleRate,
                                                            errorSampleRate: e.errorSampleRate,
                                                            useCompressionOption: e.useCompression,
                                                            blockAllMedia: e.blockAllMedia,
                                                            maskAllText: e.maskAllText,
                                                            maskAllInputs: e.maskAllInputs,
                                                            useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                                            networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                                            networkCaptureBodies: e.networkCaptureBodies,
                                                            networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                                            networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                                        }
                                                    }
                                                }
                                            }(t), !1) : Promise.resolve(null)
                                        }(t, i), t.session && t.session.previousSessionId) return !0;
                                    if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                                        let e = t.eventBuffer.getEarliestTimestamp();
                                        if (e) {
                                            let n = t.getOptions()._experiments.traceInternals ? console.info : k.logger.info;
                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n("[Replay] Updating session start time to earliest event in buffer at ".concat(e)), t.session.started = e, t.getOptions().stickySession && es(t.session)
                                        }
                                    }
                                    return "session" === t.recordingMode && t.flush(), !0
                                })
                            }),
                            onMutation: this._onMutationHandler
                        })
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                stopRecording() {
                    try {
                        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                    } catch (t) {
                        return this._handleException(t), !1
                    }
                }
                async stop(t) {
                    if (this._isEnabled) try {
                        var e;
                        if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                            let e = this.getOptions()._experiments.traceInternals ? console.warn : k.logger.log;
                            e("[Replay] Stopping Replay".concat(t ? " triggered by ".concat(t) : ""))
                        }
                        this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
                                force: !0
                            }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
                            function() {
                                if (en()) try {
                                    x.sessionStorage.removeItem(D)
                                } catch (t) {}
                            }(), e.session = void 0
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                pause() {
                    this._isPaused = !0, this.stopRecording()
                }
                resume() {
                    this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording())
                }
                async sendBufferedReplayOrFlush() {
                    let {
                        continueRecording: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let e = Date.now(),
                        n = this.getOptions()._experiments.traceInternals ? console.info : k.logger.info;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n("[Replay] Converting buffer to session, starting at ".concat(e)), await this.flushImmediate();
                    let r = this.stopRecording();
                    t && r && (this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording())
                }
                addUpdate(t) {
                    let e = t();
                    if ("buffer" !== this.recordingMode) !0 !== e && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), !this._stopRecording) {
                        if (!this._loadAndCheckSession()) return;
                        this.resume();
                        return
                    }
                    this.checkAndHandleExpiredSession(), this._updateSessionActivity()
                }
                updateUserActivity() {
                    this._updateUserActivity(), this._updateSessionActivity()
                }
                conditionalFlush() {
                    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                }
                flush() {
                    return this._debouncedFlush()
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                cancelFlush() {
                    this._debouncedFlush.cancel()
                }
                getSessionId() {
                    return this.session && this.session.id
                }
                checkAndHandleExpiredSession() {
                    let t = this.getSessionId();
                    if (this._lastActivity && er(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    if (!this._loadAndCheckSession()) return;
                    let e = t !== this.getSessionId();
                    return !e || (this._triggerFullSnapshot(), !1)
                }
                setInitialState() {
                    let t = "".concat(x.location.pathname).concat(x.location.hash).concat(x.location.search),
                        e = "".concat(x.location.origin).concat(t);
                    this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
                }
                throttledAddEvent(t, e) {
                    let n = this._throttledAddEvent(t, e);
                    if (n === ej) {
                        let t = t1({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => {
                            el(this, {
                                type: l.Custom,
                                timestamp: t.timestamp || 0,
                                data: {
                                    tag: "breadcrumb",
                                    payload: t,
                                    metric: !0
                                }
                            })
                        })
                    }
                    return n
                }
                getCurrentRoute() {
                    let t = this.lastTransaction || (0, T.getCurrentHub)().getScope().getTransaction();
                    if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function(t) {
                        let {
                            useCompression: e
                        } = t;
                        if (e && window.Worker) try {
                            let t = function() {
                                let t = new Blob(['/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                return URL.createObjectURL(t)
                            }();
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Using compression worker");
                            let e = new Worker(t);
                            return new ee(e)
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Failed to create compression worker")
                        }
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Using simple buffer"), new t8
                    }({
                        useCompression: this._options.useCompression
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
                }
                _handleException(t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, T.captureException)(t)
                }
                _loadAndCheckSession() {
                    let {
                        type: t,
                        session: e
                    } = ec({
                        timeouts: this.timeouts,
                        stickySession: !!this._options.stickySession,
                        currentSession: this.session,
                        sessionSampleRate: this._options.sessionSampleRate,
                        allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode
                    });
                    "new" === t && this.setInitialState();
                    let n = this.getSessionId();
                    return e.id !== n && (e.previousSessionId = n), this.session = e, !!this.session.sampled || (this.stop("session unsampled"), !1)
                }
                _addListeners() {
                    try {
                        x.document.addEventListener("visibilitychange", this._handleVisibilityChange), x.addEventListener("blur", this._handleWindowBlur), x.addEventListener("focus", this._handleWindowFocus), x.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
                            var e;
                            let n = (0, T.getCurrentHub)().getScope(),
                                r = (0, T.getCurrentHub)().getClient();
                            n && n.addScopeListener(eB(t)), (0, k.addInstrumentationHandler)("dom", t5(t)), (0, k.addInstrumentationHandler)("history", (e = t, t => {
                                    if (!e.isEnabled()) return;
                                    let n = function(t) {
                                        let {
                                            from: e,
                                            to: n
                                        } = t, r = Date.now() / 1e3;
                                        return {
                                            type: "navigation.push",
                                            start: r,
                                            end: r,
                                            name: n,
                                            data: {
                                                previous: e
                                            }
                                        }
                                    }(t);
                                    null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (ef(e, [n]), !1)))
                                })), ! function(t) {
                                    let e = (0, T.getCurrentHub)().getClient();
                                    try {
                                        let i = new TextEncoder,
                                            {
                                                networkDetailAllowUrls: a,
                                                networkDetailDenyUrls: s,
                                                networkCaptureBodies: o,
                                                networkRequestHeaders: c,
                                                networkResponseHeaders: l
                                            } = t.getOptions(),
                                            u = {
                                                replay: t,
                                                textEncoder: i,
                                                networkDetailAllowUrls: a,
                                                networkDetailDenyUrls: s,
                                                networkCaptureBodies: o,
                                                networkRequestHeaders: c,
                                                networkResponseHeaders: l
                                            };
                                        if (e && e.on) e.on("beforeAddBreadcrumb", (t, e) => (function(t, e, n) {
                                            if (e.data) try {
                                                (function(t) {
                                                    return "xhr" === t.category
                                                })(e) && function(t) {
                                                    return t && t.xhr
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        xhr: r,
                                                        input: i
                                                    } = e, a = em(i, n.textEncoder), s = r.getResponseHeader("content-length") ? ey(r.getResponseHeader("content-length")) : em(r.response, n.textEncoder);
                                                    void 0 !== a && (t.data.request_body_size = a), void 0 !== s && (t.data.response_body_size = s)
                                                }(e, n, t), eA(e, n, t)),
                                                function(t) {
                                                    return "fetch" === t.category
                                                }(e) && function(t) {
                                                    return t && t.response
                                                }(n) && (! function(t, e, n) {
                                                    let {
                                                        input: r,
                                                        response: i
                                                    } = e, a = eI(r), s = em(a, n.textEncoder), o = i ? ey(i.headers.get("content-length")) : void 0;
                                                    void 0 !== s && (t.data.request_body_size = s), void 0 !== o && (t.data.response_body_size = o)
                                                }(e, n, t), eR(e, n, t))
                                            } catch (t) {
                                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("Error when enriching network breadcrumb")
                                            }
                                        })(u, t, e));
                                        else {
                                            var n, r;
                                            (0, k.addInstrumentationHandler)("fetch", (n = t, t => {
                                                if (!n.isEnabled()) return;
                                                let e = function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        fetchData: r,
                                                        response: i
                                                    } = t;
                                                    if (!n) return null;
                                                    let {
                                                        method: a,
                                                        url: s
                                                    } = r;
                                                    return {
                                                        type: "resource.fetch",
                                                        start: e / 1e3,
                                                        end: n / 1e3,
                                                        name: s,
                                                        data: {
                                                            method: a,
                                                            statusCode: i ? i.status : void 0
                                                        }
                                                    }
                                                }(t);
                                                ep(n, e)
                                            })), (0, k.addInstrumentationHandler)("xhr", (r = t, t => {
                                                if (!r.isEnabled()) return;
                                                let e = function(t) {
                                                    let {
                                                        startTimestamp: e,
                                                        endTimestamp: n,
                                                        xhr: r
                                                    } = t, i = r[k.SENTRY_XHR_DATA_KEY];
                                                    if (!e || !n || !i) return null;
                                                    let {
                                                        method: a,
                                                        url: s,
                                                        status_code: o
                                                    } = i;
                                                    return void 0 === s ? null : {
                                                        type: "resource.xhr",
                                                        name: s,
                                                        start: e / 1e3,
                                                        end: n / 1e3,
                                                        data: {
                                                            method: a,
                                                            statusCode: o
                                                        }
                                                    }
                                                }(t);
                                                ep(r, e)
                                            }))
                                        }
                                    } catch (t) {}
                                }(t), (0, T.addGlobalEventProcessor)(function(t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = e ? eh(t) : void 0;
                                    return (e, r) => {
                                        var i, a, s, o;
                                        if ("replay_event" === e.type) return delete e.breadcrumbs, e;
                                        if (e.type && !ed(e)) return e;
                                        if (i = e, a = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (a.originalException && a.originalException.__rrweb__ || i.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/")))) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Ignoring error from rrweb internals", e), null;
                                        let c = (s = t, o = e, "buffer" === s.recordingMode && o.message !== N && !!o.exception && !o.type && ea(s.getOptions().errorSampleRate)),
                                            l = c || "session" === t.recordingMode;
                                        return l && (e.tags = {
                                            ...e.tags,
                                            replayId: t.getSessionId()
                                        }), n && n(e, {
                                            statusCode: 200
                                        }), e
                                    }
                                }(t, ! function(t) {
                                    return !!(t && t.on)
                                }(r))),
                                function(t) {
                                    return !!(t && t.on)
                                }(r) && (r.on("afterSendEvent", eh(t)), r.on("createDsc", e => {
                                    let n = t.getSessionId();
                                    n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
                                }), r.on("startTransaction", e => {
                                    t.lastTransaction = e
                                }), r.on("finishTransaction", e => {
                                    t.lastTransaction = e
                                }))
                        }(this), this._hasInitializedCoreListeners = !0)
                    } catch (t) {
                        this._handleException(t)
                    }
                    "PerformanceObserver" in x && (this._performanceObserver = function(t) {
                        let e = new PerformanceObserver(e => {
                            let n = function(t, e) {
                                let [n, r, i] = t.reduce((t, e) => ("navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t), [
                                    [],
                                    [],
                                    []
                                ]), a = [], s = [], o = r.length ? r[r.length - 1] : void 0;
                                return e.forEach(t => {
                                    if ("largest-contentful-paint" === t.entryType) {
                                        (!o || o.startTime < t.startTime) && (o = t);
                                        return
                                    }
                                    if ("navigation" === t.entryType) {
                                        t.duration > 0 && !n.find(t4(t)) && !s.find(t4(t)) && s.push(t);
                                        return
                                    }
                                    a.push(t)
                                }), [...o ? [o] : [], ...n, ...i, ...a, ...s].sort((t, e) => t.startTime - e.startTime)
                            }(t.performanceEvents, e.getEntries());
                            t.performanceEvents = n
                        });
                        return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach(t => {
                            try {
                                e.observe({
                                    type: t,
                                    buffered: !0
                                })
                            } catch (t) {}
                        }), e
                    }(this))
                }
                _removeListeners() {
                    try {
                        x.document.removeEventListener("visibilitychange", this._handleVisibilityChange), x.removeEventListener("blur", this._handleWindowBlur), x.removeEventListener("focus", this._handleWindowFocus), x.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                __init13() {
                    this._handleVisibilityChange = () => {
                        "visible" === x.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init14() {
                    this._handleWindowBlur = () => {
                        let t = t1({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(t)
                    }
                }
                __init15() {
                    this._handleWindowFocus = () => {
                        let t = t1({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(t)
                    }
                }
                __init16() {
                    this._handleKeyboardEvent = t => {
                        ! function(t, e) {
                            if (!t.isEnabled()) return;
                            t.updateUserActivity();
                            let n = function(t) {
                                let {
                                    metaKey: e,
                                    shiftKey: n,
                                    ctrlKey: r,
                                    altKey: i,
                                    key: a,
                                    target: s
                                } = t;
                                if (!s || function(t) {
                                        return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                                    }(s) || !a) return null;
                                let o = e || r || i,
                                    c = 1 === a.length;
                                if (!o && c) return null;
                                let l = (0, k.htmlTreeAsString)(s, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    u = t3(s, l);
                                return t1({
                                    category: "ui.keyDown",
                                    message: l,
                                    data: {
                                        ...u.data,
                                        metaKey: e,
                                        shiftKey: n,
                                        ctrlKey: r,
                                        altKey: i,
                                        key: a
                                    }
                                })
                            }(e);
                            n && tK(t, n)
                        }(this, t)
                    }
                }
                _doChangeToBackgroundTasks(t) {
                    if (!this.session) return;
                    let e = ei(this.session, this.timeouts);
                    t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
                }
                _doChangeToForegroundTasks(t) {
                    if (!this.session) return;
                    let e = this.checkAndHandleExpiredSession();
                    if (!e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Document has become active, but session has expired");
                        return
                    }
                    t && this._createCustomBreadcrumb(t)
                }
                _triggerFullSnapshot() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    try {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Taking full rrweb snapshot"), tZ.takeFullSnapshot(t)
                    } catch (t) {
                        this._handleException(t)
                    }
                }
                _updateUserActivity() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    this._lastActivity = t
                }
                _updateSessionActivity() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    this.session && (this.session.lastActivity = t, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(t) {
                    this.addUpdate(() => {
                        this.throttledAddEvent({
                            type: l.Custom,
                            timestamp: t.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: t
                            }
                        })
                    })
                }
                _addPerformanceEntries() {
                    let t = [...this.performanceEvents];
                    return this.performanceEvents = [], Promise.all(ef(this, t.map(eG).filter(Boolean)))
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                }
                _updateInitialTimestampFromEventBuffer() {
                    let {
                        session: t,
                        eventBuffer: e
                    } = this;
                    if (!t || !e || t.segmentId) return;
                    let n = e.getEarliestTimestamp();
                    n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
                }
                _popEventContext() {
                    let t = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                    };
                    return this._clearContext(), t
                }
                async _runFlush() {
                    if (!this.session || !this.eventBuffer) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] No session or eventBuffer found to flush.");
                        return
                    }
                    if (await this._addPerformanceEntries(), !!this.eventBuffer && !!this.eventBuffer.hasEvents) {
                        if (await eM(this), this.eventBuffer) try {
                            this._updateInitialTimestampFromEventBuffer();
                            let t = await this.eventBuffer.finish(),
                                e = this.session.id,
                                n = this._popEventContext(),
                                r = this.session.segmentId++;
                            this._maybeSaveSession(), await eW({
                                replayId: e,
                                recordingData: t,
                                segmentId: r,
                                eventContext: n,
                                session: this.session,
                                options: this.getOptions(),
                                timestamp: Date.now()
                            })
                        } catch (e) {
                            this._handleException(e), this.stop("sendReplay");
                            let t = (0, T.getCurrentHub)().getClient();
                            t && t.recordDroppedEvent("send_error", "replay")
                        }
                    }
                }
                __init17() {
                    var t = this;
                    this._flush = async function() {
                        let {
                            force: e = !1
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!t._isEnabled && !e) return;
                        if (!t.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Attempting to finish replay event after session expired.");
                            return
                        }
                        if (!t.session) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] No session found to flush.");
                            return
                        }
                        let n = t.session.started,
                            r = Date.now(),
                            i = r - n;
                        if (i < t._options.minReplayDuration || i > t.timeouts.maxSessionLife + 5e3) {
                            let e = t.getOptions()._experiments.traceInternals ? console.warn : k.logger.warn;
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e("[Replay] Session duration (".concat(Math.floor(i / 1e3), "s) is too short or too long, not sending replay."));
                            return
                        }
                        if (t._debouncedFlush.cancel(), !t._flushLock) {
                            t._flushLock = t._runFlush(), await t._flushLock, t._flushLock = null;
                            return
                        }
                        try {
                            await t._flushLock
                        } catch (t) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error(t)
                        } finally {
                            t._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && es(this.session)
                }
                __init18() {
                    this._onMutationHandler = t => {
                        let e = t.length,
                            n = this._options.mutationLimit,
                            r = this._options.mutationBreadcrumbLimit,
                            i = n && e > n;
                        if (e > r || i) {
                            let t = t1({
                                category: "replay.mutations",
                                data: {
                                    count: e,
                                    limit: i
                                }
                            });
                            this._createCustomBreadcrumb(t)
                        }
                        return !i || (this.stop("mutationLimit"), !1)
                    }
                }
                constructor({
                    options: t,
                    recordingOptions: e
                }) {
                    eq.prototype.__init.call(this), eq.prototype.__init2.call(this), eq.prototype.__init3.call(this), eq.prototype.__init4.call(this), eq.prototype.__init5.call(this), eq.prototype.__init6.call(this), eq.prototype.__init7.call(this), eq.prototype.__init8.call(this), eq.prototype.__init9.call(this), eq.prototype.__init10.call(this), eq.prototype.__init11.call(this), eq.prototype.__init12.call(this), eq.prototype.__init13.call(this), eq.prototype.__init14.call(this), eq.prototype.__init15.call(this), eq.prototype.__init16.call(this), eq.prototype.__init17.call(this), eq.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
                        let r, i, a;
                        let s = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                        function o() {
                            return c(), r = t()
                        }

                        function c() {
                            void 0 !== i && clearTimeout(i), void 0 !== a && clearTimeout(a), i = a = void 0
                        }

                        function l() {
                            return i && clearTimeout(i), i = setTimeout(o, e), s && void 0 === a && (a = setTimeout(o, s)), r
                        }
                        return l.cancel = c, l.flush = function() {
                            return void 0 !== i || void 0 !== a ? o() : r
                        }, l
                    }(() => this._flush(), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = function(t, e, n) {
                        let r = new Map,
                            i = t => {
                                let e = t - 5;
                                r.forEach((t, n) => {
                                    n < e && r.delete(n)
                                })
                            },
                            a = () => [...r.values()].reduce((t, e) => t + e, 0),
                            s = !1;
                        return function() {
                            for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            let c = Math.floor(Date.now() / 1e3);
                            if (i(c), a() >= 300) {
                                let t = s;
                                return s = !0, t ? "__SKIPPED" : ej
                            }
                            s = !1;
                            let l = r.get(c) || 0;
                            return r.set(c, l + 1), t(...n)
                        }
                    }((t, e) => el(this, t, e), 300, 5);
                    let {
                        slowClickTimeout: n,
                        slowClickIgnoreSelectors: r
                    } = this.getOptions(), i = n ? {
                        threshold: Math.min(3e3, n),
                        timeout: n,
                        scrollTimeout: 300,
                        ignoreSelector: r ? r.join(",") : ""
                    } : void 0;
                    i && (this.clickDetector = new t$(this, i))
                }
            }

            function eZ(t, e, n, r) {
                let i = "string" == typeof r ? r.split(",") : [],
                    a = [...t, ...i, ...e];
                return void 0 !== n && ("string" == typeof n && a.push(".".concat(n)), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), a.join(",")
            }

            function eV() {
                return "undefined" != typeof window && (!(0, k.isNodeEnv)() || function() {
                    return void 0 !== R && "renderer" === R.type
                }())
            }
            let eK = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                eJ = ["content-length", "content-type", "accept"],
                eX = !1;
            class e$ {
                static __initStatic() {
                    this.id = "Replay"
                }
                __init() {
                    this.name = e$.id
                }
                get _isInitialized() {
                    return eX
                }
                set _isInitialized(t) {
                    eX = t
                }
                setupOnce() {
                    eV() && (this._setup(), setTimeout(() => this._initialize()))
                }
                start() {
                    this._replay && this._replay.start()
                }
                startBuffering() {
                    this._replay && this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop() : Promise.resolve()
                }
                flush(t) {
                    return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
                }
                getReplayId() {
                    if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                }
                _initialize() {
                    this._replay && this._replay.initializeSampling()
                }
                _setup() {
                    let t = function(t) {
                        let e = (0, T.getCurrentHub)().getClient(),
                            n = e && e.getOptions(),
                            r = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, k.dropUndefinedKeys)(t)
                            };
                        return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
                    }(this._initialOptions);
                    this._replay = new eq({
                        options: t,
                        recordingOptions: this._recordingOptions
                    })
                }
                constructor({
                    flushMinDelay: t = 5e3,
                    flushMaxDelay: e = 5500,
                    minReplayDuration: n = 4999,
                    stickySession: r = !0,
                    useCompression: i = !0,
                    _experiments: a = {},
                    sessionSampleRate: s,
                    errorSampleRate: o,
                    maskAllText: c = !0,
                    maskAllInputs: l = !0,
                    blockAllMedia: u = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: h = 1e4,
                    slowClickTimeout: f = 7e3,
                    slowClickIgnoreSelectors: p = [],
                    networkDetailAllowUrls: _ = [],
                    networkDetailDenyUrls: g = [],
                    networkCaptureBodies: m = !0,
                    networkRequestHeaders: y = [],
                    networkResponseHeaders: v = [],
                    mask: E = [],
                    unmask: b = [],
                    block: S = [],
                    unblock: w = [],
                    ignore: T = [],
                    maskFn: k,
                    beforeAddRecordingEvent: R,
                    blockClass: x,
                    blockSelector: D,
                    maskInputOptions: N,
                    maskTextClass: I,
                    maskTextSelector: C,
                    ignoreClass: O
                } = {}) {
                    if (e$.prototype.__init.call(this), this._recordingOptions = {
                            maskAllInputs: l,
                            maskAllText: c,
                            maskInputOptions: {
                                ...N || {},
                                password: !0
                            },
                            maskTextFn: k,
                            maskInputFn: k,
                            ... function(t) {
                                let {
                                    mask: e,
                                    unmask: n,
                                    block: r,
                                    unblock: i,
                                    ignore: a,
                                    blockClass: s,
                                    blockSelector: o,
                                    maskTextClass: c,
                                    maskTextSelector: l,
                                    ignoreClass: u
                                } = t, d = eZ(e, [".sentry-mask", "[data-sentry-mask]"], c, l), h = eZ(n, [".sentry-unmask", "[data-sentry-unmask]"]), f = {
                                    maskTextSelector: d,
                                    unmaskTextSelector: h,
                                    maskInputSelector: d,
                                    unmaskInputSelector: h,
                                    blockSelector: eZ(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], s, o),
                                    unblockSelector: eZ(i, [".sentry-unblock", "[data-sentry-unblock]"]),
                                    ignoreSelector: eZ(a, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], u)
                                };
                                return s instanceof RegExp && (f.blockClass = s), c instanceof RegExp && (f.maskTextClass = c), f
                            }({
                                mask: E,
                                unmask: b,
                                block: S,
                                unblock: w,
                                ignore: T,
                                blockClass: x,
                                blockSelector: D,
                                maskTextClass: I,
                                maskTextSelector: C,
                                ignoreClass: O
                            }),
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0
                        }, this._initialOptions = {
                            flushMinDelay: t,
                            flushMaxDelay: e,
                            minReplayDuration: Math.min(n, 15e3),
                            stickySession: r,
                            sessionSampleRate: s,
                            errorSampleRate: o,
                            useCompression: i,
                            blockAllMedia: u,
                            maskAllInputs: l,
                            maskAllText: c,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: h,
                            slowClickTimeout: f,
                            slowClickIgnoreSelectors: p,
                            networkDetailAllowUrls: _,
                            networkDetailDenyUrls: g,
                            networkCaptureBodies: m,
                            networkRequestHeaders: eQ(y),
                            networkResponseHeaders: eQ(v),
                            beforeAddRecordingEvent: R,
                            _experiments: a
                        }, "number" == typeof s && (console.warn("[Replay] You are passing `sessionSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysSessionSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ".concat(s, " })")), this._initialOptions.sessionSampleRate = s), "number" == typeof o && (console.warn("[Replay] You are passing `errorSampleRate` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure `replaysOnErrorSampleRate` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ".concat(o, " })")), this._initialOptions.errorSampleRate = o), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? "".concat(this._recordingOptions.blockSelector, ",").concat(eK) : eK), this._isInitialized && eV()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
            }
            e$.__initStatic();

            function eQ(t) {
                return [...eJ, ...t.map(t => t.toLowerCase())]
            }
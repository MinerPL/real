(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63454"], {
        160679: function(t, e, r) {
            e.parse = function(t, e) {
                if ("string" != typeof t) throw TypeError("argument str must be a string");
                var r = {},
                    u = t.split(a),
                    i = (e || {}).decode || n;
                return u.forEach(function(t) {
                    var e = t.indexOf("=");
                    if (!(e < 0)) {
                        var n = t.substr(0, e).trim(),
                            u = t.substr(++e, t.length).trim();
                        '"' == u[0] && (u = u.slice(1, -1)), void 0 == r[n] && (r[n] = function(t, e) {
                            try {
                                return e(t)
                            } catch (e) {
                                return t
                            }
                        }(u, i))
                    }
                }), r
            }, e.serialize = function(t, e, r) {
                var n = r || {},
                    a = n.encode || u;
                if (!i.test(t)) throw TypeError("argument name is invalid");
                var s = a(e);
                if (s && !i.test(s)) throw TypeError("argument val is invalid");
                var o = [t + "=" + s];
                if (null != n.maxAge) {
                    var l = n.maxAge - 0;
                    if (isNaN(l)) throw Error("maxAge should be a Number");
                    o.push("Max-Age=" + Math.floor(l))
                }
                if (n.domain) {
                    if (!i.test(n.domain)) throw TypeError("option domain is invalid");
                    o.push("Domain=" + n.domain)
                }
                if (n.path) {
                    if (!i.test(n.path)) throw TypeError("option path is invalid");
                    o.push("Path=" + n.path)
                }
                return n.expires && o.push("Expires=" + n.expires.toUTCString()), n.httpOnly && o.push("HttpOnly"), n.secure && o.push("Secure"), n.firstPartyOnly && o.push("First-Party-Only"), o.join("; ")
            };
            var n = decodeURIComponent,
                u = encodeURIComponent,
                a = /; */,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        48174: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (t.length !== e.length) return !1;
                for (let r = 0; r < e.length && r < t.length; r++)
                    if (!Object.is(t[r], e[r])) return !1;
                return !0
            }
            r.r(e), r.d(e, {
                default: function() {
                    return n
                }
            })
        },
        775560: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var n = r("14716"),
                u = r("745510"),
                a = r("315378")
        },
        14716: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");

            function u() {
                let [, t] = (0, n.useState)({});
                return (0, n.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return a
                }
            });
            var n = r("884691");
            let u = {};

            function a(t) {
                let e = (0, n.useRef)(u);
                return e.current === u && (e.current = t()), e.current
            }
        },
        745510: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return i
                }
            });
            var n = r("884691"),
                u = r("48174");
            let a = [];

            function i(t, e) {
                let r = (0, n.useRef)(),
                    i = (0, n.useRef)(a);
                return i.current === a ? (r.current = t(), i.current = e) : !(0, u.default)(e, i.current) && (r.current = t(), i.current = e), r.current
            }
        },
        285899: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                GUILD_LIMITED_ACCESS_HC_LINK: function() {
                    return n
                }
            });
            let n = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ"
        },
        135722: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return c
                }
            });
            var n = r("37983");
            r("884691");
            var u = r("77078"),
                a = r("305961"),
                i = r("476765"),
                s = r("285899"),
                o = r("782340"),
                l = r("334931"),
                c = t => {
                    let {
                        onClose: e,
                        guildId: r
                    } = t, c = (0, i.useUID)(), d = o.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
                        helpdeskArticle: s.GUILD_LIMITED_ACCESS_HC_LINK
                    }), f = a.default.getGuild(r);
                    return null != f && (d = o.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
                        guildName: f.name,
                        helpdeskArticle: s.GUILD_LIMITED_ACCESS_HC_LINK
                    })), (0, n.jsxs)(u.ModalRoot, {
                        ...t,
                        "aria-labelledby": c,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            separator: !1,
                            className: l.modalHeader,
                            children: [(0, n.jsx)(u.Heading, {
                                id: c,
                                variant: "heading-xl/extrabold",
                                children: o.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, n.jsx)(u.ModalCloseButton, {
                                className: l.closeButton,
                                onClick: e
                            })]
                        }), (0, n.jsx)(u.ModalContent, {
                            className: l.modalContent,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: l.contentText,
                                children: d
                            })
                        }), (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsx)(u.Button, {
                                className: l.button,
                                size: u.Button.Sizes.MIN,
                                onClick: e,
                                children: o.default.Messages.OKAY
                            })
                        })]
                    })
                }
        }
    }
]);
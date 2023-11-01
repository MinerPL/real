(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85434"], {
        136354: function(t, e, n) {
            var r = {
                "./bg": "652617",
                "./bg.json": "652617",
                "./cs": "136399",
                "./cs.json": "136399",
                "./da": "166226",
                "./da.json": "166226",
                "./de": "107944",
                "./de.json": "107944",
                "./el": "978838",
                "./el.json": "978838",
                "./en-US": "876779",
                "./en-US.js": "876779",
                "./es-ES": "580895",
                "./es-ES.json": "580895",
                "./fi": "72952",
                "./fi.json": "72952",
                "./fr": "699940",
                "./fr.json": "699940",
                "./hi": "922509",
                "./hi.json": "922509",
                "./hr": "293200",
                "./hr.json": "293200",
                "./hu": "254957",
                "./hu.json": "254957",
                "./id": "886044",
                "./id.json": "886044",
                "./it": "903422",
                "./it.json": "903422",
                "./ja": "44867",
                "./ja.json": "44867",
                "./ko": "865240",
                "./ko.json": "865240",
                "./lt": "828806",
                "./lt.json": "828806",
                "./nl": "379380",
                "./nl.json": "379380",
                "./no": "262207",
                "./no.json": "262207",
                "./pl": "697596",
                "./pl.json": "697596",
                "./pt-BR": "132974",
                "./pt-BR.json": "132974",
                "./ro": "499395",
                "./ro.json": "499395",
                "./ru": "135786",
                "./ru.json": "135786",
                "./sv-SE": "119037",
                "./sv-SE.json": "119037",
                "./th": "398352",
                "./th.json": "398352",
                "./tr": "461697",
                "./tr.json": "461697",
                "./uk": "842498",
                "./uk.json": "842498",
                "./vi": "26384",
                "./vi.json": "26384",
                "./zh-CN": "460288",
                "./zh-CN.json": "460288",
                "./zh-TW": "391977",
                "./zh-TW.json": "391977"
            };

            function o(t) {
                return n(u(t))
            }

            function u(t) {
                if (!n.o(r, t)) {
                    var e = Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return r[t]
            }
            o.id = '"136354"', o.keys = function() {
                return Object.keys(r)
            }, o.resolve = u, t.exports = o
        },
        160679: function(t, e, n) {
            e.parse = function(t, e) {
                if ("string" != typeof t) throw TypeError("argument str must be a string");
                var n = {},
                    o = t.split(u),
                    s = (e || {}).decode || r;
                return o.forEach(function(t) {
                    var e = t.indexOf("=");
                    if (!(e < 0)) {
                        var r = t.substr(0, e).trim(),
                            o = t.substr(++e, t.length).trim();
                        '"' == o[0] && (o = o.slice(1, -1)), void 0 == n[r] && (n[r] = function(t, e) {
                            try {
                                return e(t)
                            } catch (e) {
                                return t
                            }
                        }(o, s))
                    }
                }), n
            }, e.serialize = function(t, e, n) {
                var r = n || {},
                    u = r.encode || o;
                if (!s.test(t)) throw TypeError("argument name is invalid");
                var a = u(e);
                if (a && !s.test(a)) throw TypeError("argument val is invalid");
                var i = [t + "=" + a];
                if (null != r.maxAge) {
                    var l = r.maxAge - 0;
                    if (isNaN(l)) throw Error("maxAge should be a Number");
                    i.push("Max-Age=" + Math.floor(l))
                }
                if (r.domain) {
                    if (!s.test(r.domain)) throw TypeError("option domain is invalid");
                    i.push("Domain=" + r.domain)
                }
                if (r.path) {
                    if (!s.test(r.path)) throw TypeError("option path is invalid");
                    i.push("Path=" + r.path)
                }
                return r.expires && i.push("Expires=" + r.expires.toUTCString()), r.httpOnly && i.push("HttpOnly"), r.secure && i.push("Secure"), r.firstPartyOnly && i.push("First-Party-Only"), i.join("; ")
            };
            var r = decodeURIComponent,
                o = encodeURIComponent,
                u = /; */,
                s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var r = n("14716"),
                o = n("745510"),
                u = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");

            function o() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");
            let o = {};

            function u(t) {
                let e = (0, r.useRef)(o);
                return e.current === o && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                o = n("48174");
            let u = [];

            function s(t, e) {
                let n = (0, r.useRef)(),
                    s = (0, r.useRef)(u);
                return s.current === u ? (n.current = t(), s.current = e) : !(0, o.default)(e, s.current) && (n.current = t(), s.current = e), n.current
            }
        },
        318696: function(t, e, n) {
            "use strict";
            let r, o;
            n.r(e), n.d(e, {
                setLocale: function() {
                    return l
                },
                updateLocaleLoadingStatus: function() {
                    return c
                }
            });
            var u = n("913144"),
                s = n("787910"),
                a = n("782340");
            r = n("792788").default;
            let i = !1;

            function l(t) {
                o = a.default.loadPromise, r && r.setLocale(t), a.default.setLocale(t), c(t)
            }

            function c(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (i && a.default.loadPromise === o) return;
                i = !0, e ? (0, s.setLocaleHack)(t) : u.default.dispatch({
                    type: "I18N_LOAD_START",
                    locale: t
                });
                let n = [a.default.loadPromise];
                r && n.push(r.loadPromise);
                let l = Promise.all(n);
                setImmediate(() => {
                    l.then(() => {
                        u.default.dispatch({
                            type: "I18N_LOAD_SUCCESS",
                            locale: t
                        })
                    }).catch(e => {
                        u.default.dispatch({
                            type: "I18N_LOAD_ERROR",
                            error: e,
                            locale: t
                        })
                    })
                })
            }
        },
        49671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            let r = window.DiscordNative;
            var o = r
        },
        285899: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                GUILD_LIMITED_ACCESS_HC_LINK: function() {
                    return r
                }
            });
            let r = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ"
        },
        135722: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("77078"),
                u = n("305961"),
                s = n("476765"),
                a = n("285899"),
                i = n("782340"),
                l = n("334931"),
                c = t => {
                    let {
                        onClose: e,
                        guildId: n
                    } = t, c = (0, s.useUID)(), d = i.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
                        helpdeskArticle: a.GUILD_LIMITED_ACCESS_HC_LINK
                    }), f = u.default.getGuild(n);
                    return null != f && (d = i.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
                        guildName: f.name,
                        helpdeskArticle: a.GUILD_LIMITED_ACCESS_HC_LINK
                    })), (0, r.jsxs)(o.ModalRoot, {
                        ...t,
                        "aria-labelledby": c,
                        children: [(0, r.jsxs)(o.ModalHeader, {
                            separator: !1,
                            className: l.modalHeader,
                            children: [(0, r.jsx)(o.Heading, {
                                id: c,
                                variant: "heading-xl/extrabold",
                                children: i.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, r.jsx)(o.ModalCloseButton, {
                                className: l.closeButton,
                                onClick: e
                            })]
                        }), (0, r.jsx)(o.ModalContent, {
                            className: l.modalContent,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: l.contentText,
                                children: d
                            })
                        }), (0, r.jsx)(o.ModalFooter, {
                            children: (0, r.jsx)(o.Button, {
                                className: l.button,
                                size: o.Button.Sizes.MIN,
                                onClick: e,
                                children: i.default.Messages.OKAY
                            })
                        })]
                    })
                }
        },
        915639: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("446674"),
                o = n("913144"),
                u = n("318696"),
                s = n("374363");
            let a = n("782340").default.getDefaultLocale();

            function i() {
                var t, e;
                let n = null === (e = s.default.settings.localization) || void 0 === e ? void 0 : null === (t = e.locale) || void 0 === t ? void 0 : t.value;
                return null != n && "" !== n && n !== a && (a = n, u.setLocale(a), !0)
            }
            class l extends r.default.Store {
                initialize() {
                    this.waitFor(s.default), i(), u.setLocale(a)
                }
                get locale() {
                    return a
                }
            }
            l.displayName = "LocaleStore";
            var c = new l(o.default, {
                OVERLAY_INITIALIZE: i,
                CONNECTION_OPEN: i,
                USER_SETTINGS_PROTO_UPDATE: i,
                USER_SETTINGS_LOCALE_OVERRIDE: function(t) {
                    a = t.locale, u.setLocale(a)
                }
            })
        },
        787910: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                setLocaleHack: function() {
                    return i
                },
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                o = n("913144");
            let u = !1,
                s = null,
                a = null;

            function i(t) {
                l({
                    locale: t
                })
            }

            function l(t) {
                let {
                    locale: e
                } = t;
                u = !0, s = e
            }
            class c extends r.default.Store {
                isLoading() {
                    return u
                }
                getError() {
                    return a
                }
            }
            c.displayName = "I18nLoaderStore";
            var d = new c(o.default, {
                I18N_LOAD_START: l,
                I18N_LOAD_SUCCESS: function(t) {
                    let {
                        locale: e
                    } = t;
                    e === s && (u = !1, a = null, s = null)
                },
                I18N_LOAD_ERROR: function(t) {
                    let {
                        error: e,
                        locale: n
                    } = t;
                    n === s && (u = !1, a = null != e ? e : null, s = null)
                }
            })
        },
        449008: function(t, e, n) {
            "use strict";

            function r(t) {
                throw Error("Unhandled value: ".concat(t))
            }

            function o(t) {
                return null != t
            }

            function u(t, e) {
                return t.size === e.size && (0 === t.size && 0 === e.size || Array.from(t).every(t => e.has(t)))
            }
            n.r(e), n.d(e, {
                assertNever: function() {
                    return r
                },
                isNotNullish: function() {
                    return o
                },
                areSetsEqual: function() {
                    return u
                }
            })
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91473"], {
        737270: function(e, t, n) {
            var o = {
                "./bg": "686964",
                "./bg.json": "686964",
                "./cs": "796212",
                "./cs.json": "796212",
                "./da": "629649",
                "./da.json": "629649",
                "./de": "960019",
                "./de.json": "960019",
                "./el": "482320",
                "./el.json": "482320",
                "./en-US": "386974",
                "./en-US.js": "386974",
                "./es-ES": "375449",
                "./es-ES.json": "375449",
                "./fi": "837190",
                "./fi.json": "837190",
                "./fr": "368900",
                "./fr.json": "368900",
                "./hi": "48464",
                "./hi.json": "48464",
                "./hr": "475261",
                "./hr.json": "475261",
                "./hu": "661803",
                "./hu.json": "661803",
                "./id": "494673",
                "./id.json": "494673",
                "./it": "124001",
                "./it.json": "124001",
                "./ja": "234362",
                "./ja.json": "234362",
                "./ko": "662818",
                "./ko.json": "662818",
                "./lt": "436948",
                "./lt.json": "436948",
                "./nl": "221381",
                "./nl.json": "221381",
                "./no": "844245",
                "./no.json": "844245",
                "./pl": "630470",
                "./pl.json": "630470",
                "./pt-BR": "946158",
                "./pt-BR.json": "946158",
                "./ro": "195109",
                "./ro.json": "195109",
                "./ru": "236654",
                "./ru.json": "236654",
                "./sv-SE": "653411",
                "./sv-SE.json": "653411",
                "./th": "205638",
                "./th.json": "205638",
                "./tr": "312210",
                "./tr.json": "312210",
                "./uk": "313319",
                "./uk.json": "313319",
                "./vi": "267774",
                "./vi.json": "267774",
                "./zh-CN": "225824",
                "./zh-CN.json": "225824",
                "./zh-TW": "699406",
                "./zh-TW.json": "699406"
            };

            function l(e) {
                return n(r(e))
            }

            function r(e) {
                if (!n.o(o, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return o[e]
            }
            l.id = '"737270"', l.keys = function() {
                return Object.keys(o)
            }, l.resolve = r, e.exports = l
        },
        318696: function(e, t, n) {
            "use strict";
            let o, l;
            n.r(t), n.d(t, {
                setLocale: function() {
                    return i
                },
                updateLocaleLoadingStatus: function() {
                    return c
                }
            });
            var r = n("913144"),
                s = n("787910"),
                a = n("782340");
            o = n("753595").default;
            let u = !1;

            function i(e) {
                l = a.default.loadPromise, o && o.setLocale(e), a.default.setLocale(e), c(e)
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (u && a.default.loadPromise === l) return;
                u = !0, t ? (0, s.setLocaleHack)(e) : r.default.dispatch({
                    type: "I18N_LOAD_START",
                    locale: e
                });
                let n = [a.default.loadPromise];
                o && n.push(o.loadPromise);
                let i = Promise.all(n);
                setImmediate(() => {
                    i.then(() => {
                        r.default.dispatch({
                            type: "I18N_LOAD_SUCCESS",
                            locale: e
                        })
                    }).catch(t => {
                        r.default.dispatch({
                            type: "I18N_LOAD_ERROR",
                            error: t,
                            locale: e
                        })
                    })
                })
            }
        },
        49671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            let o = window.DiscordNative;
            var l = o
        },
        586269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QUARANTINE_APPEAL_LINK: function() {
                    return o
                }
            });
            let o = "https://dis.gd/appeal"
        },
        826269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var o = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("476765"),
                s = n("586269"),
                a = n("782340"),
                u = n("480399"),
                i = e => {
                    let {
                        onClose: t
                    } = e, n = (0, r.useUID)();
                    return (0, o.jsxs)(l.ModalRoot, {
                        ...e,
                        "aria-labelledby": n,
                        children: [(0, o.jsxs)(l.ModalHeader, {
                            separator: !1,
                            className: u.modalHeader,
                            children: [(0, o.jsx)(l.Heading, {
                                id: n,
                                variant: "heading-xl/extrabold",
                                children: a.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, o.jsx)(l.ModalCloseButton, {
                                className: u.closeButton,
                                onClick: t
                            })]
                        }), (0, o.jsxs)(l.ModalContent, {
                            className: u.modalContent,
                            children: [(0, o.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: u.contentText,
                                children: a.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION
                            }), (0, o.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: u.contentText,
                                children: a.default.Messages.LIMITED_ACCESS_INFO_MODAL_APPEAL.format({
                                    appealLink: s.QUARANTINE_APPEAL_LINK
                                })
                            })]
                        }), (0, o.jsx)(l.ModalFooter, {
                            children: (0, o.jsx)(l.Button, {
                                className: u.button,
                                size: l.Button.Sizes.MIN,
                                onClick: t,
                                children: a.default.Messages.OKAY
                            })
                        })]
                    })
                }
        },
        915639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("498225"),
                l = n("913144"),
                r = n("318696"),
                s = n("374363");
            let a = n("782340").default.getDefaultLocale();

            function u() {
                var e, t;
                let n = null === (t = s.default.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
                return null != n && "" !== n && n !== a && (a = n, r.setLocale(a), !0)
            }
            class i extends o.default.Store {
                initialize() {
                    this.waitFor(s.default), u(), r.setLocale(a)
                }
                get locale() {
                    return a
                }
            }
            i.displayName = "LocaleStore";
            var c = new i(l.default, {
                OVERLAY_INITIALIZE: u,
                CONNECTION_OPEN: u,
                USER_SETTINGS_PROTO_UPDATE: u,
                USER_SETTINGS_LOCALE_OVERRIDE: function(e) {
                    a = e.locale, r.setLocale(a)
                }
            })
        },
        787910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setLocaleHack: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var o = n("498225"),
                l = n("913144");
            let r = !1,
                s = null,
                a = null;

            function u(e) {
                i({
                    locale: e
                })
            }

            function i(e) {
                let {
                    locale: t
                } = e;
                r = !0, s = t
            }
            class c extends o.default.Store {
                isLoading() {
                    return r
                }
                getError() {
                    return a
                }
            }
            c.displayName = "I18nLoaderStore";
            var d = new c(l.default, {
                I18N_LOAD_START: i,
                I18N_LOAD_SUCCESS: function(e) {
                    let {
                        locale: t
                    } = e;
                    t === s && (r = !1, a = null, s = null)
                },
                I18N_LOAD_ERROR: function(e) {
                    let {
                        error: t,
                        locale: n
                    } = e;
                    n === s && (r = !1, a = null != t ? t : null, s = null)
                }
            })
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return u
                }
            });
            var o = n("552473"),
                l = n.n(o),
                r = n("365444");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                a = () => (0, r.useLazyValue)(() => s()),
                u = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        449008: function(e, t, n) {
            "use strict";

            function o(e) {
                throw Error("Unhandled value: ".concat(e))
            }

            function l(e) {
                return null != e
            }

            function r(e, t) {
                return e.size === t.size && (0 === e.size && 0 === t.size || Array.from(e).every(e => t.has(e)))
            }
            n.r(t), n.d(t, {
                assertNever: function() {
                    return o
                },
                isNotNullish: function() {
                    return l
                },
                areSetsEqual: function() {
                    return r
                }
            })
        }
    }
]);
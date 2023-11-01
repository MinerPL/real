(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61387"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (l = t[2].split("-")).shift(), r = l);
                var a = [];
                t[5] && (a = t[5].split("-")).shift();
                var i = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, s, u = []; l.length;) {
                        var o = l.shift();
                        1 === o.length ? s ? (i.push({
                            singleton: s,
                            extension: u
                        }), s = o, u = []) : s = o : u.push(o)
                    }
                    i.push({
                        singleton: s,
                        extension: u
                    })
                }
                var d = [];
                t[7] && ((d = t[7].split("-")).shift(), d.shift());
                var c = [];
                return t[8] && (c = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: a,
                        extension: i,
                        privateuse: d
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var a = 0, i = 0; a < r; a++) {
                    for (var l = e.charCodeAt(a); i < n;)
                        if (t.charCodeAt(i++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        310013: function(e, t, n) {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var l = Object.getOwnPropertyNames(t);
                    i && (l = l.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < l.length; ++s)
                        if (!r[l[s]] && !a[l[s]] && (!n || !n[l[s]])) try {
                            e[l[s]] = t[l[s]]
                        } catch (e) {}
                }
                return e
            }
        },
        2396: function(e, t, n) {
            "use strict";
            e.exports = n.p + "27d910e5335bc8ab70d1.svg"
        },
        111494: function(e, t, n) {
            "use strict";
            e.exports = n.p + "fb2bc9ec875070eb5384.svg"
        },
        577468: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca67ff158e9860e50cac.svg"
        },
        330574: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5a0a3c94e4973427134e.svg"
        },
        186237: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c269c9b36ab7b621c16b.svg"
        },
        868470: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f57bdf2be6d676da652b.svg"
        },
        441294: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4741849dca44f19ddfa3.svg"
        },
        941754: function(e, t, n) {
            "use strict";
            e.exports = n.p + "461029a773ee21ad9bb9.svg"
        },
        245317: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9f9d36fd84ca5ce1c895.svg"
        },
        338262: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d3d02d383054f64091d5.svg"
        },
        997322: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dcc1b96dda5a27b9a2f0.svg"
        },
        586504: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dd293574a2092f9d4555.svg"
        },
        667100: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08d19f5d231757b14468.svg"
        },
        515533: function(e, t, n) {
            "use strict";
            e.exports = n.p + "66d99a14180b6e5da1a3.svg"
        },
        356402: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a0e2e13b1edb66b440fe.svg"
        },
        165123: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b309e3bda0a954ae67e.svg"
        },
        955003: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6a8e98a210bf8b02da7.svg"
        },
        481205: function(e, t, n) {
            "use strict";
            e.exports = n.p + "74cc3a7d069e7bde4642.svg"
        },
        463057: function(e, t, n) {
            "use strict";
            e.exports = n.p + "022b6f08ce8cd06e7d2e.svg"
        },
        286549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "731d9f380624da37c63d.svg"
        },
        936532: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b8ead81360c33e0de3f5.svg"
        },
        697643: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bb2df9b4fe177b88f5cb.svg"
        },
        878188: function(e, t, n) {
            "use strict";
            e.exports = n.p + "38ac3f3a945e2cca9509.svg"
        },
        59619: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abc0b50e7b32970d6ffd.svg"
        },
        280968: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21776a8b4fe8087b0bdc.svg"
        },
        144824: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        686570: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        669200: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a426a3ae492eb54ac0f0.svg"
        },
        479125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2d8dac1dbbc8278bfa86.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return a
                },
                popLayer: function() {
                    return i
                },
                popAllLayers: function() {
                    return l
                }
            });
            var r = n("913144");

            function a(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("135898"),
                l = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i.warnBlock,
                        children: [(0, r.jsx)("div", {
                            className: i.warnIcon
                        }), (0, r.jsx)(a.Text, {
                            className: i.warnText,
                            variant: "text-sm/normal",
                            children: t
                        })]
                    })
                }
        },
        740055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                s = n("669491"),
                u = n("77078"),
                o = n("339783"),
                d = n("865146"),
                c = n("712218"),
                _ = n("423487"),
                E = n("701909"),
                f = n("49111"),
                I = n("843455"),
                S = n("782340"),
                T = n("429130");
            let p = "***@***.***",
                C = new d.CreditCardSourceRecord({
                    id: "new_payment_source_id",
                    brand: c.default.Types.UNKNOWN,
                    type: f.PaymentSourceTypes.CARD
                });

            function A(e) {
                var t, n;
                let i, {
                        selectedPaymentSourceId: A,
                        paymentSources: N,
                        prependOption: O,
                        hidePersonalInformation: R,
                        onChange: L,
                        onPaymentSourceAdd: g,
                        isTrial: h = !1,
                        disabled: D = !1,
                        className: m,
                        optionClassName: U,
                        dropdownLoading: P
                    } = e,
                    y = 0 === N.length,
                    v = [...null != O ? [O] : [], ...N, C].map((e, t) => {
                        if (e instanceof d.default) {
                            let {
                                brand: t,
                                label: n
                            } = function(e, t) {
                                if (e instanceof d.CreditCardSourceRecord) return e.id === C.id ? {
                                    brand: null,
                                    label: S.default.Messages.PAYMENT_SOURCES_ADD
                                } : {
                                    brand: t ? c.default.Types.UNKNOWN : e.brand,
                                    label: S.default.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
                                        last4: t ? "****" : e.last4
                                    })
                                };
                                if (e instanceof d.PaypalSourceRecord) return {
                                    brand: c.default.Types.PAYPAL,
                                    label: t ? p : e.email
                                };
                                if (e instanceof d.SofortSourceRecord) return {
                                    brand: c.default.Types.SOFORT,
                                    label: t ? p : e.email
                                };
                                else if (e instanceof d.GiropaySourceRecord) return {
                                    brand: c.default.Types.GIROPAY,
                                    label: S.default.Messages.PAYMENT_SOURCE_GIROPAY
                                };
                                else if (e instanceof d.Przelewy24SourceRecord) return {
                                    brand: c.default.Types.PRZELEWY24,
                                    label: t ? p : e.email
                                };
                                else if (e instanceof d.PaysafeSourceRecord) return {
                                    brand: c.default.Types.PAYSAFECARD,
                                    label: S.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
                                };
                                else if (e instanceof d.GcashSourceRecord) return {
                                    brand: c.default.Types.GCASH,
                                    label: S.default.Messages.PAYMENT_SOURCE_GCASH
                                };
                                else if (e instanceof d.GrabPayMySourceRecord) return {
                                    brand: c.default.Types.GRABPAY,
                                    label: S.default.Messages.PAYMENT_SOURCE_GRABPAY
                                };
                                else if (e instanceof d.MomoWalletSourceRecord) return {
                                    brand: c.default.Types.MOMO_WALLET,
                                    label: S.default.Messages.PAYMENT_SOURCE_MOMO_WALLET
                                };
                                else if (e instanceof d.VenmoSourceRecord) return {
                                    brand: c.default.Types.VENMO,
                                    label: t ? "***" : "@" + e.username
                                };
                                else if (e instanceof d.KaKaoPaySourceRecord) return {
                                    brand: c.default.Types.KAKAOPAY,
                                    label: S.default.Messages.PAYMENT_SOURCE_KAKAOPAY
                                };
                                else if (e instanceof d.GoPayWalletSourceRecord) return {
                                    brand: c.default.Types.GOPAY_WALLET,
                                    label: S.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                                };
                                else if (e instanceof d.BancontactSourceRecord) return {
                                    brand: c.default.Types.BANCONTACT,
                                    label: S.default.Messages.PAYMENT_SOURCE_BANCONTACT
                                };
                                else if (e instanceof d.EPSSourceRecord) return {
                                    brand: c.default.Types.EPS,
                                    label: S.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
                                        bank: (0, o.getEPSBankDisplayNameFromBankName)(e.bank)
                                    })
                                };
                                else if (e instanceof d.IdealSourceRecord) return {
                                    brand: c.default.Types.IDEAL,
                                    label: S.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
                                        bank: (0, o.getIdealBankDisplayNameFromBankName)(e.bank)
                                    })
                                };
                                else if (e instanceof d.CashAppSourceRecord) return {
                                    brand: c.default.Types.CASH_APP,
                                    label: t ? "***" : e.username
                                };
                                throw Error("Invalid Payment Source")
                            }(e, R);
                            return {
                                value: e.id,
                                label: (0, r.jsxs)("div", {
                                    className: T.paymentSourceSelectedOption,
                                    children: [null != t ? (0, r.jsx)(c.default, {
                                        type: c.default.getType(t)
                                    }) : null, (0, r.jsx)("div", {
                                        className: l(T.paymentSourceLabel, {
                                            [T.error]: e.invalid
                                        }),
                                        children: n
                                    })]
                                })
                            }
                        }
                        return {
                            key: t,
                            value: e.value,
                            label: (0, r.jsx)("div", {
                                className: T.paymentSourceLabel,
                                children: e.label
                            })
                        }
                    }),
                    M = a.useMemo(() => N.find(e => e.id === A), [N, A]);
                let b = (t = h, n = M, i = null, t && null != n && f.IRREDEEMABLE_PAYMENT_SOURCES.has(n.type) ? i = S.default.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : t && null != n && n.hasFlag(I.PaymentSourceFlags.NEW) && (i = S.default.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
                    helpDeskArticle: E.default.getArticleURL(f.HelpdeskArticles.PAYMENT_AUTHORIZATION_CHARGE)
                })), i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [y ? (0, r.jsx)(u.Button, {
                        color: u.ButtonColors.BRAND,
                        fullWidth: !0,
                        onClick: g,
                        children: S.default.Messages.PAYMENT_SOURCES_ADD
                    }) : (0, r.jsx)(u.SingleSelect, {
                        options: v,
                        value: A,
                        onChange: e => {
                            if (e === C.id) null != g && g();
                            else {
                                let t = N.find(t => t.id === e);
                                null != L && L(t)
                            }
                        },
                        isDisabled: D,
                        className: l({
                            [T.paymentSourceHasWarning]: null != b
                        }, m),
                        optionClassName: U,
                        placeholder: S.default.Messages.PAYMENT_SOURCE_TYPE_SELECT,
                        renderOptionValue: e => {
                            let [t] = e;
                            return P ? (0, r.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.SPINNING_CIRCLE
                            }) : t.label
                        }
                    }), null != b ? (0, r.jsxs)("div", {
                        className: T.paymentSourceWarning,
                        children: [(0, r.jsx)(_.default, {
                            className: T.paymentSourceWarningIcon,
                            color: s.default.unsafe_rawColors.YELLOW_300.css
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: b
                        })]
                    }) : null]
                })
            }
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return d
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("310013"),
                l = n.n(i),
                s = n("407063");
            let u = /url\(['"](.*)['"]\)/,
                o = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(u);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends a.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: r
                        } = this.state, {
                            style: a
                        } = this.props, i = null != a ? o(a.backgroundImage) : null;
                        null == i && i !== n ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : this.cachedURLs.indexOf(i) >= 0 ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : null != i && i !== n && !0 === r && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(i))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, s.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...a
                        } = this.props, {
                            loaded: i,
                            cached: l
                        } = this.state;
                        if (!i && null != t) {
                            var s;
                            t = {
                                ...t,
                                backgroundImage: null == (s = l) || "" === s || "none" === s ? "none" : "url(".concat(s, ")")
                            }
                        }
                        return (0, r.jsx)(e, {
                            style: t,
                            ...a
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? o(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return l(t, e), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("704744");
            var r = n("913144");
            class a {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("773336");
            async function a(e, t) {
                let {
                    default: a
                } = await n.el("572544").then(n.bind(n, "572544")), i = a(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != i) i(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("605250"),
                a = n("802493");
            let i = new r.default("GuildStickers");
            var l = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = a.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return i.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (i.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (i.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    a.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    a.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    a.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let i = a.default.stickersTransaction(r);
                    for (let r of (i.putAll(e, t), n)) i.delete(e, r)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, a, i, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return a
                }
            }), (i = r || (r = {}))[i.GAME = 1] = "GAME", i[i.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", i[i.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = a || (a = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        339783: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getIdealBankDisplayNameFromBankName: function() {
                    return u
                },
                getEPSBankDisplayNameFromBankName: function() {
                    return d
                }
            });
            var r = n("862205"),
                a = n("49111"),
                i = n("782340"),
                l = (0, r.createExperiment)({
                    kind: "user",
                    id: "2021-08_regional_payment_methods",
                    label: "Regional Payment Methods",
                    defaultConfig: {
                        enabledPaymentTypes: [],
                        forceCountryCode: null,
                        validCountryCodes: []
                    },
                    treatments: [{
                        id: 1,
                        label: "Regional Payment Method for Germany",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.SOFORT, a.PaymentSourceTypes.GIROPAY],
                            forceCountryCode: "DE",
                            validCountryCodes: ["DE"]
                        }
                    }, {
                        id: 2,
                        label: "Regional Payment Method for US",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.VENMO, a.PaymentSourceTypes.CASH_APP],
                            forceCountryCode: "US",
                            validCountryCodes: ["US"]
                        }
                    }, {
                        id: 3,
                        label: "Regional Payment Method for Brazil",
                        config: {
                            enabledPaymentTypes: [],
                            forceCountryCode: "BR",
                            validCountryCodes: ["BR"]
                        }
                    }, {
                        id: 4,
                        label: "Regional Payment Method for Turkey",
                        config: {
                            enabledPaymentTypes: [],
                            forceCountryCode: "TR",
                            validCountryCodes: ["TR"]
                        }
                    }, {
                        id: 5,
                        label: "Regional Payment Method for Poland",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PRZELEWY24],
                            forceCountryCode: "PL",
                            validCountryCodes: ["PL"]
                        }
                    }, {
                        id: 6,
                        label: "Enable paysafecard",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD],
                            forceCountryCode: "DE",
                            validCountryCodes: ["BG", "CZ", "DK", "HU", "RO", "SE", "DE"]
                        }
                    }, {
                        id: 7,
                        label: "Regional Payment Method for Philippines",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.GCASH],
                            forceCountryCode: "PH",
                            validCountryCodes: ["PH"]
                        }
                    }, {
                        id: 8,
                        label: "Regional Payment Method for Malaysia",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.GRABPAY_MY],
                            forceCountryCode: "MY",
                            validCountryCodes: ["MY"]
                        }
                    }, {
                        id: 9,
                        label: "Regional Payment Method for Vietnam",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.MOMO_WALLET],
                            forceCountryCode: "VN",
                            validCountryCodes: ["VN"]
                        }
                    }, {
                        id: 10,
                        label: "Regional Payment Method for Indonesia",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.GOPAY_WALLET],
                            forceCountryCode: "ID",
                            validCountryCodes: ["ID"]
                        }
                    }, {
                        id: 11,
                        label: "Regional Payment Method for South Korea",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.KAKAOPAY],
                            forceCountryCode: "KR",
                            validCountryCodes: ["KR"]
                        }
                    }, {
                        id: 12,
                        label: "Regional Payment Method for Belgium",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.SOFORT, a.PaymentSourceTypes.BANCONTACT],
                            forceCountryCode: "BE",
                            validCountryCodes: ["BE"]
                        }
                    }, {
                        id: 13,
                        label: "Regional Payment Method for Austria",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.EPS, a.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "AT",
                            validCountryCodes: ["AT"]
                        }
                    }, {
                        id: 14,
                        label: "Regional Payment Method for Netherlands",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.IDEAL, a.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "NL",
                            validCountryCodes: ["NL"]
                        }
                    }, {
                        id: 15,
                        label: "Launch Paysafecard and Sofort",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.PAYSAFE_CARD, a.PaymentSourceTypes.SOFORT],
                            forceCountryCode: "ES",
                            validCountryCodes: ["ES", "IT"]
                        }
                    }, {
                        id: 16,
                        label: "Launch Cash App",
                        config: {
                            enabledPaymentTypes: [a.PaymentSourceTypes.CASH_APP],
                            forceCountryCode: "US",
                            validCountryCodes: ["US"]
                        }
                    }]
                });
            let s = new Map([
                ["abn_amro", "ABN AMRO"],
                ["asn_bank", "ASN Bank"],
                ["bunq", "Bunq"],
                ["handelsbanken", "Handelsbanken"],
                ["ing ", "ING"],
                ["knab", "Knab"],
                ["rabobank", "Rabobank"],
                ["revolut", "Revolut"],
                ["regiobank", "RegioBank"],
                ["sns_bank", "SNS Bank (De Volksbank)"],
                ["triodos_bank", "Triodos Bank"],
                ["van_lanschot", "Van Lanschot"]
            ]);

            function u(e) {
                return void 0 !== e && s.has(e) ? s.get(e) : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
            let o = new Map([
                ["arzte_und_apotheker_bank", "\xc4rzte- und Apothekerbank"],
                ["austrian_anadi_bank_ag", "Austrian Anadi Bank AG"],
                ["bank_austria", "Bank Austria"],
                ["bankhaus_carl_spangler", "Bankhaus Carl Sp\xe4ngler & Co.AG"],
                ["bankhaus_schelhammer_und_schattera_ag", "Bankhaus Schelhammer & Schattera AG"],
                ["bawag_psk_ag", "BAWAG P.S.K. AG"],
                ["bks_bank_ag", "BKS Bank AG"],
                ["brull_kallmus_bank_ag", "Br\xfcll Kallmus Bank AG"],
                ["btv_vier_lander_bank", "BTV VIER L\xc4NDER BANK"],
                ["capital_bank_grawe_gruppe_ag", "Capital Bank Grawe Gruppe AG"],
                ["dolomitenbank", "Dolomitenbank"],
                ["easybank_ag", "Easybank AG"],
                ["erste_bank_und_sparkassen", "Erste Bank und Sparkassen"],
                ["hypo_alpeadriabank_international_ag", "Hypo Alpe-Adria-Bank International AG"],
                ["hypo_noe_lb_fur_niederosterreich_u_wien", "HYPO NOE LB f\xfcr Nieder\xf6sterreich u. Wien"],
                ["hypo_oberosterreich_salzburg_steiermark", "HYPO Ober\xf6sterreich, Salzburg, Steiermark"],
                ["hypo_tirol_bank_ag", "Hypo Tirol Bank AG"],
                ["hypo_vorarlberg_bank_ag", "Hypo Vorarlberg Bank AG"],
                ["hypo_bank_burgenland_aktiengesellschaft", "HYPO-BANK BURGENLAND Aktiengesellschaft"],
                ["marchfelder_bank", "Marchfelder Bank"],
                ["oberbank_ag", "Oberbank AG"],
                ["raiffeisen_bankengruppe_osterreich", "Raiffeisen Bankengruppe \xd6sterreich"],
                ["schoellerbank_ag", "Schoellerbank AG"],
                ["sparda_bank_wien", "Sparda-Bank Wien"],
                ["volksbank_gruppe", "Volksbank Gruppe"],
                ["volkskreditbank_ag", "Volkskreditbank AG"],
                ["vr_bank_braunau", "VR-Bank Braunau"]
            ]);

            function d(e) {
                return void 0 !== e && o.has(e) ? o.get(e) : i.default.Messages.PAYMENT_SOURCE_UNKNOWN
            }
        },
        115279: function(e, t, n) {
            "use strict";
            var r, a, i, l, s, u, o, d, c, _, E;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return r
                },
                GRID_NAVIGATOR_ID: function() {
                    return f
                },
                EmojiCategories: function() {
                    return a
                },
                EmojiSubCategory: function() {
                    return i
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return s
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return S
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return C
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return O
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return R
                },
                GIF_PICKER_TAB_ID: function() {
                    return L
                },
                EMOJI_SIZE_MAP: function() {
                    return g
                },
                EMOJI_ROW_SIZE: function() {
                    return h
                }
            }), (o = r || (r = {})).GUILD = "GUILD", o.PACK = "PACK", o.UNICODE = "UNICODE", o.RECENT = "RECENT", o.CUSTOM = "CUSTOM", o.SEARCH_RESULTS = "SEARCH_RESULTS", o.FAVORITES = "FAVORITES", o.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", o.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (d = a || (a = {})).RECENT = "recent", d.FAVORITES = "favorites", d.TOP_GUILD_EMOJI = "top guild emoji", d.CUSTOM = "custom", d.PEOPLE = "people", d.NATURE = "nature", d.FOOD = "food", d.ACTIVITY = "activity", d.TRAVEL = "travel", d.OBJECTS = "objects", d.SYMBOLS = "symbols", d.FLAGS = "flags", d.PREMIUM_UPSELL = "premium emoji", (c = i || (i = {})).NONE = "", c.TOP_GUILD_EMOJI = "top_server", c.NEWLY_ADDED_EMOJI = "newly_added", (_ = l || (l = {}))[_.EMOJI = 0] = "EMOJI", _[_.NSFW = 1] = "NSFW";
            let I = -1;
            (E = s || (s = {}))[E.MEDIUM = 40] = "MEDIUM", E[E.LARGE = 48] = "LARGE";
            let S = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                p = "soundboard-picker-tab-panel",
                C = "soundboard-picker-tab",
                A = "reaction-picker-tab-panel",
                N = "reaction-picker-tab",
                O = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let R = "gif-picker-tab-panel",
                L = "gif-picker-tab",
                g = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                h = 9
        },
        903016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                s = n("446674"),
                u = n("266491"),
                o = n("77078"),
                d = n("345116"),
                c = n("521012"),
                _ = n("145131"),
                E = n("965397"),
                f = n("423487"),
                I = n("782340"),
                S = n("47274");
            class T extends a.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, r.jsxs)(o.ModalHeader, {
                        separator: !1,
                        justify: _.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, r.jsx)(o.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function p(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: a,
                    onDismissError: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: S.content,
                    children: [(0, r.jsx)("div", {
                        className: l(S.image, t)
                    }), n, (0, r.jsx)(u.default, {
                        children: null != a ? (0, r.jsx)(E.default, {
                            className: S.error,
                            children: (0, r.jsx)(o.FormErrorBlock, {
                                onDismiss: i,
                                children: a.message
                            })
                        }) : null
                    })]
                })
            }
            let C = e => {
                let {
                    canceledCount: t
                } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription());
                return null == n ? null : (0, r.jsxs)("div", {
                    className: S.pendingCancellation,
                    children: [(0, r.jsx)(f.default, {
                        className: S.pendingCancellationIcon
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: S.pendingCancellationMessage,
                        children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function A(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: a,
                    warning: i,
                    error: l,
                    onDismissError: s,
                    slotCount: u = 1,
                    canceledCount: c = 0
                } = e;
                return (0, r.jsxs)(p, {
                    imageClass: t,
                    error: l,
                    onDismissError: s,
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(d.default, {
                        className: S.guildCard,
                        guild: a,
                        subscriptionChange: u
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: i
                    }), c > 0 ? (0, r.jsx)(C, {
                        canceledCount: c
                    }) : null]
                })
            }

            function N(e) {
                var t, n;
                let {
                    imageClass: i,
                    blurb: l,
                    fromGuilds: s,
                    toGuild: u,
                    error: c,
                    onDismissError: _,
                    slotCount: E = 1,
                    canceledCount: f = 0
                } = e, T = a.useRef(s), A = null === (t = T.current) || void 0 === t ? void 0 : t.length, N = null === (n = T.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, r.jsxs)(p, {
                    imageClass: i,
                    error: c,
                    onDismissError: _,
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        className: S.transferGuildCardHeader,
                        children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: A
                        })
                    }), null != N ? Object.keys(N).map(e => (0, r.jsx)(d.default, {
                        className: S.transferFromGuildCard,
                        guild: N[e][0],
                        subscriptionChange: -1 * N[e].length
                    }, e)) : null, (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        className: S.transferGuildCardHeader,
                        children: I.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: E
                        })
                    }), (0, r.jsx)("div", {
                        className: S.activeTransferGuildCardBorder,
                        children: (0, r.jsx)(d.default, {
                            className: S.transferToGuildCard,
                            guild: u,
                            subscriptionChange: null != s ? s.length : 1
                        })
                    }), f > 0 ? (0, r.jsx)(C, {
                        canceledCount: f
                    }) : null]
                })
            }
            class O extends a.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: a,
                        onCancel: i
                    } = this.props;
                    return (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: a,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, r.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: i,
                            disabled: n,
                            children: I.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class R extends a.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: i,
                        confirmation: l,
                        confirmationLabel: s,
                        imageClass: u,
                        error: d,
                        isModifyingSubscription: c,
                        onConfirm: _,
                        onCancel: E,
                        onDismissError: f,
                        canceledCount: I
                    } = this.props;
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(T, {
                            text: t
                        }), (0, r.jsx)(o.ModalContent, {
                            children: (0, r.jsx)(A, {
                                guild: e,
                                blurb: n,
                                warning: i,
                                imageClass: u,
                                error: d,
                                onDismissError: f,
                                canceledCount: I
                            })
                        }), (0, r.jsx)(O, {
                            confirmation: l,
                            confirmationLabel: s,
                            isModifyingSubscription: c,
                            onConfirm: _,
                            onCancel: E
                        })]
                    })
                }
            }
            R.Header = T, R.ApplyBody = A, R.TransferBody = N, R.Footer = O;
            var L = R
        },
        247760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return a
                },
                default: function() {
                    return L
                }
            });
            var r, a, i = n("37983"),
                l = n("884691"),
                s = n("627445"),
                u = n.n(s),
                o = n("446674"),
                d = n("77078"),
                c = n("583367"),
                _ = n("735201"),
                E = n("305961"),
                f = n("625634"),
                I = n("751433"),
                S = n("599110"),
                T = n("427459"),
                p = n("903016"),
                C = n("936992"),
                A = n("658206"),
                N = n("49111"),
                O = n("782340"),
                R = n("822841");
            (r = a || (a = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", r.GUILD_SELECT = "GUILD_SELECT", r.CONFIRM = "CONFIRM", r.SUCCESS = "SUCCESS";
            var L = e => {
                var t, n;
                let {
                    guildBoostSlots: r,
                    selectedGuild: s,
                    locationSection: L,
                    transitionState: g,
                    onClose: h
                } = e, D = (0, T.getAvailableGuildBoostSlots)(f.default.boostSlots);
                u(null != r || null != s, "Must either provide slots or an initial selected guild"), u(!(null == r ? void 0 : r.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let m = [null == r ? a.UNUSED_QUANTITY_SELECT : null, null == s ? a.GUILD_SELECT : null, a.CONFIRM, a.SUCCESS].filter(e => null != e),
                    [U, P] = (0, o.useStateFromStoresArray)([_.default], () => [_.default.isModifyingAppliedBoost, _.default.applyBoostError]),
                    [y, v] = l.useState(""),
                    [M, b] = l.useState(m[0]),
                    [G, B] = l.useState(!1),
                    [F, x] = l.useState(s),
                    [k, w] = l.useState(null != r ? r : D.slice(0, 1)),
                    H = l.useMemo(() => null == k ? [] : k.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return E.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [k]),
                    j = l.useMemo(() => {
                        var e;
                        return (null == k ? void 0 : null === (e = k[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [k]),
                    V = () => {
                        h(M === a.SUCCESS), S.default.track(N.AnalyticEvents.MODAL_DISMISSED, {
                            type: N.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: L
                        })
                    },
                    Y = {
                        [a.UNUSED_QUANTITY_SELECT]: {
                            body: () => (u(!(null == r && 0 === D.length), "Cannot provide no slots if there are no other available slots"), (0, i.jsxs)("div", {
                                className: R.quantitySelectorBody,
                                children: [(0, i.jsx)(d.Heading, {
                                    variant: "heading-md/semibold",
                                    className: R.quantitySelectorHeader,
                                    children: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, i.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    className: R.quantitySelectorDescription,
                                    children: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, i.jsxs)("div", {
                                    className: R.quantitySelectorWrapper,
                                    children: [(0, i.jsx)(I.default, {
                                        value: k.length,
                                        onChange: e => w(D.slice(0, e)),
                                        minValue: 1,
                                        maxValue: D.length
                                    }), (0, i.jsx)(d.Text, {
                                        className: R.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, i.jsxs)(d.ModalFooter, {
                                children: [(0, i.jsx)(d.Button, {
                                    onClick: () => b(a.CONFIRM),
                                    children: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, i.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: V,
                                    children: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        [a.GUILD_SELECT]: {
                            header: () => (0, i.jsx)(C.GuildSelectModalHeader, {
                                isTransfer: j,
                                query: y,
                                setQuery: v
                            }),
                            bodyClass: R.selectContent,
                            body: () => (0, i.jsx)(C.GuildSelectModalBody, {
                                onClose: V,
                                onSelectGuild: e => {
                                    x(e), b(a.CONFIRM)
                                },
                                isTransfer: j,
                                selectedSlotGuilds: H,
                                query: y
                            })
                        },
                        [a.CONFIRM]: {
                            body() {
                                if (null == F) return null;
                                let e = k.filter(e => (0, T.isGuildBoostSlotCanceled)(e)).length,
                                    t = k.length,
                                    n = H.length;
                                return j ? (0, i.jsx)(p.default.TransferBody, {
                                    fromGuilds: H,
                                    toGuild: F,
                                    blurb: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: R.transferConfirmImage,
                                    error: G ? P : null,
                                    onDismissError: () => B(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, i.jsx)(p.default.ApplyBody, {
                                    guild: F,
                                    blurb: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: N.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: R.confirmImage,
                                    error: G ? P : null,
                                    onDismissError: () => B(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = k.length,
                                    t = m[0] === a.CONFIRM ? V : () => b(m[m.indexOf(M) - 1]),
                                    n = async () => {
                                        if (null != F && (null == k ? void 0 : k.length) !== 0) {
                                            u(!k.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(k.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, c.applyToGuild)(F.id, k.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), b(a.SUCCESS)
                                            } catch (e) {
                                                B(!0)
                                            }
                                        }
                                    };
                                return (0, i.jsx)(p.default.Footer, {
                                    confirmation: j ? O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: j ? O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : O.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: U
                                })
                            }
                        },
                        [a.SUCCESS]: {
                            body: () => (0, i.jsx)(A.GuildBoostingConfirmation, {
                                guild: F,
                                isTransfer: j,
                                guildBoostQuantity: k.length,
                                onClose: V
                            })
                        }
                    };
                l.useEffect(() => {
                    S.default.track(N.AnalyticEvents.OPEN_MODAL, {
                        type: N.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: L
                    })
                }, [L]);
                let K = Y[M];
                return (0, i.jsxs)(d.ModalRoot, {
                    transitionState: g,
                    className: R.modal,
                    size: d.ModalSize.SMALL,
                    children: [null === (t = K.header) || void 0 === t ? void 0 : t.call(K), (0, i.jsx)(d.ModalContent, {
                        className: K.bodyClass,
                        children: (0, i.jsx)(d.Sequencer, {
                            step: M,
                            steps: m,
                            children: K.body()
                        })
                    }), null === (n = K.footer) || void 0 === n ? void 0 : n.call(K), (0, i.jsx)(d.ModalCloseButton, {
                        className: R.modalCloseButton,
                        onClick: V
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return A
                },
                GuildSelectModalBody: function() {
                    return N
                },
                default: function() {
                    return O
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("448105"),
                l = n.n(i),
                s = n("446674"),
                u = n("77078"),
                o = n("54239"),
                d = n("393414"),
                c = n("334811"),
                _ = n("305961"),
                E = n("677099"),
                f = n("109024"),
                I = n("810567"),
                S = n("427459"),
                T = n("49111"),
                p = n("782340"),
                C = n("109396");

            function A(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: a
                } = e;
                return (0, r.jsxs)(u.ModalHeader, {
                    className: C.selectHeaderContainer,
                    children: [(0, r.jsx)(u.Heading, {
                        className: C.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, r.jsx)(I.default, {
                        size: I.default.Sizes.MEDIUM,
                        placeholder: p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": p.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: C.selectSearch,
                        query: a,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function N(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: a,
                    onSelectGuild: i,
                    query: I
                } = e, A = (0, s.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()), N = (0, s.useStateFromStoresArray)([_.default], () => A.reduce((e, t) => {
                    let r = _.default.getGuild(t);
                    return null == r || null != n && n.some(e => e.id === t) ? e : ((I.length <= 0 || l(I.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) && e.push(r), e)
                }, [])), {
                    enabled: O
                } = c.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function R() {
                    a(), (0, o.popLayer)(), (0, d.transitionTo)(T.Routes.GUILD_DISCOVERY)
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [0 === N.length && (0, r.jsx)("div", {
                        className: C.emptyStateWrapper,
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: 0 === A.length ? p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, r.jsx)(u.Clickable, {
                                    onClick: R,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), N.map(e => (0, r.jsxs)(u.Clickable, {
                        className: C.selectGuild,
                        onClick: () => {
                            i(e)
                        },
                        children: [(0, r.jsx)(f.default, {
                            className: C.selectGuildIcon,
                            guild: e,
                            size: f.default.Sizes.SMALL
                        }), (0, r.jsxs)("div", {
                            className: C.selectGuildCopy,
                            children: [(0, r.jsx)(u.Text, {
                                className: C.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), O && (0, r.jsx)(u.Text, {
                                className: C.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, S.getTierName)(e.premiumTier)
                            })]
                        }), O && (0, r.jsx)(u.Text, {
                            className: C.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function O(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: i
                } = e, [l, s] = a.useState("");
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: i,
                    className: C.modal,
                    size: u.ModalSize.SMALL,
                    children: [(0, r.jsx)(A, {
                        query: l,
                        setQuery: s
                    }), (0, r.jsx)(u.ModalContent, {
                        className: C.modalContent,
                        children: (0, r.jsx)(N, {
                            onClose: t,
                            onSelectGuild: n,
                            query: l
                        })
                    }), (0, r.jsx)(u.ModalCloseButton, {
                        className: C.modalCloseButton,
                        onClick: t
                    })]
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (a = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", a.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", a.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", a.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", a.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", a.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", a.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", a.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", a.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", a.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", a.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", a.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", a.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", a.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", a.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", a.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", a.HUB_NEW = "HUB_NEW", a.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", a.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", a.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", a.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", a.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", a.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", a.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", a.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", a.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", a.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", a.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", a.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", a.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", a.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", a.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", a.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", a.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", a.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", a.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", a.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", a.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", a.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", a.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var r = n("522632"),
                a = n("833858");
            let i = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, a.getFirstQueryStringValue)(e[i])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(i, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = r.parse(n),
                    s = (0, a.getFirstQueryStringValue)(l[i]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return _
                },
                useSubscriptionInvoicePreview: function() {
                    return I
                },
                useGetSubscriptionInvoice: function() {
                    return S
                },
                getItemUnitPriceWithDiscount: function() {
                    return T
                }
            });
            var r = n("884691"),
                a = n("446674"),
                i = n("872717"),
                l = n("448993"),
                s = n("195358"),
                u = n("521012"),
                o = n("719923"),
                d = n("49111");
            async function c(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: a,
                    applyEntitlements: u = !1,
                    currency: c,
                    renewal: _,
                    metadata: E
                } = e;
                t = (0, o.coerceExistingItemsToNewItemInterval)(t);
                let f = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: a,
                    apply_entitlements: u,
                    currency: c,
                    renewal: _,
                    metadata: E
                };
                try {
                    let e = await i.default.post({
                        url: d.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function _(e) {
                var t;
                let {
                    subscriptionId: n,
                    items: r,
                    paymentSourceId: a,
                    renewal: u,
                    currency: c,
                    applyEntitlements: _ = !1,
                    analyticsLocations: E,
                    analyticsLocation: f
                } = e;
                null != r && (r = (0, o.coerceExistingItemsToNewItemInterval)(r));
                let I = {
                    items: null === (t = r) || void 0 === t ? void 0 : t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: a,
                    renewal: u,
                    apply_entitlements: _,
                    currency: c
                };
                try {
                    let e = await i.default.patch({
                        url: d.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(n),
                        query: {
                            location: f,
                            location_stack: E
                        },
                        body: I,
                        oldFormErrors: !0
                    });
                    return s.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new l.BillingError(e)
                }
            }
            async function E(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await i.default.get({
                    url: d.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return s.default.createInvoiceFromServer(r.body)
            }

            function f(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [i, l] = (0, r.useState)(null), [s, o] = (0, r.useState)(null), d = (0, a.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            o(null), l(null);
                            let n = await t();
                            !e && l(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, d]), [i, s]
            }

            function I(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? _(e) : "items" in e ? c(e) : null, [JSON.stringify(e)]);
                return f(e, t)
            }

            function S(e) {
                let t = (0, r.useCallback)(() => E(e), [JSON.stringify(e)]);
                return f(e, t)
            }

            function T(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return u
                },
                checkRecipientEligibility: function() {
                    return o
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return c
                }
            });
            var r = n("872717"),
                a = n("913144"),
                i = n("819689"),
                l = n("18494"),
                s = n("49111");
            let u = () => (a.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), r.default.get({
                    url: s.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    a.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    a.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                o = e => (a.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), r.default.post({
                    url: s.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    a.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    a.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function d(e) {
                try {
                    var t;
                    let n = await r.default.post({
                            url: s.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return a.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (e) {
                    if (a.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === s.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = l.default.getCurrentlySelectedChannelId();
                        null != t && i.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function c(e) {
                try {
                    var t;
                    let n = await r.default.get({
                            url: s.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        i = null !== (t = n.body) && void 0 !== t ? t : null;
                    return a.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: i
                    }), {
                        userTrialOffer: i
                    }
                } catch (t) {
                    a.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("637612"),
                a = n("446674"),
                i = n("913144"),
                l = n("697218"),
                s = n("179935"),
                u = n("49111");
            let o = null,
                d = {},
                c = [],
                _ = new Set,
                E = !1,
                f = new Set,
                I = new Set,
                S = {},
                T = 0,
                p = null,
                C = () => !0;

            function A(e) {
                f.add(e)
            }

            function N(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => O(e))
            }

            function O(e) {
                let t = e.type === r.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!I.has(t) && !f.has(t)) {
                    var n;
                    n = t, f.add(n), i.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(u.NOOP_NULL))
                }
            }
            class R extends a.default.Store {
                initialize() {
                    this.waitFor(l.default), this.syncWith([l.default], C)
                }
                checkAndFetchReferralsRemaining() {
                    null == o && !E && T < 5 && (null == p || p < Date.now()) && (0, s.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), o
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
                }
                isFetchingReferralsRemaining() {
                    return E
                }
                isFetchingRecipientEligibility(e) {
                    return _.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !_.has(e) && (0, s.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return S[e]
                }
                isResolving(e) {
                    return f.has(e)
                }
            }
            R.displayName = "ReferralTrialStore";
            var L = new R(i.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!E && (0, s.fetchReferralsRemaining)(), !_.has(n) && (0, s.checkRecipientEligibility)(n), !f.has(t)) {
                        var r;
                        r = t, f.add(r), i.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(u.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    E = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    E = !1, o = t, c = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    E = !1, T += 1, p = Date.now() + 1e3 * Math.pow(2, T)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    _.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    d[t] = n, _.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, _.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, s.fetchReferralsRemaining)(), S[t.id] = t, c = [...c, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (f.delete(t.id), I.add(t.id), S[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    f.delete(t), I.add(t)
                },
                LOAD_MESSAGES_SUCCESS: N,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    O(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: N,
                LOGOUT: function() {
                    o = null, d = {}, c = [], _ = new Set, E = !1, f = new Set, I = new Set, S = {}, T = 0, p = null
                }
            })
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return u
                }
            });
            var r = n("65597"),
                a = n("340412"),
                i = n("540692"),
                l = n("833516"),
                s = n("646718");

            function u(e) {
                var t, n, u, o;
                let d = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    c = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    _ = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    E = (0, l.useTrialOffer)(a.default.getAnyOfUserTrialOfferId([s.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, s.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, s.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    f = (0, l.useTrialOffer)(s.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    I = (0, r.default)([i.default], () => void 0 === e ? null : i.default.getRelevantUserTrialOffer(e));
                return null !== (o = null !== (u = null !== (n = null !== (t = null != d ? d : I) && void 0 !== t ? t : c) && void 0 !== n ? n : _) && void 0 !== u ? u : E) && void 0 !== o ? o : f
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return o
                },
                useTrialOffer: function() {
                    return d
                }
            });
            var r = n("884691"),
                a = n("446674"),
                i = n("862337"),
                l = n("697218"),
                s = n("340412"),
                u = n("719923");

            function o(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getUserTrialOffer(e)),
                    [n, d] = r.useState(o(t)),
                    c = (0, a.useStateFromStores)([l.default], () => (0, u.isPremium)(l.default.getCurrentUser()));
                return r.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new i.Timeout,
                            r = () => {
                                let a = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(a, () => {
                                    !n && o(t) ? d(!0) : r()
                                })
                            };
                        return r(), () => e.stop()
                    }
                }, [n, t]), n || c ? null : t
            }
        },
        345116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                s = n("931138"),
                u = n("109024"),
                o = n("206453"),
                d = n("811151"),
                c = n("427459"),
                _ = n("804308");
            class E extends a.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        className: _.tierPill,
                        children: [(0, r.jsx)(s.default, {
                            className: _.tierPillStar,
                            children: (0, r.jsx)(o.default, {
                                tier: e,
                                className: _.tierPillGem
                            })
                        }), (0, c.getTierName)(e)]
                    })
                }
            }
            let f = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let a = Math.max(n.premiumSubscriberCount + t, 0),
                    i = (0, c.getGuildTierFromAppliedBoostCount)(a, n.id),
                    l = i - (0, c.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === l ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.default, {
                        className: l > 0 ? _.levelUpIcon : _.levelDownIcon
                    }), (0, r.jsx)(E, {
                        tier: i
                    })]
                })
            };
            class I extends a.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        className: l(_.subscription, t),
                        children: [(0, r.jsx)(u.default, {
                            guild: e,
                            size: u.default.Sizes.LARGE
                        }), (0, r.jsxs)("div", {
                            className: _.subscriptionInfo,
                            children: [(0, r.jsx)("div", {
                                className: _.guildName,
                                children: e.name
                            }), (0, r.jsxs)("div", {
                                className: _.tierInfo,
                                children: [(0, r.jsx)(E, {
                                    tier: e.premiumTier
                                }), (0, r.jsx)(f, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })]
                            })]
                        })]
                    })
                }
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                l = n("153160"),
                s = n("646718"),
                u = n("782340"),
                o = n("552033");

            function d(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: a,
                    className: d,
                    intervalCount: c = 1,
                    isPrepaidPaymentSource: _ = !1
                } = e, E = (0, l.formatPrice)(t, n), f = null;
                return a === s.SubscriptionIntervalTypes.YEAR ? f = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: E
                }) : a === s.SubscriptionIntervalTypes.MONTH && 1 === c ? f = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: E
                }) : a === s.SubscriptionIntervalTypes.MONTH && c > 1 && (f = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: E,
                    intervalCount: c
                })), (0, r.jsx)("div", {
                    className: i(o.pricePerInterval, d),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == a || _ ? (0, r.jsx)("strong", {
                        children: E
                    }) : f
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                l = n.n(i),
                s = n("849085");
            let u = a.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: a
                } = e;
                return (0, r.jsx)("div", {
                    className: l(s.wrapper, {
                        [s.wrapperActive]: n
                    }),
                    ref: t,
                    children: a
                })
            });
            var o = u
        },
        846325: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return i
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                }
            });
            let i = 32,
                l = 5,
                s = "DEFAULT";
            (a = r || (r = {}))[a.SUCCESS = 0] = "SUCCESS", a[a.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                d = [],
                c = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var r, a, i = n("917351"),
                l = n.n(i),
                s = n("446674"),
                u = n("913144"),
                o = n("845579"),
                d = n("374363"),
                c = n("697218"),
                _ = n("599110"),
                E = n("829536"),
                f = n("846325"),
                I = n("49111"),
                S = n("397336");
            (r = a || (a = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                p = new Map,
                C = new Set,
                A = a.NOT_FETCHED,
                N = a.NOT_FETCHED,
                O = new Set,
                R = new Map,
                L = !1;

            function g(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let h = l.debounce(e => {
                _.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function D(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? C.add(e) : C.delete(e);
                for (let e of C.keys()) null == r[e] && C.delete(e)
            }
            class m extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), D(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(O),
                        localSoundboardMutes: Array.from(C)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return N === a.FETCHING
                }
                isFetchingDefaultSounds() {
                    return A === a.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return A === a.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return A === a.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = R.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != p.get(e)
                }
                isFavoriteSound(e) {
                    return O.has(e)
                }
                getFavorites() {
                    return O
                }
                isLocalSoundboardMuted(e) {
                    return C.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return L
                }
                hasFetchedAllSounds() {
                    return N === a.FETCHED && A === a.FETCHED
                }
            }
            m.displayName = "SoundboardStore";
            var U = new m(u.default, {
                LOGOUT: function() {
                    T.clear(), p.clear(), R.clear(), L = !1, N = a.NOT_FETCHED, A = a.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    N = a.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: g,
                GUILD_SOUNDBOARD_SOUND_UPDATE: g,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let r = T.get(n),
                        a = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != a && !(a < 0) && (r.splice(a, 1), T.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: a,
                        userId: i
                    } = e, l = (null !== (n = p.get(a)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = R.get(i)) && void 0 !== r ? r : 0) + 1;
                    p.set(a, l), R.set(i, s), i !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (L = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: a
                    } = e, i = (null !== (t = p.get(r)) && void 0 !== t ? t : 0) - 1, l = (null !== (n = R.get(a)) && void 0 !== n ? n : 0) - 1;
                    i <= 0 ? p.delete(r) : p.set(r, i), l <= 0 ? R.delete(a) : R.set(a, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    h(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    p.clear(), R.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var a, i;
                        O = new Set(null !== (i = null == r ? void 0 : null === (a = r.favoriteSoundboardSounds) || void 0 === a ? void 0 : a.soundIds) && void 0 !== i ? i : [])
                    } else n === S.UserSettingsTypes.PRELOADED_USER_SETTINGS && D(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    A = a.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(f.DEFAULT_SOUND_GUILD_ID, t), A = a.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        T.set(t, n)
                    }), N = a.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    C.has(t) ? C.delete(t) : C.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), O = new Set(t.favoritedSoundIds), C = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var r, a, i = n("102053"),
                l = n("446674"),
                s = n("913144"),
                u = n("802493"),
                o = n("595525"),
                d = n("212084"),
                c = n("867805"),
                _ = n("267567"),
                E = n("813006"),
                f = n("778689"),
                I = n("305961"),
                S = n("161585"),
                T = n("24373"),
                p = n("49111");
            (r = a || (a = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let C = 2,
                A = new Map,
                N = new Map,
                O = null,
                R = [],
                L = null,
                g = !1,
                h = new Map,
                D = (e, t) => {
                    h = new Map(h.set(e, t))
                },
                m = 1e3 * p.Durations.HOUR,
                U = () => {
                    if (0 !== C) return;
                    let e = u.default.database();
                    if (null == e) return;
                    C = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => i.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !h.has(e)) {
                                for (let t of n) P(t, !0, I.default.getGuild(e));
                                D(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    N.set(e.id, e), t && y(e, n)
                },
                y = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == O) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: S.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = R.find(t => t.id === e.pack_id),
                            a = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: S.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && a.push({
                            type: S.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), O.set(e.id, a)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let a = c.default.getByName(n),
                            i = {
                                type: S.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            l = [r, i];
                        if (null != t) {
                            let e = (t instanceof(0, E.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && l.push({
                                type: S.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == a) {
                            O.set(e.id, l);
                            return
                        }
                        l.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: a.surrogates
                        }), a.forEachDiversity(e => l.push({
                            type: S.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), O.set(e.id, l)
                    }
                },
                v = (e, t, n) => {
                    A.set(e.id, e);
                    let r = [...R];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), R = r
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                M = () => {
                    h.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => y(e, n))
                    }), R.forEach(e => {
                        e.stickers.forEach(e => y(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), D(e.id, e.stickers))
            }
            class G extends l.default.Store {
                initialize() {
                    this.waitFor(u.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== C
                }
                get stickerMetadata() {
                    return U(), null == O && (O = new Map, M()), O
                }
                get hasLoadedStickerPacks() {
                    return null != L && L + m > Date.now()
                }
                get isFetchingStickerPacks() {
                    return g
                }
                getStickerById(e) {
                    return !N.has(e) && U(), N.get(e)
                }
                getStickerPack(e) {
                    return A.get(e)
                }
                getPremiumPacks() {
                    return R
                }
                isPremiumPack(e) {
                    return R.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return h
                }
                getAllStickersIterator() {
                    return U(), N.values()
                }
                getAllGuildStickers() {
                    return U(), h
                }
                getStickersByGuildId(e) {
                    return U(), h.get(e)
                }
            }
            G.displayName = "StickersStore";
            var B = new G(s.default, {
                BACKGROUND_SYNC: () => {
                    O = null, N = new Map, h = new Map, C = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    O = null, N = new Map, h = new Map, t.forEach(b), C = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !_.default.isLurking(t.id) && (b(t), 1 === C && null == t.stickers && null != t.stickerUpdates && (C = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = h.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != O && O.delete(e.id), N.delete(e.id)
                    }), h.delete(n.id), h = new Map(h)
                },
                LOGOUT: () => {
                    C = 0, R = [], N.clear(), A.clear(), O = null, h.clear(), h = new Map(h), g = !1, L = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    g = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => v(e, !0)), L = Date.now(), g = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    v(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), D(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: a
                    } = e, i = null !== (t = h.get(r)) && void 0 !== t ? t : [];
                    D(r, [...null !== (n = i.filter(e => e.id !== a.id)) && void 0 !== n ? n : [], a]), P(a)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, a = e => {
                        let t;
                        let n = N.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, i = null !== (t = h.get(n)) && void 0 !== t ? t : [], l = i.filter(e => null == r.find(t => t.id === e.id));
                    l.forEach(e => {
                        N.delete(e.id), null != O && O.delete(e.id)
                    });
                    let s = r.map(e => a(e));
                    s.forEach(e => P(e)), D(n, s)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return a
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return i
                },
                canSuppressNotifications: function() {
                    return l
                },
                default: function() {
                    return s
                }
            });
            var r = n("729912");
            let a = "@silent",
                i = new RegExp("^".concat(a, "(\\s|$)"));

            function l() {
                let e = r.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function s(e) {
                return l() && null != e.match(i) ? [!0, e.substring(a.length).trim()] : [!1, e]
            }
        },
        334811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("862205");
            let a = (0, r.createExperiment)({
                kind: "user",
                id: "2023-04_guild_boosting_settings_redesign",
                label: "Guild Boosting Settings Redesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Variant 1 international",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = a
        },
        917219: function(e, t, n) {
            "use strict";
            var r, a, i, l;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return a
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return s
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return o
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (i = r || (r = {}))[i.BACKGROUND = 0] = "BACKGROUND", (l = a || (a = {}))[l.OPTION_1 = 0] = "OPTION_1", l[l.OPTION_2 = 1] = "OPTION_2", l[l.OPTION_3 = 2] = "OPTION_3", l[l.OPTION_4 = 3] = "OPTION_4", l[l.OPTION_7 = 7] = "OPTION_7", l[l.OPTION_8 = 8] = "OPTION_8", l[l.OPTION_9 = 9] = "OPTION_9", l[l.OPTION_10 = 10] = "OPTION_10";
            let s = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10],
                u = [a.OPTION_7, a.OPTION_8, a.OPTION_9, a.OPTION_10, a.OPTION_1, a.OPTION_2, a.OPTION_3, a.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                o = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("666038");
            class a extends r.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        735201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("446674"),
                a = n("913144");
            let i = {},
                l = null,
                s = [],
                u = !1,
                o = null,
                d = null;

            function c() {
                u = !0
            }
            class _ extends r.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != i[e] ? i[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != i[e] ? i[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return s
                }
                getAppliedGuildBoost(e) {
                    return s.find(t => t.id === e)
                }
                get isModifyingAppliedBoost() {
                    return u
                }
                get applyBoostError() {
                    return o
                }
                get unapplyBoostError() {
                    return d
                }
                get cooldownEndsAt() {
                    return l
                }
            }
            _.displayName = "AppliedGuildBoostStore";
            var E = new _(a.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    i[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    s = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    l = t
                },
                GUILD_UNAPPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_START: c,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    s = [...t, ...s.filter(e => !n.has(e.id))], o = null, u = !1
                },
                GUILD_APPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    u = !1, o = t
                },
                GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
                    let {
                        boostId: t
                    } = e;
                    s = s.filter(e => e.id !== t), u = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    u = !1, d = t
                }
            })
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("446674"),
                a = n("913144"),
                i = n("619340"),
                l = n("376556"),
                s = n("450205"),
                u = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                c = !0,
                _ = [],
                E = [],
                f = {},
                I = {},
                S = e => {
                    _ = e.filter(e => !d.has(e.type) && l.default.isSupported(e.type)), E = e.filter(e => d.has(e.type)), c = !1
                };
            class T extends r.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return _
                }
                getLocalAccounts() {
                    return E
                }
                getAccount(e, t) {
                    return _.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return E.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var p = new T(a.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    S(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new u.default(e.guild)
                            }))
                        }));
                        S(t)
                    } else i.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: a
                    } = e, i = _.find(e => e.id === n && e.type === t);
                    if (null == i) return !1;
                    null != r && (i.revoked = r), null != a && (i.accessToken = a)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("446674"),
                a = n("913144"),
                i = n("9294"),
                l = n("49111");
            let s = {},
                u = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, i.parseExtraDataFromInviteKey)(e),
                    a = s[e],
                    u = null != a ? {
                        state: l.InviteStates.RESOLVING,
                        ...a
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(u), s = {
                    ...s,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [u.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            _.displayName = "InviteStore";
            var E = new _(a.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, i.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, d(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("446674"),
                a = n("913144"),
                i = n("697218"),
                l = n("719923"),
                s = n("521012");
            let u = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                o = u;

            function d() {
                o.userTrialOffers = {}, o.userDiscounts = {}, o.userOffersLastFetchedAtDate = void 0
            }
            let c = () => !0;

            function _() {
                let e = s.default.getPremiumTypeSubscription();
                return null != e && (o.userTrialOffers = {}, o.userDiscounts = {}, !0)
            }
            class E extends r.default.PersistedStore {
                initialize(e) {
                    o = null != e ? e : u, this.waitFor(i.default), this.syncWith([i.default], c), this.syncWith([s.default], _)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return o.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return o.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != o.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != o.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = o.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = i.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = i.default.getCurrentUser();
                    return (0, l.isPremium)(e) ? [] : Object.values(o.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = i.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(o.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(o.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return o
                }
                forceReset() {
                    d()
                }
            }
            E.displayName = "UserOfferStore", E.persistKey = "UserOfferStore";
            var f = new E(a.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? o.userTrialOffers[t.trial_id] = t : d(), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    o.userTrialOffers[t.trial_id] = t, o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && d(), null != t ? (o.userTrialOffers[t.trial_id] = t, o.userDiscounts = {}) : null != n && (o.userDiscounts[n.discount_id] = n, o.userTrialOffers = {}), o.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    (null != t || null != n) && (null != t && (o.userTrialOffers[t.trial_id] = t), null != n && (o.userDiscounts[n.discount_id] = n), o.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: d
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("913144");
            let l = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class s extends a.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : l
                }
                getState() {
                    return r
                }
                get hasAcceptedStoreTerms() {
                    return r.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return r.hasAcceptedEulaIds.includes(e)
                }
            }
            s.displayName = "ApplicationStoreUserSettingsStore", s.persistKey = "ApplicationStoreUserSettingsStore", s.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var u = new s(i.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    r.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (r.hasAcceptedEulaIds.includes(t)) return !1;
                    r.hasAcceptedEulaIds.push(t)
                }
            })
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return a
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function a(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return a
                }
            });
            var r = n("159885");

            function a(e, t) {
                for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) a[i - 2] = arguments[i];
                let l = a.reduce((e, t) => e + (0, r.upperCaseFirstChar)(t), ""),
                    s = "".concat(t).concat(l),
                    u = e[s];
                if (null != u) return u
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("872717"),
                a = n("599110");

            function i(e, t, n) {
                let {
                    trackedActionData: r,
                    ...i
                } = t, l = {
                    url: i.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(i).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, a.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, i;
                        let s = r.properties;
                        "function" == typeof r.properties && (s = r.properties(e)), (0, a.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message,
                            ...l,
                            ...s
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return i(r.default.get, e, "get")
                },
                post: function(e) {
                    return i(r.default.post, e, "post")
                },
                put: function(e) {
                    return i(r.default.put, e, "put")
                },
                patch: function(e) {
                    return i(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return i(r.default.delete, e, "del")
                }
            }
        }
    }
]);
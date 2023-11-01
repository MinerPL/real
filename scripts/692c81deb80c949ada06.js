(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92453"], {
        943603: function(e, a, n) {
            var t = {
                "./bg.png": "585337",
                "./cs.png": "83076",
                "./da.png": "228351",
                "./de.png": "96895",
                "./el.png": "954635",
                "./en-GB.png": "883638",
                "./en-US.png": "969851",
                "./es-ES.png": "98918",
                "./fi.png": "110775",
                "./fr.png": "128393",
                "./hi.png": "79794",
                "./hr.png": "988195",
                "./hu.png": "366988",
                "./it.png": "583917",
                "./ja.png": "895466",
                "./ko.png": "879503",
                "./lt.png": "370757",
                "./nl.png": "461053",
                "./no.png": "871682",
                "./pl.png": "140693",
                "./pt-BR.png": "260276",
                "./ro.png": "929905",
                "./ru.png": "830793",
                "./sv-SE.png": "841801",
                "./th.png": "862866",
                "./tr.png": "567215",
                "./uk.png": "142242",
                "./vi.png": "610487",
                "./zh-CN.png": "986521",
                "./zh-TW.png": "204827"
            };

            function r(e) {
                return n(o(e))
            }

            function o(e) {
                if (!n.o(t, e)) {
                    var a = Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                return t[e]
            }
            r.id = '"943603"', r.keys = function() {
                return Object.keys(t)
            }, r.resolve = o, e.exports = r
        },
        972119: function(e, a, n) {
            "use strict";
            n.r(a), n.d(a, {
                default: function() {
                    return T
                }
            });
            var t = n("37983"),
                r = n("884691"),
                o = n("108402"),
                s = n("601680"),
                l = n("831137"),
                p = n("446674"),
                u = n("452804"),
                d = n("915639"),
                c = n("599110"),
                g = n("49111"),
                i = n("782340"),
                h = n("128403");
            class f extends r.Component {
                shouldScrollToTop(e) {
                    let {
                        location: a
                    } = e;
                    return a.pathname.startsWith(g.Routes.APPLICATION_STORE_LISTING_SKU("")) || a.pathname.startsWith(g.Routes.APPLICATION_STORE_LISTING_APPLICATION(""))
                }
                render() {
                    let {
                        location: e,
                        className: a,
                        render: n,
                        locale: p
                    } = this.props;
                    return (0, t.jsx)(l.default, {
                        className: a,
                        shouldScrollToTop: this.shouldScrollToTop,
                        render: (a, l) => (0, t.jsxs)(r.Fragment, {
                            children: [(0, t.jsx)(s.default, {
                                avoidRouter: !0,
                                locale: p,
                                authRedirectTo: e.pathname,
                                track: c.default.track,
                                className: h.marketingHeader,
                                onChangeLocale: this.handleHeaderLocaleChange,
                                mobileClassName: h.marketingHeader,
                                openNavAriaLabel: i.default.Messages.OPEN_NAVIGATION,
                                hideNavAriaLabel: i.default.Messages.HIDE_NAVIGATION,
                                skipToContentLabel: i.default.Messages.SKIP_TO_CONTENT
                            }), n(a, l), (0, t.jsx)(o.default, {
                                locale: p,
                                authRedirectTo: e.pathname,
                                avoidRouter: !0,
                                track: c.default.track,
                                className: h.marketingFooter
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleHeaderLocaleChange = e => {
                        e !== this.props.locale && u.default.overrideLocale(e)
                    }
                }
            }
            var T = p.default.connectStores([d.default], () => ({
                locale: d.default.locale
            }))(f)
        }
    }
]);
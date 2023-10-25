(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75532"], {
        933827: function(e, a, n) {
            var t = {
                "./bg.png": "42692",
                "./cs.png": "341459",
                "./da.png": "442072",
                "./de.png": "820848",
                "./el.png": "362938",
                "./en-GB.png": "912718",
                "./en-US.png": "778369",
                "./es-ES.png": "18762",
                "./fi.png": "504368",
                "./fr.png": "802887",
                "./hi.png": "461253",
                "./hr.png": "940340",
                "./hu.png": "162776",
                "./it.png": "780408",
                "./ja.png": "759736",
                "./ko.png": "328724",
                "./lt.png": "532059",
                "./nl.png": "667041",
                "./no.png": "215918",
                "./pl.png": "445780",
                "./pt-BR.png": "512238",
                "./ro.png": "535271",
                "./ru.png": "413963",
                "./sv-SE.png": "636372",
                "./th.png": "647675",
                "./tr.png": "61008",
                "./uk.png": "236997",
                "./vi.png": "265544",
                "./zh-CN.png": "820447",
                "./zh-TW.png": "671176"
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
            r.id = '"933827"', r.keys = function() {
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
            var t = n("920040"),
                r = n("773670"),
                o = n("147487"),
                s = n("184733"),
                l = n("492617"),
                p = n("498225"),
                u = n("452804"),
                d = n("915639"),
                c = n("599110"),
                g = n("49111"),
                i = n("782340"),
                h = n("201811");
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
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("452804"),
                o = s("915639"),
                d = s("782340"),
                u = s("982110"),
                c = s("390493"),
                S = l.default.connectStores([o.default], () => ({
                    currentLocale: o.default.locale
                }))(function(e) {
                    let [t, l] = n.useState(e.currentLocale), [o] = n.useState(() => d.default.getAvailableLocales().map(e => {
                        let t;
                        try {
                            t = s("20860")("@discordapp/common/images/flags/".concat(e.value, ".png").replace("@discordapp/common/images/flags/", "./"))
                        } catch (e) {
                            t = s("799987")
                        }
                        return {
                            ...e,
                            name: (0, a.jsxs)("div", {
                                className: u.option,
                                children: [(0, a.jsx)("span", {
                                    className: u.localeName,
                                    children: e.name
                                }), (0, a.jsx)("span", {
                                    className: u.localizedName,
                                    children: e.localizedName
                                }), (0, a.jsx)("div", {
                                    className: u.flag,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)("img", {
                                        alt: "",
                                        src: t,
                                        className: u.flagImage
                                    })
                                })]
                            })
                        }
                    })), S = n.useCallback(e => {
                        let {
                            value: t
                        } = e;
                        l(t), c.nextTick(() => r.default.updateLocale(t))
                    }, []);
                    return (0, a.jsx)(i.FormSection, {
                        tag: i.FormTitleTags.H1,
                        title: d.default.Messages.LANGUAGE,
                        children: (0, a.jsx)(i.FormSection, {
                            children: (0, a.jsx)(i.FormItem, {
                                title: d.default.Messages.LANGUAGE_SELECT,
                                children: (0, a.jsx)(i.RadioGroup, {
                                    onChange: S,
                                    options: o,
                                    value: t
                                })
                            })
                        })
                    })
                })
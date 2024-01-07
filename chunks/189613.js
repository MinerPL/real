            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("881410");
            var n, i = s("37983"),
                a = s("884691"),
                o = s("414456"),
                l = s.n(o),
                r = s("448105"),
                u = s.n(r),
                d = s("917351"),
                h = s.n(d),
                c = s("592861"),
                E = s("77078"),
                R = s("988415"),
                f = s("145131"),
                p = s("782340"),
                I = s("803853"),
                m = s("212029");
            n = class extends a.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = c.default.flatMap((e, t) => {
                        let {
                            alpha2: s,
                            phoneCountryCodes: n,
                            name: a
                        } = e, o = (0, R.getI18NCountryName)(s);
                        return n.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: a,
                            translatedName: o,
                            countryData: {
                                name: a,
                                alpha2: s,
                                code: e
                            },
                            children: (0, i.jsxs)(f.default, {
                                className: I.countryItem,
                                justify: f.default.Justify.CENTER,
                                align: f.default.Align.CENTER,
                                children: [(0, i.jsx)(f.default.Child, {
                                    className: I.countryName,
                                    children: o
                                }), (0, i.jsx)(f.default.Child, {
                                    className: I.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), s = h(t).filter(t => 0 === e.length || u(e.toLowerCase(), t.name.toLowerCase()) || u(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, a.createElement)(E.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === s.length ? (0, i.jsx)(E.PopoutList.Empty, {
                        children: p.default.Messages.NONE
                    }) : (0, i.jsx)(E.ScrollerAuto, {
                        className: I.phoneFieldScroller,
                        children: s
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, i.jsxs)(E.PopoutList, {
                        className: l(I.phoneFieldPopout, m.elevationBorderLow, e),
                        children: [(0, i.jsx)(E.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: p.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, i.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
                    })
                }
                constructor(e) {
                    super(e), this.onChangeQuery = e => {
                        this.setState({
                            query: e
                        })
                    }, this.onClearQuery = () => {
                        this.setState({
                            query: ""
                        })
                    }, this.onClick = e => {
                        var t, s;
                        null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
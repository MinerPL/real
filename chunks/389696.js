            "use strict";
            n.r(t), n.d(t, {
                TestModeSKUButtonEnums: function() {
                    return f
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("77078"),
                r = n("272030"),
                o = n("741130"),
                u = n("299285"),
                d = n("552712"),
                c = n("271560"),
                E = n("782340");
            let f = {
                DropdownSizes: o.default.DropdownSizes,
                Sizes: o.default.Sizes,
                Colors: o.default.Colors,
                Looks: o.default.Looks
            };
            class _ extends s.PureComponent {
                render() {
                    let {
                        skus: e,
                        children: t,
                        applicationId: n,
                        primarySKU: s,
                        onSKUSelect: i,
                        ...l
                    } = this.props;
                    return (0, a.jsx)(o.default, {
                        onClick: this.handleClick,
                        onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
                        onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
                        ...l,
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.renderContextMenu = () => {
                        let {
                            skus: e,
                            onSKUSelect: t,
                            onMenuSelect: n
                        } = this.props;
                        return (0, a.jsx)(l.Menu, {
                            onSelect: n,
                            navId: "test-skus",
                            "aria-label": E.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                            onClose: r.closeContextMenu,
                            children: e.map(e => (0, a.jsx)(l.MenuItem, {
                                id: "".concat(e.id),
                                label: e.name,
                                action: () => {
                                    null == t || t(e)
                                }
                            }, "".concat(e.id)))
                        })
                    }, this.handleContextMenu = e => {
                        e.stopPropagation(), r.openContextMenu(e, this.renderContextMenu)
                    }, this.handleClick = () => {
                        let {
                            onSKUSelect: e,
                            primarySKU: t
                        } = this.props;
                        null != t && (null == e || e(t))
                    }
                }
            }
            var h = i.default.connectStores([d.default, u.default], e => {
                var t;
                let {
                    applicationId: n
                } = e, a = (0, c.getPrimarySKUForApplication)(n, u.default, d.default);
                return {
                    skus: (null !== (t = d.default.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => null != a && e.id === a.id ? -1 : null != a && t.id === a.id ? 1 : e.name >= t.name ? -1 : 1),
                    primarySKU: a
                }
            })(_)
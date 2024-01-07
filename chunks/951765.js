            "use strict";
            s.r(t), s.d(t, {
                TestModeStoreListingButtonEnums: function() {
                    return c
                },
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("446674"),
                l = s("77078"),
                i = s("272030"),
                u = s("741130"),
                o = s("698041"),
                d = s("782340");
            let c = {
                DropdownSizes: u.default.DropdownSizes,
                Sizes: u.default.Sizes,
                Colors: u.default.Colors,
                Looks: u.default.Looks
            };
            class _ extends n.PureComponent {
                render() {
                    let {
                        storeListings: e,
                        primaryStoreListing: t,
                        skuId: s,
                        onStoreListingSelect: n,
                        currentStoreListingId: r,
                        ...l
                    } = this.props, i = null != t ? 1 : 0;
                    return (i += e.length) < 2 ? null : (0, a.jsx)(u.default, {
                        onClick: this.handleContextMenu,
                        onDropdownClick: this.handleContextMenu,
                        onContextMenu: this.handleContextMenu,
                        ...l,
                        children: d.default.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
                    })
                }
                constructor(...e) {
                    super(...e), this.renderContextMenu = () => {
                        let {
                            storeListings: e,
                            onStoreListingSelect: t,
                            currentStoreListingId: s,
                            onMenuSelect: n
                        } = this.props, r = e.map(e => e.id !== s ? (0, a.jsx)(l.MenuItem, {
                            id: "".concat(e.id),
                            label: e.id,
                            action: () => {
                                i.closeContextMenu(), null == t || t(e)
                            }
                        }) : null);
                        return (0, a.jsx)(l.Menu, {
                            onSelect: n,
                            navId: "test-store-listing",
                            "aria-label": d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                            onClose: i.closeContextMenu,
                            children: r
                        })
                    }, this.handleContextMenu = e => {
                        e.stopPropagation(), i.openContextMenu(e, this.renderContextMenu)
                    }
                }
            }
            var E = r.default.connectStores([o.default], e => {
                let {
                    skuId: t
                } = e;
                return {
                    storeListings: o.default.getUnpublishedForSKU(t),
                    primaryStoreListing: o.default.getForSKU(t)
                }
            })(_)
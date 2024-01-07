            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("790219"),
                u = n("359606"),
                d = n("206100"),
                c = n("85871"),
                f = n("231561"),
                m = n("347374"),
                E = n("271560"),
                _ = n("4919"),
                h = n("458331"),
                p = n("49111"),
                I = n("384560");
            class T extends s.PureComponent {
                render() {
                    let {
                        sku: e,
                        storeListing: t,
                        isHorizontal: n,
                        className: s,
                        renderCustomTagline: l,
                        renderCustomTitle: i,
                        renderCustomMedia: r,
                        isEmbed: o
                    } = this.props, u = o ? _.ResponsiveEmbedTile : h.default;
                    return (0, a.jsx)(u, {
                        className: s,
                        renderMedia: null != r ? r : this.renderMedia,
                        renderTitle: null != i ? i : () => e.name,
                        renderTagline: null != l ? l : () => t.tagline,
                        renderActions: this.renderActions,
                        isHorizontal: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderActions = () => {
                        let {
                            inLibrary: e,
                            sku: t,
                            renderCustomActions: n,
                            isMouseOver: s,
                            showBuyInline: l
                        } = this.props, i = (l || !t.requiresPayment) && !e, c = i && s;
                        return null != n ? n() : (0, a.jsxs)("div", {
                            className: I.priceOs,
                            children: [(0, a.jsx)(u.default, {
                                type: u.default.Types.DIRECTORY_TILE,
                                sku: t,
                                inLibrary: e,
                                className: c ? I.tilePriceWithVisibleBuyButton : I.tilePrice
                            }), (0, a.jsx)(d.OperatingSystemSection, {
                                systems: [p.OperatingSystems.WINDOWS],
                                className: I.platform
                            }), i ? (0, a.jsx)(o.default, {
                                skuId: t.id,
                                applicationId: t.applicationId,
                                size: r.Button.Sizes.SMALL,
                                shouldRenderPrice: !0,
                                onStoreListing: !0,
                                onClick: e => e.preventDefault(),
                                className: c ? I.tileBuyButtonVisible : I.tileBuyButton
                            }) : null]
                        })
                    }, this.renderMedia = () => {
                        let {
                            playing: e,
                            muted: t,
                            showMediaPlaceholder: n,
                            onToggleMute: l,
                            sku: r,
                            isHorizontal: o,
                            storeListing: u
                        } = this.props;
                        return (0, a.jsxs)(s.Fragment, {
                            children: [(0, a.jsx)(m.default, {
                                className: i(I.splashContainer, {
                                    [I.splashContainerHorizontal]: o
                                }),
                                video: null != u.previewVideo ? (0, E.getAssetURL)(r.applicationId, u.previewVideo) : void 0,
                                image: null != u.thumbnail ? (0, E.getAssetURL)(r.applicationId, u.thumbnail, 600) : null,
                                title: r.name,
                                playing: e,
                                muted: t,
                                placeholder: n,
                                onToggleMute: l,
                                splashClassName: I.splashVideo,
                                splashPlaceholderClassName: I.splashPlaceholder
                            }), r.exclusive ? (0, a.jsx)(c.default, {
                                className: i(I.exclusiveRegular, {
                                    [I.exclusivePlaying]: e
                                })
                            }) : r.isTheGameAwardsWinner ? (0, a.jsx)(f.default, {
                                className: i(I.exclusiveRegular, {
                                    [I.exclusivePlaying]: e
                                })
                            }) : null]
                        })
                    }
                }
            }
            T.defaultProps = {
                showMediaPlaceholder: !1,
                isMouseOver: !1,
                showBuyInline: !1,
                isHorizontal: !1,
                isEmbed: !1
            };
            var g = T
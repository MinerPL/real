            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007"), n("70102");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("77078"),
                u = n("272030"),
                d = n("997289"),
                c = n("860285"),
                f = n("86878"),
                m = n("568307"),
                E = n("535974"),
                _ = n("181114"),
                h = n("837899"),
                p = n("773336"),
                I = n("780009"),
                T = n("49111"),
                g = n("782340"),
                C = n("743317");
            class S extends s.PureComponent {
                get analyticsLocation() {
                    return {
                        ...this.props.analyticsContext.location,
                        object: T.AnalyticsObjects.BUTTON_CTA
                    }
                }
                renderDropdown() {
                    let {
                        dispatchState: e
                    } = this.props, t = null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
                    return t ? (0, a.jsxs)(o.Clickable, {
                        "aria-label": g.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_OPTIONS,
                        className: C.dropdownArrowHitbox,
                        onClick: this.handleDropdownClick,
                        children: [(0, a.jsx)("div", {
                            className: C.arrowSeparator
                        }), (0, a.jsx)(h.default, {
                            className: C.dropdownArrow
                        })]
                    }) : null
                }
                renderDisabledButton(e, t) {
                    let {
                        className: n,
                        fullWidth: s,
                        size: l,
                        customDisabledColor: i,
                        tooltipPosition: r
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: C.disabledButtonWrapper,
                        children: [(0, a.jsx)(o.Button, {
                            className: n,
                            fullWidth: s,
                            size: l,
                            color: null != i ? i : C.disabledButtonColor,
                            disabled: !0,
                            children: e
                        }), (0, a.jsx)(o.Tooltip, {
                            text: t,
                            position: r,
                            children: e => (0, a.jsx)("div", {
                                className: C.disabledButtonOverlay,
                                ...e
                            })
                        })]
                    })
                }
                render() {
                    let {
                        className: e,
                        fullWidth: t,
                        size: n,
                        color: s,
                        isLaunchable: l,
                        isLaunching: r,
                        isRunning: u,
                        isShiny: d,
                        hideNotLaunchable: c
                    } = this.props;
                    if (!l) return c ? null : this.renderDisabledButton(g.default.Messages.GAME_ACTION_BUTTON_PLAY, p.isPlatformEmbedded ? g.default.Messages.GAME_ACTION_BUTTON_GAME_NOT_DETECTED : g.default.Messages.GAME_ACTION_BUTTON_PLAY_DISABLED_DESKTOP_APP);
                    if (u) return this.renderDisabledButton(g.default.Messages.GAME_ACTION_BUTTON_NOW_PLAYING);
                    let f = d ? _.default : o.Button;
                    return (0, a.jsxs)(f, {
                        className: i(C.playButton, e),
                        innerClassName: C.playButtonContents,
                        fullWidth: t,
                        size: n,
                        color: null != s ? s : o.Button.Colors.GREEN,
                        hover: null != s ? o.Button.Hovers.GREEN : o.Button.Hovers.DEFAULT,
                        submitting: r,
                        onClick: this.handleClick,
                        children: [(0, a.jsx)("div", {
                            className: C.buttonText,
                            children: g.default.Messages.GAME_ACTION_BUTTON_PLAY
                        }), this.renderDropdown()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleDropdownClick = e => {
                        e.stopPropagation();
                        let {
                            libraryApplication: t,
                            onDropdownOpen: s,
                            onDropdownClose: l
                        } = this.props;
                        if (null == s || s(e), null == t) throw Error("Unexpected missing libraryApplication");
                        u.openContextMenuLazy(e, async () => {
                            let {
                                default: e
                            } = await n.el("220792").then(n.bind(n, "220792"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                libraryApplication: t,
                                onPlay: this.handleClick
                            })
                        }, {
                            onClose: l
                        })
                    }, this.handleClick = () => {
                        let {
                            applicationId: e,
                            libraryApplication: t,
                            analyticsListSort: n,
                            analyticsListIndex: a
                        } = this.props;
                        I.playApplication(e, t, {
                            analyticsParams: {
                                location: this.analyticsLocation,
                                list_sort: n,
                                list_index: a
                            }
                        })
                    }
                }
            }

            function A(e) {
                let {
                    applicationId: t,
                    libraryApplication: n
                } = e, s = (0, d.useAnalyticsContext)(), [l, i] = (0, r.useStateFromStoresArray)([f.default, c.default, E.default], () => [f.default.isConnected(t) || c.default.isLaunchable(t) || null != n && E.default.isLaunchable(n.id, n.branchId), c.default.launchingGames.has(t)], [t, n]), o = (0, r.useStateFromStores)([m.default], () => new Set(m.default.getRunningVerifiedApplicationIds()).has(t), [t]), u = (0, r.useStateFromStores)([E.default], () => null != n ? E.default.getState(n.id, n.branchId) : null, [n]);
                return (0, a.jsx)(S, {
                    ...e,
                    analyticsContext: s,
                    isLaunchable: l,
                    isLaunching: i,
                    isRunning: o,
                    dispatchState: u
                })
            }
            S.defaultProps = {
                fullWidth: !1,
                size: o.Button.Sizes.LARGE,
                tooltipPosition: "top",
                isShiny: !1,
                hideNotLaunchable: !1
            }
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21903"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                o = n.n(a),
                r = n("817736"),
                i = n.n(r),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                p = n("62843"),
                m = n("315102"),
                I = n("402671"),
                E = n("866190"),
                g = n("115279");
            class v extends l.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: s,
                            animated: l,
                            shouldAnimate: a,
                            isFocused: o,
                            isInteracting: r,
                            size: i = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = g.EMOJI_SIZE_MAP[i];
                        return m.default.getEmojiURL({
                            id: n,
                            animated: o && !0 === l && (!0 === a || u || !0 === r),
                            size: e
                        })
                    }
                    if (null != s) return I.default.getURL(s)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: a,
                        className: r,
                        size: i = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: p,
                        ...m
                    } = this.props, I = this.getSrc();
                    return null == I || "" === I ? (0, s.jsx)("span", {
                        className: o("emoji", "emoji-text"),
                        children: n
                    }) : (a && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, l.createElement)("img", {
                        ...m,
                        key: this.key,
                        src: I,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: o("emoji", r, {
                            jumboable: "jumbo" === i
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            v.defaultProps = {
                isInteracting: !1
            };
            let _ = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, s.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    a = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let s = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == s) return;
                            let l = s[1];
                            if (e.intersectionRatio >= .7) {
                                var a, o;
                                if (-1 !== t.indexOf(l)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                n ? t.unshift(l) : t.push(l), l.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(l); - 1 !== e && (t.splice(e, 1), l.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function o(e) {
                    let t = i.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), a.observe(t))
                }

                function r(e) {
                    let s = i.findDOMNode(e);
                    a.unobserve(s);
                    let l = n.findIndex(t => {
                        let [n, s] = t;
                        return s === e
                    }); - 1 !== l && (n.splice(l, 1), -1 !== (l = t.indexOf(e)) && (t.splice(l, 1), l < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends l.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? o(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: l,
                                allowAnimatedEmoji: a,
                                ...o
                            } = this.props;
                        return (0, s.jsx)(p.MessagesInteractionContext.Consumer, {
                            children: t => (0, s.jsx)(e, {
                                ...o,
                                autoplay: l || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                            })
                        })
                    }
                }
            }(v);

            function x(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    l = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, s.jsx)(_, {
                    ...e,
                    ...n,
                    isFocused: l
                })
            }
        },
        512027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        652453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RawInviteCopyInputConnected: function() {
                    return S
                },
                InviteCopyInput: function() {
                    return y
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                o = n.n(a),
                r = n("498574"),
                i = n("446674"),
                u = n("862337"),
                d = n("77078"),
                c = n("162771"),
                f = n("102985"),
                h = n("599110"),
                p = n("306160"),
                m = n("568734"),
                I = n("354023"),
                E = n("865699"),
                g = n("91366"),
                v = n("49111"),
                _ = n("782340"),
                x = n("435808"),
                N = n("905518"),
                T = n("173791"),
                M = n("926622");
            let S = i.default.connectStores([f.default], () => ({
                    hideValue: f.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: a,
                        onCopy: r,
                        disabled: i
                    } = e, [c, f] = l.useState(!1), [h, m] = l.useState(!1), I = l.useMemo(() => new u.DelayedCall(1e3, () => m(!1)), [m]);
                    return l.useEffect(() => () => {
                        I.cancel()
                    }, [I]), (0, s.jsxs)("div", {
                        className: o(N.input, T.flexJustifyBetween, T.flexCenter, {
                            [N.success]: h,
                            [N.focused]: c
                        }),
                        children: [(0, s.jsx)(d.TextInput, {
                            className: x.copyInput,
                            name: "invite",
                            value: a ? _.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: x.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? f(!0) : null,
                            onBlur: () => n ? f(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": _.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: i
                        }), p.SUPPORTS_COPY ? (0, s.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: h ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: x.copyButton,
                            onClick: () => {
                                m(!0), I.delay(), r(t)
                            },
                            disabled: i,
                            children: h ? _.default.Messages.INVITE_COPIED : _.default.Messages.COPY
                        }) : null]
                    })
                }),
                y = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: a,
                        onClose: i,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: f,
                        inviteFlags: N,
                        setInviteFlags: T,
                        showGuestInviteToggleForCurrentVoiceChannel: y,
                        copyValue: C,
                        changePage: b,
                        inviteChannel: A,
                        source: j,
                        code: O,
                        guildScheduledEvent: k,
                        disabled: R
                    } = e, {
                        maxAge: P,
                        maxUses: L,
                        networkError: U,
                        showVanityURL: V
                    } = u, B = l.useCallback(() => {
                        (0, p.copy)(C), h.default.track(v.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == A ? void 0 : A.id,
                            channel_type: null == A ? void 0 : A.type,
                            location: j,
                            code: O,
                            guild_scheduled_event_id: null == k ? void 0 : k.id
                        })
                    }, [C, A, j, O, k]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(S, {
                            value: C,
                            autoFocus: a,
                            onCopy: B,
                            disabled: R
                        }), f ? (0, s.jsx)("div", {
                            className: x.temporaryMembershipContainerBackground,
                            children: (0, s.jsx)(d.FormSwitch, {
                                className: x.temporaryMembershipContainer,
                                value: (0, m.hasFlag)(N, r.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => T((0, m.setFlag)(N, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: _.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: R,
                                hideBorder: !0,
                                children: y ? _.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : _.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || V ? null : (0, s.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: o(M.marginTop8, x.footerText),
                            children: [(0, I.maxAgeString)(P, L), " ", a ? (0, s.jsx)(d.Anchor, {
                                onClick: () => b(g.InstantInviteModalPages.SETTINGS),
                                children: _.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && a && V ? (0, s.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: o(M.marginTop8, x.footerText),
                            children: [_.default.Messages.INVITE_VANITY_USED, " ", (0, s.jsx)(d.Anchor, {
                                onClick: () => b(g.InstantInviteModalPages.SETTINGS),
                                children: _.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != U ? (0, s.jsx)(E.InviteErrorMessage, {
                            guild: t,
                            error: U,
                            onClose: i
                        }) : null]
                    })
                }
        },
        865699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteErrorMessage: function() {
                    return c
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("77078"),
                o = n("592407"),
                r = n("957255"),
                i = n("49111"),
                u = n("782340"),
                d = n("435808");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, f = t.id, h = l.useCallback(() => {
                    c(), o.default.open(f, i.GuildSettingsSections.INSTANT_INVITES)
                }, [f, c]), p = l.useCallback(e => (0, s.jsx)(a.Clickable, {
                    className: d.errorLink,
                    onClick: h,
                    children: (0, s.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [h]), m = l.useCallback(e => (0, s.jsx)(a.Anchor, {
                    href: i.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, s.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), I = n.code !== i.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(i.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: p,
                    inviteHelpHook: m
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, s.jsx)(a.Text, {
                    className: d.errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: I
                })
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return r
                }
            });
            var s = n("281071"),
                l = n("773336"),
                a = n("50885");
            let o = (() => {
                if (l.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!o && (l.isPlatformEmbedded ? (a.default.copy(e), !0) : s.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return r
                }
            });
            var s = n("884691"),
                l = n("446674"),
                a = n("244201"),
                o = n("471671");

            function r() {
                let {
                    windowId: e
                } = s.useContext(a.default);
                return (0, l.useStateFromStores)([o.default], () => o.default.isFocused(e), [e])
            }
        }
    }
]);
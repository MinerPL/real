(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["69073"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), l.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
            };
            var a = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                l = RegExp("^[^" + s + "]*[" + a + "]"),
                i = RegExp("^[^" + a + "]*[" + s + "]")
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return u
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var a = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                r = (e, t, n) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                d = (e, t) => {
                    for (var n in t || (t = {})) l.call(t, n) && r(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) i.call(t, n) && r(e, n, t[n]);
                    return e
                };
            let o = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => o(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => o(t)(e)
                        }
                    }
                },
                u = (e, t) => (n, a, s) => {
                    let l, i, r = d({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => d(d({}, t), e)
                    }, t);
                    (r.blacklist || r.whitelist) && console.warn("The ".concat(r.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let u = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        l = r.getStorage()
                    } catch (e) {}
                    if (!l) return e(function() {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(r.name, "', the given storage is currently unavailable.")), n(...t)
                    }, a, s);
                    !l.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(r.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let g = o(r.serialize),
                        E = () => {
                            let e;
                            let t = r.partialize(d({}, a()));
                            r.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = r.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), r.blacklist && r.blacklist.forEach(e => delete t[e]);
                            let n = g({
                                state: t,
                                version: r.version
                            }).then(e => l.setItem(r.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        m = s.setState;
                    s.setState = (e, t) => {
                        m(e, t), E()
                    };
                    let h = e(function() {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            n(...t), E()
                        }, a, s),
                        M = () => {
                            var e;
                            if (!l) return;
                            u = !1, c.forEach(e => e(a()));
                            let t = (null == (e = r.onRehydrateStorage) ? void 0 : e.call(r, a())) || void 0;
                            return o(l.getItem.bind(l))(r.name).then(e => {
                                if (e) return r.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === r.version) return e.state;
                                    if (r.migrate) return r.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(i = r.merge(e, null != (t = a()) ? t : h), !0), E()
                            }).then(() => {
                                null == t || t(i, void 0), u = !0, f.forEach(e => e(i))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            r = d(d({}, r), e), e.getStorage && (l = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == l ? void 0 : l.removeItem) || e.call(l, r.name)
                        },
                        rehydrate: () => M(),
                        hasHydrated: () => u,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, M(), i || h
                }
        },
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        828986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("263024"),
                i = n("508229"),
                r = n("404118"),
                d = n("49111"),
                o = n("782340");
            let u = {
                async pinMessage(e, t) {
                    let {
                        id: n,
                        name: s
                    } = e;
                    await l.default.unarchiveThreadIfNecessary(e.id), a.default.put({
                        url: d.Endpoints.PIN(n, t),
                        oldFormErrors: !0
                    }).catch(() => {
                        let t;
                        t = e.isPrivate() ? o.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL
                        }) : o.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL,
                            channelName: s
                        }), r.default.show({
                            title: o.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: t,
                            confirmText: o.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, t) {
                    await l.default.unarchiveThreadIfNecessary(e.id), a.default.delete({
                        url: d.Endpoints.PIN(e.id, t),
                        oldFormErrors: !0
                    }).catch(() => r.default.show({
                        title: o.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                        body: o.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                        confirmText: o.default.Messages.TRY_AGAIN,
                        cancelText: o.default.Messages.CANCEL,
                        onConfirm: u.unpinMessage.bind(u, e, t)
                    }))
                },
                ackPins(e) {
                    s.default.dispatch({
                        type: "CHANNEL_PINS_ACK",
                        channelId: e
                    })
                },
                fetchPins(e) {
                    let t = i.default.getPinnedMessages(e);
                    (null == t || !t.loaded && !t.loading) && (s.default.dispatch({
                        type: "LOAD_PINNED_MESSAGES",
                        channelId: e
                    }), a.default.get({
                        url: d.Endpoints.PINS(e),
                        retries: 2,
                        oldFormErrors: !0
                    }).then(t => {
                        s.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            messages: t.body,
                            channelId: e
                        })
                    }, () => {
                        s.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_FAILURE",
                            channelId: e
                        })
                    }))
                }
            };
            var c = u
        },
        249561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                d = n("828986"),
                o = n("819689"),
                u = n("679653"),
                c = n("390236"),
                f = n("377114"),
                g = n("699473"),
                E = n("27618"),
                m = n("697218"),
                h = n("822332"),
                M = n("568734"),
                p = n("870190"),
                _ = n("49111"),
                S = n("782340"),
                N = n("834476");
            class A extends s.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: s,
                        message: l,
                        showContextMenuHint: i,
                        ...d
                    } = this.props, o = s.type === _.ChannelTypes.GUILD_ANNOUNCEMENT && (0, M.hasFlag)(l.flags, _.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, a.jsx)(h.default, {
                        className: N.spacingTop,
                        children: S.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, p.canDeleteAndReportMessage)(l) && (t = (0, a.jsx)(r.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: N.spacingTop,
                        children: S.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, a.jsx)(c.default.Provider, {
                        value: s.guild_id,
                        children: (0, a.jsxs)(r.ConfirmModal, {
                            header: o ? S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : S.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: S.default.Messages.DELETE,
                            cancelText: S.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...d,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: N.spacing,
                                children: o ? S.default.Messages.DELETE_FOLLOWED_NEWS_BODY : S.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: N.message,
                                children: (0, a.jsx)(g.default, {
                                    channel: s,
                                    message: l,
                                    disableInteraction: !0
                                })
                            }), t, e]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        report: !1
                    }, this.handleDelete = () => {
                        let {
                            report: e
                        } = this.state, {
                            channel: t,
                            message: n
                        } = this.props;
                        e ? (0, f.showReportModalForMessage)(n, () => o.default.deleteMessage(t.id, n.id)) : o.default.deleteMessage(t.id, n.id)
                    }, this.handleToggleReport = e => {
                        this.setState({
                            report: e
                        })
                    }
                }
            }
            var I = {
                confirmPin: function(e, t) {
                    (0, r.openModal)(n => {
                        let s;
                        let l = (0, u.computeChannelName)(e, m.default, E.default);
                        return s = e.isPrivate() ? S.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : S.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: l
                        }), (0, a.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, a.jsxs)(r.ConfirmModal, {
                                header: S.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: S.default.Messages.PIN_CONFIRM,
                                cancelText: S.default.Messages.CANCEL,
                                confirmButtonColor: r.Button.Colors.BRAND,
                                onConfirm: () => d.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    className: N.spacing,
                                    children: s
                                }), (0, a.jsx)("div", {
                                    className: N.message,
                                    children: (0, a.jsx)(g.default, {
                                        channel: e,
                                        message: t,
                                        animateAvatar: !1,
                                        disableInteraction: !0
                                    })
                                })]
                            })
                        })
                    })
                },
                confirmUnpin: function(e, t) {
                    (0, r.openModal)(n => (0, a.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, a.jsxs)(r.ConfirmModal, {
                            header: S.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: S.default.Messages.UNPIN_CONFIRM,
                            cancelText: S.default.Messages.CANCEL,
                            onConfirm: () => d.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: N.spacing,
                                children: S.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: i(N.message, N.spacing),
                                children: (0, a.jsx)(g.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, a.jsx)(h.default, {
                                children: S.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, r.openModal)(s => (0, a.jsx)(A, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...s
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, r.openModal)(s => (0, a.jsx)(r.ConfirmModal, {
                        header: S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: S.default.Messages.CONFIRM,
                        cancelText: S.default.Messages.CANCEL,
                        confirmButtonColor: r.Button.Colors.BRAND,
                        onConfirm: () => o.default.editMessage(e, t, {
                            content: n
                        }),
                        ...s,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: N.spacing,
                            children: S.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
                }
            }
        },
        942055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("759843"),
                l = n("872717"),
                i = n("77078"),
                r = n("363396"),
                d = n("79798"),
                o = n("145131"),
                u = n("701909"),
                c = n("49111"),
                f = n("988268"),
                g = n("782340"),
                E = n("25170"),
                m = n("348044");

            function h(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    channel: h,
                    message: M
                } = e;
                return (0, a.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": "clyde-authorize-modal",
                    size: i.ModalSize.DYNAMIC,
                    impression: {
                        impressionName: s.ImpressionNames.USER_CLYDE_AI_CONSENT_MODAL
                    },
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: E.header,
                        separator: !1,
                        children: [(0, a.jsx)("img", {
                            src: m,
                            className: E.clydeIcon,
                            alt: ""
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-lg/bold",
                            children: g.default.Messages.CLYDE_MODAL_TITLE
                        }), (0, a.jsx)(d.default, {
                            type: f.BotTagTypes.AI
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: E.container,
                        children: [(0, a.jsx)("div", {
                            className: E.divider
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SECTION
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
                                guidelinesURL: c.MarketingURLs.GUIDELINES,
                                privacyPolicyURL: c.MarketingURLs.PRIVACY
                            })
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
                                learnMoreURL: u.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
                            })
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: E.footer,
                        children: [(0, a.jsx)(i.Button, {
                            size: i.ButtonSizes.MEDIUM,
                            look: i.ButtonLooks.BLANK,
                            className: E.cancelButton,
                            onClick: n,
                            children: g.default.Messages.CANCEL
                        }), (0, a.jsx)(i.Button, {
                            size: i.ButtonSizes.MEDIUM,
                            onClick: () => {
                                l.default.put({
                                    url: c.Endpoints.USER_CLYDE_CONSENT,
                                    body: {
                                        consent: !0
                                    }
                                }).then(() => {
                                    (0, r.retrySendMessage)(h, M), n()
                                }).catch(() => {
                                    n()
                                })
                            },
                            children: g.default.Messages.CONTINUE
                        })]
                    })]
                })
            }
        },
        613387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("913144");
            let l = {};
            class i extends a.default.Store {
                getOptions(e) {
                    return l[e]
                }
            }
            i.displayName = "SendMessageOptionsStore";
            var r = new i(s.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (l[t.id] = n), null != t.nonce && t.nonce in l && delete l[t.nonce]
                }
            })
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("819689"),
                s = n("916565");

            function l(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != l.applicationId && (0, s.retryCommandMessage)(t, e, l.applicationId);
                    return
                }
                let {
                    content: i,
                    tts: r,
                    flags: d,
                    nonce: o
                } = t;
                a.default.sendMessage(e.id, {
                    content: i,
                    tts: r,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: o,
                    flags: d,
                    ...l
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return I
                },
                copyId: function() {
                    return x
                },
                copyLink: function() {
                    return T
                },
                deleteMessage: function() {
                    return v
                },
                editMessage: function() {
                    return C
                },
                markMessageUnread: function() {
                    return D
                },
                pinMessage: function() {
                    return O
                },
                publishMessage: function() {
                    return L
                },
                retrySendMessage: function() {
                    return P
                },
                showReactionsModal: function() {
                    return R
                },
                replyToMessage: function() {
                    return y
                },
                createThread: function() {
                    return b
                },
                goToThread: function() {
                    return U
                },
                markMessageAsReminder: function() {
                    return j
                },
                markMessageRemindersAsComplete: function() {
                    return w
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("828986"),
                i = n("819689"),
                r = n("249561"),
                d = n("550762"),
                o = n("592407");
            n("377114");
            var u = n("931318"),
                c = n("529805"),
                f = n("967241"),
                g = n("271938"),
                E = n("42203"),
                m = n("599110"),
                h = n("404008"),
                M = n("306160"),
                p = n("659500"),
                _ = n("613387"),
                S = n("456936"),
                N = n("409058"),
                A = n("49111");

            function I(e) {
                let t = e.getGuildId();
                null != t && o.default.open(t, A.GuildSettingsSections.OVERVIEW)
            }

            function x(e, t, n) {
                (0, M.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function T(e, t) {
                m.default.track(A.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, M.copy)((0, h.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function v(e, t, n) {
                t.state === A.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === A.MessageStates.SEND_FAILED) : r.default.confirmDelete(e, t)
            }

            function C(e, t) {
                i.default.startEditMessage(e.id, t.id, t.content)
            }

            function D(e, t) {
                (0, S.default)(e.id, t.id)
            }

            function O(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? l.default.pinMessage(e, t.id) : r.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? l.default.unpinMessage(e, t.id) : r.default.confirmUnpin(e, t)
            }

            function L(e, t) {
                (0, d.default)(e.id, t.id)
            }

            function P(e, t) {
                (0, N.default)(e, t, void 0, _.default.getOptions(t.id))
            }

            function R(e, t) {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("57155").then(n.bind(n, "57155"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        message: t
                    })
                })
            }

            function y(e, t, n) {
                let a = e.isPrivate(),
                    s = t.author.id === g.default.getId();
                (0, c.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !s,
                    showMentionToggle: !a && !s
                }), p.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.TEXTAREA_FOCUS)
            }

            function b(e, t) {
                (0, f.openThreadSidebarForCreating)(e, t, "Message")
            }

            function U(e, t) {
                let n = E.default.getChannel(t.id);
                null != n && (0, f.openThreadSidebarForViewing)(n)
            }

            function j(e, t) {
                (0, u.addMessageReminders)(t)
            }

            function w(e, t) {
                (0, u.completeMessageReminders)(t.id)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("65597"),
                l = n("880731");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, s.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return i ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("884691"),
                s = n("65597"),
                l = n("526887"),
                i = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(l.ConfettiCannonContext), t = (0, s.default)([i.default], () => i.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = a.useMemo(() => ({
                    fire: (a, s, l) => {
                        var i, r;
                        let d = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(d);
                        e(a, s, o, (null !== (i = null == l ? void 0 : l.count) && void 0 !== i ? i : d.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("803182"),
                s = n("308503"),
                l = n("49111");

            function i(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var r = (0, s.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = i(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: a
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = i(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: a,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return r
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var a = n("299039"),
                s = n("648564"),
                l = n("782340");
            let i = e => a.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = i(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                d = (e, t, n) => {
                    let a = r(e, n);
                    return "0" === a ? l.default.Messages.SEE_THREAD : t.format({
                        count: a
                    })
                },
                o = (e, t) => d(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        508229: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("917351"),
                s = n.n(a),
                l = n("446674"),
                i = n("913144"),
                r = n("692038"),
                d = n("915639"),
                o = n("42203"),
                u = n("26989"),
                c = n("305961"),
                f = n("377253"),
                g = n("27618"),
                E = n("697218");
            let m = {};

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = o.default.getChannel(e),
                    l = null != s ? s.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, r.createMessageRecord)(e)),
                    guildId: l,
                    loaded: n,
                    loading: a
                }
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                delete m[t.id]
            }

            function p() {
                s.forEach(m, e => {
                    s.forEach(e.messages, e => {
                        e.timestamp.locale(d.default.locale)
                    })
                })
            }

            function _() {
                s.forEach(m, e => {
                    e.messages = e.messages.map(e => e.set("blocked", g.default.isBlocked(e.author.id)))
                })
            }
            class S extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, c.default, u.default, f.default, E.default, d.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != m[e] && m[e].loaded
                }
            }
            S.displayName = "ChannelPinsStore";
            var N = new S(i.default, {
                CONNECTION_OPEN: function() {
                    m = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    m = s(m).filter(e => e.guildId !== t.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id;
                    if (null == n) return !1;
                    let a = m[n];
                    if (null == a && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != a) {
                            let l = s.findIndex(a.messages, e => e.id === t);
                            if (l >= 0) {
                                let t = a.messages[l],
                                    s = (0, r.updateMessageRecord)(t, e.message);
                                if (s !== t) {
                                    let e = a.messages.slice();
                                    e[l] = s, m[n].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == a) {
                            a = h(n, [e.message], !1), m[n] = a;
                            return
                        }
                        a.messages = a.messages.slice();
                        let l = s.findIndex(a.messages, e => e.id === t); - 1 === l ? a.messages.unshift((0, r.createMessageRecord)(e.message)) : a.messages[l] = (0, r.updateMessageRecord)(a.messages[l], e.message), m[n] = a
                    } else {
                        if (null == a) return;
                        let e = s.findIndex(a.messages, e => e.id === t);
                        if (-1 === e) return;
                        a.messages = a.messages.slice(), a.messages.splice(e, 1), m[n] = a
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, a = m[n];
                    if (null == a) return !1;
                    let l = s.remove(a.messages, e => e.id === t);
                    if (0 === l.length) return !1;
                    a.messages = a.messages.slice(), m[n] = a
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, a = m[n];
                    null != a && (a.messages = a.messages.filter(e => -1 === t.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    m[t] = h(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e;
                    m[t] = h(t, n, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete m[t]
                },
                USER_SETTINGS_PROTO_UPDATE: p,
                I18N_LOAD_SUCCESS: p,
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                RELATIONSHIP_ADD: _,
                RELATIONSHIP_REMOVE: _
            })
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return o
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return g
                }
            });
            var a = n("597755"),
                s = n.n(a),
                l = n("815157"),
                i = n("271938"),
                r = n("49111");
            let d = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = null != n ? "&format=".concat(n) : "";
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(a)
            }

            function u() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? d : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [d]: "Linux"
                })[u(e)]
            }

            function f() {
                let e = u(),
                    t = e === d ? "tar.gz" : null;
                return o(e, !1, t)
            }

            function g(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        },
        870190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canReportMessage: function() {
                    return d
                },
                canDeleteAndReportMessage: function() {
                    return o
                }
            });
            var a = n("42203"),
                s = n("525065"),
                l = n("957255"),
                i = n("697218"),
                r = n("49111");

            function d(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = i.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function o(e) {
                return null != e && d(e) && function(e) {
                    let t = a.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === r.ChannelTypes.DM || t.type === r.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(r.Permissions.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        let e = s.default.getMemberCount(t.getGuildId());
                        return null != e && e >= 50
                    }
                    return !1
                }(e.getChannelId())
            }
        }
    }
]);
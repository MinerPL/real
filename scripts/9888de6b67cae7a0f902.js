(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5558"], {
        668542: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
            };
            var a = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + s + "]*[" + a + "]"),
                i = RegExp("^[^" + a + "]*[" + s + "]")
        },
        212653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return d
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var a = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                l = (e, t, n) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                u = (e, t) => {
                    for (var n in t || (t = {})) r.call(t, n) && l(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) i.call(t, n) && l(e, n, t[n]);
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
                d = (e, t) => (n, a, s) => {
                    let r, i, l = u({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => u(u({}, t), e)
                    }, t);
                    (l.blacklist || l.whitelist) && console.warn("The ".concat(l.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        r = l.getStorage()
                    } catch (e) {}
                    if (!r) return e(function() {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(l.name, "', the given storage is currently unavailable.")), n(...t)
                    }, a, s);
                    !r.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(l.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let E = o(l.serialize),
                        _ = () => {
                            let e;
                            let t = l.partialize(u({}, a()));
                            l.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = l.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), l.blacklist && l.blacklist.forEach(e => delete t[e]);
                            let n = E({
                                state: t,
                                version: l.version
                            }).then(e => r.setItem(l.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        g = s.setState;
                    s.setState = (e, t) => {
                        g(e, t), _()
                    };
                    let m = e(function() {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            n(...t), _()
                        }, a, s),
                        N = () => {
                            var e;
                            if (!r) return;
                            d = !1, c.forEach(e => e(a()));
                            let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, a())) || void 0;
                            return o(r.getItem.bind(r))(l.name).then(e => {
                                if (e) return l.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === l.version) return e.state;
                                    if (l.migrate) return l.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(i = l.merge(e, null != (t = a()) ? t : m), !0), _()
                            }).then(() => {
                                null == t || t(i, void 0), d = !0, f.forEach(e => e(i))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            l = u(u({}, l), e), e.getStorage && (r = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == r ? void 0 : r.removeItem) || e.call(r, l.name)
                        },
                        rehydrate: () => N(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, N(), i || m
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
            var a = n("990746"),
                s = n("913144"),
                r = n("263024"),
                i = n("508229"),
                l = n("404118"),
                u = n("49111"),
                o = n("782340");
            let d = {
                async pinMessage(e, t) {
                    let {
                        id: n,
                        name: s
                    } = e;
                    await r.default.unarchiveThreadIfNecessary(e.id), a.default.put({
                        url: u.Endpoints.PIN(n, t),
                        oldFormErrors: !0
                    }).catch(() => {
                        let t;
                        t = e.isPrivate() ? o.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: u.MAX_PINS_PER_CHANNEL
                        }) : o.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: u.MAX_PINS_PER_CHANNEL,
                            channelName: s
                        }), l.default.show({
                            title: o.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: t,
                            confirmText: o.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, t) {
                    await r.default.unarchiveThreadIfNecessary(e.id), a.default.delete({
                        url: u.Endpoints.PIN(e.id, t),
                        oldFormErrors: !0
                    }).catch(() => l.default.show({
                        title: o.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                        body: o.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                        confirmText: o.default.Messages.TRY_AGAIN,
                        cancelText: o.default.Messages.CANCEL,
                        onConfirm: d.unpinMessage.bind(d, e, t)
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
                        url: u.Endpoints.PINS(e),
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
            var c = d
        },
        249561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("920040"),
                s = n("773670"),
                r = n("575482"),
                i = n.n(r),
                l = n("77078"),
                u = n("828986"),
                o = n("819689"),
                d = n("679653"),
                c = n("390236"),
                f = n("377114"),
                E = n("699473"),
                _ = n("27618"),
                g = n("697218"),
                m = n("822332"),
                N = n("568734"),
                S = n("870190"),
                M = n("49111"),
                A = n("782340"),
                I = n("812777");
            class h extends s.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: s,
                        message: r,
                        showContextMenuHint: i,
                        ...u
                    } = this.props, o = s.type === M.ChannelTypes.GUILD_ANNOUNCEMENT && (0, N.hasFlag)(r.flags, M.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, a.jsx)(m.default, {
                        className: I.spacingTop,
                        children: A.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, S.canDeleteAndReportMessage)(r) && (t = (0, a.jsx)(l.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: I.spacingTop,
                        children: A.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, a.jsx)(c.default.Provider, {
                        value: s.guild_id,
                        children: (0, a.jsxs)(l.ConfirmModal, {
                            header: o ? A.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : A.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: A.default.Messages.DELETE,
                            cancelText: A.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...u,
                            children: [(0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: I.spacing,
                                children: o ? A.default.Messages.DELETE_FOLLOWED_NEWS_BODY : A.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: I.message,
                                children: (0, a.jsx)(E.default, {
                                    channel: s,
                                    message: r,
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
            var p = {
                confirmPin: function(e, t) {
                    (0, l.openModal)(n => {
                        let s;
                        let r = (0, d.computeChannelName)(e, g.default, _.default);
                        return s = e.isPrivate() ? A.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : A.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: r
                        }), (0, a.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, a.jsxs)(l.ConfirmModal, {
                                header: A.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: A.default.Messages.PIN_CONFIRM,
                                cancelText: A.default.Messages.CANCEL,
                                confirmButtonColor: l.Button.Colors.BRAND,
                                onConfirm: () => u.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, a.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: I.spacing,
                                    children: s
                                }), (0, a.jsx)("div", {
                                    className: I.message,
                                    children: (0, a.jsx)(E.default, {
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
                    (0, l.openModal)(n => (0, a.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, a.jsxs)(l.ConfirmModal, {
                            header: A.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: A.default.Messages.UNPIN_CONFIRM,
                            cancelText: A.default.Messages.CANCEL,
                            onConfirm: () => u.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: I.spacing,
                                children: A.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: i(I.message, I.spacing),
                                children: (0, a.jsx)(E.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, a.jsx)(m.default, {
                                children: A.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, l.openModal)(s => (0, a.jsx)(h, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...s
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, l.openModal)(s => (0, a.jsx)(l.ConfirmModal, {
                        header: A.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: A.default.Messages.CONFIRM,
                        cancelText: A.default.Messages.CANCEL,
                        confirmButtonColor: l.Button.Colors.BRAND,
                        onConfirm: () => o.default.editMessage(e, t, {
                            content: n
                        }),
                        ...s,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: I.spacing,
                            children: A.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
                }
            }
        },
        942055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("64379"),
                r = n("990746"),
                i = n("77078"),
                l = n("363396"),
                u = n("79798"),
                o = n("145131"),
                d = n("701909"),
                c = n("49111"),
                f = n("988268"),
                E = n("782340"),
                _ = n("765686"),
                g = n("348044");

            function m(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    channel: m,
                    message: N
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
                        className: _.header,
                        separator: !1,
                        children: [(0, a.jsx)("img", {
                            src: g,
                            className: _.clydeIcon,
                            alt: ""
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-lg/bold",
                            children: E.default.Messages.CLYDE_MODAL_TITLE
                        }), (0, a.jsx)(u.default, {
                            type: f.BotTagTypes.AI
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: _.container,
                        children: [(0, a.jsx)("div", {
                            className: _.divider
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: _.subheading,
                            children: E.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: E.default.Messages.CLYDE_MODAL_ABOUT_SECTION
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: _.subheading,
                            children: E.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: E.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
                                guidelinesURL: c.MarketingURLs.GUIDELINES,
                                privacyPolicyURL: c.MarketingURLs.PRIVACY
                            })
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: _.subheading,
                            children: E.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: E.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            className: _.subheading,
                            children: E.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
                                learnMoreURL: d.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
                            })
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: _.footer,
                        children: [(0, a.jsx)(i.Button, {
                            size: i.ButtonSizes.MEDIUM,
                            look: i.ButtonLooks.BLANK,
                            className: _.cancelButton,
                            onClick: n,
                            children: E.default.Messages.CANCEL
                        }), (0, a.jsx)(i.Button, {
                            size: i.ButtonSizes.MEDIUM,
                            onClick: () => {
                                r.default.put({
                                    url: c.Endpoints.USER_CLYDE_CONSENT,
                                    body: {
                                        consent: !0
                                    }
                                }).then(() => {
                                    (0, l.retrySendMessage)(m, N), n()
                                }).catch(() => {
                                    n()
                                })
                            },
                            children: E.default.Messages.CONTINUE
                        })]
                    })]
                })
            }
        },
        613387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("498225"),
                s = n("913144");
            let r = {};
            class i extends a.default.Store {
                getOptions(e) {
                    return r[e]
                }
            }
            i.displayName = "SendMessageOptionsStore";
            var l = new i(s.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (r[t.id] = n), null != t.nonce && t.nonce in r && delete r[t.nonce]
                }
            })
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("819689"),
                s = n("916565");

            function r(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != r.applicationId && (0, s.retryCommandMessage)(t, e, r.applicationId);
                    return
                }
                let {
                    content: i,
                    tts: l,
                    flags: u,
                    nonce: o
                } = t;
                a.default.sendMessage(e.id, {
                    content: i,
                    tts: l,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: o,
                    flags: u,
                    ...r
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return p
                },
                copyId: function() {
                    return T
                },
                copyLink: function() {
                    return O
                },
                deleteMessage: function() {
                    return D
                },
                editMessage: function() {
                    return L
                },
                markMessageUnread: function() {
                    return v
                },
                pinMessage: function() {
                    return C
                },
                publishMessage: function() {
                    return R
                },
                retrySendMessage: function() {
                    return x
                },
                showReactionsModal: function() {
                    return P
                },
                replyToMessage: function() {
                    return U
                },
                createThread: function() {
                    return y
                },
                goToThread: function() {
                    return b
                },
                markMessageAsReminder: function() {
                    return G
                },
                markMessageRemindersAsComplete: function() {
                    return j
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("77078"),
                r = n("828986"),
                i = n("819689"),
                l = n("249561"),
                u = n("550762"),
                o = n("592407");
            n("377114");
            var d = n("931318"),
                c = n("529805"),
                f = n("967241"),
                E = n("271938"),
                _ = n("42203"),
                g = n("599110"),
                m = n("404008"),
                N = n("306160"),
                S = n("659500"),
                M = n("613387"),
                A = n("456936"),
                I = n("409058"),
                h = n("49111");

            function p(e) {
                let t = e.getGuildId();
                null != t && o.default.open(t, h.GuildSettingsSections.OVERVIEW)
            }

            function T(e, t, n) {
                (0, N.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function O(e, t) {
                g.default.track(h.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, N.copy)((0, m.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function D(e, t, n) {
                t.state === h.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === h.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
            }

            function L(e, t) {
                i.default.startEditMessage(e.id, t.id, t.content)
            }

            function v(e, t) {
                (0, A.default)(e.id, t.id)
            }

            function C(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? r.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? r.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
            }

            function R(e, t) {
                (0, u.default)(e.id, t.id)
            }

            function x(e, t) {
                (0, I.default)(e, t, void 0, M.default.getOptions(t.id))
            }

            function P(e, t) {
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

            function U(e, t, n) {
                let a = e.isPrivate(),
                    s = t.author.id === E.default.getId();
                (0, c.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !s,
                    showMentionToggle: !a && !s
                }), S.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.TEXTAREA_FOCUS)
            }

            function y(e, t) {
                (0, f.openThreadSidebarForCreating)(e, t, "Message")
            }

            function b(e, t) {
                let n = _.default.getChannel(t.id);
                null != n && (0, f.openThreadSidebarForViewing)(n)
            }

            function G(e, t) {
                (0, d.addMessageReminders)(t)
            }

            function j(e, t) {
                (0, d.completeMessageReminders)(t.id)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("744196"),
                r = n("719375");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, s.default)([r.default], () => r.default.isEnabled({
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
                    return l
                }
            });
            var a = n("773670"),
                s = n("744196"),
                r = n("526887"),
                i = n("719375");

            function l() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(r.ConfettiCannonContext), t = (0, s.default)([i.default], () => i.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), l = a.useMemo(() => ({
                    fire: (a, s, r) => {
                        var i, l;
                        let u = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(u);
                        e(a, s, o, (null !== (i = null == r ? void 0 : r.count) && void 0 !== i ? i : u.confettiCount) * (null !== (l = null == r ? void 0 : r.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return l
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("830841"),
                s = n("710835"),
                r = n("49111");

            function i(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: r.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === r.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: r.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var l = (0, s.default)(e => ({
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
                    return l
                },
                formatMessageCountLabel: function() {
                    return o
                }
            });
            var a = n("299039"),
                s = n("648564"),
                r = n("782340");
            let i = e => a.default.compare("992549565104128000", e) > -1,
                l = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = i(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                u = (e, t, n) => {
                    let a = l(e, n);
                    return "0" === a ? r.default.Messages.SEE_THREAD : t.format({
                        count: a
                    })
                },
                o = (e, t) => u(e, r.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        781782: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodActionType: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE", s[s.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL", s[s.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED", s[s.QUARANTINE_USER = 4] = "QUARANTINE_USER"
        },
        336388: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodBlockProfileUpdateMessageEmbedKeys: function() {
                    return a
                }
            }), (s = a || (a = {})).NICKNAME_UPDATE = "nickname_update", s.NICKNAME_RESET = "nickname_reset"
        },
        742689: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodEventType: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.UNKNOWN = 0] = "UNKNOWN", s[s.MESSAGE_SEND = 1] = "MESSAGE_SEND", s[s.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
        },
        413273: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodMessageEmbedKeys: function() {
                    return a
                }
            }), (s = a || (a = {})).RULE_NAME = "rule_name", s.CHANNEL_ID = "channel_id", s.DECISION_ID = "decision_id", s.KEYWORD = "keyword", s.KEYWORD_MATCHED_CONTENT = "keyword_matched_content", s.FLAGGED_MESSAGE_ID = "flagged_message_id", s.TIMEOUT_DURATION = "timeout_duration", s.QUARANTINE_USER = "quarantine_user", s.QUARANTINE_USER_ACTION = "quarantine_user_action", s.DECISION_REASON = "decision_reason", s.ALERT_ACTIONS_EXECUTION = "alert_actions_execution", s.QUARANTINE_EVENT = "quarantine_event", s.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type", s.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"
        },
        320480: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodNotificationEmbedKeys: function() {
                    return a
                }
            }), (s = a || (a = {})).JOIN_ATTEMPTS = "join_attempts", s.RAID_DATETIME = "raid_datetime", s.DMS_SENT = "dms_sent", s.RAID_TYPE = "raid_type", s.RESOLVED_REASON = "resolved_reason"
        },
        323205: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodQuarantineEventMessageEmbedKeys: function() {
                    return a
                }
            }), (s = a || (a = {})).MESSAGE_SEND = "message_send", s.GUILD_JOIN = "guild_join", s.USERNAME_UPDATE = "username_update"
        },
        647767: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodQuarantineUserActionMessageEmbedKeys: function() {
                    return a
                }
            }), (s = a || (a = {})).BLOCK_PROFILE_UPDATE = "block_profile_update", s.QUARANTINE_USER = "quarantine_user", s.BLOCK_GUEST_JOIN = "block_guest_join"
        },
        513586: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodQuarantineUserMessageEmbedKeys: function() {
                    return a
                }
            }), (s = a || (a = {})).BIO = "bio", s.USERNAME = "username", s.NICKNAME = "nickname", s.GLOBAL_NAME = "display_name"
        },
        405938: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                AutomodTriggerType: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.KEYWORD = 1] = "KEYWORD", s[s.SPAM_LINK = 2] = "SPAM_LINK", s[s.ML_SPAM = 3] = "ML_SPAM", s[s.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST", s[s.MENTION_SPAM = 5] = "MENTION_SPAM", s[s.USER_PROFILE = 6] = "USER_PROFILE", s[s.SERVER_POLICY = 7] = "SERVER_POLICY"
        },
        757364: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", s[s.IS_VIEWED = 2] = "IS_VIEWED", s[s.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        799271: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.UNKNOWN = 0] = "UNKNOWN", s[s.DEFAULT = 1] = "DEFAULT", s[s.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        },
        403809: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                SnowflakeSelectDefaultValueTypes: function() {
                    return a
                }
            }), (s = a || (a = {})).USER = "user", s.ROLE = "role", s.CHANNEL = "channel"
        },
        508229: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("427964"),
                s = n.n(a),
                r = n("498225"),
                i = n("913144"),
                l = n("692038"),
                u = n("915639"),
                o = n("42203"),
                d = n("26989"),
                c = n("305961"),
                f = n("377253"),
                E = n("27618"),
                _ = n("697218");
            let g = {};

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = o.default.getChannel(e),
                    r = null != s ? s.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, l.createMessageRecord)(e)),
                    guildId: r,
                    loaded: n,
                    loading: a
                }
            }

            function N(e) {
                let {
                    channel: t
                } = e;
                delete g[t.id]
            }

            function S() {
                s.forEach(g, e => {
                    s.forEach(e.messages, e => {
                        e.timestamp.locale(u.default.locale)
                    })
                })
            }

            function M() {
                s.forEach(g, e => {
                    e.messages = e.messages.map(e => e.set("blocked", E.default.isBlocked(e.author.id)))
                })
            }
            class A extends r.default.Store {
                initialize() {
                    this.waitFor(o.default, c.default, d.default, f.default, _.default, u.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = g[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != g[e] && g[e].loaded
                }
            }
            A.displayName = "ChannelPinsStore";
            var I = new A(i.default, {
                CONNECTION_OPEN: function() {
                    g = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    g = s(g).filter(e => e.guildId !== t.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id;
                    if (null == n) return !1;
                    let a = g[n];
                    if (null == a && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != a) {
                            let r = s.findIndex(a.messages, e => e.id === t);
                            if (r >= 0) {
                                let t = a.messages[r],
                                    s = (0, l.updateMessageRecord)(t, e.message);
                                if (s !== t) {
                                    let e = a.messages.slice();
                                    e[r] = s, g[n].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == a) {
                            a = m(n, [e.message], !1), g[n] = a;
                            return
                        }
                        a.messages = a.messages.slice();
                        let r = s.findIndex(a.messages, e => e.id === t); - 1 === r ? a.messages.unshift((0, l.createMessageRecord)(e.message)) : a.messages[r] = (0, l.updateMessageRecord)(a.messages[r], e.message), g[n] = a
                    } else {
                        if (null == a) return;
                        let e = s.findIndex(a.messages, e => e.id === t);
                        if (-1 === e) return;
                        a.messages = a.messages.slice(), a.messages.splice(e, 1), g[n] = a
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, a = g[n];
                    if (null == a) return !1;
                    let r = s.remove(a.messages, e => e.id === t);
                    if (0 === r.length) return !1;
                    a.messages = a.messages.slice(), g[n] = a
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, a = g[n];
                    null != a && (a.messages = a.messages.filter(e => -1 === t.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    g[t] = m(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e;
                    g[t] = m(t, n, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete g[t]
                },
                USER_SETTINGS_PROTO_UPDATE: S,
                I18N_LOAD_SUCCESS: S,
                CHANNEL_DELETE: N,
                THREAD_DELETE: N,
                RELATIONSHIP_ADD: M,
                RELATIONSHIP_REMOVE: M
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var a, s, r = n("920040");
            n("773670");
            var i = n("575482"),
                l = n.n(i),
                u = n("77078"),
                o = n("36694"),
                d = n("381546"),
                c = n("68238"),
                f = n("423487"),
                E = n("866821");
            (a = s || (s = {}))[a.WARNING = 0] = "WARNING", a[a.INFO = 1] = "INFO", a[a.ERROR = 2] = "ERROR", a[a.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: a,
                    textColor: i = "text-normal",
                    textVariant: _ = "text-sm/medium"
                } = e, g = function(e) {
                    switch (e) {
                        case s.WARNING:
                            return f.default;
                        case s.INFO:
                            return c.default;
                        case s.ERROR:
                            return d.default;
                        case s.POSITIVE:
                            return o.default
                    }
                }(n), m = function(e) {
                    switch (e) {
                        case s.WARNING:
                            return E.warning;
                        case s.INFO:
                            return E.info;
                        case s.ERROR:
                            return E.error;
                        case s.POSITIVE:
                            return E.positive
                    }
                }(n);
                return (0, r.jsxs)("div", {
                    className: l(E.container, m, a),
                    children: [(0, r.jsx)("div", {
                        className: E.iconDiv,
                        children: (0, r.jsx)(g, {
                            className: E.icon
                        })
                    }), (0, r.jsx)(u.Text, {
                        className: E.text,
                        color: i,
                        variant: _,
                        children: t
                    })]
                })
            }
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040"),
                s = n("773670"),
                r = n("575482"),
                i = n.n(r),
                l = n("77078"),
                u = n("782340"),
                o = n("411796");
            let d = {
                BLOCK: o.block,
                INLINE: o.inline
            };
            class c extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = d.BLOCK,
                        style: r
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: i(t, s),
                        style: r,
                        children: [(0, a.jsxs)(l.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: o.pro,
                            children: [u.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(l.Text, {
                            className: i(o.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = d;
            var f = c
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
                    return E
                }
            });
            var a = n("892445"),
                s = n.n(a),
                r = n("568235"),
                i = n("271938"),
                l = n("49111");
            let u = "linux";

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = null != n ? "&format=".concat(n) : "";
                return "".concat(l.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(a)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d(),
                    t = e === u ? "tar.gz" : null;
                return o(e, !1, t)
            }

            function E(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, r.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
                        });
                    case "Android":
                        return (0, r.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, r.generateAttemptId)()
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
                    return u
                },
                canDeleteAndReportMessage: function() {
                    return o
                }
            });
            var a = n("42203"),
                s = n("525065"),
                r = n("957255"),
                i = n("697218"),
                l = n("49111");

            function u(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = i.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function o(e) {
                return null != e && u(e) && function(e) {
                    let t = a.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === l.ChannelTypes.DM || t.type === l.ChannelTypes.GROUP_DM) return !0;
                    if (r.default.canWithPartialContext(l.Permissions.MANAGE_MESSAGES, {
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
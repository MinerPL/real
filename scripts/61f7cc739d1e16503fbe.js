(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84335"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), i.test(e)) ? "rtl" : r.test(e) ? "ltr" : "neutral"
            };
            var a = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                i = RegExp("^[^" + s + "]*[" + a + "]"),
                r = RegExp("^[^" + a + "]*[" + s + "]")
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return o
                }
            });
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var a = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable,
                l = (e, t, n) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                d = (e, t) => {
                    for (var n in t || (t = {})) i.call(t, n) && l(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) r.call(t, n) && l(e, n, t[n]);
                    return e
                };
            let u = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => u(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => u(t)(e)
                        }
                    }
                },
                o = (e, t) => (n, a, s) => {
                    let i, r, l = d({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => d(d({}, t), e)
                    }, t);
                    (l.blacklist || l.whitelist) && console.warn("The ".concat(l.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let o = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        i = l.getStorage()
                    } catch (e) {}
                    if (!i) return e(function() {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(l.name, "', the given storage is currently unavailable.")), n(...t)
                    }, a, s);
                    !i.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(l.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let g = u(l.serialize),
                        E = () => {
                            let e;
                            let t = l.partialize(d({}, a()));
                            l.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = l.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), l.blacklist && l.blacklist.forEach(e => delete t[e]);
                            let n = g({
                                state: t,
                                version: l.version
                            }).then(e => i.setItem(l.name, e)).catch(t => {
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
                        p = () => {
                            var e;
                            if (!i) return;
                            o = !1, c.forEach(e => e(a()));
                            let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, a())) || void 0;
                            return u(i.getItem.bind(i))(l.name).then(e => {
                                if (e) return l.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === l.version) return e.state;
                                    if (l.migrate) return l.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(r = l.merge(e, null != (t = a()) ? t : h), !0), E()
                            }).then(() => {
                                null == t || t(r, void 0), o = !0, f.forEach(e => e(r))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            l = d(d({}, l), e), e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == i ? void 0 : i.removeItem) || e.call(i, l.name)
                        },
                        rehydrate: () => p(),
                        hasHydrated: () => o,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, p(), r || h
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
                i = n("263024"),
                r = n("508229"),
                l = n("404118"),
                d = n("49111"),
                u = n("782340");
            let o = {
                async pinMessage(e, t) {
                    let {
                        id: n,
                        name: s
                    } = e;
                    await i.default.unarchiveThreadIfNecessary(e.id), a.default.put({
                        url: d.Endpoints.PIN(n, t),
                        oldFormErrors: !0
                    }).catch(() => {
                        let t;
                        t = e.isPrivate() ? u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL
                        }) : u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL,
                            channelName: s
                        }), l.default.show({
                            title: u.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: t,
                            confirmText: u.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, t) {
                    await i.default.unarchiveThreadIfNecessary(e.id), a.default.delete({
                        url: d.Endpoints.PIN(e.id, t),
                        oldFormErrors: !0
                    }).catch(() => l.default.show({
                        title: u.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                        body: u.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                        confirmText: u.default.Messages.TRY_AGAIN,
                        cancelText: u.default.Messages.CANCEL,
                        onConfirm: o.unpinMessage.bind(o, e, t)
                    }))
                },
                ackPins(e) {
                    s.default.dispatch({
                        type: "CHANNEL_PINS_ACK",
                        channelId: e
                    })
                },
                fetchPins(e) {
                    let t = r.default.getPinnedMessages(e);
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
            var c = o
        },
        249561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                r = n.n(i),
                l = n("77078"),
                d = n("828986"),
                u = n("819689"),
                o = n("679653"),
                c = n("390236"),
                f = n("377114"),
                g = n("699473"),
                E = n("27618"),
                m = n("697218"),
                h = n("822332"),
                p = n("568734"),
                M = n("870190"),
                N = n("49111"),
                _ = n("782340"),
                S = n("834476");
            class I extends s.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: s,
                        message: i,
                        showContextMenuHint: r,
                        ...d
                    } = this.props, u = s.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, p.hasFlag)(i.flags, N.MessageFlags.CROSSPOSTED);
                    return r && (e = (0, a.jsx)(h.default, {
                        className: S.spacingTop,
                        children: _.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, M.canDeleteAndReportMessage)(i) && (t = (0, a.jsx)(l.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: S.spacingTop,
                        children: _.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, a.jsx)(c.default.Provider, {
                        value: s.guild_id,
                        children: (0, a.jsxs)(l.ConfirmModal, {
                            header: u ? _.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : _.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: _.default.Messages.DELETE,
                            cancelText: _.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...d,
                            children: [(0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: S.spacing,
                                children: u ? _.default.Messages.DELETE_FOLLOWED_NEWS_BODY : _.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: S.message,
                                children: (0, a.jsx)(g.default, {
                                    channel: s,
                                    message: i,
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
                        e ? (0, f.showReportModalForMessage)(n, () => u.default.deleteMessage(t.id, n.id)) : u.default.deleteMessage(t.id, n.id)
                    }, this.handleToggleReport = e => {
                        this.setState({
                            report: e
                        })
                    }
                }
            }
            var A = {
                confirmPin: function(e, t) {
                    (0, l.openModal)(n => {
                        let s;
                        let i = (0, o.computeChannelName)(e, m.default, E.default);
                        return s = e.isPrivate() ? _.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : _.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: i
                        }), (0, a.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, a.jsxs)(l.ConfirmModal, {
                                header: _.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: _.default.Messages.PIN_CONFIRM,
                                cancelText: _.default.Messages.CANCEL,
                                confirmButtonColor: l.Button.Colors.BRAND,
                                onConfirm: () => d.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, a.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: S.spacing,
                                    children: s
                                }), (0, a.jsx)("div", {
                                    className: S.message,
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
                    (0, l.openModal)(n => (0, a.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, a.jsxs)(l.ConfirmModal, {
                            header: _.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: _.default.Messages.UNPIN_CONFIRM,
                            cancelText: _.default.Messages.CANCEL,
                            onConfirm: () => d.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: S.spacing,
                                children: _.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: r(S.message, S.spacing),
                                children: (0, a.jsx)(g.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, a.jsx)(h.default, {
                                children: _.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, l.openModal)(s => (0, a.jsx)(I, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...s
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, l.openModal)(s => (0, a.jsx)(l.ConfirmModal, {
                        header: _.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: _.default.Messages.CONFIRM,
                        cancelText: _.default.Messages.CANCEL,
                        confirmButtonColor: l.Button.Colors.BRAND,
                        onConfirm: () => u.default.editMessage(e, t, {
                            content: n
                        }),
                        ...s,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: S.spacing,
                            children: _.default.Messages.EDIT_FOLLOWED_NEWS_BODY
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
                i = n("872717"),
                r = n("77078"),
                l = n("363396"),
                d = n("79798"),
                u = n("145131"),
                o = n("701909"),
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
                    message: p
                } = e;
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": "clyde-authorize-modal",
                    size: r.ModalSize.DYNAMIC,
                    impression: {
                        impressionName: s.ImpressionNames.USER_CLYDE_AI_CONSENT_MODAL
                    },
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: E.header,
                        separator: !1,
                        children: [(0, a.jsx)("img", {
                            src: m,
                            className: E.clydeIcon,
                            alt: ""
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-lg/bold",
                            children: g.default.Messages.CLYDE_MODAL_TITLE
                        }), (0, a.jsx)(d.default, {
                            type: f.BotTagTypes.AI
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: E.container,
                        children: [(0, a.jsx)("div", {
                            className: E.divider
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SECTION
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
                                guidelinesURL: c.MarketingURLs.GUIDELINES,
                                privacyPolicyURL: c.MarketingURLs.PRIVACY
                            })
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
                                learnMoreURL: o.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
                            })
                        })]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: E.footer,
                        children: [(0, a.jsx)(r.Button, {
                            size: r.ButtonSizes.MEDIUM,
                            look: r.ButtonLooks.BLANK,
                            className: E.cancelButton,
                            onClick: n,
                            children: g.default.Messages.CANCEL
                        }), (0, a.jsx)(r.Button, {
                            size: r.ButtonSizes.MEDIUM,
                            onClick: () => {
                                i.default.put({
                                    url: c.Endpoints.USER_CLYDE_CONSENT,
                                    body: {
                                        consent: !0
                                    }
                                }).then(() => {
                                    (0, l.retrySendMessage)(h, p), n()
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
                    return l
                }
            });
            var a = n("446674"),
                s = n("913144");
            let i = {};
            class r extends a.default.Store {
                getOptions(e) {
                    return i[e]
                }
            }
            r.displayName = "SendMessageOptionsStore";
            var l = new r(s.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (i[t.id] = n), null != t.nonce && t.nonce in i && delete i[t.nonce]
                }
            })
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("819689"),
                s = n("916565");

            function i(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != i.applicationId && (0, s.retryCommandMessage)(t, e, i.applicationId);
                    return
                }
                let {
                    content: r,
                    tts: l,
                    flags: d,
                    nonce: u
                } = t;
                a.default.sendMessage(e.id, {
                    content: r,
                    tts: l,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: u,
                    flags: d,
                    ...i
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return S
                },
                copyId: function() {
                    return I
                },
                copyLink: function() {
                    return A
                },
                deleteMessage: function() {
                    return x
                },
                editMessage: function() {
                    return v
                },
                markMessageUnread: function() {
                    return T
                },
                pinMessage: function() {
                    return O
                },
                publishMessage: function() {
                    return C
                },
                retrySendMessage: function() {
                    return D
                },
                replyToMessage: function() {
                    return L
                },
                createThread: function() {
                    return R
                },
                goToThread: function() {
                    return P
                },
                markMessageAsReminder: function() {
                    return y
                },
                markMessageRemindersAsComplete: function() {
                    return b
                }
            }), n("37983"), n("884691"), n("77078");
            var a = n("828986"),
                s = n("819689"),
                i = n("249561"),
                r = n("550762"),
                l = n("592407");
            n("377114");
            var d = n("931318"),
                u = n("529805"),
                o = n("967241"),
                c = n("271938"),
                f = n("42203"),
                g = n("599110"),
                E = n("404008"),
                m = n("306160"),
                h = n("659500"),
                p = n("613387"),
                M = n("456936"),
                N = n("409058"),
                _ = n("49111");

            function S(e) {
                let t = e.getGuildId();
                null != t && l.default.open(t, _.GuildSettingsSections.OVERVIEW)
            }

            function I(e, t, n) {
                (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function A(e, t) {
                g.default.track(_.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, m.copy)((0, E.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function x(e, t, n) {
                t.state === _.MessageStates.SEND_FAILED || n.shiftKey ? s.default.deleteMessage(e.id, t.id, t.state === _.MessageStates.SEND_FAILED) : i.default.confirmDelete(e, t)
            }

            function v(e, t) {
                s.default.startEditMessage(e.id, t.id, t.content)
            }

            function T(e, t) {
                (0, M.default)(e.id, t.id)
            }

            function O(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? a.default.pinMessage(e, t.id) : i.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? a.default.unpinMessage(e, t.id) : i.default.confirmUnpin(e, t)
            }

            function C(e, t) {
                (0, r.default)(e.id, t.id)
            }

            function D(e, t) {
                (0, N.default)(e, t, void 0, p.default.getOptions(t.id))
            }

            function L(e, t, n) {
                let a = e.isPrivate(),
                    s = t.author.id === c.default.getId();
                (0, u.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !s,
                    showMentionToggle: !a && !s
                }), h.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.TEXTAREA_FOCUS)
            }

            function R(e, t) {
                (0, o.openThreadSidebarForCreating)(e, t, "Message")
            }

            function P(e, t) {
                let n = f.default.getChannel(t.id);
                null != n && (0, o.openThreadSidebarForViewing)(n)
            }

            function y(e, t) {
                (0, d.addMessageReminders)(t)
            }

            function b(e, t) {
                (0, d.completeMessageReminders)(t.id)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("65597"),
                i = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, s.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, a.jsx)(a.Fragment, {
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
            var a = n("884691"),
                s = n("65597"),
                i = n("526887"),
                r = n("880731");

            function l() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(i.ConfettiCannonContext), t = (0, s.default)([r.default], () => r.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), l = a.useMemo(() => ({
                    fire: (a, s, i) => {
                        var r, l;
                        let d = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            u = n(d);
                        e(a, s, u, (null !== (r = null == i ? void 0 : i.count) && void 0 !== r ? r : d.confettiCount) * (null !== (l = null == i ? void 0 : i.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == i ? void 0 : i.sprite
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
            var a = n("803182"),
                s = n("308503"),
                i = n("49111");

            function r(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === i.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
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
                    } = r(t);
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
                    } = r(t);
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
                    return u
                }
            });
            var a = n("299039"),
                s = n("648564"),
                i = n("782340");
            let r = e => a.default.compare("992549565104128000", e) > -1,
                l = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = r(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                d = (e, t, n) => {
                    let a = l(e, n);
                    return "0" === a ? i.default.Messages.SEE_THREAD : t.format({
                        count: a
                    })
                },
                u = (e, t) => d(e, i.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        508229: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("917351"),
                s = n.n(a),
                i = n("446674"),
                r = n("913144"),
                l = n("692038"),
                d = n("915639"),
                u = n("42203"),
                o = n("26989"),
                c = n("305961"),
                f = n("377253"),
                g = n("27618"),
                E = n("697218");
            let m = {};

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = u.default.getChannel(e),
                    i = null != s ? s.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, l.createMessageRecord)(e)),
                    guildId: i,
                    loaded: n,
                    loading: a
                }
            }

            function p(e) {
                let {
                    channel: t
                } = e;
                delete m[t.id]
            }

            function M() {
                s.forEach(m, e => {
                    s.forEach(e.messages, e => {
                        e.timestamp.locale(d.default.locale)
                    })
                })
            }

            function N() {
                s.forEach(m, e => {
                    e.messages = e.messages.map(e => e.set("blocked", g.default.isBlocked(e.author.id)))
                })
            }
            class _ extends i.default.Store {
                initialize() {
                    this.waitFor(u.default, c.default, o.default, f.default, E.default, d.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = m[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != m[e] && m[e].loaded
                }
            }
            _.displayName = "ChannelPinsStore";
            var S = new _(r.default, {
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
                            let i = s.findIndex(a.messages, e => e.id === t);
                            if (i >= 0) {
                                let t = a.messages[i],
                                    s = (0, l.updateMessageRecord)(t, e.message);
                                if (s !== t) {
                                    let e = a.messages.slice();
                                    e[i] = s, m[n].messages = e
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
                        let i = s.findIndex(a.messages, e => e.id === t); - 1 === i ? a.messages.unshift((0, l.createMessageRecord)(e.message)) : a.messages[i] = (0, l.updateMessageRecord)(a.messages[i], e.message), m[n] = a
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
                    let i = s.remove(a.messages, e => e.id === t);
                    if (0 === i.length) return !1;
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
                USER_SETTINGS_PROTO_UPDATE: M,
                I18N_LOAD_SUCCESS: M,
                CHANNEL_DELETE: p,
                THREAD_DELETE: p,
                RELATIONSHIP_ADD: N,
                RELATIONSHIP_REMOVE: N
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return s
                },
                default: function() {
                    return E
                }
            });
            var a, s, i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                d = n("77078"),
                u = n("36694"),
                o = n("381546"),
                c = n("68238"),
                f = n("423487"),
                g = n("557296");
            (a = s || (s = {}))[a.WARNING = 0] = "WARNING", a[a.INFO = 1] = "INFO", a[a.ERROR = 2] = "ERROR", a[a.POSITIVE = 3] = "POSITIVE";
            var E = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: a,
                    textColor: r = "text-normal",
                    textVariant: E = "text-sm/medium"
                } = e, m = function(e) {
                    switch (e) {
                        case s.WARNING:
                            return f.default;
                        case s.INFO:
                            return c.default;
                        case s.ERROR:
                            return o.default;
                        case s.POSITIVE:
                            return u.default
                    }
                }(n), h = function(e) {
                    switch (e) {
                        case s.WARNING:
                            return g.warning;
                        case s.INFO:
                            return g.info;
                        case s.ERROR:
                            return g.error;
                        case s.POSITIVE:
                            return g.positive
                    }
                }(n);
                return (0, i.jsxs)("div", {
                    className: l(g.container, h, a),
                    children: [(0, i.jsx)("div", {
                        className: g.iconDiv,
                        children: (0, i.jsx)(m, {
                            className: g.icon
                        })
                    }), (0, i.jsx)(d.Text, {
                        className: g.text,
                        color: r,
                        variant: E,
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
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                r = n.n(i),
                l = n("77078"),
                d = n("782340"),
                u = n("440318");
            let o = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = o.BLOCK,
                        style: i
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: r(t, s),
                        style: i,
                        children: [(0, a.jsxs)(l.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [d.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(l.Text, {
                            className: r(u.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = o;
            var f = c
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
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
                i = n("815157"),
                r = n("271938"),
                l = n("49111");
            let d = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = null != n ? "&format=".concat(n) : "";
                return "".concat(l.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(a)
            }

            function o() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? d : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [d]: "Linux"
                })[o(e)]
            }

            function f() {
                let e = o(),
                    t = e === d ? "tar.gz" : null;
                return u(e, !1, t)
            }

            function g(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, i.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
                        });
                    case "Android":
                        return (0, i.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, i.generateAttemptId)()
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
                    return u
                }
            });
            var a = n("42203"),
                s = n("525065"),
                i = n("957255"),
                r = n("697218"),
                l = n("49111");

            function d(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = r.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function u(e) {
                return null != e && d(e) && function(e) {
                    let t = a.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === l.ChannelTypes.DM || t.type === l.ChannelTypes.GROUP_DM) return !0;
                    if (i.default.canWithPartialContext(l.Permissions.MANAGE_MESSAGES, {
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
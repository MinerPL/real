(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80685"], {
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), v.test(e) ? e = e.substr(0, e.length - 2) : S.test(e) && (e = e.substr(0, e.length - 1)), (n = x.exec(e)) ? r.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = M.exec(e)) && c.test(n[1]) && (e = n[1], E.test(e) ? e += "e" : C.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = g.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = b.exec(e)) && r.test(n[1]) && (e = n[1] + l[n[2]]), (n = p.exec(e)) && r.test(n[1]) && (e = n[1] + s[n[2]]), (n = A.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = _.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var l = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                s = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                i = "[aeiouy]",
                a = "([^aeiou][^aeiouy]*)",
                u = "(" + i + "[aeiou]*)",
                r = RegExp("^" + a + "?" + u + a),
                o = RegExp("^" + a + "?" + u + a + u + "?$"),
                d = RegExp("^" + a + "?(" + u + a + "){2,}"),
                c = RegExp("^" + a + "?" + i),
                f = RegExp("^" + a + i + "[^aeiouwxy]$"),
                m = /ll$/,
                h = /^(.+?)e$/,
                g = /^(.+?)y$/,
                _ = /^(.+?(s|t))(ion)$/,
                M = /^(.+?)(ed|ing)$/,
                E = /(at|bl|iz)$/,
                x = /^(.+?)eed$/,
                S = /^.+?[^s]s$/,
                v = /^.+?(ss|i)es$/,
                C = /([^aeiouylsz])\1$/,
                b = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                p = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                A = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("70102");
            var l = n("884691");

            function s() {
                let e = (0, l.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: s,
                            children: i
                        } = t, a = (0, l.useRef)();
                        return !a.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !s && (s = () => n)), a.current = s()), (0, l.createElement)(e.Provider, {
                            value: a.current
                        }, i)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            s = (0, l.useContext)(e);
                        if (!s) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return s(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, l.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, l.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("390236"),
                u = s.memo(function(e) {
                    var t, n, u, r;
                    let {
                        user: o,
                        size: d = i.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...m
                    } = e, h = s.useContext(a.default);
                    return (0, l.jsx)(i.Avatar, {
                        src: (t = o, n = (0, i.getAvatarSize)(d), u = c, r = h, t.getAvatarURL(r, n, u)),
                        size: d,
                        "aria-label": f ? void 0 : o.username,
                        "aria-hidden": f,
                        ...m
                    })
                })
        },
        612278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFirstForumPostMessage: function() {
                    return x
                },
                useMostRecentForumMessage: function() {
                    return S
                },
                preloadForumThreads: function() {
                    return C
                }
            }), n("222007");
            var l = n("917351"),
                s = n.n(l),
                i = n("446674"),
                a = n("872717"),
                u = n("913144"),
                r = n("42203"),
                o = n("670902"),
                d = n("349778"),
                c = n("430475"),
                f = n("324261"),
                m = n("49111");
            class h {
                get(e) {
                    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
                }
                delete(e) {
                    delete this._set[e]
                }
                hasNext() {
                    return !s.isEmpty(this._set)
                }
                next() {
                    return Object.keys(this._set)[0]
                }
                constructor(e) {
                    this._set = {}, this._defaultValueFunc = e
                }
            }
            let g = new class e {
                    request(e, t) {
                        this.requested.get(e).add(t)
                    }
                    hasRequested(e, t) {
                        return this.requested.get(e).has(t)
                    }
                    finishRequesting(e, t) {
                        let n = this.requested.get(e);
                        t.forEach(e => n.delete(e)), g.compact(e)
                    }
                    getRequested(e) {
                        return this.requested.get(e)
                    }
                    getNextBatch(e, t) {
                        return Array.from(this.requested.get(e)).slice(0, t)
                    }
                    hasNext() {
                        return this.requested.hasNext()
                    }
                    next() {
                        return this.requested.next()
                    }
                    compact(e) {
                        0 === this.requested.get(e).size && this.requested.delete(e)
                    }
                    constructor() {
                        this.requested = new h(() => new Set)
                    }
                },
                _ = null;

            function M(e, t) {
                let n = (0, d.isForumActivityExperimentEnabled)(e);
                if (n) {
                    let {
                        loaded: e,
                        message: n
                    } = f.default.getMessageState(t);
                    return !e && null == n
                }
                return !1
            }

            function E(e, t) {
                return !e && null == t
            }

            function x(e) {
                var t, n;
                let {
                    loaded: l,
                    firstMessage: s
                } = (0, i.useStateFromStoresObject)([c.default], () => c.default.getMessage(e.id)), a = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(e.parent_id));
                if (null != a && (t = l, n = s, !t && null == n)) b(a, e.id);
                return {
                    loaded: l,
                    firstMessage: s
                }
            }

            function S(e, t) {
                let {
                    loaded: n,
                    message: l
                } = (0, i.useStateFromStoresObject)([f.default], () => f.default.getMessageState(t.id));
                return null != e && M(t.guild_id, t.id) && b(e, t.id), {
                    loaded: n,
                    mostRecentMessage: l
                }
            }

            function v(e, t) {
                let n = !1;
                t.forEach(t => {
                    var l, s;
                    let {
                        loaded: i,
                        firstMessage: a
                    } = c.default.getMessage(t);
                    if (l = i, s = a, !l && null == s || M(e.guild_id, t)) g.request(e.id, t), n = !0
                }), n && null == _ && (_ = setTimeout(p, 0))
            }

            function C(e) {
                v(e, (0, o.computeThreadIdsSnapshot)(e.id).slice(0, 10))
            }

            function b(e, t) {
                if (g.hasRequested(e.id, t)) return;
                let n = (0, o.computeThreadIdsSnapshot)(e.id),
                    l = n.findIndex(e => e === t),
                    s = n.slice(l, l + 5).filter(t => !g.hasRequested(e.id, t));
                v(e, s)
            }
            async function p() {
                try {
                    for (; g.hasNext();) await A(g.next())
                } finally {
                    _ = null
                }
            }
            async function A(e) {
                let t = g.getNextBatch(e, 10);
                try {
                    var n;
                    if (0 === t.length) return;
                    let l = null === (n = r.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
                    if (null == l) return;
                    let {
                        body: {
                            threads: s
                        }
                    } = await a.default.post({
                        url: m.Endpoints.FORUM_POSTS(e),
                        body: {
                            thread_ids: t
                        }
                    });
                    u.default.dispatch({
                        type: "LOAD_FORUM_POSTS",
                        guildId: l,
                        threads: s
                    })
                } catch (e) {} finally {
                    g.finishRequesting(e, t)
                }
            }
        },
        324261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("446674"),
                s = n("913144"),
                i = n("692038"),
                a = n("42203"),
                u = n("697218"),
                r = n("449008"),
                o = n("299039");
            let d = {};

            function c(e) {
                var t;
                let n = a.default.getChannel(null == e ? void 0 : e.channel_id);
                if (null == n || !n.isForumPost()) return !1;
                let l = d[n.id];
                return o.default.compare(null == e ? void 0 : e.id, null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.id) > -1
            }

            function f(e, t) {
                let n = null == t ? null : (0, i.createMessageRecord)(t);
                return d[e] = {
                    loaded: !0,
                    message: n
                }, !0
            }

            function m(e) {
                return d[e]
            }

            function h(e) {
                var t;
                return null === (t = d[e]) || void 0 === t ? void 0 : t.message
            }

            function g(e) {
                let {
                    threads: t,
                    mostRecentMessages: n
                } = e;
                t.forEach(e => f(e.id, null)), null == n || n.filter(r.isNotNullish).forEach(e => {
                    f(e.channel_id, e)
                })
            }
            class _ extends l.default.Store {
                initialize() {
                    this.waitFor(a.default, u.default)
                }
                getMessageState(e) {
                    return !(e in d) && (d[e] = {
                        loaded: !1,
                        message: null
                    }), d[e]
                }
            }
            _.displayName = "ForumPostRecentMessageStore";
            var M = new _(s.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_CREATE: function(e) {
                    if (e.isPushNotification || !c(e.message)) return !1;
                    e.message.channel_id === e.message.id ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
                },
                MESSAGE_UPDATE: function(e) {
                    if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
                    ! function(e, t) {
                        let n = function(e) {
                                return d[e]
                            }(e),
                            l = h(e);
                        null != n && null != l && (d[e] = {
                            ...n,
                            message: (0, i.updateMessageRecord)(l, t)
                        })
                    }(e.message.channel_id, e.message)
                },
                MESSAGE_DELETE: function(e) {
                    return function(e, t) {
                        let n = h(e);
                        return (null == n ? void 0 : n.id) === t && (delete d[e], !0)
                    }(e.channelId, e.id)
                },
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    for (let e in t) f(e, t[e].most_recent_message)
                },
                LOAD_ARCHIVED_THREADS_SUCCESS: g,
                LOAD_THREADS_SUCCESS: g
            })
        },
        67994: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                s = n("884691"),
                i = n("446674"),
                a = n("77078"),
                u = n("404118"),
                r = n("81594"),
                o = n("681736"),
                d = n("694187"),
                c = n("42203"),
                f = n("474643"),
                m = n("305961"),
                h = n("377253"),
                g = n("476765"),
                _ = n("254490"),
                M = n("412861"),
                E = n("834021"),
                x = n("867965"),
                S = n("152637"),
                v = n("578198"),
                C = n("49111"),
                b = n("843455"),
                p = n("782340"),
                A = n("79588");

            function T(e) {
                var t;
                let {
                    threadId: n,
                    attachments: T,
                    sendMessage: R,
                    transitionState: L,
                    onClose: I
                } = e, O = (0, g.useUID)(), y = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(n), [n]), D = (0, i.useStateFromStores)([m.default], () => m.default.getGuild(null == y ? void 0 : y.getGuildId()), [y]), N = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(null == y ? void 0 : y.parent_id), [y]), F = null === (t = T[0]) || void 0 === t ? void 0 : t.item, [U, j] = s.useState(null);
                s.useEffect(() => {
                    null != F && (0, d.processImage)(F.file, (e, t) => j(e), b.NOOP)
                }, [F]);
                let P = null != F && null != U ? {
                        src: U,
                        width: S.MAX_THUMBNAIL_WIDTH,
                        height: S.MAX_THUMBNAIL_HEIGHT,
                        spoiler: T[0].spoiler,
                        alt: T[0].description
                    } : null,
                    [w, z] = s.useState(!1),
                    G = s.useCallback(() => {
                        (0, x.trackForumAddMediaToOriginalPostClicked)({
                            added: !1
                        }), R(), I()
                    }, [R, I]),
                    B = s.useCallback(() => {
                        null != y && null != D && ((0, x.trackForumAddMediaToOriginalPostClicked)({
                            added: !0
                        }), ! function(e) {
                            let {
                                thread: t,
                                attachments: n,
                                setIsUploading: l,
                                guild: s,
                                onClose: i
                            } = e, a = new o.default(C.Endpoints.MESSAGE(t.id, t.id), "PATCH");
                            a.on("start", () => {
                                l(!0)
                            }), a.on("progress", e => {
                                let u = (0, _.maxFileSize)(s.id);
                                e.currentSize > u && (a.cancel(), l(!1), i(), (0, M.showUploadFileSizeExceededError)(t, (0, E.getWebUploadFiles)(n)))
                            }), a.on("error", (e, t) => {
                                l(!1), t === C.AbortCodes.EXPLICIT_CONTENT && (i(), u.default.show({
                                    title: p.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                    body: p.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                        name: s.toString()
                                    })
                                }))
                            }), a.on("complete", () => {
                                l(!1), i(), r.default.clearAll(t.id, f.DraftType.ChannelMessage)
                            });
                            let d = h.default.getMessages(t.id).get(t.id),
                                c = null != d ? d.attachments : [];
                            a.uploadFiles(n, {
                                attachments: [...c]
                            }, {
                                addFilesTo: "attachments"
                            })
                        }({
                            thread: y,
                            attachments: T,
                            setIsUploading: z,
                            guild: D,
                            onClose: I
                        }))
                    }, [y, T, z, D, I]);
                return null == N ? null : (0, l.jsxs)(a.ModalRoot, {
                    transitionState: L,
                    size: a.ModalSize.SMALL,
                    className: A.modalRoot,
                    "aria-labelledby": O,
                    children: [(0, l.jsxs)(a.ModalContent, {
                        className: A.modal,
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: A.header,
                            id: O,
                            children: p.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: A.body,
                            children: p.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                        }), (0, l.jsx)("div", {
                            className: A.forumPost,
                            children: (0, l.jsx)(v.ForumPostComposerStoreProvider, {
                                createStore: () => (0, v.createForumPostComposerStore)(N),
                                children: (0, l.jsx)(S.default, {
                                    threadId: n,
                                    goToThread: b.NOOP,
                                    overrideMedia: P
                                })
                            })
                        })]
                    }), (0, l.jsxs)(a.ModalFooter, {
                        className: A.modalFooter,
                        children: [(0, l.jsx)(a.Button, {
                            look: a.Button.Looks.BLANK,
                            className: A.cancelButton,
                            disabled: w,
                            onClick: I,
                            children: p.default.Messages.CANCEL
                        }), (0, l.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            className: A.dontAddButton,
                            disabled: w,
                            onClick: G,
                            children: p.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                        }), (0, l.jsx)(a.Button, {
                            color: a.Button.Colors.BRAND,
                            className: A.button,
                            submitting: w,
                            onClick: B,
                            autoFocus: !0,
                            children: p.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                        })]
                    })]
                })
            }
        },
        90625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IncreasedActivityForumTagPill: function() {
                    return E
                },
                IncreasedActivityForumTagOverflow: function() {
                    return x
                },
                default: function() {
                    return S
                },
                ForumTagOverflow: function() {
                    return v
                }
            }), n("222007");
            var l, s, i = n("37983"),
                a = n("884691"),
                u = n("414456"),
                r = n.n(u),
                o = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("430568"),
                m = n("206230"),
                h = n("385976"),
                g = n("945330"),
                _ = n("782340"),
                M = n("951779");

            function E(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: s,
                    onClick: u,
                    onRemove: E,
                    selected: x,
                    ariaLabel: S
                } = e, {
                    name: v,
                    emojiId: C,
                    emojiName: b
                } = t, p = null != E, [A, T] = a.useState(!1), R = (0, d.useStateFromStores)([h.default], () => null != C ? h.default.getUsableCustomEmojiById(C) : null), L = p || null != u, I = (!p || !A) && (null != C || null != b), O = 0 === n, y = a.useRef(null), D = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), N = (0, i.jsxs)(i.Fragment, {
                    children: [I ? (0, i.jsx)(f.default, {
                        className: r(M.emoji, {
                            [M.small]: O
                        }),
                        emojiId: C,
                        emojiName: b,
                        animated: !!(null == R ? void 0 : R.animated),
                        size: "reaction",
                        alt: ""
                    }) : null, A && p && (0, i.jsx)("div", {
                        className: M.closeCircle,
                        children: (0, i.jsx)(g.default, {
                            className: M.close
                        })
                    }), (0, i.jsx)(c.Text, {
                        className: M.increasedActivityText,
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: v
                    })]
                }), F = {
                    key: t.id,
                    className: r(M.pill, M.increasedActivityPill, {
                        [M.disabled]: l,
                        [M.clickable]: L,
                        [M.increasedActivitySmall]: O,
                        [M.selected]: x
                    }, s),
                    onClick: e => {
                        null == u || u(e), null == E || E(t), !D && null != y.current && y.current.blur()
                    },
                    onMouseEnter: () => p && T(!0),
                    onMouseLeave: () => p && T(!1)
                }, U = (0, o.useListItem)("forum-tag-".concat(t.id));
                return L ? (0, i.jsx)(c.Clickable, {
                    ...U,
                    innerRef: y,
                    focusProps: {
                        ringTarget: y
                    },
                    "aria-label": null != S ? S : _.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: v
                    }),
                    role: "button",
                    "aria-pressed": x,
                    ...F,
                    children: N
                }) : (0, i.jsx)("div", {
                    "aria-label": null != S ? S : _.default.Messages.FORUM_TAG_A11Y_TAG_BY.format({
                        tagName: v
                    }),
                    ...F,
                    children: N
                })
            }

            function x(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, s = 0 === l;
                return (0, i.jsx)(c.Tooltip, {
                    "aria-label": _.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(S, {
                            tag: e,
                            className: M.tooltipPill,
                            size: S.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: r(M.pill, M.increasedActivityPill, {
                            [M.increasedActivitySmall]: s
                        }),
                        children: (0, i.jsxs)(c.Text, {
                            className: M.increasedActivityText,
                            variant: s ? "text-xs/medium" : "text-sm/medium",
                            children: ["+", n]
                        })
                    })
                })
            }

            function S(e) {
                let {
                    tag: t,
                    size: n = 1,
                    disabled: l,
                    className: s,
                    onClick: u,
                    onRemove: E,
                    selected: x,
                    ariaLabel: S
                } = e, {
                    name: v,
                    emojiId: C,
                    emojiName: b
                } = t, p = null != E, [A, T] = a.useState(!1), R = (0, d.useStateFromStores)([h.default], () => null != C ? h.default.getUsableCustomEmojiById(C) : null), L = p || null != u, I = (!p || !A) && (null != C || null != b), O = 0 === n, y = a.useRef(null), D = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), N = (0, i.jsxs)(i.Fragment, {
                    children: [I ? (0, i.jsx)(f.default, {
                        className: r(M.emoji, {
                            [M.small]: O
                        }),
                        emojiId: C,
                        emojiName: b,
                        animated: !!(null == R ? void 0 : R.animated),
                        size: "reaction"
                    }) : null, A && p && (0, i.jsx)("div", {
                        className: M.closeCircle,
                        children: (0, i.jsx)(g.default, {
                            className: M.close
                        })
                    }), (0, i.jsx)(c.Text, {
                        variant: O ? "text-xs/semibold" : "text-sm/semibold",
                        lineClamp: 1,
                        children: v
                    })]
                }), F = {
                    key: t.id,
                    className: r(M.pill, {
                        [M.disabled]: l,
                        [M.clickable]: L,
                        [M.small]: O,
                        [M.selected]: x
                    }, s),
                    onClick: e => {
                        null == u || u(e), null == E || E(t), !D && null != y.current && y.current.blur()
                    },
                    onMouseEnter: () => p && T(!0),
                    onMouseLeave: () => p && T(!1)
                }, U = (0, o.useListItem)("forum-tag-".concat(t.id));
                return L ? (0, i.jsx)(c.Clickable, {
                    ...U,
                    innerRef: y,
                    focusProps: {
                        ringTarget: y
                    },
                    "aria-label": null != S ? S : _.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                        tagName: v
                    }),
                    role: "button",
                    "aria-pressed": x,
                    ...F,
                    children: N
                }) : (0, i.jsx)("div", {
                    ...F,
                    children: N
                })
            }

            function v(e) {
                let {
                    tags: t,
                    count: n,
                    size: l = 1
                } = e, s = 0 === l;
                return (0, i.jsx)(c.Tooltip, {
                    "aria-label": _.default.Messages.FORUM_TAGS,
                    text: (0, i.jsx)(i.Fragment, {
                        children: t.map(e => (0, i.jsx)(S, {
                            tag: e,
                            className: M.tooltipPill,
                            size: S.Sizes.SMALL
                        }, e.id))
                    }),
                    children: e => (0, i.jsx)("div", {
                        ...e,
                        className: r(M.pill, {
                            [M.small]: s
                        }),
                        children: (0, i.jsxs)(c.Text, {
                            variant: s ? "text-xs/semibold" : "text-sm/semibold",
                            children: ["+", n]
                        })
                    })
                })
            }(s = l || (l = {}))[s.SMALL = 0] = "SMALL", s[s.MEDIUM = 1] = "MEDIUM", S.Sizes = l
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return u
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                s = n("26989"),
                i = n("697218"),
                a = n("509");

            function u(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function r(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function o(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, a.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([s.default], () => r(e, t, s.default), [t, e]);
                return o(n)
            }

            function c(e, t) {
                let n = r(e, t, s.default);
                return o(n)
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return m
                }
            });
            var l = n("693566"),
                s = n.n(l),
                i = n("872717"),
                a = n("913144"),
                u = n("851387"),
                r = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await i.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                r.default.shouldFetch(e) && await d(e)
            }
            let f = new s({
                maxAge: 1e4
            });

            function m(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var s, a;
                    return f.set(l, !0), s = e, a = t, i.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(s, a)
                    }).then(e => (u.default.requestMembersById(s, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                s = n("913144");
            let i = {},
                a = {};
            class u extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? i[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = a[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var r = new u(s.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    i[t] = n, a[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, s = i[t];
                    if (null == s) return !1;
                    s[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, s = i[t];
                    if (null == s || null == s[n]) return !1;
                    let a = Object.keys(l).length;
                    s[n] += a
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == i[t] && (i[t] = {}), i[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete i[t.id], delete a[t.id]
                }
            })
        },
        441823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserContextMenu: function() {
                    return i
                },
                openModerateUserContextMenu: function() {
                    return a
                },
                openModerateRoleContextMenu: function() {
                    return u
                },
                openModerationRaidContextMenu: function() {
                    return r
                }
            }), n("70102");
            var l = n("37983");
            n("884691");
            var s = n("272030");

            function i(e, t, i) {
                i.isGroupDM() ? (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("166452").then(n.bind(n, "166452"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: i
                    })
                }) : i.isDM() ? (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("130074").then(n.bind(n, "130074"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: i,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != i.guild_id ? (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t,
                        channel: i,
                        guildId: i.guild_id
                    })
                }) : (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("406784").then(n.bind(n, "406784"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        user: t
                    })
                })
            }

            function a(e, t) {
                let {
                    user: i,
                    channel: a,
                    moderationAlertId: u,
                    guildId: r,
                    analyticsLocations: o,
                    onCloseContextMenu: d
                } = t;
                if ((null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != r ? r : null == a ? void 0 : a.getGuildId();
                null != c && (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("467940").then(n.bind(n, "467940"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        user: i,
                        channelId: null == a ? void 0 : a.id,
                        guildId: c,
                        moderationAlertId: u,
                        analyticsLocations: o,
                        onCloseContextMenu: d
                    })
                })
            }

            function u(e, t) {
                let {
                    user: i,
                    guildId: a,
                    analyticsLocations: u,
                    onCloseContextMenu: r
                } = t;
                (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("522651").then(n.bind(n, "522651"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        user: i,
                        guildId: a,
                        analyticsLocations: u,
                        onCloseContextMenu: r
                    })
                })
            }

            function r(e, t, i) {
                null != i && (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("701587").then(n.bind(n, "701587"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        guildId: i
                    })
                })
            }
        }
    }
]);
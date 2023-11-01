(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86612"], {
        444342: function(e, t, a) {
            "use strict";
            e.exports = a.p + "8678aef5e54059df845e.svg"
        },
        853701: function(e, t, a) {
            "use strict";
            e.exports = a.p + "792a9ed858431240f0e6.svg"
        },
        311207: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("298878"),
                i = a("782340"),
                o = () => (0, l.jsx)(s.TooltipContainer, {
                    text: i.default.Messages.CLIPS_BETA_TAG_HOVER,
                    children: (0, l.jsx)(n.default, {})
                })
        },
        552022: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            });
            var l, s, n = a("37983"),
                i = a("884691"),
                o = a("866227"),
                d = a.n(o),
                r = a("446674"),
                u = a("862337"),
                c = a("77078"),
                f = a("49671"),
                p = a("812204"),
                m = a("685665"),
                C = a("730859"),
                L = a("697218"),
                h = a("944832"),
                x = a("561744"),
                E = a("491920"),
                g = a("826432"),
                v = a("228220"),
                N = a("15165"),
                S = a("58608"),
                _ = a("599110"),
                I = a("449008"),
                T = a("299039"),
                j = a("803725"),
                M = a("49111"),
                A = a("782340"),
                y = a("593262");
            (l = s || (s = {})).DELETE = "delete", l.EDIT = "edit", l.SHARE = "share";
            var D = function(e) {
                var t, a, l;
                let {
                    clip: s,
                    exporting: o,
                    actionsDisabled: d,
                    isNew: f,
                    canShare: h,
                    onDelete: E,
                    onEdit: g,
                    onShare: v
                } = e, N = (0, r.useStateFromStoresArray)([L.default], () => s.users.map(e => L.default.getUser(e)).filter(I.isNotNullish)), {
                    AnalyticsLocationProvider: S
                } = (0, m.default)(p.default.CLIPS_GALLERY_ITEM), j = i.useRef(null), D = (0, x.default)(null !== (l = null === (t = s.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0), R = i.useRef(new u.DelayedCall(500, () => {
                    var e;
                    let t = j.current;
                    null != t && (t.currentTime = D.current, null === (e = j.current) || void 0 === e || e.play())
                })), k = i.useCallback(() => {
                    var e;
                    null === (e = R.current) || void 0 === e || e.delay()
                }, []), w = i.useCallback(() => {
                    var e, t, a;
                    let l = j.current;
                    null === (e = R.current) || void 0 === e || e.cancel(), null != l && (l.pause(), l.currentTime = null !== (a = null === (t = s.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0)
                }, [null === (a = s.editMetadata) || void 0 === a ? void 0 : a.start]), B = !s.name, O = new Date(T.default.extractTimestamp(s.id)), H = O.toLocaleDateString(), Y = O.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }), F = "".concat(H, " • ").concat(Y);
                return (0, n.jsx)(S, {
                    children: (0, n.jsxs)(c.Clickable, {
                        "aria-label": A.default.Messages.EDIT,
                        onClick: () => {
                            g(s), _.default.track(M.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
                        },
                        className: y.clipItem,
                        onMouseOver: k,
                        onMouseLeave: w,
                        children: [(0, n.jsx)(b, {
                            clip: s,
                            isNew: f,
                            videoRef: j
                        }), (0, n.jsxs)("div", {
                            className: y.clipFooter,
                            children: [B ? (0, n.jsx)(c.Heading, {
                                className: y.clipTitle,
                                color: "text-muted",
                                variant: "heading-lg/medium",
                                children: A.default.Messages.CLIPS_UNTITLED
                            }) : (0, n.jsx)(c.Heading, {
                                className: y.clipTitle,
                                color: "text-normal",
                                variant: "heading-lg/medium",
                                children: s.name
                            }), (0, n.jsx)(c.Text, {
                                className: y.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: s.applicationName
                            }), (0, n.jsx)(c.Text, {
                                className: y.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: F
                            }), (0, n.jsxs)("div", {
                                className: y.usersAndDelete,
                                children: [(0, n.jsx)(C.default, {
                                    maxUsers: 4,
                                    users: N
                                }), (0, n.jsx)(P, {
                                    clip: s,
                                    canShare: h,
                                    actionsDisabled: d,
                                    exporting: o,
                                    onDelete: E,
                                    onEdit: g,
                                    onShare: v
                                })]
                            })]
                        })]
                    })
                })
            };

            function b(e) {
                let {
                    clip: t,
                    isNew: a,
                    videoRef: l
                } = e, s = i.useMemo(() => null == f.default.clips.getClipProtocolURLFromPath ? null : f.default.clips.getClipProtocolURLFromPath(t.filepath), [t.filepath]), [o, r] = i.useMemo(() => {
                    let e = t.length,
                        a = !1,
                        l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
                    return null != l && 1e3 * l < t.length && (e = 1e3 * l, a = !0), [a, d.duration(e)]
                }, [t.length, t.editMetadata]), u = "".concat(r.seconds()).padStart(2, "0");
                return (0, n.jsxs)(h.default, {
                    aspectRatio: 16 / 9,
                    className: y.clipThumbContainer,
                    children: [null != s ? (0, n.jsx)(S.default, {
                        preload: "metadata",
                        muted: !0,
                        poster: t.thumbnail,
                        src: s,
                        loop: !0,
                        className: y.clipThumb,
                        ref: l
                    }) : (0, n.jsx)("img", {
                        alt: "",
                        src: t.thumbnail,
                        className: y.clipThumb
                    }), (0, n.jsxs)("div", {
                        className: y.clipBadges,
                        children: [a ? (0, n.jsxs)(c.Text, {
                            className: y.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [(0, n.jsx)(g.default, {
                                className: y.newIcon
                            }), A.default.Messages.NEW.toUpperCase()]
                        }) : null, (0, n.jsxs)("div", {
                            className: y.clipDurationBadge,
                            children: [o ? (0, n.jsx)(N.default, {
                                className: y.clipDurationEditIcon
                            }) : null, (0, n.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: "".concat(r.minutes(), ":").concat(u)
                            })]
                        })]
                    })]
                })
            }

            function P(e) {
                let {
                    clip: t,
                    exporting: a,
                    actionsDisabled: l,
                    canShare: i,
                    onDelete: o,
                    onEdit: d,
                    onShare: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: y.buttonContainer,
                    children: [null != o && (0, n.jsx)(c.Tooltip, {
                        text: A.default.Messages.DELETE,
                        children: e => (0, n.jsx)(c.Button, {
                            ...e,
                            disabled: l,
                            color: c.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), e.shiftKey ? (0, j.deleteClip)(t.filepath) : o(t), _.default.track(M.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: s.DELETE
                                })
                            },
                            className: y.button,
                            size: c.Button.Sizes.NONE,
                            look: c.Button.Looks.FILLED,
                            children: (0, n.jsx)(v.default, {
                                className: y.miniIcon
                            })
                        })
                    }), (0, n.jsx)(c.Tooltip, {
                        text: A.default.Messages.EDIT,
                        children: e => (0, n.jsx)(c.Button, {
                            ...e,
                            disabled: l,
                            color: c.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), d(t), _.default.track(M.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: s.EDIT
                                })
                            },
                            className: y.button,
                            size: c.Button.Sizes.NONE,
                            look: c.Button.Looks.FILLED,
                            children: (0, n.jsx)(N.default, {
                                className: y.miniIcon
                            })
                        })
                    }), (0, n.jsx)(c.Tooltip, {
                        text: i ? A.default.Messages.SHARE : A.default.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                        children: e => (0, n.jsx)(c.Button, {
                            ...e,
                            disabled: l && !a || !i,
                            submitting: a,
                            color: c.Button.Colors.BRAND,
                            onClick: e => {
                                e.stopPropagation(), r(t), _.default.track(M.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: s.SHARE
                                })
                            },
                            className: y.button,
                            size: c.Button.Sizes.NONE,
                            look: c.Button.Looks.FILLED,
                            children: (0, n.jsx)(E.default, {
                                className: y.miniIcon
                            })
                        })
                    })]
                })
            }
        },
        548405: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                o = a("65597"),
                d = a("77078"),
                r = a("79112"),
                u = a("227602"),
                c = a("13798"),
                f = a("386045"),
                p = a("49111"),
                m = a("782340"),
                C = a("518677");

            function L(e) {
                let {
                    isEmptyBecauseQuery: t,
                    closePopout: a
                } = e, n = (0, o.default)([u.default], () => u.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP)), L = (0, o.default)([f.default], () => f.default.getSettings().clipsEnabled), h = t ? C.noSearchResultsImage : C.noClipsImage, x = s.useCallback(() => {
                    a(), r.default.open(p.UserSettingsSections.CLIPS)
                }, [a]), E = (() => {
                    if (!L) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
                        onClick: x
                    });
                    if (t) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
                    if (null == n) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
                        onClick: x
                    });
                    {
                        let e = c.toString(n.shortcut, !0);
                        return m.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                            keybind: e,
                            keybindHook: () => (0, l.jsx)("span", {
                                className: C.keybindHintKeys,
                                children: (0, l.jsx)(d.KeyCombo, {
                                    className: C.keybindShortcut,
                                    shortcut: e
                                })
                            })
                        })
                    }
                })();
                return (0, l.jsx)("div", {
                    className: C.container,
                    children: (0, l.jsxs)("div", {
                        className: C.content,
                        children: [(0, l.jsx)("div", {
                            className: h
                        }), (0, l.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: i(C.noClipsText, {
                                [C.noSearchResultsText]: t
                            }),
                            children: E
                        })]
                    })
                })
            }
        },
        411445: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("79112"),
                i = a("810567"),
                o = a("522049"),
                d = a("474571"),
                r = a("311207"),
                u = a("49111"),
                c = a("782340"),
                f = a("552986");

            function p(e) {
                let {
                    filterQuery: t,
                    setFilterQuery: a,
                    onClose: p,
                    sortOrder: m,
                    setSortOrder: C
                } = e;
                return (0, l.jsxs)(s.ModalHeader, {
                    className: f.root,
                    separator: !1,
                    children: [(0, l.jsx)(o.default, {
                        className: f.icon
                    }), (0, l.jsx)(s.Heading, {
                        className: f.title,
                        variant: "heading-xxl/bold",
                        children: c.default.Messages.CLIPS
                    }), (0, l.jsx)("div", {
                        className: f.betaTag,
                        children: (0, l.jsx)(r.default, {})
                    }), (0, l.jsx)(i.default, {
                        autoFocus: !0,
                        size: i.default.Sizes.MEDIUM,
                        placeholder: c.default.Messages.SEARCH,
                        className: f.queryInput,
                        query: t,
                        onChange: a,
                        onClear: () => a("")
                    }), (0, l.jsx)(s.Select, {
                        placeholder: c.default.Messages.CLIPS_SORT_PLACEHOLDER,
                        className: f.sortInput,
                        options: [{
                            value: "descending",
                            label: c.default.Messages.CLIPS_SORT_RECENT
                        }, {
                            value: "ascending",
                            label: c.default.Messages.CLIPS_SORT_OLDEST
                        }],
                        isSelected: e => e === m,
                        select: C,
                        serialize: e => e
                    }), (0, l.jsx)(s.Button, {
                        color: s.ButtonColors.TRANSPARENT,
                        size: s.Button.Sizes.NONE,
                        className: f.settingsButton,
                        look: s.Button.Looks.FILLED,
                        onClick: () => {
                            n.default.open(u.UserSettingsSections.CLIPS), p()
                        },
                        children: (0, l.jsx)(d.default, {})
                    }), (0, l.jsx)(s.ModalCloseButton, {
                        className: f.button,
                        onClick: p
                    })]
                })
            }
        },
        167573: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("448105"),
                i = a.n(n),
                o = a("917351"),
                d = a.n(o),
                r = a("759843"),
                u = a("446674"),
                c = a("551042"),
                f = a("77078"),
                p = a("812204"),
                m = a("685665"),
                C = a("428958"),
                L = a("299039"),
                h = a("386045"),
                x = a("803725"),
                E = a("142485"),
                g = a("552022"),
                v = a("548405"),
                N = a("411445"),
                S = a("80028"),
                _ = a("305085");

            function I(e) {
                let {
                    channelId: t,
                    onClose: n,
                    transitionState: o
                } = e, [I, T] = s.useState(""), [j, M] = s.useState("descending"), [A, y] = s.useState(!0), [D, b] = s.useState(null), P = s.useDeferredValue(I), R = (0, u.useStateFromStores)([h.default], () => h.default.getClips()), k = (0, u.useStateFromStores)([h.default], () => h.default.getSettings().storageLocation), w = (0, u.useStateFromStores)([h.default], () => h.default.getState().newClipIds), {
                    AnalyticsLocationProvider: B
                } = (0, m.default)(p.default.CLIPS_GALLERY);
                (0, C.default)({
                    type: r.ImpressionTypes.MODAL,
                    name: r.ImpressionNames.CLIP_GALLERY_VIEWED,
                    properties: {
                        number_of_clips_loaded: R.length
                    }
                }, {
                    disableTrack: A
                }, [R.length, A]), s.useEffect(() => x.clearNewClipIds, []);
                let O = s.useMemo(() => d(R).filter(e => {
                    if ("" === P.trim()) return !0;
                    let t = P.toLowerCase();
                    return null != e.name && "" !== e.name && i(t, e.name.toLowerCase()) || i(t, e.applicationName.toLowerCase())
                }).sort((e, t) => "ascending" === j ? L.default.compare(e.id, t.id) : "descending" === j ? L.default.compare(t.id, e.id) : 0).chunk(3).value(), [R, P, j]);
                s.useEffect(() => {
                    (async function e() {
                        y(!0);
                        try {
                            await x.loadClipsDirectory(k)
                        } finally {
                            y(!1)
                        }
                    })()
                }, [k]);
                let H = s.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: s
                            } = await a.el("473070").then(a.bind(a, "473070"));
                            return a => (0, l.jsx)(s, {
                                ...a,
                                channelId: t,
                                clip: e
                            })
                        }, {
                            modalKey: S.CLIPS_EDIT_MODAL_KEY
                        })
                    }, [t]),
                    {
                        onShareClick: Y,
                        canAttachFiles: F
                    } = (0, E.default)({
                        channelId: t,
                        setExporting: b
                    }),
                    z = s.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("386092").then(a.bind(a, "386092"));
                            return a => (0, l.jsx)(t, {
                                clip: e,
                                ...a,
                                onDelete: () => a.onClose()
                            })
                        })
                    }, []),
                    G = s.useCallback(e => {
                        let {
                            row: t
                        } = e, a = O[t];
                        return (0, l.jsx)("div", {
                            className: _.clipsRow,
                            children: a.map(e => (0, l.jsx)(g.default, {
                                actionsDisabled: null != D,
                                exporting: D === e.id,
                                isNew: w.includes(e.id),
                                onDelete: z,
                                onEdit: H,
                                onShare: e => Y({
                                    clip: e,
                                    onShareComplete: () => c.closeModal(S.CLIPS_GALLERY_MODAL_KEY)
                                }),
                                canShare: F,
                                clip: e
                            }, e.id))
                        }, "clips-gallery-".concat(t))
                    }, [O, w, D, Y, z, H, F]),
                    U = A || 0 !== O.length ? A ? (0, l.jsx)("div", {
                        className: _.spinnerContainer,
                        children: (0, l.jsx)(f.Spinner, {})
                    }) : (0, l.jsx)(f.List, {
                        className: _.clipGrid,
                        sections: [O.length],
                        sectionHeight: 0,
                        rowHeight: 328.25,
                        renderRow: G
                    }) : (0, l.jsx)(v.default, {
                        isEmptyBecauseQuery: R.length > 0,
                        closePopout: n
                    });
                return (0, l.jsx)(f.ModalRoot, {
                    size: f.ModalSize.DYNAMIC,
                    transitionState: o,
                    className: _.root,
                    children: (0, l.jsxs)(B, {
                        children: [(0, l.jsx)(N.default, {
                            onClose: n,
                            filterQuery: I,
                            setFilterQuery: T,
                            sortOrder: j,
                            setSortOrder: M
                        }), U]
                    })
                })
            }
        },
        16002: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shareClip: function() {
                    return m
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("77078"),
                n = a("42203"),
                i = a("474643"),
                o = a("599110"),
                d = a("299039"),
                r = a("412861"),
                u = a("13136"),
                c = a("803725"),
                f = a("80028"),
                p = a("49111");
            async function m(e, t) {
                let {
                    channelId: m,
                    editMetadata: C,
                    analyticsLocations: L
                } = t, h = n.default.getChannel(m);
                if (null != h) try {
                    var x;
                    let t = await (0, c.exportClip)(e, C),
                        a = null !== (x = e.name) && void 0 !== x ? x : (0, f.CLIP_NAME_TEMPLATE)(d.default.extractTimestamp(e.id)),
                        l = (0, u.default)(a),
                        s = "".concat("" !== l ? l : "clip", ".mp4");
                    (0, r.promptToUpload)([new File([t], s, {
                        type: "video/mp4"
                    })], h, i.DraftType.ChannelMessage, {
                        isClip: !0
                    }), o.default.track(p.AnalyticEvents.CLIP_SHARED, {
                        location_stack: L,
                        guild_id: h.guild_id,
                        channel_id: h.id,
                        channel_type: h.type,
                        application_id: e.applicationId
                    })
                } catch (e) {
                    throw f.ClipsLogger.error(e), e
                } else(0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("143909").then(a.bind(a, "143909"));
                    return a => (0, l.jsx)(t, {
                        ...a,
                        clip: e,
                        editMetadata: C
                    })
                })
            }
        },
        142485: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("884691"),
                s = a("65597"),
                n = a("685665"),
                i = a("42203"),
                o = a("957255"),
                d = a("16002"),
                r = a("49111"),
                u = e => {
                    let {
                        channelId: t,
                        setExporting: a
                    } = e, {
                        analyticsLocations: u
                    } = (0, n.default)(), c = (0, s.default)([i.default], () => i.default.getChannel(t)), f = null == c ? void 0 : c.isPrivate(), p = (0, s.default)([o.default], () => null == t || f || o.default.can(r.Permissions.ATTACH_FILES, c) && o.default.can(r.Permissions.SEND_MESSAGES, c)), m = l.useCallback(async e => {
                        var l, s, n, i, o, r, c, f, p, m;
                        let {
                            clip: C,
                            cropData: L,
                            applicationAudioEnabled: h,
                            voiceAudioEnabled: x,
                            onShareComplete: E
                        } = e;
                        a(C.id);
                        try {
                            await (0, d.shareClip)(C, {
                                channelId: t,
                                analyticsLocations: u,
                                editMetadata: {
                                    start: null !== (r = null !== (o = null == L ? void 0 : L.start) && void 0 !== o ? o : null === (l = C.editMetadata) || void 0 === l ? void 0 : l.start) && void 0 !== r ? r : 0,
                                    end: null !== (f = null !== (c = null == L ? void 0 : L.end) && void 0 !== c ? c : null === (s = C.editMetadata) || void 0 === s ? void 0 : s.end) && void 0 !== f ? f : C.length / 1e3,
                                    applicationAudio: null === (p = null != h ? h : null === (n = C.editMetadata) || void 0 === n ? void 0 : n.applicationAudio) || void 0 === p || p,
                                    voiceAudio: null === (m = null != x ? x : null === (i = C.editMetadata) || void 0 === i ? void 0 : i.voiceAudio) || void 0 === m || m
                                }
                            })
                        } catch (e) {} finally {
                            null == E || E(), a(null)
                        }
                    }, [t, u, a]);
                    return {
                        onShareClick: m,
                        canAttachFiles: p
                    }
                }
        }
    }
]);
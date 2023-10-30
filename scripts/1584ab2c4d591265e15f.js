(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86612"], {
        444342: function(e, t, l) {
            "use strict";
            e.exports = l.p + "8678aef5e54059df845e.svg"
        },
        853701: function(e, t, l) {
            "use strict";
            e.exports = l.p + "792a9ed858431240f0e6.svg"
        },
        743087: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShareIcon: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("669491"),
                n = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        311207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                n = l("298878"),
                i = l("782340"),
                o = () => (0, a.jsx)(s.TooltipContainer, {
                    text: i.default.Messages.CLIPS_BETA_TAG_HOVER,
                    children: (0, a.jsx)(n.default, {})
                })
        },
        552022: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return y
                }
            });
            var a, s, n = l("37983"),
                i = l("884691"),
                o = l("866227"),
                d = l.n(o),
                r = l("446674"),
                c = l("862337"),
                u = l("77078"),
                f = l("49671"),
                p = l("812204"),
                m = l("685665"),
                h = l("730859"),
                C = l("697218"),
                v = l("944832"),
                L = l("561744"),
                x = l("491920"),
                g = l("826432"),
                E = l("228220"),
                N = l("15165"),
                S = l("58608"),
                _ = l("599110"),
                I = l("449008"),
                j = l("299039"),
                M = l("803725"),
                T = l("49111"),
                A = l("782340"),
                R = l("593262");
            (a = s || (s = {})).DELETE = "delete", a.EDIT = "edit", a.SHARE = "share";
            var y = function(e) {
                var t, l, a;
                let {
                    clip: s,
                    exporting: o,
                    actionsDisabled: d,
                    isNew: f,
                    canShare: v,
                    onDelete: x,
                    onEdit: g,
                    onShare: E
                } = e, N = (0, r.useStateFromStoresArray)([C.default], () => s.users.map(e => C.default.getUser(e)).filter(I.isNotNullish)), {
                    AnalyticsLocationProvider: S
                } = (0, m.default)(p.default.CLIPS_GALLERY_ITEM), M = i.useRef(null), y = (0, L.default)(null !== (a = null === (t = s.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), b = i.useRef(new c.DelayedCall(500, () => {
                    var e;
                    let t = M.current;
                    null != t && (t.currentTime = y.current, null === (e = M.current) || void 0 === e || e.play())
                })), P = i.useCallback(() => {
                    var e;
                    null === (e = b.current) || void 0 === e || e.delay()
                }, []), w = i.useCallback(() => {
                    var e, t, l;
                    let a = M.current;
                    null === (e = b.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = s.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
                }, [null === (l = s.editMetadata) || void 0 === l ? void 0 : l.start]), k = !s.name, V = new Date(j.default.extractTimestamp(s.id)), B = V.toLocaleDateString(), O = V.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }), z = "".concat(B, " • ").concat(O);
                return (0, n.jsx)(S, {
                    children: (0, n.jsxs)(u.Clickable, {
                        "aria-label": A.default.Messages.EDIT,
                        onClick: () => {
                            g(s), _.default.track(T.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
                        },
                        className: R.clipItem,
                        onMouseOver: P,
                        onMouseLeave: w,
                        children: [(0, n.jsx)(H, {
                            clip: s,
                            isNew: f,
                            videoRef: M
                        }), (0, n.jsxs)("div", {
                            className: R.clipFooter,
                            children: [k ? (0, n.jsx)(u.Heading, {
                                className: R.clipTitle,
                                color: "text-muted",
                                variant: "heading-lg/medium",
                                children: A.default.Messages.CLIPS_UNTITLED
                            }) : (0, n.jsx)(u.Heading, {
                                className: R.clipTitle,
                                color: "text-normal",
                                variant: "heading-lg/medium",
                                children: s.name
                            }), (0, n.jsx)(u.Text, {
                                className: R.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: s.applicationName
                            }), (0, n.jsx)(u.Text, {
                                className: R.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: z
                            }), (0, n.jsxs)("div", {
                                className: R.usersAndDelete,
                                children: [(0, n.jsx)(h.default, {
                                    maxUsers: 4,
                                    users: N
                                }), (0, n.jsx)(D, {
                                    clip: s,
                                    canShare: v,
                                    actionsDisabled: d,
                                    exporting: o,
                                    onDelete: x,
                                    onEdit: g,
                                    onShare: E
                                })]
                            })]
                        })]
                    })
                })
            };

            function H(e) {
                let {
                    clip: t,
                    isNew: l,
                    videoRef: a
                } = e, s = i.useMemo(() => null == f.default.clips.getClipProtocolURLFromPath ? null : f.default.clips.getClipProtocolURLFromPath(t.filepath), [t.filepath]), [o, r] = i.useMemo(() => {
                    let e = t.length,
                        l = !1,
                        a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
                    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, d.duration(e)]
                }, [t.length, t.editMetadata]), c = "".concat(r.seconds()).padStart(2, "0");
                return (0, n.jsxs)(v.default, {
                    aspectRatio: 16 / 9,
                    className: R.clipThumbContainer,
                    children: [null != s ? (0, n.jsx)(S.default, {
                        preload: "metadata",
                        muted: !0,
                        poster: t.thumbnail,
                        src: s,
                        loop: !0,
                        className: R.clipThumb,
                        ref: a
                    }) : (0, n.jsx)("img", {
                        alt: "",
                        src: t.thumbnail,
                        className: R.clipThumb
                    }), (0, n.jsxs)("div", {
                        className: R.clipBadges,
                        children: [l ? (0, n.jsxs)(u.Text, {
                            className: R.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [(0, n.jsx)(g.default, {
                                className: R.newIcon
                            }), A.default.Messages.NEW.toUpperCase()]
                        }) : null, (0, n.jsxs)("div", {
                            className: R.clipDurationBadge,
                            children: [o ? (0, n.jsx)(N.default, {
                                className: R.clipDurationEditIcon
                            }) : null, (0, n.jsx)(u.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: "".concat(r.minutes(), ":").concat(c)
                            })]
                        })]
                    })]
                })
            }

            function D(e) {
                let {
                    clip: t,
                    exporting: l,
                    actionsDisabled: a,
                    canShare: i,
                    onDelete: o,
                    onEdit: d,
                    onShare: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: R.buttonContainer,
                    children: [null != o && (0, n.jsx)(u.Tooltip, {
                        text: A.default.Messages.DELETE,
                        children: e => (0, n.jsx)(u.Button, {
                            ...e,
                            disabled: a,
                            color: u.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), e.shiftKey ? (0, M.deleteClip)(t.filepath) : o(t), _.default.track(T.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: s.DELETE
                                })
                            },
                            className: R.button,
                            size: u.Button.Sizes.NONE,
                            look: u.Button.Looks.FILLED,
                            children: (0, n.jsx)(E.default, {
                                className: R.miniIcon
                            })
                        })
                    }), (0, n.jsx)(u.Tooltip, {
                        text: A.default.Messages.EDIT,
                        children: e => (0, n.jsx)(u.Button, {
                            ...e,
                            disabled: a,
                            color: u.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), d(t), _.default.track(T.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: s.EDIT
                                })
                            },
                            className: R.button,
                            size: u.Button.Sizes.NONE,
                            look: u.Button.Looks.FILLED,
                            children: (0, n.jsx)(N.default, {
                                className: R.miniIcon
                            })
                        })
                    }), (0, n.jsx)(u.Tooltip, {
                        text: i ? A.default.Messages.SHARE : A.default.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                        children: e => (0, n.jsx)(u.Button, {
                            ...e,
                            disabled: a && !l || !i,
                            submitting: l,
                            color: u.Button.Colors.BRAND,
                            onClick: e => {
                                e.stopPropagation(), r(t), _.default.track(T.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: s.SHARE
                                })
                            },
                            className: R.button,
                            size: u.Button.Sizes.NONE,
                            look: u.Button.Looks.FILLED,
                            children: (0, n.jsx)(x.default, {
                                className: R.miniIcon
                            })
                        })
                    })]
                })
            }
        },
        548405: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983"),
                s = l("884691"),
                n = l("414456"),
                i = l.n(n),
                o = l("65597"),
                d = l("77078"),
                r = l("79112"),
                c = l("227602"),
                u = l("13798"),
                f = l("386045"),
                p = l("49111"),
                m = l("782340"),
                h = l("518677");

            function C(e) {
                let {
                    isEmptyBecauseQuery: t,
                    closePopout: l
                } = e, n = (0, o.default)([c.default], () => c.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP)), C = (0, o.default)([f.default], () => f.default.getSettings().clipsEnabled), v = t ? h.noSearchResultsImage : h.noClipsImage, L = s.useCallback(() => {
                    l(), r.default.open(p.UserSettingsSections.CLIPS)
                }, [l]), x = (() => {
                    if (!C) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
                        onClick: L
                    });
                    if (t) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
                    if (null == n) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
                        onClick: L
                    });
                    {
                        let e = u.toString(n.shortcut, !0);
                        return m.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                            keybind: e,
                            keybindHook: () => (0, a.jsx)("span", {
                                className: h.keybindHintKeys,
                                children: (0, a.jsx)(d.KeyCombo, {
                                    className: h.keybindShortcut,
                                    shortcut: e
                                })
                            })
                        })
                    }
                })();
                return (0, a.jsx)("div", {
                    className: h.container,
                    children: (0, a.jsxs)("div", {
                        className: h.content,
                        children: [(0, a.jsx)("div", {
                            className: v
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: i(h.noClipsText, {
                                [h.noSearchResultsText]: t
                            }),
                            children: x
                        })]
                    })
                })
            }
        },
        411445: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                n = l("79112"),
                i = l("810567"),
                o = l("522049"),
                d = l("474571"),
                r = l("311207"),
                c = l("49111"),
                u = l("782340"),
                f = l("552986");

            function p(e) {
                let {
                    filterQuery: t,
                    setFilterQuery: l,
                    onClose: p,
                    sortOrder: m,
                    setSortOrder: h
                } = e;
                return (0, a.jsxs)(s.ModalHeader, {
                    className: f.root,
                    separator: !1,
                    children: [(0, a.jsx)(o.default, {
                        className: f.icon
                    }), (0, a.jsx)(s.Heading, {
                        className: f.title,
                        variant: "heading-xxl/bold",
                        children: u.default.Messages.CLIPS
                    }), (0, a.jsx)("div", {
                        className: f.betaTag,
                        children: (0, a.jsx)(r.default, {})
                    }), (0, a.jsx)(i.default, {
                        autoFocus: !0,
                        size: i.default.Sizes.MEDIUM,
                        placeholder: u.default.Messages.SEARCH,
                        className: f.queryInput,
                        query: t,
                        onChange: l,
                        onClear: () => l("")
                    }), (0, a.jsx)(s.Select, {
                        placeholder: u.default.Messages.CLIPS_SORT_PLACEHOLDER,
                        className: f.sortInput,
                        options: [{
                            value: "descending",
                            label: u.default.Messages.CLIPS_SORT_RECENT
                        }, {
                            value: "ascending",
                            label: u.default.Messages.CLIPS_SORT_OLDEST
                        }],
                        isSelected: e => e === m,
                        select: h,
                        serialize: e => e
                    }), (0, a.jsx)(s.Button, {
                        color: s.ButtonColors.TRANSPARENT,
                        size: s.Button.Sizes.NONE,
                        className: f.settingsButton,
                        look: s.Button.Looks.FILLED,
                        onClick: () => {
                            n.default.open(c.UserSettingsSections.CLIPS), p()
                        },
                        children: (0, a.jsx)(d.default, {})
                    }), (0, a.jsx)(s.ModalCloseButton, {
                        className: f.button,
                        onClick: p
                    })]
                })
            }
        },
        167573: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var a = l("37983"),
                s = l("884691"),
                n = l("448105"),
                i = l.n(n),
                o = l("917351"),
                d = l.n(o),
                r = l("759843"),
                c = l("446674"),
                u = l("551042"),
                f = l("77078"),
                p = l("812204"),
                m = l("685665"),
                h = l("428958"),
                C = l("299039"),
                v = l("386045"),
                L = l("803725"),
                x = l("142485"),
                g = l("552022"),
                E = l("548405"),
                N = l("411445"),
                S = l("80028"),
                _ = l("305085");

            function I(e) {
                let {
                    channelId: t,
                    onClose: n,
                    transitionState: o
                } = e, [I, j] = s.useState(""), [M, T] = s.useState("descending"), [A, R] = s.useState(!0), [y, H] = s.useState(null), D = s.useDeferredValue(I), b = (0, c.useStateFromStores)([v.default], () => v.default.getClips()), P = (0, c.useStateFromStores)([v.default], () => v.default.getSettings().storageLocation), w = (0, c.useStateFromStores)([v.default], () => v.default.getState().newClipIds), {
                    AnalyticsLocationProvider: k
                } = (0, m.default)(p.default.CLIPS_GALLERY);
                (0, h.default)({
                    type: r.ImpressionTypes.MODAL,
                    name: r.ImpressionNames.CLIP_GALLERY_VIEWED,
                    properties: {
                        number_of_clips_loaded: b.length
                    }
                }, {
                    disableTrack: A
                }, [b.length, A]), s.useEffect(() => L.clearNewClipIds, []);
                let V = s.useMemo(() => d(b).filter(e => {
                    if ("" === D.trim()) return !0;
                    let t = D.toLowerCase();
                    return null != e.name && "" !== e.name && i(t, e.name.toLowerCase()) || i(t, e.applicationName.toLowerCase())
                }).sort((e, t) => "ascending" === M ? C.default.compare(e.id, t.id) : "descending" === M ? C.default.compare(t.id, e.id) : 0).chunk(3).value(), [b, D, M]);
                s.useEffect(() => {
                    (async function e() {
                        R(!0);
                        try {
                            await L.loadClipsDirectory(P)
                        } finally {
                            R(!1)
                        }
                    })()
                }, [P]);
                let B = s.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: s
                            } = await l.el("473070").then(l.bind(l, "473070"));
                            return l => (0, a.jsx)(s, {
                                ...l,
                                channelId: t,
                                clip: e
                            })
                        }, {
                            modalKey: S.CLIPS_EDIT_MODAL_KEY
                        })
                    }, [t]),
                    {
                        onShareClick: O,
                        canAttachFiles: z
                    } = (0, x.default)({
                        channelId: t,
                        setExporting: H
                    }),
                    Y = s.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await l.el("386092").then(l.bind(l, "386092"));
                            return l => (0, a.jsx)(t, {
                                clip: e,
                                ...l,
                                onDelete: () => l.onClose()
                            })
                        })
                    }, []),
                    F = s.useCallback(e => {
                        let {
                            row: t
                        } = e, l = V[t];
                        return (0, a.jsx)("div", {
                            className: _.clipsRow,
                            children: l.map(e => (0, a.jsx)(g.default, {
                                actionsDisabled: null != y,
                                exporting: y === e.id,
                                isNew: w.includes(e.id),
                                onDelete: Y,
                                onEdit: B,
                                onShare: e => O({
                                    clip: e,
                                    onShareComplete: () => u.closeModal(S.CLIPS_GALLERY_MODAL_KEY)
                                }),
                                canShare: z,
                                clip: e
                            }, e.id))
                        }, "clips-gallery-".concat(t))
                    }, [V, w, y, O, Y, B, z]),
                    G = A || 0 !== V.length ? A ? (0, a.jsx)("div", {
                        className: _.spinnerContainer,
                        children: (0, a.jsx)(f.Spinner, {})
                    }) : (0, a.jsx)(f.List, {
                        className: _.clipGrid,
                        sections: [V.length],
                        sectionHeight: 0,
                        rowHeight: 328.25,
                        renderRow: F
                    }) : (0, a.jsx)(E.default, {
                        isEmptyBecauseQuery: b.length > 0,
                        closePopout: n
                    });
                return (0, a.jsx)(f.ModalRoot, {
                    size: f.ModalSize.DYNAMIC,
                    transitionState: o,
                    className: _.root,
                    children: (0, a.jsxs)(k, {
                        children: [(0, a.jsx)(N.default, {
                            onClose: n,
                            filterQuery: I,
                            setFilterQuery: j,
                            sortOrder: M,
                            setSortOrder: T
                        }), G]
                    })
                })
            }
        },
        16002: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                shareClip: function() {
                    return m
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                n = l("42203"),
                i = l("474643"),
                o = l("599110"),
                d = l("299039"),
                r = l("412861"),
                c = l("13136"),
                u = l("803725"),
                f = l("80028"),
                p = l("49111");
            async function m(e, t) {
                let {
                    channelId: m,
                    editMetadata: h,
                    analyticsLocations: C
                } = t, v = n.default.getChannel(m);
                if (null != v) try {
                    var L;
                    let t = await (0, u.exportClip)(e, h),
                        l = null !== (L = e.name) && void 0 !== L ? L : (0, f.CLIP_NAME_TEMPLATE)(d.default.extractTimestamp(e.id)),
                        a = (0, c.default)(l),
                        s = "".concat("" !== a ? a : "clip", ".mp4");
                    (0, r.promptToUpload)([new File([t], s, {
                        type: "video/mp4"
                    })], v, i.DraftType.ChannelMessage, {
                        isClip: !0
                    }), o.default.track(p.AnalyticEvents.CLIP_SHARED, {
                        location_stack: C,
                        guild_id: v.guild_id,
                        channel_id: v.id,
                        channel_type: v.type,
                        application_id: e.applicationId
                    })
                } catch (e) {
                    throw f.ClipsLogger.error(e), e
                } else(0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("143909").then(l.bind(l, "143909"));
                    return l => (0, a.jsx)(t, {
                        ...l,
                        clip: e,
                        editMetadata: h
                    })
                })
            }
        },
        142485: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("884691"),
                s = l("65597"),
                n = l("685665"),
                i = l("42203"),
                o = l("957255"),
                d = l("16002"),
                r = l("49111"),
                c = e => {
                    let {
                        channelId: t,
                        setExporting: l
                    } = e, {
                        analyticsLocations: c
                    } = (0, n.default)(), u = (0, s.default)([i.default], () => i.default.getChannel(t)), f = null == u ? void 0 : u.isPrivate(), p = (0, s.default)([o.default], () => null == t || f || o.default.can(r.Permissions.ATTACH_FILES, u) && o.default.can(r.Permissions.SEND_MESSAGES, u)), m = a.useCallback(async e => {
                        var a, s, n, i, o, r, u, f, p, m;
                        let {
                            clip: h,
                            cropData: C,
                            applicationAudioEnabled: v,
                            voiceAudioEnabled: L,
                            onShareComplete: x
                        } = e;
                        l(h.id);
                        try {
                            await (0, d.shareClip)(h, {
                                channelId: t,
                                analyticsLocations: c,
                                editMetadata: {
                                    start: null !== (r = null !== (o = null == C ? void 0 : C.start) && void 0 !== o ? o : null === (a = h.editMetadata) || void 0 === a ? void 0 : a.start) && void 0 !== r ? r : 0,
                                    end: null !== (f = null !== (u = null == C ? void 0 : C.end) && void 0 !== u ? u : null === (s = h.editMetadata) || void 0 === s ? void 0 : s.end) && void 0 !== f ? f : h.length / 1e3,
                                    applicationAudio: null === (p = null != v ? v : null === (n = h.editMetadata) || void 0 === n ? void 0 : n.applicationAudio) || void 0 === p || p,
                                    voiceAudio: null === (m = null != L ? L : null === (i = h.editMetadata) || void 0 === i ? void 0 : i.voiceAudio) || void 0 === m || m
                                }
                            })
                        } catch (e) {} finally {
                            null == x || x(), l(null)
                        }
                    }, [t, c, l]);
                    return {
                        onShareClick: m,
                        canAttachFiles: p
                    }
                }
        },
        491920: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("469563"),
                n = l("743087"),
                i = l("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: l = 32,
                        color: s = "currentColor",
                        ...n
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(n),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                            fill: s
                        })
                    })
                }, n.ShareIcon)
        },
        826432: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("469563"),
                n = l("49097"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        className: n,
                        foreground: i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: n,
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, n.SparklesIcon)
        },
        15165: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: n = "currentColor",
                    foreground: i,
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: l,
                    viewBox: "0 0 18 20",
                    children: (0, a.jsx)("path", {
                        fill: n,
                        className: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z"
                    })
                })
            }
        }
    }
]);
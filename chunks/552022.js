            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var a, n, i = l("37983"),
                s = l("884691"),
                r = l("414456"),
                o = l.n(r),
                d = l("866227"),
                u = l.n(d),
                c = l("446674"),
                f = l("862337"),
                p = l("185370"),
                m = l("504318"),
                h = l("77078"),
                E = l("812204"),
                v = l("685665"),
                _ = l("730859"),
                C = l("739034"),
                g = l("697218"),
                L = l("944832"),
                x = l("561744"),
                T = l("491920"),
                I = l("826432"),
                S = l("228220"),
                N = l("15165"),
                A = l("58608"),
                M = l("599110"),
                R = l("449008"),
                P = l("299039"),
                j = l("803725"),
                y = l("135284"),
                D = l("49111"),
                O = l("782340"),
                H = l("593262"),
                w = l("339010");
            (n = a || (a = {})).DELETE = "delete", n.EDIT = "edit", n.SHARE = "share";
            var b = function(e) {
                var t, l, a;
                let {
                    clip: n,
                    exporting: r,
                    actionsDisabled: d,
                    isNew: u,
                    onDelete: p,
                    onEdit: m,
                    onShare: C
                } = e, L = (0, c.useStateFromStoresArray)([g.default], () => n.users.map(e => g.default.getUser(e)).filter(R.isNotNullish)), {
                    AnalyticsLocationProvider: T
                } = (0, v.default)(E.default.CLIPS_GALLERY_ITEM), [I, S] = s.useState(!1), N = s.useRef(null), A = (0, x.default)(null !== (a = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), j = s.useRef(new f.DelayedCall(500, () => {
                    var e;
                    let t = N.current;
                    null != t && t.paused && (t.currentTime = A.current, null === (e = N.current) || void 0 === e || e.play())
                })), y = s.useCallback(() => {
                    var e;
                    S(!0), null === (e = j.current) || void 0 === e || e.delay()
                }, []), w = s.useCallback(() => {
                    var e, t, l;
                    S(!1);
                    let a = N.current;
                    null === (e = j.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = n.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
                }, [null === (l = n.editMetadata) || void 0 === l ? void 0 : l.start]), b = s.useCallback(e => {
                    var t, l;
                    (null === (l = e.relatedTarget) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && w()
                }, [w]), B = new Date(P.default.extractTimestamp(n.id)), z = B.toLocaleDateString(), F = B.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }), G = "".concat(z, " • ").concat(F);
                return (0, i.jsx)(T, {
                    children: (0, i.jsxs)(h.ClickableContainer, {
                        "aria-disabled": d,
                        "aria-label": O.default.Messages.EDIT,
                        onClick: d ? void 0 : () => {
                            m(n), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
                        },
                        className: o(H.clipItem, {
                            [H.disabled]: d
                        }),
                        onBlur: b,
                        onFocus: y,
                        onMouseOver: y,
                        onMouseLeave: w,
                        children: [(0, i.jsx)(k, {
                            clip: n,
                            isNew: u,
                            videoRef: N
                        }), (0, i.jsxs)("div", {
                            className: H.clipFooter,
                            children: [(0, i.jsx)(U, {
                                clip: n,
                                focused: I,
                                onFocus: y
                            }), (0, i.jsx)(h.Text, {
                                className: H.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: n.applicationName
                            }), (0, i.jsx)(h.Text, {
                                className: H.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: G
                            }), (0, i.jsxs)("div", {
                                className: H.usersAndDelete,
                                children: [(0, i.jsx)(_.default, {
                                    maxUsers: 4,
                                    users: L,
                                    onFocus: e => {
                                        var t, l, a, n;
                                        let i = e.relatedTarget,
                                            s = null === (l = e.currentTarget.parentElement) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement;
                                        if ((null == i ? void 0 : i.parentElement) !== s)(null == i ? void 0 : null === (n = i.parentElement) || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement) !== s && y()
                                    }
                                }), I && (0, i.jsx)(V, {
                                    clip: n,
                                    actionsDisabled: d,
                                    exporting: r,
                                    onDelete: p,
                                    onEdit: m,
                                    onShare: C,
                                    onBlur: e => {
                                        var t;
                                        (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && w()
                                    }
                                })]
                            })]
                        })]
                    })
                })
            };

            function k(e) {
                let {
                    clip: t,
                    isNew: l,
                    videoRef: a
                } = e, n = 0 === t.length, [r, o] = s.useMemo(() => {
                    let e = t.length,
                        l = !1,
                        a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
                    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, u.duration(e)]
                }, [t.length, t.editMetadata]), d = "".concat(o.seconds()).padStart(2, "0");
                return (0, i.jsxs)(L.default, {
                    aspectRatio: 16 / 9,
                    className: H.clipThumbContainer,
                    children: [(0, i.jsx)(B, {
                        clip: t,
                        videoRef: a
                    }), (0, i.jsxs)("div", {
                        className: H.clipBadges,
                        children: [n && (0, i.jsx)("div", {
                            className: H.clipProcessingBadge,
                            children: (0, i.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: O.default.Messages.CLIPS_PROCESSING_BADGE
                            })
                        }), !n && l && (0, i.jsxs)(h.Text, {
                            className: H.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [(0, i.jsx)(I.default, {
                                className: H.newIcon
                            }), O.default.Messages.NEW.toUpperCase()]
                        }), !n && (0, i.jsxs)("div", {
                            className: H.clipDurationBadge,
                            children: [r ? (0, i.jsx)(N.default, {
                                className: H.clipDurationEditIcon
                            }) : null, (0, i.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: "".concat(o.minutes(), ":").concat(d)
                            })]
                        })]
                    })]
                })
            }

            function U(e) {
                var t;
                let {
                    clip: l,
                    focused: a,
                    onFocus: n
                } = e, [r, d] = s.useState(l.name), u = !l.name, [c, f] = s.useState(!1), [E, v] = s.useState(null !== (t = l.name) && void 0 !== t ? t : ""), [_, C] = s.useState(!1), g = async () => {
                    C(!0), await (0, j.updateClipMetadata)(l.id, {
                        name: "" === E ? void 0 : E
                    }), C(!1), f(!1)
                };
                return (s.useEffect(() => {
                    if (r !== l.name) {
                        var e;
                        d(l.name), v(null !== (e = l.name) && void 0 !== e ? e : "")
                    }
                }, [l.name, r]), c) ? (0, i.jsx)(h.TextInput, {
                    inputClassName: o(w["heading-lg/medium"], H.clipTitleInput),
                    onClick: e => e.stopPropagation(),
                    value: E,
                    autoFocus: !0,
                    onKeyDown: e => {
                        "Enter" === e.key && g()
                    },
                    disabled: _,
                    onChange: v,
                    onBlur: g
                }) : (0, i.jsxs)(h.Clickable, {
                    className: H.clipTitleInputPlaceholder,
                    onFocus: n,
                    onClick: e => {
                        e.stopPropagation(), f(!0)
                    },
                    children: [u ? (0, i.jsx)(h.Heading, {
                        className: H.clipTitle,
                        color: "text-muted",
                        variant: "heading-lg/medium",
                        children: O.default.Messages.CLIPS_ADD_A_TITLE
                    }) : (0, i.jsx)(h.Heading, {
                        className: H.clipTitle,
                        color: "text-normal",
                        variant: "heading-lg/medium",
                        children: l.name
                    }), a && (0, i.jsx)(m.PencilIcon, {
                        "aria-label": O.default.Messages.EDIT,
                        color: h.tokens.colors.TEXT_MUTED,
                        height: p.ICON_SIZE.sm,
                        width: p.ICON_SIZE.sm,
                        className: H.clipTitleIcon
                    })]
                })
            }

            function B(e) {
                let {
                    clip: t,
                    videoRef: l
                } = e, a = (0, y.useClipProtocolURL)(t);
                return 0 === t.length ? (0, i.jsx)(h.Spinner, {
                    type: h.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: H.clipThumb
                }) : null != a ? (0, i.jsx)(A.default, {
                    preload: "metadata",
                    muted: !0,
                    poster: t.thumbnail,
                    src: a,
                    loop: !0,
                    className: H.clipThumb,
                    ref: l
                }) : (0, i.jsx)("img", {
                    alt: "",
                    src: t.thumbnail,
                    className: H.clipThumb
                })
            }

            function V(e) {
                let {
                    clip: t,
                    exporting: l,
                    actionsDisabled: a,
                    onDelete: n,
                    onEdit: s,
                    onShare: r,
                    onBlur: o
                } = e, d = (0, C.default)();
                return (0, i.jsxs)("div", {
                    className: H.buttonContainer,
                    children: [null != n && (0, i.jsx)(h.Tooltip, {
                        text: O.default.Messages.DELETE,
                        children: e => (0, i.jsx)(h.Button, {
                            ...e,
                            disabled: a,
                            color: d ? h.Button.Colors.RED : h.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), e.shiftKey ? (0, j.deleteClip)(t.filepath) : n(t), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: "delete"
                                })
                            },
                            className: H.button,
                            size: h.Button.Sizes.NONE,
                            look: h.Button.Looks.FILLED,
                            children: (0, i.jsx)(S.default, {
                                className: H.miniIcon
                            })
                        })
                    }), (0, i.jsx)(h.Tooltip, {
                        text: O.default.Messages.EDIT,
                        children: e => (0, i.jsx)(h.Button, {
                            ...e,
                            disabled: a,
                            color: h.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), s(t), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: "edit"
                                })
                            },
                            className: H.button,
                            size: h.Button.Sizes.NONE,
                            look: h.Button.Looks.FILLED,
                            children: (0, i.jsx)(N.default, {
                                className: H.miniIcon
                            })
                        })
                    }), (0, i.jsx)(h.Button, {
                        disabled: a && !l,
                        submitting: l,
                        color: h.Button.Colors.BRAND,
                        onBlur: o,
                        onClick: e => {
                            e.stopPropagation(), r(t), M.default.track(D.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                type: "share"
                            })
                        },
                        className: H.button,
                        size: h.Button.Sizes.NONE,
                        look: h.Button.Looks.FILLED,
                        children: (0, i.jsx)(T.default, {
                            className: H.miniIcon
                        })
                    })]
                })
            }
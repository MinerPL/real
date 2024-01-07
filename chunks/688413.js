            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return V
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("669491"),
                d = s("77078"),
                u = s("823411"),
                c = s("133403"),
                S = s("810549"),
                E = s("546463"),
                f = s("686470"),
                m = s("568307"),
                T = s("941886"),
                _ = s("931138"),
                g = s("398288"),
                h = s("462579"),
                I = s("867544"),
                N = s("907566"),
                p = s("267675"),
                C = s("688342"),
                A = s("486952"),
                O = s("599110"),
                x = s("117362"),
                M = s("773336"),
                R = s("161778"),
                v = s("49111"),
                L = s("782340"),
                D = s("547193"),
                P = s("212029"),
                j = s("173791"),
                b = s("405879"),
                U = s("926622");
            let y = r.default.connectStores([R.default], () => ({
                    theme: R.default.theme
                }))(T.default),
                B = (0, M.isWindows)();

            function F(e) {
                let {
                    onClose: t
                } = e, s = (0, r.useStateFromStores)([m.default], () => m.default.getCandidateGames()), [l, o] = n.useState(null), c = s.map(e => ({
                    value: e.pid,
                    label: null != e.name ? e.name : ""
                }));
                return (0, a.jsxs)(d.Dialog, {
                    className: i(D.addGamePopout, P.elevationBorderHigh),
                    "aria-label": L.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME,
                    children: [(0, a.jsx)(d.SearchableSelect, {
                        placeholder: L.default.Messages.SELECT,
                        value: l,
                        options: c,
                        onChange: function(e) {
                            o(e)
                        }
                    }), (0, a.jsx)(d.FormDivider, {
                        className: i(U.marginTop8, U.marginBottom8)
                    }), (0, a.jsxs)("div", {
                        className: i(D.actions, j.horizontal),
                        children: [(0, a.jsx)(d.Button, {
                            className: D.cancelButton,
                            look: d.ButtonLooks.LINK,
                            color: d.ButtonColors.PRIMARY,
                            onClick: t,
                            children: L.default.Messages.CANCEL
                        }), (0, a.jsx)(d.Button, {
                            disabled: null == l,
                            onClick: function() {
                                null != l && (u.default.addGame(l), t())
                            },
                            children: L.default.Messages.SETTINGS_GAMES_ADD_NEW_GAME
                        })]
                    })]
                })
            }

            function G(e) {
                var t;
                let {
                    rawGame: s,
                    nowPlaying: l = !1,
                    isOverride: S
                } = e, T = (0, r.useStateFromStoresObject)([E.default, m.default, f.default], () => (0, m.transformForGameSettings)(s)), [x, M] = n.useState(!1), [R, P] = n.useState(null !== (t = T.name) && void 0 !== t ? t : "???"), U = i(j.flexCenter, {
                    [D.game]: !l,
                    [D.activeGame]: l,
                    [b.card]: !l,
                    [D.nowPlaying]: null != T && l
                });

                function y() {
                    u.default.deleteEntry(T)
                }

                function F() {
                    T.name !== R && u.default.editName(T, R)
                }

                function G(e) {
                    13 === e.keyCode && (e.currentTarget.blur(), e.preventDefault())
                }

                function k() {
                    u.default.toggleDetection(T)
                }

                function w() {
                    if (x) return;
                    let e = null != T.id ? E.default.getDetectableGame(T.id) : null;
                    O.default.track(v.AnalyticEvents.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                        application_id: null == e ? void 0 : e.id,
                        game_name: T.name
                    }), (0, d.showToast)((0, d.createToast)(L.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION_CONFIRMATION.format({
                        gameName: T.name
                    }), d.ToastType.SUCCESS)), M(!0)
                }
                return (0, a.jsxs)("div", {
                    className: U,
                    children: [(0, a.jsxs)("div", {
                        className: i(D.gameNameLastPlayed, j.vertical),
                        children: [T.verified && !S ? (0, a.jsxs)("div", {
                            className: D.detectedApplication,
                            children: [(0, a.jsx)("div", {
                                className: D.gameName,
                                children: T.name
                            }), (0, a.jsx)(d.Tooltip, {
                                text: L.default.Messages.SETTINGS_GAMES_VERIFIED_ICON,
                                children: e => (0, a.jsx)(_.default, {
                                    className: D.gameVerifiedIcon,
                                    size: 18,
                                    color: o.default.unsafe_rawColors.BRAND_500.css,
                                    ...e,
                                    children: (0, a.jsx)(A.default, {
                                        width: 18,
                                        height: 18,
                                        color: o.default.unsafe_rawColors.WHITE_500.css
                                    })
                                })
                            })]
                        }) : (0, a.jsx)("input", {
                            className: i(D.gameName, D.gameNameInput),
                            type: "text",
                            maxLength: 128,
                            value: R,
                            onBlur: F,
                            onKeyDown: G,
                            onChange: e => P(e.target.value)
                        }), function() {
                            let e;
                            let {
                                played: t,
                                exePath: s
                            } = T;
                            return l ? e = L.default.Messages.SETTINGS_GAMES_NOW_PLAYING_STATE : null != t && "" !== t && (e = L.default.Messages.SETTINGS_GAMES_LAST_PLAYED.format({
                                when: t
                            })), (0, a.jsx)("div", {
                                className: D.lastPlayed,
                                children: (0, a.jsx)(g.default, {
                                    hoverText: null != s && "" !== s ? s.toUpperCase() : "",
                                    children: e
                                })
                            })
                        }()]
                    }), S ? null : x ? null : (0, a.jsx)("div", {
                        className: i(j.flexCenter, j.noWrap, j.justifyBetween, D.toggleContainer),
                        children: (0, a.jsx)(d.Tooltip, {
                            text: L.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: s
                                } = e;
                                return (0, a.jsx)(d.Clickable, {
                                    "aria-label": L.default.Messages.SETTINGS_GAMES_REPORT_INCORRECT_DETECTION,
                                    className: D.toggleIcon,
                                    onClick: w,
                                    onMouseEnter: t,
                                    onMouseLeave: s,
                                    children: (0, a.jsx)(N.default, {
                                        className: D.toggleIconOn,
                                        foreground: D.fill,
                                        width: 24,
                                        height: 24
                                    })
                                })
                            }
                        })
                    }), function() {
                        let {
                            detectable: e
                        } = T, t = e ? (0, a.jsx)(h.default, {
                            className: D.toggleIconOn,
                            foreground: D.fill,
                            width: 24,
                            height: 24
                        }) : (0, a.jsx)(I.default, {
                            className: D.toggleIconOff,
                            background: D.fill,
                            foreground: D.fill,
                            width: 24,
                            height: 24
                        });
                        return (0, a.jsx)("div", {
                            className: i(j.flexCenter, j.noWrap, j.justifyBetween, D.toggleContainer),
                            children: (0, a.jsx)(d.Tooltip, {
                                text: L.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
                                children: e => {
                                    let {
                                        onMouseEnter: s,
                                        onMouseLeave: n
                                    } = e;
                                    return (0, a.jsx)(d.Clickable, {
                                        "aria-label": L.default.Messages.SETTINGS_GAMES_TOGGLE_DETECTION,
                                        className: D.toggleIcon,
                                        onClick: k,
                                        onMouseEnter: s,
                                        onMouseLeave: n,
                                        children: t
                                    })
                                }
                            })
                        })
                    }(), function() {
                        if (!B) return null;
                        let {
                            overlay: e,
                            overlayWarn: t
                        } = T, s = e ? (0, a.jsx)(p.default, {
                            className: D.toggleIconOn,
                            foreground: D.fill
                        }) : (0, a.jsx)(C.default, {
                            className: D.toggleIconOff,
                            foreground: D.fill
                        }), n = t ? (0, a.jsx)(d.Tooltip, {
                            text: L.default.Messages.SETTINGS_GAMES_OVERLAY_WARNING,
                            children: e => (0, a.jsx)("i", {
                                className: D.overlayWarningIcon,
                                ...e
                            })
                        }) : null;
                        return (0, a.jsxs)("div", {
                            className: i(j.flexCenter, j.noWrap, j.justifyBetween, D.toggleContainer),
                            children: [n, (0, a.jsx)(d.Tooltip, {
                                text: L.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
                                children: t => {
                                    let {
                                        onMouseEnter: n,
                                        onMouseLeave: l
                                    } = t;
                                    return (0, a.jsx)(d.Clickable, {
                                        "aria-label": L.default.Messages.SETTINGS_GAMES_TOGGLE_OVERLAY,
                                        className: D.toggleIcon,
                                        onClick: () => {
                                            var t;
                                            return t = !e, void u.default.toggleOverlay(T, t)
                                        },
                                        onMouseEnter: n,
                                        onMouseLeave: l,
                                        children: s
                                    })
                                }
                            })]
                        })
                    }(), !l || S ? (0, a.jsx)(c.default, {
                        className: D.removeGame,
                        onClick: y
                    }) : null]
                })
            }

            function k() {
                return (0, a.jsx)("div", {
                    className: i(j.flexCenter, D.notDetected, D.activeGame),
                    children: (0, a.jsxs)("div", {
                        className: i(D.gameNameLastPlayed, j.vertical),
                        children: [(0, a.jsx)("div", {
                            className: D.gameName,
                            children: L.default.Messages.SETTINGS_GAMES_NO_GAME_DETECTED
                        }), (0, a.jsx)("div", {
                            className: D.lastPlayed,
                            children: L.default.Messages.SETTINGS_GAMES_NOT_PLAYING
                        })]
                    })
                })
            }

            function w(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsxs)(y, {
                    className: U.marginTop40,
                    children: [(0, a.jsx)(T.EmptyStateImage, {
                        darkSrc: s("867369"),
                        lightSrc: s("200324"),
                        width: 430,
                        height: 250
                    }), t]
                })
            }
            let H = (0, x.cachedFunction)(function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return new Set(t.map(e => e.exePath))
            });
            var V = function() {
                let e = (0, r.useStateFromStoresArray)([m.default], () => m.default.getGamesSeen(!0)),
                    {
                        runningGame: t,
                        overrideExePaths: s
                    } = (0, r.useStateFromStoresObject)([m.default], () => ({
                        runningGame: m.default.getVisibleGame(),
                        overrideExePaths: H(...m.default.getOverrides())
                    }));
                return n.useEffect(() => ((0, S.watchCandidateGames)(), S.stopWatchingCandidateGames), []), (0, a.jsxs)(d.FormSection, {
                    tag: "h1",
                    title: L.default.Messages.REGISTERED_GAMES,
                    children: [null != t ? (0, a.jsx)(G, {
                        rawGame: t,
                        isOverride: s.has(t.exePath),
                        nowPlaying: !0
                    }, t.exePath) : (0, a.jsx)(k, {}), (0, a.jsxs)("div", {
                        className: i(D.nowPlayingAdd, U.marginReset, U.marginTop8, U.marginBottom20),
                        children: [(0, a.jsx)("span", {
                            children: L.default.Messages.SETTINGS_GAMES_NOT_SEEING_GAME
                        }), (0, a.jsx)(d.Popout, {
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, a.jsx)(F, {
                                    onClose: t
                                })
                            },
                            align: "center",
                            position: "bottom",
                            children: e => (0, a.jsx)(d.Button, {
                                ...e,
                                look: d.ButtonLooks.LINK,
                                size: d.ButtonSizes.MIN,
                                color: d.ButtonColors.LINK,
                                children: L.default.Messages.SETTINGS_GAMES_ADD_GAME
                            })
                        })]
                    }), 0 === e.length ? (0, a.jsx)(w, {
                        children: (0, a.jsx)(T.EmptyStateText, {
                            children: L.default.Messages.SETTINGS_GAMES_NO_GAMES_HEADER
                        })
                    }) : (0, a.jsxs)(d.FormSection, {
                        className: U.marginTop40,
                        children: [(0, a.jsx)(d.FormTitle, {
                            className: U.marginBottom4,
                            children: L.default.Messages.SETTINGS_GAMES_ADDED_GAMES_LABEL
                        }), e.map(e => (0, a.jsx)(G, {
                            rawGame: e,
                            isOverride: s.has(e.exePath)
                        }, e.exePath))]
                    })]
                })
            }
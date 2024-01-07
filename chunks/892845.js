            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return R
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                i = a("627445"),
                n = a.n(i),
                r = a("759843"),
                o = a("65597"),
                d = a("77078"),
                u = a("327037"),
                c = a("152584"),
                E = a("599417"),
                f = a("506885"),
                m = a("697218"),
                S = a("945330"),
                _ = a("599110"),
                I = a("158998"),
                h = a("255403"),
                N = a("2581"),
                M = a("415133"),
                T = a("22658"),
                g = a("998957"),
                O = a("426149"),
                L = a("767282"),
                x = a("935583"),
                C = a("15881"),
                P = a("49111"),
                p = a("782340"),
                v = a("968414");

            function R(e) {
                let t, {
                        source: a,
                        transitionState: i,
                        onClose: R,
                        oneClickFlow: j = !1
                    } = e,
                    [y, D] = l.useState(j ? C.PomeloModalSlides.SUGGESTIONS : C.PomeloModalSlides.INFO),
                    [U, G] = l.useState(!1),
                    [F, w] = l.useState(null),
                    [B, b] = l.useState(j ? x.EditState.SUGGESTION : x.EditState.NONE),
                    [k, H] = l.useState(!1),
                    [W, V] = l.useState(!1),
                    X = l.useRef(null),
                    z = (0, o.default)([N.default], () => N.default.isCurrentUsernameInvalid()),
                    Y = (0, o.default)([m.default], () => {
                        let e = m.default.getCurrentUser();
                        return n(null != e, "PomeloModal: user cannot be undefined"), e
                    }),
                    {
                        usernameSuggestion: Z,
                        usernameSuggestionLoading: K
                    } = (0, T.useUsernameSuggestion)(j ? x.TIMEOUT_TIME : void 0);
                l.useEffect(() => {
                    B === x.EditState.EDIT_USERNAME && V(!0), _.default.track(P.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
                        source: a,
                        step: B
                    })
                }, [B, a]), l.useEffect(() => {
                    !W && !k && null != Z && Z.length > 0 && q(e => ({
                        ...e,
                        username: Z
                    }))
                }, [Z, W, k]);
                let [Q, q] = l.useState({
                    username: (0, M.getDefaultPomelo)(Y),
                    globalName: I.default.getName(Y)
                }), J = e => {
                    w(null), null != e.username && H(!0), q(t => ({
                        ...t,
                        ...e
                    }))
                }, $ = l.useMemo(() => [{
                    slideId: C.PomeloModalSlides.INFO,
                    next: C.PomeloModalSlides.EDIT_SCREEN,
                    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
                }, {
                    slideId: C.PomeloModalSlides.EDIT_SCREEN,
                    next: C.PomeloModalSlides.FINISH_LATER,
                    back: C.PomeloModalSlides.INFO,
                    footerButtons: [B === x.EditState.PREVIEW ? "GOT_IT" : "BACK", B === x.EditState.PREVIEW ? "GOT_IT" : B === x.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
                }, {
                    slideId: C.PomeloModalSlides.FINISH_LATER,
                    back: C.PomeloModalSlides.EDIT_SCREEN
                }, {
                    slideId: C.PomeloModalSlides.SUGGESTIONS,
                    footerButtons: [B === x.EditState.PREVIEW ? "GOT_IT" : "UPDATE"]
                }, {
                    slideId: C.PomeloModalSlides.FINISH_LATER
                }], [B]), ee = $.length, et = l.useCallback(async () => {
                    if (Q.globalName.length <= 0) {
                        let e = p.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                            minNum: 1,
                            maxNum: 32
                        });
                        w(e), _.default.track(P.AnalyticEvents.POMELO_ERRORS, {
                            reason: e,
                            display_name_error: !0,
                            location: "modal"
                        });
                        return
                    }
                    if (I.default.getGlobalName(Y) === Q.globalName) {
                        b(x.EditState.EDIT_USERNAME);
                        return
                    }
                    try {
                        w(null), G(!0), await (0, c.saveAccountRequest)({
                            global_name: Q.globalName
                        }), b(x.EditState.EDIT_USERNAME)
                    } catch (a) {
                        let e = new E.default(a),
                            t = e.getAnyErrorMessage();
                        _.default.track(P.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            display_name_error: !0,
                            location: "modal"
                        }), w(t)
                    } finally {
                        G(!1)
                    }
                }, [Y, Q]), ea = l.useCallback(async () => {
                    try {
                        w(null), G(!0), await h.default.createPomelo({
                            username: (0, M.formatPomeloForEditing)(Q.username)
                        }, j), await (0, u.fetchProfile)(Y.id), b(x.EditState.PREVIEW)
                    } catch (a) {
                        let e = new E.default(a),
                            t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : p.default.Messages.ERROR_GENERIC_TITLE;
                        w(t), _.default.track(P.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            username_error: !0,
                            location: "modal",
                            one_click_flow: j
                        })
                    } finally {
                        G(!1)
                    }
                }, [Q, Y.id, j]), es = z || (0, M.shouldSkipToEditUsername)(Y), el = l.useCallback(() => {
                    b(es ? x.EditState.EDIT_USERNAME : x.EditState.EDIT_DISPLAY_NAME), D($[Math.min(ee - 1, y + 1)].slideId)
                }, [y, $, ee, es]), ei = l.useCallback(() => {
                    w(null), y === C.PomeloModalSlides.EDIT_SCREEN ? B === x.EditState.EDIT_USERNAME ? es ? (b(x.EditState.NONE), D($[Math.max(0, y - 1)].slideId)) : b(x.EditState.EDIT_DISPLAY_NAME) : B === x.EditState.EDIT_DISPLAY_NAME ? (b(x.EditState.NONE), D($[Math.max(0, y - 1)].slideId)) : B === x.EditState.PREVIEW && b(x.EditState.EDIT_USERNAME) : D($[Math.max(0, y - 1)].slideId)
                }, [$, y, B, es]), en = l.useCallback(() => {
                    D(C.PomeloModalSlides.FINISH_LATER)
                }, []), er = l.useMemo(() => {
                    if (y === C.PomeloModalSlides.EDIT_SCREEN && B === x.EditState.EDIT_DISPLAY_NAME) return et;
                    if (y === C.PomeloModalSlides.EDIT_SCREEN && B === x.EditState.EDIT_USERNAME) return ea;
                    if (y === C.PomeloModalSlides.SUGGESTIONS && B === x.EditState.SUGGESTION) return ea;
                    else return el
                }, [y, B, et, ea, el]), eo = l.useMemo(() => {
                    var e, t;
                    return A(null !== (t = null === (e = $.find(e => e.slideId === y)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
                        handleNext: er,
                        handleBack: ei,
                        handleRemindMeLater: en,
                        onClose: R
                    }, U, K, k)
                }, [ei, en, er, R, $, y, U, K, k]), ed = l.useMemo(() => (0, M.getUserAvatarURLForPomelo)(Y), [Y]);
                l.useLayoutEffect(() => {
                    (0, f.default)(Y.id, ed)
                }, [Y, ed]), l.useEffect(() => {
                    var e, t;
                    switch (B) {
                        case x.EditState.EDIT_DISPLAY_NAME:
                            null === (e = X.current) || void 0 === e || e.focusDisplayName();
                            break;
                        case x.EditState.EDIT_USERNAME:
                        case x.EditState.SUGGESTION:
                            null === (t = X.current) || void 0 === t || t.focusUsername()
                    }
                }, [B]);
                return !k && null == F && (B === x.EditState.EDIT_USERNAME ? t = p.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                    source: Y.username
                }) : B === x.EditState.SUGGESTION && (K || null != Z) && (t = p.default.Messages.POMELO_SUGGESTIONS_OCF)), (0, s.jsxs)(d.ModalRoot, {
                    className: v.modalRoot,
                    impression: {
                        impressionName: r.ImpressionNames.POMELO_LANDING,
                        impressionProperties: {
                            source: a,
                            impression_group: r.ImpressionGroups.POMELO_FLOW,
                            one_click_flow: j
                        }
                    },
                    transitionState: i,
                    size: d.ModalSize.DYNAMIC,
                    children: [(0, s.jsx)(d.Button, {
                        onClick: R,
                        size: d.Button.Sizes.MIN,
                        look: d.Button.Looks.BLANK,
                        className: v.closeContainer,
                        "aria-label": p.default.Messages.CLOSE,
                        children: (0, s.jsx)(S.default, {
                            width: 15,
                            height: 15,
                            className: v.close
                        })
                    }), (0, s.jsx)(d.ModalContent, {
                        className: v.contentContainer,
                        children: (0, s.jsxs)(d.Slides, {
                            activeSlide: y,
                            width: 480,
                            children: [(0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.INFO,
                                children: (0, s.jsx)(L.default, {
                                    user: Y
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.EDIT_SCREEN,
                                children: (0, s.jsx)(g.default, {
                                    user: Y,
                                    error: F,
                                    editState: B,
                                    userRef: X,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => b(x.EditState.EDIT_USERNAME),
                                    onFocusDisplayName: () => b(x.EditState.EDIT_DISPLAY_NAME),
                                    onClose: R
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.FINISH_LATER,
                                children: (0, s.jsx)(O.default, {
                                    onClose: R
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: C.PomeloModalSlides.SUGGESTIONS,
                                children: (0, s.jsx)(g.default, {
                                    user: Y,
                                    error: F,
                                    editState: B,
                                    userRef: X,
                                    formValues: Q,
                                    footerNotice: t,
                                    onChangeFormValue: J,
                                    onFocusUsername: () => b(x.EditState.SUGGESTION),
                                    onFocusDisplayName: () => b(x.EditState.EDIT_DISPLAY_NAME),
                                    onClose: R,
                                    usernameSuggestionLoading: K,
                                    oneClickFlow: j
                                })
                            })]
                        })
                    }), eo]
                })
            }
            let A = (e, t, a, l, i) => 0 === e.length ? null : (0, s.jsxs)(d.ModalFooter, {
                className: v.footer,
                children: [(0, s.jsxs)("div", {
                    className: v.inline,
                    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(d.Button, {
                        className: v.unfilledButton,
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.BLANK,
                        color: d.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children: p.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
                    }), e.includes("NEXT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: p.default.Messages.NEXT
                    }), e.includes("SUBMIT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: p.default.Messages.SUBMIT
                    }), e.includes("GET_STARTED") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: p.default.Messages.GET_STARTED
                    }), e.includes("GOT_IT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: p.default.Messages.GOT_IT
                    }), e.includes("UPDATE") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        disabled: l && !i,
                        submitting: a,
                        onClick: t.handleNext,
                        children: p.default.Messages.UPDATE
                    })]
                }), e.includes("BACK") && (0, s.jsx)(d.Button, {
                    className: v.unfilledButton,
                    type: "button",
                    size: d.Button.Sizes.SMALL,
                    look: d.Button.Looks.BLANK,
                    color: d.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: p.default.Messages.BACK
                })]
            })
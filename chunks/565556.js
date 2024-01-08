            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("669491"),
                i = l("266491"),
                o = l("708253"),
                d = l("77078"),
                r = l("851387"),
                u = l("45299"),
                C = l("716241"),
                c = l("685665"),
                f = l("271938"),
                m = l("965397"),
                E = l("530346"),
                M = l("781896"),
                T = l("599110"),
                h = l("130037"),
                x = l("466818"),
                _ = l("624663"),
                H = l("49111"),
                A = l("782340"),
                N = l("275699");

            function p(e) {
                var t;
                let {
                    guildId: p
                } = e, {
                    analyticsLocations: g
                } = (0, c.default)(), S = null !== (t = null == g ? void 0 : g[0]) && void 0 !== t ? t : null, L = (0, x.useCanAccessBulkBanningFeature)(p, S), {
                    selectedUserIds: I,
                    clearSelection: v
                } = (0, _.default)(p), R = I.size > 0, j = async (e, t, l, a) => {
                    try {
                        let n = await r.default.banMultipleUsers(e, t, l, a);
                        (0, d.showToast)((0, d.createToast)(A.default.Messages.BAN_MULTIPLE_SUCCESS_TOAST, d.ToastType.SUCCESS)), T.default.track(H.AnalyticEvents.BULK_MODERATION_ACTION_COMPLETED, {
                            ...(0, C.collectGuildAnalyticsMetadata)(e),
                            action_type: h.ModerationActionType.BAN,
                            target_user_ids: [...I],
                            mod_user_id: f.default.getId(),
                            successful_user_ids: n.body.banned_users,
                            location: S
                        })
                    } catch (e) {
                        (0, d.showToast)((0, d.createToast)(A.default.Messages.BAN_MULTIPLE_FAILED_TOAST, d.ToastType.FAILURE))
                    }
                    v()
                }, b = n.useCallback(() => {
                    v()
                }, [v]), O = (0, a.jsxs)("span", {
                    className: N.messageContainer,
                    children: [(0, a.jsx)(M.default, {
                        width: 24,
                        height: 24,
                        color: (0, o.useToken)(s.default.unsafe_rawColors.PRIMARY_500).hex()
                    }), (0, a.jsx)(d.Text, {
                        variant: "heading-md/bold",
                        color: "text-normal",
                        children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_SELECTED_MEMBERS_MESSAGE.format({
                            count: I.size
                        })
                    }), (0, a.jsx)(d.Button, {
                        color: d.Button.Colors.LINK,
                        look: d.Button.Looks.LINK,
                        onClick: b,
                        className: N.clearButton,
                        children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_CLEAR_SELECTION
                    })]
                }), D = (0, a.jsxs)("span", {
                    className: N.buttonContainer,
                    children: [(0, a.jsx)(E.default, {
                        width: 20,
                        height: 20
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-sm/semibold",
                        children: A.default.Messages.MEMBER_SAFETY_ACTION_NOTICE_BAN_ACTION
                    })]
                });
                return L ? (0, a.jsx)(i.default, {
                    component: "div",
                    className: N.saveNoticeContainer,
                    children: R && (0, a.jsx)(m.default, {
                        children: (0, a.jsx)(u.default, {
                            onSave: () => {
                                T.default.track(H.AnalyticEvents.BULK_MODERATION_ACTION_STARTED, {
                                    ...(0, C.collectGuildAnalyticsMetadata)(p),
                                    action_type: h.ModerationActionType.BAN,
                                    target_user_ids: [...I],
                                    mod_user_id: f.default.getId(),
                                    location: S
                                }), (0, d.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await l.el("743506").then(l.bind(l, "743506"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        guildId: p,
                                        canBulkBan: L,
                                        userIds: I,
                                        onBanMultiple: j
                                    })
                                })
                            },
                            onSaveText: D,
                            onSaveButtonColor: d.ButtonColors.RED,
                            message: O
                        })
                    })
                }) : null
            }
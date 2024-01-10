            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("383018"),
                r = n("679653"),
                o = n("474643"),
                u = n("247013"),
                d = n("88093"),
                c = n("778588"),
                f = n("957255"),
                h = n("27618"),
                C = n("697218"),
                p = n("659500"),
                m = n("412861"),
                E = n("160864"),
                g = n("527382"),
                S = n("49111"),
                _ = n("782340"),
                A = function(e) {
                    let {
                        className: t,
                        style: n,
                        channel: A,
                        draftType: T
                    } = e, [M, N] = a.useState(!0), I = (0, l.useStateFromStores)([c.default], () => c.default.hasLayers()), L = (0, l.useStateFromStores)([f.default], () => null != A && f.default.can(S.Permissions.ATTACH_FILES, A), [A]), v = (0, l.useStateFromStores)([i.default], () => i.default.getActiveCommand(A.id)), R = null != v, x = A.getGuildId(), y = T === o.DraftType.FirstThreadMessage, D = (0, l.useStateFromStores)([C.default], () => {
                        var e;
                        return !0 == !(null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
                    }), O = (0, l.useStateFromStores)([u.default], () => u.default.didAgree(x)), j = O && !D, b = a.useMemo(() => !I && (A.isPrivate() && !A.isManaged() || null != x && (!A.isNSFW() || j) && L && d.default.canChatInGuild(x)), [L, j, A, x, I]), P = y ? S.ChannelTypesSets.GUILD_THREADS_ONLY.has(A.type) ? _.default.Messages.UPLOAD_TO_NEW_POST : _.default.Messages.UPLOAD_TO_NEW_THREAD : M ? _.default.Messages.UPLOAD_TO.format({
                        destination: (0, r.computeChannelName)(A, C.default, h.default, !0)
                    }) : _.default.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
                    return R || !b ? null : (0, s.jsx)(E.default, {
                        className: t,
                        style: n,
                        title: P,
                        description: y ? _.default.Messages.UPLOAD_AREA_NEW_THREAD_HELP : _.default.Messages.UPLOAD_AREA_HELP,
                        icons: g.DEFAULT_FILE_UPLOAD_ICONS,
                        onDrop: e => {
                            if (R) return !1;
                            b && null != A && ((0, m.promptToUpload)(e, A, T, {
                                requireConfirm: M,
                                showLargeMessageDialog: !1
                            }), p.ComponentDispatch.dispatchToLastSubscribed(S.ComponentActions.TEXTAREA_FOCUS))
                        },
                        onDragClear: () => N(!0),
                        onDragOver: e => {
                            if (R) return !1;
                            !y && e.shiftKey === M && N(!e.shiftKey)
                        }
                    })
                }
            "use strict";
            n.r(t), n.d(t, {
                useFamilyCenterActions: function() {
                    return o
                }
            }), n("222007");
            var a = n("884691"),
                s = n("448993"),
                i = n("544556"),
                l = n("822825"),
                r = n("922832");

            function o(e) {
                let {
                    onError: t,
                    onSuccess: n
                } = null != e ? e : {}, [o, u] = a.useState(!1), [d, c] = a.useState(!1), [E, f] = a.useState(!1), [_, h] = a.useState(!1), [C, T] = a.useState(!1), [I, S] = a.useState(!1), [N, A] = a.useState(!1), [m, p] = a.useState(!1), g = o || d || E || _ || I || m, R = a.useCallback(async e => {
                    if (!g) {
                        u(!0);
                        try {
                            await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.ACTIVE), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            u(!1)
                        }
                    }
                }, [g, t, n]), O = a.useCallback(async e => {
                    if (!g) {
                        c(!0);
                        try {
                            await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.DECLINED), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            c(!1)
                        }
                    }
                }, [g, t, n]), L = a.useCallback(async e => {
                    if (!g) {
                        f(!0);
                        try {
                            await (0, i.updateLinkForUserId)(e.id, r.UserLinkStatus.INACTIVE), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            f(!1)
                        }
                    }
                }, [g, t, n]), v = a.useCallback(async e => {
                    if (!g) {
                        h(!0);
                        try {
                            await (0, i.removeLinkForUserId)(e.id), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            h(!1)
                        }
                    }
                }, [g, t, n]), M = a.useCallback(async () => {
                    if (!C) {
                        T(!0);
                        try {
                            await (0, i.getLinkCodeForCurrentUser)(), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            T(!1)
                        }
                    }
                }, [C, t, n]), P = a.useCallback(async e => {
                    if (!N) {
                        A(!0);
                        try {
                            await i.default.fetchTeenActivity(e), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            A(!1)
                        }
                    }
                }, [N, t, n]), D = a.useCallback(async (e, a) => {
                    if (!I) {
                        S(!0);
                        try {
                            await i.default.requestLink(e, a), null == n || n()
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            S(!1)
                        }
                    }
                }, [I, t, n]), y = a.useCallback(async e => {
                    let n = l.default.getActionsForDisplayType(e),
                        a = n[n.length - 1],
                        r = l.default.getStartId(),
                        o = l.default.getSelectedTeenId();
                    if (!m && null != r && null != o) {
                        p(!0);
                        try {
                            await i.default.fetchMoreTeenActivity(o, e, r, a.event_id)
                        } catch (n) {
                            let e = new s.APIError(n);
                            null == t || t(e)
                        } finally {
                            p(!1)
                        }
                    }
                }, [m, t]);
                return {
                    acceptLinkRequest: R,
                    declineLinkRequest: O,
                    disconnectLinkRequest: L,
                    cancelLinkRequest: v,
                    selectTeenUser: P,
                    getLinkCode: M,
                    requestLink: D,
                    loadMore: y,
                    isAcceptLoading: o,
                    isDeclineLoading: d,
                    isDisconnectLoading: E,
                    isCancelLoading: _,
                    isGetLinkCodeLoading: C,
                    isSelectTeenUserLoading: N,
                    isRequestingLink: I,
                    isMoreLoading: m
                }
            }
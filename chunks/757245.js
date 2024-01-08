            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("577776"),
                i = n("77078"),
                r = n("812204"),
                u = n("685665"),
                o = n("42203"),
                d = n("18494"),
                c = n("697218"),
                f = n("811305"),
                h = n("427953"),
                p = n("550766"),
                m = n("191225"),
                E = n("885829"),
                C = n("575136"),
                S = n("141962"),
                g = n("272505"),
                _ = n("782340"),
                I = n("131279");
            let T = "ActivityPanelActionBar";

            function v() {
                let e = (0, l.useStateFromStores)([d.default], () => d.default.getChannelId()),
                    t = o.default.getChannel(e),
                    {
                        analyticsLocations: n
                    } = (0, u.default)(r.default.ACTIVITY_IN_TEXT_ACTIONBAR),
                    v = (0, l.useStateFromStoresArray)([m.default], () => null != e ? m.default.getEmbeddedActivitiesForChannel(e) : [], [e]),
                    x = (0, l.useStateFromStores)([m.default], () => m.default.getActivityPanelMode()),
                    N = (0, C.useEmbeddedApps)(v),
                    A = (0, C.useEmbeddedAppsWithPresence)(N),
                    M = A.get(null === (O = N[0]) || void 0 === O ? void 0 : null === (L = O.application) || void 0 === L ? void 0 : L.id),
                    R = (0, h.useIsActivitiesInTextEnabled)(e, T),
                    j = (0, h.useIsActivitiesInTextActionBarEnabled)(e, T);
                if (!(R && j) || null == M || x !== g.ActivityPanelModes.ACTION_BAR) return null;
                var L, O, y, b = M.embeddedActivity.details;
                (null == b || void 0 === b || "" === b) && (b = _.default.Messages.LOADING);
                let P = Array.from(M.embeddedActivity.connections.values()).map(e => c.default.getUser(e.user_id)).filter(e => null != e && void 0 !== e);
                return (0, a.jsxs)(i.Clickable, {
                    className: I.actionBarContainer,
                    onClick: () => {
                        null != t && null != M && ((0, E.maybeJoinEmbeddedActivity)({
                            channelId: t.id,
                            applicationId: M.application.id,
                            activityId: M.embeddedActivity.activity_id,
                            inputApplication: M.application,
                            analyticsLocations: n,
                            embeddedActivitiesManager: S.default
                        }), (0, p.updateActivityPanelMode)(g.ActivityPanelModes.PANEL))
                    },
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        src: null !== (y = M.application.getIconURL(48)) && void 0 !== y ? y : void 0,
                        className: I.applicationIcon
                    }), (0, a.jsxs)("div", {
                        className: I.textContainer,
                        children: [(0, a.jsx)(s.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            children: M.application.name
                        }), (0, a.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/medium",
                            className: I.textSubtitle,
                            children: b
                        })]
                    }), (0, a.jsx)(f.default, {
                        renderIcon: !1,
                        users: P,
                        size: 24,
                        max: 3,
                        className: I.userSummaryContainer
                    })]
                })
            }
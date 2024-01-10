            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
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
                var e, t, n, v;
                let x = (0, l.useStateFromStores)([d.default], () => d.default.getChannelId()),
                    N = o.default.getChannel(x),
                    {
                        analyticsLocations: A
                    } = (0, u.default)(r.default.ACTIVITY_IN_TEXT_ACTIONBAR),
                    M = (0, l.useStateFromStoresArray)([m.default], () => null != x ? m.default.getEmbeddedActivitiesForChannel(x) : [], [x]),
                    R = (0, l.useStateFromStores)([m.default], () => m.default.getActivityPanelMode()),
                    j = (0, C.useEmbeddedApps)(M),
                    L = (0, C.useEmbeddedAppsWithPresence)(j),
                    O = L.get(null === (t = j[0]) || void 0 === t ? void 0 : null === (e = t.application) || void 0 === e ? void 0 : e.id),
                    y = (0, h.useIsActivitiesInTextEnabled)(x, T),
                    b = (0, h.useIsActivitiesInTextActionBarEnabled)(x, T);
                if (!(y && b) || null == O || R !== g.ActivityPanelModes.ACTION_BAR) return null;
                let P = null === (n = O.presenceActivity) || void 0 === n ? void 0 : n.details;
                (null == P || void 0 === P || "" === P) && (P = _.default.Messages.LOADING);
                let D = Array.from(O.embeddedActivity.userIds).map(e => c.default.getUser(e)).filter(e => null != e && void 0 !== e);
                return (0, a.jsxs)(i.Clickable, {
                    className: I.actionBarContainer,
                    onClick: () => {
                        null != N && null != O && ((0, E.maybeJoinEmbeddedActivity)({
                            channelId: N.id,
                            applicationId: O.application.id,
                            instanceId: O.embeddedActivity.instanceId,
                            inputApplication: O.application,
                            analyticsLocations: A,
                            embeddedActivitiesManager: S.default
                        }), (0, p.updateActivityPanelMode)(g.ActivityPanelModes.PANEL))
                    },
                    children: [(0, a.jsx)("img", {
                        alt: "",
                        src: null !== (v = O.application.getIconURL(48)) && void 0 !== v ? v : void 0,
                        className: I.applicationIcon
                    }), (0, a.jsxs)("div", {
                        className: I.textContainer,
                        children: [(0, a.jsx)(s.Text, {
                            color: "header-primary",
                            variant: "text-sm/semibold",
                            children: O.application.name
                        }), (0, a.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/medium",
                            className: I.textSubtitle,
                            children: P
                        })]
                    }), (0, a.jsx)(f.default, {
                        renderIcon: !1,
                        users: D,
                        size: 24,
                        max: 3,
                        className: I.userSummaryContainer
                    })]
                })
            }
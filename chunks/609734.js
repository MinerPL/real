            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("77078"),
                r = l("272030"),
                o = l("85027"),
                u = l("33942"),
                d = l("252063"),
                c = l("42203"),
                f = l("18494"),
                m = l("191814"),
                p = l("758710"),
                E = l("351825"),
                T = l("306160"),
                h = l("253981"),
                _ = l("613676"),
                S = l("49111"),
                I = l("782340"),
                g = l("834680");

            function A(e) {
                var t;
                let {
                    application: l,
                    className: a
                } = e, A = c.default.getChannel(f.default.getChannelId()), {
                    appsInGDMEnabled: v,
                    availableApplications: C
                } = (0, d.usePrivateChannelIntegrationState)({
                    channelId: null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : ""
                });
                if (null == l || !(0, _.canInstallApplication)(l.id, l.customInstallUrl, l.installParams)) return null;
                let N = v && null != C.find(e => e.id === (null == l ? void 0 : l.id));
                return (0, n.jsx)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    onContextMenu: T.SUPPORTS_COPY ? e => {
                        var t, a;
                        let s = (0, o.getApplicationInstallURL)({
                            id: l.id,
                            custom_install_url: null !== (t = l.customInstallUrl) && void 0 !== t ? t : void 0,
                            install_params: null !== (a = l.installParams) && void 0 !== a ? a : void 0
                        });
                        (0, r.openContextMenu)(e, e => (0, n.jsx)(i.Menu, {
                            navId: "component-button",
                            onClose: r.closeContextMenu,
                            "aria-label": I.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
                            onSelect: void 0,
                            ...e,
                            children: (0, n.jsx)(i.MenuGroup, {
                                children: (0, n.jsx)(i.MenuItem, {
                                    id: "copy",
                                    label: I.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
                                    action: () => (0, T.copy)(s)
                                })
                            })
                        }))
                    } : void 0,
                    onClick: () => {
                        N ? (0, u.openOAuth2Modal)({
                            clientId: l.id,
                            scopes: [S.OAuth2Scopes.APPLICATIONS_COMMANDS],
                            channelId: A.id,
                            disableGuildSelect: !0
                        }) : (0, _.installApplication)({
                            applicationId: l.id,
                            customInstallUrl: l.customInstallUrl,
                            installParams: l.installParams
                        })
                    },
                    className: s(g.applicationInstallButton, a),
                    children: (0, n.jsxs)("div", {
                        className: g.applicationInstallButtonContent,
                        children: [(0, n.jsx)(E.default, {
                            width: 16,
                            height: 16
                        }), (0, n.jsx)(m.default, {
                            size: 4,
                            horizontal: !0
                        }), (0, n.jsx)("span", {
                            className: g.applicationInstallButtonText,
                            children: N ? I.default.Messages.ADD : I.default.Messages.APPLICATION_ADD_BUTTON
                        }), null == l.customInstallUrl || h.default.isDiscordUrl(l.customInstallUrl) ? null : (0, n.jsx)(p.default, {
                            className: g.launchIcon,
                            width: 16,
                            height: 16
                        })]
                    })
                })
            }
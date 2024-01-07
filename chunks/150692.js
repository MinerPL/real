            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("917351"),
                a = n.n(l),
                s = n("77078"),
                o = n("450911"),
                r = n("819689"),
                u = n("798609"),
                d = n("679653"),
                c = n("27618"),
                p = n("697218"),
                f = n("524768"),
                m = n("317041"),
                I = n("49111"),
                _ = n("782340");

            function C(e) {
                switch (e) {
                    case I.ChannelTextAreaIntegrations.GIF.title:
                    case I.ChannelTextAreaIntegrations.TENOR.title:
                        return _.default.Messages.COMMAND_GIPHY_DESCRIPTION;
                    default:
                        return ""
                }
            }
            let T = [...a(I.ChannelTextAreaIntegrations).values().map(e => ({
                id: e.commandId,
                name: e.command,
                displayName: e.command,
                type: u.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
                applicationId: m.BuiltInSectionId.BUILT_IN,
                get description() {
                    return C(e.title)
                },
                get displayDescription() {
                    return C(e.title)
                },
                options: e.type === I.ChannelTextAreaIntegrationTypes.GIF ? [{
                    name: "query",
                    displayName: "query",
                    type: u.ApplicationCommandOptionType.STRING,
                    get description() {
                        return _.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    get displayDescription() {
                        return _.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
                    },
                    required: !0
                }] : [],
                integrationType: e.type,
                integrationTitle: e.title
            })).value(), {
                id: "-15",
                name: "leave",
                displayName: "leave",
                type: u.ApplicationCommandType.CHAT,
                inputType: f.ApplicationCommandInputType.BUILT_IN,
                applicationId: m.BuiltInSectionId.BUILT_IN,
                get description() {
                    return _.default.Messages.LEAVE_GROUP_DM
                },
                get displayDescription() {
                    return _.default.Messages.LEAVE_GROUP_DM
                },
                options: [{
                    name: "silent",
                    displayName: "silent",
                    type: u.ApplicationCommandOptionType.BOOLEAN,
                    get description() {
                        return _.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
                    },
                    get displayDescription() {
                        return _.default.Messages.LEAVE_GROUP_DM_SILENTLY
                    },
                    required: !1
                }],
                predicate: e => {
                    let {
                        channel: t
                    } = e;
                    return t.isGroupDM()
                },
                execute: (e, t) => {
                    var n, l;
                    let {
                        channel: a
                    } = t, u = (0, d.computeChannelName)(a, p.default, c.default), f = _.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                        name: u
                    }), m = _.default.Messages.LEAVE_GROUP_DM_BODY.format({
                        name: u
                    }), I = null !== (l = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== l && l;
                    async function C() {
                        try {
                            await o.default.closePrivateChannel(a.id, void 0, I)
                        } catch (e) {
                            r.default.sendBotMessage(a.id, _.default.Messages.LEAVE_GROUP_DM_ERROR)
                        }
                    }
                    a.isManaged() && (f = _.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name: u
                    }), m = _.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name: u
                    })), (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
                        header: f,
                        confirmText: _.default.Messages.LEAVE_GROUP_DM,
                        cancelText: _.default.Messages.CANCEL,
                        onConfirm: C,
                        ...e,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: m
                        })
                    }))
                }
            }];
            var A = T
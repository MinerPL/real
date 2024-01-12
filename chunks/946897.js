            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("132710"),
                i = n.n(s),
                r = n("862205");
            let a = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
                o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-11_attachment_link_markup",
                    label: "Attachment Link Config User Experiment",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Shows links to attachments as regular links",
                        config: {
                            enabled: !1
                        }
                    }, {
                        id: 2,
                        label: 'Shows links to attachments as "mentions" of the filename',
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                d = {
                    order: i.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = a.exec(e);
                        if (null !== t) {
                            let {
                                enabled: e
                            } = o.getCurrentConfig({
                                location: "markup"
                            });
                            if (!e) return null
                        }
                        return t
                    },
                    parse(e, t, n) {
                        var s;
                        let i = e[0],
                            r = e[1];
                        return {
                            type: "attachmentLink",
                            content: [{
                                type: "text",
                                content: s = r
                            }],
                            attachmentUrl: i,
                            attachmentName: s
                        }
                    }
                };
            var u = {
                attachmentLink: d
            }
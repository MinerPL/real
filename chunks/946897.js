            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("132710"),
                a = n.n(i),
                l = n("862205");
            let s = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
                r = (0, l.createExperiment)({
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
                u = {
                    order: a.defaultRules.url.order - .5,
                    requiredFirstCharacters: ["h"],
                    match(e) {
                        let t = s.exec(e);
                        if (null !== t) {
                            let {
                                enabled: e
                            } = r.getCurrentConfig({
                                location: "markup"
                            });
                            if (!e) return null
                        }
                        return t
                    },
                    parse(e, t, n) {
                        var i;
                        let a = e[0],
                            l = e[1];
                        return {
                            type: "attachmentLink",
                            content: [{
                                type: "text",
                                content: i = l
                            }],
                            attachmentUrl: a,
                            attachmentName: i
                        }
                    }
                };
            var o = {
                attachmentLink: u
            }
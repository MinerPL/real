            "use strict";
            n.r(t), n.d(t, {
                useShowImprovedMarkdownUserExperimentConfig: function() {
                    return u
                },
                useShowImprovedMarkdownGuildExperimentConfig: function() {
                    return l
                }
            });
            var r = n("299039"),
                i = n("488197");

            function u(e) {
                return o(e, i.ImprovedMarkdownUserExperiment.useExperiment({
                    location: "590063_2"
                }))
            }

            function l(e, t) {
                return o(t, i.ImprovedMarkdownGuildExperiment.useExperiment({
                    guildId: e,
                    location: "590063_4"
                }))
            }

            function o(e, t) {
                return e < r.default.extractTimestamp("1088216706570268682") ? i.ImprovedMarkdownUserExperiment.definition.defaultConfig : t
            }
            "use strict";
            n.r(t), n.d(t, {
                ChannelSummarizationModelSwapExperiment: function() {
                    return s
                },
                ChannelSummarizationModelSwapGuildExperiment: function() {
                    return i
                }
            });
            var l = n("862205"),
                a = n("204653");
            let s = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-07_p13n_summarization_model_swap",
                    label: "User channel summarization model swapping",
                    defaultConfig: {
                        source: a.SummarySources.SOURCE_0
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable SOURCE_1",
                        config: {
                            source: a.SummarySources.SOURCE_1
                        }
                    }]
                }),
                i = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-07_p13n_summarization_model_swap_guild",
                    label: "Guild channel summarization model swapping",
                    defaultConfig: {
                        source: a.SummarySources.SOURCE_0
                    },
                    treatments: [{
                        id: 1,
                        label: "Override guild summaries to use SOURCE_1",
                        config: {
                            source: a.SummarySources.SOURCE_1
                        }
                    }]
                })
            "use strict";
            n.r(t), n.d(t, {
                updateBackgroundGradientPreset: function() {
                    return r
                },
                resetBackgroundGradientPreset: function() {
                    return l
                },
                openEditor: function() {
                    return s
                },
                closeEditor: function() {
                    return a
                },
                resetPreviewClientTheme: function() {
                    return o
                }
            });
            var i = n("913144");
            let r = e => {
                    i.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: e
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
                        presetId: null
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_OPEN"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_CLOSE"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "RESET_PREVIEW_CLIENT_THEME"
                    })
                }
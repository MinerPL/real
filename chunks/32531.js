            "use strict";
            n.r(t), n.d(t, {
                updateBackgroundGradientPreset: function() {
                    return r
                },
                resetBackgroundGradientPreset: function() {
                    return l
                },
                openEditor: function() {
                    return a
                },
                closeEditor: function() {
                    return s
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
                a = () => {
                    i.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_OPEN"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "CLIENT_THEMES_EDITOR_CLOSE"
                    })
                },
                o = () => {
                    i.default.dispatch({
                        type: "RESET_PREVIEW_CLIENT_THEME"
                    })
                }
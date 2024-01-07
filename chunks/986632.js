            "use strict";
            i.r(t), i.d(t, {
                INACTIVE_CATEGORY_INDEX: function() {
                    return l
                },
                EmojiPickerStore: function() {
                    return r
                },
                StickerPickerStore: function() {
                    return o
                },
                SoundboardPickerStore: function() {
                    return u
                },
                ApplicationCommandDiscoveryPickerStore: function() {
                    return c
                }
            });
            var n = i("308503");
            let l = -1,
                s = Object.freeze({
                    inspectedExpressionPosition: {
                        rowIndex: 0,
                        columnIndex: 0
                    },
                    activeCategoryIndex: 0,
                    searchPlaceholder: null
                });

            function a() {
                let e = (0, n.default)(e => s);
                return {
                    useStore: e,
                    getState: () => e.getState(),
                    setInspectedExpressionPosition: (t, i, n) => {
                        e.setState({
                            inspectedExpressionPosition: {
                                rowIndex: i,
                                columnIndex: t,
                                source: n
                            }
                        })
                    },
                    setActiveCategoryIndex: t => {
                        e.setState({
                            activeCategoryIndex: t
                        })
                    },
                    setSearchPlaceholder: t => {
                        e.setState({
                            searchPlaceholder: t
                        })
                    },
                    resetStoreState: () => {
                        e.setState(s)
                    }
                }
            }
            let r = a(),
                o = a(),
                u = a(),
                c = a()
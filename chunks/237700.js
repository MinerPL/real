            "use strict";
            n.r(t), n.d(t, {
                AUTOCOMPLETE_PRIORITY: function() {
                    return p
                },
                AUTOCOMPLETE_OPTIONS: function() {
                    return m
                }
            });
            var l = n("851745"),
                i = n("76942"),
                r = n("825871"),
                o = n("116189"),
                s = n("714343"),
                a = n("84872"),
                u = n("729079"),
                d = n("845247"),
                c = n("122270"),
                f = n("684396");
            let p = [l.AutocompleteOptionTypes.CHOICES, l.AutocompleteOptionTypes.GIFS, l.AutocompleteOptionTypes.COMMAND_OPTIONS, l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, l.AutocompleteOptionTypes.REACTIONS, l.AutocompleteOptionTypes.CHANNELS, l.AutocompleteOptionTypes.MENTIONS, l.AutocompleteOptionTypes.COMMANDS, l.AutocompleteOptionTypes.LEGACY_COMMANDS],
                m = {
                    [l.AutocompleteOptionTypes.CHANNELS]: i.default,
                    [l.AutocompleteOptionTypes.COMMANDS]: r.default,
                    [l.AutocompleteOptionTypes.COMMAND_OPTIONS]: s.default,
                    [l.AutocompleteOptionTypes.CHOICES]: o.default,
                    [l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS]: a.default,
                    [l.AutocompleteOptionTypes.GIFS]: u.default,
                    [l.AutocompleteOptionTypes.LEGACY_COMMANDS]: d.default,
                    [l.AutocompleteOptionTypes.MENTIONS]: c.default,
                    [l.AutocompleteOptionTypes.REACTIONS]: f.default
                }
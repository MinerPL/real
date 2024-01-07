            "use strict";
            n.r(t), n.d(t, {
                TRUE_OPTION_NAME: function() {
                    return r
                },
                FALSE_OPTION_NAME: function() {
                    return u
                },
                BOOLEAN_CHOICES: function() {
                    return o
                },
                BuiltInSectionId: function() {
                    return a
                },
                DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
                    return d
                },
                DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
                    return c
                },
                DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: function() {
                    return _
                },
                SUB_COMMAND_KEY_SEPARATOR: function() {
                    return E
                },
                APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
                    return f
                },
                MAX_SUBCOMMAND_LEVEL: function() {
                    return h
                },
                CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
                    return p
                },
                AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
                    return T
                },
                getValidationErrorText: function() {
                    return C
                }
            });
            var i, a, l = n("798609"),
                s = n("782340");
            let r = "True",
                u = "False",
                o = [{
                    name: r,
                    displayName: r,
                    value: "true"
                }, {
                    name: u,
                    displayName: u,
                    value: "false"
                }];
            (i = a || (a = {})).BUILT_IN = "-1", i.FRECENCY = "-2";
            let d = 10,
                c = 5,
                _ = 25,
                E = "\x00",
                f = 100,
                h = 3,
                p = 10,
                T = 500;

            function C(e) {
                if (null != e.choices) return s.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case l.ApplicationCommandOptionType.BOOLEAN:
                        return s.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case l.ApplicationCommandOptionType.CHANNEL:
                        return s.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case l.ApplicationCommandOptionType.INTEGER:
                        return s.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case l.ApplicationCommandOptionType.NUMBER:
                        return s.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case l.ApplicationCommandOptionType.ROLE:
                        return s.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case l.ApplicationCommandOptionType.USER:
                        return s.default.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case l.ApplicationCommandOptionType.MENTIONABLE:
                        return s.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return s.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
            Object.freeze([]), Object.freeze([])
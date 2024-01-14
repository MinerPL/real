"use strict";
n.r(t), n.d(t, {
  TRUE_OPTION_NAME: function() {
    return o
  },
  FALSE_OPTION_NAME: function() {
    return d
  },
  BOOLEAN_CHOICES: function() {
    return u
  },
  BuiltInSectionId: function() {
    return i
  },
  DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
    return l
  },
  DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
    return f
  },
  DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: function() {
    return _
  },
  SUB_COMMAND_KEY_SEPARATOR: function() {
    return c
  },
  APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
    return g
  },
  MAX_SUBCOMMAND_LEVEL: function() {
    return m
  },
  CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
    return h
  },
  AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
    return v
  },
  getValidationErrorText: function() {
    return E
  }
});
var s, i, r = n("798609"),
  a = n("782340");
let o = "True",
  d = "False",
  u = [{
    name: o,
    displayName: o,
    value: "true"
  }, {
    name: d,
    displayName: d,
    value: "false"
  }];
(s = i || (i = {})).BUILT_IN = "-1", s.FRECENCY = "-2";
let l = 10,
  f = 5,
  _ = 25,
  c = "\x00",
  g = 100,
  m = 3,
  h = 10,
  v = 500;

function E(e) {
  if (null != e.choices) return a.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
  switch (e.type) {
    case r.ApplicationCommandOptionType.BOOLEAN:
      return a.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
    case r.ApplicationCommandOptionType.CHANNEL:
      return a.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
    case r.ApplicationCommandOptionType.INTEGER:
      return a.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
    case r.ApplicationCommandOptionType.NUMBER:
      return a.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
    case r.ApplicationCommandOptionType.ROLE:
      return a.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
    case r.ApplicationCommandOptionType.USER:
      return a.default.Messages.COMMAND_VALIDATION_USER_ERROR;
    case r.ApplicationCommandOptionType.MENTIONABLE:
      return a.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
    default:
      return a.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
  }
}
Object.freeze([]), Object.freeze([])
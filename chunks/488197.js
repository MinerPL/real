"use strict";
n.r(t), n.d(t, {
  ImprovedMarkdownUserExperiment: function() {
    return r
  },
  ImprovedMarkdownGuildExperiment: function() {
    return l
  }
});
var i = n("862205");
let r = (0, i.createExperiment)({
    kind: "user",
    id: "2023-03_improved_message_markdown",
    label: "Improved Message Markdown ",
    defaultConfig: {
      showListsAndHeaders: !1,
      showMaskedLinks: !1
    },
    treatments: [{
      id: 1,
      label: "Show improved message markdown",
      config: {
        showListsAndHeaders: !0,
        showMaskedLinks: !0
      }
    }, {
      id: 2,
      label: "Show improved message markdown WITHOUT masked links",
      config: {
        showListsAndHeaders: !0,
        showMaskedLinks: !1
      }
    }]
  }),
  l = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-03_improved_message_markdown_guild",
    label: "Improved Message Markdown Guild Experiment",
    defaultConfig: {
      showListsAndHeaders: !1,
      showMaskedLinks: !1
    },
    treatments: [{
      id: 1,
      label: "Show improved message markdown",
      config: {
        showListsAndHeaders: !0,
        showMaskedLinks: !0
      }
    }, {
      id: 2,
      label: "Show improved message markdown WITHOUT masked links",
      config: {
        showListsAndHeaders: !0,
        showMaskedLinks: !1
      }
    }]
  })
"use strict";

function a() {
  return {
    textValue: "",
    richValue: [{
      type: "line",
      children: [{
        text: ""
      }]
    }]
  }
}

function l(e) {
  return {
    textValue: e,
    richValue: i(e)
  }
}
n.r(t), n.d(t, {
  createEmptyState: function() {
    return a
  },
  createState: function() {
    return l
  },
  toRichValue: function() {
    return i
  },
  voidToOptionValue: function() {
    return r
  }
}), n("70102");
let s = Object.freeze([Object.freeze({
  type: "line",
  children: Object.freeze([Object.freeze({
    text: ""
  })])
})]);

function i(e) {
  return "" !== e ? e.split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })) : s
}

function r(e) {
  switch (e.type) {
    case "userMention":
      return {
        type: "userMention", userId: e.userId
      };
    case "channelMention":
      return {
        type: "channelMention", channelId: e.channelId
      };
    case "staticRouteLink":
      return {
        type: "staticRouteLink", channelId: e.channelId
      };
    case "soundboard":
      return {
        type: "soundboard", soundId: e.soundId
      };
    case "roleMention":
      return {
        type: "roleMention", roleId: e.roleId
      };
    case "textMention":
      return {
        type: "textMention", text: e.name
      };
    case "emoji":
      return {
        type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
      };
    case "customEmoji":
      return {
        type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
      };
    case "testInlineVoid":
      throw Error("Unable to convert test types")
  }
  return null
}
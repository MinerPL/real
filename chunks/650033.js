"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var i = n("446674"),
  r = n("913144");
let s = {
    always_on_tab_bar: "Always on bottom tabs navigation bar",
    enable_swipe_shortcuts: "Gestures shortcuts - swipe from right to left.",
    disable_alpha_voice_panel: "Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It's not feature complete so if there's something you are missing, or you find a problem, you can disable it here.",
    highlight_experimental_icons: "Highlight experimental icons",
    happening_now_summary_card: "Enable Happening Now Card with Summary",
    enable_last_channel: "Enable launch into last channel",
    enable_recently_active: "Enable recently active channels",
    happening_main_tab: "Enable Happening tab containing summaries",
    navigate_to_last_channel: "Navigate to last channel when selecting a guild.",
    new_theme_settings: "Enable the new theme settings, with Darker and Lights Out themes",
    user_channel_emoji_overrides: "Enable user channel emoji overrides",
    enable_recently_active_summaries: "Enable summaries in recently active view",
    channel_list_layout_animations: "Enable experimental channel list layout animations",
    message_preview_animations: "Enable message preview animations",
    recent_channels_throttle: "Throttle recent channels reordering",
    force_voice_panel: "Force new voice panel to be shown.",
    enable_server_discovery: "Enable Server Discovery Search on mobile",
    messages_badge_num_channels: "Messages tab badge counts # of unread channels instead of # of unread messages",
    main_tab_launchpad: "Enable LaunchPad in Main Tab",
    new_panels: "Use panels for chat",
    panels_split_messages_tab: "Split messages tab for panels",
    redesign_individual_feature_you_tab: "Enable You tab in the old UI",
    disable_theme_key: "Disable reloading the entire app when the theme changes",
    theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
    panels_navigator: "Use panels navigator",
    cozy_header: "Cozy header",
    enable_channel_emojis: "Enables channel emoji UI components",
    mobile_profile_effect_debug_controls: "mobile_profile_effect_debug_controls",
    enable_new_search_filters: "Enables new search filters behavior"
  },
  a = {};
class o extends i.default.DeviceSettingsStore {
  getUserAgnosticState() {
    return {
      toggleStates: a
    }
  }
  initialize(e) {
    for (var t in s) {
      var n, i;
      let r = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
      a[t] = r
    }
  }
  get(e) {
    var t;
    return null !== (t = a[e]) && void 0 !== t && t
  }
  set(e, t) {
    return a[e] = t, t
  }
  all() {
    return a
  }
  allWithDescriptions() {
    return Object.entries(a).map(e => {
      let [t, n] = e;
      return [t, n, s[t]]
    })
  }
}
o.displayName = "DevToolsDesignTogglesStore", o.persistKey = "DevToolsDesignTogglesStore";
var l = new o(r.default, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
    a[e.toggle] = e.value
  }
})
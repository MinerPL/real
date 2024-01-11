            "use strict";
            n.r(t), n.d(t, {
                KeybindGroup: function() {
                    return i
                },
                getNameForKeybindGroup: function() {
                    return V
                },
                getDescriptionForKeybindGroup: function() {
                    return F
                },
                DEFAULT_LAYOUT: function() {
                    return Y
                },
                getDefaultLayoutContent: function() {
                    return w
                },
                default: function() {
                    return W
                }
            }), n("70102");
            var i, o, l = n("102457"),
                a = n("55562"),
                u = n("863536"),
                d = n("786720"),
                s = n("211314"),
                E = n("218143"),
                r = n("586819"),
                _ = n("953260"),
                A = n("798232"),
                c = n("278412"),
                C = n("222301"),
                T = n("903376"),
                S = n("242149"),
                I = n("714208"),
                f = n("24312"),
                N = n("30269"),
                O = n("709079"),
                L = n("356410"),
                D = n("271524"),
                R = n("333949"),
                p = n("945924"),
                h = n("648900"),
                b = n("838021"),
                G = n("745991"),
                g = n("640968"),
                M = n("347445"),
                P = n("992642"),
                U = n("200431"),
                m = n("493334"),
                y = n("809392"),
                K = n("202035"),
                H = n("49111"),
                B = n("782340");

            function V(e) {
                switch (e) {
                    case "NAVIGATION":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
                    case "VOICE_AND_VIDEO":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
                    case "CHAT":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
                    case "MISCELLANEOUS":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
                    case "MESSAGE":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
                    case "DND":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE
                }
            }

            function F(e) {
                switch (e) {
                    case "MESSAGE":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
                    case "DND":
                        return B.default.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
                    default:
                        return null
                }
            }

            function v() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.map(e => {
                    let t = Y[e];
                    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
                    return t.binds[0]
                })
            }(o = i || (i = {})).NAVIGATION = "NAVIGATION", o.CHAT = "CHAT", o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO", o.MISCELLANEOUS = "MISCELLANEOUS", o.MESSAGE = "MESSAGE", o.DND = "DND";
            let Y = {
                [H.KeybindActions.SERVER_NEXT]: D.SERVER_NEXT,
                [H.KeybindActions.SERVER_PREV]: D.SERVER_PREV,
                [H.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
                [H.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
                [H.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
                [H.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
                [H.KeybindActions.UNREAD_NEXT]: m.UNREAD_NEXT,
                [H.KeybindActions.UNREAD_PREV]: m.UNREAD_PREV,
                [H.KeybindActions.MENTION_CHANNEL_NEXT]: m.MENTION_NEXT,
                [H.KeybindActions.MENTION_CHANNEL_PREV]: m.MENTION_PREV,
                [H.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
                [H.KeybindActions.JUMP_TO_GUILD]: _.JUMP_TO_GUILD,
                [H.KeybindActions.SUBMIT]: R.SUBMIT,
                [H.KeybindActions.TEXTAREA_FOCUS]: p.TEXTAREA_FOCUS,
                [H.KeybindActions.MARK_CHANNEL_READ]: A.MARK_CHANNEL_READ,
                [H.KeybindActions.MARK_SERVER_READ]: c.MARK_SERVER_READ,
                [H.KeybindActions.TOGGLE_CHANNEL_PINS]: G.TOGGLE_CHANNEL_PINS,
                [H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB]: P.TOGGLE_INBOX_UNREADS_TAB,
                [H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ]: P.MARK_TOP_INBOX_CHANNEL_READ,
                [H.KeybindActions.TOGGLE_USERS]: U.TOGGLE_USERS,
                [H.KeybindActions.TOGGLE_HELP]: g.TOGGLE_HELP,
                [H.KeybindActions.TOGGLE_MUTE]: h.TOGGLE_MUTE,
                [H.KeybindActions.TOGGLE_DEAFEN]: h.TOGGLE_DEAFEN,
                [H.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: b.TOGGLE_CATEGORY_COLLAPSED,
                [H.KeybindActions.SCROLL_UP]: f.SCROLL_UP,
                [H.KeybindActions.SCROLL_DOWN]: f.SCROLL_DOWN,
                [H.KeybindActions.QUICKSWITCHER_SHOW]: S.QUICKSWITCHER_SHOW,
                [H.KeybindActions.CREATE_DM_GROUP]: u.CREATE_DM_GROUP,
                [H.KeybindActions.SEARCH_EMOJIS]: N.SEARCH_EMOJIS,
                [H.KeybindActions.SEARCH_GIFS]: O.SEARCH_GIFS,
                [H.KeybindActions.SEARCH_STICKERS]: L.SEARCH_STICKERS,
                [H.KeybindActions.TOGGLE_HOTKEYS]: M.TOGGLE_HOTKEYS,
                [H.KeybindActions.JUMP_TO_FIRST_UNREAD]: C.JUMP_TO_FIRST_UNREAD,
                [H.KeybindActions.CREATE_GUILD]: d.CREATE_GUILD,
                [H.KeybindActions.UPLOAD_FILE]: y.UPLOAD_FILE,
                [H.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: I.RETURN_TO_AUDIO_CHANNEL,
                [H.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
                [H.KeybindActions.CALL_START]: l.CALL_START,
                [H.KeybindActions.FOCUS_SEARCH]: E.FOCUS_SEARCH,
                [H.KeybindActions.JUMP_TO_CURRENT_CALL]: r.JUMP_TO_CURRENT_CALL,
                [H.KeybindActions.ZOOM_IN]: K.ZOOM_IN,
                [H.KeybindActions.ZOOM_OUT]: K.ZOOM_OUT,
                [H.KeybindActions.ZOOM_RESET]: K.ZOOM_RESET,
                [H.KeybindActions.OPEN_APP_DIRECTORY]: T.OPEN_APP_DIRECTORY,
                [H.KeybindActions.BROWSER_DEVTOOLS]: s.BROWSER_DEVTOOLS
            };

            function w() {
                return [{
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
                    binds: v(H.KeybindActions.SERVER_PREV, H.KeybindActions.SERVER_NEXT),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
                    binds: v(H.KeybindActions.CHANNEL_PREV, H.KeybindActions.CHANNEL_NEXT),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
                    binds: v(H.KeybindActions.NAVIGATE_BACK, H.KeybindActions.NAVIGATE_FORWARD),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
                    binds: v(H.KeybindActions.UNREAD_PREV, H.KeybindActions.UNREAD_NEXT),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
                    binds: v(H.KeybindActions.MENTION_CHANNEL_PREV, H.KeybindActions.MENTION_CHANNEL_NEXT),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
                    binds: v(H.KeybindActions.JUMP_TO_CURRENT_CALL),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
                    binds: v(H.KeybindActions.TOGGLE_PREVIOUS_GUILD),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
                    binds: v(H.KeybindActions.QUICKSWITCHER_SHOW),
                    group: "NAVIGATION"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
                    binds: v(H.KeybindActions.CREATE_GUILD),
                    group: "NAVIGATION",
                    groupEnd: !0
                }, {
                    description: B.default.Messages.DND_OPERATION_LABEL_START,
                    binds: ["mod+d"],
                    group: "DND"
                }, {
                    description: B.default.Messages.DND_OPERATION_LABEL_MOVE,
                    binds: ["up", "down"],
                    group: "DND"
                }, {
                    description: B.default.Messages.DND_OPERATION_LABEL_DROP,
                    binds: ["spacebar", "enter"],
                    group: "DND"
                }, {
                    description: B.default.Messages.DND_OPERATION_LABEL_CANCEL,
                    binds: ["esc"],
                    group: "DND",
                    groupEnd: !0
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
                    binds: v(H.KeybindActions.MARK_SERVER_READ),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
                    binds: v(H.KeybindActions.MARK_CHANNEL_READ),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
                    binds: v(H.KeybindActions.CREATE_DM_GROUP),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
                    binds: v(H.KeybindActions.TOGGLE_CHANNEL_PINS),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
                    binds: v(H.KeybindActions.TOGGLE_INBOX_UNREADS_TAB),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
                    binds: v(H.KeybindActions.MARK_TOP_INBOX_CHANNEL_READ),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
                    binds: v(H.KeybindActions.TOGGLE_USERS),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
                    binds: v(H.KeybindActions.SEARCH_EMOJIS),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
                    binds: v(H.KeybindActions.SEARCH_GIFS),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
                    binds: v(H.KeybindActions.SEARCH_STICKERS),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
                    binds: v(H.KeybindActions.SCROLL_UP, H.KeybindActions.SCROLL_DOWN),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
                    binds: v(H.KeybindActions.JUMP_TO_FIRST_UNREAD),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
                    binds: v(H.KeybindActions.TEXTAREA_FOCUS),
                    group: "CHAT"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
                    binds: v(H.KeybindActions.UPLOAD_FILE),
                    group: "CHAT",
                    groupEnd: !0
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
                    binds: v(H.KeybindActions.TOGGLE_MUTE),
                    group: "VOICE_AND_VIDEO"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
                    binds: v(H.KeybindActions.TOGGLE_DEAFEN),
                    group: "VOICE_AND_VIDEO"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
                    binds: v(H.KeybindActions.CALL_ACCEPT),
                    group: "VOICE_AND_VIDEO"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
                    binds: v(H.KeybindActions.MARK_CHANNEL_READ),
                    group: "VOICE_AND_VIDEO"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
                    binds: v(H.KeybindActions.CALL_START),
                    group: "VOICE_AND_VIDEO",
                    groupEnd: !0
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
                    binds: v(H.KeybindActions.TOGGLE_HELP),
                    group: "MISCELLANEOUS"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
                    binds: v(H.KeybindActions.FOCUS_SEARCH),
                    group: "MISCELLANEOUS"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
                    binds: ["h+h+right+n+k"],
                    group: "MISCELLANEOUS",
                    groupEnd: !0
                }, {
                    description: B.default.Messages.EDIT_MESSAGE,
                    binds: ["e"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.DELETE_MESSAGE,
                    binds: ["backspace"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.PIN_MESSAGE,
                    binds: ["p"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.ADD_REACTION,
                    binds: ["plus"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.MESSAGE_ACTION_REPLY,
                    binds: ["r"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.COPY_TEXT,
                    binds: ["mod+c"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.MARK_UNREAD,
                    binds: ["alt+enter"],
                    group: "MESSAGE"
                }, {
                    description: B.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
                    binds: ["escape"],
                    group: "MESSAGE",
                    groupEnd: !0
                }]
            }
            var W = Y
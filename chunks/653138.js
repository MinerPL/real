"use strict";
t.r(e), t.d(e, {
  MAX_PROMPT_TITLE_LENGTH: function() {
    return O
  },
  MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
    return _
  },
  MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
    return c
  },
  MAX_NUM_PROMPTS: function() {
    return f
  },
  MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
    return N
  },
  DROPDOWN_MAX_NUM_OPTIONS: function() {
    return g
  },
  MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
    return E
  },
  MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
    return P
  },
  NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
    return m
  },
  ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
    return I
  },
  GuildOnboardingTab: function() {
    return l
  },
  OnboardingPromptType: function() {
    return u
  },
  GuildOnboardingMode: function() {
    return d
  },
  isDefaultPrompt: function() {
    return v
  },
  getDefaultPrompt: function() {
    return D
  },
  getEmptyPrompt: function() {
    return S
  },
  clientPromptToServerPrompt: function() {
    return A
  },
  serverApiResponseToClientState: function() {
    return R
  },
  isEmojiEmpty: function() {
    return b
  }
});
var i, r, o, l, u, d, s = t("714617"),
  a = t.n(s),
  p = t("782340");
let O = 100,
  _ = 50,
  c = 100,
  f = 15,
  N = 12,
  g = 50,
  E = 4,
  P = 7,
  m = 5,
  I = 13;

function v(n) {
  if (n.options.length > 0) return !1;
  let {
    id: e,
    ...t
  } = D(), {
    id: i,
    ...r
  } = n;
  return a(t, r)
}

function D() {
  return {
    id: String(Date.now()),
    title: p.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
    options: [],
    singleSelect: !1,
    required: !1,
    inOnboarding: !0,
    type: 0
  }
}

function S(n) {
  return {
    id: String(Date.now()),
    title: "",
    options: [],
    singleSelect: !1,
    required: !1,
    inOnboarding: n,
    type: 0
  }
}

function A(n) {
  return {
    id: n.id,
    options: n.options.map(n => {
      var e, t, i;
      return {
        id: n.id,
        channel_ids: n.channelIds,
        role_ids: n.roleIds,
        emoji: n.emoji,
        emoji_id: null === (e = n.emoji) || void 0 === e ? void 0 : e.id,
        emoji_name: null === (t = n.emoji) || void 0 === t ? void 0 : t.name,
        emoji_animated: null === (i = n.emoji) || void 0 === i ? void 0 : i.animated,
        title: n.title,
        description: n.description
      }
    }),
    title: n.title,
    single_select: n.singleSelect,
    disabled: n.disabled,
    required: n.required,
    in_onboarding: n.inOnboarding,
    type: n.type
  }
}

function T(n) {
  return {
    id: n.id,
    options: n.options.map(n => {
      var e;
      return {
        id: n.id,
        channelIds: n.channel_ids,
        roleIds: n.role_ids,
        emoji: n.emoji,
        title: n.title,
        description: null !== (e = n.description) && void 0 !== e ? e : ""
      }
    }),
    title: n.title,
    singleSelect: n.single_select,
    disabled: n.disabled,
    required: n.required,
    inOnboarding: n.in_onboarding,
    type: n.type
  }
}

function R(n) {
  var e, t, i;
  return {
    prompts: n.prompts.map(T),
    defaultChannelIds: n.default_channel_ids,
    responses: null !== (e = n.responses) && void 0 !== e ? e : [],
    mode: n.mode,
    enabled: n.enabled,
    onboardingPromptsSeen: null !== (t = n.onboarding_prompts_seen) && void 0 !== t ? t : {},
    onboardingResponsesSeen: null !== (i = n.onboarding_responses_seen) && void 0 !== i ? i : {},
    belowRequirements: n.below_requirements
  }
}

function b(n) {
  return null == n || null == n.id && null == n.name
}(i = l || (l = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (r = u || (u = {}))[r.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", r[r.DROPDOWN = 1] = "DROPDOWN", (o = d || (d = {}))[o.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", o[o.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
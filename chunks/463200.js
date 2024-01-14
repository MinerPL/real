"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("37983");
l("884691");
var n = l("969176"),
  s = l.n(n),
  i = l("866227"),
  o = l.n(i),
  d = l("65597"),
  C = l("178406"),
  r = l("645266"),
  u = l("731612"),
  c = l("782340");

function f(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, d.default)([C.default], () => C.default.getSearchStateByGuildId(t), [t], s), {
    selectedAccountAgeOption: i
  } = n, {
    afterDate: f,
    beforeDate: m,
    optionId: E
  } = i, M = E === u.DATE_OPTION.CUSTOM, h = M && null != f ? o(f).format(u.MENU_DATE_FORMAT) : c.default.Messages.NONE, T = M && null != m ? o(m).format(u.MENU_DATE_FORMAT) : c.default.Messages.NONE, x = M && null != f && null != m;
  return (0, a.jsx)(u.default, {
    startDateLabel: h,
    endDateLabel: T,
    afterDate: f,
    beforeDate: m,
    selectedOption: E,
    isCustomDateRange: M,
    shouldShowCustomDateSubtext: x,
    menuName: "account-age",
    accessibilityLabel: c.default.Messages.MEMBER_SAFETY_ACCOUNT_AGE_LABEL,
    onClose: l,
    onSelectDateOption: function(e, l) {
      let a = null != l ? o().subtract(l.input, l.unit).valueOf() : null;
      (0, r.updateSearchState)(t, {
        ...n,
        selectedAccountAgeOption: {
          optionId: e,
          afterDate: a,
          beforeDate: null
        }
      })
    },
    onToggleCustomDateRange: function() {
      (0, r.updateSearchState)(t, {
        ...n,
        selectedAccountAgeOption: {
          optionId: u.DATE_OPTION.CUSTOM,
          afterDate: M ? f : null,
          beforeDate: M ? m : null
        }
      })
    },
    onSelectStartDate: function(e) {
      (0, r.updateSearchState)(t, {
        ...n,
        selectedAccountAgeOption: {
          optionId: u.DATE_OPTION.CUSTOM,
          afterDate: e.valueOf(),
          beforeDate: m
        }
      })
    },
    onSelectEndDate: function(e) {
      (0, r.updateSearchState)(t, {
        ...n,
        selectedAccountAgeOption: {
          optionId: u.DATE_OPTION.CUSTOM,
          afterDate: f,
          beforeDate: e.valueOf()
        }
      })
    }
  })
}
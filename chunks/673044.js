"use strict";

function n(e) {
  let t = Date.now(),
    i = null != e.free_period_starts_at ? Date.parse(e.free_period_starts_at) : null,
    n = null != e.free_period_ends_at ? Date.parse(e.free_period_ends_at) : null;
  return (null != i || null != n) && (null == i && null != n ? t < n : null != i && null == n ? t >= i : null != i && null != n && t >= i && t < n)
}
i.r(t), i.d(t, {
  default: function() {
    return n
  }
})
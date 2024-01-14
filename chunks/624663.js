"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("222007");
var a = l("308503");
let n = (0, a.default)((e, t) => ({
  selectedUserIds: {},
  addUsers: (l, a) => {
    var n;
    let {
      selectedUserIds: s
    } = t(), i = null !== (n = s[l]) && void 0 !== n ? n : new Set, o = new Set([...i, ...a]);
    e({
      selectedUserIds: {
        ...s,
        [l]: o
      }
    })
  },
  removeUser: (l, a) => {
    let {
      selectedUserIds: n
    } = t(), s = n[l];
    if (null == s) return;
    let i = [...s].filter(e => e !== a);
    e({
      selectedUserIds: {
        ...n,
        [l]: new Set(i)
      }
    })
  },
  clearSelection: l => {
    let {
      selectedUserIds: a
    } = t();
    null != a && e({
      selectedUserIds: {
        ...a,
        [l]: new Set
      }
    })
  }
}));

function s(e) {
  return n(t => {
    var l;
    return {
      selectedUserIds: null !== (l = t.selectedUserIds[e]) && void 0 !== l ? l : new Set,
      addUsers: l => {
        t.addUsers(e, l)
      },
      removeUser: l => {
        t.removeUser(e, l)
      },
      clearSelection: () => {
        t.clearSelection(e)
      }
    }
  })
}
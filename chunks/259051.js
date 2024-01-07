            "use strict";
            s.r(t), s.d(t, {
                getRandomHouse: function() {
                    return r
                },
                getQuestions: function() {
                    return S
                },
                getHouseNameFromHouseID: function() {
                    return E
                }
            }), s("424973");
            var a = s("627445"),
                n = s.n(a),
                l = s("49111"),
                i = s("782340");
            let r = () => {
                    let e = Object.keys(l.HypeSquadHouses);
                    return e[Math.floor(Math.random() * e.length)]
                },
                o = () => {
                    let e = [];
                    for (; e.length < 5;) {
                        let t = Math.floor(15 * Math.random());
                        !e.includes(t) && e.push(t)
                    }
                    return e
                },
                d = () => [i.default.Messages.HYPESQUAD_QUESTION_0_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_1_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_2_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_3_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_4_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_5_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_6_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_7_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_8_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_9_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_10_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_11_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_12_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_13_PROMPT, i.default.Messages.HYPESQUAD_QUESTION_14_PROMPT],
                u = () => [
                    [i.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_D],
                    [i.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_A, i.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_B, i.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_C, i.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_D]
                ],
                c = () => [l.HypeSquadHouses.HOUSE_1, l.HypeSquadHouses.HOUSE_2, l.HypeSquadHouses.HOUSE_3, l.RANDOM_HYPESQUAD_HOUSE],
                S = () => {
                    let e = c(),
                        t = d(),
                        s = u(),
                        a = o();
                    return a.map(a => {
                        let l = t[a],
                            i = s[a];
                        return n(null != l && null != i, "Invalid HypeSquad quiz question index"), {
                            prompt: l,
                            options: i.map((t, s) => {
                                let a = e[s];
                                return n(null !== a, "Invalid HypeSquad quiz question option index"), {
                                    copy: t,
                                    house: a
                                }
                            })
                        }
                    })
                },
                E = e => {
                    let t = {
                        [l.HypeSquadHouses.HOUSE_1]: i.default.Messages.HYPESQUAD_HOUSE_1,
                        [l.HypeSquadHouses.HOUSE_2]: i.default.Messages.HYPESQUAD_HOUSE_2,
                        [l.HypeSquadHouses.HOUSE_3]: i.default.Messages.HYPESQUAD_HOUSE_3
                    };
                    return t[e]
                }
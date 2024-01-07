            "use strict";
            n.r(t), n.d(t, {
                useDatePicker: function() {
                    return et
                },
                useDateSegment: function() {
                    return er
                },
                useDateField: function() {
                    return Q
                },
                useTimeField: function() {
                    return ee
                },
                useDateRangePicker: function() {
                    return eo
                }
            }), n("222007");
            var r = n("780095"),
                o = n("290895"),
                a = n("884691"),
                i = n("825167"),
                s = n("495912"),
                c = n("181551"),
                l = n("336468"),
                u = n("676231"),
                d = n("170225"),
                p = n("647572");

            function f(e) {
                return e && e.__esModule ? e.default : e
            }
            var m = {},
                h = {},
                g = {},
                v = {},
                y = {},
                b = {},
                x = {},
                S = {},
                w = {},
                D = {},
                C = {},
                P = {},
                k = {},
                E = {},
                T = {},
                R = {},
                M = {},
                O = {},
                I = {},
                A = {},
                N = {},
                L = {},
                j = {},
                F = {},
                K = {},
                _ = {},
                z = {},
                V = {},
                B = {},
                U = {},
                H = {},
                G = {},
                W = {},
                q = {},
                Z = {};

            function Y(e, t, n) {
                let {
                    direction: i
                } = (0, c.useLocale)(), l = (0, a.useMemo)(() => (0, r.createFocusManager)(t), [t]), u = () => {
                    var e;
                    let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                        o = (0, r.getFocusableTreeWalker)(t.current, {
                            tabbable: !0
                        });
                    if (n && (o.currentNode = n, n = o.previousNode()), !n) {
                        let e;
                        do(e = o.lastChild()) && (n = e); while (e)
                    }
                    for (; null == n ? void 0 : n.hasAttribute("data-placeholder");) {
                        let e = o.previousNode();
                        if (e && e.hasAttribute("data-placeholder")) n = e;
                        else break
                    }
                    n && n.focus()
                }, {
                    pressProps: d
                } = (0, s.usePress)({
                    preventFocusOnPress: !0,
                    allowTextSelectionOnPress: !0,
                    onPressStart(e) {
                        "mouse" === e.pointerType && u()
                    },
                    onPress(e) {
                        "mouse" !== e.pointerType && u()
                    }
                });
                return (0, o.mergeProps)(d, {
                    onKeyDown: t => {
                        if (!!t.currentTarget.contains(t.target)) {
                            if (t.altKey && ("ArrowDown" === t.key || "ArrowUp" === t.key) && "setOpen" in e && (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)), !n) switch (t.key) {
                                case "ArrowLeft":
                                    t.preventDefault(), t.stopPropagation(), "rtl" === i ? l.focusNext() : l.focusPrevious();
                                    break;
                                case "ArrowRight":
                                    t.preventDefault(), t.stopPropagation(), "rtl" === i ? l.focusPrevious() : l.focusNext()
                            }
                        }
                    }
                })
            }
            m = {
                "ar-AE": h = {
                    calendar: "التقويم",
                    day: "يوم",
                    dayPeriod: "ص/م",
                    endDate: "تاريخ الانتهاء",
                    era: "العصر",
                    hour: "الساعات",
                    minute: "الدقائق",
                    month: "الشهر",
                    second: "الثواني",
                    selectedDateDescription: e => "تاريخ محدد: ".concat(e.date),
                    selectedRangeDescription: e => "المدى الزمني المحدد: ".concat(e.startDate, " إلى ").concat(e.endDate),
                    selectedTimeDescription: e => "الوقت المحدد: ".concat(e.time),
                    startDate: "تاريخ البدء",
                    timeZoneName: "التوقيت",
                    weekday: "اليوم",
                    year: "السنة"
                },
                "bg-BG": g = {
                    calendar: "Календар",
                    day: "ден",
                    dayPeriod: "пр.об./сл.об.",
                    endDate: "Крайна дата",
                    era: "ера",
                    hour: "час",
                    minute: "минута",
                    month: "месец",
                    second: "секунда",
                    selectedDateDescription: e => "Избрана дата: ".concat(e.date),
                    selectedRangeDescription: e => "Избран диапазон: ".concat(e.startDate, " до ").concat(e.endDate),
                    selectedTimeDescription: e => "Избрано време: ".concat(e.time),
                    startDate: "Начална дата",
                    timeZoneName: "часова зона",
                    weekday: "ден от седмицата",
                    year: "година"
                },
                "cs-CZ": v = {
                    calendar: "Kalend\xe1ř",
                    day: "den",
                    dayPeriod: "č\xe1st dne",
                    endDate: "Konečn\xe9 datum",
                    era: "letopočet",
                    hour: "hodina",
                    minute: "minuta",
                    month: "měs\xedc",
                    second: "sekunda",
                    selectedDateDescription: e => "Vybran\xe9 datum: ".concat(e.date),
                    selectedRangeDescription: e => "Vybran\xe9 obdob\xed: ".concat(e.startDate, " až ").concat(e.endDate),
                    selectedTimeDescription: e => "Vybran\xfd čas: ".concat(e.time),
                    startDate: "Poč\xe1tečn\xed datum",
                    timeZoneName: "časov\xe9 p\xe1smo",
                    weekday: "den v t\xfddnu",
                    year: "rok"
                },
                "da-DK": y = {
                    calendar: "Kalender",
                    day: "dag",
                    dayPeriod: "AM/PM",
                    endDate: "Slutdato",
                    era: "\xe6ra",
                    hour: "time",
                    minute: "minut",
                    month: "m\xe5ned",
                    second: "sekund",
                    selectedDateDescription: e => "Valgt dato: ".concat(e.date),
                    selectedRangeDescription: e => "Valgt interval: ".concat(e.startDate, " til ").concat(e.endDate),
                    selectedTimeDescription: e => "Valgt tidspunkt: ".concat(e.time),
                    startDate: "Startdato",
                    timeZoneName: "tidszone",
                    weekday: "ugedag",
                    year: "\xe5r"
                },
                "de-DE": b = {
                    calendar: "Kalender",
                    day: "Tag",
                    dayPeriod: "Tagesh\xe4lfte",
                    endDate: "Enddatum",
                    era: "Epoche",
                    hour: "Stunde",
                    minute: "Minute",
                    month: "Monat",
                    second: "Sekunde",
                    selectedDateDescription: e => "Ausgew\xe4hltes Datum: ".concat(e.date),
                    selectedRangeDescription: e => "Ausgew\xe4hlter Bereich: ".concat(e.startDate, " bis ").concat(e.endDate),
                    selectedTimeDescription: e => "Ausgew\xe4hlte Zeit: ".concat(e.time),
                    startDate: "Anfangsdatum",
                    timeZoneName: "Zeitzone",
                    weekday: "Wochentag",
                    year: "Jahr"
                },
                "el-GR": x = {
                    calendar: "Ημερολόγιο",
                    day: "ημέρα",
                    dayPeriod: "π.μ./μ.μ.",
                    endDate: "Ημερομηνία λήξης",
                    era: "περίοδος",
                    hour: "ώρα",
                    minute: "λεπτό",
                    month: "μήνας",
                    second: "δευτερόλεπτο",
                    selectedDateDescription: e => "Επιλεγμένη ημερομηνία: ".concat(e.date),
                    selectedRangeDescription: e => "Επιλεγμένο εύρος: ".concat(e.startDate, " έως ").concat(e.endDate),
                    selectedTimeDescription: e => "Επιλεγμένη ώρα: ".concat(e.time),
                    startDate: "Ημερομηνία έναρξης",
                    timeZoneName: "ζώνη ώρας",
                    weekday: "καθημερινή",
                    year: "έτος"
                },
                "en-US": S = {
                    era: "era",
                    year: "year",
                    month: "month",
                    day: "day",
                    hour: "hour",
                    minute: "minute",
                    second: "second",
                    dayPeriod: "AM/PM",
                    calendar: "Calendar",
                    startDate: "Start Date",
                    endDate: "End Date",
                    weekday: "day of the week",
                    timeZoneName: "time zone",
                    selectedDateDescription: e => "Selected Date: ".concat(e.date),
                    selectedRangeDescription: e => "Selected Range: ".concat(e.startDate, " to ").concat(e.endDate),
                    selectedTimeDescription: e => "Selected Time: ".concat(e.time)
                },
                "es-ES": w = {
                    calendar: "Calendario",
                    day: "d\xeda",
                    dayPeriod: "a.\xa0m./p.\xa0m.",
                    endDate: "Fecha final",
                    era: "era",
                    hour: "hora",
                    minute: "minuto",
                    month: "mes",
                    second: "segundo",
                    selectedDateDescription: e => "Fecha seleccionada: ".concat(e.date),
                    selectedRangeDescription: e => "Rango seleccionado: ".concat(e.startDate, " a ").concat(e.endDate),
                    selectedTimeDescription: e => "Hora seleccionada: ".concat(e.time),
                    startDate: "Fecha de inicio",
                    timeZoneName: "zona horaria",
                    weekday: "d\xeda de la semana",
                    year: "a\xf1o"
                },
                "et-EE": D = {
                    calendar: "Kalender",
                    day: "p\xe4ev",
                    dayPeriod: "enne/p\xe4rast l\xf5unat",
                    endDate: "L\xf5ppkuup\xe4ev",
                    era: "ajastu",
                    hour: "tund",
                    minute: "minut",
                    month: "kuu",
                    second: "sekund",
                    selectedDateDescription: e => "Valitud kuup\xe4ev: ".concat(e.date),
                    selectedRangeDescription: e => "Valitud vahemik: ".concat(e.startDate, " kuni ").concat(e.endDate),
                    selectedTimeDescription: e => "Valitud aeg: ".concat(e.time),
                    startDate: "Alguskuup\xe4ev",
                    timeZoneName: "ajav\xf6\xf6nd",
                    weekday: "n\xe4dalap\xe4ev",
                    year: "aasta"
                },
                "fi-FI": C = {
                    calendar: "Kalenteri",
                    day: "p\xe4iv\xe4",
                    dayPeriod: "vuorokaudenaika",
                    endDate: "P\xe4\xe4ttymisp\xe4iv\xe4",
                    era: "aikakausi",
                    hour: "tunti",
                    minute: "minuutti",
                    month: "kuukausi",
                    second: "sekunti",
                    selectedDateDescription: e => "Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ".concat(e.date),
                    selectedRangeDescription: e => "Valittu aikav\xe4li: ".concat(e.startDate, " – ").concat(e.endDate),
                    selectedTimeDescription: e => "Valittu aika: ".concat(e.time),
                    startDate: "Alkamisp\xe4iv\xe4",
                    timeZoneName: "aikavy\xf6hyke",
                    weekday: "viikonp\xe4iv\xe4",
                    year: "vuosi"
                },
                "fr-FR": P = {
                    calendar: "Calendrier",
                    day: "jour",
                    dayPeriod: "cadran",
                    endDate: "Date de fin",
                    era: "\xe8re",
                    hour: "heure",
                    minute: "minute",
                    month: "mois",
                    second: "seconde",
                    selectedDateDescription: e => "Date s\xe9lectionn\xe9e\xa0: ".concat(e.date),
                    selectedRangeDescription: e => "Plage s\xe9lectionn\xe9e\xa0: ".concat(e.startDate, " au ").concat(e.endDate),
                    selectedTimeDescription: e => "Heure choisie\xa0: ".concat(e.time),
                    startDate: "Date de d\xe9but",
                    timeZoneName: "fuseau horaire",
                    weekday: "jour de la semaine",
                    year: "ann\xe9e"
                },
                "he-IL": k = {
                    calendar: "לוח שנה",
                    day: "יום",
                    dayPeriod: "לפנה״צ/אחה״צ",
                    endDate: "תאריך סיום",
                    era: "תקופה",
                    hour: "שעה",
                    minute: "דקה",
                    month: "חודש",
                    second: "שנייה",
                    selectedDateDescription: e => "תאריך נבחר: ".concat(e.date),
                    selectedRangeDescription: e => "טווח נבחר: ".concat(e.startDate, " עד ").concat(e.endDate),
                    selectedTimeDescription: e => "זמן נבחר: ".concat(e.time),
                    startDate: "תאריך התחלה",
                    timeZoneName: "אזור זמן",
                    weekday: "יום בשבוע",
                    year: "שנה"
                },
                "hr-HR": E = {
                    calendar: "Kalendar",
                    day: "dan",
                    dayPeriod: "AM/PM",
                    endDate: "Datum završetka",
                    era: "era",
                    hour: "sat",
                    minute: "minuta",
                    month: "mjesec",
                    second: "sekunda",
                    selectedDateDescription: e => "Odabrani datum: ".concat(e.date),
                    selectedRangeDescription: e => "Odabrani raspon: ".concat(e.startDate, " do ").concat(e.endDate),
                    selectedTimeDescription: e => "Odabrano vrijeme: ".concat(e.time),
                    startDate: "Datum početka",
                    timeZoneName: "vremenska zona",
                    weekday: "dan u tjednu",
                    year: "godina"
                },
                "hu-HU": T = {
                    calendar: "Napt\xe1r",
                    day: "nap",
                    dayPeriod: "napszak",
                    endDate: "Befejező d\xe1tum",
                    era: "\xe9ra",
                    hour: "\xf3ra",
                    minute: "perc",
                    month: "h\xf3nap",
                    second: "m\xe1sodperc",
                    selectedDateDescription: e => "Kijel\xf6lt d\xe1tum: ".concat(e.date),
                    selectedRangeDescription: e => "Kijel\xf6lt tartom\xe1ny: ".concat(e.startDate, "–").concat(e.endDate),
                    selectedTimeDescription: e => "Kijel\xf6lt idő: ".concat(e.time),
                    startDate: "Kezdő d\xe1tum",
                    timeZoneName: "időz\xf3na",
                    weekday: "h\xe9t napja",
                    year: "\xe9v"
                },
                "it-IT": R = {
                    calendar: "Calendario",
                    day: "giorno",
                    dayPeriod: "AM/PM",
                    endDate: "Data finale",
                    era: "era",
                    hour: "ora",
                    minute: "minuto",
                    month: "mese",
                    second: "secondo",
                    selectedDateDescription: e => "Data selezionata: ".concat(e.date),
                    selectedRangeDescription: e => "Intervallo selezionato: da ".concat(e.startDate, " a ").concat(e.endDate),
                    selectedTimeDescription: e => "Ora selezionata: ".concat(e.time),
                    startDate: "Data iniziale",
                    timeZoneName: "fuso orario",
                    weekday: "giorno della settimana",
                    year: "anno"
                },
                "ja-JP": M = {
                    calendar: "カレンダー",
                    day: "日",
                    dayPeriod: "午前/午後",
                    endDate: "終了日",
                    era: "時代",
                    hour: "時",
                    minute: "分",
                    month: "月",
                    second: "秒",
                    selectedDateDescription: e => "選択した日付 : ".concat(e.date),
                    selectedRangeDescription: e => "選択範囲 : ".concat(e.startDate, " から ").concat(e.endDate),
                    selectedTimeDescription: e => "選択した時間 : ".concat(e.time),
                    startDate: "開始日",
                    timeZoneName: "タイムゾーン",
                    weekday: "曜日",
                    year: "年"
                },
                "ko-KR": O = {
                    calendar: "달력",
                    day: "일",
                    dayPeriod: "오전/오후",
                    endDate: "종료 날짜",
                    era: "연호",
                    hour: "시",
                    minute: "분",
                    month: "월",
                    second: "초",
                    selectedDateDescription: e => "선택 일자: ".concat(e.date),
                    selectedRangeDescription: e => "선택 범위: ".concat(e.startDate, " ~ ").concat(e.endDate),
                    selectedTimeDescription: e => "선택 시간: ".concat(e.time),
                    startDate: "시작 날짜",
                    timeZoneName: "시간대",
                    weekday: "요일",
                    year: "년"
                },
                "lt-LT": I = {
                    calendar: "Kalendorius",
                    day: "diena",
                    dayPeriod: "iki pietų / po pietų",
                    endDate: "Pabaigos data",
                    era: "era",
                    hour: "valanda",
                    minute: "minutė",
                    month: "mėnuo",
                    second: "sekundė",
                    selectedDateDescription: e => "Pasirinkta data: ".concat(e.date),
                    selectedRangeDescription: e => "Pasirinktas intervalas: nuo ".concat(e.startDate, " iki ").concat(e.endDate),
                    selectedTimeDescription: e => "Pasirinktas laikas: ".concat(e.time),
                    startDate: "Pradžios data",
                    timeZoneName: "laiko juosta",
                    weekday: "savaitės diena",
                    year: "metai"
                },
                "lv-LV": A = {
                    calendar: "Kalendārs",
                    day: "diena",
                    dayPeriod: "priekšpusdienā/pēcpusdienā",
                    endDate: "Beigu datums",
                    era: "ēra",
                    hour: "stundas",
                    minute: "minūtes",
                    month: "mēnesis",
                    second: "sekundes",
                    selectedDateDescription: e => "Atlasītais datums: ".concat(e.date),
                    selectedRangeDescription: e => "Atlasītais diapazons: no ".concat(e.startDate, " līdz ").concat(e.endDate),
                    selectedTimeDescription: e => "Atlasītais laiks: ".concat(e.time),
                    startDate: "Sākuma datums",
                    timeZoneName: "laika josla",
                    weekday: "nedēļas diena",
                    year: "gads"
                },
                "nb-NO": N = {
                    calendar: "Kalender",
                    day: "dag",
                    dayPeriod: "a.m./p.m.",
                    endDate: "Sluttdato",
                    era: "tidsalder",
                    hour: "time",
                    minute: "minutt",
                    month: "m\xe5ned",
                    second: "sekund",
                    selectedDateDescription: e => "Valgt dato: ".concat(e.date),
                    selectedRangeDescription: e => "Valgt omr\xe5de: ".concat(e.startDate, " til ").concat(e.endDate),
                    selectedTimeDescription: e => "Valgt tid: ".concat(e.time),
                    startDate: "Startdato",
                    timeZoneName: "tidssone",
                    weekday: "ukedag",
                    year: "\xe5r"
                },
                "nl-NL": L = {
                    calendar: "Kalender",
                    day: "dag",
                    dayPeriod: "a.m./p.m.",
                    endDate: "Einddatum",
                    era: "tijdperk",
                    hour: "uur",
                    minute: "minuut",
                    month: "maand",
                    second: "seconde",
                    selectedDateDescription: e => "Geselecteerde datum: ".concat(e.date),
                    selectedRangeDescription: e => "Geselecteerd bereik: ".concat(e.startDate, " tot ").concat(e.endDate),
                    selectedTimeDescription: e => "Geselecteerde tijd: ".concat(e.time),
                    startDate: "Startdatum",
                    timeZoneName: "tijdzone",
                    weekday: "dag van de week",
                    year: "jaar"
                },
                "pl-PL": j = {
                    calendar: "Kalendarz",
                    day: "dzień",
                    dayPeriod: "rano / po południu / wieczorem",
                    endDate: "Data końcowa",
                    era: "era",
                    hour: "godzina",
                    minute: "minuta",
                    month: "miesiąc",
                    second: "sekunda",
                    selectedDateDescription: e => "Wybrana data: ".concat(e.date),
                    selectedRangeDescription: e => "Wybrany zakres: ".concat(e.startDate, " do ").concat(e.endDate),
                    selectedTimeDescription: e => "Wybrany czas: ".concat(e.time),
                    startDate: "Data początkowa",
                    timeZoneName: "strefa czasowa",
                    weekday: "dzień tygodnia",
                    year: "rok"
                },
                "pt-BR": F = {
                    calendar: "Calend\xe1rio",
                    day: "dia",
                    dayPeriod: "AM/PM",
                    endDate: "Data final",
                    era: "era",
                    hour: "hora",
                    minute: "minuto",
                    month: "m\xeas",
                    second: "segundo",
                    selectedDateDescription: e => "Data selecionada: ".concat(e.date),
                    selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.startDate, " a ").concat(e.endDate),
                    selectedTimeDescription: e => "Hora selecionada: ".concat(e.time),
                    startDate: "Data inicial",
                    timeZoneName: "fuso hor\xe1rio",
                    weekday: "dia da semana",
                    year: "ano"
                },
                "pt-PT": K = {
                    calendar: "Calend\xe1rio",
                    day: "dia",
                    dayPeriod: "am/pm",
                    endDate: "Data de T\xe9rmino",
                    era: "era",
                    hour: "hora",
                    minute: "minuto",
                    month: "m\xeas",
                    second: "segundo",
                    selectedDateDescription: e => "Data selecionada: ".concat(e.date),
                    selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.startDate, " a ").concat(e.endDate),
                    selectedTimeDescription: e => "Hora selecionada: ".concat(e.time),
                    startDate: "Data de In\xedcio",
                    timeZoneName: "fuso hor\xe1rio",
                    weekday: "dia da semana",
                    year: "ano"
                },
                "ro-RO": _ = {
                    calendar: "Calendar",
                    day: "zi",
                    dayPeriod: "a.m/p.m.",
                    endDate: "Dată final",
                    era: "eră",
                    hour: "oră",
                    minute: "minut",
                    month: "lună",
                    second: "secundă",
                    selectedDateDescription: e => "Dată selectată: ".concat(e.date),
                    selectedRangeDescription: e => "Interval selectat: de la ".concat(e.startDate, " p\xe2nă la ").concat(e.endDate),
                    selectedTimeDescription: e => "Ora selectată: ".concat(e.time),
                    startDate: "Dată \xeenceput",
                    timeZoneName: "fus orar",
                    weekday: "ziua din săptăm\xe2nă",
                    year: "an"
                },
                "ru-RU": z = {
                    calendar: "Календарь",
                    day: "день",
                    dayPeriod: "AM/PM",
                    endDate: "Дата окончания",
                    era: "эра",
                    hour: "час",
                    minute: "минута",
                    month: "месяц",
                    second: "секунда",
                    selectedDateDescription: e => "Выбранная дата: ".concat(e.date),
                    selectedRangeDescription: e => "Выбранный диапазон: с ".concat(e.startDate, " по ").concat(e.endDate),
                    selectedTimeDescription: e => "Выбранное время: ".concat(e.time),
                    startDate: "Дата начала",
                    timeZoneName: "часовой пояс",
                    weekday: "день недели",
                    year: "год"
                },
                "sk-SK": V = {
                    calendar: "Kalend\xe1r",
                    day: "deň",
                    dayPeriod: "AM/PM",
                    endDate: "D\xe1tum ukončenia",
                    era: "letopočet",
                    hour: "hodina",
                    minute: "min\xfata",
                    month: "mesiac",
                    second: "sekunda",
                    selectedDateDescription: e => "Vybrat\xfd d\xe1tum: ".concat(e.date),
                    selectedRangeDescription: e => "Vybrat\xfd rozsah: od ".concat(e.startDate, " do ").concat(e.endDate),
                    selectedTimeDescription: e => "Vybrat\xfd čas: ".concat(e.time),
                    startDate: "D\xe1tum začatia",
                    timeZoneName: "časov\xe9 p\xe1smo",
                    weekday: "deň t\xfdždňa",
                    year: "rok"
                },
                "sl-SI": B = {
                    calendar: "Koledar",
                    day: "dan",
                    dayPeriod: "dop/pop",
                    endDate: "Datum konca",
                    era: "doba",
                    hour: "ura",
                    minute: "minuta",
                    month: "mesec",
                    second: "sekunda",
                    selectedDateDescription: e => "Izbrani datum: ".concat(e.date),
                    selectedRangeDescription: e => "Izbrano območje: ".concat(e.startDate, " do ").concat(e.endDate),
                    selectedTimeDescription: e => "Izbrani čas: ".concat(e.time),
                    startDate: "Datum začetka",
                    timeZoneName: "časovni pas",
                    weekday: "dan v tednu",
                    year: "leto"
                },
                "sr-SP": U = {
                    calendar: "Kalendar",
                    day: "дан",
                    dayPeriod: "пре подне/по подне",
                    endDate: "Datum završetka",
                    era: "ера",
                    hour: "сат",
                    minute: "минут",
                    month: "месец",
                    second: "секунд",
                    selectedDateDescription: e => "Izabrani datum: ".concat(e.date),
                    selectedRangeDescription: e => "Izabrani opseg: od ".concat(e.startDate, " do ").concat(e.endDate),
                    selectedTimeDescription: e => "Izabrano vreme: ".concat(e.time),
                    startDate: "Datum početka",
                    timeZoneName: "временска зона",
                    weekday: "дан у недељи",
                    year: "година"
                },
                "sv-SE": H = {
                    calendar: "Kalender",
                    day: "dag",
                    dayPeriod: "fm/em",
                    endDate: "Slutdatum",
                    era: "era",
                    hour: "timme",
                    minute: "minut",
                    month: "m\xe5nad",
                    second: "sekund",
                    selectedDateDescription: e => "Valt datum: ".concat(e.date),
                    selectedRangeDescription: e => "Valt intervall: ".concat(e.startDate, " till ").concat(e.endDate),
                    selectedTimeDescription: e => "Vald tid: ".concat(e.time),
                    startDate: "Startdatum",
                    timeZoneName: "tidszon",
                    weekday: "veckodag",
                    year: "\xe5r"
                },
                "tr-TR": G = {
                    calendar: "Takvim",
                    day: "g\xfcn",
                    dayPeriod: "\xd6\xd6/\xd6S",
                    endDate: "Bitiş Tarihi",
                    era: "\xe7ağ",
                    hour: "saat",
                    minute: "dakika",
                    month: "ay",
                    second: "saniye",
                    selectedDateDescription: e => "Se\xe7ilen Tarih: ".concat(e.date),
                    selectedRangeDescription: e => "Se\xe7ilen Aralık: ".concat(e.startDate, " - ").concat(e.endDate),
                    selectedTimeDescription: e => "Se\xe7ilen Zaman: ".concat(e.time),
                    startDate: "Başlangı\xe7 Tarihi",
                    timeZoneName: "saat dilimi",
                    weekday: "haftanın g\xfcn\xfc",
                    year: "yıl"
                },
                "uk-UA": W = {
                    calendar: "Календар",
                    day: "день",
                    dayPeriod: "дп/пп",
                    endDate: "Дата завершення",
                    era: "ера",
                    hour: "година",
                    minute: "хвилина",
                    month: "місяць",
                    second: "секунда",
                    selectedDateDescription: e => "Вибрана дата: ".concat(e.date),
                    selectedRangeDescription: e => "Вибраний діапазон: ".concat(e.startDate, " — ").concat(e.endDate),
                    selectedTimeDescription: e => "Вибраний час: ".concat(e.time),
                    startDate: "Дата початку",
                    timeZoneName: "часовий пояс",
                    weekday: "день тижня",
                    year: "рік"
                },
                "zh-CN": q = {
                    calendar: "日历",
                    day: "日",
                    dayPeriod: "上午/下午",
                    endDate: "结束日期",
                    era: "纪元",
                    hour: "小时",
                    minute: "分钟",
                    month: "月",
                    second: "秒",
                    selectedDateDescription: e => "选定的日期：".concat(e.date),
                    selectedRangeDescription: e => "选定的范围：".concat(e.startDate, " 至 ").concat(e.endDate),
                    selectedTimeDescription: e => "选定的时间：".concat(e.time),
                    startDate: "开始日期",
                    timeZoneName: "时区",
                    weekday: "工作日",
                    year: "年"
                },
                "zh-TW": Z = {
                    calendar: "日曆",
                    day: "日",
                    dayPeriod: "上午/下午",
                    endDate: "結束日期",
                    era: "纪元",
                    hour: "小时",
                    minute: "分钟",
                    month: "月",
                    second: "秒",
                    selectedDateDescription: e => "選定的日期：".concat(e.date),
                    selectedRangeDescription: e => "選定的範圍：".concat(e.startDate, " 至 ").concat(e.endDate),
                    selectedTimeDescription: e => "選定的時間：".concat(e.time),
                    startDate: "開始日期",
                    timeZoneName: "时区",
                    weekday: "工作日",
                    year: "年"
                }
            };
            let X = new WeakMap,
                J = "__role_" + Date.now(),
                $ = "__focusManager_" + Date.now();

            function Q(e, t, n) {
                var l;
                let u;
                let {
                    labelProps: d,
                    fieldProps: p,
                    descriptionProps: h,
                    errorMessageProps: g
                } = (0, i.useField)({
                    ...e,
                    labelElementType: "span"
                }), {
                    focusWithinProps: v
                } = (0, s.useFocusWithin)({
                    ...e,
                    onBlurWithin: n => {
                        t.confirmPlaceholder(), e.onBlur && e.onBlur(n)
                    },
                    onFocusWithin: e.onFocus,
                    onFocusWithinChange: e.onFocusChange
                }), y = (0, c.useLocalizedStringFormatter)(f(m)), b = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription", x = "hour" === t.maxGranularity ? "time" : "date", S = t.value ? y.format(b, {
                    [x]: t.formatValue({
                        month: "long"
                    })
                }) : "", w = (0, o.useDescription)(S), D = "presentation" === e[J] ? p["aria-describedby"] : [w["aria-describedby"], p["aria-describedby"]].filter(Boolean).join(" ") || void 0, C = e[$], P = (0, a.useMemo)(() => C || (0, r.createFocusManager)(n), [C, n]), k = Y(t, n, "presentation" === e[J]);
                X.set(t, {
                    ariaLabel: e["aria-label"],
                    ariaLabelledBy: [d.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
                    ariaDescribedBy: D,
                    focusManager: P
                });
                let E = (0, a.useRef)(e.autoFocus);
                u = "presentation" === e[J] ? {
                    role: "presentation"
                } : (0, o.mergeProps)(p, {
                    role: "group",
                    "aria-disabled": e.isDisabled || void 0,
                    "aria-describedby": D
                }), (0, a.useEffect)(() => {
                    E.current && P.focusFirst(), E.current = !1
                }, [P]), (0, o.useFormReset)(e.inputRef, t.value, t.setValue);
                let T = (0, o.filterDOMProps)(e);
                return {
                    labelProps: {
                        ...d,
                        onClick: () => {
                            P.focusFirst()
                        }
                    },
                    fieldProps: (0, o.mergeProps)(T, u, k, v, {
                        onKeyDown(t) {
                            e.onKeyDown && e.onKeyDown(t)
                        },
                        onKeyUp(t) {
                            e.onKeyUp && e.onKeyUp(t)
                        }
                    }),
                    inputProps: {
                        type: "hidden",
                        name: e.name,
                        value: (null === (l = t.value) || void 0 === l ? void 0 : l.toString()) || ""
                    },
                    descriptionProps: h,
                    errorMessageProps: g
                }
            }

            function ee(e, t, n) {
                var r;
                let o = Q(e, t, n);
                return o.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || "", o
            }

            function et(e, t, n) {
                let l = (0, o.useId)(),
                    u = (0, o.useId)(),
                    d = (0, o.useId)(),
                    p = (0, c.useLocalizedStringFormatter)(f(m)),
                    {
                        labelProps: h,
                        fieldProps: g,
                        descriptionProps: v,
                        errorMessageProps: y
                    } = (0, i.useField)({
                        ...e,
                        labelElementType: "span"
                    }),
                    b = Y(t, n),
                    x = g["aria-labelledby"] || g.id,
                    {
                        locale: S
                    } = (0, c.useLocale)(),
                    w = t.formatValue(S, {
                        month: "long"
                    }),
                    D = w ? p.format("selectedDateDescription", {
                        date: w
                    }) : "",
                    C = (0, o.useDescription)(D),
                    P = [C["aria-describedby"], g["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    k = (0, o.filterDOMProps)(e),
                    E = (0, a.useMemo)(() => (0, r.createFocusManager)(n), [n]),
                    {
                        focusWithinProps: T
                    } = (0, s.useFocusWithin)({
                        ...e,
                        isDisabled: t.isOpen,
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange
                    });
                return {
                    groupProps: (0, o.mergeProps)(k, b, g, C, T, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-labelledby": x,
                        "aria-describedby": P,
                        onKeyDown(n) {
                            !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                        },
                        onKeyUp(n) {
                            !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                        }
                    }),
                    labelProps: {
                        ...h,
                        onClick: () => {
                            E.focusFirst()
                        }
                    },
                    fieldProps: {
                        ...g,
                        id: d,
                        [J]: "presentation",
                        "aria-describedby": P,
                        value: t.value,
                        onChange: t.setValue,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        placeholderValue: e.placeholderValue,
                        hideTimeZone: e.hideTimeZone,
                        hourCycle: e.hourCycle,
                        shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                        granularity: e.granularity,
                        isDisabled: e.isDisabled,
                        isReadOnly: e.isReadOnly,
                        isRequired: e.isRequired,
                        isInvalid: t.isInvalid,
                        autoFocus: e.autoFocus,
                        name: e.name
                    },
                    descriptionProps: v,
                    errorMessageProps: y,
                    buttonProps: {
                        ...C,
                        id: l,
                        "aria-haspopup": "dialog",
                        "aria-label": p.format("calendar"),
                        "aria-labelledby": "".concat(l, " ").concat(x),
                        "aria-describedby": P,
                        "aria-expanded": t.isOpen || void 0,
                        onPress: () => t.setOpen(!0)
                    },
                    dialogProps: {
                        id: u,
                        "aria-labelledby": "".concat(l, " ").concat(x)
                    },
                    calendarProps: {
                        autoFocus: !0,
                        value: t.dateValue,
                        onChange: t.setDateValue,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        isDisabled: e.isDisabled,
                        isReadOnly: e.isReadOnly,
                        isDateUnavailable: e.isDateUnavailable,
                        defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
                        isInvalid: t.isInvalid,
                        errorMessage: e.errorMessage
                    }
                }
            }
            class en {
                of(e) {
                    return this.dictionary.getStringForLocale(e, this.locale)
                }
                constructor(e) {
                    this.locale = e, this.dictionary = new p.LocalizedStringDictionary(f(m))
                }
            }

            function er(e, t, n) {
                let r = (0, a.useRef)(""),
                    {
                        locale: i
                    } = (0, c.useLocale)(),
                    s = function() {
                        let {
                            locale: e
                        } = (0, c.useLocale)();
                        return (0, a.useMemo)(() => {
                            try {
                                return new Intl.DisplayNames(e, {
                                    type: "dateTimeField"
                                })
                            } catch (t) {
                                return new en(e)
                            }
                        }, [e])
                    }(),
                    {
                        ariaLabel: p,
                        ariaLabelledBy: f,
                        ariaDescribedBy: m,
                        focusManager: h
                    } = X.get(t),
                    g = e.isPlaceholder ? "" : e.text,
                    v = (0, a.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
                    y = (0, c.useDateFormatter)({
                        month: "long",
                        timeZone: v.timeZone
                    }),
                    b = (0, c.useDateFormatter)({
                        hour: "numeric",
                        hour12: v.hour12,
                        timeZone: v.timeZone
                    });
                if ("month" !== e.type || e.isPlaceholder) "hour" === e.type && !e.isPlaceholder && (g = b.format(t.dateValue));
                else {
                    let e = y.format(t.dateValue);
                    g = e !== g ? "".concat(g, " – ").concat(e) : e
                }
                let {
                    spinButtonProps: x
                } = (0, d.useSpinButton)({
                    value: e.value,
                    textValue: g,
                    minValue: e.minValue,
                    maxValue: e.maxValue,
                    isDisabled: t.isDisabled,
                    isReadOnly: t.isReadOnly || !e.isEditable,
                    isRequired: t.isRequired,
                    onIncrement: () => {
                        r.current = "", t.increment(e.type)
                    },
                    onDecrement: () => {
                        r.current = "", t.decrement(e.type)
                    },
                    onIncrementPage: () => {
                        r.current = "", t.incrementPage(e.type)
                    },
                    onDecrementPage: () => {
                        r.current = "", t.decrementPage(e.type)
                    },
                    onIncrementToMax: () => {
                        r.current = "", t.setSegment(e.type, e.maxValue)
                    },
                    onDecrementToMin: () => {
                        r.current = "", t.setSegment(e.type, e.minValue)
                    }
                }), S = (0, a.useMemo)(() => new u.NumberParser(i, {
                    maximumFractionDigits: 0
                }), [i]), w = () => {
                    if (!S.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);
                    else {
                        let n = e.text.slice(0, -1),
                            o = S.parse(n);
                        0 === n.length || 0 === o ? t.clearSegment(e.type) : t.setSegment(e.type, o), r.current = n
                    }
                }, {
                    startsWith: D
                } = (0, c.useFilter)({
                    sensitivity: "base"
                }), C = (0, c.useDateFormatter)({
                    hour: "numeric",
                    hour12: !0
                }), P = (0, a.useMemo)(() => {
                    let e = new Date;
                    return e.setHours(0), C.formatToParts(e).find(e => "dayPeriod" === e.type).value
                }, [C]), k = (0, a.useMemo)(() => {
                    let e = new Date;
                    return e.setHours(12), C.formatToParts(e).find(e => "dayPeriod" === e.type).value
                }, [C]), E = (0, c.useDateFormatter)({
                    year: "numeric",
                    era: "narrow",
                    timeZone: "UTC"
                }), T = (0, a.useMemo)(() => {
                    if ("era" !== e.type) return [];
                    let n = (0, l.toCalendar)(new l.CalendarDate(1, 1, 1), t.calendar),
                        r = t.calendar.getEras().map(e => {
                            let t = n.set({
                                year: 1,
                                month: 1,
                                day: 1,
                                era: e
                            }).toDate("UTC");
                            return {
                                era: e,
                                formatted: E.formatToParts(t).find(e => "era" === e.type).value
                            }
                        }),
                        o = function(e) {
                            e.sort();
                            let t = e[0],
                                n = e[e.length - 1];
                            for (let e = 0; e < t.length; e++)
                                if (t[e] !== n[e]) return e;
                            return 0
                        }(r.map(e => e.formatted));
                    if (o)
                        for (let e of r) e.formatted = e.formatted.slice(o);
                    return r
                }, [E, t.calendar, e.type]), R = n => {
                    if (t.isDisabled || t.isReadOnly) return;
                    let o = r.current + n;
                    switch (e.type) {
                        case "dayPeriod":
                            if (D(P, n)) t.setSegment("dayPeriod", 0);
                            else if (D(k, n)) t.setSegment("dayPeriod", 12);
                            else break;
                            h.focusNext();
                            break;
                        case "era": {
                            let e = T.find(e => D(e.formatted, n));
                            e && (t.setSegment("era", e.era), h.focusNext());
                            break
                        }
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                        case "month":
                        case "year": {
                            if (!S.isValidPartialNumber(o)) return;
                            let a = S.parse(o),
                                i = a,
                                s = 0 === e.minValue;
                            if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                                switch (t.dateFormatter.resolvedOptions().hourCycle) {
                                    case "h11":
                                        a > 11 && (i = S.parse(n));
                                        break;
                                    case "h12":
                                        s = !1, a > 12 && (i = S.parse(n))
                                }
                                e.value >= 12 && a > 1 && (a += 12)
                            } else a > e.maxValue && (i = S.parse(n));
                            if (isNaN(a)) return;
                            let c = 0 !== i || s;
                            c && t.setSegment(e.type, i), Number(a + "0") > e.maxValue || o.length >= String(e.maxValue).length ? (r.current = "", c && h.focusNext()) : r.current = o
                        }
                    }
                }, M = (0, a.useRef)("");
                (0, o.useEvent)(n, "beforeinput", r => {
                    switch (r.preventDefault(), r.inputType) {
                        case "deleteContentBackward":
                        case "deleteContentForward":
                            S.isValidPartialNumber(e.text) && !t.isReadOnly && w();
                            break;
                        case "insertCompositionText":
                            M.current = n.current.textContent, n.current.textContent = n.current.textContent;
                            break;
                        default:
                            null != r.data && R(r.data)
                    }
                }), (0, o.useEvent)(n, "input", e => {
                    let {
                        inputType: t,
                        data: r
                    } = e;
                    if ("insertCompositionText" === t) n.current.textContent = M.current, (D(P, r) || D(k, r)) && R(r)
                }), (0, o.useLayoutEffect)(() => {
                    let e = n.current;
                    return () => {
                        document.activeElement === e && !h.focusPrevious() && h.focusNext()
                    }
                }, [n, h]);
                let O = (0, o.isIOS)() || "timeZoneName" === e.type ? {
                    role: "textbox",
                    "aria-valuemax": null,
                    "aria-valuemin": null,
                    "aria-valuetext": null,
                    "aria-valuenow": null
                } : {};
                e !== (0, a.useMemo)(() => t.segments.find(e => e.isEditable), [t.segments]) && !t.isInvalid && (m = void 0);
                let I = (0, o.useId)(),
                    A = !t.isDisabled && !t.isReadOnly && e.isEditable,
                    N = "literal" === e.type ? "" : s.of(e.type),
                    L = (0, o.useLabels)({
                        "aria-label": "".concat(N).concat(p ? ", ".concat(p) : "").concat(f ? ", " : ""),
                        "aria-labelledby": f
                    });
                return "literal" === e.type ? {
                    segmentProps: {
                        "aria-hidden": !0
                    }
                } : {
                    segmentProps: (0, o.mergeProps)(x, L, {
                        id: I,
                        ...O,
                        "aria-invalid": t.isInvalid ? "true" : void 0,
                        "aria-describedby": m,
                        "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
                        "data-placeholder": e.isPlaceholder || void 0,
                        contentEditable: A,
                        suppressContentEditableWarning: A,
                        spellCheck: A ? "false" : void 0,
                        autoCapitalize: A ? "off" : void 0,
                        autoCorrect: A ? "off" : void 0,
                        [parseInt(a.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: A ? "next" : void 0,
                        inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !A ? void 0 : "numeric",
                        tabIndex: t.isDisabled ? void 0 : 0,
                        onKeyDown: e => {
                            if ("a" === e.key && ((0, o.isMac)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
                                case "Backspace":
                                case "Delete":
                                    e.preventDefault(), e.stopPropagation(), w()
                            }
                        },
                        onFocus: () => {
                            r.current = "", (0, o.scrollIntoViewport)(n.current, {
                                containingElement: (0, o.getScrollParent)(n.current)
                            }), window.getSelection().collapse(n.current)
                        },
                        style: {
                            caretColor: "transparent"
                        },
                        onPointerDown(e) {
                            e.stopPropagation()
                        },
                        onMouseDown(e) {
                            e.stopPropagation()
                        }
                    })
                }
            }

            function eo(e, t, n) {
                var l, u;
                let d = (0, c.useLocalizedStringFormatter)(f(m)),
                    {
                        labelProps: p,
                        fieldProps: h,
                        descriptionProps: g,
                        errorMessageProps: v
                    } = (0, i.useField)({
                        ...e,
                        labelElementType: "span"
                    }),
                    y = h["aria-labelledby"] || h.id,
                    {
                        locale: b
                    } = (0, c.useLocale)(),
                    x = t.formatValue(b, {
                        month: "long"
                    }),
                    S = x ? d.format("selectedRangeDescription", {
                        startDate: x.start,
                        endDate: x.end
                    }) : "",
                    w = (0, o.useDescription)(S),
                    D = {
                        "aria-label": d.format("startDate"),
                        "aria-labelledby": y
                    },
                    C = {
                        "aria-label": d.format("endDate"),
                        "aria-labelledby": y
                    },
                    P = (0, o.useId)(),
                    k = (0, o.useId)(),
                    E = Y(t, n),
                    T = [w["aria-describedby"], h["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    R = (0, a.useMemo)(() => (0, r.createFocusManager)(n, {
                        accept: e => e.id !== P
                    }), [n, P]),
                    M = {
                        [$]: R,
                        [J]: "presentation",
                        "aria-describedby": T,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        placeholderValue: e.placeholderValue,
                        hideTimeZone: e.hideTimeZone,
                        hourCycle: e.hourCycle,
                        granularity: e.granularity,
                        shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                        isDisabled: e.isDisabled,
                        isReadOnly: e.isReadOnly,
                        isRequired: e.isRequired,
                        isInvalid: t.isInvalid
                    },
                    O = (0, o.filterDOMProps)(e),
                    {
                        focusWithinProps: I
                    } = (0, s.useFocusWithin)({
                        ...e,
                        isDisabled: t.isOpen,
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange
                    });
                return {
                    groupProps: (0, o.mergeProps)(O, E, h, w, I, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-describedby": T,
                        onKeyDown(n) {
                            !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                        },
                        onKeyUp(n) {
                            !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                        }
                    }),
                    labelProps: {
                        ...p,
                        onClick: () => {
                            R.focusFirst()
                        }
                    },
                    buttonProps: {
                        ...w,
                        id: P,
                        "aria-haspopup": "dialog",
                        "aria-label": d.format("calendar"),
                        "aria-labelledby": "".concat(P, " ").concat(y),
                        "aria-describedby": T,
                        "aria-expanded": t.isOpen || void 0,
                        onPress: () => t.setOpen(!0)
                    },
                    dialogProps: {
                        id: k,
                        "aria-labelledby": "".concat(P, " ").concat(y)
                    },
                    startFieldProps: {
                        ...D,
                        ...M,
                        value: null === (l = t.value) || void 0 === l ? void 0 : l.start,
                        onChange: e => t.setDateTime("start", e),
                        autoFocus: e.autoFocus,
                        name: e.startName
                    },
                    endFieldProps: {
                        ...C,
                        ...M,
                        value: null === (u = t.value) || void 0 === u ? void 0 : u.end,
                        onChange: e => t.setDateTime("end", e),
                        name: e.endName
                    },
                    descriptionProps: g,
                    errorMessageProps: v,
                    calendarProps: {
                        autoFocus: !0,
                        value: t.dateRange,
                        onChange: t.setDateRange,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        isDisabled: e.isDisabled,
                        isReadOnly: e.isReadOnly,
                        isDateUnavailable: e.isDateUnavailable,
                        allowsNonContiguousRanges: e.allowsNonContiguousRanges,
                        defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
                        isInvalid: t.isInvalid,
                        errorMessage: e.errorMessage
                    }
                }
            }
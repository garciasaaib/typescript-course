"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.43
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = (avengers) => {
        console.log(avengers.ironman);
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, args = __rest(_a, ["ironman"]);
        console.log(ironman, args.vision);
    };
    printAvenger(avengers);
})();
(() => {
    const a = "Adrian";
    console.log(a);
})();
//# sourceMappingURL=main.js.map
const { filterUsersMoreThan24YearsOld } = require("./user-data-transformer");

describe("user-data-transformer", () => {
    test("it should return [{name: paula, isAdult: true}] when Paula is 25",() => {
        const user = [{name: "Paula", age: 25}]

        const result = filterUsersMoreThan24YearsOld(user);

        expect(result).toStrictEqual([{username: "paula", isAdult: true}]);
    });

    test("it should return [{name: paula, isAdult: true, name: nicolas, isAdult true }] when Paula is 25, Nicolas 34 and Agustin 19",() => {
        const user = [
            { name: "Paula", age: 25},
            { name: "Nicolas", age: 34},
            { name: "Agustin", age: 19}

        ]

        const result = filterUsersMoreThan24YearsOld(user);

        expect(result).toStrictEqual([
            { username: "paula", isAdult: true },
            { username: "nicolas", isAdult: true }
        ]);
    });
});
import { Calculator } from "../src/index";

describe("test Calculator", () => {
    it("should add two numbers", () => {
        // given
        const a = 2;
        const b = 3;

        // when
        const sum = Calculator.add(a, b);

        // then
        expect(sum).toBe(5);
    });

});

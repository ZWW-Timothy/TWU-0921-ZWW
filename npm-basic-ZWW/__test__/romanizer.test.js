import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should return X when 10', () => {
        const result = transform(10);

        expect(result).toEqual("X");
    });

    it('should return itself when not 10', () => {
        const result = transform(1);

        expect(result).toEqual(1);
    });
});

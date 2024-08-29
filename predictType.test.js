"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('predictColumnType', () => {
    it('should return "string" for an array of strings', () => {
        const input = {
            values: ["aa", "bb", "cc"],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("string");
    });
    it('should return "string" for an array of strings', () => {
        const input = {
            values: [false, "bb", 44],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("string");
    });
    it('should return "boolean" for an array with true/false values', () => {
        const input = {
            values: [true, false],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("boolean");
    });
    it('should return "boolean" for an array with 0/1 if treatZeroOneAsBoolean is true', () => {
        const input = {
            values: ["0", "1"],
            treatZeroOneAsBoolean: true
        };
        expect((0, index_1.predictType)(input)).toBe("boolean");
    });
    it('should return "number" for an array of integers', () => {
        const input = {
            values: [1, 2, 3],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("number");
    });
    it('should return "float" for an array of floats', () => {
        const input = {
            values: [1.1, 2.2, 3.3],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("float");
    });
    it('should return "float" for an array of floats', () => {
        const input = {
            values: [1, 2.2, 5],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("float");
    });
    it('should return "date" for an array of date strings', () => {
        const input = {
            values: ["2022-01-01", "2022-02-01"],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("date");
    });
    it('should return "datetime2" for an array of datetime strings', () => {
        const input = {
            values: ["2022-01-01T12:00:00", "2022-02-01T15:30:00"],
            treatZeroOneAsBoolean: false
        };
        expect((0, index_1.predictType)(input)).toBe("datetime2");
    });
});

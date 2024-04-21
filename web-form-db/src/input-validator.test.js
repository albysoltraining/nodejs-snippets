const request = require('supertest');
const validator = require('./input-validator.js');

describe('Test input-validation', () => {

    it('should return FALSE when DOB is less than 18 years', () => {
        const res = validator.isValidDate('03/03/2024');
        expect(res).toBe(false)
    });

    it('should return TRUE when DOB is above than 18 years', () => {
        const res = validator.isValidDate('03-03-2002');
        expect(res).toBe(true);
    });
});

const result = require('../index')
// const marks = require('../models/marks')

test('testing the result output is a number', () => {
    // expect(typeof(result.marks)).toBe("number")
    expect(result.isValidate()).toBe(true)
    
})
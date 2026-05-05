// unit.test.js

import {
  isDate,
  isEmail,
  isHexColor,
  isPhoneNumber,
  isStrongPassword
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('isPhoneNumber: (123) 456-7890 is true)', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: 123-456-7890 is true)', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: 1234567890 is false)', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber: (123)4567890 is false', () => {
    expect(isPhoneNumber('(123)4567890')).toBe(false);
});

// isEmail tests
test('isEmail: ghuman@ucsd.edu is true', () => {
    expect(isEmail('ghuman@ucsd.eduu')).toBe(true);
});
test('isEmail: test_user@me.com is true', () => {
    expect(isEmail('test_user@me.com')).toBe(true);
});
test('isEmail: name@ucsd.education is false', () => {
    expect(isEmail('name@ucsd.education')).toBe(false);
});
test('isEmail: name@gmail.c is false', () => {
    expect(isEmail('name@gmail.c')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword: Ghuman_2026 is true', () => {
    expect(isStrongPassword('Ghuman_2026')).toBe(true);
});
test('isStrongPassword: A1_b2_C3 is true', () => {
    expect(isStrongPassword('A1_b2_C3')).toBe(true);
});
test('isStrongPassword: 123password is false (starts with number)', () => {
    expect(isStrongPassword('123password')).toBe(false);
});
test('isStrongPassword: very_long_password_over_limit is false', () => {
    expect(isStrongPassword('very_long_password_over_limit')).toBe(false);
});

// isDate Tests
test('isDate: 5/4/2026 is true', () => {
    expect(isDate('5/4/2026')).toBe(true);
});
test('isDate: 12/12/2024 is true', () => {
    expect(isDate('12/12/2024')).toBe(true);
});
test('isDate: 05-04-2026 is false (uses hyphens)', () => {
    expect(isDate('05-04-2026')).toBe(false);
});
test('isDate: 1/1/26 is false (year must be 4 digits)', () => {
    expect(isDate('1/1/26')).toBe(false);
});

// isHexColor Tests
test('isHexColor: #ABC is true', () => {
    expect(isHexColor('#ABC')).toBe(true);
});
test('isHexColor: f00f00 is true (optional #)', () => {
    expect(isHexColor('f00f00')).toBe(true);
});
test('isHexColor: #1234 is false (must be 3 or 6 chars)', () => {
    expect(isHexColor('#1234')).toBe(false);
});
test('isHexColor: #GGGGGG is false (invalid hex characters)', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
});

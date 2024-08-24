import {
  email,
  InferInput,
  length,
  object,
  pipe,
  regex,
  string,
} from 'valibot';

export const GoogleUserInfoSchema = object({
  email: pipe(
    string('Email should be a string.'),
    email('Invalid email format.')
  ),
  password: string('Password should be a string.'),
  otp: pipe(
    string('OTP should be a string.'),
    length(6, 'Min length required: 6')
  ),
});
export type GoogleUserInfo = InferInput<typeof GoogleUserInfoSchema>;

export const StudentInfoSchema = object({
  no: pipe(
    string('Student ID should be a string.'),
    regex(/^[0-9]{9}$/, 'Must be 9 numbers')
  ),
  password: string('Password should be a string.'),
});
export type StudentInfo = InferInput<typeof StudentInfoSchema>;

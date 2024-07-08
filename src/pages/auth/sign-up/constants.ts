export const validationRules = {
  username: [
    {
      required: true,
      message: 'Username is required',
      trigger: ['blur'],
    },
    {
      min: 4,
      message: 'Username must be at least 4 characters.',
      trigger: ['blur'],
    },
  ],
  email: [
    {
      required: true,
      message: 'Email is required',
      trigger: ['blur'],
    },
    {
      type: 'email',
      message: 'Invalid email',
      trigger: ['blur'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
      trigger: ['blur'],
    },
    {
      min: 8,
      message: 'Password must be at least 8 characters.',
      trigger: ['blur'],
    },
  ],
};

export const defaultValues = {
  username: '',
  email: '',
  password: '',
};

export const validationRules = {
  email: [
    {
      required: true,
      message: 'Email is required',
      trigger: ['blur', 'change'],
    },
    {
      type: 'email',
      message: 'Please input correct email',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
      trigger: ['blur', 'change'],
    },
    {
      min: 8,
      message: 'Password must be at least 8 characters.',
      trigger: ['blur', 'change'],
    },
  ],
};

export const defaultValues = {
  email: '',
  password: '',
};

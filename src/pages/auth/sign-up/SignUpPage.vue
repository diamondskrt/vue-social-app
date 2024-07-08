<script setup lang="ts">
import { reactive, ref } from 'vue';

import type { FormInstance, FormRules } from 'element-plus';
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

import { useCreateUserAccount } from '@/lib/tanstackquery/queries';

import { defaultValues, validationRules } from './constants';
import type { Form } from './model';

const form = reactive<Form>(defaultValues);
const formRef = ref<FormInstance>();

const router = useRouter();

const { mutateAsync: createUserAccount, isPending } = useCreateUserAccount();

const onSubmit = () => {
  formRef.value?.validate(async (valid) => {
    if (!valid) return;

    try {
      await createUserAccount(form);
      formRef.value?.resetFields();
      router.push('/auth/sign-in');
      ElMessage({
        message: 'User has been created.',
        type: 'success',
      });
    } catch (error) {
      ElMessage({
        message: (error as Error).message,
        type: 'error',
      });
    }
  });
};
</script>

<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="validationRules as FormRules<Form>"
    label-position="top"
    class="w-full md:w-1/2"
  >
    <el-form-item label="Username" prop="username">
      <el-input
        v-model="form.username"
        :disabled="isPending"
        size="large"
        placeholder="username"
      />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input
        v-model="form.email"
        :disabled="isPending"
        size="large"
        placeholder="email"
      />
    </el-form-item>
    <el-form-item :disabled="isPending" label="Password" prop="password">
      <el-input
        v-model="form.password"
        :disabled="isPending"
        size="large"
        type="password"
        placeholder="password"
      />
    </el-form-item>
    <el-button
      :disabled="isPending"
      size="large"
      type="primary"
      class="mt-4"
      @click="onSubmit"
    >
      Submit
    </el-button>

    <p className="text-small-regular text-light-2 mt-2">
      Already have an account?
      <RouterLink
        to="/auth/sign-in"
        class-name="text-primary text-small-semibold ml-1"
      >
        Sign in
      </RouterLink>
    </p>
  </el-form>
</template>

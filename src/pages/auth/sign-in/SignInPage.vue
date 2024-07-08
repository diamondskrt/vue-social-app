<script setup lang="ts">
import { reactive, ref } from 'vue';

import type { FormInstance, FormRules } from 'element-plus';
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

import {
  useGetCurrentUser,
  useSignInAccount,
} from '@/lib/tanstackquery/queries';
import { useUserStore } from '@/store';

import { defaultValues, validationRules } from './constants';
import type { Form } from './model';

const form = reactive<Form>(defaultValues);
const formRef = ref<FormInstance>();

const router = useRouter();
const { setUser } = useUserStore();

const { mutateAsync: signInAccount, isPending: isSignInAccountPending } =
  useSignInAccount();
const { mutateAsync: getCurrentUser, isPending: isGetCurrentUserPending } =
  useGetCurrentUser();

const isPending = isSignInAccountPending || isGetCurrentUserPending;

const onSubmit = () => {
  formRef.value?.validate(async (valid) => {
    if (!valid) return;
    try {
      await signInAccount(form);
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      formRef.value?.resetFields();
      router.push('/');
      ElMessage({
        message: 'Sign-in has been successful.',
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
      No account?
      <RouterLink
        to="/auth/sign-up"
        class-name="text-primary text-small-semibold ml-1"
      >
        Sign up
      </RouterLink>
    </p>
  </el-form>
</template>

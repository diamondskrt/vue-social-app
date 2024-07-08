<script setup lang="ts">
import { reactive, ref } from 'vue';

import type { FormInstance } from 'element-plus';
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

import { defaultValues, validationRules } from './constants';
import type { Form } from './model';

const form = reactive<Form>(defaultValues);
const formRef = ref<FormInstance>();

const isPending = false;

const router = useRouter();

const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return;
    try {
      // await createUserAccount(user);
      formRef.value.resetFields();
      router.push('/auth/sign-in');
      ElMessage({
        message: 'User has been created.',
        type: 'success',
      });
    } catch (error) {
      ElMessage({
        message: (error as Error).message,
        type: 'success',
      });
    }
  });
};
</script>

<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="validationRules"
    label-position="top"
    class="w-full md:w-1/2"
  >
    <el-form-item label="Username" prop="username">
      <el-input
        v-model="form.username"
        :disabled="isPending"
        placeholder="username"
      />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input
        v-model="form.email"
        :disabled="isPending"
        placeholder="email"
      />
    </el-form-item>
    <el-form-item :disabled="isPending" label="Password" prop="password">
      <el-input
        v-model="form.password"
        :disabled="isPending"
        type="password"
        placeholder="password"
      />
    </el-form-item>
    <el-button :disabled="isPending" type="primary" @click="onSubmit">
      Submit
    </el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ElButton, ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

import { useSignOutAccount } from '@/lib/tanstackquery/queries';
import { useUserStore } from '@/store';

const { mutateAsync: signOutAccount } = useSignOutAccount();

const router = useRouter();

const onSignOut = async () => {
  try {
    await signOutAccount();
    ElMessage({
      message: 'Sign-out has been successful.',
      type: 'success',
    });
    router.push('/auth/sign-in');
  } catch (error) {
    ElMessage({
      message: (error as Error).message,
      type: 'error',
    });
  }
};

const { user } = useUserStore();
</script>

<template>
  <main class="p-4">
    <div>Home {{ user?.username }}</div>
    <el-button type="primary" class="mt-2" @click="onSignOut">
      Sign Out
    </el-button>
  </main>
</template>

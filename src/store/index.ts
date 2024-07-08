import { ref } from 'vue';

import type { Models } from 'appwrite';
import { defineStore } from 'pinia';

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<Models.Document | null>(null);

    const setUser = (userData: Models.Document) => {
      user.value = userData;
    };

    return { user, setUser };
  },
  {
    persist: true,
  }
);

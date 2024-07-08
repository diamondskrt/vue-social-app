<script setup lang="ts">
import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";
import { Footer } from "@/components/shared/footer";
</script>

<template>
  <div className="md:flex h-screen">
    <Header />
    <Sidebar />
    <main className="flex flex-1 h-full px-6">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

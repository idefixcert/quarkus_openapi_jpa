<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <span class="navbar-item">
          Awesome Project
        </span>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample"
           @click="showNav = !showNav"
           :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" ref="navbarMenu"
           @click="showNav = false"
           :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <RouterLink class="navbar-item" :to="{ name: 'customers'}">
            Customers
          </RouterLink>
        </div>
        {{ applicationVersion }}
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useRouter} from "vue-router";

const applicationVersion = import.meta.env.VITE_APP_VERSION
const showNav = ref(false); //: Ref<HTMLDivElement | undefined>
const router = useRouter();
const DEFAULT_TITLE = 'DevServer';
router.beforeEach((to) => {
  document.title = to.meta.title as string || DEFAULT_TITLE
});
onMounted(async () => {
  await router.isReady()
});
</script>

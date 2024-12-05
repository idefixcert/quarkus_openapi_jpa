<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-1">
        <aside class="menu is-hidden-mobile" :key="$route.fullPath">
            <p class="menu-label">Projects</p>
            <ul class="menu-list">
              <li>
                <RouterLink :to="{ name: 'customers.list' }">List</RouterLink>
              </li>
            </ul>
        </aside>
      </div>
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

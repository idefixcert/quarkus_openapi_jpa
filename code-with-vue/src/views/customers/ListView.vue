<template>
  <main class="box">
    <h1>Customer List</h1><br/>
    Treffer: {{ list.length }}
    <table v-if="list.length>0" class="table is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Locale</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.locale }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import {type Customer, CustomerResourceApi} from "@/client";
import {DEFAULT_CONFIG} from "@/client/config";
import {onMounted, ref, type Ref} from "vue";

const list: Ref<Customer[]> = ref([]);

onMounted(() => {
  loadCustomers();
});

function loadCustomers() {
  const api = new CustomerResourceApi(DEFAULT_CONFIG)
  api.apiCustomersGet().then(
      value => {
        list.value = value
      }
  )
}
</script>
<style scoped>

</style>
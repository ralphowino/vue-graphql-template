<template>
  <div>
    <h2>Dashboard</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sample Card</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sample Card</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sample Card</h4>
          </div>
        </div>
      </div>
    </div>
    <apollo-example/>
  </div>
</template>

<script>

import ApolloExample from '../components/ApolloExample.vue';

export default {
  name: 'Home',
  components: { ApolloExample },
};
</script>

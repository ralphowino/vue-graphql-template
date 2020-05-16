<template>
  <div>
    <h2>Posts</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h6>Posts</h6>
            <span class="display-4">23</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h6>Comments</h6>
            <span class="display-4">23</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h6>Comments / Post</h6>
            <span class="display-4">23</span>
          </div>
        </div>
      </div>
    </div>
    <ApolloQuery :query="require('../../graphql/blog/Posts.gql')" :variables="{limit: perPage}">
      <div slot-scope="{ result: { data } }" class="mt-3">
        <template v-if="data">
          <div class="list-group">
            <div v-for="post in data.posts" :key="post.id" class="list-group-item text-dark">
              <router-link :to="`/blog/post/${post.id}`" class="d-block text-decoration-none lead">
                <span>{{post.title}}</span>
              </router-link>
              <router-link :to="`/blog/author/${post.author.id}`" class="text-muted">
              <small>By {{post.author.username}}</small>
             </router-link>
            </div>
          </div>
        </template>
      </div>
    </ApolloQuery>
  </div>
</template>

<script>

export default {
  name: 'BlogIndex',
  data() {
    return {
      perPage: 10,
    };
  },
};
</script>

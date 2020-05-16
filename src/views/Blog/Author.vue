<template>
  <ApolloQuery :query="require('../../graphql/blog/Author.gql')"
               :variables="{id: parseInt($route.params.id)}">
    <div slot-scope="{ result: { data } }" class="mt-3">
      <template v-if="data">
        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div class="card">
              <div class="card-body py-1">
                <h4 class="m-0">{{data.user.name}}</h4>
                <small class="text-muted">{{data.user.username}}</small>
              </div>
              <div class="list-group-flush list-group">
                <div class="list-group-item py-1">
                  <small><strong>Company:</strong> {{data.user.company.name}}</small>
                </div>
                <div class="list-group-item py-1">
                  <small><strong>Industries:</strong> {{data.user.company.bs.split(' ').join(', ')}}</small>
                </div>
                <div class="list-group-item py-1 list-group-item-dark">
                  Contacts
                </div>
                <div class="list-group-item py-1">
                  <small><strong>Email:</strong> {{data.user.email}}</small>
                </div>
                <div class="list-group-item py-1">
                  <small><strong>Phone:</strong> {{data.user.phone}}</small>
                </div>
                <div class="list-group-item py-1">
                  <small><strong>Website:</strong> {{data.user.website}}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8">
            <div class="card">
              <div class="card-body py-1">
                <h4 class="card-title">Posts</h4>
              </div>
              <div class="list-group list-group-flush">
                <div v-for="post in data.user.posts" :key="post.id" class="list-group-item text-dark">
                  <router-link :to="`/blog/post/${post.id}`" class="d-block text-decoration-none lead">
                    <span>{{post.title}}</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </ApolloQuery>
</template>

<script>

export default {
  name: 'BlogAuthor',
  data() {
    return {
      perPage: 10,
    };
  },
};
</script>

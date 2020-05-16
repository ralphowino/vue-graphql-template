<template>
  <ApolloQuery :query="require('../../graphql/blog/Post.gql')" :variables="{id: $route.params.id}">
    <div slot-scope="{ result: { data } }" class="mt-3">
      <template v-if="data">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">{{data.post.title}}</h4>
            <div>
              <router-link :to="`/blog/author/${data.post.author.id}`" class="text-muted">
                By {{data.post.author.username}}
              </router-link>
            </div>
          </div>
          <div class="card-body">
            <p class="mb-0"> {{data.post.body }}</p>
          </div>
        </div>
        <div class="card mt-4">
          <h5 class="card-title p-2">Comments</h5>
          <div class="list-group list-group-flush">
            <div v-for="comment in data.post.comments" :key="comment.id" class="list-group-item text-dark">
              <p class="mb-0">{{comment.body}}</p>
              <small>
                <router-link :to="`/blog/author/${comment.author.id}`" class="text-muted">
                  By {{comment.author.username}}
                </router-link>
              </small>
            </div>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-header">Add Comment</div>
          <div class="card-body">
            <ApolloMutation
              :mutation="require('../../graphql/blog/AddComment.gql')"
              :variables="{ newComment }"
              @done="onCommentAdded"
            >
              <template slot-scope="{ mutate }">
                <form v-on:submit.prevent="mutate()">
                  <div class="form-group">
                    <label>Author</label>
                    <select v-model.number="newComment.userId" class="custom-select" size="1"
                            required>
                      <option :value="1">User 1</option>
                      <option :value="2">User 2</option>
                      <option :value="3">User 3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Body</label>
                    <textarea v-model="newComment.body" class="form-control" rows="3"
                              required></textarea>
                  </div>
                  <button class="btn btn-primary">Submit</button>
                </form>
              </template>
            </ApolloMutation>
          </div>
        </div>
      </template>
    </div>
  </ApolloQuery>
</template>

<script>

export default {
  name: 'BlogPost',
  data() {
    return {
      newComment: {
        postId: parseInt(this.$route.params.id, 10),
        userId: undefined,
        body: '',
      },
    };
  },
  methods: {
    onCommentAdded() {
      this.newComment.userId = undefined;
      this.newComment.body = '';
    },
  },
};
</script>

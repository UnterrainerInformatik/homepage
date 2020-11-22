<template>
  <div v-if="repos" class="d-flex flex-wrap justify-center">
      <v-card
        class="grey lighten-4 ma-2 flex-grow-1 flex-shrink-1 d-flex flex-column"
        v-for="(repo, i) in repos"
        :key="i"
        min-width="400px"
        max-width="400px"
      >
        <v-card-title
          class="secondary justify-center text-center"
          v-html="repo.name"
        ></v-card-title>
        <v-card-text class="text-justify" v-html="repo.description"></v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="ma-0 pa-0">
          <v-container>
            <v-btn
              class="mb-1"
              color="primary"
              small
              block
              :href="repo.html_url"
              target="_blank"
            >
              {{ $t('global.gotoGithub') }}
            </v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script lang="js">

export default {
  name: 'gitHubRepoStream',

  props: {
    gitHubUserName: {},
    containsTopics: {},
    notContainsTopics: {},
    language: {}
  },

  data: () => ({
    repos: {},
    topics: [],
    notTopics: []
  }),

  computed: {
  },

  methods: {
    async getRepos () {
      return fetch(`https://api.github.com/users/${this.gitHubUserName}/repos?per_page=10000`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json'
          }
        }).then((result) => result.json())
    }
  },

  mounted () {
    if (this.containsTopics) {
      for (const topic of this.containsTopics) {
        this.topics.push(topic.toLowerCase())
      }
    }

    if (this.notContainsTopics) {
      for (const topic of this.notContainsTopics) {
        this.notTopics.push(topic.toLowerCase())
      }
    }

    this.getRepos().then((result) => {
      const repos = []
      for (const repo of result) {
        if (repo.private || repo.disabled || repo.archived) {
          continue
        }

        if (this.containsTopics) {
          const keep = repo.topics.some(r => this.topics.includes(r.toLowerCase()))
          if (!keep) {
            continue
          }
        }

        if (this.notContainsTopics) {
          const keep = repo.topics.some(r => !this.notTopics.includes(r.toLowerCase()))
          if (!keep) {
            continue
          }
        }

        if (this.language) {
          if (!repo.language || this.language.toLowerCase() !== repo.language.toLowerCase()) {
            continue
          }
        }

        repos.push(repo)
      }
      this.repos = repos
      console.log(repos)
    })
  }
}
</script>

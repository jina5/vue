<template>
  <div class="article-list">
    <h3>Article List</h3>
    <ArticlelistItem
      v-for="article in articles"
      :key ="article.id"
      :article="article"
      />
  </div>
</template>

<script>
import ArticlelistItem from '@/components/ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    ArticlelistItem,
  },
  computed: {
    articles(){
      return this.$store.state.articles
    },
  }
}
</script>

<style>
.article-list {
  text-align: start;
}
</style>

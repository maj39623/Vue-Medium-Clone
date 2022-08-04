<template>
  <div class="home-page">
    <mcv-banner></mcv-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed-togger :tag-name="tagName"></mcv-feed-togger>
          <mcv-feed :api-url="apiUrl"></mcv-feed>
        </div>
        <div class="col-md-3">
          <mcv-popular-tags></mcv-popular-tags>
          ==={{ tagName }}===
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from "@/components/Feed.vue";
import McvPopularTags from "@/components/PopularTags.vue";
import McvBanner from "@/components/Banner.vue";
import McvFeedTogger from "@/components/FeedToggler";

export default {
  name: "McvYourFeed",
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
    McvFeedTogger,
  },
  computed: {
    tagName() {
      return this.$route.params.slug;
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`;
    },
  },
  //   data() {
  //     return {
  //       apiUrl: "/articles/feed",
  //     };
  //   },
};
</script>

<style></style>

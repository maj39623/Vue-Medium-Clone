<template>
  <div class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed></mcv-feed>
        </div>
        <div class="col-md-3">POPULAR TAGS</div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from "@/components/Feed.vue";

export default {
  name: "McvGlobalFeed",
  components: {
    McvFeed,
  },
};
</script>

<style></style>

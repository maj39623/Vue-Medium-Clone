<template>
  <div>
    <mcv-loading v-if="isLoading"></mcv-loading>
    <mcv-error-message v-if="error"></mcv-error-message>

    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{ name: 'tag', params: { slug: popularTag } }"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/popularTags";
import { mapState } from "vuex";
import McvLoading from "@/components/Loading.vue";
import McvErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "McvPopularTags",
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      popularTags: (state) => state.popularTags.data,
      error: (state) => state.popularTags.error,
    }),
  },
  components: {
    McvLoading,
    McvErrorMessage,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
};
</script>

<style></style>

<template>
  <div>
    Create Article
    <mcv-article-form
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></mcv-article-form>
  </div>
</template>

<script>
import McvArticleForm from "@/components/ArticleForm.vue";

export default {
  name: "McvCreateArticle",
  components: {
    McvArticleForm,
  },
  data() {
    return {
      initialValues: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      validationErrors: null,
      isSubmitting: false,
    };
  },
  methods: {
    onSubmit(data) {
      console.log("onSubmit", data);
    },
  },
};
</script>

<style></style>

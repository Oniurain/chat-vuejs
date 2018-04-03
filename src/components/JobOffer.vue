<template>
  <article>
    <div class="content">
  {{jobOffer}}
  <div v-html="jobOffer.job_description"></div>
  </div>
  <Form></Form>
  </article>
</template>

<script>
import axios from "axios";
import Form from "../components/Form";

export default {
  name: "JobOffer",
  data() {
    return {
      jobOffer: null
    };
  },
  components: {
    Form
  },
  created() {
    axios
      .get(
        "api/3d8226556e67a16802ffe4c6fefbf41e7dcb9cdb/jobs/" +
          this.$route.params.id +
          ".json"
      )
      .then(response => {
        this.jobOffer = response.data;
      });
  }
};
</script>

<style scoped>
article {
  clear: both;
  width: 100%;
  float: left;
  position: relative;
}

.content {
  text-align: justify;
  font-size: 1.15em;
  line-height: 1.7em;
  max-width: 800px;
  margin: 0 auto;
  overflow: visible;
}
</style>

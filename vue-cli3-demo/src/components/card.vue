<template>
  <div class="about">
    <!-- See original: https://tachyons.io/components/article-lists/title-preview-author-media/index.html -->
    <section class="mw7 mx-auto avenir">
      <article class="border-top border-bottom">
        <div class="d-block py-4 px-3 px-lg-0 text-dark dim no-underline"></div>
        <div class="row">
          <div class="pr-sm-3 mb-4 mb-sm-0 col-sm-5">
            <img :src="article.cover" />
            <div class="pl-sm-3 col-sm-7">
              <h1 class="h4 h-auto baskerville mt-0">
                {{ article.title }}
              </h1>
              <p>
                {{ article.desc }}
              </p>
              <p class="my-0">By Robin Darnell</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: ["article"],
};
</script>
<style  scoped>
.avenir {
  font-family: "avenir next", avenir, sans-serif;
  display: flex;
}

.mw7 {
  max-width: 48rem;
}

a.no-underline {
  text-decoration: none;
}

.dim {
  opacity: 1;
  transition: opacity 0.15s ease-in;
}

.dim:hover,
.dim:focus {
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
}

.dim:active {
  opacity: 0.8;
  transition: opacity 0.15s ease-out;
}
</style>

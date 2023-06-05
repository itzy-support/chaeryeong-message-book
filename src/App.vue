<template>
  <VApp id="messagebook">
    <VAppBar>
      <VAppBarNavIcon @click="drawer = !drawer" />

      <VToolbarTitle>💟 밤하늘의 별에게</VToolbarTitle>

      <VResponsive max-width="108">
        <VTextField
          v-model="visiblePageNumber"
          type="number"
          variant="solo"
          :suffix="`/ ${MAX_PAGE}`"
          hide-details
          flat
        ></VTextField>
      </VResponsive>

      <VBtn
        icon
        color="red-darken-1"
        href="https://drive.google.com/file/d/1D_kvd9LuMeM1xTXivILjLd4jeq9mM9z5/view?usp=drive_link"
        target="_blank"
      >
        <VIcon icon="mdi-file-pdf-box"></VIcon>
      </VBtn>
    </VAppBar>

    <VNavigationDrawer v-model="drawer">
      <VList
        :items="index"
        item-value="page"
        @click:select="setPage($event)"
        color="primary"
      />
    </VNavigationDrawer>

    <VMain>
      <VCarousel
        v-model="currentPage"
        hide-delimiters
        show-arrows="hover"
        progress="primary"
        height="auto"
      >
        <VCarouselItem
          v-for="(_, index) in pages"
          max-height="93vh"
          :src="`./book/CHAERYEONG_MESSAGE_BOOK_${(index + 1)
            .toString()
            .padStart(3, 0)}.webp`"
        />
      </VCarousel>
    </VMain>
  </VApp>
</template>

<script setup>
import { ref, computed } from "vue";

const drawer = ref(false);
const currentPage = ref(0);
const MAX_PAGE = 132;

const visiblePageNumber = computed({
  get: () => {
    if (currentPage.value < 0) currentPage.value = 0;
    if (currentPage.value > MAX_PAGE - 1) currentPage.value = MAX_PAGE - 1;
    return currentPage.value + 1;
  },
  set: (newValue) => {
    currentPage.value = newValue - 1;
  },
});
const setPage = (index) => {
  currentPage.value = index.id - 1;
};

const pages = new Array(MAX_PAGE);

const index = [
  {
    title: "속표지",
    page: 1,
  },
  {
    title: "인터뷰 돌아보기",
    page: 5,
  },
  {
    title: "믿지 어워드",
    page: 21,
  },
  {
    title: "오늘도 좋은 하루",
    page: 47,
  },
  {
    title: "K-POP 월드컵",
    page: 55,
  },
  {
    title: "령채의 모먼트",
    page: 67,
  },
  {
    title: "22-23 채령 로드맵",
    page: 85,
  },
  {
    title: "100문 100답",
    page: 121,
  },
];
</script>

<style>
html * {
  font-family: "Pretendard", sans-serif;
}
</style>

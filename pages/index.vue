<template>
  <div class="w-full">
    <Html lang="en-US">
      <Head>
        <Title>Dbc News</Title>
        <Meta
          name="description"
          :content="`DBC News Tv the famous portal of Bangladesh`"
        />
      </Head>
    </Html>
    <XBreadcrumb
      leading="Articles"
      trialing="New Articles"
      :href="{ name: 'articles-create' }"
      breadcrumb="Articles / list"
    />

    <div
      class="flex flex-wrap items-center justify-between w-full p-2  sm:px-6 lg:px-8"
    >
      <div class="flex-grow mr-1">
        <XFilterationSearch />
      </div>
      <div class="flex flex-wrap">
        <XFilterationSelectUser />
        <XFilterationMoreFilter />
        <XFilterationRecordSorting />
      </div>
    </div>

    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div
          class="min-w-full overflow-hidden overflow-x-auto align-middle shadow  sm:rounded-lg"
        >
          <div class="pb-3">
            <div
              class="items-center justify-between p-2 mb-1 bg-white rounded-md  sm:px-6 lg:px-8 sm:py-3 lg:py-4 sm:flex group"
              v-for="(article, index) in articles.data"
              :key="article.id"
            >
              <div class="flex items-center space-x-1 sm:mr-6">
                <div class="w-4 my-2">{{ index + 1 }}</div>
                <div
                  class="flex-shrink-0 mb-4 sm:mb-0"
                  v-if="article.thumbnails"
                >
                  <img
                    class="w-16 h-16 text-gray-300 bg-white border border-gray-300 rounded-sm "
                    :src="article.thumbnails.thumb160x84"
                    alt="article"
                  />
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between w-full">
                <div class="w-full mb-2 md:mb-0 md:w-4/12">
                  <a href="#">
                    <h2
                      class="text-base font-medium leading-none text-gray-700"
                      style="
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                      "
                    >
                      {{ article.title }}
                    </h2>
                  </a>
                  <div class="flex items-center space-x-1">
                    <UserIcon class="w-4 h-4 text-sm text-gray-500" />
                    <div class="text-sm text-gray-500">
                      {{ article.user.name }}
                    </div>
                  </div>
                  <div class="flex items-center mt-1 space-x-1">
                    <ClockIcon class="w-4 h-4 text-sm text-gray-500" />
                    <div class="text-sm text-gray-500">
                      {{ article.formatted_date_time }}
                    </div>
                  </div>
                </div>

                <div
                  class="w-full mb-1 md:mb-0 md:w-4/12"
                  v-if="article.categories.length"
                >
                  <a
                    href="#"
                    class="inline-block px-1 mb-1 mr-1 text-gray-500 bg-white border border-gray-300 rounded "
                    v-for="category in article.categories"
                    :key="category.id"
                  >
                    {{ category.name }}
                  </a>
                </div>

                <div
                  class="transition-opacity duration-200 opacity-100  group-hover:opacity-100"
                >
                  <div class="flex items-center space-x-2">
                    <nuxt-link
                      :to="{
                        name: 'articles-edit-slug',
                        params: { slug: 'এক-বছরের-মধ্যে-চালু-হচ্ছে-পেনশন' },
                      }"
                      class="inline-flex items-center justify-center px-2 py-1 font-medium tracking-wider text-center text-blue-500 transition-all duration-300 ease-in-out bg-blue-200 border border-transparent rounded-md shadow-sm  text-bases focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-300 focus:ring-blue-400 hover:border-blue-400"
                      >Edit
                    </nuxt-link>
                    <XFormSmallButton
                      class="text-red-500 bg-red-200  hover:bg-red-300 focus:ring-red-400 hover:border-red-400"
                    >
                      Delete
                    </XFormSmallButton>
                    <nuxt-link
                      :to="{
                        name: 'articles-edit-slug',
                        params: { slug: 'এক-বছরের-মধ্যে-চালু-হচ্ছে-পেনশন' },
                      }"
                      class="inline-flex items-center justify-center px-2 py-1 font-medium tracking-wider text-center text-green-500 transition-all duration-300 ease-in-out bg-green-200 border border-transparent rounded-md shadow-sm  text-bases focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-green-300 focus:ring-green-400 hover:border-green-400"
                      >View
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <XArticlePaginate />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClockIcon, UserIcon, ChevronDownIcon } from "@heroicons/vue/outline";

export default {
  components: {
    UserIcon,
    ClockIcon,
    ChevronDownIcon,
  },
  setup() {},
};
</script>

<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  $fetch(`http://admin.test/admin/articles`)
);
</script>

<template>
  <div class="w-full">
    <XBreadcrumb
      leading="Articles"
      trialing="New Articles"
      :href="{ name: 'articles-create' }"
      breadcrumb="Articles / list"
    />

    <div
      class="
        flex flex-wrap
        items-center
        justify-between
        w-full
        p-2
        bg-gray-100
        border-b
        sm:px-6
        lg:px-8
        sm:py-3
        lg:py-4
      "
    >
      <div class="flex-grow mr-1">
        <div class="flex mt-1">
          <div class="relative flex items-stretch flex-grow focus-within:z-10">
            <XFormInput type="search" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <select
          id="user"
          name="user"
          class="
            py-2
            pl-3
            pr-10
            mt-1
            text-base
            border-gray-300
            rounded-l-md
            focus:outline-none
            sm:text-sm
            focus:ring-0 focus:border-gray-300
          "
        >
          <option value="">Select User</option>
          <option value="1">Super Admin</option>
          <option value="2">User</option>
        </select>

        <div class="relative inline-block mt-1 text-left">
          <XMoreFilter />
        </div>

        <select
          id="per-page"
          name="per-page"
          class="
            py-2
            pl-3
            pr-10
            mt-1
            text-base
            border-gray-300
            rounded-r-md
            focus:outline-none
            sm:text-sm
            focus:ring-0 focus:border-gray-300
          "
        >
          <option value="">Short</option>
          <option value="delete">Product title A–Z</option>
          <option value="delete">Product title Z–A</option>
          <option value="delete">Created (oldest first)</option>
          <option value="delete">Updated (oldest first)</option>
        </select>
      </div>
    </div>

    <div class="mt-8">
      <div class="">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex flex-col mt-2">
            <div
              class="
                min-w-full
                overflow-hidden overflow-x-auto
                align-middle
                shadow
                sm:rounded-lg
              "
            >
              <div class="py-4 bg-white divide-y divide-gray-200">
                <div
                  class="
                    justify-between
                    p-2
                    sm:px-6
                    lg:px-8
                    sm:py-3
                    lg:py-4
                    sm:flex
                    group
                  "
                  v-for="n in 10"
                  :key="n"
                >
                  <div class="flex items-center space-x-1 sm:mr-6">
                    <div class="w-4 my-2">11</div>
                    <div class="flex-shrink-0 mb-4 sm:mb-0">
                      <img
                        class="
                          w-16
                          h-16
                          text-gray-300
                          bg-white
                          border border-gray-300
                          rounded-sm
                        "
                        src="http://metro.test/storage/1/blob"
                        alt="article"
                      />
                    </div>
                  </div>

                  <div
                    class="flex flex-wrap items-center justify-between w-full"
                  >
                    <div class="w-full mb-2 md:w-4/12">
                      <a href="#">
                        <h2
                          class="
                            text-base
                            font-medium
                            leading-none
                            text-gray-700
                          "
                          style="
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                          "
                        >
                          পার্বত্য চট্টগ্রামে পরিত্যক্ত সেনাক্যাম্পে পুলিশ
                          থাকবে: স্বরাষ্ট্রমন্ত্রী 11
                        </h2>
                      </a>
                      <div class="flex items-center space-x-1">
                        <UserIcon class="w-4 h-4 text-sm text-gray-500" />
                        <div class="text-sm text-gray-500">Shakil</div>
                      </div>
                      <div class="flex items-center mt-1 space-x-1">
                        <ClockIcon class="w-4 h-4 text-sm text-gray-500" />
                        <div class="text-sm text-gray-500">
                          Mon, Jan 17, 2022 5:36 PM
                        </div>
                      </div>
                    </div>

                    <div class="w-full mb-1 md:w-4/12">
                      <a
                        href="#"
                        class="
                          inline-block
                          px-1
                          mb-1
                          mr-1
                          text-gray-500
                          bg-white
                          border border-gray-300
                          rounded
                        "
                      >
                        Books Literature
                      </a>
                    </div>

                    <div
                      class="
                        transition-opacity
                        duration-200
                        opacity-100
                        md:opacity-0
                        group-hover:opacity-100
                      "
                    >
                      <div class="flex items-center space-x-2">
                        <a
                          href="#"
                          class="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-1
                            font-medium
                            tracking-wider
                            text-center text-white
                            bg-blue-600
                            border border-transparent
                            rounded-md
                            shadow-sm
                            text-bases
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            hover:bg-blue-700
                            focus:ring-blue-500
                          "
                          >Edit</a
                        >
                        <XFormSmallButton
                          class="
                            text-white
                            bg-red-600
                            hover:bg-red-700
                            focus:ring-red-500
                          "
                        >
                          Delete
                        </XFormSmallButton>
                        <XFormSmallButton
                          class="
                            text-white
                            bg-green-600
                            hover:bg-green-700
                            focus:ring-green-500
                          "
                        >
                          View
                        </XFormSmallButton>
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
  setup() {
    return {};
  },
};
</script>

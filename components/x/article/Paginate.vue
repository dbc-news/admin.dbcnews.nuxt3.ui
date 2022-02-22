<template>
  <div class="px-2 sm:px-4 lg:px-8">
    <div class="mt-2 pagination">
      <div>
        <nav
          role="navigation"
          aria-label="Pagination Navigation"
          class="flex items-center justify-between"
        >
          <div class="flex justify-between flex-1 sm:hidden">
            <span>
              <span
                class="
                  relative
                  inline-flex
                  items-center
                  px-4
                  py-2
                  text-sm
                  font-medium
                  leading-5
                  text-gray-500
                  bg-white
                  border border-gray-300
                  rounded-md
                  cursor-default
                "
              >
                « Previous
              </span>
            </span>

            <span>
              <button
                dusk="nextPage.before"
                class="
                  relative
                  inline-flex
                  items-center
                  px-4
                  py-2
                  ml-3
                  text-sm
                  font-medium
                  leading-5
                  text-gray-700
                  transition
                  duration-150
                  ease-in-out
                  bg-white
                  border border-gray-300
                  rounded-md
                  hover:text-gray-500
                  focus:outline-none
                  focus:shadow-outline-blue
                  focus:border-blue-300
                  active:bg-gray-100 active:text-gray-700
                "
              >
                Next »
              </button>
            </span>
          </div>

          <div
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm leading-5 text-gray-700">
                <span> Showing </span>
                <span class="font-medium"> 1 </span>
                <span> to </span>
                <span class="font-medium"> 20 </span>
                <span> of </span>
                <span class="font-medium"> 82 </span>
                <span> results </span>
              </p>
            </div>

            <div>
              <span class="relative z-0 inline-flex rounded-md shadow-sm">
                <span>
                  <span aria-disabled="true" aria-label="&amp;laquo; Previous">
                    <span
                      class="
                        relative
                        inline-flex
                        items-center
                        px-2
                        py-2
                        text-sm
                        font-medium
                        leading-5
                        text-gray-500
                        bg-white
                        border border-gray-300
                        cursor-default
                        rounded-l-md
                      "
                      aria-hidden="true"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </span>

                <span wire:key="paginator-page-1-page1">
                  <span aria-current="page">
                    <span
                      class="
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-2
                        -ml-px
                        text-sm
                        font-medium
                        leading-5
                        text-gray-500
                        bg-white
                        border border-gray-300
                        cursor-default
                      "
                      >1</span
                    >
                  </span>
                </span>
                <span wire:key="paginator-page-1-page2">
                  <button
                    wire:click="gotoPage(2, 'page')"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      -ml-px
                      text-sm
                      font-medium
                      leading-5
                      text-gray-700
                      transition
                      duration-150
                      ease-in-out
                      bg-white
                      border border-gray-300
                      hover:text-gray-500
                      focus:z-10
                      focus:outline-none
                      focus:border-blue-300
                      focus:shadow-outline-blue
                      active:bg-gray-100 active:text-gray-700
                    "
                    aria-label="Go to page 2"
                  >
                    2
                  </button>
                </span>
                <span wire:key="paginator-page-1-page3">
                  <button
                    wire:click="gotoPage(3, 'page')"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      -ml-px
                      text-sm
                      font-medium
                      leading-5
                      text-gray-700
                      transition
                      duration-150
                      ease-in-out
                      bg-white
                      border border-gray-300
                      hover:text-gray-500
                      focus:z-10
                      focus:outline-none
                      focus:border-blue-300
                      focus:shadow-outline-blue
                      active:bg-gray-100 active:text-gray-700
                    "
                    aria-label="Go to page 3"
                  >
                    3
                  </button>
                </span>
                <span wire:key="paginator-page-1-page4">
                  <button
                    wire:click="gotoPage(4, 'page')"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      -ml-px
                      text-sm
                      font-medium
                      leading-5
                      text-gray-700
                      transition
                      duration-150
                      ease-in-out
                      bg-white
                      border border-gray-300
                      hover:text-gray-500
                      focus:z-10
                      focus:outline-none
                      focus:border-blue-300
                      focus:shadow-outline-blue
                      active:bg-gray-100 active:text-gray-700
                    "
                    aria-label="Go to page 4"
                  >
                    4
                  </button>
                </span>
                <span wire:key="paginator-page-1-page5">
                  <button
                    wire:click="gotoPage(5, 'page')"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      -ml-px
                      text-sm
                      font-medium
                      leading-5
                      text-gray-700
                      transition
                      duration-150
                      ease-in-out
                      bg-white
                      border border-gray-300
                      hover:text-gray-500
                      focus:z-10
                      focus:outline-none
                      focus:border-blue-300
                      focus:shadow-outline-blue
                      active:bg-gray-100 active:text-gray-700
                    "
                    aria-label="Go to page 5"
                  >
                    5
                  </button>
                </span>

                <span>
                  <button
                    wire:click="nextPage('page')"
                    dusk="nextPage.after"
                    rel="next"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-2
                      py-2
                      -ml-px
                      text-sm
                      font-medium
                      leading-5
                      text-gray-500
                      transition
                      duration-150
                      ease-in-out
                      bg-white
                      border border-gray-300
                      rounded-r-md
                      hover:text-gray-400
                      focus:z-10
                      focus:outline-none
                      focus:border-blue-300
                      focus:shadow-outline-blue
                      active:bg-gray-100 active:text-gray-500
                    "
                    aria-label="Next &amp;raquo;"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
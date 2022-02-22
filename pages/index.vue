<template>
  <div class="w-full">
    <XBreadcrumb
      leading="Articles"
      trialing="New Articles"
      :href="{ name: 'articles-create' }"
      breadcrumb="Articles / list"
    />

    <div class="mt-8">
      <div class="shadow sm:hidden">
        <ul
          role="list"
          class="mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden"
        >
          <li v-for="transaction in transactions" :key="transaction.id">
            <a
              :href="transaction.href"
              class="block px-4 py-4 bg-white hover:bg-gray-50"
            >
              <span class="flex items-center space-x-4">
                <span class="flex flex-1 space-x-2 truncate">
                  <CashIcon
                    class="flex-shrink-0 w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="flex flex-col text-sm text-gray-500 truncate">
                    <span class="truncate">{{ transaction.name }}</span>
                    <span
                      ><span class="font-medium text-gray-900">{{
                        transaction.amount
                      }}</span>
                      {{ transaction.currency }}</span
                    >
                    <time :datetime="transaction.datetime">{{
                      transaction.date
                    }}</time>
                  </span>
                </span>
                <ChevronRightIcon
                  class="flex-shrink-0 w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        </ul>

        <nav
          class="
            flex
            items-center
            justify-between
            px-4
            py-3
            bg-white
            border-t border-gray-200
          "
          aria-label="Pagination"
        >
          <div class="flex justify-between flex-1">
            <a
              href="#"
              class="
                relative
                inline-flex
                items-center
                px-4
                py-2
                text-sm
                font-medium
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                hover:text-gray-500
              "
            >
              Previous
            </a>
            <a
              href="#"
              class="
                relative
                inline-flex
                items-center
                px-4
                py-2
                ml-3
                text-sm
                font-medium
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                hover:text-gray-500
              "
            >
              Next
            </a>
          </div>
        </nav>
      </div>

      <div class="hidden sm:block">
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
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        tracking-wider
                        text-left text-gray-500
                        uppercase
                        bg-gray-50
                      "
                    >
                      Transaction
                    </th>
                    <th
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        tracking-wider
                        text-right text-gray-500
                        uppercase
                        bg-gray-50
                      "
                    >
                      Amount
                    </th>
                    <th
                      class="
                        hidden
                        px-6
                        py-3
                        text-xs
                        font-medium
                        tracking-wider
                        text-left text-gray-500
                        uppercase
                        bg-gray-50
                        md:block
                      "
                    >
                      Status
                    </th>
                    <th
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        tracking-wider
                        text-right text-gray-500
                        uppercase
                        bg-gray-50
                      "
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="transaction in transactions"
                    :key="transaction.id"
                    class="bg-white hover:bg-gray-100 group"
                  >
                    <td
                      class="
                        w-full
                        px-6
                        py-4
                        text-sm text-gray-900
                        max-w-0
                        whitespace-nowrap
                      "
                    >
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
                          class="
                            flex flex-wrap
                            items-center
                            justify-between
                            w-full
                          "
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
                            <div class="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-4 h-4 mr-1 text-gray-500"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <div class="text-sm text-gray-500">User</div>
                            </div>
                            <div class="flex items-center mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="w-4 h-4 mr-1 text-gray-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <div class="text-sm text-gray-500">
                                Mon, Jan 17, 2022 5:36 PM
                              </div>
                            </div>
                          </div>

                          <div class="w-full md:w-4/12">
                            <a
                              href="#"
                              class="
                                inline-block
                                px-1
                                mr-1
                                text-gray-500
                                bg-white
                                border border-gray-300
                                rounded
                              "
                            >
                              Books Literature
                            </a>
                            <a
                              href="#"
                              class="
                                inline-block
                                px-1
                                mr-1
                                text-gray-500
                                bg-white
                                border border-gray-300
                                rounded
                              "
                            >
                              Miscellaneous
                            </a>
                          </div>

                          <div
                            class="
                              w-full
                              transition-opacity
                              duration-200
                              opacity-100
                              md:w-4/12
                              group-hover:opacity-100
                            "
                          >
                            <div class="flex items-center space-x-2">
                              <a
                                href="http://metro.test/admin/articles/11/edit"
                                class="
                                  inline-flex
                                  items-center
                                  justify-center
                                  px-2
                                  py-1
                                  text-sm
                                  tracking-widest
                                  text-white
                                  uppercase
                                  transition
                                  bg-blue-600
                                  border border-transparent
                                  rounded-md
                                  hover:bg-blue-500
                                  focus:outline-none
                                  focus:border-blue-700
                                  focus:ring
                                  focus:ring-blue-200
                                  active:bg-blue-600
                                  disabled:opacity-25
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
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        text-sm text-right text-gray-500
                        whitespace-nowrap
                      "
                    >
                      dkfldk
                    </td>
                    <td
                      class="
                        hidden
                        px-6
                        py-4
                        text-sm text-gray-500
                        whitespace-nowrap
                        md:block
                      "
                    >
                      <span
                        :class="[
                          statusStyles[transaction.status],
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
                        ]"
                      >
                        {{ transaction.status }}
                      </span>
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        text-sm text-right text-gray-500
                        whitespace-nowrap
                      "
                    >
                      <time :datetime="transaction.datetime">{{
                        transaction.date
                      }}</time>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav
                class="
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  bg-white
                  border-t border-gray-200
                  sm:px-6
                "
                aria-label="Pagination"
              >
                <div class="hidden sm:block">
                  <p class="text-sm text-gray-700">
                    Showing
                    {{ " " }}
                    <span class="font-medium">1</span>
                    {{ " " }}
                    to
                    {{ " " }}
                    <span class="font-medium">10</span>
                    {{ " " }}
                    of
                    {{ " " }}
                    <span class="font-medium">20</span>
                    {{ " " }}
                    results
                  </p>
                </div>
                <div class="flex justify-between flex-1 sm:justify-end">
                  <a
                    href="#"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      bg-white
                      border border-gray-300
                      rounded-md
                      hover:bg-gray-50
                    "
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    class="
                      relative
                      inline-flex
                      items-center
                      px-4
                      py-2
                      ml-3
                      text-sm
                      font-medium
                      text-gray-700
                      bg-white
                      border border-gray-300
                      rounded-md
                      hover:bg-gray-50
                    "
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/vue/solid";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "History", href: "#", icon: ClockIcon, current: false },
  { name: "Balances", href: "#", icon: ScaleIcon, current: false },
  { name: "Cards", href: "#", icon: CreditCardIcon, current: false },
  { name: "Recipients", href: "#", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "#", icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: "Settings", href: "#", icon: CogIcon },
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MenuAlt1Icon,
    OfficeBuildingIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      navigation,
      secondaryNavigation,
      cards,
      transactions,
      statusStyles,
      sidebarOpen,
    };
  },
};
</script>

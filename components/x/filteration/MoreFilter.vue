<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative inline-block mt-1 text-left">
    <Listbox as="div" v-model="selected">
      <div class="relative">
        <ListboxButton
          class="relative w-full py-2 pl-3 pr-10 text-base text-left bg-white border border-gray-300 shadow-sm cursor-default  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <div class="flex items-center">
            <!-- <span
            :aria-label="selected.online ? 'Online' : 'Offline'"
            :class="[
              selected.online ? 'bg-green-400' : 'bg-gray-200',
              'flex-shrink-0 inline-block h-2 w-2 rounded-full',
            ]"
          />
          <span class="block ml-3 truncate">{{ selected.name }}</span> -->
            <span class="bg-green-400' : 'bg-gray-200" />
            <span class="block ml-3 truncate">More Filter</span>
          </div>
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
          >
            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  w-60 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="n in 10"
              :key="n"
              :value="n"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'text-white bg-indigo-600' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-3 pr-9',
                ]"
              >
                <div class="flex items-center">
                  <span
                    :class="[
                      n.online ? 'bg-green-400' : 'bg-gray-200',
                      'flex-shrink-0 inline-block h-2 w-2 rounded-full',
                    ]"
                    aria-hidden="true"
                  />
                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'ml-3 block ',
                    ]"
                  >
                    {{ "name of the filter" }}
                    <span class="sr-only">
                      is {{ true ? "online" : "offline" }}</span
                    >
                  </span>
                </div>

                <span
                  v-if="selected"
                  :class="[
                    active ? 'text-white' : 'text-indigo-600',
                    'absolute inset-y-0 right-0 flex items-center pr-4',
                  ]"
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    // const selected = ref(people[3]);
    const selected = ref(null);

    return {
      selected,
    };
  },
};
</script>
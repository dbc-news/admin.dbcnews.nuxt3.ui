<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" v-model="selected">
    <div class="relative">
      <ListboxButton
        class="
          relative
          w-full
          py-2
          pl-3
          pr-10
          text-base text-left
          bg-white
          border border-gray-300
          shadow-sm
          cursor-default
          focus:outline-none
          focus:ring-1
          focus:ring-indigo-500
          focus:border-indigo-500
          sm:text-sm
        "
      >
        <div class="flex items-center">
          <span
            :aria-label="selected.online ? 'Online' : 'Offline'"
            :class="[
              selected.online ? 'bg-green-400' : 'bg-gray-200',
              'flex-shrink-0 inline-block h-2 w-2 rounded-full',
            ]"
          />
          <span class="block ml-3 truncate">{{ selected.name }}</span>
        </div>
        <span
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
          "
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
          class="
            absolute
            z-10
            w-full
            py-1
            mt-1
            overflow-auto
            text-base
            bg-white
            rounded-md
            shadow-lg
            max-h-60
            ring-1 ring-black ring-opacity-5
            focus:outline-none
            sm:text-sm
          "
        >
          <ListboxOption
            as="template"
            v-for="person in people"
            :key="person.id"
            :value="person"
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
                    person.online ? 'bg-green-400' : 'bg-gray-200',
                    'flex-shrink-0 inline-block h-2 w-2 rounded-full',
                  ]"
                  aria-hidden="true"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                >
                  {{ person.name }}
                  <span class="sr-only">
                    is {{ person.online ? "online" : "offline" }}</span
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

const people = [
  { id: 1, name: "Wade Cooper", online: true },
  { id: 2, name: "Arlene Mccoy", online: false },
  { id: 3, name: "Devon Webb", online: false },
  { id: 4, name: "Tom Cook", online: true },
  { id: 5, name: "Tanya Fox", online: false },
  { id: 6, name: "Hellen Schmidt", online: true },
  { id: 7, name: "Caroline Schultz", online: true },
  { id: 8, name: "Mason Heaney", online: false },
  { id: 9, name: "Claudie Smitham", online: true },
  { id: 10, name: "Emil Schaefer", online: false },
];

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
    const selected = ref(people[3]);

    return {
      people,
      selected,
    };
  },
};
</script>
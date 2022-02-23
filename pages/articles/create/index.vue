<template>
  <div class="">
    <XBreadcrumb
      leading="Articles"
      trialing="Articles"
      :href="{ name: 'index' }"
      breadcrumb="Articles / Create"
    />
    <form action="">
      <div class="grid grid-cols-12 gap-6 px-2 mt-8 sm:px-4 lg:px-8">
        <div class="col-span-12 2md:col-span-8">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Title</XFormLabel>
                <XFormInput placeholder="Title" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Kicker</XFormLabel>
                <XFormInput placeholder="Kicker" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Author</XFormLabel>
                <XFormInput placeholder="Author" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Video (Optional)</XFormLabel>
                <XFormInput placeholder="Embaded Video URL" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-full">
                <XFormLabel>Teaser</XFormLabel>
                <XFormTextArea rows="5" placeholder="Teaser" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <XFormLabel>Content</XFormLabel>
              <XFormTextArea rows="10" placeholder="Content" />
              <XFormInputError>The title field is required</XFormInputError>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <XFormLabel>Categories</XFormLabel>

                  <div
                    class="flex flex-wrap p-2 my-3 border rounded-md"
                    v-for="n in 10"
                    :key="n"
                  >
                    <div class="flex items-center">
                      <XFormCheckbox boxName="cat" boxId="cat" />
                      <label
                        class="font-semibold text-blue-600 cursor-pointer"
                        for="cat"
                      >
                        cagegory name
                      </label>
                    </div>

                    <div class="flex items-center" v-for="m in 10" :key="m">
                      <XFormCheckbox :boxName="n" :boxId="n" />
                      <label class="cursor-pointer" for="cat">
                        Child name
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <XFormLabel>Topics</XFormLabel>
                  <div class="flex flex-wrap p-1">
                    <div
                      class="relative flex items-start"
                      v-for="n in 10"
                      :key="n"
                    >
                      <div class="flex items-center">
                        <XFormCheckbox boxName="topic" boxId="topic" />
                        <label class="cursor-pointer" for="topic">
                          Topic name
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- aside  -->
        <div class="col-span-12 2md:col-span-4">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <XFormLabel>Status</XFormLabel>
              <XFormSelect>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </XFormSelect>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <XFormLabel>Make Aeticle</XFormLabel>
                  <div class="flex flex-wrap p-1 -pl-2">
                    <div class="relative flex items-start mt-2">
                      <div class="flex items-center">
                        <XFormCheckbox boxName="pinned" boxId="pinned" />
                        <label class="cursor-pointer" for="pinned">
                          Pinned
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-1">
                  <img src="" alt="img" class="" />
                  <button class="mt-3 text-blue-600 underline"></button>
                  <div
                    class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md "
                  >
                    <div class="space-y-1 text-center">
                      <img src="@/assets/icons/image.svg" alt="svg" />
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer  hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full px-2 py-4">
                  <XFormLabel>Thumbnail:</XFormLabel>
                  <XFormInput placeholder="Thumbnail URL" type="text" />
                  <XFormInputError>The title field is required</XFormInputError>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <XFormLabel>Tags</XFormLabel>
              <XFormSelect>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </XFormSelect>
            </div>
            <div class="w-full px-2 py-4">
              <XFormLabel>Area</XFormLabel>
              <XFormSelect>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </XFormSelect>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 px-2 sm:px-4 lg:px-8">
        <XFormButton
          type="button"
          class="w-full text-white  bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500"
          >Submit</XFormButton
        >
      </div>
    </form>
  </div>
</template>
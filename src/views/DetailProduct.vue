<template>
  <div class="detail-product">
    <section id="detail-product" class="bg-white pb-4">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/6 px-2 flex justify-center">
            <div
              class="image-detail"
              id="image-detail"
              @mouseover="detailImage()"
              :style="{
                backgroundImage: 'url(' + require('@/assets/catalog/' + product.id + '.jpg') + ')'
              }"
            ></div>
          </div>
          <div class="w-full md:w-4/6 px-2">
            <div class="md:pl-8 md:pt-8 pl-0 pt-4">
              <h1 class="text-3xl font-rowdies">
                {{ product.name }}
              </h1>
              <div class="flex items-center">
                <star-rating
                  class="pb-6px pr-4"
                  active-color="#000"
                  :rating="product.star"
                  :show-rating="false"
                  :read-only="true"
                  :star-size="20"
                  :inline="true"
                />
                <span>{{ product.review }} reviews</span>
              </div>

              <vs-divider class="sm:pt-6 pt-4" />

              <div class="flex flex-wrap justify-between">
                <div class="w-full sm:w-1/2 pb-2">
                  <h1 class="text-3xl">IDR {{ product.price | formatPrice }}</h1>
                </div>
                <div class="w-full sm:w-1/2 pb-2">
                  <vs-select placeholder="Select Model" v-model="model">
                    <vs-option label="Xtra L" value="Xtra L">Xtra L</vs-option>
                    <vs-option value="Large" label="Large">Large</vs-option>
                    <vs-option value="Medium" label="Medium">Medium</vs-option>
                    <vs-option value="Small" label="Small">Small</vs-option>
                    <vs-option value="Xtra S" label="Xtra S">Xtra S</vs-option>
                  </vs-select>
                </div>
              </div>

              <vs-divider />

              <div class="flex flex-wrap">
                <div class="w-full sm:w-1/2 pb-2">
                  <h5>Jumlah</h5>
                </div>
                <div class="w-full sm:w-1/6 pb-2">
                  <div class="vs-input-number vs-input-number-size-null vs-input-number-primary">
                    <button
                      type="button"
                      @click="decrement"
                      class="btn-less vs-input-number--button-less"
                    >
                      <i class="feather icon-minus"></i>
                    </button>
                    <input
                      min="0"
                      v-model.number="value"
                      type="number"
                      class="vs-input-number--input"
                      style="width: 20px;"
                    />
                    <button
                      type="button"
                      @click="increment"
                      class="btn-plus vs-input-number--button-plus"
                    >
                      <i class="feather icon-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <vs-divider />

              <p>{{ product.desc }}</p>

              <vs-divider class="sm:py-6 py-4" />

              <vs-button dark class="px-4" :disabled="model === ''">
                Add To Cart
              </vs-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="similiar-product" class="pt-10 py-6">
      <h1 class="font-rowdies text-4xl text-center mb-4">
        Similiar Products
      </h1>
      <div class="flex flex-wrap justify-center">
        <div v-for="(sprod, index) in similiarProduct" :key="index" class="w-full md:w-1/4 p-2">
          <div class="img-catalog">
            <img
              v-if="similiarProduct.length !== 0"
              :src="require(`@/assets/catalog/${sprod.id}.jpg`)"
            />
            <div class="hover-catalog">
              <div class="desc">
                <p class="mt-2">
                  {{ sprod.name }}
                </p>
                <p>IDR {{ sprod.price | formatPrice }}</p>
              </div>
              <vs-button
                border
                color="#dae1e7"
                class="rounded-lg"
                @click="$router.push(`/shop/detail/${sprod.id}`)"
              >
                Detail
              </vs-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';
import data from '../dataFake/products';

export default {
  name: 'DetailProduct',
  data: () => ({
    model: '',
    models: [
      { value: 'XL', label: 'XL' },
      { value: 'L', label: 'L' },
      { value: 'M', label: 'M' },
      { value: 'S', label: 'S' },
      { value: 'XS', label: 'XS' },
    ],
    value: 0,
  }),
  computed: {
    product() {
      const products = data;
      const item = _.find(products, { id: Number(this.$route.params.id) });
      return item;
    },
    similiarProduct() {
      const products = data;
      const similiarProd = _.filter(products, (prd) => prd.review > 100);

      return similiarProd;
    },
  },
  methods: {
    increment() {
      this.value += 1;
    },
    decrement() {
      if (Number(this.value) > 0) {
        this.value -= 1;
      }
    },
    detailImage() {
      const zoomBoxes = document.querySelectorAll('#image-detail');

      zoomBoxes.forEach((image) => {
        const imageCss = window.getComputedStyle(image, false);
        const imageUrl = imageCss.backgroundImage
          .slice(4, -1).replace(/['"]/g, '');
        // Get the original source image
        const imageSrc = new Image();
        imageSrc.onload = () => {
          const images = image;
          const imageWidth = imageSrc.naturalWidth;
          const imageHeight = imageSrc.naturalHeight;
          const ratio = imageHeight / imageWidth;

          // Adjust the box to fit the image and to adapt responsively
          const percentage = `${ratio * 100}%`;
          images.style.paddingBottom = percentage;

          // Zoom and scan on mousemove
          images.onmousemove = (e) => {
            // Get the width of the thumbnail
            const boxWidth = images.clientWidth;
            // Get the cursor position, minus element offset
            const x = e.pageX - images.offsetLeft;
            const y = e.pageY - images.offsetTop;
            // Convert coordinates to % of elem. width & height
            const xPercent = `${x / (boxWidth / 100)}%`;
            // eslint-disable-next-line no-mixed-operators
            const yPercent = `${y / (boxWidth * ratio / 100)}%`;

            // Update styles w/actual size
            Object.assign(images.style, {
              backgroundPosition: `${xPercent} ${yPercent}`,
              backgroundSize: `${imageWidth * 2}px`,
            });
          };

          // Reset when mouse leaves
          images.onmouseleave = () => {
            Object.assign(images.style, {
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            });
          };
        };
        imageSrc.src = imageUrl;
      });
    },
  },
};
</script>

<style scoped></style>

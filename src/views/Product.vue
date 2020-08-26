<template>
  <div class="container py-4">
    <h1 class="text-4xl font-rowdies mb-4">
      All Product
    </h1>
    <div class="flex flex-wrap">
      <div v-for="(product,index) in products" :key="index" class="w-full md:w-1/4 sm:w-2/4 p-2">
        <div class="img-catalog">
          <img :src="require(`@/assets/catalog/${product.id}.jpg`)">
          <div class="hover-catalog">
            <vs-button
                border
                color="#dae1e7"
                class="rounded-lg"
                @click="$router.push(`/shop/detail/${product.id}`)"
            >
              Detail
            </vs-button>
          </div>
        </div>
        <div class="catalog-desc">
          <p class="mt-2">
            {{ product.name }}
          </p>
          <p>IDR {{ product.price | formatPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../dataFake/products';

export default {
  name: 'Product',
  data: () => ({
    products: [],
  }),
  created() {
    this.products = data;
  },
};
</script>

<template>
  <div class="container py-4">
    <h1 class="py-4">Add Product</h1>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Product Upload</h3>
        <p>Image format .jpg .jpeg .png,
          maximum 1 mb,
          and minimum image size 300 x 300px (For optimum image, use minimum size 700 x 700 px)</p>
      </template>
      <template #text>
        <div class="flex flex-wrap mt-6">
          <div class="w-full md:w-1/5 p-2">
            <vue-dropzone ref="uploadImage"
                          id="dropzone"
                          :options="dropzoneOptions">
            </vue-dropzone>
          </div>
          <div class="w-full md:w-1/5 p-2">
            <vue-dropzone ref="uploadImage1"
                          id="dropzone1"
                          :options="dropzoneOptions">
            </vue-dropzone>
          </div>
          <div class="w-full md:w-1/5 p-2">
            <vue-dropzone ref="uploadImage2"
                          id="dropzone2"
                          :options="dropzoneOptions">
            </vue-dropzone>
          </div>
          <div class="w-full md:w-1/5 p-2">
            <vue-dropzone ref="uploadImag3"
                          id="dropzone3"
                          :options="dropzoneOptions">
            </vue-dropzone>
          </div>
          <div class="w-full md:w-1/5 p-2">
            <vue-dropzone ref="uploadImag4"
                          id="dropzone4"
                          :options="dropzoneOptions">
            </vue-dropzone>
          </div>
        </div>
      </template>
    </vs-card>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Product Info</h3>
      </template>
      <template #text>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Product Name</h6>
          </div>
          <div class="w-full md:w-3/4">
            <vs-input v-model="productName"
                      placeholder="Example: Men’s Shoes (Product Type/Category) +
                      Tokostore (Brand) + Black Canvas (Description)"></vs-input>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Category</h6>
          </div>
          <div class="w-full md:w-3/4">
            <vs-select v-model="category" placeholder="Choose Category" filter>
              <vs-option v-for="(cat,index) in categories" :key="index"
                         :label="cat.label" :value="cat.value"
              >
                {{ cat.label }}
              </vs-option>
            </vs-select>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Showcase</h6>
          </div>
          <div class="w-full md:w-3/4">
            <vs-input v-model="showcase" placeholder="Enter Showcase Name"></vs-input>
          </div>
        </div>
      </template>
    </vs-card>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Product Description</h3>
      </template>
      <template #text>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Condition</h6>
          </div>
          <div class="w-full md:w-3/4">
            <div class="flex">
              <vs-radio v-model="condition" val="new" class="mr-6">
                New
              </vs-radio>
              <vs-radio v-model="condition" val="used">
                Used
              </vs-radio>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Product Description</h6>
          </div>
          <div class="w-full md:w-3/4">
            <vs-textarea v-model="productDesc"
                         :counter="2000"
                         :label="labelProdDesc" rows="15"></vs-textarea>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Product Video</h6>
          </div>
          <div class="w-full md:w-3/4">
            <vs-input v-model="productVideo" placeholder="Insert a URL Video"></vs-input>
          </div>
        </div>
      </template>
    </vs-card>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Product Variant</h3>
      </template>
      <template #text>
        <div class="flex flex-wrap justify-between">
          <p class="mb-2">Add product variant such as color, size or others.</p>
          <vs-button flat dark>
            <i class="feather icon-plus"></i> Add Product Variant
          </vs-button>
        </div>
      </template>
    </vs-card>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Price</h3>
      </template>
      <template #text>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Minimum Order</h6>
          </div>
          <div class="w-full md:w-2/5">
            <vs-input type="number" min="1" v-model.number="minOrder"></vs-input>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Price</h6>
          </div>
          <div class="w-full md:w-2/5">
            <div class="flex">
              <p class="inline-block mr-6">Rp</p>
              <vs-input v-model.number="price" type="number" class="w-full"></vs-input>
            </div>
          </div>
        </div>
      </template>
    </vs-card>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Product Management</h3>
      </template>
      <template #text>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Product Status</h6>
          </div>
          <div>
            <vs-switch v-model="productStat" class="px-2">
              <template #off>
                Inactive
              </template>
              <template #on>
                Active
              </template>
            </vs-switch>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Product Stock</h6>
          </div>
          <div class="w-full md:w-2/5">
            <vs-input v-model.number="productStock" type="number"
                      placeholder="Enter Stock"></vs-input>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>SKU (Stock Keeping Unit)</h6>
          </div>
          <div class="w-full md:w-2/5">
            <vs-input v-model.number="sku"
                      placeholder="Enter SKU"></vs-input>
          </div>
        </div>
      </template>
    </vs-card>
    <vs-card class="mt-4">
      <template #title>
        <h3 class="mt-4 mb-2">Weight & Shipping</h3>
      </template>
      <template #text>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Weight</h6>
          </div>
          <div class="w-full md:w-2/5">
            <div class="flex sm:flex-no-wrap flex-wrap">
              <div class="sm:w-1/3 w-full sm:mr-3 mb-2 sm:mb-0">
                <vs-select v-model="productWeightUnit">
                  <vs-option label="Gram (g)" value="g">Gram (g)</vs-option>
                  <vs-option label="Kilogram (kg)" value="kG">Kilogram (kg)</vs-option>
                </vs-select>
              </div>
              <div class="sm:w-2/3 w-full">
                <vs-input v-model.number="productWeight"
                        type="number"
                        placeholder="Enter Weight"></vs-input>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Insurance</h6>
          </div>
          <div class="w-full md:w-2/5">
            <div class="flex">
              <vs-radio v-model="insurance" val="optional" class="mr-6">
                Optional
              </vs-radio>
              <vs-radio v-model="insurance" val="yes">
                Yes
              </vs-radio>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Shipping Services</h6>
          </div>
          <div class="w-full md:w-3/4">
            <div class="flex">
              <vs-radio v-model="shippingServices" val="standard" class="mr-6">
                Standard
              </vs-radio>
              <vs-radio v-model="shippingServices" val="custom">
                Custom
              </vs-radio>
            </div>
            <p class="mt-2">This product will use the shipping services you set on
              <a href="#" class="text-primary">Shipping Setting.</a>
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full md:w-1/4 mb-2">
            <h6>Preorder</h6>
          </div>
          <vs-switch v-model="preorder" class="sm:mr-5"></vs-switch>
          <span>Activate Preorder for this product if it takes longer to process.
            <a href="#" class="text-primary">Learn More</a>
          </span>
        </div>
      </template>
    </vs-card>
    <div class="flex flex-wrap justify-end mt-4">
      <vs-button flat class="px-10 md:w-auto w-full">Cancel</vs-button>
      <vs-button flat class="px-6 md:w-auto w-full">Save & Add New</vs-button>
      <vs-button class="px-12 md:w-auto w-full">Save</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data: () => ({
    productName: '',
    category: '',
    showcase: '',
    condition: '',
    productDesc: '',
    productVideo: '',
    minOrder: 1,
    price: 0,
    productStat: true,
    productStock: 0,
    sku: '',
    productWeight: '',
    productWeightUnit: 'g',
    insurance: 'yes',
    shippingServices: 'standard',
    preorder: false,
    categories: [
      { value: 'buku', label: 'Buku' },
      { value: 'daput', label: 'Dapur' },
      { value: 'elektronik', label: 'Elektronik' },
      { value: 'fashionanak&bayi', label: 'Fashion Anak & Bayi' },
      { value: 'fashionmuslim', label: 'Fashion Muslim' },
      { value: 'fashionpria', label: 'Fashion Pria' },
      { value: 'fashionwanita', label: 'Fashion Wanita' },
      { value: 'film&musik', label: 'Film & Musik' },
      { value: 'gaming', label: 'Gaming' },
      { value: 'handpohone&tablet', label: 'Handphone & Tablet' },
    ],
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 200,
      addRemoveLinks: true,
      maxFiles: 1,
      acceptedFiles: 'image/*',
      dictDefaultMessage: "<i class='feather icon-upload-cloud'></i> UPLOAD",
      maxFilesize: 1,
    },
  }),
  computed: {
    labelProdDesc() {
      return 'Men’s Shoes Tokostore Black Canvas C28B Series\n'
        + '\n'
        + '- Simple\n'
        + '- Comfortable\n'
        + '- Available in black\n'
        + '- Sole PVC (injection shoes) that is comfortable and durable for using everyday\n'
        + '\n'
        + 'Material:\n'
        + 'Upper: Semi Leather\n'
        + 'Sole: Premium Rubber Sole\n'
        + '\n'
        + 'Size:\n'
        + '39 : 25,5 cm\n'
        + '40 : 26 cm\n'
        + '41 : 26.5 cm\n'
        + '42 : 27 cm\n'
        + '43 : 27.5 - 28 cm\n'
        + '\n'
        + 'A limited edition from Tokostore with a new and trendy model for you. Designed to be used in various events. Very comfortable when being worn, so that it can maximize your appearance and confidence level. Buy now before it runs out!';
    },
  },
};
</script>

<style scoped>

</style>

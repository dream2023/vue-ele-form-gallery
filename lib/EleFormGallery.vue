<template>
  <ele-gallery
    :class="desc.class"
    :source="newValue"
    :style="desc.style"
    v-bind="attrs"
    v-on="desc.on"
  >
    <template
      v-for="(render, key) of desc.slots"
      v-slot:[key]="data"
    >
      <extend-slot
        :data="data"
        :key="key"
        :render="render"
      />
    </template>
  </ele-gallery>
</template>

<script>
import EleGallery from 'vue-ele-gallery'
import formMixin from 'vue-ele-form/lib/mixins/formMixin'

export default {
  name: 'EleFormGallery',
  mixins: [formMixin],
  components: {
    EleGallery
  },
  data () {
    return {
      type: ['Object', 'Array', 'String'],
      defaultAttrs: {
        title: this.desc.label
      }
    }
  }
}
</script>

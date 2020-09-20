<template>
  <div class="dropper">
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadForm',

  methods: {
    ...mapActions(['uploadImages'])
  }
}
</script>

<style scoped lang="scss">
.dropper {
  position: relative;
  height: 30vh;
  border: 2px dashed #666;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background-color: #eee;
  }

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
}
</style>

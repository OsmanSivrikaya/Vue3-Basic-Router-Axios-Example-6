<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Başlık ..."/>
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">Url</label>
      <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https:// ..."/>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea type="text" v-model="userData.descriptoion" class="form-control" id="description" placeholder="Açıklama ..." rows="3"></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-sm btn-secondary me-1" @click="$router.push({name: 'HomePage'})">İptal</button>
      <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
  export default{
    data(){
      return {
        userData: {
          title: null,
          url: null,
          descriptoion: null,
        }
      }
    },
    methods: {
      onSave(){
          this.$appAxios.post('/bookmarks', this.userData)
          .then(save_response => {
            this.resetData();
            this.$router.push("/");
          })
      },
      resetData(){
        Object.keys(this.userData).forEach(key => {
          this.userData[key] = null
        })
      }
    }
  }
</script>

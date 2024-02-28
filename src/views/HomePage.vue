<template>
   <div class="card border p-2">
     <div class="d-flex justify-content-end mb-1">
       <button class="btn btn-primary btn-sm" @click="$router.push({name: 'NewBookMark'})">+ Yeni Ekle</button>
     </div>
     <table class="table table-striped table-hover">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Başlık</th>
           <th scope="col">Url</th>
           <th scope="col">Sil</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
           <th scope="row">{{bookmark.id}}</th>
           <td>{{bookmark.title}}</td>
           <td><a :href="bookmark.url" target="_blank">{{bookmark.url}}</a></td>
           <td><button @click="deleteItem(bookmark)" class="btn btn-sm btn-danger">Sil</button></td>
         </tr>
       </tbody>
     </table>
   </div>
</template>
<script>
  export default {
    data(){
      return {
        bookmarkList: [],
      }
    },
    created(){
      this.$appAxios.get("/bookmarks").then(data => {
        this.bookmarkList = data || [];
      })
    },
    methods:{
      deleteItem(bookmark){
        this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then(res => {
          if(res.status == 200){
            this.bookmarkList = this.bookmarkList.filter(item => item.id != bookmark.id);
          }
        })
      }
    }
  }
</script>
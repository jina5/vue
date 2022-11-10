<template>
  <div>
    <p v-if="!imgSrc">{{message}}</p>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name : 'DogView',
    data(){
        return {
            imgSrc : null,
            message : '로딩중',
        }
    },
    methods : {
        getDogImage(){
            const breed = this.$route.params.breed
            const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`
        axios({
            method : 'get',
            url : dogImageSearchURL
        })
        .then((response)=>{
            console.log(response)
            const imgSrc = response.data.message
            this.imgSrc = imgSrc
        })
        .catch((error)=>{
            this.$router.push('/404')
            // this.message = `${this.$route.params.breed}는 없는 품종입니다`
            console.log(error)

        })
    }},
    created(){
        this.getDogImage()
    }

    }
</script>

<style>

</style>
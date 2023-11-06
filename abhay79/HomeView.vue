<script setup>
import { ref } from 'vue'

  const count = ref(0)
  const showdob = ref(false)
  const showplace = ref(false)
  const end = ref(false)
  const noMore = ref(true)

  function changeStatus(val){
        if(val==1)
          showdob.value = true
        if(val==2)
          showplace.value= true
        if(val==3)
          {
            end.value= true
            noMore.value = false
          }
  }
</script>

<template>
  <div class="container">
    <div class="image">
      <img src="../assets/abhay.jpg" alt="profile pic">
    </div>
    <div class="text">
      <ul>
        <li>
          <p>Hello, my name is <span>Abhay Singh</span></p>
        </li>
        <li  v-if="showdob">
          <p>I was born in <span>12 Dec 2001</span></p>
        </li>
        <li v-if="showplace">
          <p>I basically come from <span>Bihar</span></p>
        </li>
        <p class="last" v-if="end">Nothing more to say here now. Navigate through the links above to see other details</p>
          
      </ul>
    <q-btn class="btn" color="secondary" label="Know More" v-if="noMore" v-on:click="changeStatus(++count)" />
    </div>
  </div>
</template>

<style scoped>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 2px solid red; */
  padding: 0rem 1rem;
}
.image{
  width: 30%;
  height: 30%;
  /* border: 2px solid red; */
  background-color: blueviolet;
  border-radius: 0.3rem;
  padding: 0.3rem 0.3rem;
}

.image img{
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text{
  width: 60%;
  height: 30%;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  /* border: 2px solid red; */
}

li{
  background-color: #E5D4FF;
  border-radius: 0.3rem;
  list-style: circle;
}
.text p{
  font-size: 1.8rem;
  margin: 1rem;
}
p.last{
  font-size: 1.5rem;
  color: rgb(111, 239, 25);
}
p span{
  color: blueviolet;
  font-weight: 600;
  font-style: italic;
}

.btn{
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 0.5rem;
  background-color: red;
}
</style>


<script setup>
import { ref } from 'vue'

const ed = ref(
    [
    {
            type:"HTML",
            icon:"https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
        },
        {
            type:"CSS",
            icon:"https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
        },
        {
            type:"JS",
            icon:"https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
        },
        {
            type:"VUE",
            icon:"https://tse3.mm.bing.net/th/id/OIP.6q2bDJUE-VvbgCw4zx5T0AHaFt?pid=ImgDet&rs=1"
        },
    ]
)
  
</script>

<template>
  <div class="container">
    <h3>My Skills</h3>
    <div class="content" v-for="item in ed " :key="item.id">
        <ul>
            <li>
                <div class="top">
                    <img v-bind:src="item['icon']" alt="" />
                    <p>{{ item['type'] }}</p>
                </div>
            </li>
        </ul>
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
    /* background-color: #F1EAFF; */
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

h3{
    text-align: center;
    width: 95%;
    font-weight: 600;
    font-size: 1.8rem;
    border-radius: 2rem;
    padding: 0.2rem 0rem;
    background-color: #D0A2F7;
    margin-top: 1rem;
}

.content{
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #E5D4FF;
    margin: 1rem 0rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
}

.top{
    display: flex;
}

.top img{
    width: 2rem;
    height: 2rem;
}

.top p{
    margin-left: 1rem;
}
p{
    font-size: 2rem;
}
</style>


<script setup>
import { ref } from 'vue'

const ed = ref(
    [
    {
            type:"Graduation",
            icon:"https://cdn-icons-png.flaticon.com/128/2936/2936735.png",
            date:"2019 - 2023",
            inst:"Techno India"
        },
        {
            type:"Higher Secondary Education",
            icon:"https://cdn-icons-png.flaticon.com/128/2936/2936735.png",
            date:"2016 - 2018",
            inst:"ABR Foundation School"
        },
        {
            type:"Matriculation",
            icon:"https://cdn-icons-png.flaticon.com/128/2936/2936735.png",
            date:"2014 - 2016",
            inst:"ABR Foundation School"
        }
    ]
)
  
</script>

<template>
  <div class="container">
    <h3>Education Details</h3>
    <div class="content" v-for="item in ed " :key="item.id">
        <ul>
            <li>
                <div class="top">
                    <img v-bind:src="item['icon']" alt="" />
                    <p>{{ item['type'] }}</p>
                </div>
            </li>
            <li><p>Institute Name: {{ item['inst']}}</p></li>
            <li><p>{{ item['date'] }}</p></li>
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
    margin-top: 2rem;
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


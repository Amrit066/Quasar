<script setup>
import { ref } from 'vue'

const ed = ref(
    [
    {
           type:"Watching Anime",
            icon:"https://th.bing.com/th/id/R.8e2bd86c8178eaef469d639d6b53efd0?rik=9vK3UfjYaQZ%2bKA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-u4DYvnFCCUM%2fUIP6nRQaNzI%2fAAAAAAAALyc%2fTcZDDpsj4bs%2fs1600%2fNaruto%2bShippuden%2bWallpapers%2b9.jpg&ehk=i36SIcnsB9FI4xRU5XbPomex%2fYdK1Q6vWyS66QDvJqk%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            type:"Playing Chess",
            icon:"https://cdn2.iconfinder.com/data/icons/sports-and-games-vol-01-7/32/chess-game-board-checkered-play-512.png"
        },
        {
            type:"Playing Cricket",
            icon:"https://tse2.mm.bing.net/th/id/OIF.SoEqxswwiQ5rTy3aFTB0iQ?pid=ImgDet&rs=1"
        }
    ]
)
  
</script>

<template>
  <div class="container">
    <h3>Hobbies List</h3>
    <div class="ccont">
        <div class="content" v-for="item in ed " :key="item.id">
                <div class="top">
                    <img v-bind:src="item['icon']" alt="" />
                </div>
            <p>{{ item['type'] }}</p>
    </div>
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

.ccont{
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    /* border: 2px solid red; */
}
.content{
    width: 15rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E5D4FF;
    margin: 1rem 0rem;
    padding: 0.5rem 0rem;
    border-radius: 0.5rem;
    animation: updown 2s linear 1s infinite;
}

@keyframes updown {
    to{
        margin-top: 2rem;
    }
}

.top{
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top img{
    width: 80%;
    height: 80%;
    border-radius: 50%;
    margin: auto;
}

.content p{
    width: 100%;
    background-color: #D2DE32;
    font-size: 1.5rem;
    text-align: center;
}

</style>


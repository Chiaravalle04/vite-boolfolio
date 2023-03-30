<script>
export default {
    name: "AppHeader",

    components: {

    },

    data() {

        return {

            homeImg: 'https://www.leadershipmanagementmagazine.com/wp-content/uploads/Project-Management-per-la-gestione-dei-progetti.jpg'

        }
    },

};
</script>

<template>

    <main>

        <div class="home-container">

            <img :src="homeImg" alt="Project Home">

            <router-link :to="{ name: 'projects' }">Vedi tutti i progetti <i class="fa-solid fa-arrow-right-long"></i></router-link>

        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 100px);
    .home-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            display: block;
            border-radius: 15px;
            width: 40%;
        }
        a {
            display: block;
            padding: 15px;
            color: #fff;
            font-weight: bold;
            background-color: #3B5998;
            margin-top: 20px;
            border-radius: 15px;
        }
    }
}
</style>
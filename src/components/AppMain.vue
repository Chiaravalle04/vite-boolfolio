<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';

export default {
    name: "AppMain",

    components: {
        AppProjectCard
    },

    data() {

        return {

            apiUrlAllProjects: 'http://127.0.0.1:8000/api/projects',

            projects: [],

            currentPage: 1,

            lastPage: 1

        }
    },

    methods: {

        getProjects() {

            axios
                .get(this.apiUrlAllProjects, {
                    params: {
                        page: this.currentPage
                    }
                })
                .then(response => {

                    this.projects = response.data.projects.data;

                    console.log(this.projects);

                    this.lastPage = response.data.projects.last_page

                    console.log(this.currentPage);

                })

        },

        changePage(page) {

            this.currentPage = page;

            this.getProjects();

        }

    },

    created() {

        this.getProjects();

    }
};
</script>

<template>

    <h1>BoolFolio</h1>
  
    <AppProjectCard :projects="projects"/>

    <div class="container-btn">

        <div class="btn">

            <button @click="changePage(num)" v-for="num in lastPage">{{ num }}</button>

        </div>

    </div>

</template>

<style lang="scss" scoped>
h1 {
    padding: 20px;
    color: #3B5998;
}
.container-btn {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    .btn {
        button {
            display: inline-block;
            margin: 0 10px;
            padding: 15px;
            font-weight: bold;
            color: #3B5998;
            cursor: pointer;
            border-top: none;
            border-left: none;
            border-right: none;
            background-color: #EDEDED;
            border-bottom: 2px solid #3B5998;
        }
    }
}
</style>
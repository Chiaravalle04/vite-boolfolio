<script>
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';

export default {
    name: "AppIndex",

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

                    if (response.data.success) {

                        this.projects = response.data.projects.data;
    
                        console.log(this.projects);
    
                        this.lastPage = response.data.projects.last_page

                    } else {

                        this.$router.push({ name: 'error' });

                    }


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

    <main>
  
        <AppProjectCard :projects="projects"/>

        <div class="container-btn">

            <div class="btn">

                <button :class="{ 'click-page': currentPage == num }" @click="changePage(num)" v-for="num in lastPage">{{ num }}</button>

            </div>

        </div>

    </main>

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
            border-bottom: 1px solid #3B5998;
        }
    }
}

.click-page {
    border-bottom: 5px solid #3B5998 !important;
}
</style>
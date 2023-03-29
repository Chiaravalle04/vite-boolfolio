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

        }
    },

    methods: {

        getProjects() {

            axios
                .get(this.apiUrlAllProjects)
                .then(response => {

                    this.projects = response.data.projects;

                    console.log(this.projects);

                })

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

</template>

<style lang="scss" scoped>
h1 {
    padding: 20px;
    color: #3B5998;
}
</style>
<script>
import axios from 'axios';

export default {
    name: "AppMain",

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
  

</template>

<style scoped>
</style>
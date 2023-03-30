<script>
import axios from 'axios';

export default {
    name: "AppIndex",

    data() {

        return {

            apiUrlAllProjects: '',

            project: null,

            projectImg: 'https://www.leadershipmanagementmagazine.com/wp-content/uploads/Project-Management-per-la-gestione-dei-progetti.jpg'

        }
    },

    methods: {

        getProjectShow() {

            axios
            .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then(response => {

                    if (response.data.success) {

                        this.project = response.data.projects;
    
                        console.log(this.project);

                    } else {

                        this.$router.push({ name: 'error' });

                    }
                    
                })

        },

    },

    created() {

        this.getProjectShow();

    }
};
</script>

<template>

    <main>

        <div class="card">

            <img :src="projectImg" alt="Project Img">

            <h2>{{ project.title }}</h2>

            <p>{{ project.description }}</p>

            <p><b>Creato con:</b> {{ project.tags }}</p>

            <p><b>Tipo:</b> {{ project.type.name }}</p>

        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    display: flex;
    justify-content: center;
    .card {
        width: 30%;
        img {
            width: 100%;
            padding: 20px;
        }
        h2, p {
            margin-bottom: 15px;
        }
        h2, b {
            color: #3B5998;
        }
        
    }
}
</style>
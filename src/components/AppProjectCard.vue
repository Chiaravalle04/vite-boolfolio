<script>
export default {
    name: "AppProjectCard",

    props: {

        projects: {
            type: Array,
        }

    },

    data() {

        return {


        }
    },
};
</script>

<template>

    <h3>Progetti:</h3>

    <div class="main-container">

        <div class="card" v-for="project in projects">

            <h2>{{ project.title }}</h2>

            <p><b>Descrizione:</b> {{ project.description }}</p>

            <p><b>Creato con:</b> {{ project.tags }}</p>

            <p><b>Tipo:</b> {{ project.type.name }}</p>

        </div>

    </div>

</template>

<style lang="scss" scoped>
h3 {
    padding-left: 20px;
}
.main-container {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% / 4 - 40px);
        min-height: 100px;
        margin: 20px 20px;
        padding: 25px;
        background-color: #E0E0E0;
        border: 3px solid #3B5998;
        box-shadow: 0px 11px 15px 0px rgba(0,0,0,0.66);
        h2, b {
            color: #3090E6;
        }
        p {
            margin: 15px 0;
            line-height: 25px;
            font-weight: 500;
        }
    }
}
</style>
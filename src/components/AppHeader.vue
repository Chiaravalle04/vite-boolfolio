<script>
export default {
    name: "AppHeader",

    components: {

    },

    data() {

        return {


        }
    },

};
</script>

<template>

    <header>

        <h1>BoolFolio</h1>

        <nav>

            <ul>

                <li>

                    <router-link :to="{ name: 'home' }">Home</router-link>

                </li>

                <li>

                    <router-link :to="{ name: 'projects' }">Progetti</router-link>
                        
                </li>

            </ul>

        </nav>

    </header>

</template>

<style lang="scss" scoped>
header {
    height: 100px;
    padding: 10px;
    text-align: center;
    h1 {
        color: #3B5998;
    }
    ul {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        li {
            a {
                padding: 10px;
            }
        }
    }
}
</style>
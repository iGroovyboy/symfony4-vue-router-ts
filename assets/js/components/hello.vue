<template>
    <div id="vueApp">
        <div id="container">
            <div id="welcome">
                <h1>Hello Page</h1>
            </div>
            <div id="status">
                <p>
                    You are now in  <b>Hello vue route</b>
                </p>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "hello"
    }
</script>
 
<style scoped lang="sass">
    #welcome h1 {
        color: green;
        
        &.router-link-exact-active {
            color: #42b983;
        }
    }
</style>
<template>
    <div class="entry-title d-flex justify-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold"> 15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2022, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary mx-2">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr/>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
        placeholder="¿Que sucedió hoy?"
        ></textarea>
    </div>
    <Fab 
    icon="fa-save"/>
    <img src="https://static.wixstatic.com/media/bd4b7a_0085b9dc9c5e4814b95ce6327a1874f8~mv2.jpg/v1/fit/w_511%2Ch_342%2Cal_c%2Cq_80/file.jpg"
    alt="entry-picture"
    class="img-thumbnail"/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
    Fab: defineAsyncComponent(() => import("../components/f-a-b.vue")),
}
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
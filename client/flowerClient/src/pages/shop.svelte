<script>
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
    import {flowers} from "../store/flowers.js"
    import {onMount} from "svelte"

    
    onMount(async () => {
        const div = document.getElementById('Shop');

        const res = await fetch("http://localhost:3000/api/flower")
        .then(res => res.json())
        .then(data => {
            data.forEach((element) => {
                const flower = document.createElement("div");
                flower.setAttribute("class","flower");
                flower.innerText = element.name;
                div.appendChild(flower)
            })
        })
    });
</script>
    
<Header></Header>
<main>
    Webshop:
    <div id="Shop"></div>
</main>
<Footer></Footer>
<style>
    :global(#shop){
        
        
        
    } 
    :global(.flower) {
        display: inline-block;
        text-align: center;
        line-height: 100px;
        width: 100px;
        height: 100px;
        padding: 5px;
        border: 1px solid blue;    
        background-color: yellow;
    }
</style>
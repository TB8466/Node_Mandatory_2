<script>
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
    import {flowers} from "../store/flowers.js"
    import {onMount} from "svelte"

    
    onMount(async () => {
        const div = document.getElementById('Shop');

        const prom = await fetch("http://localhost:3000/api/flower")
        .then(res => res.json())
        .then(data => {
            data.forEach((element) => {
                const flower = document.createElement("div");
                flower.classList.add("flower");
                const flowerContent = document.createElement("div");
                flowerContent.classList.add("flower-content");
                flowerContent.innerText = element.name;
                flower.appendChild(flowerContent);
                div.appendChild(flower);
                const buyBtn = document.createElement("button");
                buyBtn.classList.add(element.name.replace(/\s/g, ''));
                buyBtn.innerText = "Add to cart";
                flowerContent.appendChild(buyBtn);
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
        display: block;
        float: left;
        height: 200px;
        width: 200px;
        margin: 30px
    }
    :global(.flower-content) {  
        text-align: center;
        width: 100%;
        height: 100%;
        padding: 5px;
        border: 1px solid blue;    
        background-color: yellow;
        margin: 15px;
    }
    :global(.flower-content button) {
        position: relative;
        top: 70%;
        margin: 0;
    }
</style>
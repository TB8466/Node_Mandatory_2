<script>
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
    import {onMount} from "svelte"

    let name;
    let amount;
    let result = null;

    /* onMount(()=>{
        const submit = document.getElementById("submit");
        submit.addEventListener("click",doPost);
    }) */
    async function submit() { 
        const res = await fetch("http://localhost:3000/api/flower", {
			method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
			body: JSON.stringify({
				name,
				amount
			})
		});
		const json = res.json()
		result = JSON.stringify(json)
	};
</script>

<Header></Header>
<main>
    <h1>Admin</h1>
    <h2>Create new flower:</h2>
    
    <label for="name">Name:</label>
    <input id="name" type="text" bind:value={name}>
    <label for="amount">Amount in stock:</label>
    <input id="amount" type="number" bind:value={amount}>
    <button type="button" on:click={submit}>Submit</button>
</main>
<Footer></Footer>

<style>

</style>
<script>
	import {onMount} from "svelte"
	import Frontpage from "./pages/frontpage.svelte";
	import {Router, Route, Link} from "svelte-navigator"
	import About from "./pages/about.svelte";
	import Shop from "./pages/shop.svelte";
	import Admin from "./pages/admin.svelte";
import Login from "./pages/login.svelte";

	/* onMount(async () => {
		const response = await fetch("http://localhost:3000/");
		//const response = await fetch($baseURL + "/movies");
		const { data } = await response.json();
		movies = data;
	}); */
</script>

<Router>
	<main>
		<Route path="/">
			<Frontpage></Frontpage>
		</Route>

		<Route path="about">
			<About></About>
		</Route>

		<Route path="shop">
			<Shop></Shop>
		</Route>

		<Route path="admin">
			<Admin></Admin>
		</Route>

		<Route path="login">
			<Login></Login>
		</Route>
	</main>
</Router>
<style>

</style>
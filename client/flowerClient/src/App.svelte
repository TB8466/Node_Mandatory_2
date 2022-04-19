<script>
	import Frontpage from "./pages/frontpage.svelte";
	import {Router, Route, Link} from "svelte-navigator"
	import About from "./pages/about.svelte";
	import Shop from "./pages/shop.svelte";
	import Admin from "./pages/admin.svelte";
	import Login from "./pages/login.svelte";

</script>

<Router>
	<main>
		<img src="img/shop.jpg" alt="Logo">
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
	
	img{
		background-color: white;
		position: absolute;
		z-index: -1;
		margin: 0%;
		opacity: 50%;
		top: 50%;
 		left: 50%;
  		transform: translate(-50%, -50%);
	}
</style>
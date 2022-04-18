<script>
    import {Link} from "svelte-navigator"
</script>

<header>
    <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/shop">Webshop</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/admin">Admin</Link></span>
        <span><Link to="/login">Sign In</Link></span>
    </nav>
</header>

<style>
    header{
        border: solid black;
    }
    span+span{
        margin-left: 50px;
    }
    span{
        text-decoration: none;
        font-family: "Arial";
    }
    
</style>
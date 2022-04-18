<script>
    import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";
    import {onMount} from "svelte"

    let mainContent;
    let overlay;

    let userName;
    let password;

    function login(){

    }

    function createUserOverlay(){
        mainContent.setAttribute("class","blur");
        overlay.classList.remove("hidden")
    }
    function hideOverlay(){
        mainContent.classList.remove("blur");
        overlay.classList.add("hidden");
    }

    function createUser(){
        
        alert("User created")
        hideOverlay();
    }

</script>
    
    <Header></Header>
    <main>
        <div bind:this={mainContent} id="main-content">
        <h1>Login</h1>
        <label for="username">Username:</label>
        <input id="username" type="text" bind:value={userName}>
        <label for="password">Password:</label>
        <input id="password" type="password" bind:value={password}>
        <button type="button" on:click={login}>Login</button>
        <button on:click={createUserOverlay}>No account? Click here to create new account</button>
    </div>
        <div bind:this={overlay} class="hidden">
        <div id="create-user">
            <span class="close" on:click={hideOverlay}>&times</span>
            <h1>Create new user:</h1>
            <label for="crtusername">Username:</label>
            <input id="crtusername" type="text" bind:value={userName}>
            <label for="crtpassword">Password:</label>
            <input id="crtpassword" type="password" bind:value={password}>
            <button type="button" on:click={createUser}>Create</button>
        </div>
    </div>
    </main>
    <Footer></Footer>
    <style>
        :global(.blur){
            transition: 0.7s;
            filter: blur(8px);
            -webkit-filter: blur(8px);
        }
            /* #hidden{
                position: relative;
            } */
        .hidden{
            display: none;
            
        }
        #create-user{
            position: absolute;
            top: 50%;
            left: 50%;
            border: solid black;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
        .close {
            color: gray;
            float: right;
            font-size: 50px;
            font-weight: bold;
        }

        .close:hover,.close:focus {
            color: #000;
            cursor: pointer;
        }
    </style>
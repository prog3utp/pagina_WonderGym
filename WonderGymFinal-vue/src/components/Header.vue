<template>
    <!-- inicio encabezado del sitio -->
    <div class="header-section">
        <div class="header-container">

           
            
            <!-- Inicio menú navegación -->
            <ul class="site-nav">
                <a href="/">Inicio</a>
                <a href="/servicios">Servicios</a>
                <a href="/contacto">Contacto</a>
                
            </ul>
            <!-- Fin menú navegación -->

            
            
            <div class="logo-container">
                <img class="logo-container__site-logo" src="../assets/logo.png" alt="Logo WonderGym">
            </div>
        </div>
        
            
        <!--<div class="banner">
            <img src="../assets/banner.jpg" alt="A banner image">
        </div>-->
    </div>
<!-- fin encabezado del sitio -->
</template>

<script>
export default {

}
</script>

<style>
        * {
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            max-width: 1400px;
            min-width: 375px;
            margin-right: auto;
            margin-inline: auto;
            margin-top: 0;
            margin-bottom: 0;
            color: #fa0606;
        }

        .header-section {
            margin-bottom: 100px;
        }

        .header-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;

        }

        .site-title {
            width: 30%;
        }

        .site-nav {
            width: 40%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .site-nav>a {
            color: inherit;
            text-decoration: none;
        }

        .site-nav>a:hover {
            text-decoration: underline;
            font-weight: bold;
        }

        .logo-container {
            width: 30%;
        }

        .logo-container__site-logo {
            height: 80px;
        }

       /* .banner {
            width: 100%;
        }

        .banner>img {
            width: 100%;
            height: 400px;
            max-width: 1400px;
            object-fit: cover;
        }*/
         .v-application a {
            color: #1976d2;
            font-size:xx-large;
        }

</style>
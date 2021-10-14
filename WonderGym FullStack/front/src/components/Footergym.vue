<template>
  <!-- Inicio pie del sitio 
    <div class="seccion-pie">
        <article>
            <div class="gettouch-section">
                <div class="containercontacto">
                    <div class="row-contacto">
                        <div class="col-md-4">
                            <div class="gt-text">
                                <img class="services-info__imagen" src="../assets/img/iconoubicacion2.png" width="50" height="50">
                                <p>Cra. 15 No. 93 - 60 Local 1-42 Piso 1.<br/> Bogotá DC.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text">
                                <img class="services-info__imagen" src="../assets/img/iconoubicacion2.png" width="50" height="50">
                                <p>C.C Gran Plaza calle 45 No. 53-20<br/> Medellin - Antioquia</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text email">
                                <img class="services-info__imagen" src="../assets/img/iconoubicacion2.png" width="50" height="50">
                                <p>C.C Centenario Av. 4 Nte. #7N- 46<br/> Santiago de Cali - Valle del Cauca</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text">
                                <img class="services-info__imagen" src="../assets/img/iconoemail.png" width="50" height="50">
                                <p>wondergymcentral@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text">
                                <img class="services-info__imagen" src="../assets/img/iconoemail.png" width="50" height="50">
                                <p>wondergymed@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gt-text email">
                                <img class="services-info__imagen" src="../assets/img/iconoemail.png" width="50" height="50">
                                <p>wondergymcali@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article>
            <div class="logo-container">
                <img class="logo-container__site-logo" src="../assets/logo.png" alt="Logo WonderGym">
            </div>
        </article>
    </div>
     fin pie del sitio-->
     <!-- Footer Section Begin -->
    <section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="fs-about">
                        <div class="fa-logo">
                            <a href="#"><img src="../assets/logo.png" height="100"></a>
                        </div>
                        <p>El mejor equipamiento, las mejores instalaciones con los mejores instructores!</p>
                        <div class="fa-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <!--<div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="fs-widget">
                        <img class="services-info__imagen" src="../assets/img/iconoubicacion2.png" width="50" height="50">
                            <p>Cra. 15 No. 93 - 60 Local 1-42 Piso 1.<br/> Bogotá DC.</p>
                        
                        <ul>
                            <img class="services-info__imagen" src="../assets/img/iconoubicacion2.png" width="50" height="50">
                            <p>C.C Gran Plaza calle 45 No. 53-20<br/> Medellin - Antioquia</p>
                            <img class="services-info__imagen" src="../assets/img/iconoubicacion2.png" width="50" height="50">
                            <p>C.C Centenario Av. 4 Nte. #7N- 46<br/> Santiago de Cali - Valle del Cauca</p>
                        </ul>
                    </div>
                </div>-->
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="fs-widget">
                        <h4>Accesos Directos</h4>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/servicios">Servicios</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
    <!-- Footer Section End -->
</template>

<script>
export default {

}
</script>

<style>
    /*.seccion-pie {
            background-color: #25294f;
            height: 200px;
            display: flex;
            color: white;
            justify-content: space-evenly;
        }*/
        /*---------------------
  Footer
-----------------------*/
.row {
    
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: space-around
    
}

.footer-section {
	background: #202020;
	padding-top: 20px;
}

.fs-about {
	margin-bottom: 30px;
}

.fs-about .fa-logo {
	margin-bottom: 30px;
}

.fs-about .fa-logo a {
	display: inline-block;
}

.fs-about p {
	line-height: 26px;
	color: #c4c4c4;
}

.fs-about .fa-social a {
	font-size: 14px;
	color: #c4c4c4;
	margin-right: 10px;
}

.fs-about .fa-social a:last-child {
	margin-right: 0;
}

.fs-widget {
	margin-bottom: 30px;
}

.fs-widget h4 {
	color: #ffffff;
	font-weight: 600;
	margin-bottom: 18px;
}

.fs-widget ul li {
	list-style: none;
}

.fs-widget ul li a {
	font-size: 14px;
	color: #c4c4c4;
	line-height: 30px;
}

.fs-widget .fw-recent {
	margin-bottom: 20px;
	padding-bottom: 10px;
	border-bottom: 1px solid #1a1a1a;
}

.fs-widget .fw-recent:last-child {
	padding-bottom: 0;
	border: none;
}

.fs-widget .fw-recent h6 {
	margin-bottom: 6px;
}

.fs-widget .fw-recent h6 a {
	color: #c4c4c4;
	letter-spacing: 0.5px;
}

.fs-widget .fw-recent ul li {
	font-size: 12px;
	color: #4d4d4d;
	display: inline-block;
	margin-right: 25px;
	position: relative;
}

.fs-widget .fw-recent ul li:last-child:after {
	display: none;
}

.fs-widget .fw-recent ul li:after {
	position: absolute;
	right: -16px;
	top: 0;
	content: "|";
}

.copyright-text {
	font-size: 14px;
	color: #c4c4c4;
	letter-spacing: 0.5px;
	border-top: 1px solid #1a1a1a;
	padding: 25px 0;
	margin-top: 15px;
}

.copyright-text a,
.copyright-text i {
	color: #f36100;
}
</style>
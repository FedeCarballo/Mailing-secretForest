exports.Template = (info) => {

    const {email} = info
 const template =   
    `
    <head>
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Secret Forest</title>
    <style type="text/css">
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        margin: 0;
        padding: 0;
        max-width: 700px;
      }
      .wrapper {
        background-color: rgba(0, 0, 0, 0.935);
      }
      table {
        border-spacing: 0;
      }
      a {
        text-decoration: none;
      }
      .main {
        background-image: url("https://i.ibb.co/rfmsDj2/Bg.png");
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
        margin: auto;
        background-size: cover;
        background-repeat: no-repeat !important;
        border-spacing: 0;
      }
      .firstsection {
        background-image: url("https://i.ibb.co/rxmN74x/Shape-Top.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 45px !important;

      }
      .fisttable {
        width: 80%;
        margin: 30px;
      }
      .fisttable>img {
        padding-top: 15px;
      }
      /* second */
      .secondsection p{
        color: white;
        text-align: center;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
      .secondsection p>strong{
        color:#9c94cc;
      }
      .secondsection img{
        display: flex;
        margin: auto;
      }
      .secondsection__title{
        color:#9c94cc;
        text-align: center;
        font-size: 20px;
      }
      .secondsection__title>strong{
        color: white;
        font-size: 40px;
      }

      .thirdsection__links a{
        margin: 10px;
      }
      .footer{
        text-align: center;
        width: 70%;
      }
      .footer p{
        color: white;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <center class="wrapper">
      <table class="main">
        <tr>
            <td>
                <table style="margin:auto;">
                    <tr>
                        <td><img src="https://i.ibb.co/VL6wrpr/Isotipo.png" alt=""></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr class="firstsection" style="padding-bottom: 25px;">
          <td>
            <table class="fisttable" style="padding: 25px;">
                <tr>
                    <td width="50%">
                        <img src="https://i.ibb.co/NTTgPz4/Logos-Secret-Forest.png" />
                    </td>
                    <td width="50%">
                        <img src="https://i.ibb.co/2MsXNyk/TRIO-ESPECIES-MACHO.png" />
                    </td>
                </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table class="secondsection" width="100%">
                <tr>
                    <td>
                        <h1 class="secondsection__title">
                            BIENVENIDO A<br /><strong>SECRET FOREST</strong>
                        </h1>
                        <img src="https://i.ibb.co/bz8Mzhh/Separador-Top.png" width="60%"/>
                        <p>
                           <strong> Gracias por suscribirse.</strong>
                        </p>
                        <p>
                            Aseg??rate de conocer todo sobre el proyecto y las noticias uni??ndote a nuestro <strong>Discord</strong> y siguiendo nuestras redes sociales.
                        </p>
                        <p>
                            Encontrar??s una comunidad agradable y amigable.  Tendremos concursos y premios en <strong>NFTs</strong> que podr??s usar en <strong/>Secret Forest.</strong>
                        </p>
                        <p>??Saludos!
                        </p>
                        <p><strong>Equipo Alufi.</strong></p>
                        <img src="https://i.ibb.co/bz8Mzhh/Separador-Top.png" width="60%"/>
                    </td>
                </tr>
            </table>
          </td>
        </tr>
        <tr>
            <td style="padding: 25px;">
                <table style="margin:auto">
                    <tr>
                        <td>
                            <a href="https://discord.com/invite/UCYgZqmVS9"
                                target="_blank">
                                <img src="https://i.ibb.co/bgNBW0x/unetediscord.png"  alt="">
                            </a>
                        </td>
                    </tr>
                </table>
                <table style="margin: auto;padding-top: 20px;">
                    <tr>
                        <td>
                            <a href="https://t.me/secretforestworld" target="_BLANK">
                                <img  src="https://i.ibb.co/7k2pckc/unetetelegram.png"    alt="">
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table style="margin: auto">
                    <tr>
                      <td class="thirdsection__links">
                        <a
                          href="https://discord.com/invite/UCYgZqmVS9"
                          target="_blank">
                          <img src="https://i.ibb.co/nLBngky/Discord-Logo-1.png" />
                        </a>
                        <a
                          href="https://www.instagram.com/secretforestw/"
                          target="_blank">
                          <img src="https://i.ibb.co/NYJ43J0/Ig-Logo-1.png" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100086670464045"
                          target="_blank">
                          <img src="https://i.ibb.co/HK70htT/Fb-Logo-1.png" />
                        </a>
                        <a href="https://twitter.com/secretforestw" target="_blank">
                          <img src="https://i.ibb.co/vh9MbX0/Twitter-Logo-1.png" />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCRjQTvlZoIEmVxr79Ig1yJw"
                          target="_blank">
                          <img src="https://i.ibb.co/zbGS7Z1/Capa-2.png" />
                        </a>
                      </td>
                    </tr>
                  </table>
            </td>
        </tr>

        <tr>
          <td>
            <table class="footer" style="margin: auto;">
                <tr>
                    <td>
                        <p>
                            Secret Forest es creado por Zelcar Games<br />
                            ?? 2022 Zelcar Blockchain Games Inc. Todos los derechos reservados.
                        </p>
                        <p>
                            Est?? recibiendo este correo electr??nico porque se registr?? en uno de nuestros eventos en persona o se suscribi?? a las actualizaciones beta en https://secretforestworld.net/<br />
                            darse de baja | actualizar preferencias de suscripci??n
                        </p>
                    </td>
                </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
    `
return template
}

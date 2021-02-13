import React from "react";
import Head from "next/head"

export default function HomePage() {
    return (
        
       <div>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
          <title>App NextJs SSR</title>
        </Head>
  
        <body>
          <div className="container-fluid bg-light">
            <div className="text-center">
             <h1 className="display-3 ">Catálogo de Produtos</h1>
            </div>
            <div className="row row-cols-4 row-cols-md-4 g-4 mt-5 mx-5 justify-content-center">
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://a-static.mlcdn.com.br/618x463/ar-condicionado-split-lg-9-000-btus-quente-frio-dual-inverter-voice-s4-w09wa51a/magazineluiza/015196300/e0405f3e70f00f680bd9208227175174.jpg" className="card-img-top" alt="ar condicionado" />
                  <div className="card-body">
                    <h5 className="card-title">Ar Condicionado Split LG</h5>
                    <p className="card-text text-danger"><s>R$ 1.500,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 1.300,00</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://i.zst.com.br/thumbs/12/1e/2a/29291455.jpg" className="card-img-top" alt="Moto Maxx 2" />
                  <div className="card-body">
                    <h5 className="card-title">Smartphone Moto Maxx2</h5>
                    <p className="card-text text-danger"><s>R$ 799,90 </s></p>
                    <p className="card-text text-primary"> <b>R$ 400,90</b> </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://i.zst.com.br/images/cafeteira-expresso-1-xicara-arno-dolce-gusto-piccolo-photo6418817-12-38-1b.jpg" className="card-img-top" alt="Cafeteira Dolce Gusto" />
                  <div className="card-body">
                    <h5 className="card-title">Cafeteira Dolce Gusto</h5>
                    <p className="card-text text-danger"><s>R$ 300,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 220,99</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://http2.mlstatic.com/D_NQ_NP_781251-MLA44220526752_122020-O.jpg" className="card-img-top" alt="SmarT TV" />
                  <div className="card-body">
                    <h5 className="card-title">Smart TV Samsung 52'</h5>
                    <p className="card-text text-danger"><s> R$ 5.200,00</s></p>
                    <p className="card-text text-primary"> <b>R$ 3.000,99</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://www.lg.com/br/images/tv/47lb6500/gallery/medium001.jpg" className="card-img-top" alt="Smart TV LG" />
                  <div className="card-body">
                    <h5 className="card-title">Smart TV LG 52'</h5>
                    <p className="card-text text-danger"><s>R$ 4000,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 3500,00</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://brsonyb2c.vteximg.com.br/arquivos/ids/223152-1000-715/w665f.jpg?v=637402033894870000" className="card-img-top" alt="Smart TV Sony" />
                  <div className="card-body">
                    <h5 className="card-title">Smart TV Sony 52'</h5>
                    <p className="card-text text-danger"><s>R$ 6000,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 5200,00</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81AqwYyZjzL._AC_SX522_.jpg" className="card-img-top" alt="Google Pixel" />
                  <div className="card-body">
                    <h5 className="card-title">Google Pixel</h5>
                    <p className="card-text text-danger"><s>R$ 6000,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 4499,99</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://http2.mlstatic.com/D_NQ_NP_926753-MLA43694099480_102020-O.jpg" className="card-img-top" alt="Iphone 8" />
                  <div className="card-body">
                    <h5 className="card-title">Iphone 8 64GB</h5>
                    <p className="card-text text-danger"><s>R$ 3000,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 2599,99</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="https://a-static.mlcdn.com.br/618x463/iphone-11-apple-branco-128gb-desbloqueado-mhdj3bz-a/lojaiplace/216004/ddfc4e99f77329924e1d11d5e4cde3c8.jpg" className="card-img-top" alt="Iphone 11" />
                  <div className="card-body">
                    <h5 className="card-title">Iphone 11</h5>
                    <p className="card-text text-danger "><s>R$ 5900,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 5200,00</b> </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
  
  
        </body>
      </div>
    )
  }

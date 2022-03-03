import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (

    <div class="container">
      <Head>
        <title>Qyona's Earth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      

      <div class="gridLayout">

        <header class="caja c1">
          <h1 class="title">Qyona's Earth</h1>
          <img src="/background2.jpeg" width="100%"></img>
        </header>

        <div class="caja c2">
          <p>Qyona's Earth* será tu lugar para investigar, mejorar tus habilidades y blandir tu espada contra incontables monstruos y enemigos.
            Para que lo entiendas, te contaré la historia.

            Hace mucho tiempo, los dioses decidieron regalarle a la joven Qyona un lugar donde los atardeceres eran los más bonitos del cosmos.
            Ella, cumpliendo con su nuevo cometido de diosa, preservó durante mucho tiempo su tierra, cediéndola como hogar a aquellos aventureros que pasaban de viaje.
            Se dice que un grupo de ellos decidieron quedarse, y ayudar a Qyona a seguir embelleciendo aún más si cabe el lugar, y librándolo de todo mal y peligro.
            Como agradecimiento, Qyona decidió regalar los poderes de Semi Dios a los tres aventureros, para ayudarla ya que la corrupción se estaba empezando a apoderar de su mundo.
            Actualmente, los cuatro dioses se han unido a la tierra de la isla principal, haciendo poco a poco que se desprenda de la tierra, para intentar salvar la ciudad, y que no llegue a corromperse.
          </p>
        </div>

        <div class="caja c3">
          <img src="/spawn.jpeg" width="100%"></img>
        </div>

        <footer class="caja c4">
          <img id="footerIcon" src="/favicon.png" width="5%"></img>
          <p id="footerText">Qyona's Earth web</p>
        </footer>

      </div>

    </div>

)
}

export default Home

import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


const Shea = () => (
  <div>
    <Helmet
      title="Non-Curly Girl Shea Moisture Products"
      meta={[
        { name: 'description', content: 'Shea Moisture products that are not curly girl approved' },
        { name: 'keywords', content: 'products, Shea Moisture, curly girl, alcohols, sulfates' },
        {
          property: 'og:image',
          content: 'http://www.curlsbot.com/img/icon.png'
        }
      ]}
    />
    <h1>Non-Curly Girl Shea Moisture Products</h1>
    <p>Shea Moisture is a popular brand for many following the "curly girl" system but unfortunately a few products contain ingredients that <a href="https://www.wikihow.com/Determine-if-a-Hair-Product-is-Curly-Girl-Approved">can dry out hair (alcohols and harsh sulfates) or build up (waxes). I recommend always checking the list and not assuming it's CG because it's Shea Moisture. </a> Message <a href="https://www.facebook.com/CurlsBot/">Curlsbot</a> if you know any others.</p>
    <h2>Harsh cleansers</h2>
    <h3>Sodium cocoyl sarcosinate</h3>
    <ul>
      <li>FRAGRANCE-FREE, GLUTEN FREE BABY WASH & SHAMPOO</li>
    </ul>
    <h3>Sodium lauryl sulfoacetate</h3>
    <ul>
      <li>MONGONGO & HEMP SEED OILS HIGH POROSITY MOISTURE-SEAL SHAMPOO</li>
    </ul>

    <hr />
    <h2>Alcohols</h2>
    <h3>Unknown</h3>
    <em>They claim these are "non-drying" but this is impossible to verify if they don't list the specific alcohol</em>
    <ul>
      <li>COCONUT & HIBISCUS FRIZZ-FREE CURL MOUSSE</li>
    </ul>
    <h3>Denatured alcohol</h3>
    <ul>
      <li>MANUKA HONEY & MAFURA OIL INTENSIVE HYDRATION COMPLEX</li>
    </ul>

    <h3>SD Alcohol</h3>
    <ul>
      <li>SACHA INCHI OIL OMEGA-3-6-9 RESCUE + REPAIR HAIR & SCALP TONIC</li>
      <li>FRUIT FUSION COCONUT WATER WEIGHTLESS TEXTURE SPRAY</li>
      <li>FRUIT FUSION COCONUT WATER WEIGHTLESS STYLING MOUSSE</li>
    </ul>

    <h3>Ethanol</h3>
    <ul>
       <li>AFRICAN BLACK SOAP DANDRUFF CONTROL CONDITIONER</li>
       <li>AFRICAN BLACK SOAP DANDRUFF CONTROL SHAMPOO</li>
       <li>AFRICAN BLACK SOAP DANDRUFF CONTROL PRE-POO RINSE</li>

    </ul>
    
    <h3>Isopropyl alcohol</h3>
    <ul>
      <li>JOJOBA OIL & UCUUBA BUTTER TRACK TENSION & ITCH RELIEF SERUM</li>
      <li>DRAGON'S BLOOD & COFFEE CHERRY VOLUME + LIFTING SPRAY</li>
    </ul>

    <hr />
    <h2>Waxes</h2>
     <ul>
      <li>PEACE ROSE OIL COMPLEX NOURISH & SILKEN CONDITIONER</li>
      <li>RAW SHEA BUTTER & ARGAN OIL REPAIR & TRANSITION KIT</li>
      <li>PEACE ROSE OIL COMPLEX NOURISH & SILKEN HOLD MIST</li>
      <li>PEACE ROSE OIL COMPLEX NOURISH & SILKEN DRY SHAMPOO</li>
      <li>MANUKA HONEY & YOGURT HYDRATE + REPAIR SPLIT END BALM</li>
    </ul>

    <hr />
    <h2>Otherwise Questionable</h2>
    <h3>Dimethiconol Cystheine- possible silicone-like buildup</h3>
     <ul>
      <li>TAHITIAN NONI & MONOI SMOOTH & REPAIR HAIR & SCALP WEEKLY THERAPY</li>
      <li>TAHITIAN NONI & MONOI SMOOTH & REPAIR CONDITIONING SHAMPOO</li>
    </ul>

    
  </div>
)

export default Shea

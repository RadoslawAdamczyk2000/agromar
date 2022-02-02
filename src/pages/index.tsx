import Layout from '../schemas/Layout';
import React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Poster from '../components/atoms/HomePage/Hero/Poster';
const HomePage = ({data}) => {
  console.log(data.file.publicURL);
  return(
    <Layout>
      <nav>
        <Link to='/'>
          <figure>
            <img src={data.file.publicURL} alt='Agromar Logo'/>
          </figure>
        </Link>
        <menu>
          <ul>
            <Link to='/'>
              start
            </Link>
            <Link to='/'>
              o nas
            </Link>
            <Link to='/'>
              oferta
            </Link>
            <Link to='/'>
              kontakt
            </Link>
          </ul>
          <ul>
            <Link to='/'>
              <button>
                CZ    
              </button>
            </Link>
            <Link to='/'>
              <button>
                DE
              </button>
            </Link>
          </ul>
        </menu>
      </nav>
      <header>
        <div>
          <h1>
            Agromar
          </h1>
          <h2>
            Warzywa obrane
          </h2>
        </div>
      </header>
    </Layout>
  )
}
export const query = graphql`
  {
    file(name: {eq: "logo"}) {
      name
      publicURL
    }
  }
`

export default HomePage;
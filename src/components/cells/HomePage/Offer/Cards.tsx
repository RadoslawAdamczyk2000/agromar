import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import TitleSection from '../../../atoms/HomePage/Offer/TitleSection';
import Card from '../../../bacterias/HomePage/Offer/Card';
import CardsWrapper from './styles/CardsWrapper';
const Cards = () => {
    const {allImageSharp,file} = useStaticQuery(graphql`
    {
      allImageSharp{
        edges {
          node {
            id
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: TRACED_SVG
              formats: JPG
            )
          }
        }
      }
      file(name: {eq: "vegetable-outlines-4898185-removebg-preview"}) {
        publicURL
        name
      }   
    }
    `)
    return(
        <>
            <TitleSection title='Oferta'/>
            <CardsWrapper image={file.publicURL}>
                <div>
                <Card 
                    content='Producent warzyw obranych, gotowanych i pakowanych próżniowo Dzięki stosowaniu warzyw obranych nasi klienci oszczędzają na: Produkcie – dostajesz 100% użytecznego produktu / brak odpadków. wywoź odpadków (otarta skorka , opakowania) – 50% płatności za ścieki' 
                    title='Warzywa obrane' 
                    poster={allImageSharp.edges[1].node.gatsbyImageData}
                />
                <Card 
                    content='Producent warzyw obranych, gotowanych i pakowanych próżniowo Dzięki stosowaniu warzyw obranych nasi klienci oszczędzają na: Produkcie – dostajesz 100% użytecznego produktu / brak odpadków. wywoź odpadków (otarta skorka , opakowania) – 50% płatności za ścieki' 
                    title='Warzywa obrane' 
                    poster={allImageSharp.edges[11].node.gatsbyImageData}
                />
                <Card 
                    content='Producent warzyw obranych, gotowanych i pakowanych próżniowo Dzięki stosowaniu warzyw obranych nasi klienci oszczędzają na: Produkcie – dostajesz 100% użytecznego produktu / brak odpadków. wywoź odpadków (otarta skorka , opakowania) – 50% płatności za ścieki' 
                    title='Warzywa obrane' 
                    poster={allImageSharp.edges[8].node.gatsbyImageData}
                />
                </div>
                <div>
                <Card 
                    content='Producent warzyw obranych, gotowanych i pakowanych próżniowo Dzięki stosowaniu warzyw obranych nasi klienci oszczędzają na: Produkcie – dostajesz 100% użytecznego produktu / brak odpadków. wywoź odpadków (otarta skorka , opakowania) – 50% płatności za ścieki' 
                    title='Warzywa obrane' 
                    poster={allImageSharp.edges[4].node.gatsbyImageData}
                />
                <Card 
                    content='Producent warzyw obranych, gotowanych i pakowanych próżniowo Dzięki stosowaniu warzyw obranych nasi klienci oszczędzają na: Produkcie – dostajesz 100% użytecznego produktu / brak odpadków. wywoź odpadków (otarta skorka , opakowania) – 50% płatności za ścieki' 
                    title='Warzywa obrane' 
                    poster={allImageSharp.edges[5].node.gatsbyImageData}
                />
                <Card 
                    content='Producent warzyw obranych, gotowanych i pakowanych próżniowo Dzięki stosowaniu warzyw obranych nasi klienci oszczędzają na: Produkcie – dostajesz 100% użytecznego produktu / brak odpadków. wywoź odpadków (otarta skorka , opakowania) – 50% płatności za ścieki' 
                    title='Warzywa obrane' 
                    poster={allImageSharp.edges[6].node.gatsbyImageData}
                />
                </div>
            </CardsWrapper>
        </>
    )
}
export default Cards;
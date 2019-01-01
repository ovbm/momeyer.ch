import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import Flickity from 'flickity';

import 'flickity-bg-lazyload';
import 'lazysizes';
import facebookimg from '../images/icons/fbook.png';
import instaimg from '../images/icons/instagram.png';
import emailimg from '../images/icons/email.png';


class Bands extends React.Component {
  componentDidMount() {
    const flkty = new Flickity('.main-carousel', {
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      wrapAround: true,
      bgLazyLoad: 2,
      pageDots: false
    });
    flkty.on( 'staticClick', function( event, pointer, cellElem, cellIndex ) {
      if ( cellIndex !== undefined ) {
          flkty.select( cellIndex );
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="main-carousel">
          <StaticQuery
            query={graphql`
              query contentQuery {
                allContentfulMomeyerBand(sort: {fields:position,order:ASC}) {
                  edges {
                    node {
                      name
                      image {
                        file {
                          url
                          fileName
                        }
                      }
                      website
                      position
                    }
                  }
                } 
              }
            `}
            render={ data => (
              data.allContentfulMomeyerBand.edges.map((band) =>{
              return (
                <div
                    key={band.node.position} 
                    className="band carousel-cell"
                    data-flickity-bg-lazyload={band.node.image.file.url}
                >
                  <div className={`bandcontent ${band.node.name}`}>
                      <h1 className="bandname">{band.node.name}</h1>
                      <div className="textbox">
                        {
                          band.node.name == "Mo Meyer" ?
                          <> 
                            <h3 className="contentdesc">bass player and musician</h3>
                            <h3 className="contentlineup">electric bass, double bass, bass synth</h3>
                          </>
                          :
                          <a className="contentlink" target="_blank" href={band.node.website}>WWW</a>
                        }
                      </div>
                      {
                        band.node.name == "Mo Meyer" && 
                        <div className="sllinks">
                          <div className="slcontainer">
                            <a  
                              style={{
                                background: `url(${facebookimg}) no-repeat`,
                                backgroundSize: '100%',
                              }}
                              target="_blank"
                              className="slink slfbook js-track-clicks"
                              data-category='link'
                              data-action='facebook'
                              href="https://www.facebook.com/mo.meyer.3"/>
                          </div>
                          <div className="slcontainer">
                            <a
                              style={{
                                background: `url(${instaimg}) no-repeat`,
                                backgroundSize: '100%',
                              }}
                              target="_blank"
                              className="slink slinstagram js-track-clicks"
                              data-category='link'
                              data-action='instagram'
                              href="https://www.instagram.com/mo.myer/"/>
                          </div>
                          <div className="slcontainer">
                            <a
                              style={{
                                background: `url(${emailimg}) no-repeat`,
                                backgroundSize: '100%',
                              }}
                              target="_blank"
                              className="slink slemail js-track-clicks"
                              data-category='link'
                              data-action='email'
                              href="mailto:mo@momeyer.ch"/>
                          </div>
                        </div>  
                      }
                  </div>
                </div>
                )
              })
            )} 
          />
        </div>
      </div>
    )
  }
}

export default Bands

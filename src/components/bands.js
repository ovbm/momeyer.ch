import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Flickity from 'flickity'

import 'flickity-bg-lazyload'
import 'lazysizes'
import facebookimg from '../images/icons/fbook.png'
import instaimg from '../images/icons/instagram.png'
import emailimg from '../images/icons/email.png'

class Bands extends React.Component {
  componentDidMount() {
    const flkty = new Flickity('.main-carousel', {
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      wrapAround: true,
      bgLazyLoad: 2,
      pageDots: false,
    })
    flkty.on('staticClick', function (event, pointer, cellElem, cellIndex) {
      if (cellIndex !== undefined) {
        flkty.select(cellIndex)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="main-carousel">
          <StaticQuery
            query={graphql`
              query contentQuery {
                allContentfulMomeyerBand(
                  sort: { fields: position, order: ASC }
                ) {
                  nodes {
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
                allContentfulMomeyerBio {
                  nodes {
                    textDe {
                      textDe
                    }
                    biobild {
                      file {
                        url
                      }
                    }
                  }
                }
              }
            `}
            render={(data) => {
              const biodata = data.allContentfulMomeyerBio.nodes[0]
              const bioband = {
                name: 'bio',
                image: {
                  file: {
                    url: biodata.biobild.file.url,
                  },
                },
                textDe: biodata.textDe.textDe,
                webiste: '',
                position: '',
              }
              const allBands = data.allContentfulMomeyerBand.nodes
              allBands.splice(1, 0, bioband)
              return allBands.map((band) => {
                return (
                  <div
                    key={band.position}
                    className="band carousel-cell"
                    data-flickity-bg-lazyload={band.image.file.url}
                  >
                    <div className={`bandcontent ${band.name}`}>
                      {band.name !== 'bio' && (
                        <h1 className="bandname">{band.name}</h1>
                      )}
                      <div className={`textbox ${band.name}`}>
                        {band.name === 'bio' ? (
                          <div>
                            <p>{band.textDe}</p>
                          </div>
                        ) : band.name === 'Mo Meyer' ? (
                          <>
                            <h3 className="contentdesc">
                              Bass Player &amp; Musical Director
                            </h3>
                            <h3 className="contentlineup">
                              electric bass | synth bass | double bass
                            </h3>
                          </>
                        ) : (
                          <a
                            className="contentlink"
                            target="_blank"
                            rel="noreferrer"
                            href={band.website}
                          >
                            WWW
                          </a>
                        )}
                      </div>
                      {band.name === 'Mo Meyer' && (
                        <div className="sllinks">
                          <div className="slcontainer">
                            <a
                              style={{
                                background: `url(${facebookimg}) no-repeat`,
                                backgroundSize: '100%',
                              }}
                              target="_blank"
                              rel="noreferrer"
                              className="slink slfbook js-track-clicks"
                              data-category="link"
                              data-action="facebook"
                              href="https://www.facebook.com/mo.meyer.3"
                            />
                          </div>
                          <div className="slcontainer">
                            <a
                              style={{
                                background: `url(${instaimg}) no-repeat`,
                                backgroundSize: '100%',
                              }}
                              target="_blank"
                              rel="noreferrer"
                              className="slink slinstagram js-track-clicks"
                              data-category="link"
                              data-action="instagram"
                              href="https://www.instagram.com/mo.myer/"
                            />
                          </div>
                          <div className="slcontainer">
                            <a
                              style={{
                                background: `url(${emailimg}) no-repeat`,
                                backgroundSize: '100%',
                              }}
                              target="_blank"
                              rel="noreferrer"
                              className="slink slemail js-track-clicks"
                              data-category="link"
                              data-action="email"
                              href="mailto:mo@momeyer.ch"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            }}
          />
        </div>
      </div>
    )
  }
}

export default Bands

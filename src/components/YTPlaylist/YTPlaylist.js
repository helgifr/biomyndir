import React, { Component } from 'react';

import './YTPlaylist.css';

export default class YTPlaylist extends Component {

  render() {
    const { trailers } = this.props;

    if (!trailers) return null;

    const { results } = trailers;
    let trailerPlaylist = "";
    results.forEach(result => trailerPlaylist += "," + result.key);

    return (
      <React.Fragment>
        {results.length > 0 &&
          <div className="youtubevideowrap">
            <div className="video-container">
              <iframe
                title="trailers"
                width="640"
                height="352"
                align="center"
                src={`https://www.youtube.com/embed/?playlist=${trailerPlaylist}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }

}
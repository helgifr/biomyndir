import React, { Component } from 'react';

import Button from '../button';

import './Showtimes.css';

export default class Showtimes extends Component {

  render() {
    const { showtimes } = this.props;
    return (
      <div className="showtimes">
        {showtimes &&
          showtimes.map(theater => {
            const { name, id } = theater.cinema;
            const { schedule } = theater;
            return (
              <section key={id} className="theater-showtimes">
                <h1>{name}</h1>
                <div className="schedules">
                  {schedule.map((schedule, index) => {
                    return (
                      <a key={`${id}${index}`} href={schedule.purchase_url}>
                        <Button type="schedule">
                          <p>{schedule.time}</p>
                        </Button>
                      </a>
                    )
                  })
                  }
                </div>
              </section>
            )
          })
        }
      </div>
    );
  }

}
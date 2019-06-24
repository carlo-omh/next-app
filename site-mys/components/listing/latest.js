// @flow

import React from 'react'
// components
import Card from '../card'
import Slider from '../slider'

type Props = {
  latestListings: Object
}

const LatestListing = ({ latestListings }: Props) => {
  return (
    <div className="section-latest">
      <h3>Latest Listings</h3>
      <Slider className="latest">
        {Object.keys(latestListings).map((item, index) => (
          <Card
            key={index}
            listing={latestListings[item].obj}
            optimized={false}
          />
        ))}
      </Slider>
    </div>
  )
}

export default LatestListing

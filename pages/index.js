// @flow
import React from 'react'
import axios from 'axios'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

// components
import LatestListing from '../components/listing/latest'
import Header from '../components/header'
import Slider from '../components/slider'
import Card from '../components/card'

// config
import withData from '../config/withData';
import URL from '../src/urls'

const query = gql`
	query {
	  listing {
	    id
      name
      amount
	  }
	}
`

const Home = ({ featured, latest }) => {
  const featuredListings = featured.data.list
  const latestListings = latest.data.list

  const ListingFromGQL = () => {
    return (
      <Query
        query={query}
        fetchPolicy={'cache-and-network'}
      >
        {({ data: { listing } }) => {
          return (
            <div>
              <h1 style={{ color: '#CCCCCC' }}>Listings From Graphql</h1>
              <div>{listing[0].amount}</div>
            </div>
          );
        }}
      </Query>
    )
  }

  return (
    <div>
      <Header />
      <div>
        <div className='banner'>
          <img src="https://z.omh.sg/media/malaysia/home_banner.jpg" />
        </div>

        <div className="below-fold">
          <ListingFromGQL />

          <div className="section-featured">
            <h3>Featured Listings -- scroll down</h3>
            <Slider className="featured">
              {Object.keys(featuredListings).map((item, index) => (
                <Card
                  key={index}
                  listing={featuredListings[item].obj}
                  optimized
                />
              ))}
            </Slider>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <LazyLoadComponent>
            <LatestListing latestListings={latestListings} />
          </LazyLoadComponent>
        </div>
      </div>
      <style jsx>{`
          .banner > img {
            width: 100%;
          }
        `}</style>
    </div>
  )
}

Home.getInitialProps = async function () {
  const getFeatured = await axios('https://omh.sg/api/home/featured-listings')
  const featured = await getFeatured.data;

  const getLatest = await axios('https://omh.sg/api/home/latest-listings')
  const latest = await getLatest.data

  return {
    featured,
    latest
  }
}

export default withData(Home)
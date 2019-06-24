// @flow
import React from 'react';

type Props = {
  optimized: boolean;
  listing: Object;
}

export default function LatestListing({ listing, optimized }: Props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="card-header-avatar">
            {listing.user.profileUrl && <img src={listing.user.profileUrl} alt="agent-photo" />}
          </div>
          <div className="card-header-content">
            <div>{listing.amount}</div>
            <div>{listing.address.addressStreetName}</div>
          </div>
        </div>
        <div className="card-body" />
        <div className="card-body-content">
          <div>
            Number of Bedrooms: {listing.numberOfBedrooms}
          </div>
          <div>
            Number of Bedrooms: {listing.numberOfToilets}
          </div>
          <div>
            Size: {listing.size}
          </div>
        </div>
        <style jsx>{`
          .card {
            max-width: 345px;
            min-width: 345px;
            box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),
              0px 1px 1px 0px rgba(0,0,0,0.14),
              0px 2px 1px -1px rgba(0,0,0,0.12);
            border-radius: 4px;
          }
          .card-header {
            display: flex;
            padding: 16px;
            align-items: center;
          }
          .card-header-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            flex: 0 0 auto;
            margin-right: 16px;
          }
          .card-header-avatar img {
            max-width: 100%;
            min-height: 100%;
          }
          .card-header-content {
            flex: 1 1 auto;
          }
          .card-body {
            display: block;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url(${optimized ? 'https://a0.muscache.com/im/pictures/89d213eb-1904-44c9-b8ae-815e9935a52a.jpg?aki_policy=large' : listing.attachments && listing.attachments[0].url});
            height: 0;
            padding-top: 56.25%;
          }
          .card-body-content {
            padding: 16px;
          }
        `}</style>
      </div>
    </div>
  )
}
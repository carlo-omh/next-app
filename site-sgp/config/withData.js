import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

import URL from './endpoints'

const config = {
  link: new HttpLink({
    uri: URL.GRAPHQL,
  })
}

export default withData(config)
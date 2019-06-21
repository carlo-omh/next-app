import Link from 'next/link'

// config
import URL from '../../src/urls'

function About() {
  return (
    <div>
      <div>Welcome to About.js!!!!!</div>
      <Link href={URL.HOME}><a>Home</a></Link>
      <img src="https://z.omh.sg/media/home/find_a_home/Find-a-home-medium.jpg" />
    </div>
  )
}

export default About
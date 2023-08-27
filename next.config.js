/** @type {import('next').NextConfig} */
const nextConfig = {
   //output: 'export',
   async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}


module.exports = nextConfig

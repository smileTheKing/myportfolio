/** @type {import('next').NextConfig} */
const nextConfig = {
   //output: 'export',
  
    async redirects() {
      return [
        {
          source: '/*',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }



module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname:'https://img.freepik.com',
            port:''
            }
        ]
      }
}


module.exports = nextConfig

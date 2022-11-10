/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  	reactStrictMode: true,
  	swcMinify: true,
		images: {
			remotePatterns: [
				{
					protocol: "https",
					hostname: "**",
				},
			],
			unoptimized: true
		},
  	sassOptions: {
      includePaths: [path.join(__dirname, 'public/sass/')],
	},
}

module.exports = nextConfig




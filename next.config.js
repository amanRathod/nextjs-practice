const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {

  // npm run dev or next dev
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  // npm run build or next build
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  // npm run build or next build
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const env = {
      TITLE: (() => {
          if(isDev) return 'Title Dev'
          if(isProd) return 'Title Prod'
          if(isStaging) return 'Title Stg'
      })()
  }

  const basePath = '/app'


  const rewrites = () => {
      return [
          {
              source: '/heroes',
              destination: '/app'  
          }
      ]
  }

  const redirects = () => {
      return [
          {
              source: '/home',
              destination: '/heroes',
              permanent: true
          }
      ]
  }

  const headers = () => {
      return [
          {
              source: '/',
              headers: [
                  {
                      key: "x-custom-header-1",
                      value: "my custom header 1"
                  }
              ]
          }
      ]
  }

  const assetPrefix = isProd? 'https://cdnjs.cloudflare.com/ajax/libs/react/18.0.0-rc.0-next-f2a59df48-20211208/cjs/react-unstable-shared-subset.production.min.js': ''

  return {
      env,
      basePath,
      rewrites,
      redirects,
      headers,
      assetPrefix
  }
}


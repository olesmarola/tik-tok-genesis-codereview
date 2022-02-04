const { ESBuildMinifyPlugin } = require('esbuild-loader');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

function useEsbuildMinify(config, options) {
  const terserIndex = config.optimization.minimizer.findIndex(
    (minimizer) => minimizer.constructor.name === 'TerserPlugin'
  );
  if (terserIndex > -1) {
    config.optimization.minimizer.splice(terserIndex, 1, new ESBuildMinifyPlugin(options));
  }
}

function useEsbuildLoader(config, options) {
  const jsLoader = config.module.rules.find((rule) => rule.test && rule.test.test('.ts'));

  if (jsLoader) {
    jsLoader.use.loader = 'esbuild-loader';
    jsLoader.use.options = options;
  }
}

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: [
      'p16-sign-sg.tiktokcdn.com',
      'v16-web.tiktok.com',
      'p16-sign-va.tiktokcdn.com',
      'p77-sign-va-lite.tiktokcdn.com',
      'p77-sign-va.tiktokcdn.com',
      'p16-sign-va.tiktokcdn.com',
      'p77-sign-sg.tiktokcdn.com',
      'p19-sign.tiktokcdn-us.com',
      'p16-sign.tiktokcdn-us.com',
      'p77-sign-sg-lite.tiktokcdn.com',
    ],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    );

    useEsbuildMinify(config);

    useEsbuildLoader(config, {
      loader: 'tsx',
      target: 'es2015',
    });

    return config;
  },
});

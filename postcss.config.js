module.exports = { 
  // map: { inline: false },
  plugins: {
    'postcss-import': {},
    tailwindcss: { config: './tailwind.config.js' },
    autoprefixer: {},
    // ...(process.env.NODE_ENV === 'production') ? { cssnano: {} } : {}
  } 
}
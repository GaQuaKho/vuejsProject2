module.exports = {
  mode: 'jit',
  purge: [
    './src/*.{js,jsx,ts,tsx,vue}',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './src/**/**/*.{js,jsx,ts,tsx,vue}',
    './src/**/**/**/*.{js,jsx,ts,tsx,vue}',
    './src/**/**/**/**/*.{js,jsx,ts,tsx,vue}',
    './src/**/**/**/**/**/*.{js,jsx,ts,tsx,vue}',
    './src/**/**/**/**/**/**/*.{js,jsx,ts,tsx,vue}',
 
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

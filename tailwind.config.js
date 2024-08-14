/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      screens:{
        'phone' : '320px',
        'tabletp' : '768px'
      },
      colors:{
        'button-green' : '#18d26e',
        'hitam-custom' : '#040404',
        'abu-abu' : 'rgba(255, 255, 255, 0.08)',
        'abu-abu-2' : 'rgba(255, 255, 255, 0.1)',
      },
      maxHeight:{
        'pp' : '600px',
        'pp-about' : '400px'
      },
      minHeight:{
        'pp-large' : '720px',
        'pp' : '600px',
        'pp-about' : '520px'
      },
      width:{
        'desc-text' : '580px',
        '47-5%' : '47.5%'
      },
      minWidth:{
        'desc-about' : '700px',
      },
      maxWidth:{
        '47-5%' : '47.5%'
      }
    },
    plugins: [],
  }
}

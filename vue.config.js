// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        "/vega-example": {
          target: "http://172.21.0.3:5000",
          secure: false,
        }
      }
    }
  };


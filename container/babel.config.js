module.exports ={
    presets: [
         [
             "@babel/env",
             {
                //  useBuiltIns: "usage", // tirando isso para de causar erros de array.filter
                 targets: {
                     "browsers": [ ">0.25%"]
                 },
                 debug: true,
                 corejs: 3
             }, 
             // "@babel/preset-flow",
         ],
         "@babel/preset-react"
     ],
     plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true,
            }

        ],
     ]
 };
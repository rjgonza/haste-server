{

  "host": "10.80.6.100",
  "port": 15359,

  "keyLength": 4,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "redis",
    "host": "localhost",
    "port": 6379,
    "db": 2,
    "expire": 2592000
  },

  "documents": {
    "about": "./about.md"
  }

}

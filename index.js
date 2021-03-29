var express = require("express");
var app = express();
// var path = require("path");
var cors = require("cors");

const request = require("request");

// const API_KEY = "742897b4d91a5cb8bcef8c367176dc58";
const API_KEY = "97588ddc4a26e3091152aa0c9a40de22";

const BASE_URL = "https://api.themoviedb.org/3";

app.use(cors());

app.get("/search", (req, res) => {
  const query = req.query.query;
  if (query !== null && query.length >= 2) {
    const autoUrl = `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`;
    // console.log(autoUrl);
    request.get(autoUrl, (error, result, body) => {
      var jsonObj = JSON.parse(body);
      console.log("search for keyword", query);
      res.json(jsonObj);
    });
  }
});

app.get("/movie/trend", (req, res) => {
  const autoUrl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for trend");
    res.json(jsonObj);
  });
});

app.get("/movie/top_rated", (req, res) => {
  const autoUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for top rated movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/current", (req, res) => {
  const autoUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for current movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/popular", (req, res) => {
  const autoUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for popular movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/recommendation", (req, res) => {
  const movie_id = req.query.movie_id;
  const autoUrl = `${BASE_URL}/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for similar movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/similar", (req, res) => {
  const movie_id = req.query.movie_id;
  const autoUrl = `${BASE_URL}/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for similar movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/video", (req, res) => {
  const movie_id = req.query.movie_id;
  const autoUrl = `${BASE_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for video movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/detail", (req, res) => {
  const movie_id = req.query.movie_id;
  const autoUrl = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for detail movies!");
    res.json(jsonObj);
  });
});

app.get("/movie/review", (req, res) => {
  const movie_id = req.query.movie_id;
  const autoUrl = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    // console.log(autoUrl);
    res.json(jsonObj);
  });
});

app.get("/movie/cast", (req, res) => {
  const movie_id = req.query.movie_id;
  const autoUrl = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for cast movies!");
    res.json(jsonObj);
  });
});

app.get("/tv/trend", (req, res) => {
  const autoUrl = `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`;
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for trend tv");
    res.json(jsonObj);
  });
});

app.get("/tv/top_rated", (req, res) => {
  const autoUrl = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for top rated tv!");
    res.json(jsonObj);
  });
});

app.get("/tv/popular", (req, res) => {
  const autoUrl = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for popular tv!");
    res.json(jsonObj);
  });
});

app.get("/tv/recommendation", (req, res) => {
  const tvshow_id = req.query.tvshow_id;
  const autoUrl = `${BASE_URL}/tv/${tvshow_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for similar tv!");
    res.json(jsonObj);
  });
});

app.get("/tv/similar", (req, res) => {
  const tvshow_id = req.query.tvshow_id;
  const autoUrl = `${BASE_URL}/tv/${tvshow_id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for similar tv!");
    res.json(jsonObj);
  });
});

app.get("/tv/video", (req, res) => {
  const tvshow_id = req.query.tvshow_id;
  const autoUrl = `${BASE_URL}/tv/${tvshow_id}/videos?api_key=${API_KEY}&language=en-US&page=1`;
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for video tvs!");
    res.json(jsonObj);
  });
});

app.get("/tv/detail", (req, res) => {
  const tvshow_id = req.query.tvshow_id;
  const autoUrl = `${BASE_URL}/tv/${tvshow_id}?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for detail tvs!");
    res.json(jsonObj);
  });
});

app.get("/tv/review", (req, res) => {
  const tvshow_id = req.query.tvshow_id;
  const autoUrl = `${BASE_URL}/tv/${tvshow_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for reviews tvs!");
    res.json(jsonObj);
  });
});

app.get("/tv/cast", (req, res) => {
  const tvshow_id = req.query.tvshow_id;
  const autoUrl = `${BASE_URL}/tv/${tvshow_id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for cast movies!");
    res.json(jsonObj);
  });
});

app.get("/person/search", (req, res) => {
  const person_id = req.query.person_id;
  const autoUrl = `${BASE_URL}/person/${person_id}?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for cast person!");
    res.json(jsonObj);
  });
});

app.get("/person/external_id", (req, res) => {
  const person_id = req.query.person_id;
  const autoUrl = `${BASE_URL}/person/${person_id}/external_ids?api_key=${API_KEY}&language=en-US&page=1`;
  // console.log(autoUrl);
  request.get(autoUrl, (error, result, body) => {
    var jsonObj = JSON.parse(body);
    console.log("search for external_id person!");
    res.json(jsonObj);
  });
});

app.listen(4000, () => {
  console.log("Backend is listening on port 4000");
});

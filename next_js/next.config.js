/** @type {import('next').NextConfig} */

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"], // 이미지를 url로 가져올때 추가해야될 코드
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;

// next에서 api key를 숨기는법
// source를 찾는다.
// 유저가 어딘가로 이동하면 form이라는 destination을 보낸다.
// redirection이 영구적인지 아닌지에 따라서 정보 기억 여부 결정
// 리다이렉트는 특정 url로 가면 다른 특정 url로 이동할 수 있도록 하는 것
// 사실 .env 파일 만들어서 사용하는게 제일 편하다.

/*async redirects() {
  return [
    {
      source: "/old/:path*",
      destination: "/new/:path*",
      permanent: false,
    }
  ]
} */

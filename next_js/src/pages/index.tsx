import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Image from "next/image";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}

interface HomeProps {
  results: Movie[];
}

export default function Home({ results }: HomeProps) {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`api/movies`);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
              layout="fill"
              objectFit="cover" // objectFit prop 추가
            />
          </div>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 10px;
          gap: 15px;
        }
        .movie div {
          position: relative; // position 속성 추가
          width: 100%;
          height: 300px;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

        .movie div:hover {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies`)
//   ).json();

//   return {
//     props: {
//       results,
//     },
//   };
// }

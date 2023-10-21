import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Image from "next/image";

interface Movie {
  id: number;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`api/movies`);
      const data = await response.json();
      setMovies(data.results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie"
            width={230}
            height={250}
          />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 10px;
          gap: 10px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
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

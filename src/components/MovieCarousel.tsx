
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import MovieCard, { MovieProps } from '@/components/MovieCard';

interface MovieCarouselProps {
  title: string;
  movies: MovieProps[];
}

const MovieCarousel = ({ title, movies }: MovieCarouselProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      <Carousel 
        className="w-full overflow-hidden"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {movies.map((movie) => (
            <CarouselItem key={movie.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <MovieCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default MovieCarousel;

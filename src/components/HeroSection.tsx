
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';

interface HeroProps {
  id: string;
  title: string;
  description: string;
  backdropUrl: string;
  year: number;
  rating: number;
  genres: string[];
}

const HeroSection = ({ movie }: { movie: HeroProps }) => {
  const handleWatchClick = () => {
    toast({
      title: "Функция в разработке",
      description: "Просмотр фильмов скоро будет доступен",
    });
  };

  return (
    <div className="relative min-h-[60vh] w-full overflow-hidden md:min-h-[70vh]">
      {/* Фоновое изображение с градиентом */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      
      {/* Контент */}
      <div className="container relative z-10 flex h-full flex-col items-start justify-end pb-10 pt-20">
        <div className="max-w-2xl space-y-4">
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Badge key={genre} variant="secondary" className="bg-secondary/80 backdrop-blur-sm">
                {genre}
              </Badge>
            ))}
          </div>
          
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            {movie.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" className="h-4 w-4" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Star" className="h-4 w-4 text-yellow-400" />
              <span>{movie.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-base text-muted-foreground md:text-lg">
            {movie.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button onClick={handleWatchClick} size="lg" className="gap-2">
              <Icon name="Play" />
              Смотреть
            </Button>
            <Button onClick={handleWatchClick} variant="secondary" size="lg" className="gap-2">
              <Icon name="Plus" />
              В избранное
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

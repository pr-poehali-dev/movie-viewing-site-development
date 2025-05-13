
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Icon from '@/components/ui/icon';

export interface MovieProps {
  id: string;
  title: string;
  posterUrl: string;
  year: number;
  rating: number;
  genres: string[];
}

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  return (
    <Card className="group overflow-hidden border-0 bg-card/80 transition-all duration-300 hover:scale-[1.03] hover:bg-card">
      <div className="relative">
        <AspectRatio ratio={2/3} className="bg-muted/30">
          <img 
            src={movie.posterUrl} 
            alt={movie.title}
            className="h-full w-full object-cover transition-all"
            loading="lazy"
          />
          
          <div className="absolute top-2 right-2">
            <Badge className="bg-primary/90 text-primary-foreground">
              <Icon name="Star" className="mr-1 h-3 w-3 text-yellow-400" />
              {movie.rating.toFixed(1)}
            </Badge>
          </div>
        </AspectRatio>
      </div>
      
      <CardContent className="p-3">
        <h3 className="line-clamp-1 font-medium">{movie.title}</h3>
        <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
          <span>{movie.year}</span>
          {movie.genres.length > 0 && (
            <span className="line-clamp-1 text-xs">{movie.genres[0]}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;


import MainNavbar from '@/components/MainNavbar';
import HeroSection from '@/components/HeroSection';
import MovieCarousel from '@/components/MovieCarousel';
import { featuredMovie, popularMovies, newMovies, classicMovies } from '@/data/mock-data';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      
      <main>
        <HeroSection movie={featuredMovie} />
        
        <div className="container py-10 space-y-16">
          <MovieCarousel 
            title="Популярные фильмы" 
            movies={popularMovies} 
          />
          
          <MovieCarousel 
            title="Новинки" 
            movies={newMovies} 
          />
          
          <MovieCarousel 
            title="Классика кино" 
            movies={classicMovies} 
          />
        </div>
      </main>
      
      <footer className="bg-muted/20 py-10">
        <div className="container">
          <div className="mb-6 flex items-center gap-2">
            <Icon name="Film" className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold tracking-wider">КиноМаг</span>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-3 text-sm font-semibold">О проекте</h3>
              <p className="text-sm text-muted-foreground">
                КиноМаг — это демо-проект сайта для просмотра фильмов с современным интерфейсом. 
                Разработан с использованием React, TypeScript и Tailwind CSS.
              </p>
            </div>
            
            <div>
              <h3 className="mb-3 text-sm font-semibold">Разделы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Фильмы</li>
                <li>Сериалы</li>
                <li>Новинки</li>
                <li>Подборки</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-3 text-sm font-semibold">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Политика конфиденциальности</li>
                <li>Условия использования</li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-3 text-sm font-semibold">Подписывайтесь</h3>
              <div className="flex gap-4">
                <Icon name="Facebook" className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <Icon name="Instagram" className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <Icon name="Twitter" className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <Icon name="Youtube" className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <p className="text-center text-xs text-muted-foreground">
            © 2025 КиноМаг. Все права защищены. Это демо-проект.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

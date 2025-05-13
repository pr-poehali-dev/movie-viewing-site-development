
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';

const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Добавляем прозрачность к навбару при скролле
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const handleLoginClick = () => {
    toast({
      title: "Функция в разработке",
      description: "Регистрация и вход скоро будут доступны!",
    });
  };

  return (
    <header className={`fixed z-50 w-full transition-colors duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Бренд */}
        <div className="flex items-center gap-2">
          <Icon name="Film" className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold tracking-wider">КиноМаг</span>
        </div>

        {/* Навигация десктоп */}
        <nav className="hidden gap-6 md:flex">
          <Button variant="link" className="text-foreground">Главная</Button>
          <Button variant="link" className="text-muted-foreground">Фильмы</Button>
          <Button variant="link" className="text-muted-foreground">Сериалы</Button>
          <Button variant="link" className="text-muted-foreground">Новинки</Button>
        </nav>

        {/* Поиск и действия */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Input 
              type="search"
              placeholder="Поиск..."
              className="w-[200px] rounded-full bg-muted/50 px-4 pr-8 focus-visible:bg-background"
            />
            <Icon 
              name="Search" 
              className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
          </div>
          
          <Button onClick={handleLoginClick} variant="secondary">
            Войти
          </Button>
          
          {/* Мобильное меню */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col gap-4">
                <div className="relative">
                  <Input 
                    type="search"
                    placeholder="Поиск..."
                    className="w-full rounded-full bg-muted/50 px-4 pr-8"
                  />
                  <Icon 
                    name="Search" 
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  />
                </div>
                
                <nav className="flex flex-col items-start gap-2">
                  <Button variant="ghost" className="w-full justify-start">Главная</Button>
                  <Button variant="ghost" className="w-full justify-start">Фильмы</Button>
                  <Button variant="ghost" className="w-full justify-start">Сериалы</Button>
                  <Button variant="ghost" className="w-full justify-start">Новинки</Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;

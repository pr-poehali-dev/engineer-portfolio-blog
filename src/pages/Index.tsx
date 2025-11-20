import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Медиа Эффект",
      position: "Инженер технической поддержки",
      period: "2021 - 2022",
      duration: "1 год",
      description: "Техническая поддержка программных продуктов, развертывание систем, решение инцидентов первой линии"
    },
    {
      company: "Клируэй Текнолоджис",
      position: "Инженер по внедрению и сопровождению ПО",
      period: "2022 - 2025",
      duration: "3 года",
      description: "Внедрение корпоративных систем, миграция данных, интеграция с существующей инфраструктурой, обучение персонала"
    },
    {
      company: "ТехноСофт",
      position: "Ведущий инженер DevOps",
      period: "2025 - Настоящее время",
      duration: "Текущая позиция",
      description: "Автоматизация CI/CD процессов, контейнеризация приложений, мониторинг производительности, оптимизация инфраструктуры"
    }
  ];

  const services = [
    {
      icon: "Server",
      title: "Развертывание систем",
      description: "Установка и настройка серверного ПО, конфигурация окружений разработки и продакшена"
    },
    {
      icon: "Settings",
      title: "Сопровождение ПО",
      description: "Мониторинг работоспособности систем, устранение неполадок, обновление версий"
    },
    {
      icon: "Database",
      title: "Миграция данных",
      description: "Перенос информации между системами, обеспечение целостности данных при переходе"
    },
    {
      icon: "Code",
      title: "Автоматизация процессов",
      description: "Разработка скриптов и пайплайнов для CI/CD, оптимизация рутинных операций"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-heading font-bold text-primary">
            В. Порфенов
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors blur-text">О себе</a>
            <a href="#experience" className="hover:text-primary transition-colors blur-text">Опыт</a>
            <a href="#services" className="hover:text-primary transition-colors blur-text">Услуги</a>
            <a href="#blog" className="hover:text-primary transition-colors blur-text">Блог</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 blur-text">
              Вячеслав Порфенов
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 blur-text">
              Инженер по развертыванию и сопровождению программных продуктов
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Badge variant="secondary" className="text-lg px-6 py-2 blur-text">
                DevOps
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 blur-text">
                CI/CD
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 blur-text">
                Автоматизация
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 blur-text">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 blur-text">
              Закончил Московский государственный университет по специальности 
              "Инженер по развертыванию и сопровождению программных продуктов". 
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed blur-text">
              Увлекаюсь компьютерными технологиями, системной архитектурой и оптимизацией процессов. 
              За годы работы накопил обширный опыт в развертывании корпоративных систем, 
              автоматизации DevOps процессов и обеспечении надежности ИТ-инфраструктуры.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 blur-text">
            Опыт работы
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, idx) => (
              <Card 
                key={idx} 
                className="p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-border bg-card"
                style={{ 
                  animationDelay: `${idx * 0.2}s`,
                }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2 blur-text">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-foreground blur-text">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground blur-text">{exp.period}</p>
                    <Badge variant="outline" className="mt-2">{exp.duration}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed blur-text">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 blur-text">
            Услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border-border bg-card group"
                style={{ 
                  animationDelay: `${idx * 0.15}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold mb-3 blur-text">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed blur-text">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="blog" 
        className="py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)`
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 2px, transparent 2px, transparent 10px)`,
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 blur-text">
            Личный блог
          </h2>
          <Card className="max-w-4xl mx-auto p-12 bg-card/95 backdrop-blur-sm border-2 border-primary/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground border-2 border-primary/30 blur-text hover:border-primary transition-colors">
                <div className="text-center">
                  <Icon name="User" size={64} className="mx-auto mb-2" />
                  <p className="text-sm">Ваше фото</p>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold mb-4 blur-text">
                  Добро пожаловать в мой блог!
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 blur-text">
                  Здесь я делюсь опытом в области развертывания программных систем, 
                  рассказываю о лучших практиках DevOps и делюсь историями из практики. 
                  Подписывайтесь на мой Telegram канал для получения свежих статей и инсайтов!
                </p>
                <div className="w-32 h-32 rounded-xl bg-muted/50 flex items-center justify-center border-2 border-dashed border-primary/40 blur-text hover:border-primary transition-colors">
                  <div className="text-center text-muted-foreground text-sm">
                    <Icon name="QrCode" size={48} className="mx-auto mb-2" />
                    <p>QR Telegram</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="blur-text">© 2025 Вячеслав Порфенов. Инженер по развертыванию и сопровождению ПО</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;

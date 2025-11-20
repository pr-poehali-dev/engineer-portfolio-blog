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
            Инженер Live
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О себе</a>
            <a href="#experience" className="hover:text-primary transition-colors">Опыт</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
              Инженер по развертыванию и сопровождению<br />программных продуктов
            </h1>
            <div className="flex gap-4 justify-center items-center flex-wrap" style={{ animationDelay: '0.3s' }}>
              <Badge variant="secondary" className="text-lg px-6 py-2 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                DevOps
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                CI/CD
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
                Автоматизация
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 animate-slide-up">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              Закончил Московский государственный университет по специальности 
              "Инженер по развертыванию и сопровождению программных продуктов". 
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              Увлекаюсь компьютерными технологиями, системной архитектурой и оптимизацией процессов. 
              За годы работы накопил обширный опыт в развертывании корпоративных систем, 
              автоматизации DevOps процессов и обеспечении надежности ИТ-инфраструктуры.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 animate-fade-in">
            Опыт работы
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <Card 
                key={idx} 
                className="group relative h-64 overflow-hidden border-border bg-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-all duration-500 group-hover:translate-y-[-100%]">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {exp.company}
                  </h3>
                  <Badge variant="outline">{exp.duration}</Badge>
                </div>
                <div className="absolute inset-0 p-6 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-center bg-card/95">
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    {exp.position}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            Услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="group relative h-56 overflow-hidden border-border bg-card hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-all duration-500 group-hover:translate-y-[-100%]">
                  <div className="bg-primary/10 p-4 rounded-xl mb-4">
                    <Icon name={service.icon} size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">
                    {service.title}
                  </h3>
                </div>
                <div className="absolute inset-0 p-8 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center bg-card/95">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 animate-fade-in">
            Личный блог
          </h2>
          <Card className="max-w-4xl mx-auto p-12 bg-card/95 backdrop-blur-sm border-2 border-primary/20 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground border-2 border-primary/30 hover:border-primary transition-colors">
                <div className="text-center">
                  <Icon name="User" size={64} className="mx-auto mb-2" />
                  <p className="text-sm">Ваше фото</p>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold mb-2 text-primary">
                  Вячеслав Порфенов
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Инженер по развертыванию и сопровождению программных продуктов
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Здесь я делюсь опытом в области развертывания программных систем, 
                  рассказываю о лучших практиках DevOps и делюсь историями из практики. 
                  Подписывайтесь на мой Telegram канал для получения свежих статей и инсайтов!
                </p>
                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-primary/40 hover:border-primary transition-colors">
                  <img 
                    src="https://cdn.poehali.dev/projects/1084d57b-4e46-46c4-86af-f00dd96417e2/files/43aedc7b-5ded-43e5-8ca8-b443d56edadb.jpg" 
                    alt="QR Telegram"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border relative">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Вячеслав Порфенов. Инженер по развертыванию и сопровождению ПО</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
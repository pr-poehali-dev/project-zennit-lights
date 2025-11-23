import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Зенитные фонари',
      subtitle: 'Естественное освещение промышленных зданий',
      content: 'Зенитные фонари — это современная система естественного освещения для крупных промышленных, складских и коммерческих объектов. Они представляют собой светопрозрачные конструкции, устанавливаемые в кровлю здания, которые обеспечивают максимальное проникновение дневного света внутрь помещений. Использование зенитных фонарей позволяет значительно снизить энергопотребление на искусственное освещение, создать комфортные условия для работы персонала и улучшить микроклимат внутри здания.',
      image: 'https://cdn.poehali.dev/projects/0f5a4d98-2d8e-44c0-9e49-6306aebc0cde/files/441e061b-065d-417b-a8d9-a5e937549e9d.jpg',
      type: 'intro'
    },
    {
      title: 'Типы зенитных фонарей',
      subtitle: 'Разнообразие конструкций',
      types: [
        { name: 'Точечные', desc: 'Компактные конструкции для локального освещения определенных зон' },
        { name: 'Ленточные', desc: 'Протяженные фонари вдоль всей длины крыши для равномерного освещения' },
        { name: 'Купольные', desc: 'Обеспечивают максимальное светопропускание и устойчивость к нагрузкам' },
        { name: 'Пирамидальные', desc: 'Эстетичное архитектурное решение с эффективным отводом осадков' }
      ],
      image: 'https://cdn.poehali.dev/projects/0f5a4d98-2d8e-44c0-9e49-6306aebc0cde/files/c710eddb-9922-464c-9204-5f529023659f.jpg',
      type: 'types'
    },
    {
      title: 'Преимущества',
      subtitle: 'Почему выбирают зенитные фонари',
      benefits: [
        { icon: 'Sun', text: 'До 70% экономии на освещении и снижение затрат на электроэнергию', color: 'text-amber-500' },
        { icon: 'Leaf', text: 'Экологичность, сокращение выбросов CO₂ и энергоэффективность', color: 'text-green-500' },
        { icon: 'Wind', text: 'Естественная вентиляция помещений через открывающиеся секции', color: 'text-sky-500' },
        { icon: 'TrendingUp', text: 'Повышение производительности труда благодаря комфортному освещению', color: 'text-blue-500' }
      ],
      image: 'https://cdn.poehali.dev/projects/0f5a4d98-2d8e-44c0-9e49-6306aebc0cde/files/441e061b-065d-417b-a8d9-a5e937549e9d.jpg',
      type: 'benefits'
    },
    {
      title: 'Процесс установки',
      subtitle: 'Этапы монтажа зенитных фонарей',
      steps: [
        { num: '01', title: 'Проектирование', desc: 'Детальный расчет нагрузок, светопропускания и выбор оптимальной конструкции' },
        { num: '02', title: 'Подготовка кровли', desc: 'Усиление несущих конструкций и подготовка проемов в кровле' },
        { num: '03', title: 'Монтаж конструкций', desc: 'Установка несущих рам, светопрозрачного заполнения и фурнитуры' },
        { num: '04', title: 'Герметизация', desc: 'Надежная защита от протечек, установка водоотводных систем' }
      ],
      image: 'https://cdn.poehali.dev/projects/0f5a4d98-2d8e-44c0-9e49-6306aebc0cde/files/c8b5f1d0-f9ff-49ec-a4c0-65731a9d0c33.jpg',
      type: 'installation'
    },
    {
      title: 'Примеры применения',
      subtitle: 'Реализованные проекты',
      examples: [
        'Производственные цеха и заводы',
        'Складские комплексы и логистические центры',
        'Спортивные сооружения и бассейны',
        'Торговые и выставочные центры',
        'Аэропорты и вокзалы'
      ],
      image: 'https://cdn.poehali.dev/projects/0f5a4d98-2d8e-44c0-9e49-6306aebc0cde/files/c710eddb-9922-464c-9204-5f529023659f.jpg',
      type: 'examples'
    },
    {
      title: 'Спасибо за внимание!',
      subtitle: 'Зенитные фонари — решение для современных зданий',
      conclusion: 'Зенитные фонари представляют собой высокоэффективное решение для естественного освещения и вентиляции промышленных и коммерческих объектов. Инвестиции в качественные системы зенитного освещения окупаются за счет существенной экономии электроэнергии, улучшения условий труда и повышения стоимости объекта недвижимости.',
      image: 'https://cdn.poehali.dev/projects/0f5a4d98-2d8e-44c0-9e49-6306aebc0cde/files/441e061b-065d-417b-a8d9-a5e937549e9d.jpg',
      type: 'ending'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <Card className="border-none shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="p-12 flex flex-col justify-between bg-white">
                <div>
                  <div className="mb-8">
                    <h1 className="text-5xl font-bold text-slate-800 mb-3 font-['Montserrat']">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-sky-600 font-['Open_Sans']">
                      {slide.subtitle}
                    </p>
                  </div>

                  {slide.type === 'intro' && (
                    <p className="text-lg text-slate-600 leading-relaxed font-['Open_Sans']">
                      {slide.content}
                    </p>
                  )}

                  {slide.type === 'types' && (
                    <div className="space-y-4">
                      {slide.types?.map((type, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800 font-['Montserrat']">{type.name}</h3>
                            <p className="text-slate-600 text-sm font-['Open_Sans']">{type.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.type === 'benefits' && (
                    <div className="space-y-6">
                      {slide.benefits?.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <Icon name={benefit.icon as any} className={`${benefit.color} flex-shrink-0`} size={32} />
                          <p className="text-lg text-slate-700 font-['Open_Sans']">{benefit.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.type === 'installation' && (
                    <div className="space-y-5">
                      {slide.steps?.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="text-4xl font-bold text-sky-200 font-['Montserrat']">{step.num}</span>
                          <div>
                            <h3 className="font-bold text-slate-800 mb-1 font-['Montserrat']">{step.title}</h3>
                            <p className="text-slate-600 font-['Open_Sans']">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.type === 'examples' && (
                    <ul className="space-y-3">
                      {slide.examples?.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-lg text-slate-700 font-['Open_Sans']">
                          <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0" size={24} />
                          {example}
                        </li>
                      ))}
                    </ul>
                  )}

                  {slide.type === 'ending' && (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-lg text-slate-600 leading-relaxed font-['Open_Sans'] text-center">
                        {slide.conclusion}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-8">
                  <Button 
                    onClick={prevSlide}
                    variant="outline"
                    size="lg"
                    className="gap-2"
                  >
                    <Icon name="ChevronLeft" size={20} />
                    Назад
                  </Button>

                  <div className="flex gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === currentSlide ? 'bg-sky-500 w-8' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button 
                    onClick={nextSlide}
                    size="lg"
                    className="gap-2 bg-sky-500 hover:bg-sky-600"
                  >
                    Далее
                    <Icon name="ChevronRight" size={20} />
                  </Button>
                </div>
              </div>

              <div className="relative bg-slate-200 overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-tl-2xl">
                  <p className="text-sm font-bold text-slate-600 font-['Montserrat']">
                    {currentSlide + 1} / {slides.length}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
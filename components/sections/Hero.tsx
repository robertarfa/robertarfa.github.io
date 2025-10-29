import Container from '@/components/ui/Container';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gray-900">
      {/* Imagem de fundo com overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>
      
      <Container className="relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            {content.subtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300">
              {content.cta}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

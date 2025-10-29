import Container from '@/components/ui/Container';

interface AboutProps {
  content: {
    title: string;
    description: string;
    features: string[];
  };
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {content.description}
            </p>
            <ul className="space-y-4">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
            <span className="text-6xl">🌍</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
}

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container size="medium">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600">
            {content.subtitle}
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {content.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {content.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {content.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              required
            />
          </div>

          <div className="text-center">
            <Button type="submit" size="large">
              {content.form.submit}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

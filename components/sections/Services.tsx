interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesProps {
  content: {
    title: string;
    subtitle: string;
    services: Service[];
  };
}

export default function Services({ content }: ServicesProps) {
  return (
    <section id='services' className='py-5 bg-light'>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h2 className='fw-bold text-dark mb-4' style={{ fontSize: '2.5rem' }}>
            {content.title}
          </h2>
          <p
            className='text-dark mx-auto'
            style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8' }}
          >
            {content.subtitle}
          </p>
        </div>

        <div className='row g-4 mt-4'>
          {content.services.map((service, index) => (
            <div key={index} className='col-md-4'>
              <div className='text-center px-3'>
                <h3 className='h5 fw-bold text-dark mb-3'>{service.title}</h3>
                <p className='text-dark' style={{ lineHeight: '1.8' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

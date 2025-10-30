interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Index({ content }: HeroProps) {
  return (
    <section
      className='position-relative d-flex align-items-center justify-content-center'
      style={{ minHeight: '600px', backgroundColor: '#f5f5f5' }}
    >
      {/* Imagem de fundo com pessoas trabalhando */}
      <div
        className='position-absolute top-0 start-0 w-100 h-100'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      >
        <div
          className='position-absolute top-0 start-0 w-100 h-100'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        ></div>
      </div>

      <div className='container position-relative' style={{ zIndex: 1 }}>
        <div className='row'>
          <div className='col-12'>
            <div className='text-center mx-auto' style={{ maxWidth: '900px' }}>
              <h1
                className='fw-bold text-white mb-4'
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.2',
                  fontWeight: '700',
                }}
              >
                {content.title}
              </h1>
              <p
                className='text-white mb-5'
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  lineHeight: '1.6',
                  maxWidth: '800px',
                  margin: '0 auto 2rem',
                }}
              >
                {content.subtitle}
              </p>
              <div className='d-flex gap-3 justify-content-center'>
                <button
                  className='btn btn-lg rounded-pill px-5 py-3'
                  style={{
                    backgroundColor: '#ff6b00',
                    color: 'white',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                  }}
                >
                  {content.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

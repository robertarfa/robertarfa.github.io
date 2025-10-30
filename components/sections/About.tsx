interface AboutProps {
  content: {
    title: string;
    description: string;
    features: string[];
  };
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="display-4 fw-bold text-dark mb-4">
              {content.title}
            </h2>
            <p className="lead text-secondary mb-4">
              {content.description}
            </p>
            <ul className="list-unstyled">
              {content.features.map((feature, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                  <svg
                    className="text-primary flex-shrink-0 me-3 mt-1"
                    width="24"
                    height="24"
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
                  <span className="text-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <div 
              className="bg-gradient rounded-3 d-flex align-items-center justify-content-center"
              style={{ 
                height: '400px',
                background: 'linear-gradient(135deg, #cfe2ff 0%, #9ec5fe 100%)'
              }}
            >
              <span style={{ fontSize: '6rem' }}>🌍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

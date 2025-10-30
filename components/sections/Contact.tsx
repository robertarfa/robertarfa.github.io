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
    <section id='contact' className='py-5 bg-white'>
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='text-center mb-5'>
              <h2 className='display-4 fw-bold text-dark mb-3'>
                {content.title}
              </h2>
              <p className='lead text-secondary'>{content.subtitle}</p>
            </div>

            <form>
              <div className='mb-4'>
                <label htmlFor='name' className='form-label fw-semibold'>
                  {content.form.name}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='name'
                  name='name'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='email' className='form-label fw-semibold'>
                  {content.form.email}
                </label>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  id='email'
                  name='email'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='message' className='form-label fw-semibold'>
                  {content.form.message}
                </label>
                <textarea
                  className='form-control form-control-lg'
                  id='message'
                  name='message'
                  rows={5}
                  required
                />
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  className='btn btn-primary-orange btn-lg rounded-pill px-5 py-3'
                >
                  {content.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react'
import Link from 'next/link'
import './Services.css'
import './PageIntro.css'
import './InnerBanner.css'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const servicesData = [
  {
    title: 'Orthopaedics',
    description: 'Precision treatment. Personalised relief.',
    image: '/services/img-Orthopaedics-Traumatology.jpg',
    alt: 'Orthopaedics Traumatology img',
    items: [
      'Treatment of Fractures and Dislocations',
      'Interventional (Non-Operative) Spine & Musculoskeletal Pain Management',
      'Joint Preservation, Regenerative Therapy & Ozone Therapy',
      'Joint Replacement Surgery (Arthroplasty)',
      'Keyhole Surgery for Joint Injuries (Arthroscopy)',
      'Spine Surgery',
    ],
    isColorSection: false,
    link: '/services/orthopaedics-and-traumatology',
    // faq: "/faq",
    faq: '/faq?topic=Orthopaedic%20Rheumatology',
  },
  {
    title: 'Ozone & Hydrogen Therapy',
    description: 'Reduce Inflammation. Promote Healing.',
    image: '/services/img-Physiotherapy.jpg',
    alt: 'Obstetrics Gynaecology img',
    items: [
      'General Medicine',
      'Neurology',
      'Trauma and Rheumatology',
      'Phlebology and Angiology',
      'Cardiology',
      'Immunology',
      'Geriatrics',
      'Ophthalmology',
      'Dentistry',
      'Otolaryngology and ENT',
      'Gynaecology',
      'Skin / Aesthetic Conditions',
      'Other conditions',
    ],
    isColorSection: true,
    link: '/services/ozone-and-hydrogen-therapy',
  },
  {
    title: 'Obstetric & Gynaecological Surgeries',
    description: "Complete Women's Wellness, From Adolescence to Motherhood & Beyond",
    image: '/services/img-Obstetrics-Gynaecology.jpg',
    alt: 'Obstetrics Gynaecology img',
    items: [
      'Adolescent Health Care',
      'Basic Infertility Investigations and Treatment',
      'Pre-natal Counselling',
      'Pregnancy and Maternal Health',
      'Normal Labour & Caesarean Section',
      'Contraceptive Services',
      'Gynaecological Services',
      'Laparoscopic and Hysteroscopic Surgery',
      'Fetal Surveillance Scans (in association with Fetovision, Coimbatore)',
      'Genetic Counselling (in association with Fetovision, Coimbatore)',
    ],
    isColorSection: false,
    link: '/services/obstetrics-and-gynaecology',
  },
]

export default async function Page({ params: paramsPromise }: Args) {
  //const { slug = '' } = await paramsPromise

  return (
    <>
      <InnerBanner
        title="From Fractures to Families: Expert Ortho, Maternal & Women's Health, and Plastic Surgery"
        description="From fractures and joint pain to childbirth and reconstructive surgery, our specialists walk 
                with you every step. Orthopaedics, trauma, obstetrics & gynaecology, and plastic surgery-expert care under one compassionate roof."
        desktopImage="/services/banner-services.jpg"
        faq=""
        links={[{ type: 'appointment', label: 'Book an Appointment', href: '/services' }]}
      />

      <PageIntro
        title="Introductory Overview"
        description={
          <>
            At <strong>Bethel Hospital</strong>, we believe that expert care is not just about
            treating a condition - it is about restoring comfort, confidence, and quality of life.
            For over two decades, we have combined advanced orthopaedic treatments with a deeply
            human approach to healing. At Bethel, your healing is personal - and our commitment is
            lifelong.
          </>
        }
      />

      {servicesData.map((service, index) => (
        <section
          key={index}
          className={service.isColorSection ? 'services-color-sec' : 'services-black-sec'}
        >
          <div className="custom-container">
            {index === 0 && <h2 className="services-head">What We Treat</h2>}

            <div className="services-black-card-flex">
              {/* Alternate image position */}
              {index % 2 === 0 ? (
                <>
                  <div className="services-black-card-img">
                    <img src={service.image} alt={service.alt} />
                  </div>
                  <ServiceContent {...service} />
                </>
              ) : (
                <>
                  <ServiceContent {...service} />
                  <div className="services-black-card-img">
                    <img src={service.image} alt={service.alt} />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

type Props = {
  title: string
  description: string
  items: string[]
  link: string
  faq?: string
}

const ServiceContent: React.FC<Props> = ({ title, description, items, link, faq }) => {
  return (
    <div className="services-black-card-cont">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className="services-list">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {faq ? (
        // If faq is provided, group buttons in a row
        <div className="btn-row">
          <Link href={link} className="exp-btn">
            Explore
          </Link>
          <a href={faq} className="exp-btn faq-btn">
            FAQ
          </a>
        </div>
      ) : (
        // Otherwise, show only Explore button
        <Link href={link} className="exp-btn">
          Explore
        </Link>
      )}
    </div>
  )
}

type Intro = {
  title: string
  description: React.ReactNode
}
const PageIntro: React.FC<Intro> = ({ title, description }) => {
  return (
    <div className="pageintroSecBg">
      <div className="custom-container">
        <div className="pageintroH2">
          <h2>{title}</h2>
        </div>
        <div className="pageintroDesc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

type LinkItem = {
  type: string
  href: string
  label: string
}
type Banner = {
  title: string
  description: string
  links: LinkItem[]
  faq: string
  desktopImage: string
}
const InnerBanner: React.FC<Banner> = ({ title, description, links, faq, desktopImage }) => {
  return (
    <div className="inner-banner">
      <div className="banner-image-wrapper">
        <img src={desktopImage} alt="Desktop Banner" className="banner-img desktop-banner" />
      </div>

      <div className="inner-banner-cont custom-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="common-btn">
          {links.map((link, index) =>
            link.type === 'appointment' ? (
              <Link href={link.href} key={index} className="appointment-btn">
                {link.label}
              </Link>
            ) : (
              <Link href={link.href} key={index} className="appointment-btn">
                {link.label}
              </Link>
            ),
          )}
          {faq && (
            <a href={faq} className="appointment-btn">
              FAQ
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

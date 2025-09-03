import type { StaticImageData } from 'next/image'
import { cn } from '@/utilities/ui'
import React from 'react'

//import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'
import './HomeStatistics.css'

type Props = {
  heading: string
  happyPatients: string
  orthoSurgeries: string
  normalDeliveries: string
  obstetricSurgeries: string
  imgClassName?: string
  staticImage?: StaticImageData
  happyPatientsImg: string
  orthoSurgeriesImg: string
  normalDeliveriesImg: string
  obstetricSurgeriesImg: string
}

export const HomeStatistics: React.FC<Props> = (props) => {
  const {
    heading,
    happyPatients,
    orthoSurgeries,
    normalDeliveries,
    obstetricSurgeries,
    imgClassName,
    staticImage,
    happyPatientsImg,
    orthoSurgeriesImg,
    normalDeliveriesImg,
    obstetricSurgeriesImg,
  } = props
  return (
    <>
      <section>
        <div className="PatientAdmissionSecBg">
          <div className="custom-container">
            <div className="PatientAdmissionH2">
              <h2>{heading}</h2>
            </div>
            <div className="PatientAdmissionFlex1">
              <div className="PatientAdmissionBox1">
                <div className="PatientAdmissionH3-1">
                  <h3>
                    {happyPatients}
                    <sup>+</sup>
                  </h3>
                </div>
                <div className="PatientAdmissionDesc1">
                  <p>Happy Patients</p>
                </div>
                <div className="PatientAdmissionImg1">
                  {(happyPatientsImg || staticImage) && (
                    <Media
                      imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                      resource={happyPatientsImg}
                      src={staticImage}
                    />
                  )}
                </div>
              </div>

              <div className="PatientAdmissionBox2">
                <div className="PatientAdmissionH3-2">
                  <h3>
                    {orthoSurgeries}
                    <sup>+</sup>
                  </h3>
                </div>
                <div className="PatientAdmissionDesc2">
                  <p>Orthopaedic Surgeries</p>
                </div>
                <div className="PatientAdmissionImg2">
                  {(orthoSurgeriesImg || staticImage) && (
                    <Media
                      imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                      resource={orthoSurgeriesImg}
                      src={staticImage}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="PatientAdmissionFlex2">
              <div className="PatientAdmissionBox1">
                <div className="PatientAdmissionH3-1">
                  <h3>
                    {normalDeliveries}
                    <sup>+</sup>
                  </h3>
                </div>
                <div className="PatientAdmissionDesc1">
                  <p>Normal Deliveries</p>
                </div>
                <div className="PatientAdmissionImg1">
                  {(normalDeliveriesImg || staticImage) && (
                    <Media
                      imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                      resource={normalDeliveriesImg}
                      src={staticImage}
                    />
                  )}
                </div>
              </div>

              <div className="PatientAdmissionBox2">
                <div className="PatientAdmissionH3-2">
                  <h3>
                    {obstetricSurgeries}
                    <sup>+</sup>
                  </h3>
                </div>
                <div className="PatientAdmissionDesc2">
                  <p>Obstetric & Gynaecological Surgeries</p>
                </div>
                <div className="PatientAdmissionImg2">
                  {(obstetricSurgeriesImg || staticImage) && (
                    <Media
                      imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
                      resource={obstetricSurgeriesImg}
                      src={staticImage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

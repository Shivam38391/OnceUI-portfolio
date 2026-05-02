import { Badge, Button, Icon, Row } from '@once-ui-system/core'
import React from 'react'

import { person } from '@/resources'
import Link from 'next/link'
import { FaDownLong } from 'react-icons/fa6'
import { GoDownload } from 'react-icons/go'

type Props = {}

const Resumedownload = (props: Props) => {


  const pdfUrl = person.resume; // Replace with your PDF file path
  //   const filename = 'example.pdf'; // Replace with your desired filename



  return (
    <>

      <Link href={pdfUrl} download target='_blank' style={{ textDecoration: 'none' }}>


        <Badge
          background="brand-alpha-weak"
          paddingX="12"
          paddingY="4"
          onBackground="neutral-strong"
          textVariant="label-default-s"
          arrow={false}
        >
          <Row  className=' font-bold'  paddingY="2">


            Download Resume

            <GoDownload className=' ml-4' size={15}   width={10} />

          </Row>
        </Badge>


      </Link>




    </>
  )
}

export default Resumedownload
import { Button } from '@once-ui-system/core'
import React from 'react'

import { person } from '@/resources'
import Link from 'next/link'

type Props = {}

const Resumedownload = (props: Props) => {


      const pdfUrl = person.resume; // Replace with your PDF file path
//   const filename = 'example.pdf'; // Replace with your desired filename



  return (
    <>

    <Link  href={pdfUrl} download target='_blank' style={{ textDecoration: 'none' }}>
              <Button

            id="Resume"
            data-border="rounded"
            href={""}
            variant="primary"
            size="s"
            weight="default"
            
            
          >

            
            Download resume
          </Button>
    </Link>
    
    

          
    </>
  )
}

export default Resumedownload
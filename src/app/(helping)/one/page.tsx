// 'use client'


// import { Button } from '@/components/ui/button'
// import { SignInButton, useOrganization } from '@clerk/nextjs'
// import { useMutation, useQuery } from 'convex/react'
// import React from 'react'
// import { api } from '../../../../convex/_generated/api'

// function one() {

//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const {organization} = useOrganization()

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const files = useQuery(api.files.getFiles,
//      organization?.id ? {orgId:  organization.id} :"skip");

//  // eslint-disable-next-line react-hooks/rules-of-hooks
//  const createFile = useMutation(api.files.createFile)
//   return (
//       <div>one
//       <SignInButton mode="modal"/>
      
      
//        {files?.map((files)=>{
//       return <div key={files._id}>{files.name}</div>
//       })
//       } 
//       <Button onClick={()=>{
      
//         if (!organization?.id){
//           return
//         }
      
      
//         createFile({
//           name: 'ola',
//           type: 'image', // or 'csv' or 'pdf'
//           orgId: organization.id,
//           fileId: " " // replace with the actual fileId value
//         })
//       }}>clickme</Button>
//       </div>
//   )
// }

// export default one
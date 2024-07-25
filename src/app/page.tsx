'use client'

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
 const createFile = useMutation(api.file.createFile)
  const files = useQuery(api.file.getFiles)
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInButton mode="modal"/>


    {files?.map((file)=>{
      return <div key={file._id}>{file.name}</div>
    })
      }
      <Button onClick={()=>{
        createFile({name: 'ola'})
      }}>clickme</Button>
    </main>
    </>
  );
}

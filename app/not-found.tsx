"use client";

import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href="/">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}

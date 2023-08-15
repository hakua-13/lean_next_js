import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div>first-post</div>
      <h2>
        <Link href="/">ホームに戻る</Link>
      </h2>
    </>
  )
}

export default Page;
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Muhamad Muzani</h1>
      <Link href='/users' ><a>Lihat Users</a></Link>
      <br/>
      <Link href='/posts' ><a>Lihat Postingan</a></Link>
      <br/>
      <Link href='/product' ><a>Lihat Product</a></Link>
      <br/>
      <Link href='/news' ><a>Lihat News</a></Link>
    </div>
  )
}

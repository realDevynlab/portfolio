import Image from 'next/image'
import authorImage from '@/public/images/authors/laban.webp'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Laban.</h1>
        <p className='text-muted-foreground mt-3 font-light'>
          I&#39;m a software engineer based in Nairobi, Kenya. I&#39;m passionate about learning new technologies and
          sharing knowledge with others.
        </p>
      </div>
      <div className='relative hidden md:block'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Laban Kosgey'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}

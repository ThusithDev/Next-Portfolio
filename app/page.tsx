import Intro from '@/components/intro'
import Education from '@/components/education'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = '#This is a markdown heading'
    
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentProjects />
        <Education />
        <RecentPosts />
      </div>
    </section>
  )
};
import Head from 'next/head'

import { Inter } from 'next/font/google'

import Layout from '@/components/Layout'

import Terms from '@/components/Terms'
const inter = Inter({ subsets: ['latin'] })

export default function Trade() {
  return (
    <>
     
      <>
        <Layout>
        <Terms/>
        </Layout>
      </>
    </>
  )
}

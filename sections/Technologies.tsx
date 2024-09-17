import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import NextJs from '@/assets/brands/nextjs-ar21.svg'
import NodeJs from '@/assets/brands/nodejs-ar21.svg'
import ReactJs from '@/assets/brands/reactjs-ar21.svg'
import ExpressJs from '@/assets/brands/expressjs-ar21.svg'
import MongoDB from '@/assets/brands/mongodb-ar21.svg'
import SpringBoot from '@/assets/brands/springio-ar21.svg'
import PostgreeSql from '@/assets/brands/postgresql-ar21.svg'
import TailwindCSS from '@/assets/brands/tailwindcss-ar21.svg'
import Flutter from '@/assets/brands/flutterio-ar21.svg'
import Mysql from '@/assets/brands/mysql-ar21.svg'
import Html5 from '@/assets/brands/html5-ar21.svg'
import Python from '@/assets/brands/python-ar21.svg'
import Java from '@/assets/brands/java-ar21.svg'
import Aws from '@/assets/brands/amazon_aws-ar21.svg'
import Git from '@/assets/brands/git-scm-ar21.svg'
import Docker from '@/assets/brands/docker-ar21.svg'
import Kubernetes from '@/assets/brands/kubernetes-ar21.svg'
import Vercel from '@/assets/brands/vercel-ar21.svg'
import Firebase from '@/assets/brands/firebase-ar21.svg'
import Jira from '@/assets/brands/atlassian_jira-ar21.svg'
import Figma from '@/assets/brands/figma-ar21.svg'
import Wordpress from '@/assets/brands/wordpress-ar21.svg'
import Shopify from '@/assets/brands/shopify-ar21.svg'
import GoogleAnalytics from '@/assets/brands/google_analytics-ar21.svg'


const Technologies = () => {
    const technologiesData = [
        {
            icon: <Image src={ReactJs} alt='ReactJS'/>,
            link: "https://react.dev/"
        },
        {
            icon: <Image src={NextJs} alt='NextJS'/>,
            link: "https://nextjs.org/"
        },
        {
            icon: <Image src={NodeJs} alt='NodeJS'/>,
            link: "https://nodejs.org/en"
        },
        {
            icon: <Image src={ExpressJs} alt='ExpressJS'/>,
            link: "https://expressjs.com/"
        },
        {
            icon: <Image src={MongoDB} alt='MongoDB'/>,
            link: "https://www.mongodb.com/"
        },
        {
            icon: <Image src={SpringBoot} alt='SpringBoot'/>,
            link: "https://spring.io/"
        },
        {
            icon: <Image src={PostgreeSql} alt='PostgreeSQL'/>,
            link: "https://www.postgresql.org/"
        },
        {
            icon: <Image src={TailwindCSS} alt='TailwindCSS'/>,
            link: "https://tailwindcss.com/"
        },
        {
            icon: <Image src={Flutter} alt='Flutter'/>,
            link: "https://flutter.dev/"
        },
        {
            icon: <Image src={Mysql} alt='MySQL'/>,
            link: "https://www.mysql.com/"
        },
        {
            icon: <Image src={Html5} alt='HTML5'/>,
            link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        },
        {
            icon: <Image src={Python} alt='Python'/>,
            link: "https://www.python.org/"
        },
        {
            icon: <Image src={Java} alt='Java'/>,
            link: "https://www.oracle.com/java/"
        },
        {
            icon: <Image src={Aws} alt='AWS' />,
            link: "https://aws.amazon.com/"
        },
        {
            icon: <Image src={Git} alt='Git' />,
            link: "https://git-scm.com/"
        },
        {
            icon: <Image src={Docker} alt='Docker' />,
            link: "https://www.docker.com/"
        },
        {
            icon: <Image src={Kubernetes} alt='Kubernetes' />,
            link: "https://kubernetes.io/"
        },
        {
            icon: <Image src={Vercel} alt='Vercel' />,
            link: "https://vercel.com/"
        },
        {
            icon: <Image src={Firebase} alt='Firebase' />,
            link: "https://firebase.google.com/"
        },
        {
            icon: <Image src={Jira} alt='Jira' />,
            link: "https://www.atlassian.com/software/jira"
        },
        {
            icon: <Image src={Figma} alt='Figma' />,
            link: "https://figma.com/"
        },
        {
            icon: <Image src={Wordpress} alt='Wordpress' />,
            link: "https://wordpress.org"
        },
        {
            icon: <Image src={Shopify} alt='Shopify' />,
            link: "https://shopify.com"
        },
        {
            icon: <Image src={GoogleAnalytics} alt='Google-Analytics' />,
            link: "https://developers.google.com/analytics"
        }

    ]
    return (
        <section className='bg-bg-1 py-16'>
            <div className='container'>
                <h2 className='text-text-1 text-center text-3xl font-bold mb-4 capitalize'>Powering Innovation with Cutting-Edge <span className='text-primary'>Tools</span> & Proven <span className='text-primary'>Technologies</span></h2>
                <p className='text-text-2/80 text-center text-md mb-10'>We select the most suitable tools and technologies based on your business needs ensuring security, scalability, robustness, cost-efficiency, and optimal performance</p>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center items-center'>
                    {technologiesData.map((brand, index) => (
                        <div key={index} className='p-2 rounded-xl hover:shadow hover:shadow-primary'>
                                    <Link href={brand.link || '#'} target='blank_'> {brand.icon}</Link>
                        </div>
                    ))}
                </div>
            </div>

        </section >
    )
}

export default Technologies
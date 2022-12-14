import Head from 'next/head'

const HeadPages = ( { title, description })  => {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
    </>
}

export default HeadPages
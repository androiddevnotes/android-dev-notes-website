import BrowserOnly from '@docusaurus/BrowserOnly'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'

const RandomUrl = () => {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout title="A random page in Android Dev Notes!" description={siteConfig.tagline}>
            <>
                <main>
                    <BrowserOnly>
                        {() => {
                            if (process.env.NODE_ENV === 'development') {
                                const corsProxy = 'https://cors-anywhere.herokuapp.com/';
                                fetch(corsProxy + 'https://www.androiddevnotes.com/sitemap.xml')
                                    .then(response => response.text())
                                    .then(sitemapXml => {
                                        const parser = new DOMParser();
                                        const xmlDoc = parser.parseFromString(sitemapXml, 'text/xml');

                                        const locElements = xmlDoc.getElementsByTagName('loc');
                                        const randomIndex = Math.floor(Math.random() * locElements.length);
                                        const randomUrl = locElements[randomIndex].textContent;

                                        window.location.href = randomUrl;
                                    })
                                    .catch(error => console.error(error));
                            } else {
                                fetch(siteConfig.url + siteConfig.baseUrl + 'sitemap.xml')
                                    .then(response => response.text())
                                    .then(sitemapXml => {
                                        const parser = new DOMParser();
                                        const xmlDoc = parser.parseFromString(sitemapXml, 'text/xml');

                                        const locElements = xmlDoc.getElementsByTagName('loc');
                                        const randomIndex = Math.floor(Math.random() * locElements.length);
                                        const randomUrl = locElements[randomIndex].textContent;

                                        window.location.href = randomUrl;
                                    })
                                    .catch(error => console.error(error));
                            }

                            return (
                                <div className={styles.container}>
                                    <button
                                        className={styles.diceButton}
                                        onClick={() => {
                                            window.location.href = "/"
                                        }}
                                    >
                                        <div className={styles.dice}>💿</div>
                                    </button>
                                </div>
                            )
                        }}
                    </BrowserOnly>
                </main>
            </>
        </Layout>
    )
}

export default RandomUrl

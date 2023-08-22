import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout pageTitle='Home Page'>
            <p>Home page!|</p>
        </Layout>
    )
}

export const Head = () => <title>Home</title>

export default IndexPage;

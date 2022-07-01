import Layout from 'components/Layout';
import Head from 'next/head';

const Header=()=>{
    <div>
        <h2>This is the Header</h2>
    </div>
}

const Lay=()=>{
    return(
        <Layout>
            <Header/>
            <div>
                Welcome to layout
            </div>
        </Layout>
    )
}

export default Lay
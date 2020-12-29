import { fetchEntries } from '../../utils/contentful'

const Sneaker = ({ data }) => {
  return (
    <>
      {data.title} - {data.year}
    </>
  );
}

export default Sneaker;

export async function getStaticProps({ params }) {
  const res = await fetchEntries({
    content_type: 'sneakers',
    'fields.slug[in]': params.index,
    limit: 1,
  })

  return { props: { data: res[0].fields },
  }
}

export async function getStaticPaths() {
  const res = await fetchEntries({
    content_type: 'sneakers'
  })

  return {
    paths: res.map(({fields}) => `/sneaker/${fields.slug}`),
    fallback: false,
  }
}